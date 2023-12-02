import { z } from "zod";
import { nameRegex, phoneNumberRegex } from "@/utils/regex.ts";

export const RegisterClientSchema = z.object({
  nom_cliente: z.string({
    invalid_type_error: "Nombre debe ser un string",
    required_error: "Nombre es requerido",
  }).max(100, {
    message: "Nombre debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Nombre es requerido",
  }).regex(nameRegex, {
    message: "Nombre invalido, solo se aceptan letras",
  }),
  tel_cliente: z.string({
    invalid_type_error: "Telefono debe ser un string",
    required_error: "Telefono es requerido",
  }).regex(phoneNumberRegex, {
    message: "Telefono invalido",
  }),
  tipo_inmueble: z.string({
    invalid_type_error: "Tipo de inmueble debe ser un string",
    required_error: "Tipo de inmueble es requerido",
  }).nonempty({
    message: "Tipo de inmueble es requerido",
  }),
  importmax_inmueble: z.coerce.number({
    invalid_type_error: "Importe debe ser un numero",
    required_error: "Importe es requerido",
  }).max(100_000, {
    message: "Importe debe ser menor a 100,000",
  }).min(1_000, {
    message: "Importe debe ser mayor a 1,000",
  }).positive({
    message: "Importe debe ser positivo",
  }).int({
    message: "Importe debe ser un número entero",
  }).safe({
    message: "Importe es un número invalido",
  }),
  sucregistro_cliente: z.string({
    invalid_type_error: "Sucursal debe ser un string",
    required_error: "Sucursal es requerido",
  }).max(30, {
    message: "Sucursal debe tener menos de 30 caracteres",
  }).nonempty({
    message: "Sucursarl es requerido",
  }),
  email_cliente: z.string({
    required_error: "Correo electronico es requerido",
    invalid_type_error: "Correo electronico debe ser un string",
  }).email({
    message: "Correo electronico no válido",
  }).max(255, {
    message: "Correo electronico debe tener menos de 255 caracteres",
  }),
  pass_cliente: z.string({
    invalid_type_error: "Contraseña debe ser texto",
    required_error: "Contraseña es requerido",
  }).min(8, {
    message: "Contraseña debe tener al menos 8 caracteres",
  }).max(128, {
    message: "Contraseña debe tener menos de 128 caracteres",
  }),
});
