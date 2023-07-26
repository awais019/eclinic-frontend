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

  return { verifyEmail, resendVerificationEmail };
};
