import NewClientForm from "@/islands/client/NewClientForm.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Alert } from "@/components/Alerts.tsx";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import SessionState from "@/schema/session-state.ts";

export const handler: Handlers<any, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<any, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },

  async POST(req: Request, ctx: HandlerContext<any, SessionState>) {
    const formData = await req.formData();
    const url = new URL(req.url);
    const res = await fetch(`${url.origin}/api/auth/client`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name")?.toString(),
        phone: formData.get("phone")?.toString(),
        type: formData.get("type")?.toString(),
        amount: formData.get("amount")?.toString(),
        employee: ctx.state.name,
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
        error: message,
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
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.error && <Alert message={props.data.error} />}
        <span class="text-xl font-semibold">Registrar Clientes</span>
        <NewClientForm />
      </div>
    </div>
  );
}
