import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { setCookie } from "$cookies";
import {
  ADMIN_ROOT_URL,
  COOKIE_MAX_AGE,
  ROOT_URL,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import LoginForm from "@/islands/LoginForm.tsx";
import Header from "@/components/Header.tsx";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import { UserLoginSchema } from "@/schema/user.ts";
import prismaClient from "@/database/prisma.ts";
import { compareHash } from "@/utils/hash.ts";
import { signJWT } from "@/utils/jwt.ts";
import { z } from "zod";

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();

    try {
      const { email, password } = UserLoginSchema.parse(
        Object.fromEntries(formData.entries()),
      );

      const employee = await prismaClient.empleados.findFirst({
        where: {
          email_empleado: email,
        },
        select: {
          email_empleado: true,
          pass_empleado: true,
          num_empleado: true,
          nom_empleado: true,
        },
      });

      if (employee === null) {
        return await ctx.render({
          error: "Correo o contraseña son incorrectos",
        });
      }

      const isSame = compareHash(password, employee.pass_empleado);

      if (!isSame) {
        return await ctx.render({
          error: "Correo o contraseña son incorrectos",
        });
      }

      const jwt = await signJWT({
        id: employee.num_empleado,
        email: employee.email_empleado,
        empleado: true,
        name: employee.nom_empleado,
      });

      const headers = new Headers(req.headers);
      setCookie(headers, {
        name: USER_SESSION_COOKIE_NAME,
        value: jwt,
        maxAge: COOKIE_MAX_AGE,
        path: ROOT_URL,
      });
      headers.append("Location", ADMIN_ROOT_URL);

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
      <Header imgUrl="/img/little_house.jpg" text="Bienvenido" />
      <div class="flex justify-center">
        <LoginForm error={props.data.error} showRegisterAnchor={false} />
      </div>
    </>
  );
}
