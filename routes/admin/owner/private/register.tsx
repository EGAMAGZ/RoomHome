import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { PropietariosPrivados } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/model/api-response.ts";
import { Alert } from "@/components/Alerts.tsx";
import NewOwnerForm from "../../../../islands/owner/private/NewOwnerForm.tsx";

export const handler: Handlers<{ errors: string }> = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },

  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const url = new URL(req.url);
    const res = await fetch(`${url.origin}/api/owner/private`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name")?.toString(),
        address: formData.get("address")?.toString(),
        phone: formData.get("phone")?.toString(),
      }),
    });

    const { data, message } = (await res.json()) as ApiResponse<
      PropietariosPrivados
    >;

    if (res.status !== 200) {
      return ctx.render({
        errors: message,
      });
    }

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/admin/owner/private",
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
          Registrar Propietarios Privados
        </span>
        <NewOwnerForm />
      </div>
    </div>
  );
}
