// Types partagés entre les applications
export interface AppointmentFormData {
  vehicleId: string;
  garageId: string;
  serviceIds: string[];
  date: Date;
  notes?: string;
}

export interface VehicleFormData {
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  vin?: string;
  currentMileage: number;
  fuelType?: string;
  photoUrl?: string;
  purchaseDate?: Date;
}

export interface MaintenanceFormData {
  title: string;
  description?: string;
  mileage: number;
  date: Date;
  cost: number;
  invoiceUrl?: string;
  photoUrls?: string[];
  notes?: string;
  serviceId?: string;
}