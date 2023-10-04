
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DinosaurScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.EmpleadosScalarFieldEnum = {
  num_empleado: 'num_empleado',
  nom_empleado: 'nom_empleado',
  dir_empleado: 'dir_empleado',
  cat_empleado: 'cat_empleado',
  sal_empleado: 'sal_empleado',
  nom_supervisor: 'nom_supervisor',
  email_empleado: 'email_empleado',
  pass_empleado: 'pass_empleado'
};

exports.Prisma.InmueblesAlquilerScalarFieldEnum = {
  num_inmueble: 'num_inmueble',
  dir_inmueble: 'dir_inmueble',
  tipo_inmueble: 'tipo_inmueble',
  num_habitaciones: 'num_habitaciones',
  import_mensual: 'import_mensual',
  num_propietario: 'num_propietario',
  num_propietario_emp: 'num_propietario_emp'
};

exports.Prisma.PropietariosPrivadosScalarFieldEnum = {
  num_propietario: 'num_propietario',
  nom_propietario: 'nom_propietario',
  dir_propietario: 'dir_propietario',
  tel_propietario: 'tel_propietario'
};

exports.Prisma.PropietariosEmpresarialesScalarFieldEnum = {
  num_propietario_em: 'num_propietario_em',
  nom_propietario_em: 'nom_propietario_em',
  tipo_empresa: 'tipo_empresa',
  dir_empresa: 'dir_empresa',
  tel_propietario_em: 'tel_propietario_em',
  nom_contacto: 'nom_contacto'
};

exports.Prisma.ClientesScalarFieldEnum = {
  num_cliente: 'num_cliente',
  nom_cliente: 'nom_cliente',
  tel_cliente: 'tel_cliente',
  tipo_inmueble: 'tipo_inmueble',
  importmax_inmueble: 'importmax_inmueble',
  nom_empleado: 'nom_empleado',
  sucregistro_cielte: 'sucregistro_cielte'
};

exports.Prisma.ContratosAlquilerScalarFieldEnum = {
  num_contrato: 'num_contrato',
  num_cliente: 'num_cliente',
  nom_cliente: 'nom_cliente',
  dir_cliente: 'dir_cliente',
  num_inmueble: 'num_inmueble',
  dir_inmueble: 'dir_inmueble',
  import_mensual: 'import_mensual',
  mod_pago: 'mod_pago',
  dep_pago: 'dep_pago',
  dur_contrato: 'dur_contrato',
  fech_inicio: 'fech_inicio',
  fech_fin: 'fech_fin'
};

exports.Prisma.CitasScalarFieldEnum = {
  num_cita: 'num_cita',
  num_cliente: 'num_cliente',
  num_inmueble: 'num_inmueble',
  fech_cita: 'fech_cita'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Dinosaur: 'Dinosaur',
  Empleados: 'Empleados',
  InmueblesAlquiler: 'InmueblesAlquiler',
  PropietariosPrivados: 'PropietariosPrivados',
  PropietariosEmpresariales: 'PropietariosEmpresariales',
  Clientes: 'Clientes',
  ContratosAlquiler: 'ContratosAlquiler',
  Citas: 'Citas'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
