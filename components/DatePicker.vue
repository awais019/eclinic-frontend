<script setup lang="ts">
  import VueDatePicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";

  const props = defineProps<{
    doctorId: string;
  }>();

  const emits = defineEmits<{
    (e: "update:date", selectedDate: Date): void;
  }>();

  const { getTwoWeeks } = useSchedule();

  const { data } = await getTwoWeeks(props.doctorId);

  const allowedDates = computed(() => {
    return data.value?.data.map((date) => {
      if (!date.disable) {
        return date.date;
      }
    }) as string[];
  });

  const selectedDate = ref<Date | null>(
    new Date(allowedDates.value[0]) || null
  );

  function handleChange(date: Date) {
    selectedDate.value = date;
  }

  watch(selectedDate, () => {
    if (selectedDate.value) {
      emits("update:date", selectedDate.value);
    }
  });
</script>

<template>
  <VueDatePicker
    v-if="data"
    inline
    :enable-time-picker="false"
    no-today
    :allowed-dates="allowedDates"
    @internal-model-change="handleChange"
  />
  <div v-else>Error fetching schedule</div>
</template>

<style scoped></style>
