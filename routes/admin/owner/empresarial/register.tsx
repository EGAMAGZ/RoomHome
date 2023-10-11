import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { PropietariosEmpresariales } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Alert } from "@/components/Alerts.tsx";
import NewOwnerForm from "@/islands/owner/empresarial/NewOwnerForm.tsx";

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
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.errors && <Alert message={props.data.errors} />}
        <span class="text-xl font-semibold">
          Registrar Propietarios Empresariales
        </span>
        <NewOwnerForm />
      </div>
    </div>
  );
}
