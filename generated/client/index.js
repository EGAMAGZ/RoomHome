
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
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
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
  num_inmueble: 'num_inmueble',
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
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQ0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpDQp9DQoNCm1vZGVsIERpbm9zYXVyIHsNCiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICBTdHJpbmcNCiAgZGVzY3JpcHRpb24gU3RyaW5nPw0KfQ0KDQptb2RlbCBFbXBsZWFkb3Mgew0KICBudW1fZW1wbGVhZG8gICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm9tX2VtcGxlYWRvICAgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkNCiAgZGlyX2VtcGxlYWRvICAgU3RyaW5nIEB1bmlxdWUgQGRiLlZhckNoYXIoMTAwKQ0KICBjYXRfZW1wbGVhZG8gICBTdHJpbmcgQGRiLkNoYXIoMikNCiAgc2FsX2VtcGxlYWRvICAgSW50DQogIG5vbV9zdXBlcnZpc29yIFN0cmluZyBAZGIuVmFyQ2hhcigxMDApDQogIGVtYWlsX2VtcGxlYWRvIFN0cmluZyBAdW5pcXVlDQogIHBhc3NfZW1wbGVhZG8gIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpDQp9DQoNCm1vZGVsIElubXVlYmxlc0FscXVpbGVyIHsNCiAgbnVtX2lubXVlYmxlICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBkaXJfaW5tdWVibGUgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkNCiAgdGlwb19pbm11ZWJsZSAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyMCkNCiAgbnVtX2hhYml0YWNpb25lcyAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICBAZGIuU21hbGxJbnQNCiAgaW1wb3J0X21lbnN1YWwgICAgICAgICBJbnQNCiAgQ29udHJhdG9zQWxxdWlsZXIgICAgICBDb250cmF0b3NBbHF1aWxlcj8NCiAgQ2l0YXMgICAgICAgICAgICAgICAgICBDaXRhc1tdDQogIHByb3BpZXRhcmlvUHJpdmFkbyAgICAgUHJvcGlldGFyaW9zUHJpdmFkb3M/ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW251bV9wcm9waWV0YXJpb10sIHJlZmVyZW5jZXM6IFtudW1fcHJvcGlldGFyaW9dLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIHByb3BpZXRhcmlvRW1wcmVzYXJpYWwgUHJvcGlldGFyaW9zRW1wcmVzYXJpYWxlcz8gQHJlbGF0aW9uKGZpZWxkczogW251bV9wcm9waWV0YXJpb19lbXBdLCByZWZlcmVuY2VzOiBbbnVtX3Byb3BpZXRhcmlvX2VtXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBudW1fcHJvcGlldGFyaW8gICAgICAgIEludD8NCiAgbnVtX3Byb3BpZXRhcmlvX2VtcCAgICBJbnQ/DQp9DQoNCm1vZGVsIFByb3BpZXRhcmlvc1ByaXZhZG9zIHsNCiAgbnVtX3Byb3BpZXRhcmlvICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub21fcHJvcGlldGFyaW8gICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkNCiAgZGlyX3Byb3BpZXRhcmlvICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApDQogIHRlbF9wcm9waWV0YXJpbyAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTApDQogIElubXVlYmxlc0FscXVpbGVyIElubXVlYmxlc0FscXVpbGVyW10NCn0NCg0KbW9kZWwgUHJvcGlldGFyaW9zRW1wcmVzYXJpYWxlcyB7DQogIG51bV9wcm9waWV0YXJpb19lbSBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5vbV9lbXByZXNhICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1KQ0KICB0aXBvX2VtcHJlc2EgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigzMCkNCiAgZGlyX2VtcHJlc2EgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQ0KICB0ZWxfZW1wcmVzYSAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMCkNCiAgbm9tX2NvbnRhY3RvICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQ0KICBJbm11ZWJsZXNBbHF1aWxlciAgSW5tdWVibGVzQWxxdWlsZXJbXQ0KfQ0KDQptb2RlbCBDbGllbnRlcyB7DQogIG51bV9jbGllbnRlICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub21fY2xpZW50ZSAgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMTAwKQ0KICB0ZWxfY2xpZW50ZSAgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMTApDQogIHRpcG9faW5tdWVibGUgICAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyMCkNCiAgaW1wb3J0bWF4X2lubXVlYmxlICBJbnQNCiAgbm9tX2VtcGxlYWRvICAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwMCkNCiAgc3VjcmVnaXN0cm9fY2xpZW50ZSBTdHJpbmcgIEBkYi5WYXJDaGFyKDMwKQ0KICBlbWFpbF9jbGllbnRlICAgICAgIFN0cmluZyAgQHVuaXF1ZQ0KICBwYXNzX2NsaWVudGUgICAgICAgIFN0cmluZyAgQGRiLlZhckNoYXIoMjU1KQ0KDQogIENvbnRyYXRvc0FscXVpbGVyIENvbnRyYXRvc0FscXVpbGVyW10NCiAgQ2l0YXMgICAgICAgICAgICAgQ2l0YXNbXQ0KfQ0KDQptb2RlbCBDb250cmF0b3NBbHF1aWxlciB7DQogIG51bV9jb250cmF0byBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjbGllbnRlICAgICAgQ2xpZW50ZXMgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW251bV9jbGllbnRlXSwgcmVmZXJlbmNlczogW251bV9jbGllbnRlXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBudW1fY2xpZW50ZSAgSW50DQogIGlubXVlYmxlICAgICBJbm11ZWJsZXNBbHF1aWxlciBAcmVsYXRpb24oZmllbGRzOiBbbnVtX2lubXVlYmxlXSwgcmVmZXJlbmNlczogW251bV9pbm11ZWJsZV0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkNCiAgbnVtX2lubXVlYmxlIEludCAgICAgICAgICAgICAgIEB1bmlxdWUNCg0KICBtb2RfcGFnbyAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoMjUpDQogIGRlcF9wYWdvICAgICBJbnQNCiAgZHVyX2NvbnRyYXRvIEludA0KICBmZWNoX2luaWNpbyAgRGF0ZVRpbWUgQGRiLkRhdGUNCiAgZmVjaF9maW4gICAgIERhdGVUaW1lIEBkYi5EYXRlDQp9DQoNCm1vZGVsIENpdGFzIHsNCiAgbnVtX2NpdGEgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNsaWVudGUgICAgICBDbGllbnRlcyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbnVtX2NsaWVudGVdLCByZWZlcmVuY2VzOiBbbnVtX2NsaWVudGVdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIG51bV9jbGllbnRlICBJbnQNCiAgaW5tdWVibGUgICAgIElubXVlYmxlc0FscXVpbGVyIEByZWxhdGlvbihmaWVsZHM6IFtudW1faW5tdWVibGVdLCByZWZlcmVuY2VzOiBbbnVtX2lubXVlYmxlXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBudW1faW5tdWVibGUgSW50DQogIGZlY2hfY2l0YSAgICBEYXRlVGltZT8gICAgICAgICBAZGIuRGF0ZQ0KfQ0K",
  "inlineSchemaHash": "8b0fad5f48e9d18fd1b70902e1c4bd77030dfbd9c5a1df5db930a77d043382d7",
  "noEngine": true
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"Dinosaur\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Empleados\":{\"dbName\":null,\"fields\":[{\"name\":\"num_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sal_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_supervisor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pass_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InmueblesAlquiler\":{\"dbName\":null,\"fields\":[{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_habitaciones\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"import_mensual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContratosAlquiler\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContratosAlquiler\",\"relationName\":\"ContratosAlquilerToInmueblesAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Citas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Citas\",\"relationName\":\"CitasToInmueblesAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propietarioPrivado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropietariosPrivados\",\"relationName\":\"InmueblesAlquilerToPropietariosPrivados\",\"relationFromFields\":[\"num_propietario\"],\"relationToFields\":[\"num_propietario\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"propietarioEmpresarial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PropietariosEmpresariales\",\"relationName\":\"InmueblesAlquilerToPropietariosEmpresariales\",\"relationFromFields\":[\"num_propietario_emp\"],\"relationToFields\":[\"num_propietario_em\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_propietario_emp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropietariosPrivados\":{\"dbName\":null,\"fields\":[{\"name\":\"num_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_propietario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InmueblesAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"InmueblesAlquilerToPropietariosPrivados\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PropietariosEmpresariales\":{\"dbName\":null,\"fields\":[{\"name\":\"num_propietario_em\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_contacto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InmueblesAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"InmueblesAlquilerToPropietariosEmpresariales\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clientes\":{\"dbName\":null,\"fields\":[{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"importmax_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sucregistro_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pass_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContratosAlquiler\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContratosAlquiler\",\"relationName\":\"ClientesToContratosAlquiler\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Citas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Citas\",\"relationName\":\"CitasToClientes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ContratosAlquiler\":{\"dbName\":null,\"fields\":[{\"name\":\"num_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clientes\",\"relationName\":\"ClientesToContratosAlquiler\",\"relationFromFields\":[\"num_cliente\"],\"relationToFields\":[\"num_cliente\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inmueble\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"ContratosAlquilerToInmueblesAlquiler\",\"relationFromFields\":[\"num_inmueble\"],\"relationToFields\":[\"num_inmueble\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mod_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dep_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dur_contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Citas\":{\"dbName\":null,\"fields\":[{\"name\":\"num_cita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clientes\",\"relationName\":\"CitasToClientes\",\"relationFromFields\":[\"num_cliente\"],\"relationToFields\":[\"num_cliente\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inmueble\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InmueblesAlquiler\",\"relationName\":\"CitasToInmueblesAlquiler\",\"relationFromFields\":[\"num_inmueble\"],\"relationToFields\":[\"num_inmueble\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_inmueble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fech_cita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

