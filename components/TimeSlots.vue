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
    const { data } = await getTimeSlots(props.doctorId, date.value, props.day);
    slots.value = data.value ? data.value : undefined;
  });

  watch(selectSlot, () => {
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
        slot.disable ? 'text-neutral-mine-shaft cursor-not-allowed' : '',
        ' px-6 py-3 rounded-lg',
      ]"
      :disabled="slot.disable"
      @click="selectSlot(slot.start)"
    >
      {{ slot.start }}
    </button>
  </div>
</template>

<style scoped></style>
