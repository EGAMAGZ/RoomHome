import NewClient from "@/islands/client/NewClient.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Alert } from "@/components/Alerts.tsx";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/model/api-response.ts";

export const handler: Handlers<{ errors: string }> = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },

  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const url = new URL(req.url);
    const res = await fetch(`${url.origin}/api/auth/client`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name")?.toString(),
        phone: formData.get("phone")?.toString(),
        type: formData.get("type")?.toString(),
        amount: formData.get("amount")?.toString(),
        employee: formData.get("employee")?.toString(),
        office: formData.get("office")?.toString(),
        email: formData.get("email")?.toString(),
        password: formData.get("password")?.toString(),
      }),
    });

    const { data, message } = (await res.json()) as ApiResponse<
      Clientes
    >;

    if (res.status !== 200) {
      return ctx.render({
        errors: message,
      });
    }

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/admin/client",
      },
    });
  },
};

export default function RegisterClientPage(props: PageProps) {
  return (
    <div>
      {props.data.errors && <Alert message={props.data.errors} />}
      <span>Registrar Clientes</span>
      <form method="POST">
        <NewClient />
      </form>
    </div>
  );
}
