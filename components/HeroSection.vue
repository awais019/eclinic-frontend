<script lang="ts" setup></script>

<template>
  <div class="container pt-24 pb-10">
    <div class="content">
      <h1 class="text-display-xb">
        Expert
        <span class="text-primary-blue-ribbon">medical care is</span> just a
        click away
      </h1>
      <div class="tag-line">
        Book your appointment today with our experienced doctors. Get the care
        you need and start feeling better.
      </div>
      <div class="actions">
        <button class="btn btn-primary action-btn shadow-variant1">
          <nuxt-link to="/doctors"> Book Your Visit <icons-arrow /> </nuxt-link>
        </button>
        <button class="btn action-btn shadow-variant2">
          Get Mobile App <icons-download />
        </button>
      </div>
      <div class="users-count">
        <icons-users />
        <div>
          <span class="text-base-sb">2,000+</span> <br />
          Happy <span class="text-primary-blue-ribbon">Users</span>
          <icons-heart />
        </div>
        <div>
          <span class="text-base-sb">500+</span> <icons-stars /> <br />
          Qualified <span class="text-primary-blue-ribbon">Professionals</span>
        </div>
      </div>
    </div>
    <div class="img">
      <img
        src="~/assets/images/hero-image.svg"
        alt="hero-image"
        class="tablet:hidden"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .tag-line {
    @apply text-base-reg text-neutral-dusty-gray text-center mt-6 tracking-widest;
  }
  .actions {
    @apply flex flex-col gap-6 mt-16;
  }
  .action-btn {
    @apply w-full py-3;
  }
  .users-count {
    @apply mt-12 flex flex-col items-center gap-6 text-sm text-center;
  }
  .img {
    @apply mt-8;
  }
</style>
