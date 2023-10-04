export const ADMIN_LOGIN_URL = "/admin/login";

export const ADMIN_LOGOUT_URL = "/admin/logout";

export const ADMIN_ROOT_URL = "/admin";

export const COOKIE_MAX_AGE = 60_000;

export const JWT_SECRET = new TextEncoder().encode(
  Deno.env.get("JWT_SECRET") ?? "LDZH3yUEsQ",
);

export const JWT_ALG = "HS256";

export const USER_SESSION_COOKIE_NAME = "userSession";

export const BCRYPT_SALT = 8;

export const HOST = Deno.env.get("HOST") ?? "http://localhost:8000";
