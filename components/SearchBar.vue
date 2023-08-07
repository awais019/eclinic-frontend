<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";
</script>

<template>
  <div class="mt-12 mb-24 mx-auto max-w-fit">
    <form class="flex flex-col gap-4 lg:hidden">
      <div class="relative px-4 rounded-xl shadow-variant10">
        <IconsSearch class="absolute top-5 left-4" />
        <label for="search" class="sr-only"
          >Search Doctor by name, city or state
        </label>
        <input
          type="search"
          name="search"
          class="border-none py-4"
          placeholder="Find doctor by name, city or state"
        />
      </div>
      <Combobox as="div" class="rounded-xl relative shadow-variant10">
        <ComboboxInput class="py-4 border-none" placeholder="Specialization" />
        <ComboboxButton class="absolute top-3 right-4">
          <IconsChevron2 />
        </ComboboxButton>
      </Combobox>
      <input
        type="submit"
        value="Search"
        class="max-w-fit bg-primary-blue-ribbon text-white border-none font-medium"
      />
    </form>
    <form
      class="rounded-xl shadow-variant10 max-w-fit px-2 py-4 items-center gap-8 hidden lg:flex"
    >
      <div class="relative px-4 grow">
        <IconsSearch class="absolute top-5 left-4" />
        <label for="search" class="sr-only"
          >Search Doctor by name, city or state
        </label>
        <input
          type="search"
          name="search"
          class="border-none py-4"
          placeholder="Find doctor by name, city or state"
        />
      </div>
      <span class="w-[1px] h-6 bg-neutral-dusty-gray"></span>
      <Combobox as="div" class="rounded-xl relative">
        <ComboboxInput
          class="py-4 border-none"
          placeholder="Specialization"
          autocomplete="off"
        />
        <ComboboxButton class="absolute top-3 right-4">
          <IconsChevron2 />
        </ComboboxButton>
      </Combobox>
      <input
        type="submit"
        value="Search"
        class="max-w-fit bg-primary-blue-ribbon text-white border-none font-medium"
      />
    </form>
  </div>
</template>

<style scoped>
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
</style>
