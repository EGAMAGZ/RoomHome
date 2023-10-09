import { z } from "zod";

export const RegisterContractSchema = z.object({
  clientId: z.coerce.number({
    invalid_type_error: "El id de cliente debe ser un numero",
    required_error: "El id de cliente es requerido",
  }),
  address: z.string({
    invalid_type_error: "La dirección debe ser un string",
    required_error: "La dirección es requerida",
  }),
  propertyId: z.coerce.number({
    invalid_type_error: "El id del inmueble debe ser un numero",
    required_error: "El id del inmueble es requerido",
  }),
  amount: z.coerce.number({
    invalid_type_error: "El importe mensual debe ser un numero",
    required_error: "El importe mensual es requerido",
  }).min(1, {
    message: "El importe mensual debe ser minimo 1",
  }).max(999999999999999999999999, {
    message: "El importe mensual debe ser menor a 999999999999999999999999",
  }),
  paymentMethod: z.string({
    invalid_type_error: "El tipo de pago debe ser un string",
    required_error: "El tipo de pago es requerido",
  }),
  rentalDeposit: z.coerce.number({
    invalid_type_error: "El deposito de alquiler debe ser un numero",
    required_error: "El deposito de alquiler es requerido",
  }).min(1, {
    message: "El deposito de alquiler debe ser minimo 1",
  }).max(999999999999999999999999, {
    message:
      "El deposito de alquiler debe ser menor a 999999999999999999999999",
  }),
  months: z.coerce.number({
    invalid_type_error: "El numero de meses debe ser un numero",
    required_error: "El numero de meses es requerido",
  }).min(1, {
    message: "El numero de meses debe ser minimo 1",
  }).max(999999999999999999999999, {
    message: "El numero de meses debe ser menor a 999999999999999999999999",
  }),
  startDate: z.coerce.date({
    invalid_type_error: "La fecha de inicio debe ser un string",
    required_error: "La fecha de inicio es requerido",
  }),
  endDate: z.coerce.date({
    invalid_type_error: "La fecha de inicio debe ser un string",
    required_error: "La fecha de registro es harmonido",
  }),
});
