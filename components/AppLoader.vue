<template>
  <div role="status" class="loader">
    <AnimationsLoader />
    <span class="sr-only">Loading...</span>
  </div>
</template>

<style lang="postcss" scoped>
  .loader {
    @apply absolute inset-0 z-50 flex items-center;
  }

  .spinner {
    @apply inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-primary-blue-ribbon;
  }
</style>
