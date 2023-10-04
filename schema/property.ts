import { z } from "zod";

export const RegisterPropertySchema = z.object({
  address: z.string({
    invalid_type_error: "Direccion debe ser un string",
    required_error: "Direccion es requerida",
  }).min(8, {
    message: "Direccion debe tener al menos 8 caracteres",
  }).max(60, {
    message: "Direccion debe tener menos de 60 caracteres",
  }),
  type: z.string({
    invalid_type_error: "Tipo debe ser un string",
    required_error: "Tipo es requerido",
  }).min(4, {
    message: "Tipo debe tener al menos 8 caracteres",
  }).max(20, {
    message: "Tipo debe tener menos de 20 caracteres",
  }),
  rooms: z.coerce.number({
    invalid_type_error: "Numero de habitaciones debe ser un numero",
    required_error: "Numero de habitaciones es requerido",
  }).min(1, {
    message: "Numero de habitaciones debe tener al menos 1 habitacion",
  }).max(25, {
    message: "Numero de habitaciones debe tener menos de 10 habitaciones",
  }),
  amount: z.coerce.number({
    invalid_type_error: "Importe mensual debe ser un numero",
    required_error: "Importe mensual es requerido",
  }).min(1, {
    message: "Importe mensual debe ser minimo 1",
  }).max(999999999999999999999999, {
    message: "Importe debe ser menor a 999999999999999999999999",
  }),
  privateOwner: z.coerce.number({
    invalid_type_error: "Numero de propietario debe ser un numero",
    required_error: "Numero de propietario es requerido",
  })
    .optional().transform((value) => {
      if (value === -1) {
        return undefined;
      }
      return value;
    }),
  empresarialOwner: z.coerce.number({
    invalid_type_error: "Numero de propietario debe ser un numero",
    required_error: "Numero de propietario es requerido",
  })
    .optional()
    .transform((value) => {
      if (value === -1) {
        return undefined;
      }
      return value;
    }),
}).refine(
  (data) =>
    (data.empresarialOwner !== undefined && data.privateOwner === undefined) ||
    (data.empresarialOwner === undefined && data.privateOwner !== undefined),
  {
    message: "Debe seleccionar solo un propietario",
  },
);
