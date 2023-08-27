import { Doctor, Patient } from "~/types/users";

export default defineStore("userStore", store, { persist: true });

function store() {
  const user = ref<Doctor | Patient | null>(null);
  const authToken = ref<string | null>(null);

  const { registerPatient } = usePatient();
  const { registerDoctor } = useDoctor();
  const {
    signin,
    forgotpassword,
    resetpassword,
    me,
    updateMe,
    updateHospital,
    uploadImage,
  } = useAuth();

  async function userSignin(email: string, password: string) {
    const { data, error } = await signin(email, password);
    if (data.value) {
      authToken.value = data.value.data.token;
    }
    await userMe();
    return { data, error };
  }

  async function userMe() {
    const { data, error } = await me();
    if (data.value) {
      user.value = data.value.data;
    }
    return { data, error };
  }

  async function updateUserMe(info: {
    first_name: string;
    last_name: string;
    gender: string;
    specialization?: string;
    birthdate?: string;
  }) {
    const { error } = await updateMe(info);
    if (!user.value || error.value) {
      return;
    }
    user.value.first_name = info.first_name;
    user.value.last_name = info.last_name;
    user.value.gender = info.gender;
    if (info.specialization) {
      (user.value as Doctor).specialization = info.specialization;
    }
    if (info.birthdate) {
      (user.value as Patient).birth_date = info.birthdate;
    }
  }

  async function updateHospitalInfo(
    hospital_clinic_name: string,
    address: string,
    city: string,
    state: string
  ) {
    const { data, error } = await updateHospital(
      hospital_clinic_name,
      address,
      city,
      state
    );
    if (!user.value || error.value) {
      return { data, error };
    }
    (user.value as Doctor).hospital_clinic_name = hospital_clinic_name;
    (user.value as Doctor).address = address;
    (user.value as Doctor).city = city;
    (user.value as Doctor).state = state;
    return { data, error };
  }

  function signout() {
    authToken.value = null;
    user.value = null;
  }

  async function uploadProfileImage(image: FormData) {
    const { data, error } = await uploadImage(image);
    if (data.value) {
      await userMe();
    }
    return { data, error };
  }

  function updatePhone(phone: string) {
    if (!user.value) {
      return;
    }
    user.value.phone = phone;
  }

  const isLoggedIn = computed(() => {
    return !!authToken.value;
  });

  const isPatient = computed(() => {
    return user.value?.role === "PATIENT";
  });

  const isDoctor = computed(() => {
    return user.value?.role === "DOCTOR";
  });

  const profileSetUp = computed(() => {
    return user.value?.profile_setup;
  });

  const first_name = computed(() => {
    if (user.value?.first_name) {
      return user.value.first_name;
    }
  });

  const last_name = computed(() => {
    if (user.value?.last_name) {
      return user.value.last_name;
    }
  });

  const gender = computed(() => {
    if (user.value?.gender) {
      return user.value.gender;
    }
  });

  const email = computed(() => {
    if (user.value?.email) {
      return user.value.email;
    }
  });

  const phone = computed(() => {
    if (user.value?.phone) {
      return user.value.phone;
    }
  });

  const birth_date = computed(() => {
    if (user.value && user.value.role == "PATIENT") {
      const patient = user.value as Patient;
      return patient.birth_date;
    }
  });

  const specialization = computed(() => {
    if (user.value && user.value.role == "DOCTOR") {
      const doctor = user.value as Doctor;
      return doctor.specialization;
    }
  });

  const hasSchedule = computed(() => {
    if (user.value && user.value.role == "DOCTOR") {
      const doctor = user.value as Doctor;
      return doctor.schedule.length > 0;
    }
  });

  const hospital_clinicName = computed(() => {
    if (user.value && user.value.role == "DOCTOR") {
      const doctor = user.value as Doctor;
      return doctor.hospital_clinic_name;
    }
  });

  const address = computed(() => {
    if (user.value && user.value.role == "DOCTOR") {
      const doctor = user.value as Doctor;
      return doctor.address;
    }
  });

  const city = computed(() => {
    if (user.value && user.value.role == "DOCTOR") {
      const doctor = user.value as Doctor;
      return doctor.city;
    }
  });

  const state = computed(() => {
    if (user.value && user.value.role == "DOCTOR") {
      const doctor = user.value as Doctor;
      return doctor.state;
    }
  });

  const image = computed(() => {
    if (user.value?.image) {
      return user.value.image;
    }
  });

  return {
    user,
    authToken,
    registerPatient,
    registerDoctor,
    userSignin,
    signout,
    uploadProfileImage,
    updatePhone,
    forgotpassword,
    resetpassword,
    userMe,
    updateUserMe,
    updateHospitalInfo,
    isLoggedIn,
    first_name,
    last_name,
    gender,
    email,
    image,
    isPatient,
    isDoctor,
    profileSetUp,
    phone,
    hasSchedule,
    birth_date,
    specialization,
    hospital_clinicName,
    address,
    city,
    state,
  };
}
