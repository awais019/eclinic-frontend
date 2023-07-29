<script lang="ts" setup>
  import { useToast } from "vue-toastification";
  definePageMeta({
    layout: false,
    middleware: "success-error",
  });

  const route = useRoute();
  const toast = useToast();

  async function handleClick() {
    const token = route.query.token as string;
    if (token) {
      const { data, error } = await useAuth().resendVerificationEmail(token);
      if (data.value) {
        toast.success(data.value);
      } else {
        toast.error(error.value?.data);
      }
    }
  }
</script>

<template>
  <Error>
    <div class="text-center mobile:mt-[calc(100vw/2)]">
      <AnimationsError
        :height="96"
        :width="96"
        :loop="false"
        :auto-play="true"
      />
      <h4 class="text-h4-sb">Invalid Token.</h4>
      <div
        class="mt-6 bg-primary-blue-ribbon px-6 py-4 rounded-lg text-base-sb text-white"
      >
        <button @click="handleClick">Request new verification link</button>
      </div>
    </div>
  </Error>
</template>
