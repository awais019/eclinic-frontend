<script setup lang="ts">
  import { Transaction } from "~/types/APIResponse";

  const breadCrumbs = ref([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard/patient",
    },
    {
      name: "Payments",
      path: "/dashboard/patient/payments",
    },
  ]);

  const { getPatientTransactions } = useTransactions();

  const transactions = ref<Transaction[]>([]);

  const { data } = await getPatientTransactions();

  if (data.value) {
    transactions.value = data.value.data;
  }
</script>

<template>
  <PageTitle title="Payments" :bread-crumbs="breadCrumbs" />
  <section class="app-container flex flex-col gap-4 tablet:gap-6 desktop:gap-8">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Payments History
    </h1>
    <table
      class="w-full bg-white text-left border-collapse rounded-2xl shadow-border relative m-auto"
    >
      <thead>
        <tr>
          <th class="py-6 pl-6 pr-2 whitespace-nowrap">Doctor</th>
          <th class="py-6 px-2 whitespace-nowrap">Date & Time</th>
          <th class="py-6 px-2 whitespace-nowrap">Appointment Type</th>
          <th class="py-6 px-2 whitespace-nowrap">Appointment Status</th>
          <th class="py-6 px-2 whitespace-nowrap">Amount</th>
        </tr>
      </thead>
      <div class="absolute h-[1px] left-6 right-6 bg-neutral-gallery"></div>
      <tbody v-if="data && data.data">
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td class="py-6 pl-6 pr-2 flex items-center gap-2 whitespace-nowrap">
            <span class="font-semibold">{{ transaction.doctor_name }}</span>
          </td>
          <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
            {{ formatDate(transaction.created_at) }}
          </td>
          <td class="py-6 px-2 text-primary-blue-ribbon whitespace-nowrap">
            {{ transaction.appointment_type }}
          </td>
          <td class="py-6 px-2 text-primary-blue-ribbon whitespace-nowrap">
            {{ transaction.appointment_status }}
          </td>
          <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
            {{ transaction.amount }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped></style>
