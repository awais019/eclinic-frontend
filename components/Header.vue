<script lang="ts" setup>
  const openNav = ref(false);
  function toggle() {
    openNav.value = !openNav.value;
  }
</script>

<template>
  <header>
    <div class="container flex py-7">
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
      class="container nav"
      :class="[openNav ? 'block' : 'hidden', 'tablet:block']"
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
            <li class="signup">
              <nuxt-link to="/signup">Signup</nuxt-link>
            </li>
            <li class="nav__item login">
              <nuxt-link to="/signin">Signin</nuxt-link>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
  .hamburger-menu,
  .close {
    @apply ml-auto;
  }
  .nav {
    height: 100dvh;
  }
  .nav__list {
    @apply flex flex-col gap-3 text-neutral-dusty-gray text-base-reg;
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
    @apply mt-8 text-center;
  }
  .signup {
    @apply text-neutral-white text-base-sb bg-primary-blue-ribbon 
    py-3 rounded-lg mb-6 cursor-pointer;
  }
  .login a:hover {
    @apply border-none;
  }
</style>
