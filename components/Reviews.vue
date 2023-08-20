<script setup lang="ts">
  const props = defineProps<{
    doctorId: string;
    rating: number;
  }>();

  const { doctorId } = toRefs(props);

  const { getReviews } = useReviews();

  const { data, error } = await getReviews(doctorId.value);

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemper",
    "October",
    "November",
    "December",
  ];

  const formatDate = (date: string) => {
    const d = new Date(date);
    const month = MONTHS[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const hours = d.getUTCHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    if (minutes < 10) {
      return `${month} ${day}, ${year} ${hours % 12}:0${minutes} ${ampm}`;
    }
    return `${month} ${day}, ${year} ${hours % 12}:${minutes} ${ampm}`;
  };
</script>

<template>
  <div>
    <div class="mb-12 pb-12 border-b border-neutral-gallery">
      <div class="max-w-fit mb-12">
        <h3 class="text-h3-b">Rating & Reviews</h3>
        <div class="bg-primary-blue-ribbon h-0.5 w-3/4"></div>
      </div>
      <p class="text-h4-b">{{ rating }} out of 5.0</p>
      <p class="text-base-md text-neutral-dusty-gray">Overall rating</p>
      <p class="flex gap-2">
        <IconsFillstar v-for="i in rating" />
        <IconsStar v-for="i in 5 - rating" />
      </p>
    </div>
    <div v-if="data">
      <div v-for="review in data?.data" :key="review.id">
        <img
          :src="review.user.image"
          :alt="review.user.firstName"
          class="w-16 h-16 rounded-full m-0"
        />
        <p class="text-sm font-bold mt-2 flex gap-3 items-center">
          <span
            >by {{ review.user.firstName }} {{ review.user.lastName }}
          </span>
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
  </div>
</template>

<style scoped></style>
