import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { setCookie } from "$cookies";
import {
  ADMIN_ROOT_URL,
  COOKIE_MAX_AGE,
  ROOT_URL,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import LoginForm from "@/islands/LoginForm.tsx";
import { ApiResponse } from "@/model/api-response.ts";
import { Alert } from "@/components/Alerts.tsx";
import Header from "@/components/Header.tsx";

export const handler: Handlers<{ errors: string }> = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const url = new URL(req.url);
    const res = await fetch(`${url.origin}/api/auth/employee/login`, {
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
    headers.append("Location", ADMIN_ROOT_URL);

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function LoginPage(props: PageProps<{ errors: string }>) {
  return (
    <>
      <Header imgUrl="/img/little_house.jpg" text="Bienvenido" />
      <div class="my-4">
        {props.data.errors && <Alert message={props.data.errors} />}
      </div>
      <div class="flex justify-center">
        <form method="POST">
          <LoginForm />
        </form>
      </div>
    </>
  );
}

