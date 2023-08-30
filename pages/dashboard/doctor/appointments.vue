<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import useUserStore from "~/stores/userStore";

  const router = useRouter();
  const route = useRoute();
  const userStore = useUserStore();

  const { first_name } = storeToRefs(userStore);

  const tabs = ref([
    {
      name: "Requests",
      isActive: true,
    },
    {
      name: "Upcoming",
      isActive: false,
    },
    {
      name: "Completed",
      isActive: false,
    },
  ]);

  function changeTab(tabName: string) {
    tabs.value.forEach((tab) => {
      tab.isActive = tab.name.toLowerCase() === tabName.toLowerCase();
      if (tab.isActive) {
        router.push({ query: { tab: tab.name.toLowerCase() } });
      }
    });
  }

  const currentTab = computed(() => {
    return tabs.value.find((tab) => tab.isActive);
  });

  watch(
    () => route.query.tab,
    (tabName) => {
      if (tabName) {
        changeTab(tabName as string);
      }
    },
    { immediate: true }
  );
</script>

<template>
  <div class="lg:basis-3/4 relative z-0 w-screen">
    <DoctorDashboardHeader
      title="Appointments"
      :subtitle="`Welcome Back Dr. ${first_name}`"
    />
    <section
      class="py-6 px-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-24 lg:overflow-y-scroll md:px-8 xl:px-16"
    >
      <div class="py-8 sm:hidden">
        <h2 class="text-h3-b">Appointments</h2>
      </div>
      <div
        class="bg-white p-2 max-w-fit shadow-variant13 rounded-full font-semibold text-neutral-dusty-gray flex"
      >
        <button
          v-for="tab in tabs"
          class="px-2 py-3 rounded-full text-xs sm:px-6 sm:text-sm"
          :class="{ 'bg-primary-blue-ribbon text-white': tab.isActive }"
          @click="changeTab(tab.name)"
        >
          {{ tab.name }}
        </button>
      </div>
      <DoctorFullAppointmentRequests v-if="currentTab?.name == 'Requests'" />
      <DoctorFullUpcomingAppointements
        v-else-if="currentTab?.name == 'Upcoming'"
      />
      <DoctorCompletedAppointements
        v-else-if="currentTab?.name == 'Completed'"
      />
    </section>
  </div>
</template>

<style scoped></style>
