import { z } from "zod";
import { addYears } from "@/utils/date.ts";
import {
  Clientes,
  ContratosAlquiler,
  InmueblesAlquiler,
} from "@/generated/client/deno/edge.ts";

export const RegisterContractSchema = z.object({
  num_cliente: z.coerce.number({
    invalid_type_error: "El id de cliente debe ser un número",
    required_error: "El cliente es requerido",
  }).refine((value) => value !== 0, {
    message: "El cliente es requerido",
  }),
  num_inmueble: z.coerce.number({
    invalid_type_error: "El id del inmueble debe ser un número",
    required_error: "El id del inmueble es requerido",
  }).refine((value) => value !== 0, {
    message: "El inmueble es requerido",
  }),
  dep_pago: z.coerce.number({
    invalid_type_error: "El depósito de pago debe ser un número",
    required_error: "El depósito de pago es requerido",
  }).min(1, {
    message: "El depósito de pago debe ser mayor o igual a 1",
  }).max(200_000, {
    message: "El depósito de pago debe ser menor o igual a 200000",
  }).int({
    message: "El depósito de pago debe ser un número entero",
  }).safe({
    message: "El depósito de pago es un número inválido",
  }).positive({
    message: "El depósito de pago debe ser positivo",
  }),
  mod_pago: z.string({
    invalid_type_error: "El tipo de pago debe ser un string",
    required_error: "El tipo de pago es requerido",
  }).nonempty({
    message: "El tipo de pago es requerido",
  }),
  fech_inicio: z.coerce.date({
    invalid_type_error: "La fecha de inicio debe ser una fecha",
    required_error: "La fecha de inicio es requerido",
  }).max(addYears(new Date(), 2), {
    message: "La fecha de inicio debe ser menor a 2 años",
  }).min(new Date(), {
    message: "La fecha de registro debe ser posterior a la fecha actual",
  }),
  fech_fin: z.coerce.date({
    invalid_type_error: "La fecha de inicio debe ser una fecha",
    required_error: "La fecha de fin es requerido",
  }).max(addYears(new Date(), 2), {
    message: "La fecha de fin debe ser menor a 2 años",
  }),
}).refine((data) => data.fech_fin > data.fech_inicio, {
  message: "La fecha de fin debe ser posterior a la fecha de inicio",
  path: ["fech_fin"],
});

export type ContractWithClientAndProperty = ContratosAlquiler & {
  cliente: Clientes;
  inmueble: InmueblesAlquiler;
};
