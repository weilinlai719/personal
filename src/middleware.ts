import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // 僅保護 /personal/post/edit 頁面
  if (url.pathname.startsWith("/post/edit")) {
    const authCookie = context.cookies.get("admin_session")?.value;

    // 若沒有正確的 Session/Token，直接重新導向到登入頁或首頁
    if (authCookie !== "valid_session_token") {
      return context.redirect("/login");
    }
  }

  return next();
});