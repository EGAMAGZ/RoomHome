import { z } from "zod";
import { nameRegex, phoneNumberRegex } from "@/utils/regex.ts";

export const RegisterEmpresarialOwnerSchema = z.object({
  nom_empresa: z.string({
    invalid_type_error: "Nombre de la empresa debe ser un string",
    required_error: "Nombre de la empresa es requerido",
  }).max(25, {
    message: "Nombre de la empresa debe tener menos de 25 caracteres",
  }).nonempty({
    message: "Nombre de la empresa es requerido",
  }),
  tipo_empresa: z.string({
    invalid_type_error: "Tipo de empresa debe ser un string",
    required_error: "Tipo de empresa es requerido",
  }).max(30, {
    message: "Tipo de empresa debe tener menos de 30 caracteres",
  }).nonempty({
    message: "Tipo de empresa es requerido",
  }),
  dir_empresa: z.string({
    invalid_type_error: "Dirección debe ser un string",
    required_error: "Dirección es requerida",
  }).max(100, {
    message: "Dirección debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Dirección es requerida",
  }),
  tel_empresa: z.string()
    .regex(phoneNumberRegex, {
      message: "Teléfono inválido",
    }),
  nom_contacto: z.string({
    invalid_type_error: "Nombre debe ser un string",
    required_error: "Nombre es requerido",
  }).max(100, {
    message: "Nombre debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Nombre de contacto es requerido",
  }).regex(nameRegex, {
    message: "Nombre inválido, solo se aceptan letras",
  }),
});
