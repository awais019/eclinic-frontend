<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });
</script>

<template>
  <Error>
    <div class="text-center mobile:mt-[calc(100vw/2)]">
      <AnimationsError
        :height="96"
        :width="96"
        :loop="false"
        :auto-play="true"
      />
      <h4 class="text-h4-sb">
        Invalid Token.
      </h4>
      <div
        class="mt-6 bg-primary-blue-ribbon px-6 py-4 rounded-lg text-base-sb text-white"
      >
        <button>Request new token</button>
      </div>
    </div>
  </Error>
</template>
