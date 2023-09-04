<script setup lang="ts">
  import { Review } from "~/types/APIResponse";

  defineProps<{
    review: Review;
  }>();
</script>

<template>
  <div class="flex flex-col gap-3 pt-6 pb-6 border-b border-neutral-gallery">
    <img
      :src="review.user.image"
      :alt="review.user.firstName"
      class="w-16 h-16 rounded-lg"
    />
    <div>
      <p class="text-sm font-bold mt-2 flex gap-3 items-center">
        <span>by {{ review.user.firstName }} {{ review.user.lastName }} </span>
        <span class="text-neutral-dusty-gray w-[1.5px]">|</span>
        <span class="flex gap-1">
          <IconsFillstar v-for="i in review.rating" />
          <IconsStar v-for="i in 5 - review.rating" />
        </span>
      </p>
      <p class="text-neutral-dusty-gray text-sm">
        {{ formatDate(review.date) }}
      </p>
      <p class="mt-6">{{ review.review }}</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply m-0;
  }
</style>
