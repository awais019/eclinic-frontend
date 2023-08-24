<script setup lang="ts">
  import parsePhoneNumber from "libphonenumber-js";
  import { setErrors } from "@formkit/core";

  const emits = defineEmits<{
    (e: "continue"): void;
  }>();

  const phoneFormId = "phone-number";
  const codeFormId = "phone-code";
  const phone = ref("");
  const formaettedPhone = ref("");
  const code = ref("");

  const verifyPhone = ref(false);

  const { getVerificationCode, verifyCode } = usePhone();

  async function phoneSubmitHandler() {
    const phoneNumber = parsePhoneNumber(phone.value, "PK");
    if (!phoneNumber || !phoneNumber.isValid()) {
      setErrors(phoneFormId, "Invalid phone number");
      return;
    }
    formaettedPhone.value = phoneNumber.number;
    const { error } = await getVerificationCode(phoneNumber.number);
    if (error.value) {
      setErrors(phoneFormId, error.value.data);
    } else {
      verifyPhone.value = true;
    }
  }

  async function verifySubmitHandler() {
    const { error } = await verifyCode(formaettedPhone.value, code.value);
    if (error.value) {
      setErrors(codeFormId, error.value.data);
    } else {
      emits("continue");
    }
  }
</script>

<template>
  <div>
    <FormKit
      type="form"
      :id="phoneFormId"
      :actions="false"
      @submit="phoneSubmitHandler"
      v-if="!verifyPhone"
    >
      <FormKit
        type="tel"
        validation="required"
        label="Phone Number"
        placeholder="Phone number"
        v-model="phone"
      />
      <FormKit type="submit" label="Continue" />
    </FormKit>
    <FormKit
      type="form"
      :id="codeFormId"
      :actions="false"
      @submit="verifySubmitHandler"
      v-else
    >
      <FormKit
        type="number"
        name="phone_code"
        label="Verification Code"
        placeholder="Enter verification code"
        v-model="code"
      />
      <FormKit type="submit" label="Verify" />
    </FormKit>
  </div>
</template>

<style scoped></style>
