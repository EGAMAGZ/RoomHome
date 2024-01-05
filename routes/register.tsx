import Header from "@/components/Header.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import { UserRegisterSchema } from "@/schema/user.ts";
import prismaClient from "@/database/prisma.ts";
import RegisterForm from "@/islands/RegisterForm.tsx";
import { generateHash } from "@/utils/hash.ts";
import {
  COOKIE_MAX_AGE,
  ROOT_URL,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { z } from "zod";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { signJWT } from "@/utils/jwt.ts";
import { setCookie } from "$cookies";
import { Alert } from "@/components/Alerts.tsx";
import { generateError } from "@/utils/error.ts";

export const handler: Handlers<Data, SessionState> = {
  async GET(req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();

    try {
      const result = UserRegisterSchema.parse(
        Object.fromEntries(formData.entries()),
      );

      const client = await prismaClient.clientes.create({
        data: {
          nom_cliente: result.nom_cliente,
          tel_cliente: result.tel_cliente,
          tipo_inmueble: result.tipo_inmueble,
          importmax_inmueble: result.importmax_inmueble,
          sucregistro_cliente: result.sucregistro_cliente,
          email_cliente: result.email_cliente,
          pass_cliente: await generateHash(result.pass_cliente),
        },
      });

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
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return await ctx.render({
            error: generateError(error.meta)
          });
        }
      }
      throw error;
    }
  },
};

export default function RegisterPage(props: PageProps<Data, SessionState>) {
  return (
    <>
      <Header imgUrl="/img/zoe_koskinioti.jpg" text="¡Vamos a registrarte!" />
      <div class="flex justify-center">
        <RegisterForm error={props.data.error} />
      </div>
    </>
  );
}
