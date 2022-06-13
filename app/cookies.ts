import { createCookie } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const themeCookie = createCookie("user-theme", {
  maxAge: 604_800 // one week
});
