<script lang="ts" setup>
  import { Switch } from "@headlessui/vue";
  // @ts-ignore
  import VueTimePicker from "vue3-timepicker";
  import "vue3-timepicker/dist/VueTimepicker.css";
  import { setErrors } from "@formkit/core";

  const emits = defineEmits<{
    (e: "continue"): void;
  }>();

  const formId = ref("schedule");

  const interval = ref(30);

  const appointment_interval = computed(() => interval.value);

  const days = ref([
    {
      day: "Monday",
      is_active: false,
      startTime: "08:00",
      endTime: "18:00",
      break_start: "12:00",
      break_end: "13:00",
      appointment_interval: appointment_interval.value,
    },
    {
      day: "Tuesday",
      is_active: false,
      startTime: "08:00",
      endTime: "18:00",
      break_start: "12:00",
      break_end: "13:00",
      appointment_interval: appointment_interval.value,
    },
    {
      day: "Wednesday",
      is_active: false,
      startTime: "08:00",
      endTime: "18:00",
      break_start: "12:00",
      break_end: "13:00",
      appointment_interval: appointment_interval.value,
    },
    {
      day: "Thursday",
      is_active: false,
      startTime: "08:00",
      endTime: "18:00",
      break_start: "12:00",
      break_end: "13:00",
      appointment_interval: appointment_interval.value,
    },
    {
      day: "Friday",
      is_active: false,
      startTime: "08:00",
      endTime: "18:00",
      break_start: "12:00",
      break_end: "13:00",
      appointment_interval: appointment_interval.value,
    },
    {
      day: "Saturday",
      is_active: false,
      startTime: "08:00",
      endTime: "18:00",
      break_start: "12:00",
      break_end: "13:00",
      appointment_interval: appointment_interval.value,
    },
    {
      day: "Sunday",
      is_active: false,
      startTime: "08:00",
      endTime: "18:00",
      break_start: "12:00",
      break_end: "13:00",
      appointment_interval: appointment_interval.value,
    },
  ]);

  const disableContinue = computed(() => {
    return days.value.filter((day) => day.is_active).length === 0;
  });

  const { setSchedule } = useSchedule();

  async function submitHandler() {
    const { error } = await setSchedule(days.value);
    if (error.value) {
      setErrors(formId.value, error.value.data);
    } else {
      emits("continue");
    }
  }
</script>

<template>
  <div class="bg-white">
    <h3 class="text-h5-sb">Setup your Availability</h3>
    <FormKit type="form" :id="formId" :actions="false" @submit="submitHandler">
      <FormKit
        type="select"
        v-model="interval"
        name="duration"
        label="Per Appointment Duration"
        aria-placeholder="30 mins"
        :options="[
          { label: '30 mins', value: '30' },
          { label: '45 mins', value: '45' },
          { label: '60 mins', value: '60' },
        ]"
      />
      <div class="py-16">
        <h3 class="text-h5-sb mb-3">Availability</h3>
        <div class="flex flex-col gap-6">
          <div v-for="day in days" class="flex gap-6 flex-col sm:flex-row">
            <Switch
              v-model="day.is_active"
              :class="
                day.is_active ? 'bg-primary-blue-ribbon' : 'bg-neutral-gallery'
              "
              class="relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span class="sr-only"> {{ day.day }} </span>
              <span
                aria-hidden="true"
                :class="day.is_active ? 'translate-x-4' : 'translate-x-0'"
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
              />
            </Switch>
            <p class="font-medium basis-1/5">{{ day.day }}</p>
            <div
              class="flex flex-col gap-6 !text-neutral-dusty-gray !font-medium items-center"
              v-if="day.is_active"
            >
              <div class="flex gap-6">
                <div class="flex flex-col gap-2">
                  <label for="starttime" class="font-medium">Start Time</label>
                  <VueTimePicker
                    v-model="day.startTime"
                    name="starttime"
                    placeholder="8:00"
                    min="8:00"
                    :minute-interval="30"
                    :hideClearButton="true"
                    :hour-range="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="endtime" class="font-medium">End Time</label>
                  <VueTimePicker
                    v-model="day.endTime"
                    name="endtime"
                    placeholder="18:00"
                    :minute-interval="30"
                    :hideClearButton="true"
                    :hour-range="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]"
                  />
                </div>
              </div>
              <div class="flex gap-6 items-center">
                <div class="flex flex-col gap-2">
                  <label for="starttime" class="font-medium"
                    >Break Start Time</label
                  >
                  <VueTimePicker
                    v-model="day.break_start"
                    name="starttime"
                    placeholder="8:00"
                    min="8:00"
                    :minute-interval="30"
                    :hideClearButton="true"
                    :hour-range="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="endtime" class="font-medium"
                    >Break End Time</label
                  >
                  <VueTimePicker
                    v-model="day.break_end"
                    name="endtime"
                    placeholder="18:00"
                    :minute-interval="30"
                    :hideClearButton="true"
                    :hour-range="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="submit"
        value="Continue"
        class="max-w-fit float-right font-medium"
        :class="[
          disableContinue
            ? 'cursor-not-allowed bg-transparent text-neutral-dusty-gray'
            : 'cursor-pointer text-white bg-primary-blue-ribbon',
        ]"
        :disabled="disableContinue"
      />
    </FormKit>
  </div>
</template>

<style scoped></style>
