import APIResponse from "~/types/APIResponse";

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

  return { verifyEmail, resendVerificationEmail, signin, forgotpassword };
};
