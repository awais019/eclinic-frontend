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
  return { verifyEmail };
};
