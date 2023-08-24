<script lang="ts" setup>
  import { Switch } from "@headlessui/vue";
  import { setErrors } from "@formkit/core";
  import { Charge } from "~/types/users";

  const emits = defineEmits<{
    (e: "continue"): void;
  }>();

  const formId = ref("charges");

  const charges = ref([
    {
      appointment_type: "PHYSICAL",
      amount: 0,
      is_active: true,
    },
    {
      appointment_type: "VIRTUAL",
      amount: 0,
      is_active: false,
    },
  ]);

  const disableContinue = computed(() => {
    return charges.value.some(
      (charge) => charge.is_active && charge.amount === 0
    );
  });

  const { setCharges } = useCharges();

  async function submitHandler() {
    const charge: Charge[] = [];
    charges.value.forEach((_charge) => {
      const { is_active, ...rest } = _charge;
      if (is_active)
        charge.push({
          appointment_type: rest.appointment_type,
          amount: parseInt(rest.amount.toString()),
        });
    });
    const { error } = await setCharges(charge);
    if (error.value) {
      setErrors(formId.value, error.value.data);
    } else {
      emits("continue");
    }
  }
</script>

<template>
  <div class="bg-white">
    <h3 class="text-h5-sb">Setup Charges</h3>
    <FormKit type="form" :id="formId" :actions="false" @submit="submitHandler">
      <div class="flex flex-col gap-6">
        <div
          v-for="charge in charges"
          class="flex flex-col gap-6 sm:flex-row items-center"
        >
          <Switch
            v-model="charge.is_active"
            :class="
              charge.is_active ? 'bg-primary-blue-ribbon' : 'bg-neutral-gallery'
            "
            class="relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            :disabled="
              charge.is_active && charge.appointment_type === 'PHYSICAL'
            "
          >
            <span class="sr-only"> {{ charge.appointment_type }} </span>
            <span
              aria-hidden="true"
              :class="charge.is_active ? 'translate-x-4' : 'translate-x-0'"
              class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
            />
          </Switch>
          <p class="font-medium basis-1/3">{{ charge.appointment_type }}</p>
          <FormKit
            v-if="charge.is_active"
            type="number"
            placeholder="Amount"
            v-model="charge.amount"
          />
        </div>
      </div>
      <input
        type="submit"
        value="Continue"
        class="max-w-fit float-right"
        :class="[
          disableContinue
            ? 'cursor-not-allowed'
            : 'bg-primary-blue-ribbon text-white cursor-pointer',
        ]"
        :disabled="disableContinue"
      />
    </FormKit>
  </div>
</template>

<style scoped></style>
