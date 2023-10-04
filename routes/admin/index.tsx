import { Handlers } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render();
  },
};

export default function AdminPage() {
  return (
    <div>
      <a href="/admin/property/">Propiedades</a>
    </div>
  );
}
