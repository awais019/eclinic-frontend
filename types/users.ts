interface User {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  gender: string;
  readonly image: string;
  password: string | null;
  role: "PATIENT" | "DOCTOR";
  profile_setup: boolean;
}

interface Doctor extends User {
  specialization: string;
  charges: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    state: string;
  };
  degree: Blob;
  schedule: Schedule[];
}

interface Patient extends User {
  birth_date: string;
}
interface Schedule {
  day: string;
  startTime: string;
  endTime: string;
  break_start: string;
  break_end: string;
  is_active: boolean;
  appointment_interval: number;
}

interface Charge {
  appointment_type: string;
  amount: number;
}

export { Doctor, Patient, Schedule, Charge };
