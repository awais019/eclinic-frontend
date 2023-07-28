interface User {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  gender: string;
  readonly imageUrl: string;
  password: string | null;
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
}

interface Patient extends User {
  birth_date: string;
}

export { Doctor, Patient };
