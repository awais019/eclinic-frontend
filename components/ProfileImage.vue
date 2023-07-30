<script setup lang="ts">
  import useUserStore from "~/stores/userStore";
  import { useToast } from "vue-toastification";

  const userStore = useUserStore();
  const toast = useToast();

  const editing = ref(false);

  async function handleImageUpload(event: Event) {
    editing.value = true;
    // @ts-ignore
    const file = event.target.files[0];
    const body = new FormData();
    body.append("image", file);
    const { error } = await userStore.uploadProfileImage(body);
    if (error.value) {
      toast.error(error.value);
    } else {
      toast.success("Profile image updated.");
    }
    editing.value = false;
  }
</script>

<template>
  <div class="flex items-center justify-center gap-3">
    <div
      class="w-[72px] h-[72px] bg-gradient_2 rounded-2xl tablet:w-36 tablet:h-36"
    >
      <div class="relative top-3 right-3">
        <img
          class="rounded-2xl"
          :src="`images${userStore.image}`"
          alt="Profile Image"
        />
        <div
          class="absolute inset-0 flex items-center bg-black bg-opacity-25 rounded-2xl"
          v-if="editing"
        >
          <AnimationsSpinner />
        </div>
      </div>
    </div>
    <label class="cursor-pointer">
      <IconsPencil />
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg, image/jpg"
        style="display: none"
        @change="handleImageUpload"
      />
    </label>
  </div>
</template>

<style scoped></style>
