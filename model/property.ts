import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";

export type InmueblesAlquilerWithPropietary = InmueblesAlquiler & {
  propietarioEmpresarial: { nom_empresa: string } | null;
  propietarioPrivado: { nom_propietario: string } | null;
};
