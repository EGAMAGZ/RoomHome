
/**
 * Client
**/

import * as runtime from '.././runtime/library.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Dinosaur
 * 
 */
export type Dinosaur = $Result.DefaultSelection<Prisma.$DinosaurPayload>
/**
 * Model Empleados
 * 
 */
export type Empleados = $Result.DefaultSelection<Prisma.$EmpleadosPayload>
/**
 * Model InmueblesAlquiler
 * 
 */
export type InmueblesAlquiler = $Result.DefaultSelection<Prisma.$InmueblesAlquilerPayload>
/**
 * Model PropietariosPrivados
 * 
 */
export type PropietariosPrivados = $Result.DefaultSelection<Prisma.$PropietariosPrivadosPayload>
/**
 * Model PropietariosEmpresariales
 * 
 */
export type PropietariosEmpresariales = $Result.DefaultSelection<Prisma.$PropietariosEmpresarialesPayload>
/**
 * Model Clientes
 * 
 */
export type Clientes = $Result.DefaultSelection<Prisma.$ClientesPayload>
/**
 * Model ContratosAlquiler
 * 
 */
export type ContratosAlquiler = $Result.DefaultSelection<Prisma.$ContratosAlquilerPayload>
/**
 * Model Citas
 * 
 */
export type Citas = $Result.DefaultSelection<Prisma.$CitasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dinosaurs
 * const dinosaurs = await prisma.dinosaur.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dinosaurs
   * const dinosaurs = await prisma.dinosaur.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.dinosaur`: Exposes CRUD operations for the **Dinosaur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dinosaurs
    * const dinosaurs = await prisma.dinosaur.findMany()
    * ```
    */
  get dinosaur(): Prisma.DinosaurDelegate<ExtArgs>;

  /**
   * `prisma.empleados`: Exposes CRUD operations for the **Empleados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleados.findMany()
    * ```
    */
  get empleados(): Prisma.EmpleadosDelegate<ExtArgs>;

  /**
   * `prisma.inmueblesAlquiler`: Exposes CRUD operations for the **InmueblesAlquiler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InmueblesAlquilers
    * const inmueblesAlquilers = await prisma.inmueblesAlquiler.findMany()
    * ```
    */
  get inmueblesAlquiler(): Prisma.InmueblesAlquilerDelegate<ExtArgs>;

  /**
   * `prisma.propietariosPrivados`: Exposes CRUD operations for the **PropietariosPrivados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropietariosPrivados
    * const propietariosPrivados = await prisma.propietariosPrivados.findMany()
    * ```
    */
  get propietariosPrivados(): Prisma.PropietariosPrivadosDelegate<ExtArgs>;

  /**
   * `prisma.propietariosEmpresariales`: Exposes CRUD operations for the **PropietariosEmpresariales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropietariosEmpresariales
    * const propietariosEmpresariales = await prisma.propietariosEmpresariales.findMany()
    * ```
    */
  get propietariosEmpresariales(): Prisma.PropietariosEmpresarialesDelegate<ExtArgs>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **Clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.ClientesDelegate<ExtArgs>;

  /**
   * `prisma.contratosAlquiler`: Exposes CRUD operations for the **ContratosAlquiler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContratosAlquilers
    * const contratosAlquilers = await prisma.contratosAlquiler.findMany()
    * ```
    */
  get contratosAlquiler(): Prisma.ContratosAlquilerDelegate<ExtArgs>;

  /**
   * `prisma.citas`: Exposes CRUD operations for the **Citas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.citas.findMany()
    * ```
    */
  get citas(): Prisma.CitasDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Dinosaur: 'Dinosaur',
    Empleados: 'Empleados',
    InmueblesAlquiler: 'InmueblesAlquiler',
    PropietariosPrivados: 'PropietariosPrivados',
    PropietariosEmpresariales: 'PropietariosEmpresariales',
    Clientes: 'Clientes',
    ContratosAlquiler: 'ContratosAlquiler',
    Citas: 'Citas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'dinosaur' | 'empleados' | 'inmueblesAlquiler' | 'propietariosPrivados' | 'propietariosEmpresariales' | 'clientes' | 'contratosAlquiler' | 'citas'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Dinosaur: {
        payload: Prisma.$DinosaurPayload<ExtArgs>
        fields: Prisma.DinosaurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DinosaurFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DinosaurFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload>
          }
          findFirst: {
            args: Prisma.DinosaurFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DinosaurFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload>
          }
          findMany: {
            args: Prisma.DinosaurFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload>[]
          }
          create: {
            args: Prisma.DinosaurCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload>
          }
          createMany: {
            args: Prisma.DinosaurCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DinosaurDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload>
          }
          update: {
            args: Prisma.DinosaurUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload>
          }
          deleteMany: {
            args: Prisma.DinosaurDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DinosaurUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DinosaurUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DinosaurPayload>
          }
          aggregate: {
            args: Prisma.DinosaurAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDinosaur>
          }
          groupBy: {
            args: Prisma.DinosaurGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DinosaurGroupByOutputType>[]
          }
          count: {
            args: Prisma.DinosaurCountArgs<ExtArgs>,
            result: $Utils.Optional<DinosaurCountAggregateOutputType> | number
          }
        }
      }
      Empleados: {
        payload: Prisma.$EmpleadosPayload<ExtArgs>
        fields: Prisma.EmpleadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpleadosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpleadosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload>
          }
          findFirst: {
            args: Prisma.EmpleadosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpleadosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload>
          }
          findMany: {
            args: Prisma.EmpleadosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload>[]
          }
          create: {
            args: Prisma.EmpleadosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload>
          }
          createMany: {
            args: Prisma.EmpleadosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmpleadosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload>
          }
          update: {
            args: Prisma.EmpleadosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload>
          }
          deleteMany: {
            args: Prisma.EmpleadosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmpleadosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmpleadosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpleadosPayload>
          }
          aggregate: {
            args: Prisma.EmpleadosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmpleados>
          }
          groupBy: {
            args: Prisma.EmpleadosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmpleadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpleadosCountArgs<ExtArgs>,
            result: $Utils.Optional<EmpleadosCountAggregateOutputType> | number
          }
        }
      }
      InmueblesAlquiler: {
        payload: Prisma.$InmueblesAlquilerPayload<ExtArgs>
        fields: Prisma.InmueblesAlquilerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InmueblesAlquilerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InmueblesAlquilerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload>
          }
          findFirst: {
            args: Prisma.InmueblesAlquilerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InmueblesAlquilerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload>
          }
          findMany: {
            args: Prisma.InmueblesAlquilerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload>[]
          }
          create: {
            args: Prisma.InmueblesAlquilerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload>
          }
          createMany: {
            args: Prisma.InmueblesAlquilerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InmueblesAlquilerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload>
          }
          update: {
            args: Prisma.InmueblesAlquilerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload>
          }
          deleteMany: {
            args: Prisma.InmueblesAlquilerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InmueblesAlquilerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InmueblesAlquilerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InmueblesAlquilerPayload>
          }
          aggregate: {
            args: Prisma.InmueblesAlquilerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInmueblesAlquiler>
          }
          groupBy: {
            args: Prisma.InmueblesAlquilerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InmueblesAlquilerGroupByOutputType>[]
          }
          count: {
            args: Prisma.InmueblesAlquilerCountArgs<ExtArgs>,
            result: $Utils.Optional<InmueblesAlquilerCountAggregateOutputType> | number
          }
        }
      }
      PropietariosPrivados: {
        payload: Prisma.$PropietariosPrivadosPayload<ExtArgs>
        fields: Prisma.PropietariosPrivadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropietariosPrivadosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropietariosPrivadosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload>
          }
          findFirst: {
            args: Prisma.PropietariosPrivadosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropietariosPrivadosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload>
          }
          findMany: {
            args: Prisma.PropietariosPrivadosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload>[]
          }
          create: {
            args: Prisma.PropietariosPrivadosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload>
          }
          createMany: {
            args: Prisma.PropietariosPrivadosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PropietariosPrivadosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload>
          }
          update: {
            args: Prisma.PropietariosPrivadosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload>
          }
          deleteMany: {
            args: Prisma.PropietariosPrivadosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PropietariosPrivadosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PropietariosPrivadosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosPrivadosPayload>
          }
          aggregate: {
            args: Prisma.PropietariosPrivadosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePropietariosPrivados>
          }
          groupBy: {
            args: Prisma.PropietariosPrivadosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PropietariosPrivadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropietariosPrivadosCountArgs<ExtArgs>,
            result: $Utils.Optional<PropietariosPrivadosCountAggregateOutputType> | number
          }
        }
      }
      PropietariosEmpresariales: {
        payload: Prisma.$PropietariosEmpresarialesPayload<ExtArgs>
        fields: Prisma.PropietariosEmpresarialesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropietariosEmpresarialesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropietariosEmpresarialesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload>
          }
          findFirst: {
            args: Prisma.PropietariosEmpresarialesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropietariosEmpresarialesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload>
          }
          findMany: {
            args: Prisma.PropietariosEmpresarialesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload>[]
          }
          create: {
            args: Prisma.PropietariosEmpresarialesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload>
          }
          createMany: {
            args: Prisma.PropietariosEmpresarialesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PropietariosEmpresarialesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload>
          }
          update: {
            args: Prisma.PropietariosEmpresarialesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload>
          }
          deleteMany: {
            args: Prisma.PropietariosEmpresarialesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PropietariosEmpresarialesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PropietariosEmpresarialesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropietariosEmpresarialesPayload>
          }
          aggregate: {
            args: Prisma.PropietariosEmpresarialesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePropietariosEmpresariales>
          }
          groupBy: {
            args: Prisma.PropietariosEmpresarialesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PropietariosEmpresarialesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropietariosEmpresarialesCountArgs<ExtArgs>,
            result: $Utils.Optional<PropietariosEmpresarialesCountAggregateOutputType> | number
          }
        }
      }
      Clientes: {
        payload: Prisma.$ClientesPayload<ExtArgs>
        fields: Prisma.ClientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findFirst: {
            args: Prisma.ClientesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findMany: {
            args: Prisma.ClientesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          create: {
            args: Prisma.ClientesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          createMany: {
            args: Prisma.ClientesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          update: {
            args: Prisma.ClientesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          deleteMany: {
            args: Prisma.ClientesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientesCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      ContratosAlquiler: {
        payload: Prisma.$ContratosAlquilerPayload<ExtArgs>
        fields: Prisma.ContratosAlquilerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContratosAlquilerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContratosAlquilerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload>
          }
          findFirst: {
            args: Prisma.ContratosAlquilerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContratosAlquilerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload>
          }
          findMany: {
            args: Prisma.ContratosAlquilerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload>[]
          }
          create: {
            args: Prisma.ContratosAlquilerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload>
          }
          createMany: {
            args: Prisma.ContratosAlquilerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContratosAlquilerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload>
          }
          update: {
            args: Prisma.ContratosAlquilerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload>
          }
          deleteMany: {
            args: Prisma.ContratosAlquilerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContratosAlquilerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContratosAlquilerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContratosAlquilerPayload>
          }
          aggregate: {
            args: Prisma.ContratosAlquilerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContratosAlquiler>
          }
          groupBy: {
            args: Prisma.ContratosAlquilerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContratosAlquilerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContratosAlquilerCountArgs<ExtArgs>,
            result: $Utils.Optional<ContratosAlquilerCountAggregateOutputType> | number
          }
        }
      }
      Citas: {
        payload: Prisma.$CitasPayload<ExtArgs>
        fields: Prisma.CitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          findFirst: {
            args: Prisma.CitasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          findMany: {
            args: Prisma.CitasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>[]
          }
          create: {
            args: Prisma.CitasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          createMany: {
            args: Prisma.CitasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CitasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          update: {
            args: Prisma.CitasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          deleteMany: {
            args: Prisma.CitasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CitasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CitasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          aggregate: {
            args: Prisma.CitasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCitas>
          }
          groupBy: {
            args: Prisma.CitasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitasCountArgs<ExtArgs>,
            result: $Utils.Optional<CitasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InmueblesAlquilerCountOutputType
   */

  export type InmueblesAlquilerCountOutputType = {
    ContratosAlquiler: number
    Citas: number
  }

  export type InmueblesAlquilerCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ContratosAlquiler?: boolean | InmueblesAlquilerCountOutputTypeCountContratosAlquilerArgs
    Citas?: boolean | InmueblesAlquilerCountOutputTypeCountCitasArgs
  }

  // Custom InputTypes

  /**
   * InmueblesAlquilerCountOutputType without action
   */
  export type InmueblesAlquilerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquilerCountOutputType
     */
    select?: InmueblesAlquilerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * InmueblesAlquilerCountOutputType without action
   */
  export type InmueblesAlquilerCountOutputTypeCountContratosAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ContratosAlquilerWhereInput
  }


  /**
   * InmueblesAlquilerCountOutputType without action
   */
  export type InmueblesAlquilerCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
  }



  /**
   * Count Type PropietariosPrivadosCountOutputType
   */

  export type PropietariosPrivadosCountOutputType = {
    InmueblesAlquiler: number
  }

  export type PropietariosPrivadosCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    InmueblesAlquiler?: boolean | PropietariosPrivadosCountOutputTypeCountInmueblesAlquilerArgs
  }

  // Custom InputTypes

  /**
   * PropietariosPrivadosCountOutputType without action
   */
  export type PropietariosPrivadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivadosCountOutputType
     */
    select?: PropietariosPrivadosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PropietariosPrivadosCountOutputType without action
   */
  export type PropietariosPrivadosCountOutputTypeCountInmueblesAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InmueblesAlquilerWhereInput
  }



  /**
   * Count Type PropietariosEmpresarialesCountOutputType
   */

  export type PropietariosEmpresarialesCountOutputType = {
    InmueblesAlquiler: number
  }

  export type PropietariosEmpresarialesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    InmueblesAlquiler?: boolean | PropietariosEmpresarialesCountOutputTypeCountInmueblesAlquilerArgs
  }

  // Custom InputTypes

  /**
   * PropietariosEmpresarialesCountOutputType without action
   */
  export type PropietariosEmpresarialesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresarialesCountOutputType
     */
    select?: PropietariosEmpresarialesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PropietariosEmpresarialesCountOutputType without action
   */
  export type PropietariosEmpresarialesCountOutputTypeCountInmueblesAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InmueblesAlquilerWhereInput
  }



  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    ContratosAlquiler: number
    Citas: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ContratosAlquiler?: boolean | ClientesCountOutputTypeCountContratosAlquilerArgs
    Citas?: boolean | ClientesCountOutputTypeCountCitasArgs
  }

  // Custom InputTypes

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountContratosAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ContratosAlquilerWhereInput
  }


  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Dinosaur
   */

  export type AggregateDinosaur = {
    _count: DinosaurCountAggregateOutputType | null
    _avg: DinosaurAvgAggregateOutputType | null
    _sum: DinosaurSumAggregateOutputType | null
    _min: DinosaurMinAggregateOutputType | null
    _max: DinosaurMaxAggregateOutputType | null
  }

  export type DinosaurAvgAggregateOutputType = {
    id: number | null
  }

  export type DinosaurSumAggregateOutputType = {
    id: number | null
  }

  export type DinosaurMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type DinosaurMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type DinosaurCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type DinosaurAvgAggregateInputType = {
    id?: true
  }

  export type DinosaurSumAggregateInputType = {
    id?: true
  }

  export type DinosaurMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DinosaurMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DinosaurCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type DinosaurAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dinosaur to aggregate.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: DinosaurOrderByWithRelationInput | DinosaurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dinosaurs
    **/
    _count?: true | DinosaurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DinosaurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DinosaurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DinosaurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DinosaurMaxAggregateInputType
  }

  export type GetDinosaurAggregateType<T extends DinosaurAggregateArgs> = {
        [P in keyof T & keyof AggregateDinosaur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDinosaur[P]>
      : GetScalarType<T[P], AggregateDinosaur[P]>
  }




  export type DinosaurGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DinosaurWhereInput
    orderBy?: DinosaurOrderByWithAggregationInput | DinosaurOrderByWithAggregationInput[]
    by: DinosaurScalarFieldEnum[] | DinosaurScalarFieldEnum
    having?: DinosaurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DinosaurCountAggregateInputType | true
    _avg?: DinosaurAvgAggregateInputType
    _sum?: DinosaurSumAggregateInputType
    _min?: DinosaurMinAggregateInputType
    _max?: DinosaurMaxAggregateInputType
  }

  export type DinosaurGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: DinosaurCountAggregateOutputType | null
    _avg: DinosaurAvgAggregateOutputType | null
    _sum: DinosaurSumAggregateOutputType | null
    _min: DinosaurMinAggregateOutputType | null
    _max: DinosaurMaxAggregateOutputType | null
  }

  type GetDinosaurGroupByPayload<T extends DinosaurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DinosaurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DinosaurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DinosaurGroupByOutputType[P]>
            : GetScalarType<T[P], DinosaurGroupByOutputType[P]>
        }
      >
    >


  export type DinosaurSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["dinosaur"]>

  export type DinosaurSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }


  export type $DinosaurPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Dinosaur"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["dinosaur"]>
    composites: {}
  }


  type DinosaurGetPayload<S extends boolean | null | undefined | DinosaurDefaultArgs> = $Result.GetResult<Prisma.$DinosaurPayload, S>

  type DinosaurCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DinosaurFindManyArgs, 'select' | 'include'> & {
      select?: DinosaurCountAggregateInputType | true
    }

  export interface DinosaurDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dinosaur'], meta: { name: 'Dinosaur' } }
    /**
     * Find zero or one Dinosaur that matches the filter.
     * @param {DinosaurFindUniqueArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DinosaurFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DinosaurFindUniqueArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dinosaur that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DinosaurFindUniqueOrThrowArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DinosaurFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DinosaurFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dinosaur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurFindFirstArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DinosaurFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DinosaurFindFirstArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dinosaur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurFindFirstOrThrowArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DinosaurFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DinosaurFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dinosaurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dinosaurs
     * const dinosaurs = await prisma.dinosaur.findMany()
     * 
     * // Get first 10 Dinosaurs
     * const dinosaurs = await prisma.dinosaur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dinosaurWithIdOnly = await prisma.dinosaur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DinosaurFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DinosaurFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dinosaur.
     * @param {DinosaurCreateArgs} args - Arguments to create a Dinosaur.
     * @example
     * // Create one Dinosaur
     * const Dinosaur = await prisma.dinosaur.create({
     *   data: {
     *     // ... data to create a Dinosaur
     *   }
     * })
     * 
    **/
    create<T extends DinosaurCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DinosaurCreateArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dinosaurs.
     *     @param {DinosaurCreateManyArgs} args - Arguments to create many Dinosaurs.
     *     @example
     *     // Create many Dinosaurs
     *     const dinosaur = await prisma.dinosaur.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DinosaurCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DinosaurCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dinosaur.
     * @param {DinosaurDeleteArgs} args - Arguments to delete one Dinosaur.
     * @example
     * // Delete one Dinosaur
     * const Dinosaur = await prisma.dinosaur.delete({
     *   where: {
     *     // ... filter to delete one Dinosaur
     *   }
     * })
     * 
    **/
    delete<T extends DinosaurDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DinosaurDeleteArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dinosaur.
     * @param {DinosaurUpdateArgs} args - Arguments to update one Dinosaur.
     * @example
     * // Update one Dinosaur
     * const dinosaur = await prisma.dinosaur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DinosaurUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DinosaurUpdateArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dinosaurs.
     * @param {DinosaurDeleteManyArgs} args - Arguments to filter Dinosaurs to delete.
     * @example
     * // Delete a few Dinosaurs
     * const { count } = await prisma.dinosaur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DinosaurDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DinosaurDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dinosaurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dinosaurs
     * const dinosaur = await prisma.dinosaur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DinosaurUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DinosaurUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dinosaur.
     * @param {DinosaurUpsertArgs} args - Arguments to update or create a Dinosaur.
     * @example
     * // Update or create a Dinosaur
     * const dinosaur = await prisma.dinosaur.upsert({
     *   create: {
     *     // ... data to create a Dinosaur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dinosaur we want to update
     *   }
     * })
    **/
    upsert<T extends DinosaurUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DinosaurUpsertArgs<ExtArgs>>
    ): Prisma__DinosaurClient<$Result.GetResult<Prisma.$DinosaurPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dinosaurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurCountArgs} args - Arguments to filter Dinosaurs to count.
     * @example
     * // Count the number of Dinosaurs
     * const count = await prisma.dinosaur.count({
     *   where: {
     *     // ... the filter for the Dinosaurs we want to count
     *   }
     * })
    **/
    count<T extends DinosaurCountArgs>(
      args?: Subset<T, DinosaurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DinosaurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dinosaur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DinosaurAggregateArgs>(args: Subset<T, DinosaurAggregateArgs>): Prisma.PrismaPromise<GetDinosaurAggregateType<T>>

    /**
     * Group by Dinosaur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DinosaurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DinosaurGroupByArgs['orderBy'] }
        : { orderBy?: DinosaurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DinosaurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDinosaurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dinosaur model
   */
  readonly fields: DinosaurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dinosaur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DinosaurClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dinosaur model
   */ 
  interface DinosaurFieldRefs {
    readonly id: FieldRef<"Dinosaur", 'Int'>
    readonly name: FieldRef<"Dinosaur", 'String'>
    readonly description: FieldRef<"Dinosaur", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Dinosaur findUnique
   */
  export type DinosaurFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where: DinosaurWhereUniqueInput
  }


  /**
   * Dinosaur findUniqueOrThrow
   */
  export type DinosaurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where: DinosaurWhereUniqueInput
  }


  /**
   * Dinosaur findFirst
   */
  export type DinosaurFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: DinosaurOrderByWithRelationInput | DinosaurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dinosaurs.
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dinosaurs.
     */
    distinct?: DinosaurScalarFieldEnum | DinosaurScalarFieldEnum[]
  }


  /**
   * Dinosaur findFirstOrThrow
   */
  export type DinosaurFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: DinosaurOrderByWithRelationInput | DinosaurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dinosaurs.
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dinosaurs.
     */
    distinct?: DinosaurScalarFieldEnum | DinosaurScalarFieldEnum[]
  }


  /**
   * Dinosaur findMany
   */
  export type DinosaurFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * Filter, which Dinosaurs to fetch.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: DinosaurOrderByWithRelationInput | DinosaurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dinosaurs.
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    distinct?: DinosaurScalarFieldEnum | DinosaurScalarFieldEnum[]
  }


  /**
   * Dinosaur create
   */
  export type DinosaurCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * The data needed to create a Dinosaur.
     */
    data: XOR<DinosaurCreateInput, DinosaurUncheckedCreateInput>
  }


  /**
   * Dinosaur createMany
   */
  export type DinosaurCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dinosaurs.
     */
    data: DinosaurCreateManyInput | DinosaurCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Dinosaur update
   */
  export type DinosaurUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * The data needed to update a Dinosaur.
     */
    data: XOR<DinosaurUpdateInput, DinosaurUncheckedUpdateInput>
    /**
     * Choose, which Dinosaur to update.
     */
    where: DinosaurWhereUniqueInput
  }


  /**
   * Dinosaur updateMany
   */
  export type DinosaurUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dinosaurs.
     */
    data: XOR<DinosaurUpdateManyMutationInput, DinosaurUncheckedUpdateManyInput>
    /**
     * Filter which Dinosaurs to update
     */
    where?: DinosaurWhereInput
  }


  /**
   * Dinosaur upsert
   */
  export type DinosaurUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * The filter to search for the Dinosaur to update in case it exists.
     */
    where: DinosaurWhereUniqueInput
    /**
     * In case the Dinosaur found by the `where` argument doesn't exist, create a new Dinosaur with this data.
     */
    create: XOR<DinosaurCreateInput, DinosaurUncheckedCreateInput>
    /**
     * In case the Dinosaur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DinosaurUpdateInput, DinosaurUncheckedUpdateInput>
  }


  /**
   * Dinosaur delete
   */
  export type DinosaurDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
    /**
     * Filter which Dinosaur to delete.
     */
    where: DinosaurWhereUniqueInput
  }


  /**
   * Dinosaur deleteMany
   */
  export type DinosaurDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dinosaurs to delete
     */
    where?: DinosaurWhereInput
  }


  /**
   * Dinosaur without action
   */
  export type DinosaurDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect<ExtArgs> | null
  }



  /**
   * Model Empleados
   */

  export type AggregateEmpleados = {
    _count: EmpleadosCountAggregateOutputType | null
    _avg: EmpleadosAvgAggregateOutputType | null
    _sum: EmpleadosSumAggregateOutputType | null
    _min: EmpleadosMinAggregateOutputType | null
    _max: EmpleadosMaxAggregateOutputType | null
  }

  export type EmpleadosAvgAggregateOutputType = {
    num_empleado: number | null
    sal_empleado: number | null
  }

  export type EmpleadosSumAggregateOutputType = {
    num_empleado: number | null
    sal_empleado: number | null
  }

  export type EmpleadosMinAggregateOutputType = {
    num_empleado: number | null
    nom_empleado: string | null
    dir_empleado: string | null
    cat_empleado: string | null
    sal_empleado: number | null
    nom_supervisor: string | null
    cor_empleado: string | null
    pas_empleado: string | null
  }

  export type EmpleadosMaxAggregateOutputType = {
    num_empleado: number | null
    nom_empleado: string | null
    dir_empleado: string | null
    cat_empleado: string | null
    sal_empleado: number | null
    nom_supervisor: string | null
    cor_empleado: string | null
    pas_empleado: string | null
  }

  export type EmpleadosCountAggregateOutputType = {
    num_empleado: number
    nom_empleado: number
    dir_empleado: number
    cat_empleado: number
    sal_empleado: number
    nom_supervisor: number
    cor_empleado: number
    pas_empleado: number
    _all: number
  }


  export type EmpleadosAvgAggregateInputType = {
    num_empleado?: true
    sal_empleado?: true
  }

  export type EmpleadosSumAggregateInputType = {
    num_empleado?: true
    sal_empleado?: true
  }

  export type EmpleadosMinAggregateInputType = {
    num_empleado?: true
    nom_empleado?: true
    dir_empleado?: true
    cat_empleado?: true
    sal_empleado?: true
    nom_supervisor?: true
    cor_empleado?: true
    pas_empleado?: true
  }

  export type EmpleadosMaxAggregateInputType = {
    num_empleado?: true
    nom_empleado?: true
    dir_empleado?: true
    cat_empleado?: true
    sal_empleado?: true
    nom_supervisor?: true
    cor_empleado?: true
    pas_empleado?: true
  }

  export type EmpleadosCountAggregateInputType = {
    num_empleado?: true
    nom_empleado?: true
    dir_empleado?: true
    cat_empleado?: true
    sal_empleado?: true
    nom_supervisor?: true
    cor_empleado?: true
    pas_empleado?: true
    _all?: true
  }

  export type EmpleadosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to aggregate.
     */
    where?: EmpleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadosOrderByWithRelationInput | EmpleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empleados
    **/
    _count?: true | EmpleadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadosMaxAggregateInputType
  }

  export type GetEmpleadosAggregateType<T extends EmpleadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleados[P]>
      : GetScalarType<T[P], AggregateEmpleados[P]>
  }




  export type EmpleadosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmpleadosWhereInput
    orderBy?: EmpleadosOrderByWithAggregationInput | EmpleadosOrderByWithAggregationInput[]
    by: EmpleadosScalarFieldEnum[] | EmpleadosScalarFieldEnum
    having?: EmpleadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadosCountAggregateInputType | true
    _avg?: EmpleadosAvgAggregateInputType
    _sum?: EmpleadosSumAggregateInputType
    _min?: EmpleadosMinAggregateInputType
    _max?: EmpleadosMaxAggregateInputType
  }

  export type EmpleadosGroupByOutputType = {
    num_empleado: number
    nom_empleado: string
    dir_empleado: string
    cat_empleado: string
    sal_empleado: number
    nom_supervisor: string
    cor_empleado: string
    pas_empleado: string
    _count: EmpleadosCountAggregateOutputType | null
    _avg: EmpleadosAvgAggregateOutputType | null
    _sum: EmpleadosSumAggregateOutputType | null
    _min: EmpleadosMinAggregateOutputType | null
    _max: EmpleadosMaxAggregateOutputType | null
  }

  type GetEmpleadosGroupByPayload<T extends EmpleadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadosGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadosGroupByOutputType[P]>
        }
      >
    >


  export type EmpleadosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_empleado?: boolean
    nom_empleado?: boolean
    dir_empleado?: boolean
    cat_empleado?: boolean
    sal_empleado?: boolean
    nom_supervisor?: boolean
    cor_empleado?: boolean
    pas_empleado?: boolean
  }, ExtArgs["result"]["empleados"]>

  export type EmpleadosSelectScalar = {
    num_empleado?: boolean
    nom_empleado?: boolean
    dir_empleado?: boolean
    cat_empleado?: boolean
    sal_empleado?: boolean
    nom_supervisor?: boolean
    cor_empleado?: boolean
    pas_empleado?: boolean
  }


  export type $EmpleadosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Empleados"
    objects: {}
    scalars: $Extensions.GetResult<{
      num_empleado: number
      nom_empleado: string
      dir_empleado: string
      cat_empleado: string
      sal_empleado: number
      nom_supervisor: string
      cor_empleado: string
      pas_empleado: string
    }, ExtArgs["result"]["empleados"]>
    composites: {}
  }


  type EmpleadosGetPayload<S extends boolean | null | undefined | EmpleadosDefaultArgs> = $Result.GetResult<Prisma.$EmpleadosPayload, S>

  type EmpleadosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EmpleadosFindManyArgs, 'select' | 'include'> & {
      select?: EmpleadosCountAggregateInputType | true
    }

  export interface EmpleadosDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empleados'], meta: { name: 'Empleados' } }
    /**
     * Find zero or one Empleados that matches the filter.
     * @param {EmpleadosFindUniqueArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmpleadosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmpleadosFindUniqueArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Empleados that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmpleadosFindUniqueOrThrowArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmpleadosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpleadosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosFindFirstArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmpleadosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpleadosFindFirstArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Empleados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosFindFirstOrThrowArgs} args - Arguments to find a Empleados
     * @example
     * // Get one Empleados
     * const empleados = await prisma.empleados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmpleadosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpleadosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleados.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleados.findMany({ take: 10 })
     * 
     * // Only select the `num_empleado`
     * const empleadosWithNum_empleadoOnly = await prisma.empleados.findMany({ select: { num_empleado: true } })
     * 
    **/
    findMany<T extends EmpleadosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpleadosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Empleados.
     * @param {EmpleadosCreateArgs} args - Arguments to create a Empleados.
     * @example
     * // Create one Empleados
     * const Empleados = await prisma.empleados.create({
     *   data: {
     *     // ... data to create a Empleados
     *   }
     * })
     * 
    **/
    create<T extends EmpleadosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmpleadosCreateArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Empleados.
     *     @param {EmpleadosCreateManyArgs} args - Arguments to create many Empleados.
     *     @example
     *     // Create many Empleados
     *     const empleados = await prisma.empleados.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmpleadosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpleadosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empleados.
     * @param {EmpleadosDeleteArgs} args - Arguments to delete one Empleados.
     * @example
     * // Delete one Empleados
     * const Empleados = await prisma.empleados.delete({
     *   where: {
     *     // ... filter to delete one Empleados
     *   }
     * })
     * 
    **/
    delete<T extends EmpleadosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmpleadosDeleteArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Empleados.
     * @param {EmpleadosUpdateArgs} args - Arguments to update one Empleados.
     * @example
     * // Update one Empleados
     * const empleados = await prisma.empleados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmpleadosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmpleadosUpdateArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Empleados.
     * @param {EmpleadosDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmpleadosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpleadosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleados = await prisma.empleados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmpleadosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmpleadosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empleados.
     * @param {EmpleadosUpsertArgs} args - Arguments to update or create a Empleados.
     * @example
     * // Update or create a Empleados
     * const empleados = await prisma.empleados.upsert({
     *   create: {
     *     // ... data to create a Empleados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleados we want to update
     *   }
     * })
    **/
    upsert<T extends EmpleadosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmpleadosUpsertArgs<ExtArgs>>
    ): Prisma__EmpleadosClient<$Result.GetResult<Prisma.$EmpleadosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleados.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends EmpleadosCountArgs>(
      args?: Subset<T, EmpleadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpleadosAggregateArgs>(args: Subset<T, EmpleadosAggregateArgs>): Prisma.PrismaPromise<GetEmpleadosAggregateType<T>>

    /**
     * Group by Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpleadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadosGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpleadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empleados model
   */
  readonly fields: EmpleadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empleados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpleadosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Empleados model
   */ 
  interface EmpleadosFieldRefs {
    readonly num_empleado: FieldRef<"Empleados", 'Int'>
    readonly nom_empleado: FieldRef<"Empleados", 'String'>
    readonly dir_empleado: FieldRef<"Empleados", 'String'>
    readonly cat_empleado: FieldRef<"Empleados", 'String'>
    readonly sal_empleado: FieldRef<"Empleados", 'Int'>
    readonly nom_supervisor: FieldRef<"Empleados", 'String'>
    readonly cor_empleado: FieldRef<"Empleados", 'String'>
    readonly pas_empleado: FieldRef<"Empleados", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Empleados findUnique
   */
  export type EmpleadosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where: EmpleadosWhereUniqueInput
  }


  /**
   * Empleados findUniqueOrThrow
   */
  export type EmpleadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where: EmpleadosWhereUniqueInput
  }


  /**
   * Empleados findFirst
   */
  export type EmpleadosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadosOrderByWithRelationInput | EmpleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadosScalarFieldEnum | EmpleadosScalarFieldEnum[]
  }


  /**
   * Empleados findFirstOrThrow
   */
  export type EmpleadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadosOrderByWithRelationInput | EmpleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadosScalarFieldEnum | EmpleadosScalarFieldEnum[]
  }


  /**
   * Empleados findMany
   */
  export type EmpleadosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadosOrderByWithRelationInput | EmpleadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empleados.
     */
    cursor?: EmpleadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    distinct?: EmpleadosScalarFieldEnum | EmpleadosScalarFieldEnum[]
  }


  /**
   * Empleados create
   */
  export type EmpleadosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * The data needed to create a Empleados.
     */
    data: XOR<EmpleadosCreateInput, EmpleadosUncheckedCreateInput>
  }


  /**
   * Empleados createMany
   */
  export type EmpleadosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadosCreateManyInput | EmpleadosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Empleados update
   */
  export type EmpleadosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * The data needed to update a Empleados.
     */
    data: XOR<EmpleadosUpdateInput, EmpleadosUncheckedUpdateInput>
    /**
     * Choose, which Empleados to update.
     */
    where: EmpleadosWhereUniqueInput
  }


  /**
   * Empleados updateMany
   */
  export type EmpleadosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadosUpdateManyMutationInput, EmpleadosUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadosWhereInput
  }


  /**
   * Empleados upsert
   */
  export type EmpleadosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * The filter to search for the Empleados to update in case it exists.
     */
    where: EmpleadosWhereUniqueInput
    /**
     * In case the Empleados found by the `where` argument doesn't exist, create a new Empleados with this data.
     */
    create: XOR<EmpleadosCreateInput, EmpleadosUncheckedCreateInput>
    /**
     * In case the Empleados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpleadosUpdateInput, EmpleadosUncheckedUpdateInput>
  }


  /**
   * Empleados delete
   */
  export type EmpleadosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
    /**
     * Filter which Empleados to delete.
     */
    where: EmpleadosWhereUniqueInput
  }


  /**
   * Empleados deleteMany
   */
  export type EmpleadosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to delete
     */
    where?: EmpleadosWhereInput
  }


  /**
   * Empleados without action
   */
  export type EmpleadosDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleados
     */
    select?: EmpleadosSelect<ExtArgs> | null
  }



  /**
   * Model InmueblesAlquiler
   */

  export type AggregateInmueblesAlquiler = {
    _count: InmueblesAlquilerCountAggregateOutputType | null
    _avg: InmueblesAlquilerAvgAggregateOutputType | null
    _sum: InmueblesAlquilerSumAggregateOutputType | null
    _min: InmueblesAlquilerMinAggregateOutputType | null
    _max: InmueblesAlquilerMaxAggregateOutputType | null
  }

  export type InmueblesAlquilerAvgAggregateOutputType = {
    num_inmueble: number | null
    num_habitaciones: number | null
    import_mensual: number | null
    num_propietario: number | null
    num_propietario_em: number | null
  }

  export type InmueblesAlquilerSumAggregateOutputType = {
    num_inmueble: number | null
    num_habitaciones: number | null
    import_mensual: bigint | null
    num_propietario: number | null
    num_propietario_em: number | null
  }

  export type InmueblesAlquilerMinAggregateOutputType = {
    num_inmueble: number | null
    dir_inmueble: string | null
    tipo_inmueble: string | null
    num_habitaciones: number | null
    import_mensual: bigint | null
    num_propietario: number | null
    num_propietario_em: number | null
  }

  export type InmueblesAlquilerMaxAggregateOutputType = {
    num_inmueble: number | null
    dir_inmueble: string | null
    tipo_inmueble: string | null
    num_habitaciones: number | null
    import_mensual: bigint | null
    num_propietario: number | null
    num_propietario_em: number | null
  }

  export type InmueblesAlquilerCountAggregateOutputType = {
    num_inmueble: number
    dir_inmueble: number
    tipo_inmueble: number
    num_habitaciones: number
    import_mensual: number
    num_propietario: number
    num_propietario_em: number
    _all: number
  }


  export type InmueblesAlquilerAvgAggregateInputType = {
    num_inmueble?: true
    num_habitaciones?: true
    import_mensual?: true
    num_propietario?: true
    num_propietario_em?: true
  }

  export type InmueblesAlquilerSumAggregateInputType = {
    num_inmueble?: true
    num_habitaciones?: true
    import_mensual?: true
    num_propietario?: true
    num_propietario_em?: true
  }

  export type InmueblesAlquilerMinAggregateInputType = {
    num_inmueble?: true
    dir_inmueble?: true
    tipo_inmueble?: true
    num_habitaciones?: true
    import_mensual?: true
    num_propietario?: true
    num_propietario_em?: true
  }

  export type InmueblesAlquilerMaxAggregateInputType = {
    num_inmueble?: true
    dir_inmueble?: true
    tipo_inmueble?: true
    num_habitaciones?: true
    import_mensual?: true
    num_propietario?: true
    num_propietario_em?: true
  }

  export type InmueblesAlquilerCountAggregateInputType = {
    num_inmueble?: true
    dir_inmueble?: true
    tipo_inmueble?: true
    num_habitaciones?: true
    import_mensual?: true
    num_propietario?: true
    num_propietario_em?: true
    _all?: true
  }

  export type InmueblesAlquilerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InmueblesAlquiler to aggregate.
     */
    where?: InmueblesAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InmueblesAlquilers to fetch.
     */
    orderBy?: InmueblesAlquilerOrderByWithRelationInput | InmueblesAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InmueblesAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InmueblesAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InmueblesAlquilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InmueblesAlquilers
    **/
    _count?: true | InmueblesAlquilerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InmueblesAlquilerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InmueblesAlquilerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InmueblesAlquilerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InmueblesAlquilerMaxAggregateInputType
  }

  export type GetInmueblesAlquilerAggregateType<T extends InmueblesAlquilerAggregateArgs> = {
        [P in keyof T & keyof AggregateInmueblesAlquiler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInmueblesAlquiler[P]>
      : GetScalarType<T[P], AggregateInmueblesAlquiler[P]>
  }




  export type InmueblesAlquilerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InmueblesAlquilerWhereInput
    orderBy?: InmueblesAlquilerOrderByWithAggregationInput | InmueblesAlquilerOrderByWithAggregationInput[]
    by: InmueblesAlquilerScalarFieldEnum[] | InmueblesAlquilerScalarFieldEnum
    having?: InmueblesAlquilerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InmueblesAlquilerCountAggregateInputType | true
    _avg?: InmueblesAlquilerAvgAggregateInputType
    _sum?: InmueblesAlquilerSumAggregateInputType
    _min?: InmueblesAlquilerMinAggregateInputType
    _max?: InmueblesAlquilerMaxAggregateInputType
  }

  export type InmueblesAlquilerGroupByOutputType = {
    num_inmueble: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint
    num_propietario: number | null
    num_propietario_em: number | null
    _count: InmueblesAlquilerCountAggregateOutputType | null
    _avg: InmueblesAlquilerAvgAggregateOutputType | null
    _sum: InmueblesAlquilerSumAggregateOutputType | null
    _min: InmueblesAlquilerMinAggregateOutputType | null
    _max: InmueblesAlquilerMaxAggregateOutputType | null
  }

  type GetInmueblesAlquilerGroupByPayload<T extends InmueblesAlquilerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InmueblesAlquilerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InmueblesAlquilerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InmueblesAlquilerGroupByOutputType[P]>
            : GetScalarType<T[P], InmueblesAlquilerGroupByOutputType[P]>
        }
      >
    >


  export type InmueblesAlquilerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_inmueble?: boolean
    dir_inmueble?: boolean
    tipo_inmueble?: boolean
    num_habitaciones?: boolean
    import_mensual?: boolean
    num_propietario?: boolean
    num_propietario_em?: boolean
    ContratosAlquiler?: boolean | InmueblesAlquiler$ContratosAlquilerArgs<ExtArgs>
    Citas?: boolean | InmueblesAlquiler$CitasArgs<ExtArgs>
    propietarioPrivado?: boolean | InmueblesAlquiler$propietarioPrivadoArgs<ExtArgs>
    propietarioEmpresarial?: boolean | InmueblesAlquiler$propietarioEmpresarialArgs<ExtArgs>
    _count?: boolean | InmueblesAlquilerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inmueblesAlquiler"]>

  export type InmueblesAlquilerSelectScalar = {
    num_inmueble?: boolean
    dir_inmueble?: boolean
    tipo_inmueble?: boolean
    num_habitaciones?: boolean
    import_mensual?: boolean
    num_propietario?: boolean
    num_propietario_em?: boolean
  }

  export type InmueblesAlquilerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ContratosAlquiler?: boolean | InmueblesAlquiler$ContratosAlquilerArgs<ExtArgs>
    Citas?: boolean | InmueblesAlquiler$CitasArgs<ExtArgs>
    propietarioPrivado?: boolean | InmueblesAlquiler$propietarioPrivadoArgs<ExtArgs>
    propietarioEmpresarial?: boolean | InmueblesAlquiler$propietarioEmpresarialArgs<ExtArgs>
    _count?: boolean | InmueblesAlquilerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $InmueblesAlquilerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "InmueblesAlquiler"
    objects: {
      ContratosAlquiler: Prisma.$ContratosAlquilerPayload<ExtArgs>[]
      Citas: Prisma.$CitasPayload<ExtArgs>[]
      propietarioPrivado: Prisma.$PropietariosPrivadosPayload<ExtArgs> | null
      propietarioEmpresarial: Prisma.$PropietariosEmpresarialesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      num_inmueble: number
      dir_inmueble: string
      tipo_inmueble: string
      num_habitaciones: number
      import_mensual: bigint
      num_propietario: number | null
      num_propietario_em: number | null
    }, ExtArgs["result"]["inmueblesAlquiler"]>
    composites: {}
  }


  type InmueblesAlquilerGetPayload<S extends boolean | null | undefined | InmueblesAlquilerDefaultArgs> = $Result.GetResult<Prisma.$InmueblesAlquilerPayload, S>

  type InmueblesAlquilerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<InmueblesAlquilerFindManyArgs, 'select' | 'include'> & {
      select?: InmueblesAlquilerCountAggregateInputType | true
    }

  export interface InmueblesAlquilerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InmueblesAlquiler'], meta: { name: 'InmueblesAlquiler' } }
    /**
     * Find zero or one InmueblesAlquiler that matches the filter.
     * @param {InmueblesAlquilerFindUniqueArgs} args - Arguments to find a InmueblesAlquiler
     * @example
     * // Get one InmueblesAlquiler
     * const inmueblesAlquiler = await prisma.inmueblesAlquiler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InmueblesAlquilerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InmueblesAlquilerFindUniqueArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InmueblesAlquiler that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InmueblesAlquilerFindUniqueOrThrowArgs} args - Arguments to find a InmueblesAlquiler
     * @example
     * // Get one InmueblesAlquiler
     * const inmueblesAlquiler = await prisma.inmueblesAlquiler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InmueblesAlquilerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InmueblesAlquilerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InmueblesAlquiler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmueblesAlquilerFindFirstArgs} args - Arguments to find a InmueblesAlquiler
     * @example
     * // Get one InmueblesAlquiler
     * const inmueblesAlquiler = await prisma.inmueblesAlquiler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InmueblesAlquilerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InmueblesAlquilerFindFirstArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InmueblesAlquiler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmueblesAlquilerFindFirstOrThrowArgs} args - Arguments to find a InmueblesAlquiler
     * @example
     * // Get one InmueblesAlquiler
     * const inmueblesAlquiler = await prisma.inmueblesAlquiler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InmueblesAlquilerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InmueblesAlquilerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InmueblesAlquilers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmueblesAlquilerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InmueblesAlquilers
     * const inmueblesAlquilers = await prisma.inmueblesAlquiler.findMany()
     * 
     * // Get first 10 InmueblesAlquilers
     * const inmueblesAlquilers = await prisma.inmueblesAlquiler.findMany({ take: 10 })
     * 
     * // Only select the `num_inmueble`
     * const inmueblesAlquilerWithNum_inmuebleOnly = await prisma.inmueblesAlquiler.findMany({ select: { num_inmueble: true } })
     * 
    **/
    findMany<T extends InmueblesAlquilerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InmueblesAlquilerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InmueblesAlquiler.
     * @param {InmueblesAlquilerCreateArgs} args - Arguments to create a InmueblesAlquiler.
     * @example
     * // Create one InmueblesAlquiler
     * const InmueblesAlquiler = await prisma.inmueblesAlquiler.create({
     *   data: {
     *     // ... data to create a InmueblesAlquiler
     *   }
     * })
     * 
    **/
    create<T extends InmueblesAlquilerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InmueblesAlquilerCreateArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InmueblesAlquilers.
     *     @param {InmueblesAlquilerCreateManyArgs} args - Arguments to create many InmueblesAlquilers.
     *     @example
     *     // Create many InmueblesAlquilers
     *     const inmueblesAlquiler = await prisma.inmueblesAlquiler.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InmueblesAlquilerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InmueblesAlquilerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InmueblesAlquiler.
     * @param {InmueblesAlquilerDeleteArgs} args - Arguments to delete one InmueblesAlquiler.
     * @example
     * // Delete one InmueblesAlquiler
     * const InmueblesAlquiler = await prisma.inmueblesAlquiler.delete({
     *   where: {
     *     // ... filter to delete one InmueblesAlquiler
     *   }
     * })
     * 
    **/
    delete<T extends InmueblesAlquilerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InmueblesAlquilerDeleteArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InmueblesAlquiler.
     * @param {InmueblesAlquilerUpdateArgs} args - Arguments to update one InmueblesAlquiler.
     * @example
     * // Update one InmueblesAlquiler
     * const inmueblesAlquiler = await prisma.inmueblesAlquiler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InmueblesAlquilerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InmueblesAlquilerUpdateArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InmueblesAlquilers.
     * @param {InmueblesAlquilerDeleteManyArgs} args - Arguments to filter InmueblesAlquilers to delete.
     * @example
     * // Delete a few InmueblesAlquilers
     * const { count } = await prisma.inmueblesAlquiler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InmueblesAlquilerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InmueblesAlquilerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InmueblesAlquilers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmueblesAlquilerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InmueblesAlquilers
     * const inmueblesAlquiler = await prisma.inmueblesAlquiler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InmueblesAlquilerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InmueblesAlquilerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InmueblesAlquiler.
     * @param {InmueblesAlquilerUpsertArgs} args - Arguments to update or create a InmueblesAlquiler.
     * @example
     * // Update or create a InmueblesAlquiler
     * const inmueblesAlquiler = await prisma.inmueblesAlquiler.upsert({
     *   create: {
     *     // ... data to create a InmueblesAlquiler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InmueblesAlquiler we want to update
     *   }
     * })
    **/
    upsert<T extends InmueblesAlquilerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InmueblesAlquilerUpsertArgs<ExtArgs>>
    ): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InmueblesAlquilers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmueblesAlquilerCountArgs} args - Arguments to filter InmueblesAlquilers to count.
     * @example
     * // Count the number of InmueblesAlquilers
     * const count = await prisma.inmueblesAlquiler.count({
     *   where: {
     *     // ... the filter for the InmueblesAlquilers we want to count
     *   }
     * })
    **/
    count<T extends InmueblesAlquilerCountArgs>(
      args?: Subset<T, InmueblesAlquilerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InmueblesAlquilerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InmueblesAlquiler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmueblesAlquilerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InmueblesAlquilerAggregateArgs>(args: Subset<T, InmueblesAlquilerAggregateArgs>): Prisma.PrismaPromise<GetInmueblesAlquilerAggregateType<T>>

    /**
     * Group by InmueblesAlquiler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InmueblesAlquilerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InmueblesAlquilerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InmueblesAlquilerGroupByArgs['orderBy'] }
        : { orderBy?: InmueblesAlquilerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InmueblesAlquilerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInmueblesAlquilerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InmueblesAlquiler model
   */
  readonly fields: InmueblesAlquilerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InmueblesAlquiler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InmueblesAlquilerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ContratosAlquiler<T extends InmueblesAlquiler$ContratosAlquilerArgs<ExtArgs> = {}>(args?: Subset<T, InmueblesAlquiler$ContratosAlquilerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'findMany'> | Null>;

    Citas<T extends InmueblesAlquiler$CitasArgs<ExtArgs> = {}>(args?: Subset<T, InmueblesAlquiler$CitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'findMany'> | Null>;

    propietarioPrivado<T extends InmueblesAlquiler$propietarioPrivadoArgs<ExtArgs> = {}>(args?: Subset<T, InmueblesAlquiler$propietarioPrivadoArgs<ExtArgs>>): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    propietarioEmpresarial<T extends InmueblesAlquiler$propietarioEmpresarialArgs<ExtArgs> = {}>(args?: Subset<T, InmueblesAlquiler$propietarioEmpresarialArgs<ExtArgs>>): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InmueblesAlquiler model
   */ 
  interface InmueblesAlquilerFieldRefs {
    readonly num_inmueble: FieldRef<"InmueblesAlquiler", 'Int'>
    readonly dir_inmueble: FieldRef<"InmueblesAlquiler", 'String'>
    readonly tipo_inmueble: FieldRef<"InmueblesAlquiler", 'String'>
    readonly num_habitaciones: FieldRef<"InmueblesAlquiler", 'Int'>
    readonly import_mensual: FieldRef<"InmueblesAlquiler", 'BigInt'>
    readonly num_propietario: FieldRef<"InmueblesAlquiler", 'Int'>
    readonly num_propietario_em: FieldRef<"InmueblesAlquiler", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * InmueblesAlquiler findUnique
   */
  export type InmueblesAlquilerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which InmueblesAlquiler to fetch.
     */
    where: InmueblesAlquilerWhereUniqueInput
  }


  /**
   * InmueblesAlquiler findUniqueOrThrow
   */
  export type InmueblesAlquilerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which InmueblesAlquiler to fetch.
     */
    where: InmueblesAlquilerWhereUniqueInput
  }


  /**
   * InmueblesAlquiler findFirst
   */
  export type InmueblesAlquilerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which InmueblesAlquiler to fetch.
     */
    where?: InmueblesAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InmueblesAlquilers to fetch.
     */
    orderBy?: InmueblesAlquilerOrderByWithRelationInput | InmueblesAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InmueblesAlquilers.
     */
    cursor?: InmueblesAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InmueblesAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InmueblesAlquilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InmueblesAlquilers.
     */
    distinct?: InmueblesAlquilerScalarFieldEnum | InmueblesAlquilerScalarFieldEnum[]
  }


  /**
   * InmueblesAlquiler findFirstOrThrow
   */
  export type InmueblesAlquilerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which InmueblesAlquiler to fetch.
     */
    where?: InmueblesAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InmueblesAlquilers to fetch.
     */
    orderBy?: InmueblesAlquilerOrderByWithRelationInput | InmueblesAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InmueblesAlquilers.
     */
    cursor?: InmueblesAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InmueblesAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InmueblesAlquilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InmueblesAlquilers.
     */
    distinct?: InmueblesAlquilerScalarFieldEnum | InmueblesAlquilerScalarFieldEnum[]
  }


  /**
   * InmueblesAlquiler findMany
   */
  export type InmueblesAlquilerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which InmueblesAlquilers to fetch.
     */
    where?: InmueblesAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InmueblesAlquilers to fetch.
     */
    orderBy?: InmueblesAlquilerOrderByWithRelationInput | InmueblesAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InmueblesAlquilers.
     */
    cursor?: InmueblesAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InmueblesAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InmueblesAlquilers.
     */
    skip?: number
    distinct?: InmueblesAlquilerScalarFieldEnum | InmueblesAlquilerScalarFieldEnum[]
  }


  /**
   * InmueblesAlquiler create
   */
  export type InmueblesAlquilerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * The data needed to create a InmueblesAlquiler.
     */
    data: XOR<InmueblesAlquilerCreateInput, InmueblesAlquilerUncheckedCreateInput>
  }


  /**
   * InmueblesAlquiler createMany
   */
  export type InmueblesAlquilerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InmueblesAlquilers.
     */
    data: InmueblesAlquilerCreateManyInput | InmueblesAlquilerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InmueblesAlquiler update
   */
  export type InmueblesAlquilerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * The data needed to update a InmueblesAlquiler.
     */
    data: XOR<InmueblesAlquilerUpdateInput, InmueblesAlquilerUncheckedUpdateInput>
    /**
     * Choose, which InmueblesAlquiler to update.
     */
    where: InmueblesAlquilerWhereUniqueInput
  }


  /**
   * InmueblesAlquiler updateMany
   */
  export type InmueblesAlquilerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InmueblesAlquilers.
     */
    data: XOR<InmueblesAlquilerUpdateManyMutationInput, InmueblesAlquilerUncheckedUpdateManyInput>
    /**
     * Filter which InmueblesAlquilers to update
     */
    where?: InmueblesAlquilerWhereInput
  }


  /**
   * InmueblesAlquiler upsert
   */
  export type InmueblesAlquilerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * The filter to search for the InmueblesAlquiler to update in case it exists.
     */
    where: InmueblesAlquilerWhereUniqueInput
    /**
     * In case the InmueblesAlquiler found by the `where` argument doesn't exist, create a new InmueblesAlquiler with this data.
     */
    create: XOR<InmueblesAlquilerCreateInput, InmueblesAlquilerUncheckedCreateInput>
    /**
     * In case the InmueblesAlquiler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InmueblesAlquilerUpdateInput, InmueblesAlquilerUncheckedUpdateInput>
  }


  /**
   * InmueblesAlquiler delete
   */
  export type InmueblesAlquilerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    /**
     * Filter which InmueblesAlquiler to delete.
     */
    where: InmueblesAlquilerWhereUniqueInput
  }


  /**
   * InmueblesAlquiler deleteMany
   */
  export type InmueblesAlquilerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InmueblesAlquilers to delete
     */
    where?: InmueblesAlquilerWhereInput
  }


  /**
   * InmueblesAlquiler.ContratosAlquiler
   */
  export type InmueblesAlquiler$ContratosAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    where?: ContratosAlquilerWhereInput
    orderBy?: ContratosAlquilerOrderByWithRelationInput | ContratosAlquilerOrderByWithRelationInput[]
    cursor?: ContratosAlquilerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratosAlquilerScalarFieldEnum | ContratosAlquilerScalarFieldEnum[]
  }


  /**
   * InmueblesAlquiler.Citas
   */
  export type InmueblesAlquiler$CitasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    cursor?: CitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }


  /**
   * InmueblesAlquiler.propietarioPrivado
   */
  export type InmueblesAlquiler$propietarioPrivadoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    where?: PropietariosPrivadosWhereInput
  }


  /**
   * InmueblesAlquiler.propietarioEmpresarial
   */
  export type InmueblesAlquiler$propietarioEmpresarialArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    where?: PropietariosEmpresarialesWhereInput
  }


  /**
   * InmueblesAlquiler without action
   */
  export type InmueblesAlquilerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
  }



  /**
   * Model PropietariosPrivados
   */

  export type AggregatePropietariosPrivados = {
    _count: PropietariosPrivadosCountAggregateOutputType | null
    _avg: PropietariosPrivadosAvgAggregateOutputType | null
    _sum: PropietariosPrivadosSumAggregateOutputType | null
    _min: PropietariosPrivadosMinAggregateOutputType | null
    _max: PropietariosPrivadosMaxAggregateOutputType | null
  }

  export type PropietariosPrivadosAvgAggregateOutputType = {
    num_propietario: number | null
  }

  export type PropietariosPrivadosSumAggregateOutputType = {
    num_propietario: number | null
  }

  export type PropietariosPrivadosMinAggregateOutputType = {
    num_propietario: number | null
    nom_propietario: string | null
    dir_propietario: string | null
    tel_propietario: string | null
  }

  export type PropietariosPrivadosMaxAggregateOutputType = {
    num_propietario: number | null
    nom_propietario: string | null
    dir_propietario: string | null
    tel_propietario: string | null
  }

  export type PropietariosPrivadosCountAggregateOutputType = {
    num_propietario: number
    nom_propietario: number
    dir_propietario: number
    tel_propietario: number
    _all: number
  }


  export type PropietariosPrivadosAvgAggregateInputType = {
    num_propietario?: true
  }

  export type PropietariosPrivadosSumAggregateInputType = {
    num_propietario?: true
  }

  export type PropietariosPrivadosMinAggregateInputType = {
    num_propietario?: true
    nom_propietario?: true
    dir_propietario?: true
    tel_propietario?: true
  }

  export type PropietariosPrivadosMaxAggregateInputType = {
    num_propietario?: true
    nom_propietario?: true
    dir_propietario?: true
    tel_propietario?: true
  }

  export type PropietariosPrivadosCountAggregateInputType = {
    num_propietario?: true
    nom_propietario?: true
    dir_propietario?: true
    tel_propietario?: true
    _all?: true
  }

  export type PropietariosPrivadosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropietariosPrivados to aggregate.
     */
    where?: PropietariosPrivadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosPrivados to fetch.
     */
    orderBy?: PropietariosPrivadosOrderByWithRelationInput | PropietariosPrivadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropietariosPrivadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosPrivados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosPrivados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropietariosPrivados
    **/
    _count?: true | PropietariosPrivadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropietariosPrivadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropietariosPrivadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropietariosPrivadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropietariosPrivadosMaxAggregateInputType
  }

  export type GetPropietariosPrivadosAggregateType<T extends PropietariosPrivadosAggregateArgs> = {
        [P in keyof T & keyof AggregatePropietariosPrivados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropietariosPrivados[P]>
      : GetScalarType<T[P], AggregatePropietariosPrivados[P]>
  }




  export type PropietariosPrivadosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PropietariosPrivadosWhereInput
    orderBy?: PropietariosPrivadosOrderByWithAggregationInput | PropietariosPrivadosOrderByWithAggregationInput[]
    by: PropietariosPrivadosScalarFieldEnum[] | PropietariosPrivadosScalarFieldEnum
    having?: PropietariosPrivadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropietariosPrivadosCountAggregateInputType | true
    _avg?: PropietariosPrivadosAvgAggregateInputType
    _sum?: PropietariosPrivadosSumAggregateInputType
    _min?: PropietariosPrivadosMinAggregateInputType
    _max?: PropietariosPrivadosMaxAggregateInputType
  }

  export type PropietariosPrivadosGroupByOutputType = {
    num_propietario: number
    nom_propietario: string
    dir_propietario: string
    tel_propietario: string
    _count: PropietariosPrivadosCountAggregateOutputType | null
    _avg: PropietariosPrivadosAvgAggregateOutputType | null
    _sum: PropietariosPrivadosSumAggregateOutputType | null
    _min: PropietariosPrivadosMinAggregateOutputType | null
    _max: PropietariosPrivadosMaxAggregateOutputType | null
  }

  type GetPropietariosPrivadosGroupByPayload<T extends PropietariosPrivadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropietariosPrivadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropietariosPrivadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropietariosPrivadosGroupByOutputType[P]>
            : GetScalarType<T[P], PropietariosPrivadosGroupByOutputType[P]>
        }
      >
    >


  export type PropietariosPrivadosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_propietario?: boolean
    nom_propietario?: boolean
    dir_propietario?: boolean
    tel_propietario?: boolean
    InmueblesAlquiler?: boolean | PropietariosPrivados$InmueblesAlquilerArgs<ExtArgs>
    _count?: boolean | PropietariosPrivadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propietariosPrivados"]>

  export type PropietariosPrivadosSelectScalar = {
    num_propietario?: boolean
    nom_propietario?: boolean
    dir_propietario?: boolean
    tel_propietario?: boolean
  }

  export type PropietariosPrivadosInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    InmueblesAlquiler?: boolean | PropietariosPrivados$InmueblesAlquilerArgs<ExtArgs>
    _count?: boolean | PropietariosPrivadosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PropietariosPrivadosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PropietariosPrivados"
    objects: {
      InmueblesAlquiler: Prisma.$InmueblesAlquilerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      num_propietario: number
      nom_propietario: string
      dir_propietario: string
      tel_propietario: string
    }, ExtArgs["result"]["propietariosPrivados"]>
    composites: {}
  }


  type PropietariosPrivadosGetPayload<S extends boolean | null | undefined | PropietariosPrivadosDefaultArgs> = $Result.GetResult<Prisma.$PropietariosPrivadosPayload, S>

  type PropietariosPrivadosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PropietariosPrivadosFindManyArgs, 'select' | 'include'> & {
      select?: PropietariosPrivadosCountAggregateInputType | true
    }

  export interface PropietariosPrivadosDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropietariosPrivados'], meta: { name: 'PropietariosPrivados' } }
    /**
     * Find zero or one PropietariosPrivados that matches the filter.
     * @param {PropietariosPrivadosFindUniqueArgs} args - Arguments to find a PropietariosPrivados
     * @example
     * // Get one PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropietariosPrivadosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosPrivadosFindUniqueArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PropietariosPrivados that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PropietariosPrivadosFindUniqueOrThrowArgs} args - Arguments to find a PropietariosPrivados
     * @example
     * // Get one PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropietariosPrivadosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosPrivadosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PropietariosPrivados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosPrivadosFindFirstArgs} args - Arguments to find a PropietariosPrivados
     * @example
     * // Get one PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropietariosPrivadosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosPrivadosFindFirstArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PropietariosPrivados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosPrivadosFindFirstOrThrowArgs} args - Arguments to find a PropietariosPrivados
     * @example
     * // Get one PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropietariosPrivadosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosPrivadosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PropietariosPrivados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosPrivadosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.findMany()
     * 
     * // Get first 10 PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.findMany({ take: 10 })
     * 
     * // Only select the `num_propietario`
     * const propietariosPrivadosWithNum_propietarioOnly = await prisma.propietariosPrivados.findMany({ select: { num_propietario: true } })
     * 
    **/
    findMany<T extends PropietariosPrivadosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosPrivadosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PropietariosPrivados.
     * @param {PropietariosPrivadosCreateArgs} args - Arguments to create a PropietariosPrivados.
     * @example
     * // Create one PropietariosPrivados
     * const PropietariosPrivados = await prisma.propietariosPrivados.create({
     *   data: {
     *     // ... data to create a PropietariosPrivados
     *   }
     * })
     * 
    **/
    create<T extends PropietariosPrivadosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosPrivadosCreateArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PropietariosPrivados.
     *     @param {PropietariosPrivadosCreateManyArgs} args - Arguments to create many PropietariosPrivados.
     *     @example
     *     // Create many PropietariosPrivados
     *     const propietariosPrivados = await prisma.propietariosPrivados.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropietariosPrivadosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosPrivadosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropietariosPrivados.
     * @param {PropietariosPrivadosDeleteArgs} args - Arguments to delete one PropietariosPrivados.
     * @example
     * // Delete one PropietariosPrivados
     * const PropietariosPrivados = await prisma.propietariosPrivados.delete({
     *   where: {
     *     // ... filter to delete one PropietariosPrivados
     *   }
     * })
     * 
    **/
    delete<T extends PropietariosPrivadosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosPrivadosDeleteArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PropietariosPrivados.
     * @param {PropietariosPrivadosUpdateArgs} args - Arguments to update one PropietariosPrivados.
     * @example
     * // Update one PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropietariosPrivadosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosPrivadosUpdateArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PropietariosPrivados.
     * @param {PropietariosPrivadosDeleteManyArgs} args - Arguments to filter PropietariosPrivados to delete.
     * @example
     * // Delete a few PropietariosPrivados
     * const { count } = await prisma.propietariosPrivados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropietariosPrivadosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosPrivadosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropietariosPrivados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosPrivadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropietariosPrivadosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosPrivadosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropietariosPrivados.
     * @param {PropietariosPrivadosUpsertArgs} args - Arguments to update or create a PropietariosPrivados.
     * @example
     * // Update or create a PropietariosPrivados
     * const propietariosPrivados = await prisma.propietariosPrivados.upsert({
     *   create: {
     *     // ... data to create a PropietariosPrivados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropietariosPrivados we want to update
     *   }
     * })
    **/
    upsert<T extends PropietariosPrivadosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosPrivadosUpsertArgs<ExtArgs>>
    ): Prisma__PropietariosPrivadosClient<$Result.GetResult<Prisma.$PropietariosPrivadosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PropietariosPrivados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosPrivadosCountArgs} args - Arguments to filter PropietariosPrivados to count.
     * @example
     * // Count the number of PropietariosPrivados
     * const count = await prisma.propietariosPrivados.count({
     *   where: {
     *     // ... the filter for the PropietariosPrivados we want to count
     *   }
     * })
    **/
    count<T extends PropietariosPrivadosCountArgs>(
      args?: Subset<T, PropietariosPrivadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropietariosPrivadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropietariosPrivados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosPrivadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropietariosPrivadosAggregateArgs>(args: Subset<T, PropietariosPrivadosAggregateArgs>): Prisma.PrismaPromise<GetPropietariosPrivadosAggregateType<T>>

    /**
     * Group by PropietariosPrivados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosPrivadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropietariosPrivadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropietariosPrivadosGroupByArgs['orderBy'] }
        : { orderBy?: PropietariosPrivadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropietariosPrivadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropietariosPrivadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropietariosPrivados model
   */
  readonly fields: PropietariosPrivadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropietariosPrivados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropietariosPrivadosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    InmueblesAlquiler<T extends PropietariosPrivados$InmueblesAlquilerArgs<ExtArgs> = {}>(args?: Subset<T, PropietariosPrivados$InmueblesAlquilerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PropietariosPrivados model
   */ 
  interface PropietariosPrivadosFieldRefs {
    readonly num_propietario: FieldRef<"PropietariosPrivados", 'Int'>
    readonly nom_propietario: FieldRef<"PropietariosPrivados", 'String'>
    readonly dir_propietario: FieldRef<"PropietariosPrivados", 'String'>
    readonly tel_propietario: FieldRef<"PropietariosPrivados", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PropietariosPrivados findUnique
   */
  export type PropietariosPrivadosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosPrivados to fetch.
     */
    where: PropietariosPrivadosWhereUniqueInput
  }


  /**
   * PropietariosPrivados findUniqueOrThrow
   */
  export type PropietariosPrivadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosPrivados to fetch.
     */
    where: PropietariosPrivadosWhereUniqueInput
  }


  /**
   * PropietariosPrivados findFirst
   */
  export type PropietariosPrivadosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosPrivados to fetch.
     */
    where?: PropietariosPrivadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosPrivados to fetch.
     */
    orderBy?: PropietariosPrivadosOrderByWithRelationInput | PropietariosPrivadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropietariosPrivados.
     */
    cursor?: PropietariosPrivadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosPrivados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosPrivados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropietariosPrivados.
     */
    distinct?: PropietariosPrivadosScalarFieldEnum | PropietariosPrivadosScalarFieldEnum[]
  }


  /**
   * PropietariosPrivados findFirstOrThrow
   */
  export type PropietariosPrivadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosPrivados to fetch.
     */
    where?: PropietariosPrivadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosPrivados to fetch.
     */
    orderBy?: PropietariosPrivadosOrderByWithRelationInput | PropietariosPrivadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropietariosPrivados.
     */
    cursor?: PropietariosPrivadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosPrivados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosPrivados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropietariosPrivados.
     */
    distinct?: PropietariosPrivadosScalarFieldEnum | PropietariosPrivadosScalarFieldEnum[]
  }


  /**
   * PropietariosPrivados findMany
   */
  export type PropietariosPrivadosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosPrivados to fetch.
     */
    where?: PropietariosPrivadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosPrivados to fetch.
     */
    orderBy?: PropietariosPrivadosOrderByWithRelationInput | PropietariosPrivadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropietariosPrivados.
     */
    cursor?: PropietariosPrivadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosPrivados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosPrivados.
     */
    skip?: number
    distinct?: PropietariosPrivadosScalarFieldEnum | PropietariosPrivadosScalarFieldEnum[]
  }


  /**
   * PropietariosPrivados create
   */
  export type PropietariosPrivadosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * The data needed to create a PropietariosPrivados.
     */
    data: XOR<PropietariosPrivadosCreateInput, PropietariosPrivadosUncheckedCreateInput>
  }


  /**
   * PropietariosPrivados createMany
   */
  export type PropietariosPrivadosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropietariosPrivados.
     */
    data: PropietariosPrivadosCreateManyInput | PropietariosPrivadosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PropietariosPrivados update
   */
  export type PropietariosPrivadosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * The data needed to update a PropietariosPrivados.
     */
    data: XOR<PropietariosPrivadosUpdateInput, PropietariosPrivadosUncheckedUpdateInput>
    /**
     * Choose, which PropietariosPrivados to update.
     */
    where: PropietariosPrivadosWhereUniqueInput
  }


  /**
   * PropietariosPrivados updateMany
   */
  export type PropietariosPrivadosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropietariosPrivados.
     */
    data: XOR<PropietariosPrivadosUpdateManyMutationInput, PropietariosPrivadosUncheckedUpdateManyInput>
    /**
     * Filter which PropietariosPrivados to update
     */
    where?: PropietariosPrivadosWhereInput
  }


  /**
   * PropietariosPrivados upsert
   */
  export type PropietariosPrivadosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * The filter to search for the PropietariosPrivados to update in case it exists.
     */
    where: PropietariosPrivadosWhereUniqueInput
    /**
     * In case the PropietariosPrivados found by the `where` argument doesn't exist, create a new PropietariosPrivados with this data.
     */
    create: XOR<PropietariosPrivadosCreateInput, PropietariosPrivadosUncheckedCreateInput>
    /**
     * In case the PropietariosPrivados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropietariosPrivadosUpdateInput, PropietariosPrivadosUncheckedUpdateInput>
  }


  /**
   * PropietariosPrivados delete
   */
  export type PropietariosPrivadosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
    /**
     * Filter which PropietariosPrivados to delete.
     */
    where: PropietariosPrivadosWhereUniqueInput
  }


  /**
   * PropietariosPrivados deleteMany
   */
  export type PropietariosPrivadosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropietariosPrivados to delete
     */
    where?: PropietariosPrivadosWhereInput
  }


  /**
   * PropietariosPrivados.InmueblesAlquiler
   */
  export type PropietariosPrivados$InmueblesAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    where?: InmueblesAlquilerWhereInput
    orderBy?: InmueblesAlquilerOrderByWithRelationInput | InmueblesAlquilerOrderByWithRelationInput[]
    cursor?: InmueblesAlquilerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InmueblesAlquilerScalarFieldEnum | InmueblesAlquilerScalarFieldEnum[]
  }


  /**
   * PropietariosPrivados without action
   */
  export type PropietariosPrivadosDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosPrivados
     */
    select?: PropietariosPrivadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosPrivadosInclude<ExtArgs> | null
  }



  /**
   * Model PropietariosEmpresariales
   */

  export type AggregatePropietariosEmpresariales = {
    _count: PropietariosEmpresarialesCountAggregateOutputType | null
    _avg: PropietariosEmpresarialesAvgAggregateOutputType | null
    _sum: PropietariosEmpresarialesSumAggregateOutputType | null
    _min: PropietariosEmpresarialesMinAggregateOutputType | null
    _max: PropietariosEmpresarialesMaxAggregateOutputType | null
  }

  export type PropietariosEmpresarialesAvgAggregateOutputType = {
    num_propietario_em: number | null
  }

  export type PropietariosEmpresarialesSumAggregateOutputType = {
    num_propietario_em: number | null
  }

  export type PropietariosEmpresarialesMinAggregateOutputType = {
    num_propietario_em: number | null
    nom_propietario_em: string | null
    tipo_empresa: string | null
    dir_empresa: string | null
    tel_propietario_em: string | null
    nom_contacto: string | null
  }

  export type PropietariosEmpresarialesMaxAggregateOutputType = {
    num_propietario_em: number | null
    nom_propietario_em: string | null
    tipo_empresa: string | null
    dir_empresa: string | null
    tel_propietario_em: string | null
    nom_contacto: string | null
  }

  export type PropietariosEmpresarialesCountAggregateOutputType = {
    num_propietario_em: number
    nom_propietario_em: number
    tipo_empresa: number
    dir_empresa: number
    tel_propietario_em: number
    nom_contacto: number
    _all: number
  }


  export type PropietariosEmpresarialesAvgAggregateInputType = {
    num_propietario_em?: true
  }

  export type PropietariosEmpresarialesSumAggregateInputType = {
    num_propietario_em?: true
  }

  export type PropietariosEmpresarialesMinAggregateInputType = {
    num_propietario_em?: true
    nom_propietario_em?: true
    tipo_empresa?: true
    dir_empresa?: true
    tel_propietario_em?: true
    nom_contacto?: true
  }

  export type PropietariosEmpresarialesMaxAggregateInputType = {
    num_propietario_em?: true
    nom_propietario_em?: true
    tipo_empresa?: true
    dir_empresa?: true
    tel_propietario_em?: true
    nom_contacto?: true
  }

  export type PropietariosEmpresarialesCountAggregateInputType = {
    num_propietario_em?: true
    nom_propietario_em?: true
    tipo_empresa?: true
    dir_empresa?: true
    tel_propietario_em?: true
    nom_contacto?: true
    _all?: true
  }

  export type PropietariosEmpresarialesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropietariosEmpresariales to aggregate.
     */
    where?: PropietariosEmpresarialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosEmpresariales to fetch.
     */
    orderBy?: PropietariosEmpresarialesOrderByWithRelationInput | PropietariosEmpresarialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropietariosEmpresarialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosEmpresariales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosEmpresariales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropietariosEmpresariales
    **/
    _count?: true | PropietariosEmpresarialesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropietariosEmpresarialesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropietariosEmpresarialesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropietariosEmpresarialesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropietariosEmpresarialesMaxAggregateInputType
  }

  export type GetPropietariosEmpresarialesAggregateType<T extends PropietariosEmpresarialesAggregateArgs> = {
        [P in keyof T & keyof AggregatePropietariosEmpresariales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropietariosEmpresariales[P]>
      : GetScalarType<T[P], AggregatePropietariosEmpresariales[P]>
  }




  export type PropietariosEmpresarialesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PropietariosEmpresarialesWhereInput
    orderBy?: PropietariosEmpresarialesOrderByWithAggregationInput | PropietariosEmpresarialesOrderByWithAggregationInput[]
    by: PropietariosEmpresarialesScalarFieldEnum[] | PropietariosEmpresarialesScalarFieldEnum
    having?: PropietariosEmpresarialesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropietariosEmpresarialesCountAggregateInputType | true
    _avg?: PropietariosEmpresarialesAvgAggregateInputType
    _sum?: PropietariosEmpresarialesSumAggregateInputType
    _min?: PropietariosEmpresarialesMinAggregateInputType
    _max?: PropietariosEmpresarialesMaxAggregateInputType
  }

  export type PropietariosEmpresarialesGroupByOutputType = {
    num_propietario_em: number
    nom_propietario_em: string
    tipo_empresa: string
    dir_empresa: string
    tel_propietario_em: string
    nom_contacto: string
    _count: PropietariosEmpresarialesCountAggregateOutputType | null
    _avg: PropietariosEmpresarialesAvgAggregateOutputType | null
    _sum: PropietariosEmpresarialesSumAggregateOutputType | null
    _min: PropietariosEmpresarialesMinAggregateOutputType | null
    _max: PropietariosEmpresarialesMaxAggregateOutputType | null
  }

  type GetPropietariosEmpresarialesGroupByPayload<T extends PropietariosEmpresarialesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropietariosEmpresarialesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropietariosEmpresarialesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropietariosEmpresarialesGroupByOutputType[P]>
            : GetScalarType<T[P], PropietariosEmpresarialesGroupByOutputType[P]>
        }
      >
    >


  export type PropietariosEmpresarialesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_propietario_em?: boolean
    nom_propietario_em?: boolean
    tipo_empresa?: boolean
    dir_empresa?: boolean
    tel_propietario_em?: boolean
    nom_contacto?: boolean
    InmueblesAlquiler?: boolean | PropietariosEmpresariales$InmueblesAlquilerArgs<ExtArgs>
    _count?: boolean | PropietariosEmpresarialesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propietariosEmpresariales"]>

  export type PropietariosEmpresarialesSelectScalar = {
    num_propietario_em?: boolean
    nom_propietario_em?: boolean
    tipo_empresa?: boolean
    dir_empresa?: boolean
    tel_propietario_em?: boolean
    nom_contacto?: boolean
  }

  export type PropietariosEmpresarialesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    InmueblesAlquiler?: boolean | PropietariosEmpresariales$InmueblesAlquilerArgs<ExtArgs>
    _count?: boolean | PropietariosEmpresarialesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PropietariosEmpresarialesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PropietariosEmpresariales"
    objects: {
      InmueblesAlquiler: Prisma.$InmueblesAlquilerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      num_propietario_em: number
      nom_propietario_em: string
      tipo_empresa: string
      dir_empresa: string
      tel_propietario_em: string
      nom_contacto: string
    }, ExtArgs["result"]["propietariosEmpresariales"]>
    composites: {}
  }


  type PropietariosEmpresarialesGetPayload<S extends boolean | null | undefined | PropietariosEmpresarialesDefaultArgs> = $Result.GetResult<Prisma.$PropietariosEmpresarialesPayload, S>

  type PropietariosEmpresarialesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PropietariosEmpresarialesFindManyArgs, 'select' | 'include'> & {
      select?: PropietariosEmpresarialesCountAggregateInputType | true
    }

  export interface PropietariosEmpresarialesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropietariosEmpresariales'], meta: { name: 'PropietariosEmpresariales' } }
    /**
     * Find zero or one PropietariosEmpresariales that matches the filter.
     * @param {PropietariosEmpresarialesFindUniqueArgs} args - Arguments to find a PropietariosEmpresariales
     * @example
     * // Get one PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropietariosEmpresarialesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosEmpresarialesFindUniqueArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PropietariosEmpresariales that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PropietariosEmpresarialesFindUniqueOrThrowArgs} args - Arguments to find a PropietariosEmpresariales
     * @example
     * // Get one PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropietariosEmpresarialesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosEmpresarialesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PropietariosEmpresariales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosEmpresarialesFindFirstArgs} args - Arguments to find a PropietariosEmpresariales
     * @example
     * // Get one PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropietariosEmpresarialesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosEmpresarialesFindFirstArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PropietariosEmpresariales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosEmpresarialesFindFirstOrThrowArgs} args - Arguments to find a PropietariosEmpresariales
     * @example
     * // Get one PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropietariosEmpresarialesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosEmpresarialesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PropietariosEmpresariales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosEmpresarialesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.findMany()
     * 
     * // Get first 10 PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.findMany({ take: 10 })
     * 
     * // Only select the `num_propietario_em`
     * const propietariosEmpresarialesWithNum_propietario_emOnly = await prisma.propietariosEmpresariales.findMany({ select: { num_propietario_em: true } })
     * 
    **/
    findMany<T extends PropietariosEmpresarialesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosEmpresarialesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PropietariosEmpresariales.
     * @param {PropietariosEmpresarialesCreateArgs} args - Arguments to create a PropietariosEmpresariales.
     * @example
     * // Create one PropietariosEmpresariales
     * const PropietariosEmpresariales = await prisma.propietariosEmpresariales.create({
     *   data: {
     *     // ... data to create a PropietariosEmpresariales
     *   }
     * })
     * 
    **/
    create<T extends PropietariosEmpresarialesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosEmpresarialesCreateArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PropietariosEmpresariales.
     *     @param {PropietariosEmpresarialesCreateManyArgs} args - Arguments to create many PropietariosEmpresariales.
     *     @example
     *     // Create many PropietariosEmpresariales
     *     const propietariosEmpresariales = await prisma.propietariosEmpresariales.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropietariosEmpresarialesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosEmpresarialesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropietariosEmpresariales.
     * @param {PropietariosEmpresarialesDeleteArgs} args - Arguments to delete one PropietariosEmpresariales.
     * @example
     * // Delete one PropietariosEmpresariales
     * const PropietariosEmpresariales = await prisma.propietariosEmpresariales.delete({
     *   where: {
     *     // ... filter to delete one PropietariosEmpresariales
     *   }
     * })
     * 
    **/
    delete<T extends PropietariosEmpresarialesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosEmpresarialesDeleteArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PropietariosEmpresariales.
     * @param {PropietariosEmpresarialesUpdateArgs} args - Arguments to update one PropietariosEmpresariales.
     * @example
     * // Update one PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropietariosEmpresarialesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosEmpresarialesUpdateArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PropietariosEmpresariales.
     * @param {PropietariosEmpresarialesDeleteManyArgs} args - Arguments to filter PropietariosEmpresariales to delete.
     * @example
     * // Delete a few PropietariosEmpresariales
     * const { count } = await prisma.propietariosEmpresariales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropietariosEmpresarialesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropietariosEmpresarialesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropietariosEmpresariales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosEmpresarialesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropietariosEmpresarialesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosEmpresarialesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropietariosEmpresariales.
     * @param {PropietariosEmpresarialesUpsertArgs} args - Arguments to update or create a PropietariosEmpresariales.
     * @example
     * // Update or create a PropietariosEmpresariales
     * const propietariosEmpresariales = await prisma.propietariosEmpresariales.upsert({
     *   create: {
     *     // ... data to create a PropietariosEmpresariales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropietariosEmpresariales we want to update
     *   }
     * })
    **/
    upsert<T extends PropietariosEmpresarialesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PropietariosEmpresarialesUpsertArgs<ExtArgs>>
    ): Prisma__PropietariosEmpresarialesClient<$Result.GetResult<Prisma.$PropietariosEmpresarialesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PropietariosEmpresariales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosEmpresarialesCountArgs} args - Arguments to filter PropietariosEmpresariales to count.
     * @example
     * // Count the number of PropietariosEmpresariales
     * const count = await prisma.propietariosEmpresariales.count({
     *   where: {
     *     // ... the filter for the PropietariosEmpresariales we want to count
     *   }
     * })
    **/
    count<T extends PropietariosEmpresarialesCountArgs>(
      args?: Subset<T, PropietariosEmpresarialesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropietariosEmpresarialesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropietariosEmpresariales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosEmpresarialesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropietariosEmpresarialesAggregateArgs>(args: Subset<T, PropietariosEmpresarialesAggregateArgs>): Prisma.PrismaPromise<GetPropietariosEmpresarialesAggregateType<T>>

    /**
     * Group by PropietariosEmpresariales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropietariosEmpresarialesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropietariosEmpresarialesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropietariosEmpresarialesGroupByArgs['orderBy'] }
        : { orderBy?: PropietariosEmpresarialesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropietariosEmpresarialesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropietariosEmpresarialesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropietariosEmpresariales model
   */
  readonly fields: PropietariosEmpresarialesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropietariosEmpresariales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropietariosEmpresarialesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    InmueblesAlquiler<T extends PropietariosEmpresariales$InmueblesAlquilerArgs<ExtArgs> = {}>(args?: Subset<T, PropietariosEmpresariales$InmueblesAlquilerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PropietariosEmpresariales model
   */ 
  interface PropietariosEmpresarialesFieldRefs {
    readonly num_propietario_em: FieldRef<"PropietariosEmpresariales", 'Int'>
    readonly nom_propietario_em: FieldRef<"PropietariosEmpresariales", 'String'>
    readonly tipo_empresa: FieldRef<"PropietariosEmpresariales", 'String'>
    readonly dir_empresa: FieldRef<"PropietariosEmpresariales", 'String'>
    readonly tel_propietario_em: FieldRef<"PropietariosEmpresariales", 'String'>
    readonly nom_contacto: FieldRef<"PropietariosEmpresariales", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PropietariosEmpresariales findUnique
   */
  export type PropietariosEmpresarialesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosEmpresariales to fetch.
     */
    where: PropietariosEmpresarialesWhereUniqueInput
  }


  /**
   * PropietariosEmpresariales findUniqueOrThrow
   */
  export type PropietariosEmpresarialesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosEmpresariales to fetch.
     */
    where: PropietariosEmpresarialesWhereUniqueInput
  }


  /**
   * PropietariosEmpresariales findFirst
   */
  export type PropietariosEmpresarialesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosEmpresariales to fetch.
     */
    where?: PropietariosEmpresarialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosEmpresariales to fetch.
     */
    orderBy?: PropietariosEmpresarialesOrderByWithRelationInput | PropietariosEmpresarialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropietariosEmpresariales.
     */
    cursor?: PropietariosEmpresarialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosEmpresariales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosEmpresariales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropietariosEmpresariales.
     */
    distinct?: PropietariosEmpresarialesScalarFieldEnum | PropietariosEmpresarialesScalarFieldEnum[]
  }


  /**
   * PropietariosEmpresariales findFirstOrThrow
   */
  export type PropietariosEmpresarialesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosEmpresariales to fetch.
     */
    where?: PropietariosEmpresarialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosEmpresariales to fetch.
     */
    orderBy?: PropietariosEmpresarialesOrderByWithRelationInput | PropietariosEmpresarialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropietariosEmpresariales.
     */
    cursor?: PropietariosEmpresarialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosEmpresariales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosEmpresariales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropietariosEmpresariales.
     */
    distinct?: PropietariosEmpresarialesScalarFieldEnum | PropietariosEmpresarialesScalarFieldEnum[]
  }


  /**
   * PropietariosEmpresariales findMany
   */
  export type PropietariosEmpresarialesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * Filter, which PropietariosEmpresariales to fetch.
     */
    where?: PropietariosEmpresarialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropietariosEmpresariales to fetch.
     */
    orderBy?: PropietariosEmpresarialesOrderByWithRelationInput | PropietariosEmpresarialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropietariosEmpresariales.
     */
    cursor?: PropietariosEmpresarialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropietariosEmpresariales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropietariosEmpresariales.
     */
    skip?: number
    distinct?: PropietariosEmpresarialesScalarFieldEnum | PropietariosEmpresarialesScalarFieldEnum[]
  }


  /**
   * PropietariosEmpresariales create
   */
  export type PropietariosEmpresarialesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * The data needed to create a PropietariosEmpresariales.
     */
    data: XOR<PropietariosEmpresarialesCreateInput, PropietariosEmpresarialesUncheckedCreateInput>
  }


  /**
   * PropietariosEmpresariales createMany
   */
  export type PropietariosEmpresarialesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropietariosEmpresariales.
     */
    data: PropietariosEmpresarialesCreateManyInput | PropietariosEmpresarialesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PropietariosEmpresariales update
   */
  export type PropietariosEmpresarialesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * The data needed to update a PropietariosEmpresariales.
     */
    data: XOR<PropietariosEmpresarialesUpdateInput, PropietariosEmpresarialesUncheckedUpdateInput>
    /**
     * Choose, which PropietariosEmpresariales to update.
     */
    where: PropietariosEmpresarialesWhereUniqueInput
  }


  /**
   * PropietariosEmpresariales updateMany
   */
  export type PropietariosEmpresarialesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropietariosEmpresariales.
     */
    data: XOR<PropietariosEmpresarialesUpdateManyMutationInput, PropietariosEmpresarialesUncheckedUpdateManyInput>
    /**
     * Filter which PropietariosEmpresariales to update
     */
    where?: PropietariosEmpresarialesWhereInput
  }


  /**
   * PropietariosEmpresariales upsert
   */
  export type PropietariosEmpresarialesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * The filter to search for the PropietariosEmpresariales to update in case it exists.
     */
    where: PropietariosEmpresarialesWhereUniqueInput
    /**
     * In case the PropietariosEmpresariales found by the `where` argument doesn't exist, create a new PropietariosEmpresariales with this data.
     */
    create: XOR<PropietariosEmpresarialesCreateInput, PropietariosEmpresarialesUncheckedCreateInput>
    /**
     * In case the PropietariosEmpresariales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropietariosEmpresarialesUpdateInput, PropietariosEmpresarialesUncheckedUpdateInput>
  }


  /**
   * PropietariosEmpresariales delete
   */
  export type PropietariosEmpresarialesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
    /**
     * Filter which PropietariosEmpresariales to delete.
     */
    where: PropietariosEmpresarialesWhereUniqueInput
  }


  /**
   * PropietariosEmpresariales deleteMany
   */
  export type PropietariosEmpresarialesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropietariosEmpresariales to delete
     */
    where?: PropietariosEmpresarialesWhereInput
  }


  /**
   * PropietariosEmpresariales.InmueblesAlquiler
   */
  export type PropietariosEmpresariales$InmueblesAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InmueblesAlquiler
     */
    select?: InmueblesAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InmueblesAlquilerInclude<ExtArgs> | null
    where?: InmueblesAlquilerWhereInput
    orderBy?: InmueblesAlquilerOrderByWithRelationInput | InmueblesAlquilerOrderByWithRelationInput[]
    cursor?: InmueblesAlquilerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InmueblesAlquilerScalarFieldEnum | InmueblesAlquilerScalarFieldEnum[]
  }


  /**
   * PropietariosEmpresariales without action
   */
  export type PropietariosEmpresarialesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropietariosEmpresariales
     */
    select?: PropietariosEmpresarialesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PropietariosEmpresarialesInclude<ExtArgs> | null
  }



  /**
   * Model Clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    num_cliente: number | null
    importmax_inmueble: number | null
  }

  export type ClientesSumAggregateOutputType = {
    num_cliente: number | null
    importmax_inmueble: number | null
  }

  export type ClientesMinAggregateOutputType = {
    num_cliente: number | null
    nom_cliente: string | null
    tel_cliente: string | null
    tipo_inmueble: string | null
    importmax_inmueble: number | null
    nom_empleado: string | null
    sucregistro_cielte: string | null
  }

  export type ClientesMaxAggregateOutputType = {
    num_cliente: number | null
    nom_cliente: string | null
    tel_cliente: string | null
    tipo_inmueble: string | null
    importmax_inmueble: number | null
    nom_empleado: string | null
    sucregistro_cielte: string | null
  }

  export type ClientesCountAggregateOutputType = {
    num_cliente: number
    nom_cliente: number
    tel_cliente: number
    tipo_inmueble: number
    importmax_inmueble: number
    nom_empleado: number
    sucregistro_cielte: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    num_cliente?: true
    importmax_inmueble?: true
  }

  export type ClientesSumAggregateInputType = {
    num_cliente?: true
    importmax_inmueble?: true
  }

  export type ClientesMinAggregateInputType = {
    num_cliente?: true
    nom_cliente?: true
    tel_cliente?: true
    tipo_inmueble?: true
    importmax_inmueble?: true
    nom_empleado?: true
    sucregistro_cielte?: true
  }

  export type ClientesMaxAggregateInputType = {
    num_cliente?: true
    nom_cliente?: true
    tel_cliente?: true
    tipo_inmueble?: true
    importmax_inmueble?: true
    nom_empleado?: true
    sucregistro_cielte?: true
  }

  export type ClientesCountAggregateInputType = {
    num_cliente?: true
    nom_cliente?: true
    tel_cliente?: true
    tipo_inmueble?: true
    importmax_inmueble?: true
    nom_empleado?: true
    sucregistro_cielte?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to aggregate.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithAggregationInput | ClientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: ClientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    num_cliente: number
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type ClientesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_cliente?: boolean
    nom_cliente?: boolean
    tel_cliente?: boolean
    tipo_inmueble?: boolean
    importmax_inmueble?: boolean
    nom_empleado?: boolean
    sucregistro_cielte?: boolean
    ContratosAlquiler?: boolean | Clientes$ContratosAlquilerArgs<ExtArgs>
    Citas?: boolean | Clientes$CitasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectScalar = {
    num_cliente?: boolean
    nom_cliente?: boolean
    tel_cliente?: boolean
    tipo_inmueble?: boolean
    importmax_inmueble?: boolean
    nom_empleado?: boolean
    sucregistro_cielte?: boolean
  }

  export type ClientesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ContratosAlquiler?: boolean | Clientes$ContratosAlquilerArgs<ExtArgs>
    Citas?: boolean | Clientes$CitasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Clientes"
    objects: {
      ContratosAlquiler: Prisma.$ContratosAlquilerPayload<ExtArgs>[]
      Citas: Prisma.$CitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      num_cliente: number
      nom_cliente: string
      tel_cliente: string
      tipo_inmueble: string
      importmax_inmueble: number
      nom_empleado: string
      sucregistro_cielte: string
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }


  type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = $Result.GetResult<Prisma.$ClientesPayload, S>

  type ClientesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClientesFindManyArgs, 'select' | 'include'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface ClientesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientes'], meta: { name: 'Clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {ClientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clientes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `num_cliente`
     * const clientesWithNum_clienteOnly = await prisma.clientes.findMany({ select: { num_cliente: true } })
     * 
    **/
    findMany<T extends ClientesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clientes.
     * @param {ClientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
    **/
    create<T extends ClientesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientesCreateArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clientes.
     *     @param {ClientesCreateManyArgs} args - Arguments to create many Clientes.
     *     @example
     *     // Create many Clientes
     *     const clientes = await prisma.clientes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {ClientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
    **/
    delete<T extends ClientesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientesDeleteArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clientes.
     * @param {ClientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientesUpdateArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {ClientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
    **/
    upsert<T extends ClientesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientesUpsertArgs<ExtArgs>>
    ): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClientesCountArgs>(
      args?: Subset<T, ClientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientes model
   */
  readonly fields: ClientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ContratosAlquiler<T extends Clientes$ContratosAlquilerArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$ContratosAlquilerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'findMany'> | Null>;

    Citas<T extends Clientes$CitasArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$CitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Clientes model
   */ 
  interface ClientesFieldRefs {
    readonly num_cliente: FieldRef<"Clientes", 'Int'>
    readonly nom_cliente: FieldRef<"Clientes", 'String'>
    readonly tel_cliente: FieldRef<"Clientes", 'String'>
    readonly tipo_inmueble: FieldRef<"Clientes", 'String'>
    readonly importmax_inmueble: FieldRef<"Clientes", 'Int'>
    readonly nom_empleado: FieldRef<"Clientes", 'String'>
    readonly sucregistro_cielte: FieldRef<"Clientes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Clientes findUnique
   */
  export type ClientesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }


  /**
   * Clientes findUniqueOrThrow
   */
  export type ClientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }


  /**
   * Clientes findFirst
   */
  export type ClientesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }


  /**
   * Clientes findFirstOrThrow
   */
  export type ClientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }


  /**
   * Clientes findMany
   */
  export type ClientesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }


  /**
   * Clientes create
   */
  export type ClientesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clientes.
     */
    data: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
  }


  /**
   * Clientes createMany
   */
  export type ClientesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Clientes update
   */
  export type ClientesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clientes.
     */
    data: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
    /**
     * Choose, which Clientes to update.
     */
    where: ClientesWhereUniqueInput
  }


  /**
   * Clientes updateMany
   */
  export type ClientesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
  }


  /**
   * Clientes upsert
   */
  export type ClientesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clientes to update in case it exists.
     */
    where: ClientesWhereUniqueInput
    /**
     * In case the Clientes found by the `where` argument doesn't exist, create a new Clientes with this data.
     */
    create: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
    /**
     * In case the Clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
  }


  /**
   * Clientes delete
   */
  export type ClientesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter which Clientes to delete.
     */
    where: ClientesWhereUniqueInput
  }


  /**
   * Clientes deleteMany
   */
  export type ClientesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClientesWhereInput
  }


  /**
   * Clientes.ContratosAlquiler
   */
  export type Clientes$ContratosAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    where?: ContratosAlquilerWhereInput
    orderBy?: ContratosAlquilerOrderByWithRelationInput | ContratosAlquilerOrderByWithRelationInput[]
    cursor?: ContratosAlquilerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratosAlquilerScalarFieldEnum | ContratosAlquilerScalarFieldEnum[]
  }


  /**
   * Clientes.Citas
   */
  export type Clientes$CitasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    cursor?: CitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }


  /**
   * Clientes without action
   */
  export type ClientesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientesInclude<ExtArgs> | null
  }



  /**
   * Model ContratosAlquiler
   */

  export type AggregateContratosAlquiler = {
    _count: ContratosAlquilerCountAggregateOutputType | null
    _avg: ContratosAlquilerAvgAggregateOutputType | null
    _sum: ContratosAlquilerSumAggregateOutputType | null
    _min: ContratosAlquilerMinAggregateOutputType | null
    _max: ContratosAlquilerMaxAggregateOutputType | null
  }

  export type ContratosAlquilerAvgAggregateOutputType = {
    num_contrato: number | null
    num_cliente: number | null
    num_inmueble: number | null
    import_mensual: number | null
    dur_contrato: number | null
  }

  export type ContratosAlquilerSumAggregateOutputType = {
    num_contrato: number | null
    num_cliente: number | null
    num_inmueble: number | null
    import_mensual: bigint | null
    dur_contrato: bigint | null
  }

  export type ContratosAlquilerMinAggregateOutputType = {
    num_contrato: number | null
    num_cliente: number | null
    nom_cliente: string | null
    dir_cliente: string | null
    num_inmueble: number | null
    dir_inmueble: string | null
    import_mensual: bigint | null
    mod_pago: string | null
    dep_pago: string | null
    dur_contrato: bigint | null
    fech_inicio: Date | null
    fech_fin: Date | null
  }

  export type ContratosAlquilerMaxAggregateOutputType = {
    num_contrato: number | null
    num_cliente: number | null
    nom_cliente: string | null
    dir_cliente: string | null
    num_inmueble: number | null
    dir_inmueble: string | null
    import_mensual: bigint | null
    mod_pago: string | null
    dep_pago: string | null
    dur_contrato: bigint | null
    fech_inicio: Date | null
    fech_fin: Date | null
  }

  export type ContratosAlquilerCountAggregateOutputType = {
    num_contrato: number
    num_cliente: number
    nom_cliente: number
    dir_cliente: number
    num_inmueble: number
    dir_inmueble: number
    import_mensual: number
    mod_pago: number
    dep_pago: number
    dur_contrato: number
    fech_inicio: number
    fech_fin: number
    _all: number
  }


  export type ContratosAlquilerAvgAggregateInputType = {
    num_contrato?: true
    num_cliente?: true
    num_inmueble?: true
    import_mensual?: true
    dur_contrato?: true
  }

  export type ContratosAlquilerSumAggregateInputType = {
    num_contrato?: true
    num_cliente?: true
    num_inmueble?: true
    import_mensual?: true
    dur_contrato?: true
  }

  export type ContratosAlquilerMinAggregateInputType = {
    num_contrato?: true
    num_cliente?: true
    nom_cliente?: true
    dir_cliente?: true
    num_inmueble?: true
    dir_inmueble?: true
    import_mensual?: true
    mod_pago?: true
    dep_pago?: true
    dur_contrato?: true
    fech_inicio?: true
    fech_fin?: true
  }

  export type ContratosAlquilerMaxAggregateInputType = {
    num_contrato?: true
    num_cliente?: true
    nom_cliente?: true
    dir_cliente?: true
    num_inmueble?: true
    dir_inmueble?: true
    import_mensual?: true
    mod_pago?: true
    dep_pago?: true
    dur_contrato?: true
    fech_inicio?: true
    fech_fin?: true
  }

  export type ContratosAlquilerCountAggregateInputType = {
    num_contrato?: true
    num_cliente?: true
    nom_cliente?: true
    dir_cliente?: true
    num_inmueble?: true
    dir_inmueble?: true
    import_mensual?: true
    mod_pago?: true
    dep_pago?: true
    dur_contrato?: true
    fech_inicio?: true
    fech_fin?: true
    _all?: true
  }

  export type ContratosAlquilerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContratosAlquiler to aggregate.
     */
    where?: ContratosAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContratosAlquilers to fetch.
     */
    orderBy?: ContratosAlquilerOrderByWithRelationInput | ContratosAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContratosAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContratosAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContratosAlquilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContratosAlquilers
    **/
    _count?: true | ContratosAlquilerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContratosAlquilerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContratosAlquilerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratosAlquilerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratosAlquilerMaxAggregateInputType
  }

  export type GetContratosAlquilerAggregateType<T extends ContratosAlquilerAggregateArgs> = {
        [P in keyof T & keyof AggregateContratosAlquiler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContratosAlquiler[P]>
      : GetScalarType<T[P], AggregateContratosAlquiler[P]>
  }




  export type ContratosAlquilerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ContratosAlquilerWhereInput
    orderBy?: ContratosAlquilerOrderByWithAggregationInput | ContratosAlquilerOrderByWithAggregationInput[]
    by: ContratosAlquilerScalarFieldEnum[] | ContratosAlquilerScalarFieldEnum
    having?: ContratosAlquilerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratosAlquilerCountAggregateInputType | true
    _avg?: ContratosAlquilerAvgAggregateInputType
    _sum?: ContratosAlquilerSumAggregateInputType
    _min?: ContratosAlquilerMinAggregateInputType
    _max?: ContratosAlquilerMaxAggregateInputType
  }

  export type ContratosAlquilerGroupByOutputType = {
    num_contrato: number
    num_cliente: number
    nom_cliente: string
    dir_cliente: string
    num_inmueble: number
    dir_inmueble: string
    import_mensual: bigint
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint
    fech_inicio: Date
    fech_fin: Date
    _count: ContratosAlquilerCountAggregateOutputType | null
    _avg: ContratosAlquilerAvgAggregateOutputType | null
    _sum: ContratosAlquilerSumAggregateOutputType | null
    _min: ContratosAlquilerMinAggregateOutputType | null
    _max: ContratosAlquilerMaxAggregateOutputType | null
  }

  type GetContratosAlquilerGroupByPayload<T extends ContratosAlquilerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratosAlquilerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratosAlquilerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratosAlquilerGroupByOutputType[P]>
            : GetScalarType<T[P], ContratosAlquilerGroupByOutputType[P]>
        }
      >
    >


  export type ContratosAlquilerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_contrato?: boolean
    num_cliente?: boolean
    nom_cliente?: boolean
    dir_cliente?: boolean
    num_inmueble?: boolean
    dir_inmueble?: boolean
    import_mensual?: boolean
    mod_pago?: boolean
    dep_pago?: boolean
    dur_contrato?: boolean
    fech_inicio?: boolean
    fech_fin?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    inmueble?: boolean | InmueblesAlquilerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratosAlquiler"]>

  export type ContratosAlquilerSelectScalar = {
    num_contrato?: boolean
    num_cliente?: boolean
    nom_cliente?: boolean
    dir_cliente?: boolean
    num_inmueble?: boolean
    dir_inmueble?: boolean
    import_mensual?: boolean
    mod_pago?: boolean
    dep_pago?: boolean
    dur_contrato?: boolean
    fech_inicio?: boolean
    fech_fin?: boolean
  }

  export type ContratosAlquilerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    inmueble?: boolean | InmueblesAlquilerDefaultArgs<ExtArgs>
  }


  export type $ContratosAlquilerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ContratosAlquiler"
    objects: {
      cliente: Prisma.$ClientesPayload<ExtArgs>
      inmueble: Prisma.$InmueblesAlquilerPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      num_contrato: number
      num_cliente: number
      nom_cliente: string
      dir_cliente: string
      num_inmueble: number
      dir_inmueble: string
      import_mensual: bigint
      mod_pago: string
      dep_pago: string
      dur_contrato: bigint
      fech_inicio: Date
      fech_fin: Date
    }, ExtArgs["result"]["contratosAlquiler"]>
    composites: {}
  }


  type ContratosAlquilerGetPayload<S extends boolean | null | undefined | ContratosAlquilerDefaultArgs> = $Result.GetResult<Prisma.$ContratosAlquilerPayload, S>

  type ContratosAlquilerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ContratosAlquilerFindManyArgs, 'select' | 'include'> & {
      select?: ContratosAlquilerCountAggregateInputType | true
    }

  export interface ContratosAlquilerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContratosAlquiler'], meta: { name: 'ContratosAlquiler' } }
    /**
     * Find zero or one ContratosAlquiler that matches the filter.
     * @param {ContratosAlquilerFindUniqueArgs} args - Arguments to find a ContratosAlquiler
     * @example
     * // Get one ContratosAlquiler
     * const contratosAlquiler = await prisma.contratosAlquiler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContratosAlquilerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContratosAlquilerFindUniqueArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContratosAlquiler that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContratosAlquilerFindUniqueOrThrowArgs} args - Arguments to find a ContratosAlquiler
     * @example
     * // Get one ContratosAlquiler
     * const contratosAlquiler = await prisma.contratosAlquiler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContratosAlquilerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContratosAlquilerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContratosAlquiler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAlquilerFindFirstArgs} args - Arguments to find a ContratosAlquiler
     * @example
     * // Get one ContratosAlquiler
     * const contratosAlquiler = await prisma.contratosAlquiler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContratosAlquilerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContratosAlquilerFindFirstArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContratosAlquiler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAlquilerFindFirstOrThrowArgs} args - Arguments to find a ContratosAlquiler
     * @example
     * // Get one ContratosAlquiler
     * const contratosAlquiler = await prisma.contratosAlquiler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContratosAlquilerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContratosAlquilerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContratosAlquilers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAlquilerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContratosAlquilers
     * const contratosAlquilers = await prisma.contratosAlquiler.findMany()
     * 
     * // Get first 10 ContratosAlquilers
     * const contratosAlquilers = await prisma.contratosAlquiler.findMany({ take: 10 })
     * 
     * // Only select the `num_contrato`
     * const contratosAlquilerWithNum_contratoOnly = await prisma.contratosAlquiler.findMany({ select: { num_contrato: true } })
     * 
    **/
    findMany<T extends ContratosAlquilerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContratosAlquilerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContratosAlquiler.
     * @param {ContratosAlquilerCreateArgs} args - Arguments to create a ContratosAlquiler.
     * @example
     * // Create one ContratosAlquiler
     * const ContratosAlquiler = await prisma.contratosAlquiler.create({
     *   data: {
     *     // ... data to create a ContratosAlquiler
     *   }
     * })
     * 
    **/
    create<T extends ContratosAlquilerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContratosAlquilerCreateArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContratosAlquilers.
     *     @param {ContratosAlquilerCreateManyArgs} args - Arguments to create many ContratosAlquilers.
     *     @example
     *     // Create many ContratosAlquilers
     *     const contratosAlquiler = await prisma.contratosAlquiler.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContratosAlquilerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContratosAlquilerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContratosAlquiler.
     * @param {ContratosAlquilerDeleteArgs} args - Arguments to delete one ContratosAlquiler.
     * @example
     * // Delete one ContratosAlquiler
     * const ContratosAlquiler = await prisma.contratosAlquiler.delete({
     *   where: {
     *     // ... filter to delete one ContratosAlquiler
     *   }
     * })
     * 
    **/
    delete<T extends ContratosAlquilerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContratosAlquilerDeleteArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContratosAlquiler.
     * @param {ContratosAlquilerUpdateArgs} args - Arguments to update one ContratosAlquiler.
     * @example
     * // Update one ContratosAlquiler
     * const contratosAlquiler = await prisma.contratosAlquiler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContratosAlquilerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContratosAlquilerUpdateArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContratosAlquilers.
     * @param {ContratosAlquilerDeleteManyArgs} args - Arguments to filter ContratosAlquilers to delete.
     * @example
     * // Delete a few ContratosAlquilers
     * const { count } = await prisma.contratosAlquiler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContratosAlquilerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContratosAlquilerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContratosAlquilers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAlquilerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContratosAlquilers
     * const contratosAlquiler = await prisma.contratosAlquiler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContratosAlquilerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContratosAlquilerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContratosAlquiler.
     * @param {ContratosAlquilerUpsertArgs} args - Arguments to update or create a ContratosAlquiler.
     * @example
     * // Update or create a ContratosAlquiler
     * const contratosAlquiler = await prisma.contratosAlquiler.upsert({
     *   create: {
     *     // ... data to create a ContratosAlquiler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContratosAlquiler we want to update
     *   }
     * })
    **/
    upsert<T extends ContratosAlquilerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContratosAlquilerUpsertArgs<ExtArgs>>
    ): Prisma__ContratosAlquilerClient<$Result.GetResult<Prisma.$ContratosAlquilerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContratosAlquilers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAlquilerCountArgs} args - Arguments to filter ContratosAlquilers to count.
     * @example
     * // Count the number of ContratosAlquilers
     * const count = await prisma.contratosAlquiler.count({
     *   where: {
     *     // ... the filter for the ContratosAlquilers we want to count
     *   }
     * })
    **/
    count<T extends ContratosAlquilerCountArgs>(
      args?: Subset<T, ContratosAlquilerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratosAlquilerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContratosAlquiler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAlquilerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContratosAlquilerAggregateArgs>(args: Subset<T, ContratosAlquilerAggregateArgs>): Prisma.PrismaPromise<GetContratosAlquilerAggregateType<T>>

    /**
     * Group by ContratosAlquiler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAlquilerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContratosAlquilerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContratosAlquilerGroupByArgs['orderBy'] }
        : { orderBy?: ContratosAlquilerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContratosAlquilerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratosAlquilerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContratosAlquiler model
   */
  readonly fields: ContratosAlquilerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContratosAlquiler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContratosAlquilerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cliente<T extends ClientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientesDefaultArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    inmueble<T extends InmueblesAlquilerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmueblesAlquilerDefaultArgs<ExtArgs>>): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContratosAlquiler model
   */ 
  interface ContratosAlquilerFieldRefs {
    readonly num_contrato: FieldRef<"ContratosAlquiler", 'Int'>
    readonly num_cliente: FieldRef<"ContratosAlquiler", 'Int'>
    readonly nom_cliente: FieldRef<"ContratosAlquiler", 'String'>
    readonly dir_cliente: FieldRef<"ContratosAlquiler", 'String'>
    readonly num_inmueble: FieldRef<"ContratosAlquiler", 'Int'>
    readonly dir_inmueble: FieldRef<"ContratosAlquiler", 'String'>
    readonly import_mensual: FieldRef<"ContratosAlquiler", 'BigInt'>
    readonly mod_pago: FieldRef<"ContratosAlquiler", 'String'>
    readonly dep_pago: FieldRef<"ContratosAlquiler", 'String'>
    readonly dur_contrato: FieldRef<"ContratosAlquiler", 'BigInt'>
    readonly fech_inicio: FieldRef<"ContratosAlquiler", 'DateTime'>
    readonly fech_fin: FieldRef<"ContratosAlquiler", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ContratosAlquiler findUnique
   */
  export type ContratosAlquilerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which ContratosAlquiler to fetch.
     */
    where: ContratosAlquilerWhereUniqueInput
  }


  /**
   * ContratosAlquiler findUniqueOrThrow
   */
  export type ContratosAlquilerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which ContratosAlquiler to fetch.
     */
    where: ContratosAlquilerWhereUniqueInput
  }


  /**
   * ContratosAlquiler findFirst
   */
  export type ContratosAlquilerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which ContratosAlquiler to fetch.
     */
    where?: ContratosAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContratosAlquilers to fetch.
     */
    orderBy?: ContratosAlquilerOrderByWithRelationInput | ContratosAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContratosAlquilers.
     */
    cursor?: ContratosAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContratosAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContratosAlquilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContratosAlquilers.
     */
    distinct?: ContratosAlquilerScalarFieldEnum | ContratosAlquilerScalarFieldEnum[]
  }


  /**
   * ContratosAlquiler findFirstOrThrow
   */
  export type ContratosAlquilerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which ContratosAlquiler to fetch.
     */
    where?: ContratosAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContratosAlquilers to fetch.
     */
    orderBy?: ContratosAlquilerOrderByWithRelationInput | ContratosAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContratosAlquilers.
     */
    cursor?: ContratosAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContratosAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContratosAlquilers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContratosAlquilers.
     */
    distinct?: ContratosAlquilerScalarFieldEnum | ContratosAlquilerScalarFieldEnum[]
  }


  /**
   * ContratosAlquiler findMany
   */
  export type ContratosAlquilerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * Filter, which ContratosAlquilers to fetch.
     */
    where?: ContratosAlquilerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContratosAlquilers to fetch.
     */
    orderBy?: ContratosAlquilerOrderByWithRelationInput | ContratosAlquilerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContratosAlquilers.
     */
    cursor?: ContratosAlquilerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContratosAlquilers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContratosAlquilers.
     */
    skip?: number
    distinct?: ContratosAlquilerScalarFieldEnum | ContratosAlquilerScalarFieldEnum[]
  }


  /**
   * ContratosAlquiler create
   */
  export type ContratosAlquilerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * The data needed to create a ContratosAlquiler.
     */
    data: XOR<ContratosAlquilerCreateInput, ContratosAlquilerUncheckedCreateInput>
  }


  /**
   * ContratosAlquiler createMany
   */
  export type ContratosAlquilerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContratosAlquilers.
     */
    data: ContratosAlquilerCreateManyInput | ContratosAlquilerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContratosAlquiler update
   */
  export type ContratosAlquilerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * The data needed to update a ContratosAlquiler.
     */
    data: XOR<ContratosAlquilerUpdateInput, ContratosAlquilerUncheckedUpdateInput>
    /**
     * Choose, which ContratosAlquiler to update.
     */
    where: ContratosAlquilerWhereUniqueInput
  }


  /**
   * ContratosAlquiler updateMany
   */
  export type ContratosAlquilerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContratosAlquilers.
     */
    data: XOR<ContratosAlquilerUpdateManyMutationInput, ContratosAlquilerUncheckedUpdateManyInput>
    /**
     * Filter which ContratosAlquilers to update
     */
    where?: ContratosAlquilerWhereInput
  }


  /**
   * ContratosAlquiler upsert
   */
  export type ContratosAlquilerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * The filter to search for the ContratosAlquiler to update in case it exists.
     */
    where: ContratosAlquilerWhereUniqueInput
    /**
     * In case the ContratosAlquiler found by the `where` argument doesn't exist, create a new ContratosAlquiler with this data.
     */
    create: XOR<ContratosAlquilerCreateInput, ContratosAlquilerUncheckedCreateInput>
    /**
     * In case the ContratosAlquiler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContratosAlquilerUpdateInput, ContratosAlquilerUncheckedUpdateInput>
  }


  /**
   * ContratosAlquiler delete
   */
  export type ContratosAlquilerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
    /**
     * Filter which ContratosAlquiler to delete.
     */
    where: ContratosAlquilerWhereUniqueInput
  }


  /**
   * ContratosAlquiler deleteMany
   */
  export type ContratosAlquilerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContratosAlquilers to delete
     */
    where?: ContratosAlquilerWhereInput
  }


  /**
   * ContratosAlquiler without action
   */
  export type ContratosAlquilerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratosAlquiler
     */
    select?: ContratosAlquilerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContratosAlquilerInclude<ExtArgs> | null
  }



  /**
   * Model Citas
   */

  export type AggregateCitas = {
    _count: CitasCountAggregateOutputType | null
    _avg: CitasAvgAggregateOutputType | null
    _sum: CitasSumAggregateOutputType | null
    _min: CitasMinAggregateOutputType | null
    _max: CitasMaxAggregateOutputType | null
  }

  export type CitasAvgAggregateOutputType = {
    num_cita: number | null
    num_cliente: number | null
    num_inmueble: number | null
  }

  export type CitasSumAggregateOutputType = {
    num_cita: number | null
    num_cliente: number | null
    num_inmueble: number | null
  }

  export type CitasMinAggregateOutputType = {
    num_cita: number | null
    num_cliente: number | null
    num_inmueble: number | null
    fech_cita: Date | null
  }

  export type CitasMaxAggregateOutputType = {
    num_cita: number | null
    num_cliente: number | null
    num_inmueble: number | null
    fech_cita: Date | null
  }

  export type CitasCountAggregateOutputType = {
    num_cita: number
    num_cliente: number
    num_inmueble: number
    fech_cita: number
    _all: number
  }


  export type CitasAvgAggregateInputType = {
    num_cita?: true
    num_cliente?: true
    num_inmueble?: true
  }

  export type CitasSumAggregateInputType = {
    num_cita?: true
    num_cliente?: true
    num_inmueble?: true
  }

  export type CitasMinAggregateInputType = {
    num_cita?: true
    num_cliente?: true
    num_inmueble?: true
    fech_cita?: true
  }

  export type CitasMaxAggregateInputType = {
    num_cita?: true
    num_cliente?: true
    num_inmueble?: true
    fech_cita?: true
  }

  export type CitasCountAggregateInputType = {
    num_cita?: true
    num_cliente?: true
    num_inmueble?: true
    fech_cita?: true
    _all?: true
  }

  export type CitasAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to aggregate.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitasMaxAggregateInputType
  }

  export type GetCitasAggregateType<T extends CitasAggregateArgs> = {
        [P in keyof T & keyof AggregateCitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitas[P]>
      : GetScalarType<T[P], AggregateCitas[P]>
  }




  export type CitasGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithAggregationInput | CitasOrderByWithAggregationInput[]
    by: CitasScalarFieldEnum[] | CitasScalarFieldEnum
    having?: CitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitasCountAggregateInputType | true
    _avg?: CitasAvgAggregateInputType
    _sum?: CitasSumAggregateInputType
    _min?: CitasMinAggregateInputType
    _max?: CitasMaxAggregateInputType
  }

  export type CitasGroupByOutputType = {
    num_cita: number
    num_cliente: number
    num_inmueble: number
    fech_cita: Date
    _count: CitasCountAggregateOutputType | null
    _avg: CitasAvgAggregateOutputType | null
    _sum: CitasSumAggregateOutputType | null
    _min: CitasMinAggregateOutputType | null
    _max: CitasMaxAggregateOutputType | null
  }

  type GetCitasGroupByPayload<T extends CitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitasGroupByOutputType[P]>
            : GetScalarType<T[P], CitasGroupByOutputType[P]>
        }
      >
    >


  export type CitasSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_cita?: boolean
    num_cliente?: boolean
    num_inmueble?: boolean
    fech_cita?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    inmueble?: boolean | InmueblesAlquilerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citas"]>

  export type CitasSelectScalar = {
    num_cita?: boolean
    num_cliente?: boolean
    num_inmueble?: boolean
    fech_cita?: boolean
  }

  export type CitasInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    inmueble?: boolean | InmueblesAlquilerDefaultArgs<ExtArgs>
  }


  export type $CitasPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Citas"
    objects: {
      cliente: Prisma.$ClientesPayload<ExtArgs>
      inmueble: Prisma.$InmueblesAlquilerPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      num_cita: number
      num_cliente: number
      num_inmueble: number
      fech_cita: Date
    }, ExtArgs["result"]["citas"]>
    composites: {}
  }


  type CitasGetPayload<S extends boolean | null | undefined | CitasDefaultArgs> = $Result.GetResult<Prisma.$CitasPayload, S>

  type CitasCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CitasFindManyArgs, 'select' | 'include'> & {
      select?: CitasCountAggregateInputType | true
    }

  export interface CitasDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Citas'], meta: { name: 'Citas' } }
    /**
     * Find zero or one Citas that matches the filter.
     * @param {CitasFindUniqueArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CitasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CitasFindUniqueArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Citas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CitasFindUniqueOrThrowArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CitasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CitasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasFindFirstArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CitasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CitasFindFirstArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Citas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasFindFirstOrThrowArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CitasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CitasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.citas.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.citas.findMany({ take: 10 })
     * 
     * // Only select the `num_cita`
     * const citasWithNum_citaOnly = await prisma.citas.findMany({ select: { num_cita: true } })
     * 
    **/
    findMany<T extends CitasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CitasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Citas.
     * @param {CitasCreateArgs} args - Arguments to create a Citas.
     * @example
     * // Create one Citas
     * const Citas = await prisma.citas.create({
     *   data: {
     *     // ... data to create a Citas
     *   }
     * })
     * 
    **/
    create<T extends CitasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CitasCreateArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Citas.
     *     @param {CitasCreateManyArgs} args - Arguments to create many Citas.
     *     @example
     *     // Create many Citas
     *     const citas = await prisma.citas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CitasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CitasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Citas.
     * @param {CitasDeleteArgs} args - Arguments to delete one Citas.
     * @example
     * // Delete one Citas
     * const Citas = await prisma.citas.delete({
     *   where: {
     *     // ... filter to delete one Citas
     *   }
     * })
     * 
    **/
    delete<T extends CitasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CitasDeleteArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Citas.
     * @param {CitasUpdateArgs} args - Arguments to update one Citas.
     * @example
     * // Update one Citas
     * const citas = await prisma.citas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CitasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CitasUpdateArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Citas.
     * @param {CitasDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.citas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CitasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CitasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const citas = await prisma.citas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CitasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CitasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Citas.
     * @param {CitasUpsertArgs} args - Arguments to update or create a Citas.
     * @example
     * // Update or create a Citas
     * const citas = await prisma.citas.upsert({
     *   create: {
     *     // ... data to create a Citas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Citas we want to update
     *   }
     * })
    **/
    upsert<T extends CitasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CitasUpsertArgs<ExtArgs>>
    ): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.citas.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitasCountArgs>(
      args?: Subset<T, CitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitasAggregateArgs>(args: Subset<T, CitasAggregateArgs>): Prisma.PrismaPromise<GetCitasAggregateType<T>>

    /**
     * Group by Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitasGroupByArgs['orderBy'] }
        : { orderBy?: CitasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Citas model
   */
  readonly fields: CitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Citas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitasClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cliente<T extends ClientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientesDefaultArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    inmueble<T extends InmueblesAlquilerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InmueblesAlquilerDefaultArgs<ExtArgs>>): Prisma__InmueblesAlquilerClient<$Result.GetResult<Prisma.$InmueblesAlquilerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Citas model
   */ 
  interface CitasFieldRefs {
    readonly num_cita: FieldRef<"Citas", 'Int'>
    readonly num_cliente: FieldRef<"Citas", 'Int'>
    readonly num_inmueble: FieldRef<"Citas", 'Int'>
    readonly fech_cita: FieldRef<"Citas", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Citas findUnique
   */
  export type CitasFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where: CitasWhereUniqueInput
  }


  /**
   * Citas findUniqueOrThrow
   */
  export type CitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where: CitasWhereUniqueInput
  }


  /**
   * Citas findFirst
   */
  export type CitasFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }


  /**
   * Citas findFirstOrThrow
   */
  export type CitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }


  /**
   * Citas findMany
   */
  export type CitasFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }


  /**
   * Citas create
   */
  export type CitasCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * The data needed to create a Citas.
     */
    data: XOR<CitasCreateInput, CitasUncheckedCreateInput>
  }


  /**
   * Citas createMany
   */
  export type CitasCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitasCreateManyInput | CitasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Citas update
   */
  export type CitasUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * The data needed to update a Citas.
     */
    data: XOR<CitasUpdateInput, CitasUncheckedUpdateInput>
    /**
     * Choose, which Citas to update.
     */
    where: CitasWhereUniqueInput
  }


  /**
   * Citas updateMany
   */
  export type CitasUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitasWhereInput
  }


  /**
   * Citas upsert
   */
  export type CitasUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * The filter to search for the Citas to update in case it exists.
     */
    where: CitasWhereUniqueInput
    /**
     * In case the Citas found by the `where` argument doesn't exist, create a new Citas with this data.
     */
    create: XOR<CitasCreateInput, CitasUncheckedCreateInput>
    /**
     * In case the Citas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitasUpdateInput, CitasUncheckedUpdateInput>
  }


  /**
   * Citas delete
   */
  export type CitasDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter which Citas to delete.
     */
    where: CitasWhereUniqueInput
  }


  /**
   * Citas deleteMany
   */
  export type CitasDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitasWhereInput
  }


  /**
   * Citas without action
   */
  export type CitasDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CitasInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DinosaurScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type DinosaurScalarFieldEnum = (typeof DinosaurScalarFieldEnum)[keyof typeof DinosaurScalarFieldEnum]


  export const EmpleadosScalarFieldEnum: {
    num_empleado: 'num_empleado',
    nom_empleado: 'nom_empleado',
    dir_empleado: 'dir_empleado',
    cat_empleado: 'cat_empleado',
    sal_empleado: 'sal_empleado',
    nom_supervisor: 'nom_supervisor',
    cor_empleado: 'cor_empleado',
    pas_empleado: 'pas_empleado'
  };

  export type EmpleadosScalarFieldEnum = (typeof EmpleadosScalarFieldEnum)[keyof typeof EmpleadosScalarFieldEnum]


  export const InmueblesAlquilerScalarFieldEnum: {
    num_inmueble: 'num_inmueble',
    dir_inmueble: 'dir_inmueble',
    tipo_inmueble: 'tipo_inmueble',
    num_habitaciones: 'num_habitaciones',
    import_mensual: 'import_mensual',
    num_propietario: 'num_propietario',
    num_propietario_em: 'num_propietario_em'
  };

  export type InmueblesAlquilerScalarFieldEnum = (typeof InmueblesAlquilerScalarFieldEnum)[keyof typeof InmueblesAlquilerScalarFieldEnum]


  export const PropietariosPrivadosScalarFieldEnum: {
    num_propietario: 'num_propietario',
    nom_propietario: 'nom_propietario',
    dir_propietario: 'dir_propietario',
    tel_propietario: 'tel_propietario'
  };

  export type PropietariosPrivadosScalarFieldEnum = (typeof PropietariosPrivadosScalarFieldEnum)[keyof typeof PropietariosPrivadosScalarFieldEnum]


  export const PropietariosEmpresarialesScalarFieldEnum: {
    num_propietario_em: 'num_propietario_em',
    nom_propietario_em: 'nom_propietario_em',
    tipo_empresa: 'tipo_empresa',
    dir_empresa: 'dir_empresa',
    tel_propietario_em: 'tel_propietario_em',
    nom_contacto: 'nom_contacto'
  };

  export type PropietariosEmpresarialesScalarFieldEnum = (typeof PropietariosEmpresarialesScalarFieldEnum)[keyof typeof PropietariosEmpresarialesScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    num_cliente: 'num_cliente',
    nom_cliente: 'nom_cliente',
    tel_cliente: 'tel_cliente',
    tipo_inmueble: 'tipo_inmueble',
    importmax_inmueble: 'importmax_inmueble',
    nom_empleado: 'nom_empleado',
    sucregistro_cielte: 'sucregistro_cielte'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const ContratosAlquilerScalarFieldEnum: {
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

  export type ContratosAlquilerScalarFieldEnum = (typeof ContratosAlquilerScalarFieldEnum)[keyof typeof ContratosAlquilerScalarFieldEnum]


  export const CitasScalarFieldEnum: {
    num_cita: 'num_cita',
    num_cliente: 'num_cliente',
    num_inmueble: 'num_inmueble',
    fech_cita: 'fech_cita'
  };

  export type CitasScalarFieldEnum = (typeof CitasScalarFieldEnum)[keyof typeof CitasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DinosaurWhereInput = {
    AND?: DinosaurWhereInput | DinosaurWhereInput[]
    OR?: DinosaurWhereInput[]
    NOT?: DinosaurWhereInput | DinosaurWhereInput[]
    id?: IntFilter<"Dinosaur"> | number
    name?: StringFilter<"Dinosaur"> | string
    description?: StringNullableFilter<"Dinosaur"> | string | null
  }

  export type DinosaurOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type DinosaurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DinosaurWhereInput | DinosaurWhereInput[]
    OR?: DinosaurWhereInput[]
    NOT?: DinosaurWhereInput | DinosaurWhereInput[]
    name?: StringFilter<"Dinosaur"> | string
    description?: StringNullableFilter<"Dinosaur"> | string | null
  }, "id">

  export type DinosaurOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: DinosaurCountOrderByAggregateInput
    _avg?: DinosaurAvgOrderByAggregateInput
    _max?: DinosaurMaxOrderByAggregateInput
    _min?: DinosaurMinOrderByAggregateInput
    _sum?: DinosaurSumOrderByAggregateInput
  }

  export type DinosaurScalarWhereWithAggregatesInput = {
    AND?: DinosaurScalarWhereWithAggregatesInput | DinosaurScalarWhereWithAggregatesInput[]
    OR?: DinosaurScalarWhereWithAggregatesInput[]
    NOT?: DinosaurScalarWhereWithAggregatesInput | DinosaurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dinosaur"> | number
    name?: StringWithAggregatesFilter<"Dinosaur"> | string
    description?: StringNullableWithAggregatesFilter<"Dinosaur"> | string | null
  }

  export type EmpleadosWhereInput = {
    AND?: EmpleadosWhereInput | EmpleadosWhereInput[]
    OR?: EmpleadosWhereInput[]
    NOT?: EmpleadosWhereInput | EmpleadosWhereInput[]
    num_empleado?: IntFilter<"Empleados"> | number
    nom_empleado?: StringFilter<"Empleados"> | string
    dir_empleado?: StringFilter<"Empleados"> | string
    cat_empleado?: StringFilter<"Empleados"> | string
    sal_empleado?: IntFilter<"Empleados"> | number
    nom_supervisor?: StringFilter<"Empleados"> | string
    cor_empleado?: StringFilter<"Empleados"> | string
    pas_empleado?: StringFilter<"Empleados"> | string
  }

  export type EmpleadosOrderByWithRelationInput = {
    num_empleado?: SortOrder
    nom_empleado?: SortOrder
    dir_empleado?: SortOrder
    cat_empleado?: SortOrder
    sal_empleado?: SortOrder
    nom_supervisor?: SortOrder
    cor_empleado?: SortOrder
    pas_empleado?: SortOrder
  }

  export type EmpleadosWhereUniqueInput = Prisma.AtLeast<{
    num_empleado?: number
    dir_empleado?: string
    AND?: EmpleadosWhereInput | EmpleadosWhereInput[]
    OR?: EmpleadosWhereInput[]
    NOT?: EmpleadosWhereInput | EmpleadosWhereInput[]
    nom_empleado?: StringFilter<"Empleados"> | string
    cat_empleado?: StringFilter<"Empleados"> | string
    sal_empleado?: IntFilter<"Empleados"> | number
    nom_supervisor?: StringFilter<"Empleados"> | string
    cor_empleado?: StringFilter<"Empleados"> | string
    pas_empleado?: StringFilter<"Empleados"> | string
  }, "num_empleado" | "dir_empleado">

  export type EmpleadosOrderByWithAggregationInput = {
    num_empleado?: SortOrder
    nom_empleado?: SortOrder
    dir_empleado?: SortOrder
    cat_empleado?: SortOrder
    sal_empleado?: SortOrder
    nom_supervisor?: SortOrder
    cor_empleado?: SortOrder
    pas_empleado?: SortOrder
    _count?: EmpleadosCountOrderByAggregateInput
    _avg?: EmpleadosAvgOrderByAggregateInput
    _max?: EmpleadosMaxOrderByAggregateInput
    _min?: EmpleadosMinOrderByAggregateInput
    _sum?: EmpleadosSumOrderByAggregateInput
  }

  export type EmpleadosScalarWhereWithAggregatesInput = {
    AND?: EmpleadosScalarWhereWithAggregatesInput | EmpleadosScalarWhereWithAggregatesInput[]
    OR?: EmpleadosScalarWhereWithAggregatesInput[]
    NOT?: EmpleadosScalarWhereWithAggregatesInput | EmpleadosScalarWhereWithAggregatesInput[]
    num_empleado?: IntWithAggregatesFilter<"Empleados"> | number
    nom_empleado?: StringWithAggregatesFilter<"Empleados"> | string
    dir_empleado?: StringWithAggregatesFilter<"Empleados"> | string
    cat_empleado?: StringWithAggregatesFilter<"Empleados"> | string
    sal_empleado?: IntWithAggregatesFilter<"Empleados"> | number
    nom_supervisor?: StringWithAggregatesFilter<"Empleados"> | string
    cor_empleado?: StringWithAggregatesFilter<"Empleados"> | string
    pas_empleado?: StringWithAggregatesFilter<"Empleados"> | string
  }

  export type InmueblesAlquilerWhereInput = {
    AND?: InmueblesAlquilerWhereInput | InmueblesAlquilerWhereInput[]
    OR?: InmueblesAlquilerWhereInput[]
    NOT?: InmueblesAlquilerWhereInput | InmueblesAlquilerWhereInput[]
    num_inmueble?: IntFilter<"InmueblesAlquiler"> | number
    dir_inmueble?: StringFilter<"InmueblesAlquiler"> | string
    tipo_inmueble?: StringFilter<"InmueblesAlquiler"> | string
    num_habitaciones?: IntFilter<"InmueblesAlquiler"> | number
    import_mensual?: BigIntFilter<"InmueblesAlquiler"> | bigint | number
    num_propietario?: IntNullableFilter<"InmueblesAlquiler"> | number | null
    num_propietario_em?: IntNullableFilter<"InmueblesAlquiler"> | number | null
    ContratosAlquiler?: ContratosAlquilerListRelationFilter
    Citas?: CitasListRelationFilter
    propietarioPrivado?: XOR<PropietariosPrivadosNullableRelationFilter, PropietariosPrivadosWhereInput> | null
    propietarioEmpresarial?: XOR<PropietariosEmpresarialesNullableRelationFilter, PropietariosEmpresarialesWhereInput> | null
  }

  export type InmueblesAlquilerOrderByWithRelationInput = {
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    tipo_inmueble?: SortOrder
    num_habitaciones?: SortOrder
    import_mensual?: SortOrder
    num_propietario?: SortOrderInput | SortOrder
    num_propietario_em?: SortOrderInput | SortOrder
    ContratosAlquiler?: ContratosAlquilerOrderByRelationAggregateInput
    Citas?: CitasOrderByRelationAggregateInput
    propietarioPrivado?: PropietariosPrivadosOrderByWithRelationInput
    propietarioEmpresarial?: PropietariosEmpresarialesOrderByWithRelationInput
  }

  export type InmueblesAlquilerWhereUniqueInput = Prisma.AtLeast<{
    num_inmueble?: number
    AND?: InmueblesAlquilerWhereInput | InmueblesAlquilerWhereInput[]
    OR?: InmueblesAlquilerWhereInput[]
    NOT?: InmueblesAlquilerWhereInput | InmueblesAlquilerWhereInput[]
    dir_inmueble?: StringFilter<"InmueblesAlquiler"> | string
    tipo_inmueble?: StringFilter<"InmueblesAlquiler"> | string
    num_habitaciones?: IntFilter<"InmueblesAlquiler"> | number
    import_mensual?: BigIntFilter<"InmueblesAlquiler"> | bigint | number
    num_propietario?: IntNullableFilter<"InmueblesAlquiler"> | number | null
    num_propietario_em?: IntNullableFilter<"InmueblesAlquiler"> | number | null
    ContratosAlquiler?: ContratosAlquilerListRelationFilter
    Citas?: CitasListRelationFilter
    propietarioPrivado?: XOR<PropietariosPrivadosNullableRelationFilter, PropietariosPrivadosWhereInput> | null
    propietarioEmpresarial?: XOR<PropietariosEmpresarialesNullableRelationFilter, PropietariosEmpresarialesWhereInput> | null
  }, "num_inmueble">

  export type InmueblesAlquilerOrderByWithAggregationInput = {
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    tipo_inmueble?: SortOrder
    num_habitaciones?: SortOrder
    import_mensual?: SortOrder
    num_propietario?: SortOrderInput | SortOrder
    num_propietario_em?: SortOrderInput | SortOrder
    _count?: InmueblesAlquilerCountOrderByAggregateInput
    _avg?: InmueblesAlquilerAvgOrderByAggregateInput
    _max?: InmueblesAlquilerMaxOrderByAggregateInput
    _min?: InmueblesAlquilerMinOrderByAggregateInput
    _sum?: InmueblesAlquilerSumOrderByAggregateInput
  }

  export type InmueblesAlquilerScalarWhereWithAggregatesInput = {
    AND?: InmueblesAlquilerScalarWhereWithAggregatesInput | InmueblesAlquilerScalarWhereWithAggregatesInput[]
    OR?: InmueblesAlquilerScalarWhereWithAggregatesInput[]
    NOT?: InmueblesAlquilerScalarWhereWithAggregatesInput | InmueblesAlquilerScalarWhereWithAggregatesInput[]
    num_inmueble?: IntWithAggregatesFilter<"InmueblesAlquiler"> | number
    dir_inmueble?: StringWithAggregatesFilter<"InmueblesAlquiler"> | string
    tipo_inmueble?: StringWithAggregatesFilter<"InmueblesAlquiler"> | string
    num_habitaciones?: IntWithAggregatesFilter<"InmueblesAlquiler"> | number
    import_mensual?: BigIntWithAggregatesFilter<"InmueblesAlquiler"> | bigint | number
    num_propietario?: IntNullableWithAggregatesFilter<"InmueblesAlquiler"> | number | null
    num_propietario_em?: IntNullableWithAggregatesFilter<"InmueblesAlquiler"> | number | null
  }

  export type PropietariosPrivadosWhereInput = {
    AND?: PropietariosPrivadosWhereInput | PropietariosPrivadosWhereInput[]
    OR?: PropietariosPrivadosWhereInput[]
    NOT?: PropietariosPrivadosWhereInput | PropietariosPrivadosWhereInput[]
    num_propietario?: IntFilter<"PropietariosPrivados"> | number
    nom_propietario?: StringFilter<"PropietariosPrivados"> | string
    dir_propietario?: StringFilter<"PropietariosPrivados"> | string
    tel_propietario?: StringFilter<"PropietariosPrivados"> | string
    InmueblesAlquiler?: InmueblesAlquilerListRelationFilter
  }

  export type PropietariosPrivadosOrderByWithRelationInput = {
    num_propietario?: SortOrder
    nom_propietario?: SortOrder
    dir_propietario?: SortOrder
    tel_propietario?: SortOrder
    InmueblesAlquiler?: InmueblesAlquilerOrderByRelationAggregateInput
  }

  export type PropietariosPrivadosWhereUniqueInput = Prisma.AtLeast<{
    num_propietario?: number
    AND?: PropietariosPrivadosWhereInput | PropietariosPrivadosWhereInput[]
    OR?: PropietariosPrivadosWhereInput[]
    NOT?: PropietariosPrivadosWhereInput | PropietariosPrivadosWhereInput[]
    nom_propietario?: StringFilter<"PropietariosPrivados"> | string
    dir_propietario?: StringFilter<"PropietariosPrivados"> | string
    tel_propietario?: StringFilter<"PropietariosPrivados"> | string
    InmueblesAlquiler?: InmueblesAlquilerListRelationFilter
  }, "num_propietario">

  export type PropietariosPrivadosOrderByWithAggregationInput = {
    num_propietario?: SortOrder
    nom_propietario?: SortOrder
    dir_propietario?: SortOrder
    tel_propietario?: SortOrder
    _count?: PropietariosPrivadosCountOrderByAggregateInput
    _avg?: PropietariosPrivadosAvgOrderByAggregateInput
    _max?: PropietariosPrivadosMaxOrderByAggregateInput
    _min?: PropietariosPrivadosMinOrderByAggregateInput
    _sum?: PropietariosPrivadosSumOrderByAggregateInput
  }

  export type PropietariosPrivadosScalarWhereWithAggregatesInput = {
    AND?: PropietariosPrivadosScalarWhereWithAggregatesInput | PropietariosPrivadosScalarWhereWithAggregatesInput[]
    OR?: PropietariosPrivadosScalarWhereWithAggregatesInput[]
    NOT?: PropietariosPrivadosScalarWhereWithAggregatesInput | PropietariosPrivadosScalarWhereWithAggregatesInput[]
    num_propietario?: IntWithAggregatesFilter<"PropietariosPrivados"> | number
    nom_propietario?: StringWithAggregatesFilter<"PropietariosPrivados"> | string
    dir_propietario?: StringWithAggregatesFilter<"PropietariosPrivados"> | string
    tel_propietario?: StringWithAggregatesFilter<"PropietariosPrivados"> | string
  }

  export type PropietariosEmpresarialesWhereInput = {
    AND?: PropietariosEmpresarialesWhereInput | PropietariosEmpresarialesWhereInput[]
    OR?: PropietariosEmpresarialesWhereInput[]
    NOT?: PropietariosEmpresarialesWhereInput | PropietariosEmpresarialesWhereInput[]
    num_propietario_em?: IntFilter<"PropietariosEmpresariales"> | number
    nom_propietario_em?: StringFilter<"PropietariosEmpresariales"> | string
    tipo_empresa?: StringFilter<"PropietariosEmpresariales"> | string
    dir_empresa?: StringFilter<"PropietariosEmpresariales"> | string
    tel_propietario_em?: StringFilter<"PropietariosEmpresariales"> | string
    nom_contacto?: StringFilter<"PropietariosEmpresariales"> | string
    InmueblesAlquiler?: InmueblesAlquilerListRelationFilter
  }

  export type PropietariosEmpresarialesOrderByWithRelationInput = {
    num_propietario_em?: SortOrder
    nom_propietario_em?: SortOrder
    tipo_empresa?: SortOrder
    dir_empresa?: SortOrder
    tel_propietario_em?: SortOrder
    nom_contacto?: SortOrder
    InmueblesAlquiler?: InmueblesAlquilerOrderByRelationAggregateInput
  }

  export type PropietariosEmpresarialesWhereUniqueInput = Prisma.AtLeast<{
    num_propietario_em?: number
    AND?: PropietariosEmpresarialesWhereInput | PropietariosEmpresarialesWhereInput[]
    OR?: PropietariosEmpresarialesWhereInput[]
    NOT?: PropietariosEmpresarialesWhereInput | PropietariosEmpresarialesWhereInput[]
    nom_propietario_em?: StringFilter<"PropietariosEmpresariales"> | string
    tipo_empresa?: StringFilter<"PropietariosEmpresariales"> | string
    dir_empresa?: StringFilter<"PropietariosEmpresariales"> | string
    tel_propietario_em?: StringFilter<"PropietariosEmpresariales"> | string
    nom_contacto?: StringFilter<"PropietariosEmpresariales"> | string
    InmueblesAlquiler?: InmueblesAlquilerListRelationFilter
  }, "num_propietario_em">

  export type PropietariosEmpresarialesOrderByWithAggregationInput = {
    num_propietario_em?: SortOrder
    nom_propietario_em?: SortOrder
    tipo_empresa?: SortOrder
    dir_empresa?: SortOrder
    tel_propietario_em?: SortOrder
    nom_contacto?: SortOrder
    _count?: PropietariosEmpresarialesCountOrderByAggregateInput
    _avg?: PropietariosEmpresarialesAvgOrderByAggregateInput
    _max?: PropietariosEmpresarialesMaxOrderByAggregateInput
    _min?: PropietariosEmpresarialesMinOrderByAggregateInput
    _sum?: PropietariosEmpresarialesSumOrderByAggregateInput
  }

  export type PropietariosEmpresarialesScalarWhereWithAggregatesInput = {
    AND?: PropietariosEmpresarialesScalarWhereWithAggregatesInput | PropietariosEmpresarialesScalarWhereWithAggregatesInput[]
    OR?: PropietariosEmpresarialesScalarWhereWithAggregatesInput[]
    NOT?: PropietariosEmpresarialesScalarWhereWithAggregatesInput | PropietariosEmpresarialesScalarWhereWithAggregatesInput[]
    num_propietario_em?: IntWithAggregatesFilter<"PropietariosEmpresariales"> | number
    nom_propietario_em?: StringWithAggregatesFilter<"PropietariosEmpresariales"> | string
    tipo_empresa?: StringWithAggregatesFilter<"PropietariosEmpresariales"> | string
    dir_empresa?: StringWithAggregatesFilter<"PropietariosEmpresariales"> | string
    tel_propietario_em?: StringWithAggregatesFilter<"PropietariosEmpresariales"> | string
    nom_contacto?: StringWithAggregatesFilter<"PropietariosEmpresariales"> | string
  }

  export type ClientesWhereInput = {
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    num_cliente?: IntFilter<"Clientes"> | number
    nom_cliente?: StringFilter<"Clientes"> | string
    tel_cliente?: StringFilter<"Clientes"> | string
    tipo_inmueble?: StringFilter<"Clientes"> | string
    importmax_inmueble?: IntFilter<"Clientes"> | number
    nom_empleado?: StringFilter<"Clientes"> | string
    sucregistro_cielte?: StringFilter<"Clientes"> | string
    ContratosAlquiler?: ContratosAlquilerListRelationFilter
    Citas?: CitasListRelationFilter
  }

  export type ClientesOrderByWithRelationInput = {
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    tel_cliente?: SortOrder
    tipo_inmueble?: SortOrder
    importmax_inmueble?: SortOrder
    nom_empleado?: SortOrder
    sucregistro_cielte?: SortOrder
    ContratosAlquiler?: ContratosAlquilerOrderByRelationAggregateInput
    Citas?: CitasOrderByRelationAggregateInput
  }

  export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    num_cliente?: number
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    nom_cliente?: StringFilter<"Clientes"> | string
    tel_cliente?: StringFilter<"Clientes"> | string
    tipo_inmueble?: StringFilter<"Clientes"> | string
    importmax_inmueble?: IntFilter<"Clientes"> | number
    nom_empleado?: StringFilter<"Clientes"> | string
    sucregistro_cielte?: StringFilter<"Clientes"> | string
    ContratosAlquiler?: ContratosAlquilerListRelationFilter
    Citas?: CitasListRelationFilter
  }, "num_cliente">

  export type ClientesOrderByWithAggregationInput = {
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    tel_cliente?: SortOrder
    tipo_inmueble?: SortOrder
    importmax_inmueble?: SortOrder
    nom_empleado?: SortOrder
    sucregistro_cielte?: SortOrder
    _count?: ClientesCountOrderByAggregateInput
    _avg?: ClientesAvgOrderByAggregateInput
    _max?: ClientesMaxOrderByAggregateInput
    _min?: ClientesMinOrderByAggregateInput
    _sum?: ClientesSumOrderByAggregateInput
  }

  export type ClientesScalarWhereWithAggregatesInput = {
    AND?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    OR?: ClientesScalarWhereWithAggregatesInput[]
    NOT?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    num_cliente?: IntWithAggregatesFilter<"Clientes"> | number
    nom_cliente?: StringWithAggregatesFilter<"Clientes"> | string
    tel_cliente?: StringWithAggregatesFilter<"Clientes"> | string
    tipo_inmueble?: StringWithAggregatesFilter<"Clientes"> | string
    importmax_inmueble?: IntWithAggregatesFilter<"Clientes"> | number
    nom_empleado?: StringWithAggregatesFilter<"Clientes"> | string
    sucregistro_cielte?: StringWithAggregatesFilter<"Clientes"> | string
  }

  export type ContratosAlquilerWhereInput = {
    AND?: ContratosAlquilerWhereInput | ContratosAlquilerWhereInput[]
    OR?: ContratosAlquilerWhereInput[]
    NOT?: ContratosAlquilerWhereInput | ContratosAlquilerWhereInput[]
    num_contrato?: IntFilter<"ContratosAlquiler"> | number
    num_cliente?: IntFilter<"ContratosAlquiler"> | number
    nom_cliente?: StringFilter<"ContratosAlquiler"> | string
    dir_cliente?: StringFilter<"ContratosAlquiler"> | string
    num_inmueble?: IntFilter<"ContratosAlquiler"> | number
    dir_inmueble?: StringFilter<"ContratosAlquiler"> | string
    import_mensual?: BigIntFilter<"ContratosAlquiler"> | bigint | number
    mod_pago?: StringFilter<"ContratosAlquiler"> | string
    dep_pago?: StringFilter<"ContratosAlquiler"> | string
    dur_contrato?: BigIntFilter<"ContratosAlquiler"> | bigint | number
    fech_inicio?: DateTimeFilter<"ContratosAlquiler"> | Date | string
    fech_fin?: DateTimeFilter<"ContratosAlquiler"> | Date | string
    cliente?: XOR<ClientesRelationFilter, ClientesWhereInput>
    inmueble?: XOR<InmueblesAlquilerRelationFilter, InmueblesAlquilerWhereInput>
  }

  export type ContratosAlquilerOrderByWithRelationInput = {
    num_contrato?: SortOrder
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    dir_cliente?: SortOrder
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    import_mensual?: SortOrder
    mod_pago?: SortOrder
    dep_pago?: SortOrder
    dur_contrato?: SortOrder
    fech_inicio?: SortOrder
    fech_fin?: SortOrder
    cliente?: ClientesOrderByWithRelationInput
    inmueble?: InmueblesAlquilerOrderByWithRelationInput
  }

  export type ContratosAlquilerWhereUniqueInput = Prisma.AtLeast<{
    num_contrato?: number
    AND?: ContratosAlquilerWhereInput | ContratosAlquilerWhereInput[]
    OR?: ContratosAlquilerWhereInput[]
    NOT?: ContratosAlquilerWhereInput | ContratosAlquilerWhereInput[]
    num_cliente?: IntFilter<"ContratosAlquiler"> | number
    nom_cliente?: StringFilter<"ContratosAlquiler"> | string
    dir_cliente?: StringFilter<"ContratosAlquiler"> | string
    num_inmueble?: IntFilter<"ContratosAlquiler"> | number
    dir_inmueble?: StringFilter<"ContratosAlquiler"> | string
    import_mensual?: BigIntFilter<"ContratosAlquiler"> | bigint | number
    mod_pago?: StringFilter<"ContratosAlquiler"> | string
    dep_pago?: StringFilter<"ContratosAlquiler"> | string
    dur_contrato?: BigIntFilter<"ContratosAlquiler"> | bigint | number
    fech_inicio?: DateTimeFilter<"ContratosAlquiler"> | Date | string
    fech_fin?: DateTimeFilter<"ContratosAlquiler"> | Date | string
    cliente?: XOR<ClientesRelationFilter, ClientesWhereInput>
    inmueble?: XOR<InmueblesAlquilerRelationFilter, InmueblesAlquilerWhereInput>
  }, "num_contrato">

  export type ContratosAlquilerOrderByWithAggregationInput = {
    num_contrato?: SortOrder
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    dir_cliente?: SortOrder
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    import_mensual?: SortOrder
    mod_pago?: SortOrder
    dep_pago?: SortOrder
    dur_contrato?: SortOrder
    fech_inicio?: SortOrder
    fech_fin?: SortOrder
    _count?: ContratosAlquilerCountOrderByAggregateInput
    _avg?: ContratosAlquilerAvgOrderByAggregateInput
    _max?: ContratosAlquilerMaxOrderByAggregateInput
    _min?: ContratosAlquilerMinOrderByAggregateInput
    _sum?: ContratosAlquilerSumOrderByAggregateInput
  }

  export type ContratosAlquilerScalarWhereWithAggregatesInput = {
    AND?: ContratosAlquilerScalarWhereWithAggregatesInput | ContratosAlquilerScalarWhereWithAggregatesInput[]
    OR?: ContratosAlquilerScalarWhereWithAggregatesInput[]
    NOT?: ContratosAlquilerScalarWhereWithAggregatesInput | ContratosAlquilerScalarWhereWithAggregatesInput[]
    num_contrato?: IntWithAggregatesFilter<"ContratosAlquiler"> | number
    num_cliente?: IntWithAggregatesFilter<"ContratosAlquiler"> | number
    nom_cliente?: StringWithAggregatesFilter<"ContratosAlquiler"> | string
    dir_cliente?: StringWithAggregatesFilter<"ContratosAlquiler"> | string
    num_inmueble?: IntWithAggregatesFilter<"ContratosAlquiler"> | number
    dir_inmueble?: StringWithAggregatesFilter<"ContratosAlquiler"> | string
    import_mensual?: BigIntWithAggregatesFilter<"ContratosAlquiler"> | bigint | number
    mod_pago?: StringWithAggregatesFilter<"ContratosAlquiler"> | string
    dep_pago?: StringWithAggregatesFilter<"ContratosAlquiler"> | string
    dur_contrato?: BigIntWithAggregatesFilter<"ContratosAlquiler"> | bigint | number
    fech_inicio?: DateTimeWithAggregatesFilter<"ContratosAlquiler"> | Date | string
    fech_fin?: DateTimeWithAggregatesFilter<"ContratosAlquiler"> | Date | string
  }

  export type CitasWhereInput = {
    AND?: CitasWhereInput | CitasWhereInput[]
    OR?: CitasWhereInput[]
    NOT?: CitasWhereInput | CitasWhereInput[]
    num_cita?: IntFilter<"Citas"> | number
    num_cliente?: IntFilter<"Citas"> | number
    num_inmueble?: IntFilter<"Citas"> | number
    fech_cita?: DateTimeFilter<"Citas"> | Date | string
    cliente?: XOR<ClientesRelationFilter, ClientesWhereInput>
    inmueble?: XOR<InmueblesAlquilerRelationFilter, InmueblesAlquilerWhereInput>
  }

  export type CitasOrderByWithRelationInput = {
    num_cita?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
    fech_cita?: SortOrder
    cliente?: ClientesOrderByWithRelationInput
    inmueble?: InmueblesAlquilerOrderByWithRelationInput
  }

  export type CitasWhereUniqueInput = Prisma.AtLeast<{
    num_cita?: number
    AND?: CitasWhereInput | CitasWhereInput[]
    OR?: CitasWhereInput[]
    NOT?: CitasWhereInput | CitasWhereInput[]
    num_cliente?: IntFilter<"Citas"> | number
    num_inmueble?: IntFilter<"Citas"> | number
    fech_cita?: DateTimeFilter<"Citas"> | Date | string
    cliente?: XOR<ClientesRelationFilter, ClientesWhereInput>
    inmueble?: XOR<InmueblesAlquilerRelationFilter, InmueblesAlquilerWhereInput>
  }, "num_cita">

  export type CitasOrderByWithAggregationInput = {
    num_cita?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
    fech_cita?: SortOrder
    _count?: CitasCountOrderByAggregateInput
    _avg?: CitasAvgOrderByAggregateInput
    _max?: CitasMaxOrderByAggregateInput
    _min?: CitasMinOrderByAggregateInput
    _sum?: CitasSumOrderByAggregateInput
  }

  export type CitasScalarWhereWithAggregatesInput = {
    AND?: CitasScalarWhereWithAggregatesInput | CitasScalarWhereWithAggregatesInput[]
    OR?: CitasScalarWhereWithAggregatesInput[]
    NOT?: CitasScalarWhereWithAggregatesInput | CitasScalarWhereWithAggregatesInput[]
    num_cita?: IntWithAggregatesFilter<"Citas"> | number
    num_cliente?: IntWithAggregatesFilter<"Citas"> | number
    num_inmueble?: IntWithAggregatesFilter<"Citas"> | number
    fech_cita?: DateTimeWithAggregatesFilter<"Citas"> | Date | string
  }

  export type DinosaurCreateInput = {
    name: string
    description?: string | null
  }

  export type DinosaurUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type DinosaurUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DinosaurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DinosaurCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type DinosaurUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DinosaurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpleadosCreateInput = {
    nom_empleado: string
    dir_empleado: string
    cat_empleado: string
    sal_empleado: number
    nom_supervisor: string
    cor_empleado: string
    pas_empleado: string
  }

  export type EmpleadosUncheckedCreateInput = {
    num_empleado?: number
    nom_empleado: string
    dir_empleado: string
    cat_empleado: string
    sal_empleado: number
    nom_supervisor: string
    cor_empleado: string
    pas_empleado: string
  }

  export type EmpleadosUpdateInput = {
    nom_empleado?: StringFieldUpdateOperationsInput | string
    dir_empleado?: StringFieldUpdateOperationsInput | string
    cat_empleado?: StringFieldUpdateOperationsInput | string
    sal_empleado?: IntFieldUpdateOperationsInput | number
    nom_supervisor?: StringFieldUpdateOperationsInput | string
    cor_empleado?: StringFieldUpdateOperationsInput | string
    pas_empleado?: StringFieldUpdateOperationsInput | string
  }

  export type EmpleadosUncheckedUpdateInput = {
    num_empleado?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    dir_empleado?: StringFieldUpdateOperationsInput | string
    cat_empleado?: StringFieldUpdateOperationsInput | string
    sal_empleado?: IntFieldUpdateOperationsInput | number
    nom_supervisor?: StringFieldUpdateOperationsInput | string
    cor_empleado?: StringFieldUpdateOperationsInput | string
    pas_empleado?: StringFieldUpdateOperationsInput | string
  }

  export type EmpleadosCreateManyInput = {
    num_empleado?: number
    nom_empleado: string
    dir_empleado: string
    cat_empleado: string
    sal_empleado: number
    nom_supervisor: string
    cor_empleado: string
    pas_empleado: string
  }

  export type EmpleadosUpdateManyMutationInput = {
    nom_empleado?: StringFieldUpdateOperationsInput | string
    dir_empleado?: StringFieldUpdateOperationsInput | string
    cat_empleado?: StringFieldUpdateOperationsInput | string
    sal_empleado?: IntFieldUpdateOperationsInput | number
    nom_supervisor?: StringFieldUpdateOperationsInput | string
    cor_empleado?: StringFieldUpdateOperationsInput | string
    pas_empleado?: StringFieldUpdateOperationsInput | string
  }

  export type EmpleadosUncheckedUpdateManyInput = {
    num_empleado?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    dir_empleado?: StringFieldUpdateOperationsInput | string
    cat_empleado?: StringFieldUpdateOperationsInput | string
    sal_empleado?: IntFieldUpdateOperationsInput | number
    nom_supervisor?: StringFieldUpdateOperationsInput | string
    cor_empleado?: StringFieldUpdateOperationsInput | string
    pas_empleado?: StringFieldUpdateOperationsInput | string
  }

  export type InmueblesAlquilerCreateInput = {
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    ContratosAlquiler?: ContratosAlquilerCreateNestedManyWithoutInmuebleInput
    Citas?: CitasCreateNestedManyWithoutInmuebleInput
    propietarioPrivado?: PropietariosPrivadosCreateNestedOneWithoutInmueblesAlquilerInput
    propietarioEmpresarial?: PropietariosEmpresarialesCreateNestedOneWithoutInmueblesAlquilerInput
  }

  export type InmueblesAlquilerUncheckedCreateInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario?: number | null
    num_propietario_em?: number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedCreateNestedManyWithoutInmuebleInput
    Citas?: CitasUncheckedCreateNestedManyWithoutInmuebleInput
  }

  export type InmueblesAlquilerUpdateInput = {
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    ContratosAlquiler?: ContratosAlquilerUpdateManyWithoutInmuebleNestedInput
    Citas?: CitasUpdateManyWithoutInmuebleNestedInput
    propietarioPrivado?: PropietariosPrivadosUpdateOneWithoutInmueblesAlquilerNestedInput
    propietarioEmpresarial?: PropietariosEmpresarialesUpdateOneWithoutInmueblesAlquilerNestedInput
  }

  export type InmueblesAlquilerUncheckedUpdateInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario?: NullableIntFieldUpdateOperationsInput | number | null
    num_propietario_em?: NullableIntFieldUpdateOperationsInput | number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedUpdateManyWithoutInmuebleNestedInput
    Citas?: CitasUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type InmueblesAlquilerCreateManyInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario?: number | null
    num_propietario_em?: number | null
  }

  export type InmueblesAlquilerUpdateManyMutationInput = {
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type InmueblesAlquilerUncheckedUpdateManyInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario?: NullableIntFieldUpdateOperationsInput | number | null
    num_propietario_em?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PropietariosPrivadosCreateInput = {
    nom_propietario: string
    dir_propietario: string
    tel_propietario: string
    InmueblesAlquiler?: InmueblesAlquilerCreateNestedManyWithoutPropietarioPrivadoInput
  }

  export type PropietariosPrivadosUncheckedCreateInput = {
    num_propietario?: number
    nom_propietario: string
    dir_propietario: string
    tel_propietario: string
    InmueblesAlquiler?: InmueblesAlquilerUncheckedCreateNestedManyWithoutPropietarioPrivadoInput
  }

  export type PropietariosPrivadosUpdateInput = {
    nom_propietario?: StringFieldUpdateOperationsInput | string
    dir_propietario?: StringFieldUpdateOperationsInput | string
    tel_propietario?: StringFieldUpdateOperationsInput | string
    InmueblesAlquiler?: InmueblesAlquilerUpdateManyWithoutPropietarioPrivadoNestedInput
  }

  export type PropietariosPrivadosUncheckedUpdateInput = {
    num_propietario?: IntFieldUpdateOperationsInput | number
    nom_propietario?: StringFieldUpdateOperationsInput | string
    dir_propietario?: StringFieldUpdateOperationsInput | string
    tel_propietario?: StringFieldUpdateOperationsInput | string
    InmueblesAlquiler?: InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioPrivadoNestedInput
  }

  export type PropietariosPrivadosCreateManyInput = {
    num_propietario?: number
    nom_propietario: string
    dir_propietario: string
    tel_propietario: string
  }

  export type PropietariosPrivadosUpdateManyMutationInput = {
    nom_propietario?: StringFieldUpdateOperationsInput | string
    dir_propietario?: StringFieldUpdateOperationsInput | string
    tel_propietario?: StringFieldUpdateOperationsInput | string
  }

  export type PropietariosPrivadosUncheckedUpdateManyInput = {
    num_propietario?: IntFieldUpdateOperationsInput | number
    nom_propietario?: StringFieldUpdateOperationsInput | string
    dir_propietario?: StringFieldUpdateOperationsInput | string
    tel_propietario?: StringFieldUpdateOperationsInput | string
  }

  export type PropietariosEmpresarialesCreateInput = {
    nom_propietario_em: string
    tipo_empresa: string
    dir_empresa: string
    tel_propietario_em: string
    nom_contacto: string
    InmueblesAlquiler?: InmueblesAlquilerCreateNestedManyWithoutPropietarioEmpresarialInput
  }

  export type PropietariosEmpresarialesUncheckedCreateInput = {
    num_propietario_em?: number
    nom_propietario_em: string
    tipo_empresa: string
    dir_empresa: string
    tel_propietario_em: string
    nom_contacto: string
    InmueblesAlquiler?: InmueblesAlquilerUncheckedCreateNestedManyWithoutPropietarioEmpresarialInput
  }

  export type PropietariosEmpresarialesUpdateInput = {
    nom_propietario_em?: StringFieldUpdateOperationsInput | string
    tipo_empresa?: StringFieldUpdateOperationsInput | string
    dir_empresa?: StringFieldUpdateOperationsInput | string
    tel_propietario_em?: StringFieldUpdateOperationsInput | string
    nom_contacto?: StringFieldUpdateOperationsInput | string
    InmueblesAlquiler?: InmueblesAlquilerUpdateManyWithoutPropietarioEmpresarialNestedInput
  }

  export type PropietariosEmpresarialesUncheckedUpdateInput = {
    num_propietario_em?: IntFieldUpdateOperationsInput | number
    nom_propietario_em?: StringFieldUpdateOperationsInput | string
    tipo_empresa?: StringFieldUpdateOperationsInput | string
    dir_empresa?: StringFieldUpdateOperationsInput | string
    tel_propietario_em?: StringFieldUpdateOperationsInput | string
    nom_contacto?: StringFieldUpdateOperationsInput | string
    InmueblesAlquiler?: InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioEmpresarialNestedInput
  }

  export type PropietariosEmpresarialesCreateManyInput = {
    num_propietario_em?: number
    nom_propietario_em: string
    tipo_empresa: string
    dir_empresa: string
    tel_propietario_em: string
    nom_contacto: string
  }

  export type PropietariosEmpresarialesUpdateManyMutationInput = {
    nom_propietario_em?: StringFieldUpdateOperationsInput | string
    tipo_empresa?: StringFieldUpdateOperationsInput | string
    dir_empresa?: StringFieldUpdateOperationsInput | string
    tel_propietario_em?: StringFieldUpdateOperationsInput | string
    nom_contacto?: StringFieldUpdateOperationsInput | string
  }

  export type PropietariosEmpresarialesUncheckedUpdateManyInput = {
    num_propietario_em?: IntFieldUpdateOperationsInput | number
    nom_propietario_em?: StringFieldUpdateOperationsInput | string
    tipo_empresa?: StringFieldUpdateOperationsInput | string
    dir_empresa?: StringFieldUpdateOperationsInput | string
    tel_propietario_em?: StringFieldUpdateOperationsInput | string
    nom_contacto?: StringFieldUpdateOperationsInput | string
  }

  export type ClientesCreateInput = {
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
    ContratosAlquiler?: ContratosAlquilerCreateNestedManyWithoutClienteInput
    Citas?: CitasCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateInput = {
    num_cliente?: number
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
    ContratosAlquiler?: ContratosAlquilerUncheckedCreateNestedManyWithoutClienteInput
    Citas?: CitasUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesUpdateInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
    ContratosAlquiler?: ContratosAlquilerUpdateManyWithoutClienteNestedInput
    Citas?: CitasUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateInput = {
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
    ContratosAlquiler?: ContratosAlquilerUncheckedUpdateManyWithoutClienteNestedInput
    Citas?: CitasUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClientesCreateManyInput = {
    num_cliente?: number
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
  }

  export type ClientesUpdateManyMutationInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
  }

  export type ClientesUncheckedUpdateManyInput = {
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
  }

  export type ContratosAlquilerCreateInput = {
    nom_cliente: string
    dir_cliente: string
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
    cliente: ClientesCreateNestedOneWithoutContratosAlquilerInput
    inmueble: InmueblesAlquilerCreateNestedOneWithoutContratosAlquilerInput
  }

  export type ContratosAlquilerUncheckedCreateInput = {
    num_contrato?: number
    num_cliente: number
    nom_cliente: string
    dir_cliente: string
    num_inmueble: number
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
  }

  export type ContratosAlquilerUpdateInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutContratosAlquilerNestedInput
    inmueble?: InmueblesAlquilerUpdateOneRequiredWithoutContratosAlquilerNestedInput
  }

  export type ContratosAlquilerUncheckedUpdateInput = {
    num_contrato?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratosAlquilerCreateManyInput = {
    num_contrato?: number
    num_cliente: number
    nom_cliente: string
    dir_cliente: string
    num_inmueble: number
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
  }

  export type ContratosAlquilerUpdateManyMutationInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratosAlquilerUncheckedUpdateManyInput = {
    num_contrato?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasCreateInput = {
    fech_cita: Date | string
    cliente: ClientesCreateNestedOneWithoutCitasInput
    inmueble: InmueblesAlquilerCreateNestedOneWithoutCitasInput
  }

  export type CitasUncheckedCreateInput = {
    num_cita?: number
    num_cliente: number
    num_inmueble: number
    fech_cita: Date | string
  }

  export type CitasUpdateInput = {
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutCitasNestedInput
    inmueble?: InmueblesAlquilerUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateInput = {
    num_cita?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    num_inmueble?: IntFieldUpdateOperationsInput | number
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasCreateManyInput = {
    num_cita?: number
    num_cliente: number
    num_inmueble: number
    fech_cita: Date | string
  }

  export type CitasUpdateManyMutationInput = {
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasUncheckedUpdateManyInput = {
    num_cita?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    num_inmueble?: IntFieldUpdateOperationsInput | number
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DinosaurCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DinosaurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DinosaurMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DinosaurMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DinosaurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EmpleadosCountOrderByAggregateInput = {
    num_empleado?: SortOrder
    nom_empleado?: SortOrder
    dir_empleado?: SortOrder
    cat_empleado?: SortOrder
    sal_empleado?: SortOrder
    nom_supervisor?: SortOrder
    cor_empleado?: SortOrder
    pas_empleado?: SortOrder
  }

  export type EmpleadosAvgOrderByAggregateInput = {
    num_empleado?: SortOrder
    sal_empleado?: SortOrder
  }

  export type EmpleadosMaxOrderByAggregateInput = {
    num_empleado?: SortOrder
    nom_empleado?: SortOrder
    dir_empleado?: SortOrder
    cat_empleado?: SortOrder
    sal_empleado?: SortOrder
    nom_supervisor?: SortOrder
    cor_empleado?: SortOrder
    pas_empleado?: SortOrder
  }

  export type EmpleadosMinOrderByAggregateInput = {
    num_empleado?: SortOrder
    nom_empleado?: SortOrder
    dir_empleado?: SortOrder
    cat_empleado?: SortOrder
    sal_empleado?: SortOrder
    nom_supervisor?: SortOrder
    cor_empleado?: SortOrder
    pas_empleado?: SortOrder
  }

  export type EmpleadosSumOrderByAggregateInput = {
    num_empleado?: SortOrder
    sal_empleado?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ContratosAlquilerListRelationFilter = {
    every?: ContratosAlquilerWhereInput
    some?: ContratosAlquilerWhereInput
    none?: ContratosAlquilerWhereInput
  }

  export type CitasListRelationFilter = {
    every?: CitasWhereInput
    some?: CitasWhereInput
    none?: CitasWhereInput
  }

  export type PropietariosPrivadosNullableRelationFilter = {
    is?: PropietariosPrivadosWhereInput | null
    isNot?: PropietariosPrivadosWhereInput | null
  }

  export type PropietariosEmpresarialesNullableRelationFilter = {
    is?: PropietariosEmpresarialesWhereInput | null
    isNot?: PropietariosEmpresarialesWhereInput | null
  }

  export type ContratosAlquilerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InmueblesAlquilerCountOrderByAggregateInput = {
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    tipo_inmueble?: SortOrder
    num_habitaciones?: SortOrder
    import_mensual?: SortOrder
    num_propietario?: SortOrder
    num_propietario_em?: SortOrder
  }

  export type InmueblesAlquilerAvgOrderByAggregateInput = {
    num_inmueble?: SortOrder
    num_habitaciones?: SortOrder
    import_mensual?: SortOrder
    num_propietario?: SortOrder
    num_propietario_em?: SortOrder
  }

  export type InmueblesAlquilerMaxOrderByAggregateInput = {
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    tipo_inmueble?: SortOrder
    num_habitaciones?: SortOrder
    import_mensual?: SortOrder
    num_propietario?: SortOrder
    num_propietario_em?: SortOrder
  }

  export type InmueblesAlquilerMinOrderByAggregateInput = {
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    tipo_inmueble?: SortOrder
    num_habitaciones?: SortOrder
    import_mensual?: SortOrder
    num_propietario?: SortOrder
    num_propietario_em?: SortOrder
  }

  export type InmueblesAlquilerSumOrderByAggregateInput = {
    num_inmueble?: SortOrder
    num_habitaciones?: SortOrder
    import_mensual?: SortOrder
    num_propietario?: SortOrder
    num_propietario_em?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type InmueblesAlquilerListRelationFilter = {
    every?: InmueblesAlquilerWhereInput
    some?: InmueblesAlquilerWhereInput
    none?: InmueblesAlquilerWhereInput
  }

  export type InmueblesAlquilerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropietariosPrivadosCountOrderByAggregateInput = {
    num_propietario?: SortOrder
    nom_propietario?: SortOrder
    dir_propietario?: SortOrder
    tel_propietario?: SortOrder
  }

  export type PropietariosPrivadosAvgOrderByAggregateInput = {
    num_propietario?: SortOrder
  }

  export type PropietariosPrivadosMaxOrderByAggregateInput = {
    num_propietario?: SortOrder
    nom_propietario?: SortOrder
    dir_propietario?: SortOrder
    tel_propietario?: SortOrder
  }

  export type PropietariosPrivadosMinOrderByAggregateInput = {
    num_propietario?: SortOrder
    nom_propietario?: SortOrder
    dir_propietario?: SortOrder
    tel_propietario?: SortOrder
  }

  export type PropietariosPrivadosSumOrderByAggregateInput = {
    num_propietario?: SortOrder
  }

  export type PropietariosEmpresarialesCountOrderByAggregateInput = {
    num_propietario_em?: SortOrder
    nom_propietario_em?: SortOrder
    tipo_empresa?: SortOrder
    dir_empresa?: SortOrder
    tel_propietario_em?: SortOrder
    nom_contacto?: SortOrder
  }

  export type PropietariosEmpresarialesAvgOrderByAggregateInput = {
    num_propietario_em?: SortOrder
  }

  export type PropietariosEmpresarialesMaxOrderByAggregateInput = {
    num_propietario_em?: SortOrder
    nom_propietario_em?: SortOrder
    tipo_empresa?: SortOrder
    dir_empresa?: SortOrder
    tel_propietario_em?: SortOrder
    nom_contacto?: SortOrder
  }

  export type PropietariosEmpresarialesMinOrderByAggregateInput = {
    num_propietario_em?: SortOrder
    nom_propietario_em?: SortOrder
    tipo_empresa?: SortOrder
    dir_empresa?: SortOrder
    tel_propietario_em?: SortOrder
    nom_contacto?: SortOrder
  }

  export type PropietariosEmpresarialesSumOrderByAggregateInput = {
    num_propietario_em?: SortOrder
  }

  export type ClientesCountOrderByAggregateInput = {
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    tel_cliente?: SortOrder
    tipo_inmueble?: SortOrder
    importmax_inmueble?: SortOrder
    nom_empleado?: SortOrder
    sucregistro_cielte?: SortOrder
  }

  export type ClientesAvgOrderByAggregateInput = {
    num_cliente?: SortOrder
    importmax_inmueble?: SortOrder
  }

  export type ClientesMaxOrderByAggregateInput = {
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    tel_cliente?: SortOrder
    tipo_inmueble?: SortOrder
    importmax_inmueble?: SortOrder
    nom_empleado?: SortOrder
    sucregistro_cielte?: SortOrder
  }

  export type ClientesMinOrderByAggregateInput = {
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    tel_cliente?: SortOrder
    tipo_inmueble?: SortOrder
    importmax_inmueble?: SortOrder
    nom_empleado?: SortOrder
    sucregistro_cielte?: SortOrder
  }

  export type ClientesSumOrderByAggregateInput = {
    num_cliente?: SortOrder
    importmax_inmueble?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientesRelationFilter = {
    is?: ClientesWhereInput
    isNot?: ClientesWhereInput
  }

  export type InmueblesAlquilerRelationFilter = {
    is?: InmueblesAlquilerWhereInput
    isNot?: InmueblesAlquilerWhereInput
  }

  export type ContratosAlquilerCountOrderByAggregateInput = {
    num_contrato?: SortOrder
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    dir_cliente?: SortOrder
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    import_mensual?: SortOrder
    mod_pago?: SortOrder
    dep_pago?: SortOrder
    dur_contrato?: SortOrder
    fech_inicio?: SortOrder
    fech_fin?: SortOrder
  }

  export type ContratosAlquilerAvgOrderByAggregateInput = {
    num_contrato?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
    import_mensual?: SortOrder
    dur_contrato?: SortOrder
  }

  export type ContratosAlquilerMaxOrderByAggregateInput = {
    num_contrato?: SortOrder
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    dir_cliente?: SortOrder
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    import_mensual?: SortOrder
    mod_pago?: SortOrder
    dep_pago?: SortOrder
    dur_contrato?: SortOrder
    fech_inicio?: SortOrder
    fech_fin?: SortOrder
  }

  export type ContratosAlquilerMinOrderByAggregateInput = {
    num_contrato?: SortOrder
    num_cliente?: SortOrder
    nom_cliente?: SortOrder
    dir_cliente?: SortOrder
    num_inmueble?: SortOrder
    dir_inmueble?: SortOrder
    import_mensual?: SortOrder
    mod_pago?: SortOrder
    dep_pago?: SortOrder
    dur_contrato?: SortOrder
    fech_inicio?: SortOrder
    fech_fin?: SortOrder
  }

  export type ContratosAlquilerSumOrderByAggregateInput = {
    num_contrato?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
    import_mensual?: SortOrder
    dur_contrato?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CitasCountOrderByAggregateInput = {
    num_cita?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
    fech_cita?: SortOrder
  }

  export type CitasAvgOrderByAggregateInput = {
    num_cita?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
  }

  export type CitasMaxOrderByAggregateInput = {
    num_cita?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
    fech_cita?: SortOrder
  }

  export type CitasMinOrderByAggregateInput = {
    num_cita?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
    fech_cita?: SortOrder
  }

  export type CitasSumOrderByAggregateInput = {
    num_cita?: SortOrder
    num_cliente?: SortOrder
    num_inmueble?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContratosAlquilerCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<ContratosAlquilerCreateWithoutInmuebleInput, ContratosAlquilerUncheckedCreateWithoutInmuebleInput> | ContratosAlquilerCreateWithoutInmuebleInput[] | ContratosAlquilerUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutInmuebleInput | ContratosAlquilerCreateOrConnectWithoutInmuebleInput[]
    createMany?: ContratosAlquilerCreateManyInmuebleInputEnvelope
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
  }

  export type CitasCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<CitasCreateWithoutInmuebleInput, CitasUncheckedCreateWithoutInmuebleInput> | CitasCreateWithoutInmuebleInput[] | CitasUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutInmuebleInput | CitasCreateOrConnectWithoutInmuebleInput[]
    createMany?: CitasCreateManyInmuebleInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type PropietariosPrivadosCreateNestedOneWithoutInmueblesAlquilerInput = {
    create?: XOR<PropietariosPrivadosCreateWithoutInmueblesAlquilerInput, PropietariosPrivadosUncheckedCreateWithoutInmueblesAlquilerInput>
    connectOrCreate?: PropietariosPrivadosCreateOrConnectWithoutInmueblesAlquilerInput
    connect?: PropietariosPrivadosWhereUniqueInput
  }

  export type PropietariosEmpresarialesCreateNestedOneWithoutInmueblesAlquilerInput = {
    create?: XOR<PropietariosEmpresarialesCreateWithoutInmueblesAlquilerInput, PropietariosEmpresarialesUncheckedCreateWithoutInmueblesAlquilerInput>
    connectOrCreate?: PropietariosEmpresarialesCreateOrConnectWithoutInmueblesAlquilerInput
    connect?: PropietariosEmpresarialesWhereUniqueInput
  }

  export type ContratosAlquilerUncheckedCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<ContratosAlquilerCreateWithoutInmuebleInput, ContratosAlquilerUncheckedCreateWithoutInmuebleInput> | ContratosAlquilerCreateWithoutInmuebleInput[] | ContratosAlquilerUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutInmuebleInput | ContratosAlquilerCreateOrConnectWithoutInmuebleInput[]
    createMany?: ContratosAlquilerCreateManyInmuebleInputEnvelope
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
  }

  export type CitasUncheckedCreateNestedManyWithoutInmuebleInput = {
    create?: XOR<CitasCreateWithoutInmuebleInput, CitasUncheckedCreateWithoutInmuebleInput> | CitasCreateWithoutInmuebleInput[] | CitasUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutInmuebleInput | CitasCreateOrConnectWithoutInmuebleInput[]
    createMany?: CitasCreateManyInmuebleInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ContratosAlquilerUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<ContratosAlquilerCreateWithoutInmuebleInput, ContratosAlquilerUncheckedCreateWithoutInmuebleInput> | ContratosAlquilerCreateWithoutInmuebleInput[] | ContratosAlquilerUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutInmuebleInput | ContratosAlquilerCreateOrConnectWithoutInmuebleInput[]
    upsert?: ContratosAlquilerUpsertWithWhereUniqueWithoutInmuebleInput | ContratosAlquilerUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: ContratosAlquilerCreateManyInmuebleInputEnvelope
    set?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    disconnect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    delete?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    update?: ContratosAlquilerUpdateWithWhereUniqueWithoutInmuebleInput | ContratosAlquilerUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: ContratosAlquilerUpdateManyWithWhereWithoutInmuebleInput | ContratosAlquilerUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: ContratosAlquilerScalarWhereInput | ContratosAlquilerScalarWhereInput[]
  }

  export type CitasUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<CitasCreateWithoutInmuebleInput, CitasUncheckedCreateWithoutInmuebleInput> | CitasCreateWithoutInmuebleInput[] | CitasUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutInmuebleInput | CitasCreateOrConnectWithoutInmuebleInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutInmuebleInput | CitasUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: CitasCreateManyInmuebleInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutInmuebleInput | CitasUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutInmuebleInput | CitasUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type PropietariosPrivadosUpdateOneWithoutInmueblesAlquilerNestedInput = {
    create?: XOR<PropietariosPrivadosCreateWithoutInmueblesAlquilerInput, PropietariosPrivadosUncheckedCreateWithoutInmueblesAlquilerInput>
    connectOrCreate?: PropietariosPrivadosCreateOrConnectWithoutInmueblesAlquilerInput
    upsert?: PropietariosPrivadosUpsertWithoutInmueblesAlquilerInput
    disconnect?: PropietariosPrivadosWhereInput | boolean
    delete?: PropietariosPrivadosWhereInput | boolean
    connect?: PropietariosPrivadosWhereUniqueInput
    update?: XOR<XOR<PropietariosPrivadosUpdateToOneWithWhereWithoutInmueblesAlquilerInput, PropietariosPrivadosUpdateWithoutInmueblesAlquilerInput>, PropietariosPrivadosUncheckedUpdateWithoutInmueblesAlquilerInput>
  }

  export type PropietariosEmpresarialesUpdateOneWithoutInmueblesAlquilerNestedInput = {
    create?: XOR<PropietariosEmpresarialesCreateWithoutInmueblesAlquilerInput, PropietariosEmpresarialesUncheckedCreateWithoutInmueblesAlquilerInput>
    connectOrCreate?: PropietariosEmpresarialesCreateOrConnectWithoutInmueblesAlquilerInput
    upsert?: PropietariosEmpresarialesUpsertWithoutInmueblesAlquilerInput
    disconnect?: PropietariosEmpresarialesWhereInput | boolean
    delete?: PropietariosEmpresarialesWhereInput | boolean
    connect?: PropietariosEmpresarialesWhereUniqueInput
    update?: XOR<XOR<PropietariosEmpresarialesUpdateToOneWithWhereWithoutInmueblesAlquilerInput, PropietariosEmpresarialesUpdateWithoutInmueblesAlquilerInput>, PropietariosEmpresarialesUncheckedUpdateWithoutInmueblesAlquilerInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContratosAlquilerUncheckedUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<ContratosAlquilerCreateWithoutInmuebleInput, ContratosAlquilerUncheckedCreateWithoutInmuebleInput> | ContratosAlquilerCreateWithoutInmuebleInput[] | ContratosAlquilerUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutInmuebleInput | ContratosAlquilerCreateOrConnectWithoutInmuebleInput[]
    upsert?: ContratosAlquilerUpsertWithWhereUniqueWithoutInmuebleInput | ContratosAlquilerUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: ContratosAlquilerCreateManyInmuebleInputEnvelope
    set?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    disconnect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    delete?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    update?: ContratosAlquilerUpdateWithWhereUniqueWithoutInmuebleInput | ContratosAlquilerUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: ContratosAlquilerUpdateManyWithWhereWithoutInmuebleInput | ContratosAlquilerUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: ContratosAlquilerScalarWhereInput | ContratosAlquilerScalarWhereInput[]
  }

  export type CitasUncheckedUpdateManyWithoutInmuebleNestedInput = {
    create?: XOR<CitasCreateWithoutInmuebleInput, CitasUncheckedCreateWithoutInmuebleInput> | CitasCreateWithoutInmuebleInput[] | CitasUncheckedCreateWithoutInmuebleInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutInmuebleInput | CitasCreateOrConnectWithoutInmuebleInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutInmuebleInput | CitasUpsertWithWhereUniqueWithoutInmuebleInput[]
    createMany?: CitasCreateManyInmuebleInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutInmuebleInput | CitasUpdateWithWhereUniqueWithoutInmuebleInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutInmuebleInput | CitasUpdateManyWithWhereWithoutInmuebleInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type InmueblesAlquilerCreateNestedManyWithoutPropietarioPrivadoInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput> | InmueblesAlquilerCreateWithoutPropietarioPrivadoInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioPrivadoInputEnvelope
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
  }

  export type InmueblesAlquilerUncheckedCreateNestedManyWithoutPropietarioPrivadoInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput> | InmueblesAlquilerCreateWithoutPropietarioPrivadoInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioPrivadoInputEnvelope
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
  }

  export type InmueblesAlquilerUpdateManyWithoutPropietarioPrivadoNestedInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput> | InmueblesAlquilerCreateWithoutPropietarioPrivadoInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput[]
    upsert?: InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioPrivadoInput | InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioPrivadoInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioPrivadoInputEnvelope
    set?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    disconnect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    delete?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    update?: InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioPrivadoInput | InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioPrivadoInput[]
    updateMany?: InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioPrivadoInput | InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioPrivadoInput[]
    deleteMany?: InmueblesAlquilerScalarWhereInput | InmueblesAlquilerScalarWhereInput[]
  }

  export type InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioPrivadoNestedInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput> | InmueblesAlquilerCreateWithoutPropietarioPrivadoInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput[]
    upsert?: InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioPrivadoInput | InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioPrivadoInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioPrivadoInputEnvelope
    set?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    disconnect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    delete?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    update?: InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioPrivadoInput | InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioPrivadoInput[]
    updateMany?: InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioPrivadoInput | InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioPrivadoInput[]
    deleteMany?: InmueblesAlquilerScalarWhereInput | InmueblesAlquilerScalarWhereInput[]
  }

  export type InmueblesAlquilerCreateNestedManyWithoutPropietarioEmpresarialInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput> | InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioEmpresarialInputEnvelope
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
  }

  export type InmueblesAlquilerUncheckedCreateNestedManyWithoutPropietarioEmpresarialInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput> | InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioEmpresarialInputEnvelope
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
  }

  export type InmueblesAlquilerUpdateManyWithoutPropietarioEmpresarialNestedInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput> | InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput[]
    upsert?: InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioEmpresarialInput | InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioEmpresarialInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioEmpresarialInputEnvelope
    set?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    disconnect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    delete?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    update?: InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioEmpresarialInput | InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioEmpresarialInput[]
    updateMany?: InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioEmpresarialInput | InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioEmpresarialInput[]
    deleteMany?: InmueblesAlquilerScalarWhereInput | InmueblesAlquilerScalarWhereInput[]
  }

  export type InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioEmpresarialNestedInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput> | InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput[] | InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput[]
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput | InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput[]
    upsert?: InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioEmpresarialInput | InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioEmpresarialInput[]
    createMany?: InmueblesAlquilerCreateManyPropietarioEmpresarialInputEnvelope
    set?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    disconnect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    delete?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    connect?: InmueblesAlquilerWhereUniqueInput | InmueblesAlquilerWhereUniqueInput[]
    update?: InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioEmpresarialInput | InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioEmpresarialInput[]
    updateMany?: InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioEmpresarialInput | InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioEmpresarialInput[]
    deleteMany?: InmueblesAlquilerScalarWhereInput | InmueblesAlquilerScalarWhereInput[]
  }

  export type ContratosAlquilerCreateNestedManyWithoutClienteInput = {
    create?: XOR<ContratosAlquilerCreateWithoutClienteInput, ContratosAlquilerUncheckedCreateWithoutClienteInput> | ContratosAlquilerCreateWithoutClienteInput[] | ContratosAlquilerUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutClienteInput | ContratosAlquilerCreateOrConnectWithoutClienteInput[]
    createMany?: ContratosAlquilerCreateManyClienteInputEnvelope
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
  }

  export type CitasCreateNestedManyWithoutClienteInput = {
    create?: XOR<CitasCreateWithoutClienteInput, CitasUncheckedCreateWithoutClienteInput> | CitasCreateWithoutClienteInput[] | CitasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutClienteInput | CitasCreateOrConnectWithoutClienteInput[]
    createMany?: CitasCreateManyClienteInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type ContratosAlquilerUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ContratosAlquilerCreateWithoutClienteInput, ContratosAlquilerUncheckedCreateWithoutClienteInput> | ContratosAlquilerCreateWithoutClienteInput[] | ContratosAlquilerUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutClienteInput | ContratosAlquilerCreateOrConnectWithoutClienteInput[]
    createMany?: ContratosAlquilerCreateManyClienteInputEnvelope
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
  }

  export type CitasUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CitasCreateWithoutClienteInput, CitasUncheckedCreateWithoutClienteInput> | CitasCreateWithoutClienteInput[] | CitasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutClienteInput | CitasCreateOrConnectWithoutClienteInput[]
    createMany?: CitasCreateManyClienteInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type ContratosAlquilerUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ContratosAlquilerCreateWithoutClienteInput, ContratosAlquilerUncheckedCreateWithoutClienteInput> | ContratosAlquilerCreateWithoutClienteInput[] | ContratosAlquilerUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutClienteInput | ContratosAlquilerCreateOrConnectWithoutClienteInput[]
    upsert?: ContratosAlquilerUpsertWithWhereUniqueWithoutClienteInput | ContratosAlquilerUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ContratosAlquilerCreateManyClienteInputEnvelope
    set?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    disconnect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    delete?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    update?: ContratosAlquilerUpdateWithWhereUniqueWithoutClienteInput | ContratosAlquilerUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ContratosAlquilerUpdateManyWithWhereWithoutClienteInput | ContratosAlquilerUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ContratosAlquilerScalarWhereInput | ContratosAlquilerScalarWhereInput[]
  }

  export type CitasUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CitasCreateWithoutClienteInput, CitasUncheckedCreateWithoutClienteInput> | CitasCreateWithoutClienteInput[] | CitasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutClienteInput | CitasCreateOrConnectWithoutClienteInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutClienteInput | CitasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CitasCreateManyClienteInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutClienteInput | CitasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutClienteInput | CitasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type ContratosAlquilerUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ContratosAlquilerCreateWithoutClienteInput, ContratosAlquilerUncheckedCreateWithoutClienteInput> | ContratosAlquilerCreateWithoutClienteInput[] | ContratosAlquilerUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ContratosAlquilerCreateOrConnectWithoutClienteInput | ContratosAlquilerCreateOrConnectWithoutClienteInput[]
    upsert?: ContratosAlquilerUpsertWithWhereUniqueWithoutClienteInput | ContratosAlquilerUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ContratosAlquilerCreateManyClienteInputEnvelope
    set?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    disconnect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    delete?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    connect?: ContratosAlquilerWhereUniqueInput | ContratosAlquilerWhereUniqueInput[]
    update?: ContratosAlquilerUpdateWithWhereUniqueWithoutClienteInput | ContratosAlquilerUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ContratosAlquilerUpdateManyWithWhereWithoutClienteInput | ContratosAlquilerUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ContratosAlquilerScalarWhereInput | ContratosAlquilerScalarWhereInput[]
  }

  export type CitasUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CitasCreateWithoutClienteInput, CitasUncheckedCreateWithoutClienteInput> | CitasCreateWithoutClienteInput[] | CitasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutClienteInput | CitasCreateOrConnectWithoutClienteInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutClienteInput | CitasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CitasCreateManyClienteInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutClienteInput | CitasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutClienteInput | CitasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type ClientesCreateNestedOneWithoutContratosAlquilerInput = {
    create?: XOR<ClientesCreateWithoutContratosAlquilerInput, ClientesUncheckedCreateWithoutContratosAlquilerInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutContratosAlquilerInput
    connect?: ClientesWhereUniqueInput
  }

  export type InmueblesAlquilerCreateNestedOneWithoutContratosAlquilerInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutContratosAlquilerInput, InmueblesAlquilerUncheckedCreateWithoutContratosAlquilerInput>
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutContratosAlquilerInput
    connect?: InmueblesAlquilerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientesUpdateOneRequiredWithoutContratosAlquilerNestedInput = {
    create?: XOR<ClientesCreateWithoutContratosAlquilerInput, ClientesUncheckedCreateWithoutContratosAlquilerInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutContratosAlquilerInput
    upsert?: ClientesUpsertWithoutContratosAlquilerInput
    connect?: ClientesWhereUniqueInput
    update?: XOR<XOR<ClientesUpdateToOneWithWhereWithoutContratosAlquilerInput, ClientesUpdateWithoutContratosAlquilerInput>, ClientesUncheckedUpdateWithoutContratosAlquilerInput>
  }

  export type InmueblesAlquilerUpdateOneRequiredWithoutContratosAlquilerNestedInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutContratosAlquilerInput, InmueblesAlquilerUncheckedCreateWithoutContratosAlquilerInput>
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutContratosAlquilerInput
    upsert?: InmueblesAlquilerUpsertWithoutContratosAlquilerInput
    connect?: InmueblesAlquilerWhereUniqueInput
    update?: XOR<XOR<InmueblesAlquilerUpdateToOneWithWhereWithoutContratosAlquilerInput, InmueblesAlquilerUpdateWithoutContratosAlquilerInput>, InmueblesAlquilerUncheckedUpdateWithoutContratosAlquilerInput>
  }

  export type ClientesCreateNestedOneWithoutCitasInput = {
    create?: XOR<ClientesCreateWithoutCitasInput, ClientesUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutCitasInput
    connect?: ClientesWhereUniqueInput
  }

  export type InmueblesAlquilerCreateNestedOneWithoutCitasInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutCitasInput, InmueblesAlquilerUncheckedCreateWithoutCitasInput>
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutCitasInput
    connect?: InmueblesAlquilerWhereUniqueInput
  }

  export type ClientesUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<ClientesCreateWithoutCitasInput, ClientesUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutCitasInput
    upsert?: ClientesUpsertWithoutCitasInput
    connect?: ClientesWhereUniqueInput
    update?: XOR<XOR<ClientesUpdateToOneWithWhereWithoutCitasInput, ClientesUpdateWithoutCitasInput>, ClientesUncheckedUpdateWithoutCitasInput>
  }

  export type InmueblesAlquilerUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<InmueblesAlquilerCreateWithoutCitasInput, InmueblesAlquilerUncheckedCreateWithoutCitasInput>
    connectOrCreate?: InmueblesAlquilerCreateOrConnectWithoutCitasInput
    upsert?: InmueblesAlquilerUpsertWithoutCitasInput
    connect?: InmueblesAlquilerWhereUniqueInput
    update?: XOR<XOR<InmueblesAlquilerUpdateToOneWithWhereWithoutCitasInput, InmueblesAlquilerUpdateWithoutCitasInput>, InmueblesAlquilerUncheckedUpdateWithoutCitasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ContratosAlquilerCreateWithoutInmuebleInput = {
    nom_cliente: string
    dir_cliente: string
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
    cliente: ClientesCreateNestedOneWithoutContratosAlquilerInput
  }

  export type ContratosAlquilerUncheckedCreateWithoutInmuebleInput = {
    num_contrato?: number
    num_cliente: number
    nom_cliente: string
    dir_cliente: string
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
  }

  export type ContratosAlquilerCreateOrConnectWithoutInmuebleInput = {
    where: ContratosAlquilerWhereUniqueInput
    create: XOR<ContratosAlquilerCreateWithoutInmuebleInput, ContratosAlquilerUncheckedCreateWithoutInmuebleInput>
  }

  export type ContratosAlquilerCreateManyInmuebleInputEnvelope = {
    data: ContratosAlquilerCreateManyInmuebleInput | ContratosAlquilerCreateManyInmuebleInput[]
    skipDuplicates?: boolean
  }

  export type CitasCreateWithoutInmuebleInput = {
    fech_cita: Date | string
    cliente: ClientesCreateNestedOneWithoutCitasInput
  }

  export type CitasUncheckedCreateWithoutInmuebleInput = {
    num_cita?: number
    num_cliente: number
    fech_cita: Date | string
  }

  export type CitasCreateOrConnectWithoutInmuebleInput = {
    where: CitasWhereUniqueInput
    create: XOR<CitasCreateWithoutInmuebleInput, CitasUncheckedCreateWithoutInmuebleInput>
  }

  export type CitasCreateManyInmuebleInputEnvelope = {
    data: CitasCreateManyInmuebleInput | CitasCreateManyInmuebleInput[]
    skipDuplicates?: boolean
  }

  export type PropietariosPrivadosCreateWithoutInmueblesAlquilerInput = {
    nom_propietario: string
    dir_propietario: string
    tel_propietario: string
  }

  export type PropietariosPrivadosUncheckedCreateWithoutInmueblesAlquilerInput = {
    num_propietario?: number
    nom_propietario: string
    dir_propietario: string
    tel_propietario: string
  }

  export type PropietariosPrivadosCreateOrConnectWithoutInmueblesAlquilerInput = {
    where: PropietariosPrivadosWhereUniqueInput
    create: XOR<PropietariosPrivadosCreateWithoutInmueblesAlquilerInput, PropietariosPrivadosUncheckedCreateWithoutInmueblesAlquilerInput>
  }

  export type PropietariosEmpresarialesCreateWithoutInmueblesAlquilerInput = {
    nom_propietario_em: string
    tipo_empresa: string
    dir_empresa: string
    tel_propietario_em: string
    nom_contacto: string
  }

  export type PropietariosEmpresarialesUncheckedCreateWithoutInmueblesAlquilerInput = {
    num_propietario_em?: number
    nom_propietario_em: string
    tipo_empresa: string
    dir_empresa: string
    tel_propietario_em: string
    nom_contacto: string
  }

  export type PropietariosEmpresarialesCreateOrConnectWithoutInmueblesAlquilerInput = {
    where: PropietariosEmpresarialesWhereUniqueInput
    create: XOR<PropietariosEmpresarialesCreateWithoutInmueblesAlquilerInput, PropietariosEmpresarialesUncheckedCreateWithoutInmueblesAlquilerInput>
  }

  export type ContratosAlquilerUpsertWithWhereUniqueWithoutInmuebleInput = {
    where: ContratosAlquilerWhereUniqueInput
    update: XOR<ContratosAlquilerUpdateWithoutInmuebleInput, ContratosAlquilerUncheckedUpdateWithoutInmuebleInput>
    create: XOR<ContratosAlquilerCreateWithoutInmuebleInput, ContratosAlquilerUncheckedCreateWithoutInmuebleInput>
  }

  export type ContratosAlquilerUpdateWithWhereUniqueWithoutInmuebleInput = {
    where: ContratosAlquilerWhereUniqueInput
    data: XOR<ContratosAlquilerUpdateWithoutInmuebleInput, ContratosAlquilerUncheckedUpdateWithoutInmuebleInput>
  }

  export type ContratosAlquilerUpdateManyWithWhereWithoutInmuebleInput = {
    where: ContratosAlquilerScalarWhereInput
    data: XOR<ContratosAlquilerUpdateManyMutationInput, ContratosAlquilerUncheckedUpdateManyWithoutInmuebleInput>
  }

  export type ContratosAlquilerScalarWhereInput = {
    AND?: ContratosAlquilerScalarWhereInput | ContratosAlquilerScalarWhereInput[]
    OR?: ContratosAlquilerScalarWhereInput[]
    NOT?: ContratosAlquilerScalarWhereInput | ContratosAlquilerScalarWhereInput[]
    num_contrato?: IntFilter<"ContratosAlquiler"> | number
    num_cliente?: IntFilter<"ContratosAlquiler"> | number
    nom_cliente?: StringFilter<"ContratosAlquiler"> | string
    dir_cliente?: StringFilter<"ContratosAlquiler"> | string
    num_inmueble?: IntFilter<"ContratosAlquiler"> | number
    dir_inmueble?: StringFilter<"ContratosAlquiler"> | string
    import_mensual?: BigIntFilter<"ContratosAlquiler"> | bigint | number
    mod_pago?: StringFilter<"ContratosAlquiler"> | string
    dep_pago?: StringFilter<"ContratosAlquiler"> | string
    dur_contrato?: BigIntFilter<"ContratosAlquiler"> | bigint | number
    fech_inicio?: DateTimeFilter<"ContratosAlquiler"> | Date | string
    fech_fin?: DateTimeFilter<"ContratosAlquiler"> | Date | string
  }

  export type CitasUpsertWithWhereUniqueWithoutInmuebleInput = {
    where: CitasWhereUniqueInput
    update: XOR<CitasUpdateWithoutInmuebleInput, CitasUncheckedUpdateWithoutInmuebleInput>
    create: XOR<CitasCreateWithoutInmuebleInput, CitasUncheckedCreateWithoutInmuebleInput>
  }

  export type CitasUpdateWithWhereUniqueWithoutInmuebleInput = {
    where: CitasWhereUniqueInput
    data: XOR<CitasUpdateWithoutInmuebleInput, CitasUncheckedUpdateWithoutInmuebleInput>
  }

  export type CitasUpdateManyWithWhereWithoutInmuebleInput = {
    where: CitasScalarWhereInput
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyWithoutInmuebleInput>
  }

  export type CitasScalarWhereInput = {
    AND?: CitasScalarWhereInput | CitasScalarWhereInput[]
    OR?: CitasScalarWhereInput[]
    NOT?: CitasScalarWhereInput | CitasScalarWhereInput[]
    num_cita?: IntFilter<"Citas"> | number
    num_cliente?: IntFilter<"Citas"> | number
    num_inmueble?: IntFilter<"Citas"> | number
    fech_cita?: DateTimeFilter<"Citas"> | Date | string
  }

  export type PropietariosPrivadosUpsertWithoutInmueblesAlquilerInput = {
    update: XOR<PropietariosPrivadosUpdateWithoutInmueblesAlquilerInput, PropietariosPrivadosUncheckedUpdateWithoutInmueblesAlquilerInput>
    create: XOR<PropietariosPrivadosCreateWithoutInmueblesAlquilerInput, PropietariosPrivadosUncheckedCreateWithoutInmueblesAlquilerInput>
    where?: PropietariosPrivadosWhereInput
  }

  export type PropietariosPrivadosUpdateToOneWithWhereWithoutInmueblesAlquilerInput = {
    where?: PropietariosPrivadosWhereInput
    data: XOR<PropietariosPrivadosUpdateWithoutInmueblesAlquilerInput, PropietariosPrivadosUncheckedUpdateWithoutInmueblesAlquilerInput>
  }

  export type PropietariosPrivadosUpdateWithoutInmueblesAlquilerInput = {
    nom_propietario?: StringFieldUpdateOperationsInput | string
    dir_propietario?: StringFieldUpdateOperationsInput | string
    tel_propietario?: StringFieldUpdateOperationsInput | string
  }

  export type PropietariosPrivadosUncheckedUpdateWithoutInmueblesAlquilerInput = {
    num_propietario?: IntFieldUpdateOperationsInput | number
    nom_propietario?: StringFieldUpdateOperationsInput | string
    dir_propietario?: StringFieldUpdateOperationsInput | string
    tel_propietario?: StringFieldUpdateOperationsInput | string
  }

  export type PropietariosEmpresarialesUpsertWithoutInmueblesAlquilerInput = {
    update: XOR<PropietariosEmpresarialesUpdateWithoutInmueblesAlquilerInput, PropietariosEmpresarialesUncheckedUpdateWithoutInmueblesAlquilerInput>
    create: XOR<PropietariosEmpresarialesCreateWithoutInmueblesAlquilerInput, PropietariosEmpresarialesUncheckedCreateWithoutInmueblesAlquilerInput>
    where?: PropietariosEmpresarialesWhereInput
  }

  export type PropietariosEmpresarialesUpdateToOneWithWhereWithoutInmueblesAlquilerInput = {
    where?: PropietariosEmpresarialesWhereInput
    data: XOR<PropietariosEmpresarialesUpdateWithoutInmueblesAlquilerInput, PropietariosEmpresarialesUncheckedUpdateWithoutInmueblesAlquilerInput>
  }

  export type PropietariosEmpresarialesUpdateWithoutInmueblesAlquilerInput = {
    nom_propietario_em?: StringFieldUpdateOperationsInput | string
    tipo_empresa?: StringFieldUpdateOperationsInput | string
    dir_empresa?: StringFieldUpdateOperationsInput | string
    tel_propietario_em?: StringFieldUpdateOperationsInput | string
    nom_contacto?: StringFieldUpdateOperationsInput | string
  }

  export type PropietariosEmpresarialesUncheckedUpdateWithoutInmueblesAlquilerInput = {
    num_propietario_em?: IntFieldUpdateOperationsInput | number
    nom_propietario_em?: StringFieldUpdateOperationsInput | string
    tipo_empresa?: StringFieldUpdateOperationsInput | string
    dir_empresa?: StringFieldUpdateOperationsInput | string
    tel_propietario_em?: StringFieldUpdateOperationsInput | string
    nom_contacto?: StringFieldUpdateOperationsInput | string
  }

  export type InmueblesAlquilerCreateWithoutPropietarioPrivadoInput = {
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    ContratosAlquiler?: ContratosAlquilerCreateNestedManyWithoutInmuebleInput
    Citas?: CitasCreateNestedManyWithoutInmuebleInput
    propietarioEmpresarial?: PropietariosEmpresarialesCreateNestedOneWithoutInmueblesAlquilerInput
  }

  export type InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario_em?: number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedCreateNestedManyWithoutInmuebleInput
    Citas?: CitasUncheckedCreateNestedManyWithoutInmuebleInput
  }

  export type InmueblesAlquilerCreateOrConnectWithoutPropietarioPrivadoInput = {
    where: InmueblesAlquilerWhereUniqueInput
    create: XOR<InmueblesAlquilerCreateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput>
  }

  export type InmueblesAlquilerCreateManyPropietarioPrivadoInputEnvelope = {
    data: InmueblesAlquilerCreateManyPropietarioPrivadoInput | InmueblesAlquilerCreateManyPropietarioPrivadoInput[]
    skipDuplicates?: boolean
  }

  export type InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioPrivadoInput = {
    where: InmueblesAlquilerWhereUniqueInput
    update: XOR<InmueblesAlquilerUpdateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedUpdateWithoutPropietarioPrivadoInput>
    create: XOR<InmueblesAlquilerCreateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioPrivadoInput>
  }

  export type InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioPrivadoInput = {
    where: InmueblesAlquilerWhereUniqueInput
    data: XOR<InmueblesAlquilerUpdateWithoutPropietarioPrivadoInput, InmueblesAlquilerUncheckedUpdateWithoutPropietarioPrivadoInput>
  }

  export type InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioPrivadoInput = {
    where: InmueblesAlquilerScalarWhereInput
    data: XOR<InmueblesAlquilerUpdateManyMutationInput, InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioPrivadoInput>
  }

  export type InmueblesAlquilerScalarWhereInput = {
    AND?: InmueblesAlquilerScalarWhereInput | InmueblesAlquilerScalarWhereInput[]
    OR?: InmueblesAlquilerScalarWhereInput[]
    NOT?: InmueblesAlquilerScalarWhereInput | InmueblesAlquilerScalarWhereInput[]
    num_inmueble?: IntFilter<"InmueblesAlquiler"> | number
    dir_inmueble?: StringFilter<"InmueblesAlquiler"> | string
    tipo_inmueble?: StringFilter<"InmueblesAlquiler"> | string
    num_habitaciones?: IntFilter<"InmueblesAlquiler"> | number
    import_mensual?: BigIntFilter<"InmueblesAlquiler"> | bigint | number
    num_propietario?: IntNullableFilter<"InmueblesAlquiler"> | number | null
    num_propietario_em?: IntNullableFilter<"InmueblesAlquiler"> | number | null
  }

  export type InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput = {
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    ContratosAlquiler?: ContratosAlquilerCreateNestedManyWithoutInmuebleInput
    Citas?: CitasCreateNestedManyWithoutInmuebleInput
    propietarioPrivado?: PropietariosPrivadosCreateNestedOneWithoutInmueblesAlquilerInput
  }

  export type InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario?: number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedCreateNestedManyWithoutInmuebleInput
    Citas?: CitasUncheckedCreateNestedManyWithoutInmuebleInput
  }

  export type InmueblesAlquilerCreateOrConnectWithoutPropietarioEmpresarialInput = {
    where: InmueblesAlquilerWhereUniqueInput
    create: XOR<InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput>
  }

  export type InmueblesAlquilerCreateManyPropietarioEmpresarialInputEnvelope = {
    data: InmueblesAlquilerCreateManyPropietarioEmpresarialInput | InmueblesAlquilerCreateManyPropietarioEmpresarialInput[]
    skipDuplicates?: boolean
  }

  export type InmueblesAlquilerUpsertWithWhereUniqueWithoutPropietarioEmpresarialInput = {
    where: InmueblesAlquilerWhereUniqueInput
    update: XOR<InmueblesAlquilerUpdateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedUpdateWithoutPropietarioEmpresarialInput>
    create: XOR<InmueblesAlquilerCreateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedCreateWithoutPropietarioEmpresarialInput>
  }

  export type InmueblesAlquilerUpdateWithWhereUniqueWithoutPropietarioEmpresarialInput = {
    where: InmueblesAlquilerWhereUniqueInput
    data: XOR<InmueblesAlquilerUpdateWithoutPropietarioEmpresarialInput, InmueblesAlquilerUncheckedUpdateWithoutPropietarioEmpresarialInput>
  }

  export type InmueblesAlquilerUpdateManyWithWhereWithoutPropietarioEmpresarialInput = {
    where: InmueblesAlquilerScalarWhereInput
    data: XOR<InmueblesAlquilerUpdateManyMutationInput, InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioEmpresarialInput>
  }

  export type ContratosAlquilerCreateWithoutClienteInput = {
    nom_cliente: string
    dir_cliente: string
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
    inmueble: InmueblesAlquilerCreateNestedOneWithoutContratosAlquilerInput
  }

  export type ContratosAlquilerUncheckedCreateWithoutClienteInput = {
    num_contrato?: number
    nom_cliente: string
    dir_cliente: string
    num_inmueble: number
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
  }

  export type ContratosAlquilerCreateOrConnectWithoutClienteInput = {
    where: ContratosAlquilerWhereUniqueInput
    create: XOR<ContratosAlquilerCreateWithoutClienteInput, ContratosAlquilerUncheckedCreateWithoutClienteInput>
  }

  export type ContratosAlquilerCreateManyClienteInputEnvelope = {
    data: ContratosAlquilerCreateManyClienteInput | ContratosAlquilerCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type CitasCreateWithoutClienteInput = {
    fech_cita: Date | string
    inmueble: InmueblesAlquilerCreateNestedOneWithoutCitasInput
  }

  export type CitasUncheckedCreateWithoutClienteInput = {
    num_cita?: number
    num_inmueble: number
    fech_cita: Date | string
  }

  export type CitasCreateOrConnectWithoutClienteInput = {
    where: CitasWhereUniqueInput
    create: XOR<CitasCreateWithoutClienteInput, CitasUncheckedCreateWithoutClienteInput>
  }

  export type CitasCreateManyClienteInputEnvelope = {
    data: CitasCreateManyClienteInput | CitasCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ContratosAlquilerUpsertWithWhereUniqueWithoutClienteInput = {
    where: ContratosAlquilerWhereUniqueInput
    update: XOR<ContratosAlquilerUpdateWithoutClienteInput, ContratosAlquilerUncheckedUpdateWithoutClienteInput>
    create: XOR<ContratosAlquilerCreateWithoutClienteInput, ContratosAlquilerUncheckedCreateWithoutClienteInput>
  }

  export type ContratosAlquilerUpdateWithWhereUniqueWithoutClienteInput = {
    where: ContratosAlquilerWhereUniqueInput
    data: XOR<ContratosAlquilerUpdateWithoutClienteInput, ContratosAlquilerUncheckedUpdateWithoutClienteInput>
  }

  export type ContratosAlquilerUpdateManyWithWhereWithoutClienteInput = {
    where: ContratosAlquilerScalarWhereInput
    data: XOR<ContratosAlquilerUpdateManyMutationInput, ContratosAlquilerUncheckedUpdateManyWithoutClienteInput>
  }

  export type CitasUpsertWithWhereUniqueWithoutClienteInput = {
    where: CitasWhereUniqueInput
    update: XOR<CitasUpdateWithoutClienteInput, CitasUncheckedUpdateWithoutClienteInput>
    create: XOR<CitasCreateWithoutClienteInput, CitasUncheckedCreateWithoutClienteInput>
  }

  export type CitasUpdateWithWhereUniqueWithoutClienteInput = {
    where: CitasWhereUniqueInput
    data: XOR<CitasUpdateWithoutClienteInput, CitasUncheckedUpdateWithoutClienteInput>
  }

  export type CitasUpdateManyWithWhereWithoutClienteInput = {
    where: CitasScalarWhereInput
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClientesCreateWithoutContratosAlquilerInput = {
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
    Citas?: CitasCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateWithoutContratosAlquilerInput = {
    num_cliente?: number
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
    Citas?: CitasUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesCreateOrConnectWithoutContratosAlquilerInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutContratosAlquilerInput, ClientesUncheckedCreateWithoutContratosAlquilerInput>
  }

  export type InmueblesAlquilerCreateWithoutContratosAlquilerInput = {
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    Citas?: CitasCreateNestedManyWithoutInmuebleInput
    propietarioPrivado?: PropietariosPrivadosCreateNestedOneWithoutInmueblesAlquilerInput
    propietarioEmpresarial?: PropietariosEmpresarialesCreateNestedOneWithoutInmueblesAlquilerInput
  }

  export type InmueblesAlquilerUncheckedCreateWithoutContratosAlquilerInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario?: number | null
    num_propietario_em?: number | null
    Citas?: CitasUncheckedCreateNestedManyWithoutInmuebleInput
  }

  export type InmueblesAlquilerCreateOrConnectWithoutContratosAlquilerInput = {
    where: InmueblesAlquilerWhereUniqueInput
    create: XOR<InmueblesAlquilerCreateWithoutContratosAlquilerInput, InmueblesAlquilerUncheckedCreateWithoutContratosAlquilerInput>
  }

  export type ClientesUpsertWithoutContratosAlquilerInput = {
    update: XOR<ClientesUpdateWithoutContratosAlquilerInput, ClientesUncheckedUpdateWithoutContratosAlquilerInput>
    create: XOR<ClientesCreateWithoutContratosAlquilerInput, ClientesUncheckedCreateWithoutContratosAlquilerInput>
    where?: ClientesWhereInput
  }

  export type ClientesUpdateToOneWithWhereWithoutContratosAlquilerInput = {
    where?: ClientesWhereInput
    data: XOR<ClientesUpdateWithoutContratosAlquilerInput, ClientesUncheckedUpdateWithoutContratosAlquilerInput>
  }

  export type ClientesUpdateWithoutContratosAlquilerInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
    Citas?: CitasUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateWithoutContratosAlquilerInput = {
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
    Citas?: CitasUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type InmueblesAlquilerUpsertWithoutContratosAlquilerInput = {
    update: XOR<InmueblesAlquilerUpdateWithoutContratosAlquilerInput, InmueblesAlquilerUncheckedUpdateWithoutContratosAlquilerInput>
    create: XOR<InmueblesAlquilerCreateWithoutContratosAlquilerInput, InmueblesAlquilerUncheckedCreateWithoutContratosAlquilerInput>
    where?: InmueblesAlquilerWhereInput
  }

  export type InmueblesAlquilerUpdateToOneWithWhereWithoutContratosAlquilerInput = {
    where?: InmueblesAlquilerWhereInput
    data: XOR<InmueblesAlquilerUpdateWithoutContratosAlquilerInput, InmueblesAlquilerUncheckedUpdateWithoutContratosAlquilerInput>
  }

  export type InmueblesAlquilerUpdateWithoutContratosAlquilerInput = {
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    Citas?: CitasUpdateManyWithoutInmuebleNestedInput
    propietarioPrivado?: PropietariosPrivadosUpdateOneWithoutInmueblesAlquilerNestedInput
    propietarioEmpresarial?: PropietariosEmpresarialesUpdateOneWithoutInmueblesAlquilerNestedInput
  }

  export type InmueblesAlquilerUncheckedUpdateWithoutContratosAlquilerInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario?: NullableIntFieldUpdateOperationsInput | number | null
    num_propietario_em?: NullableIntFieldUpdateOperationsInput | number | null
    Citas?: CitasUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type ClientesCreateWithoutCitasInput = {
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
    ContratosAlquiler?: ContratosAlquilerCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateWithoutCitasInput = {
    num_cliente?: number
    nom_cliente: string
    tel_cliente: string
    tipo_inmueble: string
    importmax_inmueble: number
    nom_empleado: string
    sucregistro_cielte: string
    ContratosAlquiler?: ContratosAlquilerUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesCreateOrConnectWithoutCitasInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutCitasInput, ClientesUncheckedCreateWithoutCitasInput>
  }

  export type InmueblesAlquilerCreateWithoutCitasInput = {
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    ContratosAlquiler?: ContratosAlquilerCreateNestedManyWithoutInmuebleInput
    propietarioPrivado?: PropietariosPrivadosCreateNestedOneWithoutInmueblesAlquilerInput
    propietarioEmpresarial?: PropietariosEmpresarialesCreateNestedOneWithoutInmueblesAlquilerInput
  }

  export type InmueblesAlquilerUncheckedCreateWithoutCitasInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario?: number | null
    num_propietario_em?: number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedCreateNestedManyWithoutInmuebleInput
  }

  export type InmueblesAlquilerCreateOrConnectWithoutCitasInput = {
    where: InmueblesAlquilerWhereUniqueInput
    create: XOR<InmueblesAlquilerCreateWithoutCitasInput, InmueblesAlquilerUncheckedCreateWithoutCitasInput>
  }

  export type ClientesUpsertWithoutCitasInput = {
    update: XOR<ClientesUpdateWithoutCitasInput, ClientesUncheckedUpdateWithoutCitasInput>
    create: XOR<ClientesCreateWithoutCitasInput, ClientesUncheckedCreateWithoutCitasInput>
    where?: ClientesWhereInput
  }

  export type ClientesUpdateToOneWithWhereWithoutCitasInput = {
    where?: ClientesWhereInput
    data: XOR<ClientesUpdateWithoutCitasInput, ClientesUncheckedUpdateWithoutCitasInput>
  }

  export type ClientesUpdateWithoutCitasInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
    ContratosAlquiler?: ContratosAlquilerUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateWithoutCitasInput = {
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    tel_cliente?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    importmax_inmueble?: IntFieldUpdateOperationsInput | number
    nom_empleado?: StringFieldUpdateOperationsInput | string
    sucregistro_cielte?: StringFieldUpdateOperationsInput | string
    ContratosAlquiler?: ContratosAlquilerUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type InmueblesAlquilerUpsertWithoutCitasInput = {
    update: XOR<InmueblesAlquilerUpdateWithoutCitasInput, InmueblesAlquilerUncheckedUpdateWithoutCitasInput>
    create: XOR<InmueblesAlquilerCreateWithoutCitasInput, InmueblesAlquilerUncheckedCreateWithoutCitasInput>
    where?: InmueblesAlquilerWhereInput
  }

  export type InmueblesAlquilerUpdateToOneWithWhereWithoutCitasInput = {
    where?: InmueblesAlquilerWhereInput
    data: XOR<InmueblesAlquilerUpdateWithoutCitasInput, InmueblesAlquilerUncheckedUpdateWithoutCitasInput>
  }

  export type InmueblesAlquilerUpdateWithoutCitasInput = {
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    ContratosAlquiler?: ContratosAlquilerUpdateManyWithoutInmuebleNestedInput
    propietarioPrivado?: PropietariosPrivadosUpdateOneWithoutInmueblesAlquilerNestedInput
    propietarioEmpresarial?: PropietariosEmpresarialesUpdateOneWithoutInmueblesAlquilerNestedInput
  }

  export type InmueblesAlquilerUncheckedUpdateWithoutCitasInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario?: NullableIntFieldUpdateOperationsInput | number | null
    num_propietario_em?: NullableIntFieldUpdateOperationsInput | number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type ContratosAlquilerCreateManyInmuebleInput = {
    num_contrato?: number
    num_cliente: number
    nom_cliente: string
    dir_cliente: string
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
  }

  export type CitasCreateManyInmuebleInput = {
    num_cita?: number
    num_cliente: number
    fech_cita: Date | string
  }

  export type ContratosAlquilerUpdateWithoutInmuebleInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutContratosAlquilerNestedInput
  }

  export type ContratosAlquilerUncheckedUpdateWithoutInmuebleInput = {
    num_contrato?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratosAlquilerUncheckedUpdateManyWithoutInmuebleInput = {
    num_contrato?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasUpdateWithoutInmuebleInput = {
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateWithoutInmuebleInput = {
    num_cita?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasUncheckedUpdateManyWithoutInmuebleInput = {
    num_cita?: IntFieldUpdateOperationsInput | number
    num_cliente?: IntFieldUpdateOperationsInput | number
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InmueblesAlquilerCreateManyPropietarioPrivadoInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario_em?: number | null
  }

  export type InmueblesAlquilerUpdateWithoutPropietarioPrivadoInput = {
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    ContratosAlquiler?: ContratosAlquilerUpdateManyWithoutInmuebleNestedInput
    Citas?: CitasUpdateManyWithoutInmuebleNestedInput
    propietarioEmpresarial?: PropietariosEmpresarialesUpdateOneWithoutInmueblesAlquilerNestedInput
  }

  export type InmueblesAlquilerUncheckedUpdateWithoutPropietarioPrivadoInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario_em?: NullableIntFieldUpdateOperationsInput | number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedUpdateManyWithoutInmuebleNestedInput
    Citas?: CitasUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioPrivadoInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario_em?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InmueblesAlquilerCreateManyPropietarioEmpresarialInput = {
    num_inmueble?: number
    dir_inmueble: string
    tipo_inmueble: string
    num_habitaciones: number
    import_mensual: bigint | number
    num_propietario?: number | null
  }

  export type InmueblesAlquilerUpdateWithoutPropietarioEmpresarialInput = {
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    ContratosAlquiler?: ContratosAlquilerUpdateManyWithoutInmuebleNestedInput
    Citas?: CitasUpdateManyWithoutInmuebleNestedInput
    propietarioPrivado?: PropietariosPrivadosUpdateOneWithoutInmueblesAlquilerNestedInput
  }

  export type InmueblesAlquilerUncheckedUpdateWithoutPropietarioEmpresarialInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario?: NullableIntFieldUpdateOperationsInput | number | null
    ContratosAlquiler?: ContratosAlquilerUncheckedUpdateManyWithoutInmuebleNestedInput
    Citas?: CitasUncheckedUpdateManyWithoutInmuebleNestedInput
  }

  export type InmueblesAlquilerUncheckedUpdateManyWithoutPropietarioEmpresarialInput = {
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    tipo_inmueble?: StringFieldUpdateOperationsInput | string
    num_habitaciones?: IntFieldUpdateOperationsInput | number
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    num_propietario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContratosAlquilerCreateManyClienteInput = {
    num_contrato?: number
    nom_cliente: string
    dir_cliente: string
    num_inmueble: number
    dir_inmueble: string
    import_mensual: bigint | number
    mod_pago: string
    dep_pago: string
    dur_contrato: bigint | number
    fech_inicio: Date | string
    fech_fin: Date | string
  }

  export type CitasCreateManyClienteInput = {
    num_cita?: number
    num_inmueble: number
    fech_cita: Date | string
  }

  export type ContratosAlquilerUpdateWithoutClienteInput = {
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmueblesAlquilerUpdateOneRequiredWithoutContratosAlquilerNestedInput
  }

  export type ContratosAlquilerUncheckedUpdateWithoutClienteInput = {
    num_contrato?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratosAlquilerUncheckedUpdateManyWithoutClienteInput = {
    num_contrato?: IntFieldUpdateOperationsInput | number
    nom_cliente?: StringFieldUpdateOperationsInput | string
    dir_cliente?: StringFieldUpdateOperationsInput | string
    num_inmueble?: IntFieldUpdateOperationsInput | number
    dir_inmueble?: StringFieldUpdateOperationsInput | string
    import_mensual?: BigIntFieldUpdateOperationsInput | bigint | number
    mod_pago?: StringFieldUpdateOperationsInput | string
    dep_pago?: StringFieldUpdateOperationsInput | string
    dur_contrato?: BigIntFieldUpdateOperationsInput | bigint | number
    fech_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fech_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasUpdateWithoutClienteInput = {
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    inmueble?: InmueblesAlquilerUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateWithoutClienteInput = {
    num_cita?: IntFieldUpdateOperationsInput | number
    num_inmueble?: IntFieldUpdateOperationsInput | number
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasUncheckedUpdateManyWithoutClienteInput = {
    num_cita?: IntFieldUpdateOperationsInput | number
    num_inmueble?: IntFieldUpdateOperationsInput | number
    fech_cita?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use InmueblesAlquilerCountOutputTypeDefaultArgs instead
     */
    export type InmueblesAlquilerCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = InmueblesAlquilerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropietariosPrivadosCountOutputTypeDefaultArgs instead
     */
    export type PropietariosPrivadosCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PropietariosPrivadosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropietariosEmpresarialesCountOutputTypeDefaultArgs instead
     */
    export type PropietariosEmpresarialesCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PropietariosEmpresarialesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientesCountOutputTypeDefaultArgs instead
     */
    export type ClientesCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ClientesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DinosaurDefaultArgs instead
     */
    export type DinosaurArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DinosaurDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpleadosDefaultArgs instead
     */
    export type EmpleadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EmpleadosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InmueblesAlquilerDefaultArgs instead
     */
    export type InmueblesAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = InmueblesAlquilerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropietariosPrivadosDefaultArgs instead
     */
    export type PropietariosPrivadosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PropietariosPrivadosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropietariosEmpresarialesDefaultArgs instead
     */
    export type PropietariosEmpresarialesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PropietariosEmpresarialesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientesDefaultArgs instead
     */
    export type ClientesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ClientesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContratosAlquilerDefaultArgs instead
     */
    export type ContratosAlquilerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ContratosAlquilerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CitasDefaultArgs instead
     */
    export type CitasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CitasDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}