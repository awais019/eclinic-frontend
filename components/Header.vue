<script lang="ts" setup>
  const openNav = ref(false);
  function toggle() {
    openNav.value = !openNav.value;
  }
</script>

<template>
  <header>
    <div
      class="container py-7 tablet:grid tablet:grid-flow-col tablet:grid-cols-nav tablet:items-center"
    >
      <div class="mobile:flex inline-block">
        <div>
          <nuxt-link to="/">
            <img src="~/assets/images/logo.svg" alt="Logo" />
          </nuxt-link>
        </div>
        <button
          class="hamburger-menu tablet:hidden"
          :class="{ hidden: openNav }"
          @click="toggle"
        >
          <icons-hamburger />
        </button>
        <button
          class="close tablet:hidden"
          :class="[openNav ? '' : 'hidden']"
          @click="toggle"
        >
          <icons-close />
        </button>
      </div>
      <div
        class="nav"
        :class="[openNav ? 'block' : 'hidden', 'tablet:inline-block']"
      >
        <nav>
          <ul class="nav__list">
            <li class="nav__item">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/doctors">Find Doctor</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/services">Services</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/about">About Us</nuxt-link>
            </li>
            <ul class="nav__list-sub">
              <li class="nav__item signup">
                <nuxt-link to="/signup">Signup</nuxt-link>
              </li>
              <li class="nav__item login">
                <nuxt-link to="/signin">Signin</nuxt-link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
  .hamburger-menu,
  .close {
    @apply ml-auto;
  }
  .nav {
    @apply mobile:h-[100dvh] mobile:py-7;
  }
  .nav__list {
    @apply text-neutral-dusty-gray desktop:text-base-reg tablet:text-sm mobile:text-base-reg tablet:flex tablet:gap-6;
  }
  .nav__item {
    @apply py-3;
  }
  .nav__item a {
    @apply py-2 inline;
  }
  .nav__item a:hover {
    @apply text-primary-blue-ribbon border-b-2 border-primary-blue-ribbon;
  }
  .router-link-exact-active {
    @apply text-primary-blue-ribbon;
  }
  .nav__list-sub {
    @apply mobile:mt-8 text-center tablet:ml-auto tablet:flex tablet:flex-row-reverse tablet:gap-6;
  }
  .signup {
    @apply text-neutral-white text-base-sb bg-primary-blue-ribbon rounded-lg cursor-pointer mobile:mb-6 tablet:px-6;
  }
  .signup a:hover {
    @apply text-neutral-white border-none;
  }
  .login a:hover {
    @apply border-none;
  }
</style>
