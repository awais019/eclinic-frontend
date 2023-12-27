<script setup lang="ts">
  import type { Review } from "~/types/APIResponse";
  import useUserStore from "~/stores/userStore";

  const userStore = useUserStore();
  const { getReviews } = useReviews();

  const reviews = ref<Review[]>([]);

  const { data } = await getReviews();

  if (data.value) {
    reviews.value = data.value.data;
  }
</script>

<template>
  <div class="lg:basis-3/4 relative z-0 w-screen">
    <DoctorDashboardHeader
      title="Rating & Reviews"
      subtitle="Explore the feedback and reviews from patients who have experienced your care."
    />
    <section
      class="py-6 px-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-24 lg:overflow-y-scroll md:px-8 xl:px-16"
    >
      <div class="py-8 sm:hidden">
        <h2 class="text-h3-b">Rating & Reviews</h2>
        <p class="text-neutral-dusty-gray font-medium">
          Explore the feedback and reviews from patients who have experienced
          your care.
        </p>
      </div>
      <div class="bg-white rounded-lg px-6 py-4">
        <div v-if="reviews && reviews.length">
          <div class="pb-8 border-b border-neutral-gallery">
            <h3
              class="text-h4-b mb-8 relative max-w-fit after:absolute after:-bottom-1.5 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
            >
              Overall Rating
            </h3>
            <p class="flex flex-col gap-1.5" v-if="userStore.rating">
              <span class="text-h5-md">{{ userStore.rating }} out of 5.0</span>
              <span class="text-neutral-dusty-gray">Overll rating</span>
              <span class="flex gap-1">
                <IconsFillstar v-for="i in Math.floor(userStore.rating)" />
                <IconsStar v-for="i in 5 - Math.floor(userStore.rating)" />
              </span>
            </p>
          </div>
          <div>
            <DoctorReview
              v-for="review in reviews"
              :review="review"
              :key="review.id"
            />
          </div>
        </div>
        <p
          v-else
          class="text-neutral-dusty-gray font-medium text-xl text-center"
        >
          Not rated yet
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
