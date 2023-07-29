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
  const isOpen = ref(false);

  function show() {
    isOpen.value = true;
    dropdown.value.setAttribute("data-show", "");
    popperInstance.value?.update();
  }

  function hide() {
    isOpen.value = false;
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
        placement: "bottom-end",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 0],
            },
          },
        ],
      }
    );
  });
</script>

<template>
  <div>
    <div
      ref="dropdown"
      class="dropdown shadow-variant3 p-6 bg-white rounded-lg text-sm font-medium text-neutral-dusty-gray"
    >
      <div class="mb-12">
        <div class="text-h5-sb text-neutral-mine-shaft">
          {{ userStore.first_name }} {{ userStore.last_name }}
        </div>
        <span>{{ userStore.email }}</span>
      </div>
      <ul class="flex flex-col gap-4">
        <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
        <li><nuxt-link to="/messages">Messages</nuxt-link></li>
      </ul>
      <div class="bg-neutral-gallery w-full h-[1px] my-6"></div>
      <ul class="flex flex-col gap-4">
        <li><nuxt-link to="/settings">Account Settings</nuxt-link></li>
        <li><button @click="handleSignout">Sign Out</button></li>
      </ul>
    </div>

    <button ref="profile" class="flex items-center gap-2 text-sm font-semibold">
      <div
        class="p-1 rounded-lg w-10 h-10 tablet:w-12 tablet:h-12 flex items-center shadow-variant3"
      >
        <img
          v-if="userStore.image"
          :src="`images${userStore.image}`"
          alt="profile image"
        />
        <img v-else src="~/assets/images/user.jpg" alt="profile image" />
      </div>
      <span>{{ userStore.first_name }}</span>
      <IconsChevron
        :class="{
          'transform rotate-180 transition-transform': isOpen,
        }"
      />
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
