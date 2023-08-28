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
  <div class="flex items-center justify-center gap-3 -z-10">
    <div
      class="w-[72px] h-[72px] bg-gradient_2 rounded-2xl tablet:w-36 tablet:h-36"
    >
      <div class="relative top-3 right-3">
        <img
          v-if="userStore.image"
          class="rounded-lg border-4 border-primary-zircon shadow-variant8"
          :src="`${userStore.image}`"
          alt="Profile Image"
        />
        <img
          v-else
          class="rounded-lg border-4 border-primary-zircon shadow-variant8"
          src="~/assets/images/user.svg"
          alt="Profile Image"
        />
        <div
          class="absolute inset-0 flex items-center bg-black bg-opacity-25 rounded-2xl"
          v-if="editing"
        >
          <AnimationsSpinner />
        </div>
        <label class="cursor-pointer absolute -bottom-2 left-16">
          <IconsCamera />
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            style="display: none"
            @change="handleImageUpload"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
