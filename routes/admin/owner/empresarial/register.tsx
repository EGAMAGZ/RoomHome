import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { PropietariosEmpresariales } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/model/api-response.ts";
import { Alert } from "@/components/Alerts.tsx";
import NewOwner from "@/islands/owner/empresarial/NewOwner.tsx";

export const handler: Handlers<{ errors: string }> = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },

  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const url = new URL(req.url);

    const res = await fetch(`${url.origin}/api/owner/empresarial`, {
      method: "POST",
      body: JSON.stringify({
        company: formData.get("company")?.toString(),
        type: formData.get("type")?.toString(),
        address: formData.get("address")?.toString(),
        phone: formData.get("phone")?.toString(),
        name: formData.get("name")?.toString(),
      }),
    });

    const { data, message } = (await res.json()) as ApiResponse<
      PropietariosEmpresariales
    >;

    if (res.status !== 200) {
      return ctx.render({
        errors: message,
      });
    }

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/admin/owner/empresarial",
      },
    });
  },
};

export default function RegisterOwnerPage(props: PageProps) {
  return (
    <div>
      {props.data.errors && <Alert message={props.data.errors} />}
      <span>Registrar Propietarios Empresariales</span>
      <form method="POST">
        <NewOwner />
      </form>
    </div>
  );
}
