
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Garage
 * 
 */
export type Garage = $Result.DefaultSelection<Prisma.$GaragePayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Maintenance
 * 
 */
export type Maintenance = $Result.DefaultSelection<Prisma.$MaintenancePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceGarage
 * 
 */
export type ServiceGarage = $Result.DefaultSelection<Prisma.$ServiceGaragePayload>
/**
 * Model ReminderConfig
 * 
 */
export type ReminderConfig = $Result.DefaultSelection<Prisma.$ReminderConfigPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  MECHANIC: 'MECHANIC',
  RECEPTIONIST: 'RECEPTIONIST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ReminderType: {
  OIL_CHANGE: 'OIL_CHANGE',
  TIRE_ROTATION: 'TIRE_ROTATION',
  TECHNICAL_INSPECTION: 'TECHNICAL_INSPECTION',
  BRAKE_CHECK: 'BRAKE_CHECK',
  TIMING_BELT: 'TIMING_BELT',
  INSURANCE_RENEWAL: 'INSURANCE_RENEWAL',
  CUSTOM: 'CUSTOM'
};

export type ReminderType = (typeof ReminderType)[keyof typeof ReminderType]


export const NotificationType: {
  REMINDER: 'REMINDER',
  APPOINTMENT: 'APPOINTMENT',
  SYSTEM: 'SYSTEM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ReminderType = $Enums.ReminderType

export const ReminderType: typeof $Enums.ReminderType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.garage`: Exposes CRUD operations for the **Garage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Garages
    * const garages = await prisma.garage.findMany()
    * ```
    */
  get garage(): Prisma.GarageDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **Maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.MaintenanceDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.serviceGarage`: Exposes CRUD operations for the **ServiceGarage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceGarages
    * const serviceGarages = await prisma.serviceGarage.findMany()
    * ```
    */
  get serviceGarage(): Prisma.ServiceGarageDelegate<ExtArgs>;

  /**
   * `prisma.reminderConfig`: Exposes CRUD operations for the **ReminderConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReminderConfigs
    * const reminderConfigs = await prisma.reminderConfig.findMany()
    * ```
    */
  get reminderConfig(): Prisma.ReminderConfigDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    User: 'User',
    Garage: 'Garage',
    Employee: 'Employee',
    Vehicle: 'Vehicle',
    Maintenance: 'Maintenance',
    Service: 'Service',
    ServiceGarage: 'ServiceGarage',
    ReminderConfig: 'ReminderConfig',
    Reminder: 'Reminder',
    Notification: 'Notification',
    Appointment: 'Appointment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "garage" | "employee" | "vehicle" | "maintenance" | "service" | "serviceGarage" | "reminderConfig" | "reminder" | "notification" | "appointment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Garage: {
        payload: Prisma.$GaragePayload<ExtArgs>
        fields: Prisma.GarageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GarageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GarageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>
          }
          findFirst: {
            args: Prisma.GarageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GarageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>
          }
          findMany: {
            args: Prisma.GarageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>[]
          }
          create: {
            args: Prisma.GarageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>
          }
          createMany: {
            args: Prisma.GarageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GarageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>[]
          }
          delete: {
            args: Prisma.GarageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>
          }
          update: {
            args: Prisma.GarageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>
          }
          deleteMany: {
            args: Prisma.GarageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GarageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GarageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaragePayload>
          }
          aggregate: {
            args: Prisma.GarageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGarage>
          }
          groupBy: {
            args: Prisma.GarageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GarageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GarageCountArgs<ExtArgs>
            result: $Utils.Optional<GarageCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Maintenance: {
        payload: Prisma.$MaintenancePayload<ExtArgs>
        fields: Prisma.MaintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findMany: {
            args: Prisma.MaintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          create: {
            args: Prisma.MaintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          createMany: {
            args: Prisma.MaintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          delete: {
            args: Prisma.MaintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          update: {
            args: Prisma.MaintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.MaintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceGarage: {
        payload: Prisma.$ServiceGaragePayload<ExtArgs>
        fields: Prisma.ServiceGarageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceGarageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceGarageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>
          }
          findFirst: {
            args: Prisma.ServiceGarageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceGarageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>
          }
          findMany: {
            args: Prisma.ServiceGarageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>[]
          }
          create: {
            args: Prisma.ServiceGarageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>
          }
          createMany: {
            args: Prisma.ServiceGarageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceGarageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>[]
          }
          delete: {
            args: Prisma.ServiceGarageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>
          }
          update: {
            args: Prisma.ServiceGarageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>
          }
          deleteMany: {
            args: Prisma.ServiceGarageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceGarageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceGarageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGaragePayload>
          }
          aggregate: {
            args: Prisma.ServiceGarageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceGarage>
          }
          groupBy: {
            args: Prisma.ServiceGarageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGarageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceGarageCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceGarageCountAggregateOutputType> | number
          }
        }
      }
      ReminderConfig: {
        payload: Prisma.$ReminderConfigPayload<ExtArgs>
        fields: Prisma.ReminderConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>
          }
          findFirst: {
            args: Prisma.ReminderConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>
          }
          findMany: {
            args: Prisma.ReminderConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>[]
          }
          create: {
            args: Prisma.ReminderConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>
          }
          createMany: {
            args: Prisma.ReminderConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>[]
          }
          delete: {
            args: Prisma.ReminderConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>
          }
          update: {
            args: Prisma.ReminderConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>
          }
          deleteMany: {
            args: Prisma.ReminderConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderConfigPayload>
          }
          aggregate: {
            args: Prisma.ReminderConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminderConfig>
          }
          groupBy: {
            args: Prisma.ReminderConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderConfigCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    appointments: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type GarageCountOutputType
   */

  export type GarageCountOutputType = {
    services: number
    appointments: number
    employees: number
  }

  export type GarageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | GarageCountOutputTypeCountServicesArgs
    appointments?: boolean | GarageCountOutputTypeCountAppointmentsArgs
    employees?: boolean | GarageCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * GarageCountOutputType without action
   */
  export type GarageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarageCountOutputType
     */
    select?: GarageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GarageCountOutputType without action
   */
  export type GarageCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceGarageWhereInput
  }

  /**
   * GarageCountOutputType without action
   */
  export type GarageCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * GarageCountOutputType without action
   */
  export type GarageCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    maintenances: number
    appointments: number
    reminderConfigs: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenances?: boolean | VehicleCountOutputTypeCountMaintenancesArgs
    appointments?: boolean | VehicleCountOutputTypeCountAppointmentsArgs
    reminderConfigs?: boolean | VehicleCountOutputTypeCountReminderConfigsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountReminderConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderConfigWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    maintenances: number
    serviceGarages: number
    reminderConfigs: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenances?: boolean | ServiceCountOutputTypeCountMaintenancesArgs
    serviceGarages?: boolean | ServiceCountOutputTypeCountServiceGaragesArgs
    reminderConfigs?: boolean | ServiceCountOutputTypeCountReminderConfigsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountServiceGaragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceGarageWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountReminderConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderConfigWhereInput
  }


  /**
   * Count Type ReminderConfigCountOutputType
   */

  export type ReminderConfigCountOutputType = {
    reminders: number
  }

  export type ReminderConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminders?: boolean | ReminderConfigCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * ReminderConfigCountOutputType without action
   */
  export type ReminderConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfigCountOutputType
     */
    select?: ReminderConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReminderConfigCountOutputType without action
   */
  export type ReminderConfigCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    reminders: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminders?: boolean | NotificationCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany"> | Null>
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Garage
   */

  export type AggregateGarage = {
    _count: GarageCountAggregateOutputType | null
    _avg: GarageAvgAggregateOutputType | null
    _sum: GarageSumAggregateOutputType | null
    _min: GarageMinAggregateOutputType | null
    _max: GarageMaxAggregateOutputType | null
  }

  export type GarageAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type GarageSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type GarageMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    email: string | null
    website: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GarageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    email: string | null
    website: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GarageCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    postalCode: number
    latitude: number
    longitude: number
    phone: number
    email: number
    website: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GarageAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GarageSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GarageMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GarageMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GarageCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GarageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garage to aggregate.
     */
    where?: GarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garages to fetch.
     */
    orderBy?: GarageOrderByWithRelationInput | GarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Garages
    **/
    _count?: true | GarageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GarageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GarageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GarageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GarageMaxAggregateInputType
  }

  export type GetGarageAggregateType<T extends GarageAggregateArgs> = {
        [P in keyof T & keyof AggregateGarage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarage[P]>
      : GetScalarType<T[P], AggregateGarage[P]>
  }




  export type GarageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GarageWhereInput
    orderBy?: GarageOrderByWithAggregationInput | GarageOrderByWithAggregationInput[]
    by: GarageScalarFieldEnum[] | GarageScalarFieldEnum
    having?: GarageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GarageCountAggregateInputType | true
    _avg?: GarageAvgAggregateInputType
    _sum?: GarageSumAggregateInputType
    _min?: GarageMinAggregateInputType
    _max?: GarageMaxAggregateInputType
  }

  export type GarageGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude: number | null
    longitude: number | null
    phone: string
    email: string
    website: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: GarageCountAggregateOutputType | null
    _avg: GarageAvgAggregateOutputType | null
    _sum: GarageSumAggregateOutputType | null
    _min: GarageMinAggregateOutputType | null
    _max: GarageMaxAggregateOutputType | null
  }

  type GetGarageGroupByPayload<T extends GarageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GarageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GarageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GarageGroupByOutputType[P]>
            : GetScalarType<T[P], GarageGroupByOutputType[P]>
        }
      >
    >


  export type GarageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | Garage$servicesArgs<ExtArgs>
    appointments?: boolean | Garage$appointmentsArgs<ExtArgs>
    employees?: boolean | Garage$employeesArgs<ExtArgs>
    _count?: boolean | GarageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garage"]>

  export type GarageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["garage"]>

  export type GarageSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GarageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Garage$servicesArgs<ExtArgs>
    appointments?: boolean | Garage$appointmentsArgs<ExtArgs>
    employees?: boolean | Garage$employeesArgs<ExtArgs>
    _count?: boolean | GarageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GarageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GaragePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Garage"
    objects: {
      services: Prisma.$ServiceGaragePayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      postalCode: string
      latitude: number | null
      longitude: number | null
      phone: string
      email: string
      website: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["garage"]>
    composites: {}
  }

  type GarageGetPayload<S extends boolean | null | undefined | GarageDefaultArgs> = $Result.GetResult<Prisma.$GaragePayload, S>

  type GarageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GarageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GarageCountAggregateInputType | true
    }

  export interface GarageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Garage'], meta: { name: 'Garage' } }
    /**
     * Find zero or one Garage that matches the filter.
     * @param {GarageFindUniqueArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GarageFindUniqueArgs>(args: SelectSubset<T, GarageFindUniqueArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Garage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GarageFindUniqueOrThrowArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GarageFindUniqueOrThrowArgs>(args: SelectSubset<T, GarageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Garage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageFindFirstArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GarageFindFirstArgs>(args?: SelectSubset<T, GarageFindFirstArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Garage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageFindFirstOrThrowArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GarageFindFirstOrThrowArgs>(args?: SelectSubset<T, GarageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Garages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Garages
     * const garages = await prisma.garage.findMany()
     * 
     * // Get first 10 Garages
     * const garages = await prisma.garage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const garageWithIdOnly = await prisma.garage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GarageFindManyArgs>(args?: SelectSubset<T, GarageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Garage.
     * @param {GarageCreateArgs} args - Arguments to create a Garage.
     * @example
     * // Create one Garage
     * const Garage = await prisma.garage.create({
     *   data: {
     *     // ... data to create a Garage
     *   }
     * })
     * 
     */
    create<T extends GarageCreateArgs>(args: SelectSubset<T, GarageCreateArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Garages.
     * @param {GarageCreateManyArgs} args - Arguments to create many Garages.
     * @example
     * // Create many Garages
     * const garage = await prisma.garage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GarageCreateManyArgs>(args?: SelectSubset<T, GarageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Garages and returns the data saved in the database.
     * @param {GarageCreateManyAndReturnArgs} args - Arguments to create many Garages.
     * @example
     * // Create many Garages
     * const garage = await prisma.garage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Garages and only return the `id`
     * const garageWithIdOnly = await prisma.garage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GarageCreateManyAndReturnArgs>(args?: SelectSubset<T, GarageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Garage.
     * @param {GarageDeleteArgs} args - Arguments to delete one Garage.
     * @example
     * // Delete one Garage
     * const Garage = await prisma.garage.delete({
     *   where: {
     *     // ... filter to delete one Garage
     *   }
     * })
     * 
     */
    delete<T extends GarageDeleteArgs>(args: SelectSubset<T, GarageDeleteArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Garage.
     * @param {GarageUpdateArgs} args - Arguments to update one Garage.
     * @example
     * // Update one Garage
     * const garage = await prisma.garage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GarageUpdateArgs>(args: SelectSubset<T, GarageUpdateArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Garages.
     * @param {GarageDeleteManyArgs} args - Arguments to filter Garages to delete.
     * @example
     * // Delete a few Garages
     * const { count } = await prisma.garage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GarageDeleteManyArgs>(args?: SelectSubset<T, GarageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Garages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Garages
     * const garage = await prisma.garage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GarageUpdateManyArgs>(args: SelectSubset<T, GarageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Garage.
     * @param {GarageUpsertArgs} args - Arguments to update or create a Garage.
     * @example
     * // Update or create a Garage
     * const garage = await prisma.garage.upsert({
     *   create: {
     *     // ... data to create a Garage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Garage we want to update
     *   }
     * })
     */
    upsert<T extends GarageUpsertArgs>(args: SelectSubset<T, GarageUpsertArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Garages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageCountArgs} args - Arguments to filter Garages to count.
     * @example
     * // Count the number of Garages
     * const count = await prisma.garage.count({
     *   where: {
     *     // ... the filter for the Garages we want to count
     *   }
     * })
    **/
    count<T extends GarageCountArgs>(
      args?: Subset<T, GarageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GarageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Garage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GarageAggregateArgs>(args: Subset<T, GarageAggregateArgs>): Prisma.PrismaPromise<GetGarageAggregateType<T>>

    /**
     * Group by Garage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageGroupByArgs} args - Group by arguments.
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
      T extends GarageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GarageGroupByArgs['orderBy'] }
        : { orderBy?: GarageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GarageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGarageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Garage model
   */
  readonly fields: GarageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Garage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GarageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Garage$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Garage$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "findMany"> | Null>
    appointments<T extends Garage$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Garage$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany"> | Null>
    employees<T extends Garage$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Garage$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Garage model
   */ 
  interface GarageFieldRefs {
    readonly id: FieldRef<"Garage", 'String'>
    readonly name: FieldRef<"Garage", 'String'>
    readonly address: FieldRef<"Garage", 'String'>
    readonly city: FieldRef<"Garage", 'String'>
    readonly postalCode: FieldRef<"Garage", 'String'>
    readonly latitude: FieldRef<"Garage", 'Float'>
    readonly longitude: FieldRef<"Garage", 'Float'>
    readonly phone: FieldRef<"Garage", 'String'>
    readonly email: FieldRef<"Garage", 'String'>
    readonly website: FieldRef<"Garage", 'String'>
    readonly description: FieldRef<"Garage", 'String'>
    readonly createdAt: FieldRef<"Garage", 'DateTime'>
    readonly updatedAt: FieldRef<"Garage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Garage findUnique
   */
  export type GarageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * Filter, which Garage to fetch.
     */
    where: GarageWhereUniqueInput
  }

  /**
   * Garage findUniqueOrThrow
   */
  export type GarageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * Filter, which Garage to fetch.
     */
    where: GarageWhereUniqueInput
  }

  /**
   * Garage findFirst
   */
  export type GarageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * Filter, which Garage to fetch.
     */
    where?: GarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garages to fetch.
     */
    orderBy?: GarageOrderByWithRelationInput | GarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Garages.
     */
    cursor?: GarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Garages.
     */
    distinct?: GarageScalarFieldEnum | GarageScalarFieldEnum[]
  }

  /**
   * Garage findFirstOrThrow
   */
  export type GarageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * Filter, which Garage to fetch.
     */
    where?: GarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garages to fetch.
     */
    orderBy?: GarageOrderByWithRelationInput | GarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Garages.
     */
    cursor?: GarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Garages.
     */
    distinct?: GarageScalarFieldEnum | GarageScalarFieldEnum[]
  }

  /**
   * Garage findMany
   */
  export type GarageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * Filter, which Garages to fetch.
     */
    where?: GarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Garages to fetch.
     */
    orderBy?: GarageOrderByWithRelationInput | GarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Garages.
     */
    cursor?: GarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Garages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Garages.
     */
    skip?: number
    distinct?: GarageScalarFieldEnum | GarageScalarFieldEnum[]
  }

  /**
   * Garage create
   */
  export type GarageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * The data needed to create a Garage.
     */
    data: XOR<GarageCreateInput, GarageUncheckedCreateInput>
  }

  /**
   * Garage createMany
   */
  export type GarageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Garages.
     */
    data: GarageCreateManyInput | GarageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Garage createManyAndReturn
   */
  export type GarageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Garages.
     */
    data: GarageCreateManyInput | GarageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Garage update
   */
  export type GarageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * The data needed to update a Garage.
     */
    data: XOR<GarageUpdateInput, GarageUncheckedUpdateInput>
    /**
     * Choose, which Garage to update.
     */
    where: GarageWhereUniqueInput
  }

  /**
   * Garage updateMany
   */
  export type GarageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Garages.
     */
    data: XOR<GarageUpdateManyMutationInput, GarageUncheckedUpdateManyInput>
    /**
     * Filter which Garages to update
     */
    where?: GarageWhereInput
  }

  /**
   * Garage upsert
   */
  export type GarageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * The filter to search for the Garage to update in case it exists.
     */
    where: GarageWhereUniqueInput
    /**
     * In case the Garage found by the `where` argument doesn't exist, create a new Garage with this data.
     */
    create: XOR<GarageCreateInput, GarageUncheckedCreateInput>
    /**
     * In case the Garage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GarageUpdateInput, GarageUncheckedUpdateInput>
  }

  /**
   * Garage delete
   */
  export type GarageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
    /**
     * Filter which Garage to delete.
     */
    where: GarageWhereUniqueInput
  }

  /**
   * Garage deleteMany
   */
  export type GarageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garages to delete
     */
    where?: GarageWhereInput
  }

  /**
   * Garage.services
   */
  export type Garage$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    where?: ServiceGarageWhereInput
    orderBy?: ServiceGarageOrderByWithRelationInput | ServiceGarageOrderByWithRelationInput[]
    cursor?: ServiceGarageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceGarageScalarFieldEnum | ServiceGarageScalarFieldEnum[]
  }

  /**
   * Garage.appointments
   */
  export type Garage$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Garage.employees
   */
  export type Garage$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Garage without action
   */
  export type GarageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garage
     */
    select?: GarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GarageInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    garageId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    garageId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    garageId: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    garageId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    garageId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    garageId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    garageId: string
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    garageId?: boolean
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    garageId?: boolean
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    garageId?: boolean
  }

  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      garage: Prisma.$GaragePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      garageId: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    garage<T extends GarageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GarageDefaultArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'Role'>
    readonly garageId: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
    currentMileage: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    currentMileage: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    licensePlate: string | null
    vin: string | null
    currentMileage: number | null
    fuelType: string | null
    photoUrl: string | null
    purchaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    licensePlate: string | null
    vin: string | null
    currentMileage: number | null
    fuelType: string | null
    photoUrl: string | null
    purchaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    year: number
    licensePlate: number
    vin: number
    currentMileage: number
    fuelType: number
    photoUrl: number
    purchaseDate: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    currentMileage?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    currentMileage?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    licensePlate?: true
    vin?: true
    currentMileage?: true
    fuelType?: true
    photoUrl?: true
    purchaseDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    licensePlate?: true
    vin?: true
    currentMileage?: true
    fuelType?: true
    photoUrl?: true
    purchaseDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    licensePlate?: true
    vin?: true
    currentMileage?: true
    fuelType?: true
    photoUrl?: true
    purchaseDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin: string | null
    currentMileage: number
    fuelType: string | null
    photoUrl: string | null
    purchaseDate: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    licensePlate?: boolean
    vin?: boolean
    currentMileage?: boolean
    fuelType?: boolean
    photoUrl?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    maintenances?: boolean | Vehicle$maintenancesArgs<ExtArgs>
    appointments?: boolean | Vehicle$appointmentsArgs<ExtArgs>
    reminderConfigs?: boolean | Vehicle$reminderConfigsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    licensePlate?: boolean
    vin?: boolean
    currentMileage?: boolean
    fuelType?: boolean
    photoUrl?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    licensePlate?: boolean
    vin?: boolean
    currentMileage?: boolean
    fuelType?: boolean
    photoUrl?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    maintenances?: boolean | Vehicle$maintenancesArgs<ExtArgs>
    appointments?: boolean | Vehicle$appointmentsArgs<ExtArgs>
    reminderConfigs?: boolean | Vehicle$reminderConfigsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      reminderConfigs: Prisma.$ReminderConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      model: string
      year: number
      licensePlate: string
      vin: string | null
      currentMileage: number
      fuelType: string | null
      photoUrl: string | null
      purchaseDate: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    maintenances<T extends Vehicle$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany"> | Null>
    appointments<T extends Vehicle$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany"> | Null>
    reminderConfigs<T extends Vehicle$reminderConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$reminderConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly licensePlate: FieldRef<"Vehicle", 'String'>
    readonly vin: FieldRef<"Vehicle", 'String'>
    readonly currentMileage: FieldRef<"Vehicle", 'Int'>
    readonly fuelType: FieldRef<"Vehicle", 'String'>
    readonly photoUrl: FieldRef<"Vehicle", 'String'>
    readonly purchaseDate: FieldRef<"Vehicle", 'DateTime'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
    readonly userId: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle.maintenances
   */
  export type Vehicle$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Vehicle.appointments
   */
  export type Vehicle$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Vehicle.reminderConfigs
   */
  export type Vehicle$reminderConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    where?: ReminderConfigWhereInput
    orderBy?: ReminderConfigOrderByWithRelationInput | ReminderConfigOrderByWithRelationInput[]
    cursor?: ReminderConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderConfigScalarFieldEnum | ReminderConfigScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceAvgAggregateOutputType = {
    mileage: number | null
    cost: number | null
  }

  export type MaintenanceSumAggregateOutputType = {
    mileage: number | null
    cost: number | null
  }

  export type MaintenanceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    mileage: number | null
    date: Date | null
    cost: number | null
    invoiceUrl: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicleId: string | null
    serviceId: string | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    mileage: number | null
    date: Date | null
    cost: number | null
    invoiceUrl: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicleId: string | null
    serviceId: string | null
  }

  export type MaintenanceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    mileage: number
    date: number
    cost: number
    invoiceUrl: number
    photoUrls: number
    notes: number
    createdAt: number
    updatedAt: number
    vehicleId: number
    serviceId: number
    _all: number
  }


  export type MaintenanceAvgAggregateInputType = {
    mileage?: true
    cost?: true
  }

  export type MaintenanceSumAggregateInputType = {
    mileage?: true
    cost?: true
  }

  export type MaintenanceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mileage?: true
    date?: true
    cost?: true
    invoiceUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    serviceId?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mileage?: true
    date?: true
    cost?: true
    invoiceUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    serviceId?: true
  }

  export type MaintenanceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mileage?: true
    date?: true
    cost?: true
    invoiceUrl?: true
    photoUrls?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    serviceId?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance to aggregate.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type MaintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithAggregationInput | MaintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: MaintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _avg?: MaintenanceAvgAggregateInputType
    _sum?: MaintenanceSumAggregateInputType
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    id: string
    title: string
    description: string | null
    mileage: number
    date: Date
    cost: number
    invoiceUrl: string | null
    photoUrls: string[]
    notes: string | null
    createdAt: Date
    updatedAt: Date
    vehicleId: string
    serviceId: string | null
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends MaintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mileage?: boolean
    date?: boolean
    cost?: boolean
    invoiceUrl?: boolean
    photoUrls?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    serviceId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | Maintenance$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mileage?: boolean
    date?: boolean
    cost?: boolean
    invoiceUrl?: boolean
    photoUrls?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    serviceId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | Maintenance$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    mileage?: boolean
    date?: boolean
    cost?: boolean
    invoiceUrl?: boolean
    photoUrls?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    serviceId?: boolean
  }

  export type MaintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | Maintenance$serviceArgs<ExtArgs>
  }
  export type MaintenanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | Maintenance$serviceArgs<ExtArgs>
  }

  export type $MaintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      mileage: number
      date: Date
      cost: number
      invoiceUrl: string | null
      photoUrls: string[]
      notes: string | null
      createdAt: Date
      updatedAt: Date
      vehicleId: string
      serviceId: string | null
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }

  type MaintenanceGetPayload<S extends boolean | null | undefined | MaintenanceDefaultArgs> = $Result.GetResult<Prisma.$MaintenancePayload, S>

  type MaintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaintenanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface MaintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance'], meta: { name: 'Maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {MaintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceFindUniqueArgs>(args: SelectSubset<T, MaintenanceFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Maintenance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceFindFirstArgs>(args?: SelectSubset<T, MaintenanceFindFirstArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceFindManyArgs>(args?: SelectSubset<T, MaintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Maintenance.
     * @param {MaintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
     */
    create<T extends MaintenanceCreateArgs>(args: SelectSubset<T, MaintenanceCreateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Maintenances.
     * @param {MaintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceCreateManyArgs>(args?: SelectSubset<T, MaintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenances and returns the data saved in the database.
     * @param {MaintenanceCreateManyAndReturnArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Maintenance.
     * @param {MaintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceDeleteArgs>(args: SelectSubset<T, MaintenanceDeleteArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Maintenance.
     * @param {MaintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceUpdateArgs>(args: SelectSubset<T, MaintenanceUpdateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Maintenances.
     * @param {MaintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceDeleteManyArgs>(args?: SelectSubset<T, MaintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceUpdateManyArgs>(args: SelectSubset<T, MaintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maintenance.
     * @param {MaintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceUpsertArgs>(args: SelectSubset<T, MaintenanceUpsertArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceCountArgs>(
      args?: Subset<T, MaintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance model
   */
  readonly fields: MaintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    service<T extends Maintenance$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Maintenance model
   */ 
  interface MaintenanceFieldRefs {
    readonly id: FieldRef<"Maintenance", 'String'>
    readonly title: FieldRef<"Maintenance", 'String'>
    readonly description: FieldRef<"Maintenance", 'String'>
    readonly mileage: FieldRef<"Maintenance", 'Int'>
    readonly date: FieldRef<"Maintenance", 'DateTime'>
    readonly cost: FieldRef<"Maintenance", 'Float'>
    readonly invoiceUrl: FieldRef<"Maintenance", 'String'>
    readonly photoUrls: FieldRef<"Maintenance", 'String[]'>
    readonly notes: FieldRef<"Maintenance", 'String'>
    readonly createdAt: FieldRef<"Maintenance", 'DateTime'>
    readonly updatedAt: FieldRef<"Maintenance", 'DateTime'>
    readonly vehicleId: FieldRef<"Maintenance", 'String'>
    readonly serviceId: FieldRef<"Maintenance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Maintenance findUnique
   */
  export type MaintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findUniqueOrThrow
   */
  export type MaintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findFirst
   */
  export type MaintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findFirstOrThrow
   */
  export type MaintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findMany
   */
  export type MaintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenances to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance create
   */
  export type MaintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance.
     */
    data: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
  }

  /**
   * Maintenance createMany
   */
  export type MaintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance createManyAndReturn
   */
  export type MaintenanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance update
   */
  export type MaintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance.
     */
    data: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
    /**
     * Choose, which Maintenance to update.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance updateMany
   */
  export type MaintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
  }

  /**
   * Maintenance upsert
   */
  export type MaintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance to update in case it exists.
     */
    where: MaintenanceWhereUniqueInput
    /**
     * In case the Maintenance found by the `where` argument doesn't exist, create a new Maintenance with this data.
     */
    create: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
    /**
     * In case the Maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
  }

  /**
   * Maintenance delete
   */
  export type MaintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter which Maintenance to delete.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance deleteMany
   */
  export type MaintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenances to delete
     */
    where?: MaintenanceWhereInput
  }

  /**
   * Maintenance.service
   */
  export type Maintenance$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Maintenance without action
   */
  export type MaintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    category: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenances?: boolean | Service$maintenancesArgs<ExtArgs>
    serviceGarages?: boolean | Service$serviceGaragesArgs<ExtArgs>
    reminderConfigs?: boolean | Service$reminderConfigsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenances?: boolean | Service$maintenancesArgs<ExtArgs>
    serviceGarages?: boolean | Service$serviceGaragesArgs<ExtArgs>
    reminderConfigs?: boolean | Service$reminderConfigsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
      serviceGarages: Prisma.$ServiceGaragePayload<ExtArgs>[]
      reminderConfigs: Prisma.$ReminderConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maintenances<T extends Service$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Service$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany"> | Null>
    serviceGarages<T extends Service$serviceGaragesArgs<ExtArgs> = {}>(args?: Subset<T, Service$serviceGaragesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "findMany"> | Null>
    reminderConfigs<T extends Service$reminderConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Service$reminderConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly category: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service.maintenances
   */
  export type Service$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Service.serviceGarages
   */
  export type Service$serviceGaragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    where?: ServiceGarageWhereInput
    orderBy?: ServiceGarageOrderByWithRelationInput | ServiceGarageOrderByWithRelationInput[]
    cursor?: ServiceGarageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceGarageScalarFieldEnum | ServiceGarageScalarFieldEnum[]
  }

  /**
   * Service.reminderConfigs
   */
  export type Service$reminderConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    where?: ReminderConfigWhereInput
    orderBy?: ReminderConfigOrderByWithRelationInput | ReminderConfigOrderByWithRelationInput[]
    cursor?: ReminderConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderConfigScalarFieldEnum | ReminderConfigScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceGarage
   */

  export type AggregateServiceGarage = {
    _count: ServiceGarageCountAggregateOutputType | null
    _avg: ServiceGarageAvgAggregateOutputType | null
    _sum: ServiceGarageSumAggregateOutputType | null
    _min: ServiceGarageMinAggregateOutputType | null
    _max: ServiceGarageMaxAggregateOutputType | null
  }

  export type ServiceGarageAvgAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type ServiceGarageSumAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type ServiceGarageMinAggregateOutputType = {
    id: string | null
    price: number | null
    duration: number | null
    serviceId: string | null
    garageId: string | null
  }

  export type ServiceGarageMaxAggregateOutputType = {
    id: string | null
    price: number | null
    duration: number | null
    serviceId: string | null
    garageId: string | null
  }

  export type ServiceGarageCountAggregateOutputType = {
    id: number
    price: number
    duration: number
    serviceId: number
    garageId: number
    _all: number
  }


  export type ServiceGarageAvgAggregateInputType = {
    price?: true
    duration?: true
  }

  export type ServiceGarageSumAggregateInputType = {
    price?: true
    duration?: true
  }

  export type ServiceGarageMinAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    serviceId?: true
    garageId?: true
  }

  export type ServiceGarageMaxAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    serviceId?: true
    garageId?: true
  }

  export type ServiceGarageCountAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    serviceId?: true
    garageId?: true
    _all?: true
  }

  export type ServiceGarageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceGarage to aggregate.
     */
    where?: ServiceGarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGarages to fetch.
     */
    orderBy?: ServiceGarageOrderByWithRelationInput | ServiceGarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceGarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGarages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGarages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceGarages
    **/
    _count?: true | ServiceGarageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceGarageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceGarageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceGarageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceGarageMaxAggregateInputType
  }

  export type GetServiceGarageAggregateType<T extends ServiceGarageAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceGarage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceGarage[P]>
      : GetScalarType<T[P], AggregateServiceGarage[P]>
  }




  export type ServiceGarageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceGarageWhereInput
    orderBy?: ServiceGarageOrderByWithAggregationInput | ServiceGarageOrderByWithAggregationInput[]
    by: ServiceGarageScalarFieldEnum[] | ServiceGarageScalarFieldEnum
    having?: ServiceGarageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceGarageCountAggregateInputType | true
    _avg?: ServiceGarageAvgAggregateInputType
    _sum?: ServiceGarageSumAggregateInputType
    _min?: ServiceGarageMinAggregateInputType
    _max?: ServiceGarageMaxAggregateInputType
  }

  export type ServiceGarageGroupByOutputType = {
    id: string
    price: number
    duration: number
    serviceId: string
    garageId: string
    _count: ServiceGarageCountAggregateOutputType | null
    _avg: ServiceGarageAvgAggregateOutputType | null
    _sum: ServiceGarageSumAggregateOutputType | null
    _min: ServiceGarageMinAggregateOutputType | null
    _max: ServiceGarageMaxAggregateOutputType | null
  }

  type GetServiceGarageGroupByPayload<T extends ServiceGarageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGarageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGarageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGarageGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGarageGroupByOutputType[P]>
        }
      >
    >


  export type ServiceGarageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    duration?: boolean
    serviceId?: boolean
    garageId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceGarage"]>

  export type ServiceGarageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    duration?: boolean
    serviceId?: boolean
    garageId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceGarage"]>

  export type ServiceGarageSelectScalar = {
    id?: boolean
    price?: boolean
    duration?: boolean
    serviceId?: boolean
    garageId?: boolean
  }

  export type ServiceGarageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }
  export type ServiceGarageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }

  export type $ServiceGaragePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceGarage"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      garage: Prisma.$GaragePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      duration: number
      serviceId: string
      garageId: string
    }, ExtArgs["result"]["serviceGarage"]>
    composites: {}
  }

  type ServiceGarageGetPayload<S extends boolean | null | undefined | ServiceGarageDefaultArgs> = $Result.GetResult<Prisma.$ServiceGaragePayload, S>

  type ServiceGarageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceGarageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceGarageCountAggregateInputType | true
    }

  export interface ServiceGarageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceGarage'], meta: { name: 'ServiceGarage' } }
    /**
     * Find zero or one ServiceGarage that matches the filter.
     * @param {ServiceGarageFindUniqueArgs} args - Arguments to find a ServiceGarage
     * @example
     * // Get one ServiceGarage
     * const serviceGarage = await prisma.serviceGarage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceGarageFindUniqueArgs>(args: SelectSubset<T, ServiceGarageFindUniqueArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceGarage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceGarageFindUniqueOrThrowArgs} args - Arguments to find a ServiceGarage
     * @example
     * // Get one ServiceGarage
     * const serviceGarage = await prisma.serviceGarage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceGarageFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceGarageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceGarage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGarageFindFirstArgs} args - Arguments to find a ServiceGarage
     * @example
     * // Get one ServiceGarage
     * const serviceGarage = await prisma.serviceGarage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceGarageFindFirstArgs>(args?: SelectSubset<T, ServiceGarageFindFirstArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceGarage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGarageFindFirstOrThrowArgs} args - Arguments to find a ServiceGarage
     * @example
     * // Get one ServiceGarage
     * const serviceGarage = await prisma.serviceGarage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceGarageFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceGarageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceGarages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGarageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceGarages
     * const serviceGarages = await prisma.serviceGarage.findMany()
     * 
     * // Get first 10 ServiceGarages
     * const serviceGarages = await prisma.serviceGarage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceGarageWithIdOnly = await prisma.serviceGarage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceGarageFindManyArgs>(args?: SelectSubset<T, ServiceGarageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceGarage.
     * @param {ServiceGarageCreateArgs} args - Arguments to create a ServiceGarage.
     * @example
     * // Create one ServiceGarage
     * const ServiceGarage = await prisma.serviceGarage.create({
     *   data: {
     *     // ... data to create a ServiceGarage
     *   }
     * })
     * 
     */
    create<T extends ServiceGarageCreateArgs>(args: SelectSubset<T, ServiceGarageCreateArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceGarages.
     * @param {ServiceGarageCreateManyArgs} args - Arguments to create many ServiceGarages.
     * @example
     * // Create many ServiceGarages
     * const serviceGarage = await prisma.serviceGarage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceGarageCreateManyArgs>(args?: SelectSubset<T, ServiceGarageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceGarages and returns the data saved in the database.
     * @param {ServiceGarageCreateManyAndReturnArgs} args - Arguments to create many ServiceGarages.
     * @example
     * // Create many ServiceGarages
     * const serviceGarage = await prisma.serviceGarage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceGarages and only return the `id`
     * const serviceGarageWithIdOnly = await prisma.serviceGarage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceGarageCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceGarageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceGarage.
     * @param {ServiceGarageDeleteArgs} args - Arguments to delete one ServiceGarage.
     * @example
     * // Delete one ServiceGarage
     * const ServiceGarage = await prisma.serviceGarage.delete({
     *   where: {
     *     // ... filter to delete one ServiceGarage
     *   }
     * })
     * 
     */
    delete<T extends ServiceGarageDeleteArgs>(args: SelectSubset<T, ServiceGarageDeleteArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceGarage.
     * @param {ServiceGarageUpdateArgs} args - Arguments to update one ServiceGarage.
     * @example
     * // Update one ServiceGarage
     * const serviceGarage = await prisma.serviceGarage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceGarageUpdateArgs>(args: SelectSubset<T, ServiceGarageUpdateArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceGarages.
     * @param {ServiceGarageDeleteManyArgs} args - Arguments to filter ServiceGarages to delete.
     * @example
     * // Delete a few ServiceGarages
     * const { count } = await prisma.serviceGarage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceGarageDeleteManyArgs>(args?: SelectSubset<T, ServiceGarageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceGarages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGarageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceGarages
     * const serviceGarage = await prisma.serviceGarage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceGarageUpdateManyArgs>(args: SelectSubset<T, ServiceGarageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceGarage.
     * @param {ServiceGarageUpsertArgs} args - Arguments to update or create a ServiceGarage.
     * @example
     * // Update or create a ServiceGarage
     * const serviceGarage = await prisma.serviceGarage.upsert({
     *   create: {
     *     // ... data to create a ServiceGarage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceGarage we want to update
     *   }
     * })
     */
    upsert<T extends ServiceGarageUpsertArgs>(args: SelectSubset<T, ServiceGarageUpsertArgs<ExtArgs>>): Prisma__ServiceGarageClient<$Result.GetResult<Prisma.$ServiceGaragePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceGarages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGarageCountArgs} args - Arguments to filter ServiceGarages to count.
     * @example
     * // Count the number of ServiceGarages
     * const count = await prisma.serviceGarage.count({
     *   where: {
     *     // ... the filter for the ServiceGarages we want to count
     *   }
     * })
    **/
    count<T extends ServiceGarageCountArgs>(
      args?: Subset<T, ServiceGarageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceGarageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceGarage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGarageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceGarageAggregateArgs>(args: Subset<T, ServiceGarageAggregateArgs>): Prisma.PrismaPromise<GetServiceGarageAggregateType<T>>

    /**
     * Group by ServiceGarage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGarageGroupByArgs} args - Group by arguments.
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
      T extends ServiceGarageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGarageGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGarageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGarageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGarageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceGarage model
   */
  readonly fields: ServiceGarageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceGarage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceGarageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    garage<T extends GarageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GarageDefaultArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceGarage model
   */ 
  interface ServiceGarageFieldRefs {
    readonly id: FieldRef<"ServiceGarage", 'String'>
    readonly price: FieldRef<"ServiceGarage", 'Float'>
    readonly duration: FieldRef<"ServiceGarage", 'Int'>
    readonly serviceId: FieldRef<"ServiceGarage", 'String'>
    readonly garageId: FieldRef<"ServiceGarage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceGarage findUnique
   */
  export type ServiceGarageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGarage to fetch.
     */
    where: ServiceGarageWhereUniqueInput
  }

  /**
   * ServiceGarage findUniqueOrThrow
   */
  export type ServiceGarageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGarage to fetch.
     */
    where: ServiceGarageWhereUniqueInput
  }

  /**
   * ServiceGarage findFirst
   */
  export type ServiceGarageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGarage to fetch.
     */
    where?: ServiceGarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGarages to fetch.
     */
    orderBy?: ServiceGarageOrderByWithRelationInput | ServiceGarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceGarages.
     */
    cursor?: ServiceGarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGarages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGarages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceGarages.
     */
    distinct?: ServiceGarageScalarFieldEnum | ServiceGarageScalarFieldEnum[]
  }

  /**
   * ServiceGarage findFirstOrThrow
   */
  export type ServiceGarageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGarage to fetch.
     */
    where?: ServiceGarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGarages to fetch.
     */
    orderBy?: ServiceGarageOrderByWithRelationInput | ServiceGarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceGarages.
     */
    cursor?: ServiceGarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGarages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGarages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceGarages.
     */
    distinct?: ServiceGarageScalarFieldEnum | ServiceGarageScalarFieldEnum[]
  }

  /**
   * ServiceGarage findMany
   */
  export type ServiceGarageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGarages to fetch.
     */
    where?: ServiceGarageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGarages to fetch.
     */
    orderBy?: ServiceGarageOrderByWithRelationInput | ServiceGarageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceGarages.
     */
    cursor?: ServiceGarageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGarages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGarages.
     */
    skip?: number
    distinct?: ServiceGarageScalarFieldEnum | ServiceGarageScalarFieldEnum[]
  }

  /**
   * ServiceGarage create
   */
  export type ServiceGarageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceGarage.
     */
    data: XOR<ServiceGarageCreateInput, ServiceGarageUncheckedCreateInput>
  }

  /**
   * ServiceGarage createMany
   */
  export type ServiceGarageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceGarages.
     */
    data: ServiceGarageCreateManyInput | ServiceGarageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceGarage createManyAndReturn
   */
  export type ServiceGarageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceGarages.
     */
    data: ServiceGarageCreateManyInput | ServiceGarageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceGarage update
   */
  export type ServiceGarageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceGarage.
     */
    data: XOR<ServiceGarageUpdateInput, ServiceGarageUncheckedUpdateInput>
    /**
     * Choose, which ServiceGarage to update.
     */
    where: ServiceGarageWhereUniqueInput
  }

  /**
   * ServiceGarage updateMany
   */
  export type ServiceGarageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceGarages.
     */
    data: XOR<ServiceGarageUpdateManyMutationInput, ServiceGarageUncheckedUpdateManyInput>
    /**
     * Filter which ServiceGarages to update
     */
    where?: ServiceGarageWhereInput
  }

  /**
   * ServiceGarage upsert
   */
  export type ServiceGarageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceGarage to update in case it exists.
     */
    where: ServiceGarageWhereUniqueInput
    /**
     * In case the ServiceGarage found by the `where` argument doesn't exist, create a new ServiceGarage with this data.
     */
    create: XOR<ServiceGarageCreateInput, ServiceGarageUncheckedCreateInput>
    /**
     * In case the ServiceGarage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceGarageUpdateInput, ServiceGarageUncheckedUpdateInput>
  }

  /**
   * ServiceGarage delete
   */
  export type ServiceGarageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
    /**
     * Filter which ServiceGarage to delete.
     */
    where: ServiceGarageWhereUniqueInput
  }

  /**
   * ServiceGarage deleteMany
   */
  export type ServiceGarageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceGarages to delete
     */
    where?: ServiceGarageWhereInput
  }

  /**
   * ServiceGarage without action
   */
  export type ServiceGarageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGarage
     */
    select?: ServiceGarageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGarageInclude<ExtArgs> | null
  }


  /**
   * Model ReminderConfig
   */

  export type AggregateReminderConfig = {
    _count: ReminderConfigCountAggregateOutputType | null
    _avg: ReminderConfigAvgAggregateOutputType | null
    _sum: ReminderConfigSumAggregateOutputType | null
    _min: ReminderConfigMinAggregateOutputType | null
    _max: ReminderConfigMaxAggregateOutputType | null
  }

  export type ReminderConfigAvgAggregateOutputType = {
    intervalMonths: number | null
    intervalMileage: number | null
  }

  export type ReminderConfigSumAggregateOutputType = {
    intervalMonths: number | null
    intervalMileage: number | null
  }

  export type ReminderConfigMinAggregateOutputType = {
    id: string | null
    reminderType: $Enums.ReminderType | null
    intervalMonths: number | null
    intervalMileage: number | null
    isActive: boolean | null
    lastTriggeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicleId: string | null
    serviceId: string | null
  }

  export type ReminderConfigMaxAggregateOutputType = {
    id: string | null
    reminderType: $Enums.ReminderType | null
    intervalMonths: number | null
    intervalMileage: number | null
    isActive: boolean | null
    lastTriggeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicleId: string | null
    serviceId: string | null
  }

  export type ReminderConfigCountAggregateOutputType = {
    id: number
    reminderType: number
    intervalMonths: number
    intervalMileage: number
    isActive: number
    lastTriggeredAt: number
    createdAt: number
    updatedAt: number
    vehicleId: number
    serviceId: number
    _all: number
  }


  export type ReminderConfigAvgAggregateInputType = {
    intervalMonths?: true
    intervalMileage?: true
  }

  export type ReminderConfigSumAggregateInputType = {
    intervalMonths?: true
    intervalMileage?: true
  }

  export type ReminderConfigMinAggregateInputType = {
    id?: true
    reminderType?: true
    intervalMonths?: true
    intervalMileage?: true
    isActive?: true
    lastTriggeredAt?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    serviceId?: true
  }

  export type ReminderConfigMaxAggregateInputType = {
    id?: true
    reminderType?: true
    intervalMonths?: true
    intervalMileage?: true
    isActive?: true
    lastTriggeredAt?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    serviceId?: true
  }

  export type ReminderConfigCountAggregateInputType = {
    id?: true
    reminderType?: true
    intervalMonths?: true
    intervalMileage?: true
    isActive?: true
    lastTriggeredAt?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    serviceId?: true
    _all?: true
  }

  export type ReminderConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderConfig to aggregate.
     */
    where?: ReminderConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderConfigs to fetch.
     */
    orderBy?: ReminderConfigOrderByWithRelationInput | ReminderConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReminderConfigs
    **/
    _count?: true | ReminderConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderConfigMaxAggregateInputType
  }

  export type GetReminderConfigAggregateType<T extends ReminderConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateReminderConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminderConfig[P]>
      : GetScalarType<T[P], AggregateReminderConfig[P]>
  }




  export type ReminderConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderConfigWhereInput
    orderBy?: ReminderConfigOrderByWithAggregationInput | ReminderConfigOrderByWithAggregationInput[]
    by: ReminderConfigScalarFieldEnum[] | ReminderConfigScalarFieldEnum
    having?: ReminderConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderConfigCountAggregateInputType | true
    _avg?: ReminderConfigAvgAggregateInputType
    _sum?: ReminderConfigSumAggregateInputType
    _min?: ReminderConfigMinAggregateInputType
    _max?: ReminderConfigMaxAggregateInputType
  }

  export type ReminderConfigGroupByOutputType = {
    id: string
    reminderType: $Enums.ReminderType
    intervalMonths: number | null
    intervalMileage: number | null
    isActive: boolean
    lastTriggeredAt: Date | null
    createdAt: Date
    updatedAt: Date
    vehicleId: string
    serviceId: string | null
    _count: ReminderConfigCountAggregateOutputType | null
    _avg: ReminderConfigAvgAggregateOutputType | null
    _sum: ReminderConfigSumAggregateOutputType | null
    _min: ReminderConfigMinAggregateOutputType | null
    _max: ReminderConfigMaxAggregateOutputType | null
  }

  type GetReminderConfigGroupByPayload<T extends ReminderConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderConfigGroupByOutputType[P]>
        }
      >
    >


  export type ReminderConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reminderType?: boolean
    intervalMonths?: boolean
    intervalMileage?: boolean
    isActive?: boolean
    lastTriggeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    serviceId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | ReminderConfig$serviceArgs<ExtArgs>
    reminders?: boolean | ReminderConfig$remindersArgs<ExtArgs>
    _count?: boolean | ReminderConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminderConfig"]>

  export type ReminderConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reminderType?: boolean
    intervalMonths?: boolean
    intervalMileage?: boolean
    isActive?: boolean
    lastTriggeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    serviceId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | ReminderConfig$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["reminderConfig"]>

  export type ReminderConfigSelectScalar = {
    id?: boolean
    reminderType?: boolean
    intervalMonths?: boolean
    intervalMileage?: boolean
    isActive?: boolean
    lastTriggeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    serviceId?: boolean
  }

  export type ReminderConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | ReminderConfig$serviceArgs<ExtArgs>
    reminders?: boolean | ReminderConfig$remindersArgs<ExtArgs>
    _count?: boolean | ReminderConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReminderConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    service?: boolean | ReminderConfig$serviceArgs<ExtArgs>
  }

  export type $ReminderConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReminderConfig"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reminderType: $Enums.ReminderType
      intervalMonths: number | null
      intervalMileage: number | null
      isActive: boolean
      lastTriggeredAt: Date | null
      createdAt: Date
      updatedAt: Date
      vehicleId: string
      serviceId: string | null
    }, ExtArgs["result"]["reminderConfig"]>
    composites: {}
  }

  type ReminderConfigGetPayload<S extends boolean | null | undefined | ReminderConfigDefaultArgs> = $Result.GetResult<Prisma.$ReminderConfigPayload, S>

  type ReminderConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderConfigCountAggregateInputType | true
    }

  export interface ReminderConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReminderConfig'], meta: { name: 'ReminderConfig' } }
    /**
     * Find zero or one ReminderConfig that matches the filter.
     * @param {ReminderConfigFindUniqueArgs} args - Arguments to find a ReminderConfig
     * @example
     * // Get one ReminderConfig
     * const reminderConfig = await prisma.reminderConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderConfigFindUniqueArgs>(args: SelectSubset<T, ReminderConfigFindUniqueArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReminderConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderConfigFindUniqueOrThrowArgs} args - Arguments to find a ReminderConfig
     * @example
     * // Get one ReminderConfig
     * const reminderConfig = await prisma.reminderConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReminderConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderConfigFindFirstArgs} args - Arguments to find a ReminderConfig
     * @example
     * // Get one ReminderConfig
     * const reminderConfig = await prisma.reminderConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderConfigFindFirstArgs>(args?: SelectSubset<T, ReminderConfigFindFirstArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReminderConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderConfigFindFirstOrThrowArgs} args - Arguments to find a ReminderConfig
     * @example
     * // Get one ReminderConfig
     * const reminderConfig = await prisma.reminderConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReminderConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReminderConfigs
     * const reminderConfigs = await prisma.reminderConfig.findMany()
     * 
     * // Get first 10 ReminderConfigs
     * const reminderConfigs = await prisma.reminderConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderConfigWithIdOnly = await prisma.reminderConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderConfigFindManyArgs>(args?: SelectSubset<T, ReminderConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReminderConfig.
     * @param {ReminderConfigCreateArgs} args - Arguments to create a ReminderConfig.
     * @example
     * // Create one ReminderConfig
     * const ReminderConfig = await prisma.reminderConfig.create({
     *   data: {
     *     // ... data to create a ReminderConfig
     *   }
     * })
     * 
     */
    create<T extends ReminderConfigCreateArgs>(args: SelectSubset<T, ReminderConfigCreateArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReminderConfigs.
     * @param {ReminderConfigCreateManyArgs} args - Arguments to create many ReminderConfigs.
     * @example
     * // Create many ReminderConfigs
     * const reminderConfig = await prisma.reminderConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderConfigCreateManyArgs>(args?: SelectSubset<T, ReminderConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReminderConfigs and returns the data saved in the database.
     * @param {ReminderConfigCreateManyAndReturnArgs} args - Arguments to create many ReminderConfigs.
     * @example
     * // Create many ReminderConfigs
     * const reminderConfig = await prisma.reminderConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReminderConfigs and only return the `id`
     * const reminderConfigWithIdOnly = await prisma.reminderConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReminderConfig.
     * @param {ReminderConfigDeleteArgs} args - Arguments to delete one ReminderConfig.
     * @example
     * // Delete one ReminderConfig
     * const ReminderConfig = await prisma.reminderConfig.delete({
     *   where: {
     *     // ... filter to delete one ReminderConfig
     *   }
     * })
     * 
     */
    delete<T extends ReminderConfigDeleteArgs>(args: SelectSubset<T, ReminderConfigDeleteArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReminderConfig.
     * @param {ReminderConfigUpdateArgs} args - Arguments to update one ReminderConfig.
     * @example
     * // Update one ReminderConfig
     * const reminderConfig = await prisma.reminderConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderConfigUpdateArgs>(args: SelectSubset<T, ReminderConfigUpdateArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReminderConfigs.
     * @param {ReminderConfigDeleteManyArgs} args - Arguments to filter ReminderConfigs to delete.
     * @example
     * // Delete a few ReminderConfigs
     * const { count } = await prisma.reminderConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderConfigDeleteManyArgs>(args?: SelectSubset<T, ReminderConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReminderConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReminderConfigs
     * const reminderConfig = await prisma.reminderConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderConfigUpdateManyArgs>(args: SelectSubset<T, ReminderConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReminderConfig.
     * @param {ReminderConfigUpsertArgs} args - Arguments to update or create a ReminderConfig.
     * @example
     * // Update or create a ReminderConfig
     * const reminderConfig = await prisma.reminderConfig.upsert({
     *   create: {
     *     // ... data to create a ReminderConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReminderConfig we want to update
     *   }
     * })
     */
    upsert<T extends ReminderConfigUpsertArgs>(args: SelectSubset<T, ReminderConfigUpsertArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReminderConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderConfigCountArgs} args - Arguments to filter ReminderConfigs to count.
     * @example
     * // Count the number of ReminderConfigs
     * const count = await prisma.reminderConfig.count({
     *   where: {
     *     // ... the filter for the ReminderConfigs we want to count
     *   }
     * })
    **/
    count<T extends ReminderConfigCountArgs>(
      args?: Subset<T, ReminderConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReminderConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderConfigAggregateArgs>(args: Subset<T, ReminderConfigAggregateArgs>): Prisma.PrismaPromise<GetReminderConfigAggregateType<T>>

    /**
     * Group by ReminderConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderConfigGroupByArgs} args - Group by arguments.
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
      T extends ReminderConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderConfigGroupByArgs['orderBy'] }
        : { orderBy?: ReminderConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReminderConfig model
   */
  readonly fields: ReminderConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReminderConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    service<T extends ReminderConfig$serviceArgs<ExtArgs> = {}>(args?: Subset<T, ReminderConfig$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    reminders<T extends ReminderConfig$remindersArgs<ExtArgs> = {}>(args?: Subset<T, ReminderConfig$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReminderConfig model
   */ 
  interface ReminderConfigFieldRefs {
    readonly id: FieldRef<"ReminderConfig", 'String'>
    readonly reminderType: FieldRef<"ReminderConfig", 'ReminderType'>
    readonly intervalMonths: FieldRef<"ReminderConfig", 'Int'>
    readonly intervalMileage: FieldRef<"ReminderConfig", 'Int'>
    readonly isActive: FieldRef<"ReminderConfig", 'Boolean'>
    readonly lastTriggeredAt: FieldRef<"ReminderConfig", 'DateTime'>
    readonly createdAt: FieldRef<"ReminderConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"ReminderConfig", 'DateTime'>
    readonly vehicleId: FieldRef<"ReminderConfig", 'String'>
    readonly serviceId: FieldRef<"ReminderConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReminderConfig findUnique
   */
  export type ReminderConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * Filter, which ReminderConfig to fetch.
     */
    where: ReminderConfigWhereUniqueInput
  }

  /**
   * ReminderConfig findUniqueOrThrow
   */
  export type ReminderConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * Filter, which ReminderConfig to fetch.
     */
    where: ReminderConfigWhereUniqueInput
  }

  /**
   * ReminderConfig findFirst
   */
  export type ReminderConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * Filter, which ReminderConfig to fetch.
     */
    where?: ReminderConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderConfigs to fetch.
     */
    orderBy?: ReminderConfigOrderByWithRelationInput | ReminderConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderConfigs.
     */
    cursor?: ReminderConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderConfigs.
     */
    distinct?: ReminderConfigScalarFieldEnum | ReminderConfigScalarFieldEnum[]
  }

  /**
   * ReminderConfig findFirstOrThrow
   */
  export type ReminderConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * Filter, which ReminderConfig to fetch.
     */
    where?: ReminderConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderConfigs to fetch.
     */
    orderBy?: ReminderConfigOrderByWithRelationInput | ReminderConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderConfigs.
     */
    cursor?: ReminderConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderConfigs.
     */
    distinct?: ReminderConfigScalarFieldEnum | ReminderConfigScalarFieldEnum[]
  }

  /**
   * ReminderConfig findMany
   */
  export type ReminderConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * Filter, which ReminderConfigs to fetch.
     */
    where?: ReminderConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderConfigs to fetch.
     */
    orderBy?: ReminderConfigOrderByWithRelationInput | ReminderConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReminderConfigs.
     */
    cursor?: ReminderConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderConfigs.
     */
    skip?: number
    distinct?: ReminderConfigScalarFieldEnum | ReminderConfigScalarFieldEnum[]
  }

  /**
   * ReminderConfig create
   */
  export type ReminderConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a ReminderConfig.
     */
    data: XOR<ReminderConfigCreateInput, ReminderConfigUncheckedCreateInput>
  }

  /**
   * ReminderConfig createMany
   */
  export type ReminderConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReminderConfigs.
     */
    data: ReminderConfigCreateManyInput | ReminderConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReminderConfig createManyAndReturn
   */
  export type ReminderConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReminderConfigs.
     */
    data: ReminderConfigCreateManyInput | ReminderConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReminderConfig update
   */
  export type ReminderConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a ReminderConfig.
     */
    data: XOR<ReminderConfigUpdateInput, ReminderConfigUncheckedUpdateInput>
    /**
     * Choose, which ReminderConfig to update.
     */
    where: ReminderConfigWhereUniqueInput
  }

  /**
   * ReminderConfig updateMany
   */
  export type ReminderConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReminderConfigs.
     */
    data: XOR<ReminderConfigUpdateManyMutationInput, ReminderConfigUncheckedUpdateManyInput>
    /**
     * Filter which ReminderConfigs to update
     */
    where?: ReminderConfigWhereInput
  }

  /**
   * ReminderConfig upsert
   */
  export type ReminderConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the ReminderConfig to update in case it exists.
     */
    where: ReminderConfigWhereUniqueInput
    /**
     * In case the ReminderConfig found by the `where` argument doesn't exist, create a new ReminderConfig with this data.
     */
    create: XOR<ReminderConfigCreateInput, ReminderConfigUncheckedCreateInput>
    /**
     * In case the ReminderConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderConfigUpdateInput, ReminderConfigUncheckedUpdateInput>
  }

  /**
   * ReminderConfig delete
   */
  export type ReminderConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
    /**
     * Filter which ReminderConfig to delete.
     */
    where: ReminderConfigWhereUniqueInput
  }

  /**
   * ReminderConfig deleteMany
   */
  export type ReminderConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderConfigs to delete
     */
    where?: ReminderConfigWhereInput
  }

  /**
   * ReminderConfig.service
   */
  export type ReminderConfig$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * ReminderConfig.reminders
   */
  export type ReminderConfig$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * ReminderConfig without action
   */
  export type ReminderConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderConfig
     */
    select?: ReminderConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderConfigInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    dueDate: Date | null
    isRead: boolean | null
    isDismissed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    reminderConfigId: string | null
    notificationId: string | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    dueDate: Date | null
    isRead: boolean | null
    isDismissed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    reminderConfigId: string | null
    notificationId: string | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    title: number
    message: number
    dueDate: number
    isRead: number
    isDismissed: number
    createdAt: number
    updatedAt: number
    reminderConfigId: number
    notificationId: number
    _all: number
  }


  export type ReminderMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    dueDate?: true
    isRead?: true
    isDismissed?: true
    createdAt?: true
    updatedAt?: true
    reminderConfigId?: true
    notificationId?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    dueDate?: true
    isRead?: true
    isDismissed?: true
    createdAt?: true
    updatedAt?: true
    reminderConfigId?: true
    notificationId?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    dueDate?: true
    isRead?: true
    isDismissed?: true
    createdAt?: true
    updatedAt?: true
    reminderConfigId?: true
    notificationId?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: string
    title: string
    message: string
    dueDate: Date
    isRead: boolean
    isDismissed: boolean
    createdAt: Date
    updatedAt: Date
    reminderConfigId: string
    notificationId: string | null
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    dueDate?: boolean
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reminderConfigId?: boolean
    notificationId?: boolean
    reminderConfig?: boolean | ReminderConfigDefaultArgs<ExtArgs>
    notification?: boolean | Reminder$notificationArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    dueDate?: boolean
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reminderConfigId?: boolean
    notificationId?: boolean
    reminderConfig?: boolean | ReminderConfigDefaultArgs<ExtArgs>
    notification?: boolean | Reminder$notificationArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    dueDate?: boolean
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reminderConfigId?: boolean
    notificationId?: boolean
  }

  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminderConfig?: boolean | ReminderConfigDefaultArgs<ExtArgs>
    notification?: boolean | Reminder$notificationArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminderConfig?: boolean | ReminderConfigDefaultArgs<ExtArgs>
    notification?: boolean | Reminder$notificationArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      reminderConfig: Prisma.$ReminderConfigPayload<ExtArgs>
      notification: Prisma.$NotificationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      dueDate: Date
      isRead: boolean
      isDismissed: boolean
      createdAt: Date
      updatedAt: Date
      reminderConfigId: string
      notificationId: string | null
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
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
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reminderConfig<T extends ReminderConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReminderConfigDefaultArgs<ExtArgs>>): Prisma__ReminderConfigClient<$Result.GetResult<Prisma.$ReminderConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    notification<T extends Reminder$notificationArgs<ExtArgs> = {}>(args?: Subset<T, Reminder$notificationArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminder model
   */ 
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'String'>
    readonly title: FieldRef<"Reminder", 'String'>
    readonly message: FieldRef<"Reminder", 'String'>
    readonly dueDate: FieldRef<"Reminder", 'DateTime'>
    readonly isRead: FieldRef<"Reminder", 'Boolean'>
    readonly isDismissed: FieldRef<"Reminder", 'Boolean'>
    readonly createdAt: FieldRef<"Reminder", 'DateTime'>
    readonly updatedAt: FieldRef<"Reminder", 'DateTime'>
    readonly reminderConfigId: FieldRef<"Reminder", 'String'>
    readonly notificationId: FieldRef<"Reminder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder.notification
   */
  export type Reminder$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    message: number
    isRead: number
    createdAt: number
    userId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    userId: string
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reminders?: boolean | Notification$remindersArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reminders?: boolean | Notification$remindersArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      title: string
      message: string
      isRead: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reminders<T extends Notification$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Notification$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly userId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification.reminders
   */
  export type Notification$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    totalPrice: number | null
    duration: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    totalPrice: number | null
    duration: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    vehicleId: string | null
    garageId: string | null
    totalPrice: number | null
    duration: number | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    vehicleId: string | null
    garageId: string | null
    totalPrice: number | null
    duration: number | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    date: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    vehicleId: number
    garageId: number
    serviceIds: number
    totalPrice: number
    duration: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    totalPrice?: true
    duration?: true
  }

  export type AppointmentSumAggregateInputType = {
    totalPrice?: true
    duration?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    vehicleId?: true
    garageId?: true
    totalPrice?: true
    duration?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    vehicleId?: true
    garageId?: true
    totalPrice?: true
    duration?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    vehicleId?: true
    garageId?: true
    serviceIds?: true
    totalPrice?: true
    duration?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    date: Date
    status: $Enums.AppointmentStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    vehicleId: string
    garageId: string
    serviceIds: string[]
    totalPrice: number
    duration: number
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    vehicleId?: boolean
    garageId?: boolean
    serviceIds?: boolean
    totalPrice?: boolean
    duration?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    vehicleId?: boolean
    garageId?: boolean
    serviceIds?: boolean
    totalPrice?: boolean
    duration?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    vehicleId?: boolean
    garageId?: boolean
    serviceIds?: boolean
    totalPrice?: boolean
    duration?: boolean
  }

  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    garage?: boolean | GarageDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      garage: Prisma.$GaragePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      status: $Enums.AppointmentStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      vehicleId: string
      garageId: string
      serviceIds: string[]
      totalPrice: number
      duration: number
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    garage<T extends GarageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GarageDefaultArgs<ExtArgs>>): Prisma__GarageClient<$Result.GetResult<Prisma.$GaragePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */ 
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly userId: FieldRef<"Appointment", 'String'>
    readonly vehicleId: FieldRef<"Appointment", 'String'>
    readonly garageId: FieldRef<"Appointment", 'String'>
    readonly serviceIds: FieldRef<"Appointment", 'String[]'>
    readonly totalPrice: FieldRef<"Appointment", 'Float'>
    readonly duration: FieldRef<"Appointment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GarageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    latitude: 'latitude',
    longitude: 'longitude',
    phone: 'phone',
    email: 'email',
    website: 'website',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GarageScalarFieldEnum = (typeof GarageScalarFieldEnum)[keyof typeof GarageScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    garageId: 'garageId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    year: 'year',
    licensePlate: 'licensePlate',
    vin: 'vin',
    currentMileage: 'currentMileage',
    fuelType: 'fuelType',
    photoUrl: 'photoUrl',
    purchaseDate: 'purchaseDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    mileage: 'mileage',
    date: 'date',
    cost: 'cost',
    invoiceUrl: 'invoiceUrl',
    photoUrls: 'photoUrls',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    vehicleId: 'vehicleId',
    serviceId: 'serviceId'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceGarageScalarFieldEnum: {
    id: 'id',
    price: 'price',
    duration: 'duration',
    serviceId: 'serviceId',
    garageId: 'garageId'
  };

  export type ServiceGarageScalarFieldEnum = (typeof ServiceGarageScalarFieldEnum)[keyof typeof ServiceGarageScalarFieldEnum]


  export const ReminderConfigScalarFieldEnum: {
    id: 'id',
    reminderType: 'reminderType',
    intervalMonths: 'intervalMonths',
    intervalMileage: 'intervalMileage',
    isActive: 'isActive',
    lastTriggeredAt: 'lastTriggeredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    vehicleId: 'vehicleId',
    serviceId: 'serviceId'
  };

  export type ReminderConfigScalarFieldEnum = (typeof ReminderConfigScalarFieldEnum)[keyof typeof ReminderConfigScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    dueDate: 'dueDate',
    isRead: 'isRead',
    isDismissed: 'isDismissed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reminderConfigId: 'reminderConfigId',
    notificationId: 'notificationId'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    vehicleId: 'vehicleId',
    garageId: 'garageId',
    serviceIds: 'serviceIds',
    totalPrice: 'totalPrice',
    duration: 'duration'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ReminderType'
   */
  export type EnumReminderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReminderType'>
    


  /**
   * Reference to a field of type 'ReminderType[]'
   */
  export type ListEnumReminderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReminderType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    appointments?: AppointmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    appointments?: AppointmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GarageWhereInput = {
    AND?: GarageWhereInput | GarageWhereInput[]
    OR?: GarageWhereInput[]
    NOT?: GarageWhereInput | GarageWhereInput[]
    id?: StringFilter<"Garage"> | string
    name?: StringFilter<"Garage"> | string
    address?: StringFilter<"Garage"> | string
    city?: StringFilter<"Garage"> | string
    postalCode?: StringFilter<"Garage"> | string
    latitude?: FloatNullableFilter<"Garage"> | number | null
    longitude?: FloatNullableFilter<"Garage"> | number | null
    phone?: StringFilter<"Garage"> | string
    email?: StringFilter<"Garage"> | string
    website?: StringNullableFilter<"Garage"> | string | null
    description?: StringNullableFilter<"Garage"> | string | null
    createdAt?: DateTimeFilter<"Garage"> | Date | string
    updatedAt?: DateTimeFilter<"Garage"> | Date | string
    services?: ServiceGarageListRelationFilter
    appointments?: AppointmentListRelationFilter
    employees?: EmployeeListRelationFilter
  }

  export type GarageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServiceGarageOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type GarageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: GarageWhereInput | GarageWhereInput[]
    OR?: GarageWhereInput[]
    NOT?: GarageWhereInput | GarageWhereInput[]
    name?: StringFilter<"Garage"> | string
    address?: StringFilter<"Garage"> | string
    city?: StringFilter<"Garage"> | string
    postalCode?: StringFilter<"Garage"> | string
    latitude?: FloatNullableFilter<"Garage"> | number | null
    longitude?: FloatNullableFilter<"Garage"> | number | null
    phone?: StringFilter<"Garage"> | string
    website?: StringNullableFilter<"Garage"> | string | null
    description?: StringNullableFilter<"Garage"> | string | null
    createdAt?: DateTimeFilter<"Garage"> | Date | string
    updatedAt?: DateTimeFilter<"Garage"> | Date | string
    services?: ServiceGarageListRelationFilter
    appointments?: AppointmentListRelationFilter
    employees?: EmployeeListRelationFilter
  }, "id" | "email">

  export type GarageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GarageCountOrderByAggregateInput
    _avg?: GarageAvgOrderByAggregateInput
    _max?: GarageMaxOrderByAggregateInput
    _min?: GarageMinOrderByAggregateInput
    _sum?: GarageSumOrderByAggregateInput
  }

  export type GarageScalarWhereWithAggregatesInput = {
    AND?: GarageScalarWhereWithAggregatesInput | GarageScalarWhereWithAggregatesInput[]
    OR?: GarageScalarWhereWithAggregatesInput[]
    NOT?: GarageScalarWhereWithAggregatesInput | GarageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Garage"> | string
    name?: StringWithAggregatesFilter<"Garage"> | string
    address?: StringWithAggregatesFilter<"Garage"> | string
    city?: StringWithAggregatesFilter<"Garage"> | string
    postalCode?: StringWithAggregatesFilter<"Garage"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Garage"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Garage"> | number | null
    phone?: StringWithAggregatesFilter<"Garage"> | string
    email?: StringWithAggregatesFilter<"Garage"> | string
    website?: StringNullableWithAggregatesFilter<"Garage"> | string | null
    description?: StringNullableWithAggregatesFilter<"Garage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Garage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Garage"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    garageId?: StringFilter<"Employee"> | string
    garage?: XOR<GarageRelationFilter, GarageWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    garageId?: SortOrder
    garage?: GarageOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    garageId?: StringFilter<"Employee"> | string
    garage?: XOR<GarageRelationFilter, GarageWhereInput>
  }, "id" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    garageId?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    role?: EnumRoleWithAggregatesFilter<"Employee"> | $Enums.Role
    garageId?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    licensePlate?: StringFilter<"Vehicle"> | string
    vin?: StringNullableFilter<"Vehicle"> | string | null
    currentMileage?: IntFilter<"Vehicle"> | number
    fuelType?: StringNullableFilter<"Vehicle"> | string | null
    photoUrl?: StringNullableFilter<"Vehicle"> | string | null
    purchaseDate?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    userId?: StringFilter<"Vehicle"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    maintenances?: MaintenanceListRelationFilter
    appointments?: AppointmentListRelationFilter
    reminderConfigs?: ReminderConfigListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    licensePlate?: SortOrder
    vin?: SortOrderInput | SortOrder
    currentMileage?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    reminderConfigs?: ReminderConfigOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licensePlate?: string
    vin?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    currentMileage?: IntFilter<"Vehicle"> | number
    fuelType?: StringNullableFilter<"Vehicle"> | string | null
    photoUrl?: StringNullableFilter<"Vehicle"> | string | null
    purchaseDate?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    userId?: StringFilter<"Vehicle"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    maintenances?: MaintenanceListRelationFilter
    appointments?: AppointmentListRelationFilter
    reminderConfigs?: ReminderConfigListRelationFilter
  }, "id" | "licensePlate" | "vin">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    licensePlate?: SortOrder
    vin?: SortOrderInput | SortOrder
    currentMileage?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    licensePlate?: StringWithAggregatesFilter<"Vehicle"> | string
    vin?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    currentMileage?: IntWithAggregatesFilter<"Vehicle"> | number
    fuelType?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    userId?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type MaintenanceWhereInput = {
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    title?: StringFilter<"Maintenance"> | string
    description?: StringNullableFilter<"Maintenance"> | string | null
    mileage?: IntFilter<"Maintenance"> | number
    date?: DateTimeFilter<"Maintenance"> | Date | string
    cost?: FloatFilter<"Maintenance"> | number
    invoiceUrl?: StringNullableFilter<"Maintenance"> | string | null
    photoUrls?: StringNullableListFilter<"Maintenance">
    notes?: StringNullableFilter<"Maintenance"> | string | null
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"Maintenance"> | Date | string
    vehicleId?: StringFilter<"Maintenance"> | string
    serviceId?: StringNullableFilter<"Maintenance"> | string | null
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
  }

  export type MaintenanceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    mileage?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    photoUrls?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type MaintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    title?: StringFilter<"Maintenance"> | string
    description?: StringNullableFilter<"Maintenance"> | string | null
    mileage?: IntFilter<"Maintenance"> | number
    date?: DateTimeFilter<"Maintenance"> | Date | string
    cost?: FloatFilter<"Maintenance"> | number
    invoiceUrl?: StringNullableFilter<"Maintenance"> | string | null
    photoUrls?: StringNullableListFilter<"Maintenance">
    notes?: StringNullableFilter<"Maintenance"> | string | null
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"Maintenance"> | Date | string
    vehicleId?: StringFilter<"Maintenance"> | string
    serviceId?: StringNullableFilter<"Maintenance"> | string | null
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
  }, "id">

  export type MaintenanceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    mileage?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    photoUrls?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    _count?: MaintenanceCountOrderByAggregateInput
    _avg?: MaintenanceAvgOrderByAggregateInput
    _max?: MaintenanceMaxOrderByAggregateInput
    _min?: MaintenanceMinOrderByAggregateInput
    _sum?: MaintenanceSumOrderByAggregateInput
  }

  export type MaintenanceScalarWhereWithAggregatesInput = {
    AND?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    OR?: MaintenanceScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Maintenance"> | string
    title?: StringWithAggregatesFilter<"Maintenance"> | string
    description?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
    mileage?: IntWithAggregatesFilter<"Maintenance"> | number
    date?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    cost?: FloatWithAggregatesFilter<"Maintenance"> | number
    invoiceUrl?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
    photoUrls?: StringNullableListFilter<"Maintenance">
    notes?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    vehicleId?: StringWithAggregatesFilter<"Maintenance"> | string
    serviceId?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    category?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    maintenances?: MaintenanceListRelationFilter
    serviceGarages?: ServiceGarageListRelationFilter
    reminderConfigs?: ReminderConfigListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenances?: MaintenanceOrderByRelationAggregateInput
    serviceGarages?: ServiceGarageOrderByRelationAggregateInput
    reminderConfigs?: ReminderConfigOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    category?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    maintenances?: MaintenanceListRelationFilter
    serviceGarages?: ServiceGarageListRelationFilter
    reminderConfigs?: ReminderConfigListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    category?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ServiceGarageWhereInput = {
    AND?: ServiceGarageWhereInput | ServiceGarageWhereInput[]
    OR?: ServiceGarageWhereInput[]
    NOT?: ServiceGarageWhereInput | ServiceGarageWhereInput[]
    id?: StringFilter<"ServiceGarage"> | string
    price?: FloatFilter<"ServiceGarage"> | number
    duration?: IntFilter<"ServiceGarage"> | number
    serviceId?: StringFilter<"ServiceGarage"> | string
    garageId?: StringFilter<"ServiceGarage"> | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    garage?: XOR<GarageRelationFilter, GarageWhereInput>
  }

  export type ServiceGarageOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    serviceId?: SortOrder
    garageId?: SortOrder
    service?: ServiceOrderByWithRelationInput
    garage?: GarageOrderByWithRelationInput
  }

  export type ServiceGarageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId_garageId?: ServiceGarageServiceIdGarageIdCompoundUniqueInput
    AND?: ServiceGarageWhereInput | ServiceGarageWhereInput[]
    OR?: ServiceGarageWhereInput[]
    NOT?: ServiceGarageWhereInput | ServiceGarageWhereInput[]
    price?: FloatFilter<"ServiceGarage"> | number
    duration?: IntFilter<"ServiceGarage"> | number
    serviceId?: StringFilter<"ServiceGarage"> | string
    garageId?: StringFilter<"ServiceGarage"> | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    garage?: XOR<GarageRelationFilter, GarageWhereInput>
  }, "id" | "serviceId_garageId">

  export type ServiceGarageOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    serviceId?: SortOrder
    garageId?: SortOrder
    _count?: ServiceGarageCountOrderByAggregateInput
    _avg?: ServiceGarageAvgOrderByAggregateInput
    _max?: ServiceGarageMaxOrderByAggregateInput
    _min?: ServiceGarageMinOrderByAggregateInput
    _sum?: ServiceGarageSumOrderByAggregateInput
  }

  export type ServiceGarageScalarWhereWithAggregatesInput = {
    AND?: ServiceGarageScalarWhereWithAggregatesInput | ServiceGarageScalarWhereWithAggregatesInput[]
    OR?: ServiceGarageScalarWhereWithAggregatesInput[]
    NOT?: ServiceGarageScalarWhereWithAggregatesInput | ServiceGarageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceGarage"> | string
    price?: FloatWithAggregatesFilter<"ServiceGarage"> | number
    duration?: IntWithAggregatesFilter<"ServiceGarage"> | number
    serviceId?: StringWithAggregatesFilter<"ServiceGarage"> | string
    garageId?: StringWithAggregatesFilter<"ServiceGarage"> | string
  }

  export type ReminderConfigWhereInput = {
    AND?: ReminderConfigWhereInput | ReminderConfigWhereInput[]
    OR?: ReminderConfigWhereInput[]
    NOT?: ReminderConfigWhereInput | ReminderConfigWhereInput[]
    id?: StringFilter<"ReminderConfig"> | string
    reminderType?: EnumReminderTypeFilter<"ReminderConfig"> | $Enums.ReminderType
    intervalMonths?: IntNullableFilter<"ReminderConfig"> | number | null
    intervalMileage?: IntNullableFilter<"ReminderConfig"> | number | null
    isActive?: BoolFilter<"ReminderConfig"> | boolean
    lastTriggeredAt?: DateTimeNullableFilter<"ReminderConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"ReminderConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ReminderConfig"> | Date | string
    vehicleId?: StringFilter<"ReminderConfig"> | string
    serviceId?: StringNullableFilter<"ReminderConfig"> | string | null
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
    reminders?: ReminderListRelationFilter
  }

  export type ReminderConfigOrderByWithRelationInput = {
    id?: SortOrder
    reminderType?: SortOrder
    intervalMonths?: SortOrderInput | SortOrder
    intervalMileage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastTriggeredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type ReminderConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderConfigWhereInput | ReminderConfigWhereInput[]
    OR?: ReminderConfigWhereInput[]
    NOT?: ReminderConfigWhereInput | ReminderConfigWhereInput[]
    reminderType?: EnumReminderTypeFilter<"ReminderConfig"> | $Enums.ReminderType
    intervalMonths?: IntNullableFilter<"ReminderConfig"> | number | null
    intervalMileage?: IntNullableFilter<"ReminderConfig"> | number | null
    isActive?: BoolFilter<"ReminderConfig"> | boolean
    lastTriggeredAt?: DateTimeNullableFilter<"ReminderConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"ReminderConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ReminderConfig"> | Date | string
    vehicleId?: StringFilter<"ReminderConfig"> | string
    serviceId?: StringNullableFilter<"ReminderConfig"> | string | null
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
    reminders?: ReminderListRelationFilter
  }, "id">

  export type ReminderConfigOrderByWithAggregationInput = {
    id?: SortOrder
    reminderType?: SortOrder
    intervalMonths?: SortOrderInput | SortOrder
    intervalMileage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastTriggeredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    _count?: ReminderConfigCountOrderByAggregateInput
    _avg?: ReminderConfigAvgOrderByAggregateInput
    _max?: ReminderConfigMaxOrderByAggregateInput
    _min?: ReminderConfigMinOrderByAggregateInput
    _sum?: ReminderConfigSumOrderByAggregateInput
  }

  export type ReminderConfigScalarWhereWithAggregatesInput = {
    AND?: ReminderConfigScalarWhereWithAggregatesInput | ReminderConfigScalarWhereWithAggregatesInput[]
    OR?: ReminderConfigScalarWhereWithAggregatesInput[]
    NOT?: ReminderConfigScalarWhereWithAggregatesInput | ReminderConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReminderConfig"> | string
    reminderType?: EnumReminderTypeWithAggregatesFilter<"ReminderConfig"> | $Enums.ReminderType
    intervalMonths?: IntNullableWithAggregatesFilter<"ReminderConfig"> | number | null
    intervalMileage?: IntNullableWithAggregatesFilter<"ReminderConfig"> | number | null
    isActive?: BoolWithAggregatesFilter<"ReminderConfig"> | boolean
    lastTriggeredAt?: DateTimeNullableWithAggregatesFilter<"ReminderConfig"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReminderConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReminderConfig"> | Date | string
    vehicleId?: StringWithAggregatesFilter<"ReminderConfig"> | string
    serviceId?: StringNullableWithAggregatesFilter<"ReminderConfig"> | string | null
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: StringFilter<"Reminder"> | string
    title?: StringFilter<"Reminder"> | string
    message?: StringFilter<"Reminder"> | string
    dueDate?: DateTimeFilter<"Reminder"> | Date | string
    isRead?: BoolFilter<"Reminder"> | boolean
    isDismissed?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
    reminderConfigId?: StringFilter<"Reminder"> | string
    notificationId?: StringNullableFilter<"Reminder"> | string | null
    reminderConfig?: XOR<ReminderConfigRelationFilter, ReminderConfigWhereInput>
    notification?: XOR<NotificationNullableRelationFilter, NotificationWhereInput> | null
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    dueDate?: SortOrder
    isRead?: SortOrder
    isDismissed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reminderConfigId?: SortOrder
    notificationId?: SortOrderInput | SortOrder
    reminderConfig?: ReminderConfigOrderByWithRelationInput
    notification?: NotificationOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    title?: StringFilter<"Reminder"> | string
    message?: StringFilter<"Reminder"> | string
    dueDate?: DateTimeFilter<"Reminder"> | Date | string
    isRead?: BoolFilter<"Reminder"> | boolean
    isDismissed?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
    reminderConfigId?: StringFilter<"Reminder"> | string
    notificationId?: StringNullableFilter<"Reminder"> | string | null
    reminderConfig?: XOR<ReminderConfigRelationFilter, ReminderConfigWhereInput>
    notification?: XOR<NotificationNullableRelationFilter, NotificationWhereInput> | null
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    dueDate?: SortOrder
    isRead?: SortOrder
    isDismissed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reminderConfigId?: SortOrder
    notificationId?: SortOrderInput | SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminder"> | string
    title?: StringWithAggregatesFilter<"Reminder"> | string
    message?: StringWithAggregatesFilter<"Reminder"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    isRead?: BoolWithAggregatesFilter<"Reminder"> | boolean
    isDismissed?: BoolWithAggregatesFilter<"Reminder"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    reminderConfigId?: StringWithAggregatesFilter<"Reminder"> | string
    notificationId?: StringNullableWithAggregatesFilter<"Reminder"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: StringFilter<"Notification"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reminders?: ReminderListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: StringFilter<"Notification"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reminders?: ReminderListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    userId?: StringFilter<"Appointment"> | string
    vehicleId?: StringFilter<"Appointment"> | string
    garageId?: StringFilter<"Appointment"> | string
    serviceIds?: StringNullableListFilter<"Appointment">
    totalPrice?: FloatFilter<"Appointment"> | number
    duration?: IntFilter<"Appointment"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    garage?: XOR<GarageRelationFilter, GarageWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    garageId?: SortOrder
    serviceIds?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
    user?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    garage?: GarageOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    userId?: StringFilter<"Appointment"> | string
    vehicleId?: StringFilter<"Appointment"> | string
    garageId?: StringFilter<"Appointment"> | string
    serviceIds?: StringNullableListFilter<"Appointment">
    totalPrice?: FloatFilter<"Appointment"> | number
    duration?: IntFilter<"Appointment"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    garage?: XOR<GarageRelationFilter, GarageWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    garageId?: SortOrder
    serviceIds?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    userId?: StringWithAggregatesFilter<"Appointment"> | string
    vehicleId?: StringWithAggregatesFilter<"Appointment"> | string
    garageId?: StringWithAggregatesFilter<"Appointment"> | string
    serviceIds?: StringNullableListFilter<"Appointment">
    totalPrice?: FloatWithAggregatesFilter<"Appointment"> | number
    duration?: IntWithAggregatesFilter<"Appointment"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarageCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceGarageCreateNestedManyWithoutGarageInput
    appointments?: AppointmentCreateNestedManyWithoutGarageInput
    employees?: EmployeeCreateNestedManyWithoutGarageInput
  }

  export type GarageUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceGarageUncheckedCreateNestedManyWithoutGarageInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutGarageInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutGarageInput
  }

  export type GarageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceGarageUpdateManyWithoutGarageNestedInput
    appointments?: AppointmentUpdateManyWithoutGarageNestedInput
    employees?: EmployeeUpdateManyWithoutGarageNestedInput
  }

  export type GarageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceGarageUncheckedUpdateManyWithoutGarageNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutGarageNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutGarageNestedInput
  }

  export type GarageCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GarageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GarageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    garage: GarageCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    garageId: string
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    garage?: GarageUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    garageId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    garageId: string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    garageId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
    appointments?: AppointmentCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
    appointments?: AppointmentUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceCreateInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenancesInput
    service?: ServiceCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    serviceId?: string | null
  }

  export type MaintenanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenancesNestedInput
    service?: ServiceUpdateOneWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    serviceId?: string | null
  }

  export type MaintenanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceCreateNestedManyWithoutServiceInput
    serviceGarages?: ServiceGarageCreateNestedManyWithoutServiceInput
    reminderConfigs?: ReminderConfigCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutServiceInput
    serviceGarages?: ServiceGarageUncheckedCreateNestedManyWithoutServiceInput
    reminderConfigs?: ReminderConfigUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUpdateManyWithoutServiceNestedInput
    serviceGarages?: ServiceGarageUpdateManyWithoutServiceNestedInput
    reminderConfigs?: ReminderConfigUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutServiceNestedInput
    serviceGarages?: ServiceGarageUncheckedUpdateManyWithoutServiceNestedInput
    reminderConfigs?: ReminderConfigUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceGarageCreateInput = {
    id?: string
    price: number
    duration: number
    service: ServiceCreateNestedOneWithoutServiceGaragesInput
    garage: GarageCreateNestedOneWithoutServicesInput
  }

  export type ServiceGarageUncheckedCreateInput = {
    id?: string
    price: number
    duration: number
    serviceId: string
    garageId: string
  }

  export type ServiceGarageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    service?: ServiceUpdateOneRequiredWithoutServiceGaragesNestedInput
    garage?: GarageUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceGarageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceGarageCreateManyInput = {
    id?: string
    price: number
    duration: number
    serviceId: string
    garageId: string
  }

  export type ServiceGarageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceGarageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderConfigCreateInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutReminderConfigsInput
    service?: ServiceCreateNestedOneWithoutReminderConfigsInput
    reminders?: ReminderCreateNestedManyWithoutReminderConfigInput
  }

  export type ReminderConfigUncheckedCreateInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    serviceId?: string | null
    reminders?: ReminderUncheckedCreateNestedManyWithoutReminderConfigInput
  }

  export type ReminderConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutReminderConfigsNestedInput
    service?: ServiceUpdateOneWithoutReminderConfigsNestedInput
    reminders?: ReminderUpdateManyWithoutReminderConfigNestedInput
  }

  export type ReminderConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    reminders?: ReminderUncheckedUpdateManyWithoutReminderConfigNestedInput
  }

  export type ReminderConfigCreateManyInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    serviceId?: string | null
  }

  export type ReminderConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderCreateInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reminderConfig: ReminderConfigCreateNestedOneWithoutRemindersInput
    notification?: NotificationCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reminderConfigId: string
    notificationId?: string | null
  }

  export type ReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderConfig?: ReminderConfigUpdateOneRequiredWithoutRemindersNestedInput
    notification?: NotificationUpdateOneWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderConfigId?: StringFieldUpdateOperationsInput | string
    notificationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderCreateManyInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reminderConfigId: string
    notificationId?: string | null
  }

  export type ReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderConfigId?: StringFieldUpdateOperationsInput | string
    notificationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    reminders?: ReminderCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    userId: string
    reminders?: ReminderUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    reminders?: ReminderUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
    user: UserCreateNestedOneWithoutAppointmentsInput
    vehicle: VehicleCreateNestedOneWithoutAppointmentsInput
    garage: GarageCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    vehicleId: string
    garageId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutAppointmentsNestedInput
    garage?: GarageUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateManyInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    vehicleId: string
    garageId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
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

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ServiceGarageListRelationFilter = {
    every?: ServiceGarageWhereInput
    some?: ServiceGarageWhereInput
    none?: ServiceGarageWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type ServiceGarageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GarageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GarageAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GarageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GarageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GarageSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type GarageRelationFilter = {
    is?: GarageWhereInput
    isNot?: GarageWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    garageId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    garageId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    garageId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MaintenanceListRelationFilter = {
    every?: MaintenanceWhereInput
    some?: MaintenanceWhereInput
    none?: MaintenanceWhereInput
  }

  export type ReminderConfigListRelationFilter = {
    every?: ReminderConfigWhereInput
    some?: ReminderConfigWhereInput
    none?: ReminderConfigWhereInput
  }

  export type MaintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    licensePlate?: SortOrder
    vin?: SortOrder
    currentMileage?: SortOrder
    fuelType?: SortOrder
    photoUrl?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    currentMileage?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    licensePlate?: SortOrder
    vin?: SortOrder
    currentMileage?: SortOrder
    fuelType?: SortOrder
    photoUrl?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    licensePlate?: SortOrder
    vin?: SortOrder
    currentMileage?: SortOrder
    fuelType?: SortOrder
    photoUrl?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    currentMileage?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type VehicleRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ServiceNullableRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type MaintenanceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mileage?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    invoiceUrl?: SortOrder
    photoUrls?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrder
  }

  export type MaintenanceAvgOrderByAggregateInput = {
    mileage?: SortOrder
    cost?: SortOrder
  }

  export type MaintenanceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mileage?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    invoiceUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrder
  }

  export type MaintenanceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mileage?: SortOrder
    date?: SortOrder
    cost?: SortOrder
    invoiceUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrder
  }

  export type MaintenanceSumOrderByAggregateInput = {
    mileage?: SortOrder
    cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServiceGarageServiceIdGarageIdCompoundUniqueInput = {
    serviceId: string
    garageId: string
  }

  export type ServiceGarageCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    serviceId?: SortOrder
    garageId?: SortOrder
  }

  export type ServiceGarageAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type ServiceGarageMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    serviceId?: SortOrder
    garageId?: SortOrder
  }

  export type ServiceGarageMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    serviceId?: SortOrder
    garageId?: SortOrder
  }

  export type ServiceGarageSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type EnumReminderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderType | EnumReminderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderTypeFilter<$PrismaModel> | $Enums.ReminderType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderConfigCountOrderByAggregateInput = {
    id?: SortOrder
    reminderType?: SortOrder
    intervalMonths?: SortOrder
    intervalMileage?: SortOrder
    isActive?: SortOrder
    lastTriggeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrder
  }

  export type ReminderConfigAvgOrderByAggregateInput = {
    intervalMonths?: SortOrder
    intervalMileage?: SortOrder
  }

  export type ReminderConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    reminderType?: SortOrder
    intervalMonths?: SortOrder
    intervalMileage?: SortOrder
    isActive?: SortOrder
    lastTriggeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrder
  }

  export type ReminderConfigMinOrderByAggregateInput = {
    id?: SortOrder
    reminderType?: SortOrder
    intervalMonths?: SortOrder
    intervalMileage?: SortOrder
    isActive?: SortOrder
    lastTriggeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    serviceId?: SortOrder
  }

  export type ReminderConfigSumOrderByAggregateInput = {
    intervalMonths?: SortOrder
    intervalMileage?: SortOrder
  }

  export type EnumReminderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderType | EnumReminderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReminderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderTypeFilter<$PrismaModel>
    _max?: NestedEnumReminderTypeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReminderConfigRelationFilter = {
    is?: ReminderConfigWhereInput
    isNot?: ReminderConfigWhereInput
  }

  export type NotificationNullableRelationFilter = {
    is?: NotificationWhereInput | null
    isNot?: NotificationWhereInput | null
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    dueDate?: SortOrder
    isRead?: SortOrder
    isDismissed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reminderConfigId?: SortOrder
    notificationId?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    dueDate?: SortOrder
    isRead?: SortOrder
    isDismissed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reminderConfigId?: SortOrder
    notificationId?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    dueDate?: SortOrder
    isRead?: SortOrder
    isDismissed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reminderConfigId?: SortOrder
    notificationId?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    garageId?: SortOrder
    serviceIds?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    garageId?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    garageId?: SortOrder
    totalPrice?: SortOrder
    duration?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    duration?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type VehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ServiceGarageCreateNestedManyWithoutGarageInput = {
    create?: XOR<ServiceGarageCreateWithoutGarageInput, ServiceGarageUncheckedCreateWithoutGarageInput> | ServiceGarageCreateWithoutGarageInput[] | ServiceGarageUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutGarageInput | ServiceGarageCreateOrConnectWithoutGarageInput[]
    createMany?: ServiceGarageCreateManyGarageInputEnvelope
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutGarageInput = {
    create?: XOR<AppointmentCreateWithoutGarageInput, AppointmentUncheckedCreateWithoutGarageInput> | AppointmentCreateWithoutGarageInput[] | AppointmentUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGarageInput | AppointmentCreateOrConnectWithoutGarageInput[]
    createMany?: AppointmentCreateManyGarageInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutGarageInput = {
    create?: XOR<EmployeeCreateWithoutGarageInput, EmployeeUncheckedCreateWithoutGarageInput> | EmployeeCreateWithoutGarageInput[] | EmployeeUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutGarageInput | EmployeeCreateOrConnectWithoutGarageInput[]
    createMany?: EmployeeCreateManyGarageInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type ServiceGarageUncheckedCreateNestedManyWithoutGarageInput = {
    create?: XOR<ServiceGarageCreateWithoutGarageInput, ServiceGarageUncheckedCreateWithoutGarageInput> | ServiceGarageCreateWithoutGarageInput[] | ServiceGarageUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutGarageInput | ServiceGarageCreateOrConnectWithoutGarageInput[]
    createMany?: ServiceGarageCreateManyGarageInputEnvelope
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutGarageInput = {
    create?: XOR<AppointmentCreateWithoutGarageInput, AppointmentUncheckedCreateWithoutGarageInput> | AppointmentCreateWithoutGarageInput[] | AppointmentUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGarageInput | AppointmentCreateOrConnectWithoutGarageInput[]
    createMany?: AppointmentCreateManyGarageInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutGarageInput = {
    create?: XOR<EmployeeCreateWithoutGarageInput, EmployeeUncheckedCreateWithoutGarageInput> | EmployeeCreateWithoutGarageInput[] | EmployeeUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutGarageInput | EmployeeCreateOrConnectWithoutGarageInput[]
    createMany?: EmployeeCreateManyGarageInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceGarageUpdateManyWithoutGarageNestedInput = {
    create?: XOR<ServiceGarageCreateWithoutGarageInput, ServiceGarageUncheckedCreateWithoutGarageInput> | ServiceGarageCreateWithoutGarageInput[] | ServiceGarageUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutGarageInput | ServiceGarageCreateOrConnectWithoutGarageInput[]
    upsert?: ServiceGarageUpsertWithWhereUniqueWithoutGarageInput | ServiceGarageUpsertWithWhereUniqueWithoutGarageInput[]
    createMany?: ServiceGarageCreateManyGarageInputEnvelope
    set?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    disconnect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    delete?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    update?: ServiceGarageUpdateWithWhereUniqueWithoutGarageInput | ServiceGarageUpdateWithWhereUniqueWithoutGarageInput[]
    updateMany?: ServiceGarageUpdateManyWithWhereWithoutGarageInput | ServiceGarageUpdateManyWithWhereWithoutGarageInput[]
    deleteMany?: ServiceGarageScalarWhereInput | ServiceGarageScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutGarageNestedInput = {
    create?: XOR<AppointmentCreateWithoutGarageInput, AppointmentUncheckedCreateWithoutGarageInput> | AppointmentCreateWithoutGarageInput[] | AppointmentUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGarageInput | AppointmentCreateOrConnectWithoutGarageInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutGarageInput | AppointmentUpsertWithWhereUniqueWithoutGarageInput[]
    createMany?: AppointmentCreateManyGarageInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutGarageInput | AppointmentUpdateWithWhereUniqueWithoutGarageInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutGarageInput | AppointmentUpdateManyWithWhereWithoutGarageInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutGarageNestedInput = {
    create?: XOR<EmployeeCreateWithoutGarageInput, EmployeeUncheckedCreateWithoutGarageInput> | EmployeeCreateWithoutGarageInput[] | EmployeeUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutGarageInput | EmployeeCreateOrConnectWithoutGarageInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutGarageInput | EmployeeUpsertWithWhereUniqueWithoutGarageInput[]
    createMany?: EmployeeCreateManyGarageInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutGarageInput | EmployeeUpdateWithWhereUniqueWithoutGarageInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutGarageInput | EmployeeUpdateManyWithWhereWithoutGarageInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type ServiceGarageUncheckedUpdateManyWithoutGarageNestedInput = {
    create?: XOR<ServiceGarageCreateWithoutGarageInput, ServiceGarageUncheckedCreateWithoutGarageInput> | ServiceGarageCreateWithoutGarageInput[] | ServiceGarageUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutGarageInput | ServiceGarageCreateOrConnectWithoutGarageInput[]
    upsert?: ServiceGarageUpsertWithWhereUniqueWithoutGarageInput | ServiceGarageUpsertWithWhereUniqueWithoutGarageInput[]
    createMany?: ServiceGarageCreateManyGarageInputEnvelope
    set?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    disconnect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    delete?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    update?: ServiceGarageUpdateWithWhereUniqueWithoutGarageInput | ServiceGarageUpdateWithWhereUniqueWithoutGarageInput[]
    updateMany?: ServiceGarageUpdateManyWithWhereWithoutGarageInput | ServiceGarageUpdateManyWithWhereWithoutGarageInput[]
    deleteMany?: ServiceGarageScalarWhereInput | ServiceGarageScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutGarageNestedInput = {
    create?: XOR<AppointmentCreateWithoutGarageInput, AppointmentUncheckedCreateWithoutGarageInput> | AppointmentCreateWithoutGarageInput[] | AppointmentUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGarageInput | AppointmentCreateOrConnectWithoutGarageInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutGarageInput | AppointmentUpsertWithWhereUniqueWithoutGarageInput[]
    createMany?: AppointmentCreateManyGarageInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutGarageInput | AppointmentUpdateWithWhereUniqueWithoutGarageInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutGarageInput | AppointmentUpdateManyWithWhereWithoutGarageInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutGarageNestedInput = {
    create?: XOR<EmployeeCreateWithoutGarageInput, EmployeeUncheckedCreateWithoutGarageInput> | EmployeeCreateWithoutGarageInput[] | EmployeeUncheckedCreateWithoutGarageInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutGarageInput | EmployeeCreateOrConnectWithoutGarageInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutGarageInput | EmployeeUpsertWithWhereUniqueWithoutGarageInput[]
    createMany?: EmployeeCreateManyGarageInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutGarageInput | EmployeeUpdateWithWhereUniqueWithoutGarageInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutGarageInput | EmployeeUpdateManyWithWhereWithoutGarageInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type GarageCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<GarageCreateWithoutEmployeesInput, GarageUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: GarageCreateOrConnectWithoutEmployeesInput
    connect?: GarageWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type GarageUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<GarageCreateWithoutEmployeesInput, GarageUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: GarageCreateOrConnectWithoutEmployeesInput
    upsert?: GarageUpsertWithoutEmployeesInput
    connect?: GarageWhereUniqueInput
    update?: XOR<XOR<GarageUpdateToOneWithWhereWithoutEmployeesInput, GarageUpdateWithoutEmployeesInput>, GarageUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type MaintenanceCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutVehicleInput = {
    create?: XOR<AppointmentCreateWithoutVehicleInput, AppointmentUncheckedCreateWithoutVehicleInput> | AppointmentCreateWithoutVehicleInput[] | AppointmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVehicleInput | AppointmentCreateOrConnectWithoutVehicleInput[]
    createMany?: AppointmentCreateManyVehicleInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReminderConfigCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ReminderConfigCreateWithoutVehicleInput, ReminderConfigUncheckedCreateWithoutVehicleInput> | ReminderConfigCreateWithoutVehicleInput[] | ReminderConfigUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutVehicleInput | ReminderConfigCreateOrConnectWithoutVehicleInput[]
    createMany?: ReminderConfigCreateManyVehicleInputEnvelope
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<AppointmentCreateWithoutVehicleInput, AppointmentUncheckedCreateWithoutVehicleInput> | AppointmentCreateWithoutVehicleInput[] | AppointmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVehicleInput | AppointmentCreateOrConnectWithoutVehicleInput[]
    createMany?: AppointmentCreateManyVehicleInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReminderConfigUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ReminderConfigCreateWithoutVehicleInput, ReminderConfigUncheckedCreateWithoutVehicleInput> | ReminderConfigCreateWithoutVehicleInput[] | ReminderConfigUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutVehicleInput | ReminderConfigCreateOrConnectWithoutVehicleInput[]
    createMany?: ReminderConfigCreateManyVehicleInputEnvelope
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type MaintenanceUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutVehicleInput | MaintenanceUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<AppointmentCreateWithoutVehicleInput, AppointmentUncheckedCreateWithoutVehicleInput> | AppointmentCreateWithoutVehicleInput[] | AppointmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVehicleInput | AppointmentCreateOrConnectWithoutVehicleInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutVehicleInput | AppointmentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: AppointmentCreateManyVehicleInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutVehicleInput | AppointmentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutVehicleInput | AppointmentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReminderConfigUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ReminderConfigCreateWithoutVehicleInput, ReminderConfigUncheckedCreateWithoutVehicleInput> | ReminderConfigCreateWithoutVehicleInput[] | ReminderConfigUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutVehicleInput | ReminderConfigCreateOrConnectWithoutVehicleInput[]
    upsert?: ReminderConfigUpsertWithWhereUniqueWithoutVehicleInput | ReminderConfigUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ReminderConfigCreateManyVehicleInputEnvelope
    set?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    disconnect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    delete?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    update?: ReminderConfigUpdateWithWhereUniqueWithoutVehicleInput | ReminderConfigUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ReminderConfigUpdateManyWithWhereWithoutVehicleInput | ReminderConfigUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ReminderConfigScalarWhereInput | ReminderConfigScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput> | MaintenanceCreateWithoutVehicleInput[] | MaintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutVehicleInput | MaintenanceCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceCreateManyVehicleInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutVehicleInput | MaintenanceUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<AppointmentCreateWithoutVehicleInput, AppointmentUncheckedCreateWithoutVehicleInput> | AppointmentCreateWithoutVehicleInput[] | AppointmentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVehicleInput | AppointmentCreateOrConnectWithoutVehicleInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutVehicleInput | AppointmentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: AppointmentCreateManyVehicleInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutVehicleInput | AppointmentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutVehicleInput | AppointmentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReminderConfigUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ReminderConfigCreateWithoutVehicleInput, ReminderConfigUncheckedCreateWithoutVehicleInput> | ReminderConfigCreateWithoutVehicleInput[] | ReminderConfigUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutVehicleInput | ReminderConfigCreateOrConnectWithoutVehicleInput[]
    upsert?: ReminderConfigUpsertWithWhereUniqueWithoutVehicleInput | ReminderConfigUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ReminderConfigCreateManyVehicleInputEnvelope
    set?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    disconnect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    delete?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    update?: ReminderConfigUpdateWithWhereUniqueWithoutVehicleInput | ReminderConfigUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ReminderConfigUpdateManyWithWhereWithoutVehicleInput | ReminderConfigUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ReminderConfigScalarWhereInput | ReminderConfigScalarWhereInput[]
  }

  export type MaintenanceCreatephotoUrlsInput = {
    set: string[]
  }

  export type VehicleCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenancesInput
    connect?: VehicleWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMaintenancesInput
    connect?: ServiceWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaintenanceUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VehicleUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenancesInput
    upsert?: VehicleUpsertWithoutMaintenancesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenancesInput, VehicleUpdateWithoutMaintenancesInput>, VehicleUncheckedUpdateWithoutMaintenancesInput>
  }

  export type ServiceUpdateOneWithoutMaintenancesNestedInput = {
    create?: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMaintenancesInput
    upsert?: ServiceUpsertWithoutMaintenancesInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutMaintenancesInput, ServiceUpdateWithoutMaintenancesInput>, ServiceUncheckedUpdateWithoutMaintenancesInput>
  }

  export type MaintenanceCreateNestedManyWithoutServiceInput = {
    create?: XOR<MaintenanceCreateWithoutServiceInput, MaintenanceUncheckedCreateWithoutServiceInput> | MaintenanceCreateWithoutServiceInput[] | MaintenanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceInput | MaintenanceCreateOrConnectWithoutServiceInput[]
    createMany?: MaintenanceCreateManyServiceInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type ServiceGarageCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceGarageCreateWithoutServiceInput, ServiceGarageUncheckedCreateWithoutServiceInput> | ServiceGarageCreateWithoutServiceInput[] | ServiceGarageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutServiceInput | ServiceGarageCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceGarageCreateManyServiceInputEnvelope
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
  }

  export type ReminderConfigCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReminderConfigCreateWithoutServiceInput, ReminderConfigUncheckedCreateWithoutServiceInput> | ReminderConfigCreateWithoutServiceInput[] | ReminderConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutServiceInput | ReminderConfigCreateOrConnectWithoutServiceInput[]
    createMany?: ReminderConfigCreateManyServiceInputEnvelope
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<MaintenanceCreateWithoutServiceInput, MaintenanceUncheckedCreateWithoutServiceInput> | MaintenanceCreateWithoutServiceInput[] | MaintenanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceInput | MaintenanceCreateOrConnectWithoutServiceInput[]
    createMany?: MaintenanceCreateManyServiceInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type ServiceGarageUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceGarageCreateWithoutServiceInput, ServiceGarageUncheckedCreateWithoutServiceInput> | ServiceGarageCreateWithoutServiceInput[] | ServiceGarageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutServiceInput | ServiceGarageCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceGarageCreateManyServiceInputEnvelope
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
  }

  export type ReminderConfigUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReminderConfigCreateWithoutServiceInput, ReminderConfigUncheckedCreateWithoutServiceInput> | ReminderConfigCreateWithoutServiceInput[] | ReminderConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutServiceInput | ReminderConfigCreateOrConnectWithoutServiceInput[]
    createMany?: ReminderConfigCreateManyServiceInputEnvelope
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
  }

  export type MaintenanceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MaintenanceCreateWithoutServiceInput, MaintenanceUncheckedCreateWithoutServiceInput> | MaintenanceCreateWithoutServiceInput[] | MaintenanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceInput | MaintenanceCreateOrConnectWithoutServiceInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutServiceInput | MaintenanceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MaintenanceCreateManyServiceInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutServiceInput | MaintenanceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutServiceInput | MaintenanceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type ServiceGarageUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceGarageCreateWithoutServiceInput, ServiceGarageUncheckedCreateWithoutServiceInput> | ServiceGarageCreateWithoutServiceInput[] | ServiceGarageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutServiceInput | ServiceGarageCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceGarageUpsertWithWhereUniqueWithoutServiceInput | ServiceGarageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceGarageCreateManyServiceInputEnvelope
    set?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    disconnect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    delete?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    update?: ServiceGarageUpdateWithWhereUniqueWithoutServiceInput | ServiceGarageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceGarageUpdateManyWithWhereWithoutServiceInput | ServiceGarageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceGarageScalarWhereInput | ServiceGarageScalarWhereInput[]
  }

  export type ReminderConfigUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReminderConfigCreateWithoutServiceInput, ReminderConfigUncheckedCreateWithoutServiceInput> | ReminderConfigCreateWithoutServiceInput[] | ReminderConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutServiceInput | ReminderConfigCreateOrConnectWithoutServiceInput[]
    upsert?: ReminderConfigUpsertWithWhereUniqueWithoutServiceInput | ReminderConfigUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReminderConfigCreateManyServiceInputEnvelope
    set?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    disconnect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    delete?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    update?: ReminderConfigUpdateWithWhereUniqueWithoutServiceInput | ReminderConfigUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReminderConfigUpdateManyWithWhereWithoutServiceInput | ReminderConfigUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReminderConfigScalarWhereInput | ReminderConfigScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MaintenanceCreateWithoutServiceInput, MaintenanceUncheckedCreateWithoutServiceInput> | MaintenanceCreateWithoutServiceInput[] | MaintenanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutServiceInput | MaintenanceCreateOrConnectWithoutServiceInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutServiceInput | MaintenanceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MaintenanceCreateManyServiceInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutServiceInput | MaintenanceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutServiceInput | MaintenanceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type ServiceGarageUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceGarageCreateWithoutServiceInput, ServiceGarageUncheckedCreateWithoutServiceInput> | ServiceGarageCreateWithoutServiceInput[] | ServiceGarageUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceGarageCreateOrConnectWithoutServiceInput | ServiceGarageCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceGarageUpsertWithWhereUniqueWithoutServiceInput | ServiceGarageUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceGarageCreateManyServiceInputEnvelope
    set?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    disconnect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    delete?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    connect?: ServiceGarageWhereUniqueInput | ServiceGarageWhereUniqueInput[]
    update?: ServiceGarageUpdateWithWhereUniqueWithoutServiceInput | ServiceGarageUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceGarageUpdateManyWithWhereWithoutServiceInput | ServiceGarageUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceGarageScalarWhereInput | ServiceGarageScalarWhereInput[]
  }

  export type ReminderConfigUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReminderConfigCreateWithoutServiceInput, ReminderConfigUncheckedCreateWithoutServiceInput> | ReminderConfigCreateWithoutServiceInput[] | ReminderConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutServiceInput | ReminderConfigCreateOrConnectWithoutServiceInput[]
    upsert?: ReminderConfigUpsertWithWhereUniqueWithoutServiceInput | ReminderConfigUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReminderConfigCreateManyServiceInputEnvelope
    set?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    disconnect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    delete?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    connect?: ReminderConfigWhereUniqueInput | ReminderConfigWhereUniqueInput[]
    update?: ReminderConfigUpdateWithWhereUniqueWithoutServiceInput | ReminderConfigUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReminderConfigUpdateManyWithWhereWithoutServiceInput | ReminderConfigUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReminderConfigScalarWhereInput | ReminderConfigScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutServiceGaragesInput = {
    create?: XOR<ServiceCreateWithoutServiceGaragesInput, ServiceUncheckedCreateWithoutServiceGaragesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceGaragesInput
    connect?: ServiceWhereUniqueInput
  }

  export type GarageCreateNestedOneWithoutServicesInput = {
    create?: XOR<GarageCreateWithoutServicesInput, GarageUncheckedCreateWithoutServicesInput>
    connectOrCreate?: GarageCreateOrConnectWithoutServicesInput
    connect?: GarageWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutServiceGaragesNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceGaragesInput, ServiceUncheckedCreateWithoutServiceGaragesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceGaragesInput
    upsert?: ServiceUpsertWithoutServiceGaragesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutServiceGaragesInput, ServiceUpdateWithoutServiceGaragesInput>, ServiceUncheckedUpdateWithoutServiceGaragesInput>
  }

  export type GarageUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<GarageCreateWithoutServicesInput, GarageUncheckedCreateWithoutServicesInput>
    connectOrCreate?: GarageCreateOrConnectWithoutServicesInput
    upsert?: GarageUpsertWithoutServicesInput
    connect?: GarageWhereUniqueInput
    update?: XOR<XOR<GarageUpdateToOneWithWhereWithoutServicesInput, GarageUpdateWithoutServicesInput>, GarageUncheckedUpdateWithoutServicesInput>
  }

  export type VehicleCreateNestedOneWithoutReminderConfigsInput = {
    create?: XOR<VehicleCreateWithoutReminderConfigsInput, VehicleUncheckedCreateWithoutReminderConfigsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutReminderConfigsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutReminderConfigsInput = {
    create?: XOR<ServiceCreateWithoutReminderConfigsInput, ServiceUncheckedCreateWithoutReminderConfigsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReminderConfigsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ReminderCreateNestedManyWithoutReminderConfigInput = {
    create?: XOR<ReminderCreateWithoutReminderConfigInput, ReminderUncheckedCreateWithoutReminderConfigInput> | ReminderCreateWithoutReminderConfigInput[] | ReminderUncheckedCreateWithoutReminderConfigInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutReminderConfigInput | ReminderCreateOrConnectWithoutReminderConfigInput[]
    createMany?: ReminderCreateManyReminderConfigInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutReminderConfigInput = {
    create?: XOR<ReminderCreateWithoutReminderConfigInput, ReminderUncheckedCreateWithoutReminderConfigInput> | ReminderCreateWithoutReminderConfigInput[] | ReminderUncheckedCreateWithoutReminderConfigInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutReminderConfigInput | ReminderCreateOrConnectWithoutReminderConfigInput[]
    createMany?: ReminderCreateManyReminderConfigInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type EnumReminderTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReminderType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VehicleUpdateOneRequiredWithoutReminderConfigsNestedInput = {
    create?: XOR<VehicleCreateWithoutReminderConfigsInput, VehicleUncheckedCreateWithoutReminderConfigsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutReminderConfigsInput
    upsert?: VehicleUpsertWithoutReminderConfigsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutReminderConfigsInput, VehicleUpdateWithoutReminderConfigsInput>, VehicleUncheckedUpdateWithoutReminderConfigsInput>
  }

  export type ServiceUpdateOneWithoutReminderConfigsNestedInput = {
    create?: XOR<ServiceCreateWithoutReminderConfigsInput, ServiceUncheckedCreateWithoutReminderConfigsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReminderConfigsInput
    upsert?: ServiceUpsertWithoutReminderConfigsInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutReminderConfigsInput, ServiceUpdateWithoutReminderConfigsInput>, ServiceUncheckedUpdateWithoutReminderConfigsInput>
  }

  export type ReminderUpdateManyWithoutReminderConfigNestedInput = {
    create?: XOR<ReminderCreateWithoutReminderConfigInput, ReminderUncheckedCreateWithoutReminderConfigInput> | ReminderCreateWithoutReminderConfigInput[] | ReminderUncheckedCreateWithoutReminderConfigInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutReminderConfigInput | ReminderCreateOrConnectWithoutReminderConfigInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutReminderConfigInput | ReminderUpsertWithWhereUniqueWithoutReminderConfigInput[]
    createMany?: ReminderCreateManyReminderConfigInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutReminderConfigInput | ReminderUpdateWithWhereUniqueWithoutReminderConfigInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutReminderConfigInput | ReminderUpdateManyWithWhereWithoutReminderConfigInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutReminderConfigNestedInput = {
    create?: XOR<ReminderCreateWithoutReminderConfigInput, ReminderUncheckedCreateWithoutReminderConfigInput> | ReminderCreateWithoutReminderConfigInput[] | ReminderUncheckedCreateWithoutReminderConfigInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutReminderConfigInput | ReminderCreateOrConnectWithoutReminderConfigInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutReminderConfigInput | ReminderUpsertWithWhereUniqueWithoutReminderConfigInput[]
    createMany?: ReminderCreateManyReminderConfigInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutReminderConfigInput | ReminderUpdateWithWhereUniqueWithoutReminderConfigInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutReminderConfigInput | ReminderUpdateManyWithWhereWithoutReminderConfigInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ReminderConfigCreateNestedOneWithoutRemindersInput = {
    create?: XOR<ReminderConfigCreateWithoutRemindersInput, ReminderConfigUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutRemindersInput
    connect?: ReminderConfigWhereUniqueInput
  }

  export type NotificationCreateNestedOneWithoutRemindersInput = {
    create?: XOR<NotificationCreateWithoutRemindersInput, NotificationUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutRemindersInput
    connect?: NotificationWhereUniqueInput
  }

  export type ReminderConfigUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<ReminderConfigCreateWithoutRemindersInput, ReminderConfigUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: ReminderConfigCreateOrConnectWithoutRemindersInput
    upsert?: ReminderConfigUpsertWithoutRemindersInput
    connect?: ReminderConfigWhereUniqueInput
    update?: XOR<XOR<ReminderConfigUpdateToOneWithWhereWithoutRemindersInput, ReminderConfigUpdateWithoutRemindersInput>, ReminderConfigUncheckedUpdateWithoutRemindersInput>
  }

  export type NotificationUpdateOneWithoutRemindersNestedInput = {
    create?: XOR<NotificationCreateWithoutRemindersInput, NotificationUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutRemindersInput
    upsert?: NotificationUpsertWithoutRemindersInput
    disconnect?: NotificationWhereInput | boolean
    delete?: NotificationWhereInput | boolean
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutRemindersInput, NotificationUpdateWithoutRemindersInput>, NotificationUncheckedUpdateWithoutRemindersInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReminderCreateNestedManyWithoutNotificationInput = {
    create?: XOR<ReminderCreateWithoutNotificationInput, ReminderUncheckedCreateWithoutNotificationInput> | ReminderCreateWithoutNotificationInput[] | ReminderUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutNotificationInput | ReminderCreateOrConnectWithoutNotificationInput[]
    createMany?: ReminderCreateManyNotificationInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<ReminderCreateWithoutNotificationInput, ReminderUncheckedCreateWithoutNotificationInput> | ReminderCreateWithoutNotificationInput[] | ReminderUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutNotificationInput | ReminderCreateOrConnectWithoutNotificationInput[]
    createMany?: ReminderCreateManyNotificationInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type ReminderUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<ReminderCreateWithoutNotificationInput, ReminderUncheckedCreateWithoutNotificationInput> | ReminderCreateWithoutNotificationInput[] | ReminderUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutNotificationInput | ReminderCreateOrConnectWithoutNotificationInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutNotificationInput | ReminderUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: ReminderCreateManyNotificationInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutNotificationInput | ReminderUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutNotificationInput | ReminderUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<ReminderCreateWithoutNotificationInput, ReminderUncheckedCreateWithoutNotificationInput> | ReminderCreateWithoutNotificationInput[] | ReminderUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutNotificationInput | ReminderCreateOrConnectWithoutNotificationInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutNotificationInput | ReminderUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: ReminderCreateManyNotificationInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutNotificationInput | ReminderUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutNotificationInput | ReminderUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type AppointmentCreateserviceIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<VehicleCreateWithoutAppointmentsInput, VehicleUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAppointmentsInput
    connect?: VehicleWhereUniqueInput
  }

  export type GarageCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<GarageCreateWithoutAppointmentsInput, GarageUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: GarageCreateOrConnectWithoutAppointmentsInput
    connect?: GarageWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type AppointmentUpdateserviceIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type VehicleUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<VehicleCreateWithoutAppointmentsInput, VehicleUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAppointmentsInput
    upsert?: VehicleUpsertWithoutAppointmentsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutAppointmentsInput, VehicleUpdateWithoutAppointmentsInput>, VehicleUncheckedUpdateWithoutAppointmentsInput>
  }

  export type GarageUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<GarageCreateWithoutAppointmentsInput, GarageUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: GarageCreateOrConnectWithoutAppointmentsInput
    upsert?: GarageUpsertWithoutAppointmentsInput
    connect?: GarageWhereUniqueInput
    update?: XOR<XOR<GarageUpdateToOneWithWhereWithoutAppointmentsInput, GarageUpdateWithoutAppointmentsInput>, GarageUncheckedUpdateWithoutAppointmentsInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumReminderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderType | EnumReminderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderTypeFilter<$PrismaModel> | $Enums.ReminderType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumReminderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderType | EnumReminderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderType[] | ListEnumReminderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReminderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderTypeFilter<$PrismaModel>
    _max?: NestedEnumReminderTypeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutUserInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
    appointments?: AppointmentCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutUserInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleCreateManyUserInputEnvelope = {
    data: VehicleCreateManyUserInput | VehicleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutUserInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
    vehicle: VehicleCreateNestedOneWithoutAppointmentsInput
    garage: GarageCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    garageId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    reminders?: ReminderCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    reminders?: ReminderUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateManyWithWhereWithoutUserInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    licensePlate?: StringFilter<"Vehicle"> | string
    vin?: StringNullableFilter<"Vehicle"> | string | null
    currentMileage?: IntFilter<"Vehicle"> | number
    fuelType?: StringNullableFilter<"Vehicle"> | string | null
    photoUrl?: StringNullableFilter<"Vehicle"> | string | null
    purchaseDate?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    userId?: StringFilter<"Vehicle"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    userId?: StringFilter<"Appointment"> | string
    vehicleId?: StringFilter<"Appointment"> | string
    garageId?: StringFilter<"Appointment"> | string
    serviceIds?: StringNullableListFilter<"Appointment">
    totalPrice?: FloatFilter<"Appointment"> | number
    duration?: IntFilter<"Appointment"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: StringFilter<"Notification"> | string
  }

  export type ServiceGarageCreateWithoutGarageInput = {
    id?: string
    price: number
    duration: number
    service: ServiceCreateNestedOneWithoutServiceGaragesInput
  }

  export type ServiceGarageUncheckedCreateWithoutGarageInput = {
    id?: string
    price: number
    duration: number
    serviceId: string
  }

  export type ServiceGarageCreateOrConnectWithoutGarageInput = {
    where: ServiceGarageWhereUniqueInput
    create: XOR<ServiceGarageCreateWithoutGarageInput, ServiceGarageUncheckedCreateWithoutGarageInput>
  }

  export type ServiceGarageCreateManyGarageInputEnvelope = {
    data: ServiceGarageCreateManyGarageInput | ServiceGarageCreateManyGarageInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutGarageInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
    user: UserCreateNestedOneWithoutAppointmentsInput
    vehicle: VehicleCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutGarageInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    vehicleId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type AppointmentCreateOrConnectWithoutGarageInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutGarageInput, AppointmentUncheckedCreateWithoutGarageInput>
  }

  export type AppointmentCreateManyGarageInputEnvelope = {
    data: AppointmentCreateManyGarageInput | AppointmentCreateManyGarageInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutGarageInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type EmployeeUncheckedCreateWithoutGarageInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type EmployeeCreateOrConnectWithoutGarageInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutGarageInput, EmployeeUncheckedCreateWithoutGarageInput>
  }

  export type EmployeeCreateManyGarageInputEnvelope = {
    data: EmployeeCreateManyGarageInput | EmployeeCreateManyGarageInput[]
    skipDuplicates?: boolean
  }

  export type ServiceGarageUpsertWithWhereUniqueWithoutGarageInput = {
    where: ServiceGarageWhereUniqueInput
    update: XOR<ServiceGarageUpdateWithoutGarageInput, ServiceGarageUncheckedUpdateWithoutGarageInput>
    create: XOR<ServiceGarageCreateWithoutGarageInput, ServiceGarageUncheckedCreateWithoutGarageInput>
  }

  export type ServiceGarageUpdateWithWhereUniqueWithoutGarageInput = {
    where: ServiceGarageWhereUniqueInput
    data: XOR<ServiceGarageUpdateWithoutGarageInput, ServiceGarageUncheckedUpdateWithoutGarageInput>
  }

  export type ServiceGarageUpdateManyWithWhereWithoutGarageInput = {
    where: ServiceGarageScalarWhereInput
    data: XOR<ServiceGarageUpdateManyMutationInput, ServiceGarageUncheckedUpdateManyWithoutGarageInput>
  }

  export type ServiceGarageScalarWhereInput = {
    AND?: ServiceGarageScalarWhereInput | ServiceGarageScalarWhereInput[]
    OR?: ServiceGarageScalarWhereInput[]
    NOT?: ServiceGarageScalarWhereInput | ServiceGarageScalarWhereInput[]
    id?: StringFilter<"ServiceGarage"> | string
    price?: FloatFilter<"ServiceGarage"> | number
    duration?: IntFilter<"ServiceGarage"> | number
    serviceId?: StringFilter<"ServiceGarage"> | string
    garageId?: StringFilter<"ServiceGarage"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutGarageInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutGarageInput, AppointmentUncheckedUpdateWithoutGarageInput>
    create: XOR<AppointmentCreateWithoutGarageInput, AppointmentUncheckedCreateWithoutGarageInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutGarageInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutGarageInput, AppointmentUncheckedUpdateWithoutGarageInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutGarageInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutGarageInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutGarageInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutGarageInput, EmployeeUncheckedUpdateWithoutGarageInput>
    create: XOR<EmployeeCreateWithoutGarageInput, EmployeeUncheckedCreateWithoutGarageInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutGarageInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutGarageInput, EmployeeUncheckedUpdateWithoutGarageInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutGarageInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutGarageInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    garageId?: StringFilter<"Employee"> | string
  }

  export type GarageCreateWithoutEmployeesInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceGarageCreateNestedManyWithoutGarageInput
    appointments?: AppointmentCreateNestedManyWithoutGarageInput
  }

  export type GarageUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceGarageUncheckedCreateNestedManyWithoutGarageInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutGarageInput
  }

  export type GarageCreateOrConnectWithoutEmployeesInput = {
    where: GarageWhereUniqueInput
    create: XOR<GarageCreateWithoutEmployeesInput, GarageUncheckedCreateWithoutEmployeesInput>
  }

  export type GarageUpsertWithoutEmployeesInput = {
    update: XOR<GarageUpdateWithoutEmployeesInput, GarageUncheckedUpdateWithoutEmployeesInput>
    create: XOR<GarageCreateWithoutEmployeesInput, GarageUncheckedCreateWithoutEmployeesInput>
    where?: GarageWhereInput
  }

  export type GarageUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: GarageWhereInput
    data: XOR<GarageUpdateWithoutEmployeesInput, GarageUncheckedUpdateWithoutEmployeesInput>
  }

  export type GarageUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceGarageUpdateManyWithoutGarageNestedInput
    appointments?: AppointmentUpdateManyWithoutGarageNestedInput
  }

  export type GarageUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceGarageUncheckedUpdateManyWithoutGarageNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutGarageNestedInput
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type MaintenanceCreateWithoutVehicleInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: ServiceCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutVehicleInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
  }

  export type MaintenanceCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceCreateManyVehicleInputEnvelope = {
    data: MaintenanceCreateManyVehicleInput | MaintenanceCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutVehicleInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
    user: UserCreateNestedOneWithoutAppointmentsInput
    garage: GarageCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutVehicleInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    garageId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type AppointmentCreateOrConnectWithoutVehicleInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutVehicleInput, AppointmentUncheckedCreateWithoutVehicleInput>
  }

  export type AppointmentCreateManyVehicleInputEnvelope = {
    data: AppointmentCreateManyVehicleInput | AppointmentCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ReminderConfigCreateWithoutVehicleInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: ServiceCreateNestedOneWithoutReminderConfigsInput
    reminders?: ReminderCreateNestedManyWithoutReminderConfigInput
  }

  export type ReminderConfigUncheckedCreateWithoutVehicleInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
    reminders?: ReminderUncheckedCreateNestedManyWithoutReminderConfigInput
  }

  export type ReminderConfigCreateOrConnectWithoutVehicleInput = {
    where: ReminderConfigWhereUniqueInput
    create: XOR<ReminderConfigCreateWithoutVehicleInput, ReminderConfigUncheckedCreateWithoutVehicleInput>
  }

  export type ReminderConfigCreateManyVehicleInputEnvelope = {
    data: ReminderConfigCreateManyVehicleInput | ReminderConfigCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutVehicleInput, MaintenanceUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceCreateWithoutVehicleInput, MaintenanceUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutVehicleInput, MaintenanceUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceScalarWhereInput = {
    AND?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    OR?: MaintenanceScalarWhereInput[]
    NOT?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    title?: StringFilter<"Maintenance"> | string
    description?: StringNullableFilter<"Maintenance"> | string | null
    mileage?: IntFilter<"Maintenance"> | number
    date?: DateTimeFilter<"Maintenance"> | Date | string
    cost?: FloatFilter<"Maintenance"> | number
    invoiceUrl?: StringNullableFilter<"Maintenance"> | string | null
    photoUrls?: StringNullableListFilter<"Maintenance">
    notes?: StringNullableFilter<"Maintenance"> | string | null
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"Maintenance"> | Date | string
    vehicleId?: StringFilter<"Maintenance"> | string
    serviceId?: StringNullableFilter<"Maintenance"> | string | null
  }

  export type AppointmentUpsertWithWhereUniqueWithoutVehicleInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutVehicleInput, AppointmentUncheckedUpdateWithoutVehicleInput>
    create: XOR<AppointmentCreateWithoutVehicleInput, AppointmentUncheckedCreateWithoutVehicleInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutVehicleInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutVehicleInput, AppointmentUncheckedUpdateWithoutVehicleInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutVehicleInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ReminderConfigUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ReminderConfigWhereUniqueInput
    update: XOR<ReminderConfigUpdateWithoutVehicleInput, ReminderConfigUncheckedUpdateWithoutVehicleInput>
    create: XOR<ReminderConfigCreateWithoutVehicleInput, ReminderConfigUncheckedCreateWithoutVehicleInput>
  }

  export type ReminderConfigUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ReminderConfigWhereUniqueInput
    data: XOR<ReminderConfigUpdateWithoutVehicleInput, ReminderConfigUncheckedUpdateWithoutVehicleInput>
  }

  export type ReminderConfigUpdateManyWithWhereWithoutVehicleInput = {
    where: ReminderConfigScalarWhereInput
    data: XOR<ReminderConfigUpdateManyMutationInput, ReminderConfigUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ReminderConfigScalarWhereInput = {
    AND?: ReminderConfigScalarWhereInput | ReminderConfigScalarWhereInput[]
    OR?: ReminderConfigScalarWhereInput[]
    NOT?: ReminderConfigScalarWhereInput | ReminderConfigScalarWhereInput[]
    id?: StringFilter<"ReminderConfig"> | string
    reminderType?: EnumReminderTypeFilter<"ReminderConfig"> | $Enums.ReminderType
    intervalMonths?: IntNullableFilter<"ReminderConfig"> | number | null
    intervalMileage?: IntNullableFilter<"ReminderConfig"> | number | null
    isActive?: BoolFilter<"ReminderConfig"> | boolean
    lastTriggeredAt?: DateTimeNullableFilter<"ReminderConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"ReminderConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ReminderConfig"> | Date | string
    vehicleId?: StringFilter<"ReminderConfig"> | string
    serviceId?: StringNullableFilter<"ReminderConfig"> | string | null
  }

  export type VehicleCreateWithoutMaintenancesInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    appointments?: AppointmentCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenancesInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenancesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
  }

  export type ServiceCreateWithoutMaintenancesInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceGarages?: ServiceGarageCreateNestedManyWithoutServiceInput
    reminderConfigs?: ReminderConfigCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutMaintenancesInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceGarages?: ServiceGarageUncheckedCreateNestedManyWithoutServiceInput
    reminderConfigs?: ReminderConfigUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutMaintenancesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput>
  }

  export type VehicleUpsertWithoutMaintenancesInput = {
    update: XOR<VehicleUpdateWithoutMaintenancesInput, VehicleUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<VehicleCreateWithoutMaintenancesInput, VehicleUncheckedCreateWithoutMaintenancesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenancesInput, VehicleUncheckedUpdateWithoutMaintenancesInput>
  }

  export type VehicleUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    appointments?: AppointmentUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ServiceUpsertWithoutMaintenancesInput = {
    update: XOR<ServiceUpdateWithoutMaintenancesInput, ServiceUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutMaintenancesInput, ServiceUncheckedUpdateWithoutMaintenancesInput>
  }

  export type ServiceUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceGarages?: ServiceGarageUpdateManyWithoutServiceNestedInput
    reminderConfigs?: ReminderConfigUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceGarages?: ServiceGarageUncheckedUpdateManyWithoutServiceNestedInput
    reminderConfigs?: ReminderConfigUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type MaintenanceCreateWithoutServiceInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutServiceInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
  }

  export type MaintenanceCreateOrConnectWithoutServiceInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutServiceInput, MaintenanceUncheckedCreateWithoutServiceInput>
  }

  export type MaintenanceCreateManyServiceInputEnvelope = {
    data: MaintenanceCreateManyServiceInput | MaintenanceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceGarageCreateWithoutServiceInput = {
    id?: string
    price: number
    duration: number
    garage: GarageCreateNestedOneWithoutServicesInput
  }

  export type ServiceGarageUncheckedCreateWithoutServiceInput = {
    id?: string
    price: number
    duration: number
    garageId: string
  }

  export type ServiceGarageCreateOrConnectWithoutServiceInput = {
    where: ServiceGarageWhereUniqueInput
    create: XOR<ServiceGarageCreateWithoutServiceInput, ServiceGarageUncheckedCreateWithoutServiceInput>
  }

  export type ServiceGarageCreateManyServiceInputEnvelope = {
    data: ServiceGarageCreateManyServiceInput | ServiceGarageCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ReminderConfigCreateWithoutServiceInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutReminderConfigsInput
    reminders?: ReminderCreateNestedManyWithoutReminderConfigInput
  }

  export type ReminderConfigUncheckedCreateWithoutServiceInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    reminders?: ReminderUncheckedCreateNestedManyWithoutReminderConfigInput
  }

  export type ReminderConfigCreateOrConnectWithoutServiceInput = {
    where: ReminderConfigWhereUniqueInput
    create: XOR<ReminderConfigCreateWithoutServiceInput, ReminderConfigUncheckedCreateWithoutServiceInput>
  }

  export type ReminderConfigCreateManyServiceInputEnvelope = {
    data: ReminderConfigCreateManyServiceInput | ReminderConfigCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutServiceInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutServiceInput, MaintenanceUncheckedUpdateWithoutServiceInput>
    create: XOR<MaintenanceCreateWithoutServiceInput, MaintenanceUncheckedCreateWithoutServiceInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutServiceInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutServiceInput, MaintenanceUncheckedUpdateWithoutServiceInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutServiceInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceGarageUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceGarageWhereUniqueInput
    update: XOR<ServiceGarageUpdateWithoutServiceInput, ServiceGarageUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceGarageCreateWithoutServiceInput, ServiceGarageUncheckedCreateWithoutServiceInput>
  }

  export type ServiceGarageUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceGarageWhereUniqueInput
    data: XOR<ServiceGarageUpdateWithoutServiceInput, ServiceGarageUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceGarageUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceGarageScalarWhereInput
    data: XOR<ServiceGarageUpdateManyMutationInput, ServiceGarageUncheckedUpdateManyWithoutServiceInput>
  }

  export type ReminderConfigUpsertWithWhereUniqueWithoutServiceInput = {
    where: ReminderConfigWhereUniqueInput
    update: XOR<ReminderConfigUpdateWithoutServiceInput, ReminderConfigUncheckedUpdateWithoutServiceInput>
    create: XOR<ReminderConfigCreateWithoutServiceInput, ReminderConfigUncheckedCreateWithoutServiceInput>
  }

  export type ReminderConfigUpdateWithWhereUniqueWithoutServiceInput = {
    where: ReminderConfigWhereUniqueInput
    data: XOR<ReminderConfigUpdateWithoutServiceInput, ReminderConfigUncheckedUpdateWithoutServiceInput>
  }

  export type ReminderConfigUpdateManyWithWhereWithoutServiceInput = {
    where: ReminderConfigScalarWhereInput
    data: XOR<ReminderConfigUpdateManyMutationInput, ReminderConfigUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceCreateWithoutServiceGaragesInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceCreateNestedManyWithoutServiceInput
    reminderConfigs?: ReminderConfigCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutServiceGaragesInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutServiceInput
    reminderConfigs?: ReminderConfigUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutServiceGaragesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceGaragesInput, ServiceUncheckedCreateWithoutServiceGaragesInput>
  }

  export type GarageCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutGarageInput
    employees?: EmployeeCreateNestedManyWithoutGarageInput
  }

  export type GarageUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutGarageInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutGarageInput
  }

  export type GarageCreateOrConnectWithoutServicesInput = {
    where: GarageWhereUniqueInput
    create: XOR<GarageCreateWithoutServicesInput, GarageUncheckedCreateWithoutServicesInput>
  }

  export type ServiceUpsertWithoutServiceGaragesInput = {
    update: XOR<ServiceUpdateWithoutServiceGaragesInput, ServiceUncheckedUpdateWithoutServiceGaragesInput>
    create: XOR<ServiceCreateWithoutServiceGaragesInput, ServiceUncheckedCreateWithoutServiceGaragesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutServiceGaragesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutServiceGaragesInput, ServiceUncheckedUpdateWithoutServiceGaragesInput>
  }

  export type ServiceUpdateWithoutServiceGaragesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUpdateManyWithoutServiceNestedInput
    reminderConfigs?: ReminderConfigUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutServiceGaragesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutServiceNestedInput
    reminderConfigs?: ReminderConfigUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type GarageUpsertWithoutServicesInput = {
    update: XOR<GarageUpdateWithoutServicesInput, GarageUncheckedUpdateWithoutServicesInput>
    create: XOR<GarageCreateWithoutServicesInput, GarageUncheckedCreateWithoutServicesInput>
    where?: GarageWhereInput
  }

  export type GarageUpdateToOneWithWhereWithoutServicesInput = {
    where?: GarageWhereInput
    data: XOR<GarageUpdateWithoutServicesInput, GarageUncheckedUpdateWithoutServicesInput>
  }

  export type GarageUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutGarageNestedInput
    employees?: EmployeeUpdateManyWithoutGarageNestedInput
  }

  export type GarageUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutGarageNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutGarageNestedInput
  }

  export type VehicleCreateWithoutReminderConfigsInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
    appointments?: AppointmentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutReminderConfigsInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutReminderConfigsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutReminderConfigsInput, VehicleUncheckedCreateWithoutReminderConfigsInput>
  }

  export type ServiceCreateWithoutReminderConfigsInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceCreateNestedManyWithoutServiceInput
    serviceGarages?: ServiceGarageCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutReminderConfigsInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutServiceInput
    serviceGarages?: ServiceGarageUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutReminderConfigsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutReminderConfigsInput, ServiceUncheckedCreateWithoutReminderConfigsInput>
  }

  export type ReminderCreateWithoutReminderConfigInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutReminderConfigInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationId?: string | null
  }

  export type ReminderCreateOrConnectWithoutReminderConfigInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutReminderConfigInput, ReminderUncheckedCreateWithoutReminderConfigInput>
  }

  export type ReminderCreateManyReminderConfigInputEnvelope = {
    data: ReminderCreateManyReminderConfigInput | ReminderCreateManyReminderConfigInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutReminderConfigsInput = {
    update: XOR<VehicleUpdateWithoutReminderConfigsInput, VehicleUncheckedUpdateWithoutReminderConfigsInput>
    create: XOR<VehicleCreateWithoutReminderConfigsInput, VehicleUncheckedCreateWithoutReminderConfigsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutReminderConfigsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutReminderConfigsInput, VehicleUncheckedUpdateWithoutReminderConfigsInput>
  }

  export type VehicleUpdateWithoutReminderConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
    appointments?: AppointmentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutReminderConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ServiceUpsertWithoutReminderConfigsInput = {
    update: XOR<ServiceUpdateWithoutReminderConfigsInput, ServiceUncheckedUpdateWithoutReminderConfigsInput>
    create: XOR<ServiceCreateWithoutReminderConfigsInput, ServiceUncheckedCreateWithoutReminderConfigsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutReminderConfigsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutReminderConfigsInput, ServiceUncheckedUpdateWithoutReminderConfigsInput>
  }

  export type ServiceUpdateWithoutReminderConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUpdateManyWithoutServiceNestedInput
    serviceGarages?: ServiceGarageUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutReminderConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutServiceNestedInput
    serviceGarages?: ServiceGarageUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ReminderUpsertWithWhereUniqueWithoutReminderConfigInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutReminderConfigInput, ReminderUncheckedUpdateWithoutReminderConfigInput>
    create: XOR<ReminderCreateWithoutReminderConfigInput, ReminderUncheckedCreateWithoutReminderConfigInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutReminderConfigInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutReminderConfigInput, ReminderUncheckedUpdateWithoutReminderConfigInput>
  }

  export type ReminderUpdateManyWithWhereWithoutReminderConfigInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutReminderConfigInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: StringFilter<"Reminder"> | string
    title?: StringFilter<"Reminder"> | string
    message?: StringFilter<"Reminder"> | string
    dueDate?: DateTimeFilter<"Reminder"> | Date | string
    isRead?: BoolFilter<"Reminder"> | boolean
    isDismissed?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
    reminderConfigId?: StringFilter<"Reminder"> | string
    notificationId?: StringNullableFilter<"Reminder"> | string | null
  }

  export type ReminderConfigCreateWithoutRemindersInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutReminderConfigsInput
    service?: ServiceCreateNestedOneWithoutReminderConfigsInput
  }

  export type ReminderConfigUncheckedCreateWithoutRemindersInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    serviceId?: string | null
  }

  export type ReminderConfigCreateOrConnectWithoutRemindersInput = {
    where: ReminderConfigWhereUniqueInput
    create: XOR<ReminderConfigCreateWithoutRemindersInput, ReminderConfigUncheckedCreateWithoutRemindersInput>
  }

  export type NotificationCreateWithoutRemindersInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutRemindersInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type NotificationCreateOrConnectWithoutRemindersInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutRemindersInput, NotificationUncheckedCreateWithoutRemindersInput>
  }

  export type ReminderConfigUpsertWithoutRemindersInput = {
    update: XOR<ReminderConfigUpdateWithoutRemindersInput, ReminderConfigUncheckedUpdateWithoutRemindersInput>
    create: XOR<ReminderConfigCreateWithoutRemindersInput, ReminderConfigUncheckedCreateWithoutRemindersInput>
    where?: ReminderConfigWhereInput
  }

  export type ReminderConfigUpdateToOneWithWhereWithoutRemindersInput = {
    where?: ReminderConfigWhereInput
    data: XOR<ReminderConfigUpdateWithoutRemindersInput, ReminderConfigUncheckedUpdateWithoutRemindersInput>
  }

  export type ReminderConfigUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutReminderConfigsNestedInput
    service?: ServiceUpdateOneWithoutReminderConfigsNestedInput
  }

  export type ReminderConfigUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpsertWithoutRemindersInput = {
    update: XOR<NotificationUpdateWithoutRemindersInput, NotificationUncheckedUpdateWithoutRemindersInput>
    create: XOR<NotificationCreateWithoutRemindersInput, NotificationUncheckedCreateWithoutRemindersInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutRemindersInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutRemindersInput, NotificationUncheckedUpdateWithoutRemindersInput>
  }

  export type NotificationUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type ReminderCreateWithoutNotificationInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reminderConfig: ReminderConfigCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutNotificationInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reminderConfigId: string
  }

  export type ReminderCreateOrConnectWithoutNotificationInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutNotificationInput, ReminderUncheckedCreateWithoutNotificationInput>
  }

  export type ReminderCreateManyNotificationInputEnvelope = {
    data: ReminderCreateManyNotificationInput | ReminderCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReminderUpsertWithWhereUniqueWithoutNotificationInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutNotificationInput, ReminderUncheckedUpdateWithoutNotificationInput>
    create: XOR<ReminderCreateWithoutNotificationInput, ReminderUncheckedCreateWithoutNotificationInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutNotificationInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutNotificationInput, ReminderUncheckedUpdateWithoutNotificationInput>
  }

  export type ReminderUpdateManyWithWhereWithoutNotificationInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutNotificationInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type VehicleCreateWithoutAppointmentsInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    maintenances?: MaintenanceCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutVehicleInput
    reminderConfigs?: ReminderConfigUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutAppointmentsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutAppointmentsInput, VehicleUncheckedCreateWithoutAppointmentsInput>
  }

  export type GarageCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceGarageCreateNestedManyWithoutGarageInput
    employees?: EmployeeCreateNestedManyWithoutGarageInput
  }

  export type GarageUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    address: string
    city: string
    postalCode: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    email: string
    website?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceGarageUncheckedCreateNestedManyWithoutGarageInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutGarageInput
  }

  export type GarageCreateOrConnectWithoutAppointmentsInput = {
    where: GarageWhereUniqueInput
    create: XOR<GarageCreateWithoutAppointmentsInput, GarageUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VehicleUpsertWithoutAppointmentsInput = {
    update: XOR<VehicleUpdateWithoutAppointmentsInput, VehicleUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<VehicleCreateWithoutAppointmentsInput, VehicleUncheckedCreateWithoutAppointmentsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutAppointmentsInput, VehicleUncheckedUpdateWithoutAppointmentsInput>
  }

  export type VehicleUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type GarageUpsertWithoutAppointmentsInput = {
    update: XOR<GarageUpdateWithoutAppointmentsInput, GarageUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<GarageCreateWithoutAppointmentsInput, GarageUncheckedCreateWithoutAppointmentsInput>
    where?: GarageWhereInput
  }

  export type GarageUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: GarageWhereInput
    data: XOR<GarageUpdateWithoutAppointmentsInput, GarageUncheckedUpdateWithoutAppointmentsInput>
  }

  export type GarageUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceGarageUpdateManyWithoutGarageNestedInput
    employees?: EmployeeUpdateManyWithoutGarageNestedInput
  }

  export type GarageUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceGarageUncheckedUpdateManyWithoutGarageNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutGarageNestedInput
  }

  export type VehicleCreateManyUserInput = {
    id?: string
    brand: string
    model: string
    year: number
    licensePlate: string
    vin?: string | null
    currentMileage: number
    fuelType?: string | null
    photoUrl?: string | null
    purchaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyUserInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
    garageId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type VehicleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUpdateManyWithoutVehicleNestedInput
    appointments?: AppointmentUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutVehicleNestedInput
    reminderConfigs?: ReminderConfigUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    currentMileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutAppointmentsNestedInput
    garage?: GarageUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: ReminderUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: ReminderUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceGarageCreateManyGarageInput = {
    id?: string
    price: number
    duration: number
    serviceId: string
  }

  export type AppointmentCreateManyGarageInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    vehicleId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type EmployeeCreateManyGarageInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type ServiceGarageUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    service?: ServiceUpdateOneRequiredWithoutServiceGaragesNestedInput
  }

  export type ServiceGarageUncheckedUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceGarageUncheckedUpdateManyWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EmployeeUncheckedUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EmployeeUncheckedUpdateManyWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MaintenanceCreateManyVehicleInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
  }

  export type AppointmentCreateManyVehicleInput = {
    id?: string
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    garageId: string
    serviceIds?: AppointmentCreateserviceIdsInput | string[]
    totalPrice: number
    duration: number
  }

  export type ReminderConfigCreateManyVehicleInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
  }

  export type MaintenanceUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    garage?: GarageUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    garageId?: StringFieldUpdateOperationsInput | string
    serviceIds?: AppointmentUpdateserviceIdsInput | string[]
    totalPrice?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type ReminderConfigUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneWithoutReminderConfigsNestedInput
    reminders?: ReminderUpdateManyWithoutReminderConfigNestedInput
  }

  export type ReminderConfigUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    reminders?: ReminderUncheckedUpdateManyWithoutReminderConfigNestedInput
  }

  export type ReminderConfigUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateManyServiceInput = {
    id?: string
    title: string
    description?: string | null
    mileage: number
    date: Date | string
    cost: number
    invoiceUrl?: string | null
    photoUrls?: MaintenanceCreatephotoUrlsInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
  }

  export type ServiceGarageCreateManyServiceInput = {
    id?: string
    price: number
    duration: number
    garageId: string
  }

  export type ReminderConfigCreateManyServiceInput = {
    id?: string
    reminderType: $Enums.ReminderType
    intervalMonths?: number | null
    intervalMileage?: number | null
    isActive?: boolean
    lastTriggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: string
  }

  export type MaintenanceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrls?: MaintenanceUpdatephotoUrlsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceGarageUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    garage?: GarageUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceGarageUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    garageId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceGarageUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    garageId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderConfigUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutReminderConfigsNestedInput
    reminders?: ReminderUpdateManyWithoutReminderConfigNestedInput
  }

  export type ReminderConfigUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUncheckedUpdateManyWithoutReminderConfigNestedInput
  }

  export type ReminderConfigUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderType?: EnumReminderTypeFieldUpdateOperationsInput | $Enums.ReminderType
    intervalMonths?: NullableIntFieldUpdateOperationsInput | number | null
    intervalMileage?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderCreateManyReminderConfigInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationId?: string | null
  }

  export type ReminderUpdateWithoutReminderConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateOneWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutReminderConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderUncheckedUpdateManyWithoutReminderConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderCreateManyNotificationInput = {
    id?: string
    title: string
    message: string
    dueDate: Date | string
    isRead?: boolean
    isDismissed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reminderConfigId: string
  }

  export type ReminderUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderConfig?: ReminderConfigUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderConfigId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDismissed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderConfigId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GarageCountOutputTypeDefaultArgs instead
     */
    export type GarageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GarageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
     */
    export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderConfigCountOutputTypeDefaultArgs instead
     */
    export type ReminderConfigCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderConfigCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationCountOutputTypeDefaultArgs instead
     */
    export type NotificationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GarageDefaultArgs instead
     */
    export type GarageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GarageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaintenanceDefaultArgs instead
     */
    export type MaintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaintenanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceGarageDefaultArgs instead
     */
    export type ServiceGarageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceGarageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderConfigDefaultArgs instead
     */
    export type ReminderConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderDefaultArgs instead
     */
    export type ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentDefaultArgs instead
     */
    export type AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentDefaultArgs<ExtArgs>

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