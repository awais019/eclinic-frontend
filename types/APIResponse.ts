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

export interface Review {
  id: string;
  rating: number;
  review: string;
  date: string;
  user: {
    firstName: string;
    lastName: string;
    image: string;
  };
}

export interface Appointment {
  id: string;
  patient_name: string;
  date: string;
  time: string;
  type: string;
  charges: number;
  image: string;
  message?: string;
  completed: boolean;
  doctor?: {
    first_name: string;
    last_name: string;
    specialization: string;
  };
}

export interface Transaction {
  id: string;
  patient_name?: string;
  doctor_name?: string;
  created_at: string;
  type: string;
  appointment_type: string;
  appointment_status?: string;
  amount: number;
}

export interface Prescription {
  id: string;
  appointment: {
    date: string;
    type: string;
  };
  doctor: {
    first_name: string;
    last_name: string;
    image: string;
  };
  medication: {
    medication: string;
    dosage: string;
    instructions: string;
  }[];
}

export interface Message {
  id: string;
  conversationId: string;
  message: string;
  sender: string;
  created_at: string;
  updated_at: string;
}

export interface Conversation {
  id: string;
  Participant: {
    id: string;
    first_name: string;
    last_name: string;
    image: string;
  };
  Message: Message | null;
}

export default APIResponse;
