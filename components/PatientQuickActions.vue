<script setup lang="ts"></script>

<template>
  <div class="text-center mb-24">
    <h2 class="text-h2-b">Quick Actions</h2>
    <span class="text-neutral-dusty-gray"
      >Follow these easy steps for seamless appointments, physical or
      virtual</span
    >
    <div class="mt-12 flex flex-wrap gap-8 justify-center">
      <nuxt-link to="/doctors" class="group">
        <div
          class="px-10 py-12 shadow-variant4 rounded-2xl group-hover:bg-primary-blue-ribbon group-hover:text-white"
        >
          <div
            class="bg-gradient_2 p-5 w-24 h-24 m-auto rounded-2xl flex items-center justify-center shadow-variant5 text-white group-hover:bg-white group-hover:bg-none group-hover:text-primary-blue-ribbon"
          >
            <IconsPeople />
          </div>
          <h3 class="text-h4-b mt-12 mb-3">Find Doctors</h3>
          <span
            class="text-neutral-dusty-gray group-hover:text-white max-w-[40ch] inline-block"
            >Find highly qualified doctors and get an appointment.</span
          >
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/patient/appointments" class="group">
        <div
          class="px-10 py-12 shadow-variant4 rounded-2xl group-hover:bg-primary-blue-ribbon group-hover:text-white"
        >
          <div
            class="bg-gradient_2 p-5 w-24 h-24 m-auto text-white rounded-2xl flex items-center justify-center shadow-variant5 group-hover:bg-none group-hover:bg-white group-hover:text-primary-blue-ribbon"
          >
            <IconsCalendar />
          </div>
          <h3 class="text-h4-b mt-12 mb-3">Appointments</h3>
          <span
            class="text-neutral-dusty-gray max-w-[40ch] inline-block group-hover:text-white"
            >Check your upcoming appoinments and all actions related to
            appoinments.</span
          >
        </div>
      </nuxt-link>
      <!-- <nuxt-link to="/doctors" class="group">
        <div
          class="px-10 py-12 shadow-variant4 rounded-2xl group-hover:bg-primary-blue-ribbon group-hover:text-white"
        >
          <div
            class="bg-gradient_2 text-white p-5 w-24 h-24 m-auto rounded-2xl flex items-center justify-center shadow-variant5 group-hover:bg-none group-hover:bg-white group-hover:text-primary-blue-ribbon"
          >
            <IconsReport />
          </div>
          <h3 class="text-h4-b mt-12 mb-3">Reports</h3>
          <span
            class="text-neutral-dusty-gray group-hover:text-white max-w-[40ch] inline-block"
            >Stay up-to-date with your health by accessing your reports
            online.</span
          >
        </div>
      </nuxt-link> -->
      <nuxt-link to="/dashboard/patient/prescriptions" class="group">
        <div
          class="px-10 py-12 shadow-variant4 rounded-2xl group-hover:bg-primary-blue-ribbon group-hover:text-white"
        >
          <div
            class="bg-gradient_2 p-5 text-white w-24 h-24 m-auto rounded-2xl flex items-center justify-center shadow-variant5 group-hover:bg-none group-hover:bg-white group-hover:text-primary-blue-ribbon"
          >
            <IconsPrescription />
          </div>
          <h3 class="text-h4-b mt-12 mb-3">Access Prescription</h3>
          <span
            class="text-neutral-dusty-gray group-hover:text-white max-w-[40ch] inline-block"
            >View, download, or print your prescription easily through
            platform.</span
          >
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/patient/payments" class="group">
        <div
          class="px-10 py-12 shadow-variant4 rounded-2xl group-hover:bg-primary-blue-ribbon group-hover:text-white"
        >
          <div
            class="bg-gradient_2 p-5 w-24 h-24 m-auto rounded-2xl flex items-center justify-center shadow-variant5 text-white group-hover:bg-none group-hover:bg-white group-hover:text-primary-blue-ribbon"
          >
            <IconsCard />
          </div>
          <h3 class="text-h4-b mt-12 mb-3">Payments</h3>
          <span
            class="text-neutral-dusty-gray group-hover:text-white max-w-[40ch] inline-block"
            >Skip the hassle of mailing checks or paying in person.</span
          >
        </div>
      </nuxt-link>
      <!-- <nuxt-link to="/doctors" class="group">
        <div
          class="px-10 py-12 shadow-variant4 rounded-2xl group-hover:bg-primary-blue-ribbon group-hover:text-white"
        >
          <div
            class="bg-gradient_2 p-5 w-24 h-24 m-auto rounded-2xl flex items-center justify-center shadow-variant5 text-white group-hover:bg-none group-hover:bg-white group-hover:text-primary-blue-ribbon"
          >
            <IconsFlask />
          </div>
          <h3 class="text-h4-b mt-12 mb-3">Find Labs</h3>
          <span
            class="text-neutral-dusty-gray group-hover:text-white max-w-[40ch] inline-block"
            >Find labs that can get samples from your home and test.</span
          >
        </div>
      </nuxt-link> -->
    </div>
  </div>
</template>

<style scoped></style>
