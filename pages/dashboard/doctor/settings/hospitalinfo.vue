<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { reset, setErrors } from "@formkit/core";
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";

  const userStore = useUserStore();
  const toast = useToast();

  const { hospital_clinicName, address, city, state } = storeToRefs(userStore);

  const _hospital_clinicName = ref(hospital_clinicName.value);
  const _address = ref(address.value);
  const _city = ref(city.value);
  const _state = ref(state.value);

  const formId = ref("hospital-info");

  async function submitHandler(values: any) {
    const { error } = await userStore.updateHospitalInfo(
      values.hospital_clinic_name,
      values.address,
      values.city,
      values.state
    );
    if (error.value) {
      setErrors(formId.value, error.value.data);
    } else {
      toast.success("Hospital info updated successfully");
    }
  }

  function resetHandler() {
    reset(formId.value, {
      hospital_clinicName: hospital_clinicName.value,
      address: address.value,
      city: city.value,
      state: state.value,
    });
  }
</script>

<template>
  <div>
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Hospital Info
    </h1>
    <FormKit
      type="form"
      :id="formId"
      class="my-12"
      :actions="false"
      @submit="submitHandler"
      @reset="resetHandler"
    >
      <div
        class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:gap-3"
      >
        <FormKit
          type="text"
          name="hospital_clinic_name"
          label="Hospital/Clinic Name"
          v-model="_hospital_clinicName"
          validation="required"
        />
        <FormKit
          type="text"
          name="address"
          label="Address"
          v-model="_address"
          validation="required"
        />
      </div>
      <div
        class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:gap-3"
      >
        <FormKit
          type="text"
          name="city"
          label="City"
          v-model="_city"
          validation="required"
        />
        <FormKit
          type="text"
          name="state"
          label="State"
          v-model="_state"
          validation="required"
        />
      </div>

      <div class="grid grid-cols-2 gap-3 items-baseline">
        <FormKit type="submit" label="Save Changes" />
        <input
          type="reset"
          value="Cancel"
          class="cursor-pointer border border-neutral-dusty-gray shadow-variant11 py-3.5"
        />
      </div>
    </FormKit>
  </div>
</template>

<style scoped></style>
