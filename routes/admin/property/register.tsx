import NewPropertyForm from "@/islands/property/NewProperty.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { ApiResponse } from "@/model/api-response.ts";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import { Alert } from "@/components/Alerts.tsx";

export const handler: Handlers<{ errors: string }> = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const url = new URL(req.url);
    const res = await fetch(`${url.origin}/api/property`, {
      method: "POST",
      body: JSON.stringify({
        address: formData.get("address")?.toString(),
        type: formData.get("type")?.toString(),
        rooms: formData.get("rooms")?.toString(),
        amount: formData.get("amount")?.toString(),
        privateOwner: formData.get("privateOwner")?.toString(),
        empresarialOwner: formData.get("empresarialOwner")?.toString(),
      }),
    });
    const { data, message } = (await res.json()) as ApiResponse<
      InmueblesAlquiler
    >;
    if (res.status !== 200) {
      return ctx.render({
        errors: message,
      });
    }

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/admin/property",
      },
    });
  },
};

export default function RegisterProperty(props: PageProps) {
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.errors && <Alert message={props.data.errors} />}
        <span class="text-xl font-semibold">Registrar Propiedades</span>
        <NewPropertyForm origin={props.url.origin} />
      </div>
    </div>
  );
}
