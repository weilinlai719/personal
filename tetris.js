const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(30, 30);

const nextCanvas = document.getElementById('next');
const nextContext = nextCanvas.getContext('2d');
nextContext.scale(30, 30);

// 1. 遊戲狀態與設定
const colors = [
    null,
    '#FF0D72', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E0D', '#FFE138', '#3877FF',
];

const keys = { left: false, right: false, down: false };
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
let moveCounter = 0;
const moveInterval = 60; // 連續移動速度 (ms)
let requestID;
let isGameStarted = false;

const player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    nextMatrix: null,
    score: 0,
    level: 1,
    totalLines: 0,
};

const arena = Array.from({ length: 20 }, () => Array(12).fill(0));

// 2. 方塊生成
function createPiece(type) {
    if (type === 'T') return [[0, 1, 0], [1, 1, 1], [0, 0, 0]];
    if (type === 'I') return [[0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0]];
    if (type === 'S') return [[0, 3, 3], [3, 3, 0], [0, 0, 0]];
    if (type === 'Z') return [[4, 4, 0], [0, 4, 4], [0, 0, 0]];
    if (type === 'L') return [[0, 5, 0], [0, 5, 0], [0, 5, 5]];
    if (type === 'J') return [[0, 6, 0], [0, 6, 0], [6, 6, 0]];
    if (type === 'O') return [[7, 7], [7, 7]];
}

// 3. 碰撞與移動核心
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

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) {
        player.pos.x -= dir;
        return false;
    }
    moveCounter = 0; // 重置計時器以獲得更好的手感
    return true;
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

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
    }
    if (dir > 0) matrix.forEach(row => row.reverse());
    else matrix.reverse();
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerHardDrop() {
    while (!collide(arena, player)) {
        player.pos.y++;
    }
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
    if (window.navigator.vibrate) window.navigator.vibrate([20, 10, 20]);
}

// 4. 投影功能 (Ghost Piece)
function getGhost(player, arena) {
    const ghost = {
        pos: { x: player.pos.x, y: player.pos.y },
        matrix: player.matrix
    };
    while (!collide(arena, ghost)) {
        ghost.pos.y++;
    }
    ghost.pos.y--;
    return ghost;
}

// 5. 繪製邏輯
function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawGrid();

    const ghost = getGhost(player, arena);
    drawMatrix(context, ghost.matrix, ghost.pos, true); 
    drawMatrix(context, arena, { x: 0, y: 0 });
    drawMatrix(context, player.matrix, player.pos);
}

function drawMatrix(ctx, matrix, offset, isGhost = false) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                if (isGhost) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                    ctx.lineWidth = 0.05;
                    ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
                    ctx.strokeRect(x + offset.x, y + offset.y, 1, 1);
                } else {
                    ctx.fillStyle = colors[value];
                    ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            }
        });
    });
}

function drawGrid() {
    context.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    context.lineWidth = 0.02;
    for (let x = 0; x <= arena[0].length; x++) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, arena.length);
        context.stroke();
    }
    for (let y = 0; y <= arena.length; y++) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(arena[0].length, y);
        context.stroke();
    }
}

function drawNext() {
    nextContext.fillStyle = '#000';
    nextContext.fillRect(0, 0, nextCanvas.width, nextCanvas.height);
    const matrix = player.nextMatrix;
    const offset = {
        x: (nextCanvas.width / 30 - matrix[0].length) / 2,
        y: (nextCanvas.height / 30 - matrix.length) / 2
    };
    drawMatrix(nextContext, matrix, offset);
}

// 6. 遊戲流程
function arenaSweep() {
    let rowCount = 0;
    outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) continue outer;
        }
        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;
        rowCount++;
    }

    if (rowCount > 0) {
        player.totalLines += rowCount;
        player.score += rowCount * 10 * player.level;
        player.level = Math.floor(player.totalLines / 10) + 1;
        dropInterval = Math.max(50, 800 - (player.level - 1) * 90);
    }
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) arena[y + player.pos.y][x + player.pos.x] = value;
        });
    });
}

function playerReset() {
    const pieces = 'ILJOTSZ';
    if (!player.nextMatrix) {
        player.nextMatrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    }
    player.matrix = player.nextMatrix;
    player.nextMatrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);

    drawNext();
    if (collide(arena, player)) {
        cancelAnimationFrame(requestID);
        alert("遊戲結束！ 你的分數是: " + player.score);
        location.reload();
    }
}

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;

    // 持續移動邏輯
    moveCounter += deltaTime;
    if (moveCounter > moveInterval) {
        if (keys.left) playerMove(-1);
        if (keys.right) playerMove(1);
        if (keys.down) playerDrop();
        moveCounter = 0;
    }

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    draw();
    requestID = requestAnimationFrame(update);
}

function updateScore() {
    const scoreEl = document.getElementById('score');
    const levelEl = document.getElementById('level');
    if (scoreEl) scoreEl.innerText = "分數：" + player.score;
    if (levelEl) levelEl.innerText = "等級：" + player.level;
}

// 7. 事件監聽
document.addEventListener('keydown', event => {
   const blockedKeys = [32, 37, 38, 39, 40];
    if (blockedKeys.includes(event.keyCode)) {
        // 1. 立即停止瀏覽器的預設捲動行為
        event.preventDefault(); 
        // 2. 停止事件繼續向上冒泡
        event.stopPropagation(); 
    }
    if (event.repeat && (event.keyCode === 38 || event.keyCode === 32)) {
        return; 
    }

    if (event.keyCode === 37) { keys.left = true; playerMove(-1); }
    else if (event.keyCode === 39) { keys.right = true; playerMove(1); }
    else if (event.keyCode === 40) { keys.down = true; }
    else if (event.keyCode === 38) { playerRotate(1); }
    else if (event.keyCode === 32) { playerHardDrop(); }
});

document.addEventListener('keyup', event => {
    if (event.keyCode === 37) keys.left = false;
    if (event.keyCode === 39) keys.right = false;
    if (event.keyCode === 40) keys.down = false;
});

function bindBtn(id, action) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        action();
        if (window.navigator.vibrate) window.navigator.vibrate(15);
    }, { passive: false });
}

bindBtn('btnLeft', () => playerMove(-1));
bindBtn('btnRight', () => playerMove(1));
bindBtn('btnDown', () => playerDrop());
bindBtn('btnRotate', () => playerRotate(1));
bindBtn('btnHardDrop', () => playerHardDrop());

const startBtn = document.getElementById('startButton');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        if (!isGameStarted) {
            isGameStarted = true;
            playerReset();
            updateScore();
            update();
        }
    });
}






