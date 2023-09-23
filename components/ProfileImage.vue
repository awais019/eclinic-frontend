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
    console.log(body);

    const { error } = await userStore.uploadProfileImage(body);
    editing.value = false;
    if (error.value) {
      toast.error(error.value.data);
    } else {
      toast.success("Profile image updated.");
    }
  }
</script>

<template>
  <div class="flex items-center justify-center gap-3">
    <div class="max-w-[146px] bg-gradient_2 rounded-2xl">
      <div class="relative top-3 right-3 aspect-1">
        <img
          v-if="userStore.image"
          class="rounded-lg shadow-variant8 w-full h-full object-cover"
          :src="userStore.image"
          alt="Profile Image"
        />
        <img
          v-else
          class="rounded-lg shadow-variant8 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt="Profile Image"
        />
        <div
          class="absolute inset-0 flex items-center bg-black bg-opacity-25 rounded-2xl"
          v-if="editing"
        >
          <AnimationsSpinner />
        </div>
        <label class="cursor-pointer absolute -bottom-2 left-[40%] sm:left-16">
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

<style scoped>
  img {
    margin: 0;
  }
</style>
