<script lang="ts" setup>
  import { reset, setErrors } from "@formkit/core";
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";

  const handleIconClick = (node: any, e: any) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type = node.props.type === "password" ? "text" : "password";
  };
  const formId = "doctor-registration";
  const userStore = useUserStore();
  const toast = useToast();
  const loading = ref(false);

  async function submissionHandler(values: any) {
    loading.value = true;

    const body = new FormData();
    for (const key in values) {
      if (key === "degree_document") {
        body.append(key, values[key][0].file);
      } else {
        body.append(key, values[key]);
      }
    }

    const { error } = await userStore.registerDoctor(body);
    loading.value = false;

    if (!error.value) {
      toast.success("Registration Successful");
      reset(formId);
    } else {
      toast.error("Registration Unsuccessful");
      const APIErrors = extractAPIErrors(error.value.data);
      setErrors(formId, APIErrors);
    }
  }
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
      <h2 class="text-h2-sb">Join as a Doctor</h2>
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
      </FormKit>
    </div>
    <div class="decorative">
      <img src="~/assets/images/doctor.svg" alt="Decorative image" />
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
