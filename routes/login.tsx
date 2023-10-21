import LoginForm from "@/islands/LoginForm.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import {
  COOKIE_MAX_AGE,
  ROOT_URL,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { setCookie } from "$cookies";
import Header from "@/components/Header.tsx";
import { UserLoginSchema } from "@/schema/user.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import SessionState from "@/schema/session-state.ts";
import { compareHash } from "@/utils/hash.ts";
import { signJWT } from "@/utils/jwt.ts";
import { Data } from "@/schema/data.ts";

export const handler: Handlers<Data, SessionState> = {
  async GET(
    req: Request,
    ctx: HandlerContext<Data, SessionState>,
  ) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(
    req: Request,
    ctx: HandlerContext<Data, SessionState>,
  ) {
    const formData = await req.formData();

    try {
      const { email, password } = UserLoginSchema.parse(
        Object.fromEntries(formData.entries()),
      );

      const client = await prismaClient.clientes.findFirst({
        where: {
          email_cliente: email,
        },
        select: {
          email_cliente: true,
          pass_cliente: true,
          num_cliente: true,
          nom_cliente: true,
        },
      });
      

      if (client === null) {
        return await ctx.render({
          error: "Correo o contraseña son incorrectos",
        });
      }

      const isSame = compareHash(password, client.pass_cliente);

      if (!isSame) {
        return await ctx.render({
          error: "Correo o contraseña son incorrectos",
        });
      }

      const jwt = await signJWT({
        id: client.num_cliente,
        email: client.email_cliente,
        empleado: false,
        name: client.nom_cliente,
      });

      const headers = new Headers(req.headers);

      setCookie(headers, {
        name: USER_SESSION_COOKIE_NAME,
        value: jwt,
        maxAge: COOKIE_MAX_AGE,
        path: ROOT_URL,
      });

      headers.append("Location", ROOT_URL);

      return new Response(null, {
        status: 303,
        headers,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return await ctx.render({
          error: error.issues.map((issue) => issue.message).join(", "),
        });
      }
      throw error;
    }
  },
};

export default function LoginPage(props: PageProps<Data, SessionState>) {
  return (
    <>
      <Header imgUrl="/img/little_red_house.jpg" text="Bienvenido" />
      <div class="flex justify-center p-4">
        <LoginForm error={props.data.error} />
      </div>
    </>
  );
}
