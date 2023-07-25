<script lang="ts" setup>
  import { reset, setErrors } from "@formkit/core";
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";
  import { Patient } from "~/types/users";

  const emits = defineEmits<{
    (e: "registraion-successful"): void;
  }>();

  const userStore = useUserStore();
  const toast = useToast();

  const handleIconClick = (node: any, e: any) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type = node.props.type === "password" ? "text" : "password";
  };
  const date = new Date().toISOString().slice(0, 10);
  const formId = "patient-registration";

  const submitHandler = async (values: Patient) => {
    const { error } = await userStore.registerPatient(values);

    if (!error.value) {
      emits("registraion-successful");
      reset(formId);
    } else {
      toast.error("Registration Unsuccessful");
      const APIErrors = extractAPIErrors(error.value.data);
      setErrors(formId, APIErrors);
    }
  };
</script>

<template>
  <RegistrationLogo />
  <Registration user-type="patient">
    <FormKit
      type="form"
      :id="formId"
      :actions="false"
      @submit="(values) => submitHandler(values)"
    >
      <div
        class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:gap-3"
      >
        <FormKit
          type="text"
          name="first_name"
          label="First Name"
          placeholder="Jane"
          validation="required"
        />
        <FormKit
          type="text"
          name="last_name"
          label="Last Name"
          placeholder="Doe"
          validation="required"
          class="input"
        />
      </div>
      <FormKit
        type="email"
        name="email"
        label="Email"
        placeholder="name@domain.com"
        validation="required|email"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
        placeholder="Set a strong password"
        suffix-icon="eyeClosed"
        @suffix-icon-click="handleIconClick"
        validation="required"
      />
      <div
        class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:gap-3"
      >
        <FormKit
          type="date"
          name="birthdate"
          label="Date of Birth"
          placeholder="Select Date of Birth"
          validation="required"
          :max="date"
        />
        <FormKit
          type="select"
          name="gender"
          placeholder="Select Gender"
          label="Gender"
          :options="['Male', 'Female', 'Other']"
        />
      </div>
      <FormKit type="submit" label="Register" />
    </FormKit>
  </Registration>
</template>
