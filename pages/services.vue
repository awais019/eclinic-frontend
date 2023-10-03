<script setup lang="ts">
  const breadCrumbs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
  ];
</script>

<template>
  <PageTitle title="Services" :bread-crumbs="breadCrumbs" />
  <section
    class="app-container flex flex-col gap-8 tablet:flex-row-reverse items-center justify-between"
  >
    <div class="flex flex-col gap-12">
      <img src="~/assets/images/services1.png" alt="serviecs1" />
      <div class="flex gap-8">
        <img src="~/assets/images/services2.png" alt="services2" />
        <img src="~/assets/images/services3.png" alt="services3" />
      </div>
    </div>
    <div>
      <h1 class="text-sm text-primary-blue-ribbon">Facilities</h1>
      <div>
        <p class="text-h2-b mb-12 mt-3">
          What <span class="text-primary-blue-ribbon">Facilites</span> we
          provide
        </p>
        <div class="flex flex-col gap-6">
          <div class="flex gap-6 items-start">
            <div class="bg-gradient rounded-full p-3 tablet:p-6">
              <IconsStetoscope />
            </div>
            <div class="flex flex-col gap-3">
              <p class="font-semibold">Comprehensive Medical Care</p>
              <p class="text-neutral-dusty-gray">
                Our facility offers a wide range of medical treatment
              </p>
            </div>
          </div>
          <div class="flex gap-6 items-start">
            <div class="bg-gradient rounded-full p-3 tablet:p-6">
              <IconsMedicineblue />
            </div>
            <div class="flex flex-col gap-3">
              <p class="font-semibold">Convenient Prescription Services</p>
              <p class="text-neutral-dusty-gray">
                Our facility offers a wide range of medical treatment
              </p>
            </div>
          </div>
          <div class="flex gap-6 items-start">
            <div class="bg-gradient rounded-full p-3 tablet:p-6">
              <IconsDoctorstetoscope />
            </div>
            <div class="flex flex-col gap-3">
              <p class="font-semibold">Qualified Medical Professionals</p>
              <p class="text-neutral-dusty-gray">
                Our facility offers a wide range of medical treatment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
