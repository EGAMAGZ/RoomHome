import { z } from "zod";
import { Citas, Clientes, InmueblesAlquiler } from "@/generated/client/deno/edge.ts";

export const RequestDateSchema = z.object({
  userId: z.coerce.number({
    invalid_type_error: "El parametro 'userId' debe ser un numero",
    required_error: "El parametro 'userId' es requerido",
  }),
  propertyId: z.coerce.number({
    invalid_type_error: "El parametro 'propertId' debe ser un numero",
    required_error: "El parametro 'propertId' es requerido",
  }),
});

export type DateWithClientAndProperty = Citas & {
  inmueble: InmueblesAlquiler;
  cliente: Clientes;
};
