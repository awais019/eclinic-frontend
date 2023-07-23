import { Doctor, Patient } from "~/types/users";

export default defineStore("userStore", () => {
  const user = ref<Doctor | Patient | null>(null);

  const { registerPatient } = usePatient();
  const { registerDoctor } = useDoctor();

  return { user, registerPatient, registerDoctor };
});
