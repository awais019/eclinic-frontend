<script lang="ts" setup>
  const FAQs = [
    {
      question: "What should I do before my doctor appointment?",
      answer:
        "Make a list of any symptoms, questions, or concerns you have, and bring a list of your current medication and medical history",
    },
    {
      question: "Can I bring someone with me to my appointment?",
      answer:
        "Yes, you can bring a family member or friend to your appointment. They can help you remember important information and take notes.",
    },
    {
      question: "What if I need to cancel or reschedule my appointment?",
      answer:
        "You can cancel or reschedule it from your dashboard but please do it at least 24 hours before your appointment if you need to cancel or reschedule. This will allow us to offer your appointment time to another patient.",
    },
  ];
</script>

<template>
  <div
    class="app-container mb-24 desktop:flex desktop:items-center desktop:gap-24"
  >
    <img src="~/assets/images/FAQ.svg" alt="FAQs" />
    <div>
      <p
        class="bg-primary-zumthor rounded-2xl px-2 py-1 text-primary-blue-ribbon text-sm font-medium mt-9 mb-4 max-w-fit"
      >
        Quick Solutions
      </p>
      <h3 class="text-h2-b">Frequently asked question</h3>
      <ul class="mt-12 flex flex-col gap-6">
        <FAQ v-for="FAQ in FAQs" :FAQ="FAQ" />
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply desktop:m-0;
  }
</style>
