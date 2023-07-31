<script setup lang="ts"></script>

<template>
  <div class="app-container bg-primary-alice_blue bg-opacity-50 pt-24 pb-12">
    <div class="tablet:grid tablet:grid-cols-3 tablet:gap-32">
      <div>
        <img src="~/assets/images/logo.svg" alt="E clinic" />
        <p class="text-neutral-dusty-gray mt-3 mb-9">
          Our goal is to make healthcare accessible, convenient, and affordable.
        </p>
        <form type="form" submit-label="Subscribe">
          <input type="email" placeholder="Enter your email" />
          <input
            type="submit"
            class="bg-primary-blue-ribbon text-white text-base-b mt-6 mb-12"
            value="Subscribe"
          />
        </form>
      </div>
      <div class="justify-self-center">
        <h3 class="text-base-b">Quick Links</h3>
        <ul
          class="mt-3 mb-12 flex flex-col gap-3 text-base-reg text-neutral-dusty-gray"
        >
          <li>
            <nuxt-link
              to="/"
              class="hover:border-b-2 hover:border-b-primary-blue-ribbon hover:text-primary-blue-ribbon"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/doctors"
              class="hover:border-b-2 hover:border-b-primary-blue-ribbon hover:text-primary-blue-ribbon"
              >Find doctors</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/services"
              class="hover:border-b-2 hover:border-b-primary-blue-ribbon hover:text-primary-blue-ribbon"
              >Services</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="hover:border-b-2 hover:border-b-primary-blue-ribbon hover:text-primary-blue-ribbon"
              >About us</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hover:border-b-2 hover:border-b-primary-blue-ribbon hover:text-primary-blue-ribbon"
              >Download App</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/support"
              class="hover:border-b-2 hover:border-b-primary-blue-ribbon hover:text-primary-blue-ribbon"
              >Help & Support</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-base-b">Contact info</h3>
        <div class="text-neutral-dusty-gray mt-3 mb-6 flex flex-col gap-3">
          <div>Phone: 03xxxxxxxx</div>
          <div>Email: support@eclinic.com</div>
        </div>
        <div class="flex gap-3">
          <IconsFacebook />
          <IconsTwitter />
          <IconsLinkedin />
        </div>
      </div>
    </div>
    <div class="w-full bg-neutral-gallery h-[1px] my-12"></div>
    <div class="text-center text-neutral-dusty-gray">
      <span>Copyright &copy; </span> | <span>E-Clinic</span> |
      <span>All Rights Reserved</span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply m-0;
  }
</style>
