import useUserStore from "~/stores/userStore";

export const usePhone = () => {
  const { baseURL } = useRuntimeConfig().public;

  const userStore = useUserStore();

  function getVerificationCode(phone: string) {
    return useFetch("/auth/send/phonecode", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken || "",
      },
      body: { phone },
    });
  }

  function verifyCode(phone: string, code: string) {
    return useFetch("/auth/verify/phonecode", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken || "",
      },
      body: { phone, code },
    });
  }

  return { getVerificationCode, verifyCode };
};
