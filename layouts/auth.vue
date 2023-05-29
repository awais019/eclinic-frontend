<script lang="ts" setup></script>

<template>
  <div class="app-container">
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.svg" alt="Logo" />
      </nuxt-link>
    </div>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
  .logo {
    @apply mt-6;
  }
  .logo img {
    @apply mx-auto;
  }
</style>
