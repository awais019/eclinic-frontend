<script lang="ts" setup></script>

<template>
  <div class="bg-testimonials bg-no-repeat bg-cover">
    <div class="app-container py-24">
      <p
        class="bg-white text-primary-blue-ribbon max-w-fit m-auto rounded-lg px-2 py-1 text-sm"
      >
        Testimonials
      </p>
      <h3 class="text-h2-b text-white mt-3 mb-12 text-center">
        What Our Users Say About Us?
      </h3>
      <div class="tablet:flex tablet:items-center tablet:gap-28">
        <img src="~/assets/images/blob.svg" alt="blob" />
        <div class="bg-white p-6 rounded-2xl shadow-variant7 blockquote">
          <p>
            Eclinic is the most lively app I've used and it is very easy to
            quickly understand what is happening! Thank you!
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-left">Nathaniel Valle</span>
            <img
              class="m-0 inline-block"
              src="~/assets/images/stars.svg"
              alt="stars"
            />
          </div>
          <span>Patient</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .blockquote::before {
    content: url("~/assets/images/open-quote.svg");
  }
  .blockquote::after {
    content: url("~/assets/images/close-quote.svg");
    margin-left: 90%;
  }
</style>
