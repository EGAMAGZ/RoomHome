
Object.defineProperty(exports, "__esModule", { value: true });

const {
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
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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


  const path = require('path')

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
  nom_empresa: 'nom_empresa',
  tipo_empresa: 'tipo_empresa',
  dir_empresa: 'dir_empresa',
  tel_empresa: 'tel_empresa',
  nom_contacto: 'nom_contacto'
};

exports.Prisma.ClientesScalarFieldEnum = {
  num_cliente: 'num_cliente',
  nom_cliente: 'nom_cliente',
  tel_cliente: 'tel_cliente',
  tipo_inmueble: 'tipo_inmueble',
  importmax_inmueble: 'importmax_inmueble',
  nom_empleado: 'nom_empleado',
  sucregistro_cliente: 'sucregistro_cliente',
  email_cliente: 'email_cliente',
  pass_cliente: 'pass_cliente'
};

exports.Prisma.ContratosAlquilerScalarFieldEnum = {
  num_contrato: 'num_contrato',
  num_cliente: 'num_cliente',
  nom_cliente: 'nom_cliente',
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQ0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpDQp9DQoNCm1vZGVsIERpbm9zYXVyIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KfQ0KDQptb2RlbCBFbXBsZWFkb3Mgew0KICBudW1fZW1wbGVhZG8gICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm9tX2VtcGxlYWRvICAgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkNCiAgZGlyX2VtcGxlYWRvICAgU3RyaW5nIEB1bmlxdWUgQGRiLlZhckNoYXIoMTAwKQ0KICBjYXRfZW1wbGVhZG8gICBTdHJpbmcgQGRiLkNoYXIoMikNCiAgc2FsX2VtcGxlYWRvICAgSW50IC8vICFERUJFIFNFUiBERSBMT05HSVRVRCBERSAxMA0KICBub21fc3VwZXJ2aXNvciBTdHJpbmcgQGRiLlZhckNoYXIoMTAwKQ0KICBlbWFpbF9lbXBsZWFkbyBTdHJpbmcgLy8gKiBGVUUgQUdSRUdBRE8NCiAgcGFzc19lbXBsZWFkbyAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkgLy8gKiBGVUUgQUdSRUdBRE8NCn0NCg0KbW9kZWwgSW5tdWVibGVzQWxxdWlsZXIgew0KICBudW1faW5tdWVibGUgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGRpcl9pbm11ZWJsZSAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQ0KICB0aXBvX2lubXVlYmxlICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDIwKQ0KICBudW1faGFiaXRhY2lvbmVzICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5TbWFsbEludCAvLyAhREVCRSBTRVIgREUgTE9OR0lUVUQgREUgMw0KICBpbXBvcnRfbWVuc3VhbCAgICAgICAgIEludCAvLyAhREVCRSBTRVIgREUgTE9OR0lUVUQgREUgMjUNCiAgQ29udHJhdG9zQWxxdWlsZXIgICAgICBDb250cmF0b3NBbHF1aWxlcltdDQogIENpdGFzICAgICAgICAgICAgICAgICAgQ2l0YXNbXQ0KICBwcm9waWV0YXJpb1ByaXZhZG8gICAgIFByb3BpZXRhcmlvc1ByaXZhZG9zPyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtudW1fcHJvcGlldGFyaW9dLCByZWZlcmVuY2VzOiBbbnVtX3Byb3BpZXRhcmlvXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBwcm9waWV0YXJpb0VtcHJlc2FyaWFsIFByb3BpZXRhcmlvc0VtcHJlc2FyaWFsZXM/IEByZWxhdGlvbihmaWVsZHM6IFtudW1fcHJvcGlldGFyaW9fZW1wXSwgcmVmZXJlbmNlczogW251bV9wcm9waWV0YXJpb19lbV0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkNCiAgbnVtX3Byb3BpZXRhcmlvICAgICAgICBJbnQ/DQogIG51bV9wcm9waWV0YXJpb19lbXAgICAgSW50Pw0KfQ0KDQptb2RlbCBQcm9waWV0YXJpb3NQcml2YWRvcyB7DQogIG51bV9wcm9waWV0YXJpbyAgIEludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm9tX3Byb3BpZXRhcmlvICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApDQogIGRpcl9wcm9waWV0YXJpbyAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQ0KICB0ZWxfcHJvcGlldGFyaW8gICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwKQ0KICBJbm11ZWJsZXNBbHF1aWxlciBJbm11ZWJsZXNBbHF1aWxlcltdDQp9DQoNCm1vZGVsIFByb3BpZXRhcmlvc0VtcHJlc2FyaWFsZXMgew0KICBudW1fcHJvcGlldGFyaW9fZW0gSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub21fZW1wcmVzYSAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNSkNCiAgdGlwb19lbXByZXNhICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzApDQogIGRpcl9lbXByZXNhICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkNCiAgdGVsX2VtcHJlc2EgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTApDQogIG5vbV9jb250YWN0byAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkNCiAgSW5tdWVibGVzQWxxdWlsZXIgIElubXVlYmxlc0FscXVpbGVyW10NCn0NCg0KbW9kZWwgQ2xpZW50ZXMgew0KICBudW1fY2xpZW50ZSAgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub21fY2xpZW50ZSAgICAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigxMDApDQogIHRlbF9jbGllbnRlICAgICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDEwKQ0KICB0aXBvX2lubXVlYmxlICAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMCkNCiAgaW1wb3J0bWF4X2lubXVlYmxlICBJbnQNCiAgbm9tX2VtcGxlYWRvICAgICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMTAwKQ0KICBzdWNyZWdpc3Ryb19jbGllbnRlIFN0cmluZyBAZGIuVmFyQ2hhcigzMCkNCiAgZW1haWxfY2xpZW50ZSAgICAgICBTdHJpbmcgLy8gKiBGVUUgQUdSRUdBRE8NCiAgcGFzc19jbGllbnRlICAgICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjU1KSAvLyAqIEZVRSBBR1JFR0FETw0KDQogIENvbnRyYXRvc0FscXVpbGVyIENvbnRyYXRvc0FscXVpbGVyW10NCiAgQ2l0YXMgICAgICAgICAgICAgQ2l0YXNbXQ0KfQ0KDQptb2RlbCBDb250cmF0b3NBbHF1aWxlciB7DQogIG51bV9jb250cmF0byAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNsaWVudGUgICAgICAgIENsaWVudGVzICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtudW1fY2xpZW50ZV0sIHJlZmVyZW5jZXM6IFtudW1fY2xpZW50ZV0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkNCiAgbnVtX2NsaWVudGUgICAgSW50DQogIG5vbV9jbGllbnRlICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkNCiAgaW5tdWVibGUgICAgICAgSW5tdWVibGVzQWxxdWlsZXIgQHJlbGF0aW9uKGZpZWxkczogW251bV9pbm11ZWJsZV0sIHJlZmVyZW5jZXM6IFtudW1faW5tdWVibGVdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIG51bV9pbm11ZWJsZSAgIEludA0KICBkaXJfaW5tdWVibGUgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApDQogIGltcG9ydF9tZW5zdWFsIEludCAvLyAhREVCRSBTRVIgREUgTE9OR0lUVUQgREUgMjUNCiAgbW9kX3BhZ28gICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUpDQogIGRlcF9wYWdvICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1KQ0KICBkdXJfY29udHJhdG8gICBJbnQgLy8gIURFQkUgU0VSIERFIExPTkdJVFVEIERFIDI1DQogIGZlY2hfaW5pY2lvICAgIERhdGVUaW1lICAgICAgICAgIEBkYi5EYXRlDQogIGZlY2hfZmluICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkYi5EYXRlDQp9DQoNCm1vZGVsIENpdGFzIHsNCiAgbnVtX2NpdGEgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNsaWVudGUgICAgICBDbGllbnRlcyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbnVtX2NsaWVudGVdLCByZWZlcmVuY2VzOiBbbnVtX2NsaWVudGVdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIG51bV9jbGllbnRlICBJbnQNCiAgaW5tdWVibGUgICAgIElubXVlYmxlc0FscXVpbGVyIEByZWxhdGlvbihmaWVsZHM6IFtudW1faW5tdWVibGVdLCByZWZlcmVuY2VzOiBbbnVtX2lubXVlYmxlXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBudW1faW5tdWVibGUgSW50DQogIGZlY2hfY2l0YSAgICBEYXRlVGltZT8gICAgICAgICBAZGIuRGF0ZQ0KfQ0K",
  "inlineSchemaHash": "4a61a714e1ab0bae10d4c29381181047b59c57abf4bef493d3cd67015463075b"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Dinosaur\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Empleados\":{\"dbName\":null,\"fields\":[{\"name\":\"num_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sal_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_supervisor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pass_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InmueblesAlquiler\":{\"dbName\":null,\"fields\":[{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_habitaciones\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"import_mensual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContratosAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContratosAlquiler\",\"relationName\":\"ContratosAlquilerToInmueblesAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Citas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Citas\",\"relationName\":\"CitasToInmueblesAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propietarioPrivado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropietariosPrivados\",\"relationName\":\"InmueblesAlquilerToPropietariosPrivados\",\"relationFromFields\":[\"num_propietario\"],\"relationToFields\":[\"num_propietario\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propietarioEmpresarial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropietariosEmpresariales\",\"relationName\":\"InmueblesAlquilerToPropietariosEmpresariales\",\"relationFromFields\":[\"num_propietario_emp\"],\"relationToFields\":[\"num_propietario_em\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_propietario_emp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropietariosPrivados\":{\"dbName\":null,\"fields\":[{\"name\":\"num_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InmueblesAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"InmueblesAlquilerToPropietariosPrivados\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropietariosEmpresariales\":{\"dbName\":null,\"fields\":[{\"name\":\"num_propietario_em\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_contacto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InmueblesAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"InmueblesAlquilerToPropietariosEmpresariales\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clientes\":{\"dbName\":null,\"fields\":[{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"importmax_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sucregistro_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pass_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContratosAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContratosAlquiler\",\"relationName\":\"ClientesToContratosAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Citas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Citas\",\"relationName\":\"CitasToClientes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ContratosAlquiler\":{\"dbName\":null,\"fields\":[{\"name\":\"num_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clientes\",\"relationName\":\"ClientesToContratosAlquiler\",\"relationFromFields\":[\"num_cliente\"],\"relationToFields\":[\"num_cliente\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inmueble\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"ContratosAlquilerToInmueblesAlquiler\",\"relationFromFields\":[\"num_inmueble\"],\"relationToFields\":[\"num_inmueble\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"import_mensual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mod_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dep_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dur_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Citas\":{\"dbName\":null,\"fields\":[{\"name\":\"num_cita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clientes\",\"relationName\":\"CitasToClientes\",\"relationFromFields\":[\"num_cliente\"],\"relationToFields\":[\"num_cliente\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inmueble\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"CitasToInmueblesAlquiler\",\"relationFromFields\":[\"num_inmueble\"],\"relationToFields\":[\"num_inmueble\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_cita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
