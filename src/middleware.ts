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

  return next();
});