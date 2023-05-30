<script lang="ts" setup>
  import { reset, setErrors, use } from "@formkit/core";
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";
  import { Patient } from "~/types/users";

  const userStore = useUserStore();
  const loading = ref(false);
  const toast = useToast();

  const handleIconClick = (node: any, e: any) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type = node.props.type === "password" ? "text" : "password";
  };
  const date = new Date().toISOString().slice(0, 10);
  const formId = "patient-registration";

  const submitHandler = async (values: Patient) => {
    loading.value = true;
    const { data, error } = await userStore.registerPatient(values);
    loading.value = false;
    console.log(data.value, error.value);

    if (!error.value) {
      toast.success("Registration Successful");
      reset(formId);
    } else {
      toast.error("Registration Unsuccessful");
      const APIErrors = extractAPIErrors(error.value.data);
      setErrors(formId, APIErrors);
    }
  };
</script>

<template>
  <div class="logo">
    <nuxt-link to="/">
      <img
        src="~/assets/images/logo-white.svg"
        alt="Logo"
        class="mobile:hidden"
      />
      <img src="~/assets/images/logo.svg" alt="Logo" class="tablet:hidden" />
    </nuxt-link>
  </div>
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:h-screen desktop:gap-40 tablet:gap-20 mobile:app-container"
  >
    <div class="registeration">
      <h2 class="text-h2-sb">Join as a Patient</h2>
      <p class="text-sm font-medium">
        Already a member?
        <nuxt-link to="/signin" class="text-primary-blue-ribbon"
          >Sign in</nuxt-link
        >
      </p>
      <FormKit
        type="form"
        :id="formId"
        submit-label="Register"
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
        <FormKit
          type="tel"
          name="phone_number"
          label="Phone"
          placeholder="03424599274"
          validation="required"
        />
        <div
          class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:gap-3"
        >
          <FormKit
            type="date"
            name="birth_date"
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
      </FormKit>
    </div>
    <div class="decorative">
      <img src="~/assets/images/patient.svg" alt="Decorative image" />
    </div>
  </div>
  <AppLoader v-if="loading" />
</template>

<style lang="postcss" scoped>
  img {
    @apply mx-auto;
  }
  .decorative {
    @apply hidden bg-primary-blue-ribbon tablet:flex tablet:items-center tablet:justify-center;
  }
  .registeration {
    @apply tablet:mt-24 mobile:mt-12 mb-20 mx-auto desktop:max-w-[60%] tablet:max-w-[80%];
  }
</style>
