import { HandlerContext, Handlers } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";
import { setCookie } from "$cookies";
import { ADMIN_ROOT_URL } from "@/utils/config.ts";

export const handler: Handlers<any, SessionState> = {
  async POST(req: Request, _ctx: HandlerContext<any, SessionState>) {
    const headers = new Headers(req.headers);
    setCookie(headers, {
      name: "userSession",
      value: "sample",
      maxAge: 60 * 60 * 24 * 7,
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
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
}
