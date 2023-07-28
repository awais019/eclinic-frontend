<script lang="ts" setup>
  const formId = "signin-form";

  const handleIconClick = (node: any, e: any) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
    node.props.type = node.props.type === "password" ? "text" : "password";
  };

  function submissionHandler() {}
</script>

<template>
  <DecorativeLogo align="right" />
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:h-screen desktop:gap-40 tablet:gap-20 mobile:app-container"
  >
    <div
      class="hidden bg-primary-blue-ribbon tablet:flex tablet:items-center tablet:justify-center"
    >
      <img src="~/assets/images/signin.svg" alt="Decorative image" />
    </div>
    <div
      class="flex flex-col justify-center mt-12 tablet:mt-0 tablet:max-w-[30.5rem]"
    >
      <h1 class="text-h2-sb">Welcome back!</h1>
      <span>Enter the info you entered while registering for account</span>
      <FormKit
        type="form"
        :id="formId"
        :actions="false"
        @submit="submissionHandler"
      >
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
        <div class="text-primary-blue-ribbon text-sm font-medium">
          <nuxt-link to="/resetpassword">Forgot Password?</nuxt-link>
        </div>
        <FormKit type="submit" label="Signin" />
      </FormKit>
      <div class="mt-6 text-center text-sm font-medium">
        Didn't register yet?
        <nuxt-link to="signup" class="text-primary-blue-ribbon"
          >Singup</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
