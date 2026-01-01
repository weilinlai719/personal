const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(30, 30);//遊戲畫布
const nextCanvas = document.getElementById('next');
const nextContext = nextCanvas.getContext('2d');
nextContext.scale(30, 30); //預覽

let requestID; // 全域宣告影格 ID，以便隨時停止

// 1. 定義顏色
const colors = [
    null,
    '#FF0D72', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E0D', '#FFE138', '#3877FF',
];

// 2. 建立方塊
function createPiece(type) {
    if (type === 'T') return [[0, 1, 0], [1, 1, 1], [0, 0, 0]];
    if (type === 'I') return [[0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0]];
    if (type === 'S') return [[0, 3, 3], [3, 3, 0], [0, 0, 0]];
    if (type === 'Z') return [[4, 4, 0], [0, 4, 4], [0, 0, 0]];
    if (type === 'L') return [[0, 5, 0], [0, 5, 0], [0, 5, 5]];
    if (type === 'J') return [[0, 6, 0], [0, 6, 0], [6, 6, 0]];
    if (type === 'O') return [[7, 7], [7, 7]];
}
function drawGrid() {
    context.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // 設定線條顏色為半透明白色
    context.lineWidth = 0.05; // 因為我們用了 context.scale(30)，所以線條要設得很細

    // 畫垂直線
    for (let x = 0; x <= arena[0].length; x++) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, arena.length);
        context.stroke();
    }

    // 畫水平線
    for (let y = 0; y <= arena.length; y++) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(arena[0].length, y);
        context.stroke();
    }
}
// 3. 繪製
function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

// 4. 碰撞與合併
function collide(arena, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) arena[y + player.pos.y][x + player.pos.x] = value;
        });
    });
}

// 5. 旋轉邏輯 (補上這部分)
function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
    }
    if (dir > 0) matrix.forEach(row => row.reverse());
    else matrix.reverse();
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

// 6. 消除與動作
function arenaSweep() {

    let rowCount = 0; // 這次消了幾行
    outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) continue outer;
        }
        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;
        
        rowCount++;
        totalLines++; // 累計總消行數
    }

    if (rowCount > 0) {
        // 分數算法：消越多行倍率越高
        player.score += rowCount * 10 * level; 
        
        // 升級邏輯：每消 10 行升一級
        let newLevel = Math.floor(totalLines / 10) + 1;
        if (newLevel > level) {
            level = newLevel;
            // 速度加快：每次升級減少 100ms，最低極限 100ms
            dropInterval = Math.max(100, 1000 - (level - 1) * 90);
        }
         updateScore();
    }
   
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
    }
    dropCounter = 0;
}

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) player.pos.x -= dir;
}

function playerReset() {
    const pieces = 'ILJOTSZ';
  // 如果是第一次啟動，先生成兩塊
    if (player.nextMatrix === null) {
        player.nextMatrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    }
    // 將「下一塊」交給玩家，並重新生成「新的下一塊」
    player.matrix = player.nextMatrix;
    player.nextMatrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
    drawNext();
    if (collide(arena, player)) {
        cancelAnimationFrame(requestID); // 停止動畫
        alert("遊戲結束！您的得分是：" + player.score);
        location.reload(); // 刷新網頁
    }
}

// 7. 循環控制
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
let level = 1;
let totalLines = 0;

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) playerDrop();

    draw();
    requestID = requestAnimationFrame(update);
}

function updateScore() {
    document.getElementById('score').innerText = "分數：" + player.score;
    document.getElementById('level').innerText = "等級：" + level;
}

const arena = Array.from({length: 20}, () => Array(12).fill(0));
const player = { pos: {x: 0, y: 0},matrix: null,nextMatrix: null, score: 0,};
// 鍵盤監聽（增加方向鍵上 = 旋轉）
document.addEventListener('keydown', event => {
    if (event.keyCode === 37) playerMove(-1);      // 左
    else if (event.keyCode === 39) playerMove(1);   // 右
    else if (event.keyCode === 40) playerDrop();    // 下
    else if (event.keyCode === 38) playerRotate(1); // 上 (旋轉)
});
function drawNext() {
    // 清空小畫布
    nextContext.fillStyle = '#000';
    nextContext.fillRect(0, 0, nextCanvas.width, nextCanvas.height);

    // 取得方塊並置中顯示在 4x4 的預覽格內
    const matrix = player.nextMatrix;
    
    // 計算置中位移
    const offset = {
        x: (nextCanvas.width / 30 - matrix[0].length) / 2,
        y: (nextCanvas.height / 30 - matrix.length) / 2
    };

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                nextContext.fillStyle = colors[value];
                nextContext.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}
let isGameStarted = false;
function startGame() {
    if (isGameStarted) return; // 防止重複啟動
    isGameStarted = true;
    playerReset();
    updateScore();
    update();
}

const startBtn = document.getElementById('startButton');
if (startBtn) {
    startBtn.addEventListener('click', startGame);
}