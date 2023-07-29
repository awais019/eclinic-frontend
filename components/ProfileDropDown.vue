<script setup lang="ts">
  import { createPopper } from "@popperjs/core";
  import type { StrictModifiers } from "@popperjs/core";
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";

  const userStore = useUserStore();
  const toast = useToast();

  const popperInstance = ref<ReturnType<typeof createPopper>>();
  const profile = ref();
  const dropdown = ref();

  function show() {
    dropdown.value.setAttribute("data-show", "");
    popperInstance.value?.update();
  }

  function hide() {
    dropdown.value.removeAttribute("data-show");
  }

  function handleSignout() {
    userStore.signout();
    toast.success("Signed out");
    navigateTo("/");
  }

  onMounted(() => {
    useEventListener(profile.value, "click", show);

    onClickOutside(profile.value, hide);

    popperInstance.value = createPopper<StrictModifiers>(
      profile.value,
      dropdown.value,
      {
        placement: "right-start",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [50, -40],
            },
          },
        ],
      }
    );
  });
</script>

<template>
  <div>
    <div ref="dropdown" class="dropdown">
      <ul>
        <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
        <li><nuxt-link to="/messages">Messages</nuxt-link></li>
        <button @click="handleSignout">Sign out</button>
      </ul>
    </div>

    <button ref="profile" class="rounded-lg w-10 h-10 tablet:w-12 tablet:h-12">
      <img
        v-if="userStore.image"
        :src="`images${userStore.image}`"
        alt="profile image"
      />
      <img v-else src="~/assets/images/user.jpg" alt="profile image" />
    </button>
  </div>
</template>

<style scoped>
  .dropdown {
    display: none;
  }

  .dropdown[data-show] {
    display: block;
  }

  .dropdown[data-popper-placement^="top"] > .arrow {
    bottom: 14px;
  }

  .dropdown[data-popper-placement^="bottom"] > .arrow {
    top: 14px;
  }

  .dropdown[data-popper-placement^="left"] > .arrow {
    right: 14px;
  }

  .dropdown[data-popper-placement^="right"] > .arrow {
    left: 100px;
  }
</style>
