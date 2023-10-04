import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { ZodError } from "zod";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  console.log("middleware");
  try {
    const res = await ctx.next();
    return res;
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(
        JSON.stringify({
          message: error.issues.map((issue) => issue.message),
        }),
        {
          status: 400,
        },
      );
    }

    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
      }),
      {
        status: 500,
      },
    );
  }
}
