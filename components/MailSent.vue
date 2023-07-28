<script setup lang="ts">
  import useUserStore from "~/stores/userStore";
  import { useToast } from "vue-toastification";

  const props = defineProps<{
    email: string;
  }>();

  const userStore = useUserStore();
  const toast = useToast();

  const maskedEmail = computed(() => {
    const [name, domain] = props.email.split("@");
    const maskedName = name
      .split("")
      .map((char, index) => (index < 2 ? char : "*"))
      .join("");
    return `${maskedName}@${domain}`;
  });

  async function handleResendMail() {
    const { error } = await userStore.forgotpassword(props.email);
    if (!error.value) {
      toast.success("Mail sent successfully");
    } else {
      toast.error("Something went wrong");
    }
  }
</script>

<template>
  <DecorativeLogo align="right" />
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:h-screen desktop:gap-40 tablet:gap-20 mobile:app-container"
  >
    <div
      class="hidden bg-primary-blue-ribbon tablet:flex tablet:items-center tablet:justify-center"
    >
      <img src="~/assets/images/mailsent.svg" alt="Decorative image" />
    </div>
    <div
      class="flex flex-col justify-center mt-12 tablet:mt-0 tablet:max-w-[30.5rem]"
    >
      <h1 class="text-h2-sb">Check your Email</h1>
      <span>
        We have sent an email with password reset information to
        {{ maskedEmail }}.</span
      >
      <p class="mt-12 text-sm font-medium text-primary-blue-ribbon">
        Didn't receive the email? Check spam or promotion folder or
      </p>
      <button
        class="mt-12 bg-primary-blue-ribbon text-white text-base-sb px-6 py-4 rounded-lg"
        @click="handleResendMail"
      >
        Resend Email
      </button>
      <div class="mt-6 text-sm font-medium">
        Take me back to
        <nuxt-link to="signin" class="text-primary-blue-ribbon"
          >Signin</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
