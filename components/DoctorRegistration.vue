<script lang="ts" setup>
  import { reset, setErrors } from "@formkit/core";
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";

  const emits = defineEmits<{
    (e: "registraion-successful"): void;
  }>();

  const handleIconClick = (node: any, e: any) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type = node.props.type === "password" ? "text" : "password";
  };
  const formId = "doctor-registration";
  const userStore = useUserStore();
  const toast = useToast();

  async function submissionHandler(values: any) {
    const body = new FormData();
    for (const key in values) {
      if (key === "degree_document") {
        body.append(key, values[key][0].file);
      } else {
        body.append(key, values[key]);
      }
    }

    const { error } = await userStore.registerDoctor(body);

    if (!error.value) {
      emits("registraion-successful");
      reset(formId);
    } else {
      toast.error("Registration Unsuccessful");
      const APIErrors = extractAPIErrors(error.value.data);
      setErrors(formId, APIErrors);
    }
  }
</script>

<template>
  <DecorativeLogo />
  <Registration user-type="doctor">
    <FormKit
      type="form"
      :id="formId"
      :actions="false"
      @submit="submissionHandler"
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
          type="select"
          name="gender"
          placeholder="Select Gender"
          label="Gender"
          :options="['Male', 'Female', 'Other']"
        />
        <FormKit
          type="text"
          name="specialization"
          label="Specialization"
          placeholder="Cardiology"
          validation="required"
        />
      </div>
      <div
        class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:gap-3"
      >
        <FormKit
          type="text"
          name="hospital_clinic_name"
          label="Hospital/Clinic Name"
          placeholder="Hospital/clinic name"
          validation="required"
        />
        <FormKit
          type="text"
          name="address"
          placeholder="Hospital/clinic address"
          label="Address"
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
          placeholder="Hospital/clinic city"
          validation="required"
        />
        <FormKit
          type="text"
          name="state"
          label="State"
          placeholder="Hospital/clinic state"
          validation="required"
        />
      </div>
      <FormKit
        type="file"
        name="degree_document"
        label="Degree Document"
        validation="required"
        accept=".pdf,.doc,.docx"
      />
      <FormKit type="submit" label="Register" />
    </FormKit>
  </Registration>
</template>
