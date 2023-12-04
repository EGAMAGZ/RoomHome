import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";

import { z } from "zod";

export const RegisterPropertySchema = z.object({
  dir_inmueble: z.string({
    invalid_type_error: "Direccion debe ser un string",
    required_error: "Direccion es requerida",
  }).max(100, {
    message: "Direccion debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Direccion es requerida",
  }),
  tipo_inmueble: z.string({
    invalid_type_error: "Tipo de inmueble debe ser un string",
    required_error: "Tipo de inmueble es requerido",
  }).max(20, {
    message: "Tipo de inmueble debe tener menos de 20 caracteres",
  }).nonempty({
    message: "Tipo de inmueble es requerido",
  }),
  num_habitaciones: z.coerce.number({
    invalid_type_error: "Numero de habitaciones debe ser un numero",
    required_error: "Numero de habitaciones es requerido",
  }).max(25, {
    message: "Numero de habitaciones debe tener menos de 25 habitaciones",
  }).min(1, {
    message: "Numero de habitaciones debe tener al menos 1 habitacion",
  }).positive({
    message: "Numero de habitaciones debe ser positivo",
  }).int({
    message: "Numero de habitaciones debe ser un número entero",
  }).safe({
    message: "Numero de habitaciones es un número invalido",
  }),
  import_mensual: z.coerce.number({
    invalid_type_error: "Importe mensual debe ser un numero",
    required_error: "Importe mensual es requerido",
  }).min(1_000, {
    message: "Importe mensual debe ser minimo 1,000",
  }).max(100_000, {
    message: "Importe mensual debe ser menor a 100,000",
  }).int({
    message: "Importe mensual debe ser un número entero",
  }),
  num_propietario: z.coerce.number({
    invalid_type_error: "Numero de propietario debe ser un numero",
    required_error: "Numero de propietario es requerido",
  }).optional().transform((value) => value === 0 ? undefined : value),
  num_propietario_emp: z.coerce.number({
    invalid_type_error: "Numero de propietario debe ser un numero",
    required_error: "Numero de propietario es requerido",
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
    invalid_type_error: "Precio debe ser un numero",
    required_error: "Precio es requerido",
  }).min(1000, {
    message: "Precio debe ser mayor a 1000",
  }).max(100000, {
    message: "Precio debe ser menor a 100000",
  }),
  rooms: z.coerce.number({
    invalid_type_error: "Numero de habitaciones debe ser un numero",
    required_error: "Numero de habitaciones es harmonido",
  }).min(1, {
    message: "Numero de habitaciones debe tener al menos 1 habitacion",
  }).max(10, {
    message: "Numero de habitaciones debe tener menos de 10 habitaciones",
  }),
});

export const PropertyFilterSchema = z.object({
  amount: z.coerce.number({
    invalid_type_error: "Precio debe ser un numero",
    required_error: "Precio es requerido",
  }).min(1000, {
    message: "Precio debe ser mayor a 1000",
  }).max(100000, {
    message: "Precio debe ser menor a 100000",
  }),
  rooms: z.coerce.number({
    invalid_type_error: "Numero de habitaciones debe ser un numero",
    required_error: "Numero de habitaciones es harmonido",
  }).min(1, {
    message: "Numero de habitaciones debe tener al menos 1 habitacion",
  }).max(10, {
    message: "Numero de habitaciones debe tener menos de 10 habitaciones",
  }),
  skip: z.coerce.number({
    invalid_type_error: "El parametro 'skip' debe ser un numero",
    required_error: "El parametro 'skip' es requerido",
  }),
});

export type InmueblesAlquilerWithPropietary = InmueblesAlquiler & {
  propietarioEmpresarial: { nom_empresa: string } | null;
  propietarioPrivado: { nom_propietario: string } | null;
};
