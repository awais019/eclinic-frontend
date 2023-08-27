<script setup lang="ts">
  import parsePhoneNumber from "libphonenumber-js";
  import { storeToRefs } from "pinia";
  import { reset, setErrors } from "@formkit/core";
  import useUserStore from "~/stores/userStore";

  definePageMeta({
    middleware: "auth",
  });

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
      name: "Phone Settings",
      path: "/settings/phone",
    },
  ]);

  const userStore = useUserStore();

  const { phone } = storeToRefs(userStore);
  const newPhone = ref("");
  const code = ref("");

  const codeSent = ref(false);

  const formId = ref("email-setting");

  const { getVerificationCode, verifyCode } = usePhone();

  async function submitHandler() {
    const phoneNumber = parsePhoneNumber(newPhone.value, "PK");
    if (!phoneNumber || !phoneNumber.isValid()) {
      setErrors(formId.value, "Invalid phone number");
      return;
    }
    newPhone.value = phoneNumber.number;
    const { error } = await getVerificationCode(phoneNumber.number);
    if (error.value) {
      setErrors(formId.value, error.value.data);
    } else {
      codeSent.value = true;
    }
  }

  function resetHandler() {
    reset(formId.value);
  }

  async function handleVerifyCode() {
    const { error } = await verifyCode(newPhone.value, code.value);
    if (error.value) {
      setErrors(formId.value, error.value.data);
    } else {
      userStore.updatePhone(newPhone.value);
      codeSent.value = false;
      newPhone.value = "";
      reset(formId.value);
    }
  }

  function resetCode() {
    codeSent.value = false;
    newPhone.value = "";
    reset(formId.value);
  }
</script>

<template>
  <PageTitle title="Phone Settings" :bread-crumbs="breadCrumbs" />
  <div class="app-container">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Phone Settings
    </h1>
    <section class="py-12 max-w-xl mx-auto">
      <FormKit
        type="form"
        :id="formId"
        class="my-12"
        :actions="false"
        @submit="submitHandler"
        @reset="resetHandler"
        v-if="!codeSent"
      >
        <FormKit
          v-if="phone"
          type="tel"
          name="current_phone"
          label="Current Phone Number"
          disabled="true"
          :value="phone"
        />
        <FormKit
          type="tel"
          v-model="newPhone"
          name="new_phone"
          label="New Phone Number"
          placeholder="New Phone Number"
          validation="required"
          help="Note: New phone number is only updated once you verify it."
        />
        <div class="grid grid-cols-2 gap-3 items-baseline">
          <FormKit type="submit" label="Confirm" />
          <input
            type="reset"
            value="Cancel"
            class="cursor-pointer border border-neutral-dusty-gray shadow-variant11 py-3.5"
          />
        </div>
      </FormKit>
      <FormKit
        type="form"
        :actions="false"
        v-else
        @submit="handleVerifyCode"
        @reset="resetCode"
      >
        <FormKit
          type="number"
          v-model="code"
          name="code"
          label="Verification Code"
          placeholder="Enter 6 digit code"
        />
        <div class="grid grid-cols-2 gap-3 items-baseline">
          <FormKit type="submit" label="Confirm" />
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
