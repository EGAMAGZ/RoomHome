const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  defineDmmfProperty,
  Public,
} from '.././runtime/edge-esm.js'

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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  num_propietario_em: 'num_propietario_em'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\gazap\\projects\\RoomHome\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.3.1",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQ0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpDQp9DQoNCm1vZGVsIERpbm9zYXVyIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KfQ0KDQptb2RlbCBFbXBsZWFkb3Mgew0KICBudW1fZW1wbGVhZG8gICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm9tX2VtcGxlYWRvICAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1KQ0KICBkaXJfZW1wbGVhZG8gICBTdHJpbmcgQHVuaXF1ZSBAZGIuVmFyQ2hhcig2MCkNCiAgY2F0X2VtcGxlYWRvICAgU3RyaW5nIEBkYi5DaGFyKDIpDQogIHNhbF9lbXBsZWFkbyAgIEludCAvLyBGSVhNRTogREVCRSBTRVIgREUgTE9OR0lUVUQgREUgMTANCiAgbm9tX3N1cGVydmlzb3IgU3RyaW5nIEBkYi5WYXJDaGFyKDI1KQ0KICBlbWFpbF9lbXBsZWFkbyAgIFN0cmluZw0KICBwYXNzX2VtcGxlYWRvICAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkNCn0NCg0KbW9kZWwgSW5tdWVibGVzQWxxdWlsZXIgew0KICBudW1faW5tdWVibGUgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGRpcl9pbm11ZWJsZSAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNjApDQogIHRpcG9faW5tdWVibGUgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjApDQogIG51bV9oYWJpdGFjaW9uZXMgIEludCAgICAgICAgICAgICAgICAgQGRiLlNtYWxsSW50IC8vIEZJWE1FOiBERUJFIFNFUiBERSBMT05HSVRVRCBERSAzDQogIGltcG9ydF9tZW5zdWFsICAgIEJpZ0ludCAvLyBGSVhNRTogREVCRSBTRVIgREUgTE9OR0lUVUQgREUgMjUNCiAgQ29udHJhdG9zQWxxdWlsZXIgQ29udHJhdG9zQWxxdWlsZXJbXQ0KICBDaXRhcyAgICAgICAgICAgICBDaXRhc1tdDQoNCiAgcHJvcGlldGFyaW9Qcml2YWRvICAgICBQcm9waWV0YXJpb3NQcml2YWRvcz8gICAgICBAcmVsYXRpb24oZmllbGRzOiBbbnVtX3Byb3BpZXRhcmlvXSwgcmVmZXJlbmNlczogW251bV9wcm9waWV0YXJpb10pDQogIHByb3BpZXRhcmlvRW1wcmVzYXJpYWwgUHJvcGlldGFyaW9zRW1wcmVzYXJpYWxlcz8gQHJlbGF0aW9uKGZpZWxkczogW251bV9wcm9waWV0YXJpb19lbV0sIHJlZmVyZW5jZXM6IFtudW1fcHJvcGlldGFyaW9fZW1dKQ0KICBudW1fcHJvcGlldGFyaW8gICAgICAgIEludD8NCiAgbnVtX3Byb3BpZXRhcmlvX2VtICAgICBJbnQ/DQp9DQoNCm1vZGVsIFByb3BpZXRhcmlvc1ByaXZhZG9zIHsNCiAgbnVtX3Byb3BpZXRhcmlvICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub21fcHJvcGlldGFyaW8gICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1KQ0KICBkaXJfcHJvcGlldGFyaW8gICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDMwKQ0KICB0ZWxfcHJvcGlldGFyaW8gICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQ0KICBJbm11ZWJsZXNBbHF1aWxlciBJbm11ZWJsZXNBbHF1aWxlcltdDQp9DQoNCm1vZGVsIFByb3BpZXRhcmlvc0VtcHJlc2FyaWFsZXMgew0KICBudW1fcHJvcGlldGFyaW9fZW0gSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub21fcHJvcGlldGFyaW9fZW0gU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNSkNCiAgdGlwb19lbXByZXNhICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzApDQogIGRpcl9lbXByZXNhICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIwKQ0KICB0ZWxfcHJvcGlldGFyaW9fZW0gU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMCkNCiAgbm9tX2NvbnRhY3RvICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUpDQogIElubXVlYmxlc0FscXVpbGVyICBJbm11ZWJsZXNBbHF1aWxlcltdDQp9DQoNCm1vZGVsIENsaWVudGVzIHsNCiAgbnVtX2NsaWVudGUgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm9tX2NsaWVudGUgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUpDQogIHRlbF9jbGllbnRlICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQ0KICB0aXBvX2lubXVlYmxlICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyMCkNCiAgaW1wb3J0bWF4X2lubXVlYmxlIEludA0KICBub21fZW1wbGVhZG8gICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNSkNCiAgc3VjcmVnaXN0cm9fY2llbHRlIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzApDQogIENvbnRyYXRvc0FscXVpbGVyICBDb250cmF0b3NBbHF1aWxlcltdDQogIENpdGFzICAgICAgICAgICAgICBDaXRhc1tdDQp9DQoNCm1vZGVsIENvbnRyYXRvc0FscXVpbGVyIHsNCiAgbnVtX2NvbnRyYXRvICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY2xpZW50ZSAgICAgICAgQ2xpZW50ZXMgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW251bV9jbGllbnRlXSwgcmVmZXJlbmNlczogW251bV9jbGllbnRlXSkNCiAgbnVtX2NsaWVudGUgICAgSW50DQogIG5vbV9jbGllbnRlICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1KQ0KICBkaXJfY2xpZW50ZSAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcigyMCkNCiAgaW5tdWVibGUgICAgICAgSW5tdWVibGVzQWxxdWlsZXIgQHJlbGF0aW9uKGZpZWxkczogW251bV9pbm11ZWJsZV0sIHJlZmVyZW5jZXM6IFtudW1faW5tdWVibGVdKQ0KICBudW1faW5tdWVibGUgICBJbnQNCiAgZGlyX2lubXVlYmxlICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoMzApDQogIGltcG9ydF9tZW5zdWFsIEJpZ0ludCAvLyBGSVhNRTogREVCRSBTRVIgREUgTE9OR0lUVUQgREUgMjUNCiAgbW9kX3BhZ28gICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUpDQogIGRlcF9wYWdvICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1KQ0KICBkdXJfY29udHJhdG8gICBCaWdJbnQgLy8gRklYTUU6IERFQkUgU0VSIERFIExPTkdJVFVEIERFIDI1DQogIGZlY2hfaW5pY2lvICAgIERhdGVUaW1lICAgICAgICAgIEBkYi5EYXRlDQogIGZlY2hfZmluICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkYi5EYXRlDQp9DQoNCm1vZGVsIENpdGFzIHsNCiAgbnVtX2NpdGEgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNsaWVudGUgICAgICBDbGllbnRlcyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbnVtX2NsaWVudGVdLCByZWZlcmVuY2VzOiBbbnVtX2NsaWVudGVdKQ0KICBudW1fY2xpZW50ZSAgSW50DQogIGlubXVlYmxlICAgICBJbm11ZWJsZXNBbHF1aWxlciBAcmVsYXRpb24oZmllbGRzOiBbbnVtX2lubXVlYmxlXSwgcmVmZXJlbmNlczogW251bV9pbm11ZWJsZV0pDQogIG51bV9pbm11ZWJsZSBJbnQNCiAgZmVjaF9jaXRhICAgIERhdGVUaW1lICAgICAgICAgIEBkYi5EYXRlDQp9DQo=",
  "inlineSchemaHash": "fcc34b82e35fbea01266d4e6dcd3f5f33f39ebc3b0f78d348c321e98bfa49acb"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Dinosaur\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Empleados\":{\"dbName\":null,\"fields\":[{\"name\":\"num_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sal_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_supervisor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pass_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InmueblesAlquiler\":{\"dbName\":null,\"fields\":[{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_habitaciones\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"import_mensual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContratosAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContratosAlquiler\",\"relationName\":\"ContratosAlquilerToInmueblesAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Citas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Citas\",\"relationName\":\"CitasToInmueblesAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propietarioPrivado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropietariosPrivados\",\"relationName\":\"InmueblesAlquilerToPropietariosPrivados\",\"relationFromFields\":[\"num_propietario\"],\"relationToFields\":[\"num_propietario\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propietarioEmpresarial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropietariosEmpresariales\",\"relationName\":\"InmueblesAlquilerToPropietariosEmpresariales\",\"relationFromFields\":[\"num_propietario_em\"],\"relationToFields\":[\"num_propietario_em\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_propietario_em\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropietariosPrivados\":{\"dbName\":null,\"fields\":[{\"name\":\"num_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InmueblesAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"InmueblesAlquilerToPropietariosPrivados\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropietariosEmpresariales\":{\"dbName\":null,\"fields\":[{\"name\":\"num_propietario_em\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_propietario_em\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_propietario_em\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_contacto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InmueblesAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"InmueblesAlquilerToPropietariosEmpresariales\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clientes\":{\"dbName\":null,\"fields\":[{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"importmax_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sucregistro_cielte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContratosAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContratosAlquiler\",\"relationName\":\"ClientesToContratosAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Citas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Citas\",\"relationName\":\"CitasToClientes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ContratosAlquiler\":{\"dbName\":null,\"fields\":[{\"name\":\"num_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clientes\",\"relationName\":\"ClientesToContratosAlquiler\",\"relationFromFields\":[\"num_cliente\"],\"relationToFields\":[\"num_cliente\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inmueble\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"ContratosAlquilerToInmueblesAlquiler\",\"relationFromFields\":[\"num_inmueble\"],\"relationToFields\":[\"num_inmueble\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"import_mensual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mod_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dep_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dur_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Citas\":{\"dbName\":null,\"fields\":[{\"name\":\"num_cita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clientes\",\"relationName\":\"CitasToClientes\",\"relationFromFields\":[\"num_cliente\"],\"relationToFields\":[\"num_cliente\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inmueble\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"CitasToInmueblesAlquiler\",\"relationFromFields\":[\"num_inmueble\"],\"relationToFields\":[\"num_inmueble\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_cita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

