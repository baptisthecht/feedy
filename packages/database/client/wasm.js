
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  phone: 'phone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GarageScalarFieldEnum = {
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

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  garageId: 'garageId'
};

exports.Prisma.VehicleScalarFieldEnum = {
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

exports.Prisma.MaintenanceScalarFieldEnum = {
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

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceGarageScalarFieldEnum = {
  id: 'id',
  price: 'price',
  duration: 'duration',
  serviceId: 'serviceId',
  garageId: 'garageId'
};

exports.Prisma.ReminderConfigScalarFieldEnum = {
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

exports.Prisma.ReminderScalarFieldEnum = {
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

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  type: 'type',
  title: 'title',
  message: 'message',
  isRead: 'isRead',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.AppointmentScalarFieldEnum = {
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
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  MECHANIC: 'MECHANIC',
  RECEPTIONIST: 'RECEPTIONIST'
};

exports.ReminderType = exports.$Enums.ReminderType = {
  OIL_CHANGE: 'OIL_CHANGE',
  TIRE_ROTATION: 'TIRE_ROTATION',
  TECHNICAL_INSPECTION: 'TECHNICAL_INSPECTION',
  BRAKE_CHECK: 'BRAKE_CHECK',
  TIMING_BELT: 'TIMING_BELT',
  INSURANCE_RENEWAL: 'INSURANCE_RENEWAL',
  CUSTOM: 'CUSTOM'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  REMINDER: 'REMINDER',
  APPOINTMENT: 'APPOINTMENT',
  SYSTEM: 'SYSTEM'
};

exports.AppointmentStatus = exports.$Enums.AppointmentStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
