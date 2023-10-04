import { PageProps, RouteContext } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import ListProperties from "@/islands/property/ListProperties.tsx";

export default function PropertyPage(props: PageProps) {
  const properties = useSignal<InmueblesAlquiler[]>([]);

  return (
    <div>
      <div class="flex">
        <span>Propiedades</span>
        <a href="/admin/property/register">Nueva propiedad</a>
      </div>
      <ListProperties properties={properties} origin={props.url.origin} />
    </div>
  );
}
