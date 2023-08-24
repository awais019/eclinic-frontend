import { Doctor, Patient } from "~/types/users";

export default defineStore("userStore", store, { persist: true });

function store() {
  const user = ref<Doctor | Patient | null>(null);
  const authToken = ref<string | null>(null);

  const { registerPatient } = usePatient();
  const { registerDoctor } = useDoctor();
  const { signin, forgotpassword, resetpassword, me, uploadImage } = useAuth();

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

  const isLoggedIn = computed(() => {
    return !!authToken.value;
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

  const email = computed(() => {
    if (user.value?.email) {
      return user.value.email;
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
    forgotpassword,
    resetpassword,
    userMe,
    isLoggedIn,
    first_name,
    last_name,
    email,
    image,
    isPatient: computed(() => {
      return user.value?.role === "PATIENT";
    }),
    isDoctor: computed(() => {
      return user.value?.role === "DOCTOR";
    }),
    isPhoneVerified: computed(() => {
      return !!user.value?.phone;
    }),
    profileSetUp: computed(() => {
      return user.value?.profile_setup;
    }),
  };
}
