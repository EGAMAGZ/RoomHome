import LoginForm from "@/islands/LoginForm.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { ApiResponse } from "@/model/api-response.ts";
import {
  COOKIE_MAX_AGE,
  ROOT_URL,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { setCookie } from "$cookies";
import Header from "@/components/Header.tsx";
import { Alert } from "@/components/Alerts.tsx";

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

      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(JSON.stringify({
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    }));

    console.log(res);

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

export default function LoginPage(props: PageProps<{ errors: string }>) {
  return (
    <>
      <Header imgUrl="/img/little_red_house.jpg" text="Bienvenido" />
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
