type APIResponse<T> = {
  message: string;
  data: T;
};

export interface DoctorsResponse {
  message: string;
  data: Data;
}

export interface Data {
  page: number;
  pageSize: number;
  totalPages: number;
  doctors: Doctor[];
}

export interface Doctor {
  id: string;
  specialization: string;
  hospital_clinic_name: string;
  verification: string;
  about: string;
  locationId: string;
  userId: string;
  appointment_types_allowed: string[];
  first_name: string;
  last_name: string;
  image: string;
  address: string;
  city: string;
  state: string;
  workingHours: WorkingHours;
  charges: Charges;
  reviewsCount: number;
  rating: number;
}

export interface WorkingHours {
  startTime: string;
  endTime: string;
}

export interface Charges {
  physical: number;
  virtual: any;
}

export default APIResponse;
