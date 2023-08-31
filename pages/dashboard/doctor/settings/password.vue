<script setup lang="ts">
  import { reset, setErrors } from "@formkit/core";
  import { useToast } from "vue-toastification";

  const formId = ref("password-setting");

  const { updatePassword } = useAuth();
  const toast = useToast();

  async function submitHandler(values: any) {
    if (values.new_password !== values.confirm_password) {
      setErrors(formId.value, {
        confirm_password: "Password does not match",
      });
      return;
    }
    const { error } = await updatePassword(
      values.current_password,
      values.new_password
    );
    if (error.value) {
      setErrors(formId.value, error.value.data);
      return;
    }
    toast.success("Password updated successfully");
    reset(formId.value);
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
      Password Settings
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
        type="password"
        name="current_password"
        label="Current Password"
        placeholder="Enter your current password"
        validation="required"
      />
      <FormKit
        type="password"
        name="new_password"
        label="New Password"
        placeholder="Enter new password"
        validation="required"
      />
      <FormKit
        type="password"
        name="confirm_password"
        label="Confirm New Password"
        placeholder="Enter new password again"
        validation="required"
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
