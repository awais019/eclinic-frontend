<script lang="ts" setup>
  const handleIconClick = (node: any, e: any) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type = node.props.type === "password" ? "text" : "password";
  };
  const date = new Date().toISOString().slice(0, 10);

  const submitHandler = (values: Object) => {
    console.log(values);
  };
</script>

<template>
  <div class="decorative">
    <img src="~/assets/images/patient.svg" alt="Decorative image" />
  </div>
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
      submit-label="Register"
      @submit="(values) => submitHandler(values)"
    >
      <div class="tablet:flex tablet:gap-3">
        <FormKit
          type="text"
          name="name"
          label="First Name"
          placeholder="Jane"
          validation="required"
        />
        <FormKit
          type="text"
          name="name"
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
        name="phone"
        label="Phone"
        placeholder="03424599274"
        validation="required"
      />
      <FormKit
        type="date"
        name="dob"
        label="Date of Birth"
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
    </FormKit>
  </div>
</template>

<style lang="postcss" scoped>
  .decorative {
    @apply hidden tablet:block self-center;
  }
  .decorative > img {
    @apply mx-auto;
  }
  .registeration {
    @apply mt-12 mb-20 desktop:max-w-[35%] tablet:max-w-[60%] mx-auto;
  }
</style>
