<script lang="ts" setup>
  import { useToast } from "vue-toastification";
  import { Switch } from "@headlessui/vue";
  import { setErrors } from "@formkit/core";
  import type { Charge } from "~/types/users";

  interface ICharge extends Charge {
    is_active: boolean;
  }

  const formId = ref("charges");
  const toast = useToast();

  const { getCharges, updateCharges } = useCharges();

  const { data } = await getCharges();

  const charges = ref<ICharge[]>([]);

  if (data.value && data.value.data) {
    data.value.data.forEach((charge: Charge) => {
      charges.value.push({
        appointment_type: charge.appointment_type,
        amount: charge.amount,
        is_active: charge.amount > 0,
      });
    });
  }
  if (charges.value.length != 2) {
    charges.value.push({
      appointment_type: "VIRTUAL",
      amount: 0,
      is_active: false,
    });
  }

  const disableContinue = computed(() => {
    return charges.value.some((charge) => charge.amount === 0);
  });

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

    const { error } = await updateCharges(charge);
    if (error.value) {
      setErrors(formId.value, error.value.data);
    } else {
      toast.success("Charges updated");
    }
  }
</script>

<template>
  <div class="lg:basis-3/4 relative z-0 w-screen h-screen">
    <DoctorDashboardHeader
      title="Charges"
      subtitle="Change your charges for the physical and virtual consultation"
    />
    <section
      class="py-6 px-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-24 lg:overflow-y-scroll md:px-8 xl:px-16 2xl:px-36"
    >
      <div class="py-8 sm:hidden">
        <h2 class="text-h3-b">Charges</h2>
        <p class="text-neutral-dusty-gray font-medium">
          Change your charges for the physical and virtual consultation
        </p>
      </div>
      <div class="bg-white rounded-lg px-6 py-4">
        <h3 class="text-h5-sb">Setup Charges</h3>
        <FormKit
          type="form"
          :id="formId"
          :actions="false"
          @submit="submitHandler"
        >
          <div class="flex flex-col gap-6 mb-6">
            <div
              v-for="charge in charges"
              class="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <Switch
                v-model="charge.is_active"
                :class="
                  charge.is_active
                    ? 'bg-primary-blue-ribbon'
                    : 'bg-neutral-gallery'
                "
                class="relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                :disabled="charge.appointment_type === 'PHYSICAL'"
              >
                <span class="sr-only"> {{ charge.appointment_type }} </span>
                <span
                  aria-hidden="true"
                  :class="charge.is_active ? 'translate-x-4' : 'translate-x-0'"
                  class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
              <p class="font-medium basis-1/3">
                {{ charge.appointment_type }}
              </p>
              <FormKit
                v-if="charge.is_active"
                type="number"
                placeholder="Amount"
                v-model="charge.amount"
                min="10"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Continue"
            class="max-w-fit"
            :class="[
              disableContinue
                ? 'cursor-not-allowed'
                : 'bg-primary-blue-ribbon text-white cursor-pointer',
            ]"
            :disabled="disableContinue"
          />
        </FormKit>
      </div>
    </section>
  </div>
</template>
