import {
  HandlerContext,
  Handlers,
  PageProps,
  RouteContext,
} from "$fresh/server.ts";
import SessionState from "@/model/session.ts";
import { setCookie } from "$cookies";
import {
  ADMIN_ROOT_URL,
  COOKIE_MAX_AGE,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { signJWT } from "@/utils/jwt.ts";
import LoginForm from "@/islands/LoginForm.tsx";
import { ApiResponse } from "@/model/api-response.ts";
import { JwtContent } from "@/model/jwt.ts";
import { Alert } from "@/components/Alerts.tsx";

export const handler: Handlers<{ errors: string }> = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const res = await fetch(`http://localhost:8000/api/auth/employee/login`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email")?.toString(),
        password: formData.get("password")?.toString(),
      }),
    });

    const { data, message } = (await res.json()) as ApiResponse<string>;

    console.log(message);
    
    if (res.status !== 200) {
      return ctx.render({
        errors: message,
      });
    }

    console.log(data);

    const headers = new Headers(req.headers);
    setCookie(headers, {
      name: USER_SESSION_COOKIE_NAME,
      value: data,
      maxAge: COOKIE_MAX_AGE,
    });
    headers.append("Location", ADMIN_ROOT_URL);

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function LoginPage(props: PageProps<{ errors: string }>) {
  return (
    <div>
      {props.data.errors && <Alert message={props.data.errors} />}
      <form method="POST">
        <div>
          <LoginForm />
        </div>
      </form>
    </div>
  );
}
