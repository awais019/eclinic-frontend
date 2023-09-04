<script setup lang="ts"></script>

<template>
  <div
    class="text-sm text-neutral-dusty-gray font-medium flex flex-col gap-8 -z-10 md:flex-row"
  >
    <div class="p-6 bg-white basis-1/3 rounded-2xl flex flex-col gap-4">
      <IconsWallet />
      <div>
        <h5>Current Balance</h5>
        <span class="text-h4-b text-neutral-mine-shaft">9600</span>
      </div>
    </div>
    <div class="p-6 bg-white basis-1/3 rounded-2xl flex flex-col gap-4">
      <IconsOpenwallet />
      <div>
        <h5>Withdrawn Amount</h5>
        <span class="text-h4-b text-neutral-mine-shaft">0.00</span>
      </div>
    </div>
    <div class="p-6 bg-white basis-1/3 rounded-2xl flex flex-col gap-4">
      <IconsDollar2 />
      <div>
        <h5>Total Earnings</h5>
        <span class="text-h4-b text-neutral-mine-shaft">30,000</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
