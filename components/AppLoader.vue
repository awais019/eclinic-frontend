<template>
  <div role="status" class="loader">
    <div class="loader-spinner">
      <AnimationsLoader />
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .loader {
    @apply absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40;
  }
  .loader-spinner {
    @apply opacity-100;
  }
  .spinner {
    @apply inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-primary-blue-ribbon;
  }
</style>
