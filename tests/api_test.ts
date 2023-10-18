import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";

import { assert, assertEquals } from "$std/testing/asserts.ts";
import manifest from "@/fresh.gen.ts";
import { ApiResponse } from "@/schema/api-response.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("API Test", async (t) => {
  const handler = await createHandler(manifest);

  await t.step("#1 GET /api", async () => {
    const req = new Request("http://127.0.0.1/api", {
      method: "GET",
    });

    const res = await handler(req, CONN_INFO);
    const body = (await res.json()) as ApiResponse<string>;

    assertEquals(body, {
      data: "Hello World, I'm a teapot",
      message: "API is working",
    });
  });
});
