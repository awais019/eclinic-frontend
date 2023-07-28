<script setup lang="ts">
  definePageMeta({
    layout: false,
  });

  const mailSent = ref(false);
  const email = ref("");

  function handleMailSent(mail: string) {
    mailSent.value = true;
    email.value = mail;
  }
</script>

<template>
  <ForgotPassword v-if="!mailSent" @mailSent="handleMailSent" />
  <MailSent :email="email" v-else />
</template>

<style scoped></style>
