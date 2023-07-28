import { Doctor, Patient } from "~/types/users";

export default defineStore("userStore", () => {
  const user = ref<Doctor | Patient | null>(null);
  const authToken = ref<string | null>(null);

  const { registerPatient } = usePatient();
  const { registerDoctor } = useDoctor();
  const { signin } = useAuth();

  async function userSignin(email: string, password: string) {
    const { data, error } = await signin(email, password);
    if (data.value) {
      authToken.value = data.value.data.token;
    }
    return { data, error };
  }

  return { user, authToken, registerPatient, registerDoctor, userSignin };
});
