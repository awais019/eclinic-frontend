<script setup lang="ts">
  const props = defineProps<{
    doctorId: string;
    day: string;
    date: Date;
  }>();

  const emits = defineEmits<{
    (e: "update:timeSlot", selectedSlot: string): void;
  }>();

  const { getTimeSlots } = useSchedule();

  const { date } = toRefs(props);
  date.value.setHours(0, 0, 0, 0);

  const slots = ref<
    { start: string; end: string; disable: boolean }[] | undefined
  >([]);

  const { data } = await getTimeSlots(props.doctorId, date.value, props.day);

  slots.value = data.value ? data.value : undefined;

  const selectedSlot = ref<string | null>(null);

  const selectSlot = (slot: string) => {
    selectedSlot.value = slot;
  };

  watch(date, async () => {
    date.value.setHours(0, 0, 0, 0);
    const { data } = await getTimeSlots(props.doctorId, date.value, props.day);
    slots.value = data.value ? data.value : undefined;
  });

  watch(selectedSlot, () => {
    if (selectedSlot.value) {
      emits("update:timeSlot", selectedSlot.value);
    }
  });
</script>

<template>
  <div
    v-if="slots"
    class="grid grid-cols-3 gap-x-4 gap-y-6 items-center text-neutral-dusty-gray md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
  >
    <button
      v-for="slot in slots"
      :class="[
        slot.start == selectedSlot
          ? 'bg-primary-blue-ribbon text-white'
          : 'bg-neutral-wild-sand',
        slot.disable
          ? 'relative after:absolute after:inset-0 after:bg-torch-red after:opacity-50 after:rounded-lg cursor-not-allowed'
          : '',
        'px-6 py-3 rounded-lg',
      ]"
      :disabled="slot.disable"
      @click.prevent="selectSlot(slot.start)"
    >
      {{ slot.start }}
    </button>
  </div>
</template>

<style scoped></style>
