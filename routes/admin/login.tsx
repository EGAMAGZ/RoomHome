import { HandlerContext, Handlers } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";
import { setCookie } from "$cookies";
import {
  ADMIN_ROOT_URL,
  COOKIE_MAX_AGE,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { signJWT } from "@/utils/jwt.ts";
import LoginForm from "@/islands/LoginForm.tsx";

export const handler: Handlers<any, SessionState> = {
  async POST(req: Request, _ctx: HandlerContext<any, SessionState>) {
    const formData = await req.formData();
    console.log(formData);

    const jwt = await signJWT({
      id: 1,
      email: "ejemplo@ejemplo.com",
    });

    const headers = new Headers(req.headers);
    setCookie(headers, {
      name: USER_SESSION_COOKIE_NAME,
      value: jwt,
      maxAge: COOKIE_MAX_AGE,
    });
    headers.append("Location", ADMIN_ROOT_URL);

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
        <div>
          <LoginForm />
        </div>
      </form>
    </div>
  );
}
