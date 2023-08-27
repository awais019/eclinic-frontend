<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { reset } from "@formkit/core";
  import useUserStore from "~/stores/userStore";

  const breadCrumbs = ref([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Settings",
      path: "/settings",
    },
    {
      name: "Personal Info",
      path: "/settings/personalinfo",
    },
  ]);

  const userStore = useUserStore();

  const { first_name, last_name, gender, specialization, birth_date } =
    storeToRefs(userStore);

  const firstName = computed(() => first_name.value);
  const lastName = computed(() => last_name.value);
  const birthDate = computed(() => birth_date.value);
  const _gender = computed(() => gender.value);
  const _specialization = computed(() => specialization.value);

  const formId = ref("personal-info");
  const date = new Date().toISOString().slice(0, 10);

  async function submitHandler(values: any) {
    await userStore.updateUserMe({
      first_name: values.firstName,
      last_name: values.lastName,
      gender: values._gender,
      specialization: values._specialization,
      birthdate: values.birthDate,
    });
  }

  function resetHandler() {
    reset(formId.value, {
      firstName: first_name.value,
      lastName: last_name.value,
      _gender: gender.value,
      _specialization: specialization.value,
      birthDate: birth_date.value,
    });
  }
</script>

<template>
  <PageTitle title="Pernsonal Info" :bread-crumbs="breadCrumbs" />
  <div class="app-container">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Peronsal Info
    </h1>
    <section class="py-12 max-w-4xl mx-auto">
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
            name="firstName"
            label="First name"
            v-model="firstName"
            validation="required"
          />
          <FormKit
            type="text"
            name="lastName"
            label="Last name"
            v-model="lastName"
            validation="required"
          />
        </div>
        <FormKit
          v-if="userStore.isPatient"
          type="date"
          v-model="birthDate"
          name="birthDate"
          label="Date of Birth"
          placeholder="Select Date of Birth"
          :max="date"
          validation="required"
        />
        <FormKit
          v-if="userStore.isDoctor"
          type="text"
          v-model="_specialization"
          name="_specialization"
          label="Specialization"
          validation="required"
        />
        <FormKit
          type="select"
          v-model="_gender"
          name="_gender"
          label="Gender"
          :options="['Male', 'Female', 'Other']"
          validation="required"
        />
        <div class="grid grid-cols-2 gap-3 items-baseline">
          <FormKit type="submit" label="Save Changes" />
          <input
            type="reset"
            value="Cancel"
            class="cursor-pointer border border-neutral-dusty-gray shadow-variant11 py-3.5"
          />
        </div>
      </FormKit>
    </section>
  </div>
</template>

<style scoped></style>
