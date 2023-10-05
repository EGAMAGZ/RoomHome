import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { ZodError } from "zod";

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext,
) {
  try {
    const res = await ctx.next();
    return res;
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(
        JSON.stringify({
          data: null,
          message: error.issues.map((issue) => issue.message),
        }),
        {
          status: 400,
        },
      );
    }
    
    return new Response(
      JSON.stringify({
        data: null,
        message: error,
      }),
      {
        status: 500,
      },
    );
  }
}
