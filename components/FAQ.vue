<script lang="ts" setup>
  defineProps<{
    FAQ: { question: string; answer: string };
  }>();

  const showAnswer = ref(false);

  function toggleAnswer() {
    showAnswer.value = !showAnswer.value;
  }
</script>

<template>
  <li>
    <div
      class="flex items-center gap-6"
      :class="{ 'text-primary-blue-ribbon': showAnswer }"
    >
      <h5 class="text-h5-sb">{{ FAQ.question }}</h5>
      <button @click="toggleAnswer">
        <IconsArrowdown
          :class="{ 'transform rotate-180 trnasition-all': showAnswer }"
        />
      </button>
    </div>
    <Transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showAnswer"
        class="mt-6 p-4 shadow-variant6 rounded-2xl text-neutral-dusty-gray text-base-reg"
      >
        <p class="text-p-sb">{{ FAQ.answer }}</p>
      </div>
    </Transition>
    <div></div>
  </li>
</template>

<style scoped></style>
