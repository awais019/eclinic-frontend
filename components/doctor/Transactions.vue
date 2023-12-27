<script setup lang="ts">
  import type { Transaction } from "~/types/APIResponse";

  const { getDoctorTransactions } = useTransactions();

  const transactions = ref<Transaction[]>([]);

  const { data } = await getDoctorTransactions();
  if (data.value) {
    transactions.value = data.value.data;
  }

  function formatAmount(transaction: Transaction) {
    return transaction.type === "WITHDRAW"
      ? `-${transaction.amount}`
      : `+${transaction.amount}`;
  }
</script>

<template>
  <div class="bg-white rounded-2xl px-6 py-4">
    <div v-if="transactions && transactions.length">
      <div class="overflow-x-auto">
        <table
          class="w-full bg-white text-left border-collapse rounded-2xl border-hidden shadow-border relative isolate m-auto"
        >
          <thead>
            <tr>
              <th class="py-6 pl-6 pr-2 whitespace-nowrap">Name</th>
              <th class="py-6 px-2 whitespace-nowrap">Date & Time</th>
              <th class="py-6 px-2 whitespace-nowrap">Type</th>
              <th class="py-6 px-2 whitespace-nowrap">Amount</th>
              <th class="py-6 px-2 whitespace-nowrap">Consultation</th>
            </tr>
          </thead>
          <div class="absolute h-[1px] left-6 right-6 bg-neutral-gallery"></div>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
              <td
                class="py-6 pl-6 pr-2 flex items-center gap-2 whitespace-nowrap"
              >
                <span class="font-semibold">{{
                  transaction.patient_name
                }}</span>
              </td>
              <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
                {{ formatDateWithTime(transaction.created_at) }}
              </td>
              <td class="py-6 px-2 text-green-haze whitespace-nowrap">
                {{ transaction.type }}
              </td>
              <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
                {{ formatAmount(transaction) }}
              </td>
              <td class="py-6 px-2 text-primary-blue-ribbon whitespace-nowrap">
                {{ transaction.appointment_type }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p v-else class="text-center text-neutral-dusty-gray font-medium">
      No transactions
    </p>
  </div>
</template>

<style scoped></style>
