import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";

import { z } from "zod";
import { importAmountRegex, roomNumberRegex } from "@/utils/regex.ts";

export const RegisterPropertySchema = z.object({
  dir_inmueble: z.string({
    invalid_type_error: "Dirección debe ser un string",
    required_error: "Dirección es requerida",
  }).max(100, {
    message: "Dirección debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Dirección es requerida",
  }),
  tipo_inmueble: z.string({
    invalid_type_error: "Tipo de inmueble debe ser un string",
    required_error: "Tipo de inmueble es requerido",
  }).max(20, {
    message: "Tipo de inmueble debe tener menos de 20 caracteres",
  }).nonempty({
    message: "Tipo de inmueble es requerido",
  }),
  num_habitaciones: z.string()
    .regex(roomNumberRegex, {
      message: "Número de habitaciones inválido",
    }).transform((value, ctx) => {
      const parsed = parseInt(value);
      if (isNaN(parsed)) {
        ctx.addIssue({
          code: "custom",
          message: "Número de habitaciones debe ser un número",
        });
        return z.NEVER;
      }
      return parsed;
    }).refine((value) => value >= 1 && value <= 25, {
      message: "Número de habitaciones debe ser entre 1 y 25",
    }),
  import_mensual: z.string()
    .regex(importAmountRegex, {
      message: "Importe inválido",
    })
    .transform((value, ctx) => {
      const parsed = parseInt(value);
      if (isNaN(parsed)) {
        ctx.addIssue({
          code: "custom",
          message: "Importe debe ser un número",
        });
        return z.NEVER;
      }
      return parsed;
    }).refine((value) => value >= 1_000 && value <= 100_000, {
      message: "Importe debe ser entre 1,000 y 100,000",
    }),
  num_propietario: z.coerce.number({
    invalid_type_error: "Número de propietario debe ser un número",
    required_error: "Número de propietario es requerido",
  }).optional().transform((value) => value === 0 ? undefined : value),
  num_propietario_emp: z.coerce.number({
    invalid_type_error: "Número de propietario debe ser un número",
    required_error: "Número de propietario es requerido",
  }).optional().transform((value) => value === 0 ? undefined : value),
}).refine(
  (data) =>
    (data.num_propietario_emp !== undefined &&
      data.num_propietario === undefined) ||
    (data.num_propietario_emp === undefined &&
      data.num_propietario !== undefined),
  {
    message: "Debe seleccionar solo un propietario",
  },
);

export const PropertyFilterFormSchema = z.object({
  amount: z.coerce.number({
    invalid_type_error: "Precio debe ser un número",
    required_error: "Precio es requerido",
  }).min(1000, {
    message: "Precio debe ser mayor a 1000",
  }).max(100000, {
    message: "Precio debe ser menor a 100000",
  }),
  rooms: z.coerce.number({
    invalid_type_error: "Número de habitaciones debe ser un número",
    required_error: "Número de habitaciones es harmonido",
  }).min(1, {
    message: "Número de habitaciones debe tener al menos 1 habitacion",
  }).max(10, {
    message: "Número de habitaciones debe tener menos de 10 habitaciones",
  }),
});

export const PropertyFilterSchema = z.object({
  amount: z.coerce.number({
    invalid_type_error: "Precio debe ser un número",
    required_error: "Precio es requerido",
  }).min(1000, {
    message: "Precio debe ser mayor a 1000",
  }).max(100000, {
    message: "Precio debe ser menor a 100000",
  }),
  rooms: z.coerce.number({
    invalid_type_error: "Número de habitaciones debe ser un número",
    required_error: "Número de habitaciones es harmonido",
  }).min(1, {
    message: "Número de habitaciones debe tener al menos 1 habitacion",
  }).max(10, {
    message: "Número de habitaciones debe tener menos de 10 habitaciones",
  }),
  skip: z.coerce.number({
    invalid_type_error: "El parametro 'skip' debe ser un número",
    required_error: "El parametro 'skip' es requerido",
  }),
});

export type InmueblesAlquilerWithPropietary = InmueblesAlquiler & {
  propietarioEmpresarial: { nom_empresa: string } | null;
  propietarioPrivado: { nom_propietario: string } | null;
};
