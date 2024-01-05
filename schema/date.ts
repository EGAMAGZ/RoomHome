import { z } from "zod";
import {
  Citas,
  Clientes,
  InmueblesAlquiler,
} from "@/generated/client/deno/edge.ts";
import { dateTransform } from "@/utils/date.ts";

export const RequestDateSchema = z.object({
  userId: z.coerce.number({
    invalid_type_error: "El parametro 'userId' debe ser un número",
    required_error: "El parametro 'userId' es requerido",
  }),
  propertyId: z.coerce.number({
    invalid_type_error: "El parametro 'propertId' debe ser un número",
    required_error: "El parametro 'propertId' es requerido",
  }),
});

export type DateWithClientAndProperty = Citas & {
  inmueble: InmueblesAlquiler;
  cliente: Clientes;
};

export const AsigDateSchema = z.object({
  fech_cita: z.string({
    invalid_type_error: "La fecha debe ser un string",
    required_error: "La fecha es requerida",
  }).transform(dateTransform),
});
