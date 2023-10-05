import { generateHash } from "@/utils/hash.ts";
import { Prisma, PrismaClient } from "@/generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.202.0/dotenv/mod.ts";

const envVars = await load();

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

console.log("Prisma connected");
const employeeData: Prisma.EmpleadosCreateInput = {
  nom_empleado: "Gamaliel Garcia",
  sal_empleado: 50000,
  pass_empleado: await generateHash("SoyGamalielD:"),
  email_empleado: "gamaliel.garcia@roomhome.com",
  cat_empleado: "NB",
  dir_empleado: "Calle 123",
  nom_supervisor: "Katherine Peña",
};

const employee = await prismaClient.empleados.create({
  data: employeeData,
});
console.log(`Empleado creado con id: ${employee.num_empleado}`);

const clientData: Prisma.ClientesCreateInput = {
  nom_cliente: "Karla Cardozo",
  email_cliente: "karla.cardozo@roomhome.com",
  pass_cliente: await generateHash("SoyKarla:D"),
  importmax_inmueble: 100000,
  nom_empleado: "Gamaliel Garcia",
  sucregistro_cliente: "Iztacalco",
  tel_cliente: "5555555555",
  tipo_inmueble: "Duplex",
};

const client = await prismaClient.clientes.create({
  data: clientData,
});

console.log(`Cliente creado con id: ${client.num_cliente}`);

await prismaClient.$disconnect();
console.log("Prisma disconnected");
