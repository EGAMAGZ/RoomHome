import LoginForm from "@/islands/LoginForm.tsx";
import { HandlerContext, Handlers } from "$fresh/server.ts";
import { ApiResponse } from "@/model/api-response.ts";
import {
  COOKIE_MAX_AGE,
  ROOT_URL,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { setCookie } from "$cookies";

export const handler: Handlers<{ errors: string }> = {
  async GET(req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const url = new URL(req.url);
    const res = await fetch(`${url.origin}/api/auth/client/login`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email")?.toString(),
        password: formData.get("password")?.toString(),
      }),
    });

    const { data, message } = (await res.json()) as ApiResponse<string>;

    if (res.status !== 200) {
      return ctx.render({
        errors: message,
      });
    }

    const headers = new Headers(req.headers);

    setCookie(headers, {
      name: USER_SESSION_COOKIE_NAME,
      value: data,
      maxAge: COOKIE_MAX_AGE,
      path: ROOT_URL,
    });
    headers.append("Location", ROOT_URL);

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function LoginPage() {
  return (
    <div>
      <form method="POST">
        <LoginForm />
      </form>
    </div>
  );
}
