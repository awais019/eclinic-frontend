import { Doctor, Patient } from "~/types/users";

export default defineStore("userStore", store, { persist: true });

function store() {
  const user = ref<Doctor | Patient | null>(null);
  const authToken = ref<string | null>(null);

  const { registerPatient } = usePatient();
  const { registerDoctor } = useDoctor();
  const { signin, forgotpassword, resetpassword, me } = useAuth();

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

  const isLoggedIn = computed(() => {
    return !!authToken.value;
  });

  const imageUrl = computed(() => {
    if (user.value?.imageUrl) {
      return user.value.imageUrl;
    }
  });

  return {
    user,
    authToken,
    registerPatient,
    registerDoctor,
    userSignin,
    signout,
    forgotpassword,
    resetpassword,
    userMe,
    isLoggedIn,
    imageUrl,
  };
}
