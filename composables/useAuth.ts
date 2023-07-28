import APIResponse from "~/types/APIResponse";
import useUserStore from "~/stores/userStore";
import { Patient } from "~/types/users";

export const useAuth = () => {
  const { baseURL } = useRuntimeConfig().public;

  async function verifyEmail(token: string) {
    const { data, error } = await useFetch("/auth/verifyEmail", {
      method: "POST",
      body: {
        token,
      },
      baseURL,
    });
    return { data, error };
  }

  async function resendVerificationEmail(token: string) {
    const { data, error } = await useFetch("/auth/resend/verifyEmail", {
      method: "POST",
      body: {
        token,
      },
      baseURL,
    });
    return { data, error };
  }

  async function signin(email: string, password: string) {
    const { data, error } = await useFetch<APIResponse<{ token: string }>>(
      "/auth/signin",
      {
        method: "POST",
        body: {
          email,
          password,
        },
        baseURL,
      }
    );
    return { data, error };
  }

  async function forgotpassword(email: string) {
    const { data, error } = await useFetch("/auth/forgotpassword", {
      method: "POST",
      body: {
        email,
      },
      baseURL,
    });
    return { data, error };
  }

  async function resetpassword(token: string, password: string) {
    const { data, error } = await useFetch("/auth/resetpassword", {
      method: "POST",
      body: {
        token,
        password,
      },
      baseURL,
    });
    return { data, error };
  }

  async function me() {
    const { authToken } = useUserStore();
    const { data, error } = await useFetch<APIResponse<Patient>>("/auth/me", {
      method: "GET",
      headers: {
        "X-Auth-Token": authToken as string,
      },
      baseURL,
    });
    return { data, error };
  }

  return {
    verifyEmail,
    resendVerificationEmail,
    signin,
    forgotpassword,
    resetpassword,
    me,
  };
};
