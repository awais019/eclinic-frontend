<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });
  const modalController = useModal();
</script>

<template>
  <PatientRegistration @registraion-successful="modalController.open" />
  <LazyAppModal :controller="modalController">
    <div class="bg-white p-10 rounded-3xl text-h4-md">
      Registration Successful. <br />
      Check your email for
      <span class="text-primary-blue-ribbon">verification</span>
    </div>
  </LazyAppModal>
</template>

<style scoped></style>
