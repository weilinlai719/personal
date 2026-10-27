import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // 僅保護文章編輯頁面
  if (url.pathname.startsWith("/personal/post/edit")) {
    // 💡 使用 as string 或是確保型別安全讀取 value
    const cookieHeader = context.cookies.get("admin_session");
    const authCookie = cookieHeader ? cookieHeader.value : undefined;

    // 若沒有正確的 Session/Token，重新導向到首頁或登入頁
    if (authCookie !== "valid_session_token") {
      return context.redirect("/");
    }
  }

    const response = await next();

  // 英文路徑找不到頁面 → 顯示英文版 404（保留 404 狀態碼）
  if (
    response.status === 404 &&
    url.pathname.startsWith("/en/") &&
    !url.pathname.startsWith("/en/404")
  ) {
    const en404 = await context.rewrite("/en/404");
    return new Response(en404.body, { status: 404, headers: en404.headers });
  }
  return next();
});