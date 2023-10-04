import { Handlers } from "$fresh/server.ts";
import { UserLogin } from "@/model/user.ts";
import { LoginUserSchema } from "@/schema/user.ts";
import prismaClient from "@/database/prisma.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as UserLogin;

    const result: UserLogin = LoginUserSchema.parse(body);

    const user = await prismaClient.empleados.findFirst({
      where: {},
    });

    return new Response();
  },
};
