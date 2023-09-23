<script setup lang="ts">
  import { createPopper } from "@popperjs/core";
  import type { StrictModifiers } from "@popperjs/core";
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";

  const userStore = useUserStore();
  const toast = useToast();

  const settingsLink = computed(() => {
    if (userStore.isDoctor) return "/dashboard/doctor/settings";
    return "/settings";
  });

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
  <div class="z-10">
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
        <li><nuxt-link :to="settingsLink">Account Settings</nuxt-link></li>
        <li><button @click="handleSignout">Sign Out</button></li>
      </ul>
    </div>

    <button ref="profile" class="flex items-center gap-2 text-sm font-semibold">
      <div
        class="p-1 rounded-lg max-w-[40px] max-h-[40px] tablet:max-w-[48px] tablet:max-h-[48px] aspect-1 flex items-center shadow-variant3"
      >
        <img
          v-if="userStore.image"
          :src="userStore.image"
          alt="profile image"
          class="w-full h-full object-cover"
        />
        <img
          v-else
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt="profile image"
          class="w-full h-full object-cover"
        />
      </div>
      <span>{{ userStore.first_name }}</span>
      <IconsChevron
        :class="{
          'transform rotate-180 transition-transform': isOpen,
          'transform rotate-0 transition-transform': !isOpen,
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
