<script setup lang="ts">
  const props = defineProps<{
    doctorId: string;
    day: string;
    date: Date;
  }>();

  const { getTimeSlots } = useSchedule();

  const { data } = await getTimeSlots(props.doctorId, props.date, props.day);

  const selectedSlot = ref<string | null>(null);

  const selectSlot = (slot: string) => {
    selectedSlot.value = slot;
  };
</script>

<template>
  <div
    v-if="data"
    class="grid grid-cols-3 gap-x-4 gap-y-6 items-center text-neutral-dusty-gray md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
  >
    <button
      v-for="slot in data"
      :class="[
        slot.start == selectedSlot
          ? 'bg-primary-blue-ribbon text-white'
          : 'bg-neutral-wild-sand',
        ' px-6 py-3 rounded-lg',
      ]"
      @click="selectSlot(slot.start)"
    >
      {{ slot.start }}
    </button>
  </div>
</template>

<style scoped></style>
