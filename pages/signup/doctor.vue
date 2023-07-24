<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });

  const modalController = useModal();
</script>

<template>
  <DoctorRegistration @registraion-successful="modalController.open" />
  <LazyAppModal :controller="modalController">
    <div class="bg-white p-10 rounded-3xl text-h4-md">
      <div>
        Registration Successful. <br />
        Check your email for
        <span class="text-primary-blue-ribbon">verification</span> <br />
        After verification you'll have to wait <br />
        until your account is approved by our team.
      </div>
    </div>
  </LazyAppModal>
</template>

<style scoped></style>
