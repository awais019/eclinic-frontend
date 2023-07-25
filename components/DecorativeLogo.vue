<template>
  <div class="logo">
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

<style lang="postcss" scoped>
  img {
    @apply mx-auto;
  }
</style>
