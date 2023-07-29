<script lang="ts" setup>
  import useUserStore from "~/stores/userStore";

  const openNav = ref(false);

  const userStore = useUserStore();

  function toggle() {
    openNav.value = !openNav.value;
  }
</script>

<template>
  <header>
    <div
      class="app-container py-7 relative tablet:grid tablet:grid-flow-col tablet:grid-cols-nav tablet:items-center"
    >
      <div class="mobile:flex items-center inline-block">
        <div>
          <nuxt-link to="/">
            <img src="~/assets/images/logo.svg" alt="Logo" />
          </nuxt-link>
        </div>
        <div
          class="ml-auto mr-6 tablet:m-0 flex gap-6 items-center justify-center tablet:absolute right-0 top-6"
          v-if="userStore.isLoggedIn"
        >
          <Notifications />
          <ProfileDropDown />
        </div>
        <button
          class="tablet:hidden"
          :class="{ hidden: openNav, 'hamburger-menu': !userStore.isLoggedIn }"
          @click="toggle"
        >
          <icons-hamburger />
        </button>
        <button
          class="tablet:hidden"
          :class="{ hidden: !openNav, close: !userStore.isLoggedIn }"
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
          <ul class="nav__list desktop:text-h4-reg mobile:text-base-reg">
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
            <ul class="nav__list-sub" v-if="!userStore.isLoggedIn">
              <li class="nav__item signup btn btn-primary">
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
  img {
    @apply m-0;
  }
  .hamburger-menu,
  .close {
    @apply ml-auto;
  }
  .nav {
    @apply mobile:h-[100dvh] mobile:py-7;
  }
  .nav__list {
    @apply text-neutral-dusty-gray tablet:text-sm tablet:flex tablet:gap-6;
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

  .signup > .router-link-exact-active {
    @apply text-neutral-white;
  }

  .nav__list-sub {
    @apply mobile:mt-8 text-center tablet:ml-auto tablet:flex tablet:flex-row-reverse tablet:gap-6;
  }
  .signup {
    @apply mobile:mb-6 tablet:px-6;
  }
  .signup a:hover {
    @apply text-neutral-white border-none;
  }
  .login a:hover {
    @apply border-none;
  }
</style>
