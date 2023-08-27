<script lang="ts" setup>
  import useUserStore from "~/stores/userStore";

  definePageMeta({
    middleware: "auth",
  });

  const breadCrumbs = ref<{ name: string; path: string }[]>([
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Settings", path: "/settings" },
  ]);

  const settingLinks = ref([
    { name: "Personal Info", path: "/settings/personalinfo" },
    { name: "Email", path: "/settings/email" },
    { name: "Phone Number", path: "/settings/phone" },
    { name: "Password", path: "/settings/password" },
  ]);

  const userStore = useUserStore();

  if (userStore.isDoctor) {
    settingLinks.value.push({
      name: "Hospital Info",
      path: "/settings/hospitalinfo",
    });
  }
</script>

<template>
  <PageTitle title="Settings" :bread-crumbs="breadCrumbs" />
  <div class="app-container">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Settings
    </h1>
    <section class="py-12 max-w-4xl mx-auto">
      <div class="my-12 border border-neutral-gallery rounded-lg">
        <ul class="flex flex-col text-neutral-dusty-gray font-medium">
          <li
            v-for="(link, index) in settingLinks"
            :key="link.name"
            class="flex items-center justify-between p-4"
            :class="{
              'border-b border-neutral-gallery':
                index != settingLinks.length - 1,
            }"
          >
            <nuxt-link :to="link.path">
              {{ link.name }}
            </nuxt-link>
            <IconsArrowright />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
