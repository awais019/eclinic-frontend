<script setup lang="ts">
  const { getReviews } = useReviews();

  const { data, error } = await getReviews();

  function shrinkText(text: string, length: number) {
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
</script>

<template>
  <div class="bg-white rounded-2xl">
    <h2 class="font-semibold px-6 py-4 border-b border-neutral-gallery">
      Patient Reviews
    </h2>
    <ul v-if="data">
      <li
        v-for="(review, index) in data.data.slice(0, 3)"
        :key="review.id"
        class="flex gap-4 py-3 px-6 justify-start"
        :class="{
          'border-b border-neutral-gallery': index != data.data.length - 1,
        }"
      >
        <img
          :src="review.user.image"
          :alt="review.user.firstName"
          class="w-12 h-12 rounded-lg"
        />
        <div class="flex justify-between items-center grow">
          <p class="text-sm flex flex-col gap-4">
            <span class="font-semibold"
              >{{ review.user.firstName }} {{ review.user.lastName }}</span
            >
            <span class="text-neutral-dusty-gray">{{
              shrinkText(review.review, 30)
            }}</span>
          </p>
          <span>
            <IconsFillstar v-for="i in review.rating" />
            <IconsStar v-for="i in 5 - review.rating" />
          </span>
        </div>
      </li>
    </ul>
    <p class="py-3 text-neutral-dusty-gray" v-else>No reviews yet.</p>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply m-0;
  }
</style>
