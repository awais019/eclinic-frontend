<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { reset, setErrors } from "@formkit/core";
  import useUserStore from "~/stores/userStore";

  const userStore = useUserStore();
  const { sendUpdateEmail } = useAuth();

  const { email } = storeToRefs(userStore);

  const formId = ref("email-setting");

  async function submitHandler(values: any) {
    const { error } = await sendUpdateEmail(values.new_email);
    if (error.value) {
      setErrors(formId.value, error.value.data);
      return;
    }
    setErrors(formId.value, "Check email for verfication link.");
  }

  function resetHandler() {
    reset(formId.value);
  }
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Email Settings
    </h1>
    <FormKit
      type="form"
      :id="formId"
      class="my-12"
      :actions="false"
      @submit="submitHandler"
      @reset="resetHandler"
    >
      <FormKit
        type="email"
        name="current_email"
        label="Current Email Address"
        disabled="true"
        :value="email"
      />
      <FormKit
        type="email"
        name="new_email"
        label="New Email Address"
        placeholder="New Email Address"
        validation="required|email"
        help="Note: New email address is only updated once you verify it."
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
  </div>
</template>

<style scoped></style>
