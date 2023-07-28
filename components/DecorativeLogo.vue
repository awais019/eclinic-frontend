<script setup lang="ts">
  defineProps<{
    align?: "left" | "right";
  }>();
</script>

<template>
  <div
    :class="[
      align == 'right' ? 'tablet:left-16' : 'tablet:right-16',
      'mt-6 tablet:absolute tablet:h-[24px] tablet:w-[110px] tablet:z-10',
    ]"
  >
    <nuxt-link to="/">
      <img
        src="~/assets/images/logo-white.svg"
        alt="Logo"
        class="mobile:hidden"
      />
      <img src="~/assets/images/logo.svg" alt="Logo" class="tablet:hidden" />
    </nuxt-link>
  </div>
</template>
