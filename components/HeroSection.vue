<script lang="ts" setup></script>

<template>
  <div class="app-container mobile:pt-24 pb-10 tablet:flex tablet:gap-8">
    <div class="content">
      <span class="polygon">
        <icons-polygon />
      </span>
      <h1 class="text-display-xb">
        Expert
        <span class="text-primary-blue-ribbon">medical care is</span> just a
        click away <span class="beat"><icons-ellipse /> <icons-beat /></span>
      </h1>
      <div class="tag-line text-base-reg">
        Book your appointment today with our experienced doctors. Get the care
        you need and start feeling better.
      </div>
      <div class="actions">
        <nuxt-link
          to="/doctors"
          class="btn btn-primary action-btn shadow-variant1"
        >
          Book Your Visit <icons-arrow />
        </nuxt-link>

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
        src="~/assets/images/hero-image-mobile.svg"
        alt="hero-image"
        class="tablet:hidden"
      />
      <img
        src="~/assets/images/hero-image-desktop.svg"
        alt="hero-image"
        class="mobile:hidden"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .polygon {
    @apply relative left-[85%] mobile:hidden;
  }
  .beat {
    @apply mobile:hidden;
  }
  .content {
    @apply desktop:pt-40 tablet:pt-16 flex-1;
  }
  .tag-line {
    @apply text-neutral-dusty-gray mobile:text-center mt-6 tracking-widest;
  }
  .actions {
    @apply flex flex-col gap-6 mt-16 desktop:flex-row;
  }
  .action-btn {
    @apply w-full py-3 text-center tablet:py-4;
  }
  .users-count {
    @apply mt-12 flex flex-col items-center gap-6 text-sm text-center tablet:flex-row;
  }
  .img {
    @apply mobile:mt-8;
  }
</style>
