<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });
  const modalController = useModal();
</script>

<template>
  <PatientRegistration @registraion-successful="modalController.open" />
  <LazyAppModal :controller="modalController">
    <div class="bg-white max-w-[33.5rem] p-6 rounded-2xl">
      <button @click="modalController.close">
        <IconsClose />
      </button>
      <div class="text-center mt-7">
        <AnimationsCheck
          :height="96"
          :width="96"
          :loop="false"
          :autoPlay="true"
        />
        <h3 class="text-h4-sb">Registered Sucessfully</h3>
        <p>
          Check your email for
          <span class="text-primary-blue-ribbon">verification.</span>
        </p>
      </div>
    </div>
  </LazyAppModal>
</template>

<style scoped></style>
