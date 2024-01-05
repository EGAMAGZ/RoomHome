export const ADMIN_LOGIN_URL = "/admin/login";

export const ADMIN_ROOT_URL = "/admin";

export const COOKIE_MAX_AGE = 60_000;

export const JWT_SECRET = new TextEncoder().encode(
  Deno.env.get("JWT_SECRET") ?? "LDZH3yUEsQ",
);

export const JWT_ALG = "HS256";

export const USER_SESSION_COOKIE_NAME = "userSession";

export const ADMIN_SESSION_COOKIE_NAME = "adminSession";

export const BCRYPT_SALT = 8;

export const ROOT_URL = "/";

export const LOGIN_URL = "/login";

export const LOGOUT_URL = "/logout";

export const REGISTER_URL = "/register";

export const APP_VERSION = "1.0.12";