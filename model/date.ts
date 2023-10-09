import {
  Citas,
  Clientes,
  InmueblesAlquiler,
} from "@/generated/client/deno/edge.ts";

export type DateWithClientAndProperty = Citas & {
  inmueble: InmueblesAlquiler;
  cliente: Clientes;
};
