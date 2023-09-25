import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response(
      JSON.stringify({ data: "Hello World, I'm a teapot" }),
      {
        status: 418,
      },
    );
  },
};
