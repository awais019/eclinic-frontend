<script lang="ts" setup>
  const breadCrumbs = ref<{ name: string; path: string }[]>([
    { name: "Home", path: "/" },
    { name: "Find doctors", path: "/doctors" },
  ]);

  const { getDoctors } = useDoctor();

  const doctors = (await getDoctors()).data.value?.data?.doctors;
</script>

<template>
  <PageTitle title="Find doctors" :bread-crumbs="breadCrumbs" />
  <div class="app-container mb-12">
    <div class="text-center">
      <p class="text-base-md text-primary-blue-ribbon">Meet our Doctors</p>
      <h2 class="text-h2-b">Our Highly Qualified Professionals</h2>
    </div>
    <SearchBar />
    <div class="flex flex-wrap items-center justify-center gap-8">
      <div v-for="doctor in doctors" :key="doctor.id">
        <DoctorCard :doctor="doctor" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
