import { HandlerContext, Handlers } from "$fresh/server.ts";
import { UserLogin } from "@/model/user.ts";
import { LoginUserSchema } from "@/schema/user.ts";
import prismaClient from "@/database/prisma.ts";
import { signJWT } from "@/utils/jwt.ts";
import { compareHash } from "@/utils/hash.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as UserLogin;

    const result: UserLogin = LoginUserSchema.parse(body);

    const user = await prismaClient.empleados.findFirst({
      where: {
        email_empleado: result.email,
      },
      select: {
        num_empleado: true,
        email_empleado: true,
        pass_empleado: true,
        nom_empleado: true,
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

    const isSame = await compareHash(result.password, user.pass_empleado);

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
      id: user.num_empleado,
      email: user.email_empleado,
      empleado: true,
      name: user.nom_empleado
    });

    return new Response(
      JSON.stringify({
        data: jwt,
        message: "El usuario ha sido autenticado exitosamente.",
      }),
      {
        status: 200,
      },
    );
  },
};
