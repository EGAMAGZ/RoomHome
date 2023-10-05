import { HandlerContext, Handlers } from "$fresh/server.ts";
import { UserLogin } from "@/model/user.ts";
import { LoginUserSchema } from "@/schema/user.ts";
import prismaClient from "@/database/prisma.ts";
import { compareHash } from "@/utils/hash.ts";
import { signJWT } from "@/utils/jwt.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as UserLogin;

    const result: UserLogin = LoginUserSchema.parse(body);

    const user = await prismaClient.clientes.findFirst({
      where: {
        email_cliente: result.email,
      },
      select: {
        email_cliente: true,
        pass_cliente: true,
        num_cliente: true,
      },
    });

    if (user === null) {
      return new Response(
        JSON.stringify({
          data: null,
          message: "El usuario o contraseña son incorrectos.",
        }),
        {
          status: 404,
        },
      );
    }

    const isSame = await compareHash(result.password, user.pass_cliente);
    if (!isSame) {
      return new Response(
        JSON.stringify(
          {
            data: null,
            message: "El usuario o contraseña son incorrectos.",
          },
        ),
        {
          status: 400,
        },
      );
    }

    const jwt = await signJWT({
      id: user.num_cliente,
      email: user.email_cliente,
      empleado: false,
    });

    return new Response(
      JSON.stringify({
        data: jwt,
        message: "El usuario fue encontrado exitosamente.",
      }),
      {
        status: 200,
      },
    );
  },
};
