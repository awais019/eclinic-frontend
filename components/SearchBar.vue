<script lang="ts" setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";
  import useDoctorsStore from "~/stores/doctors";

  const { getSpecializations } = useDoctor();

  const specializations = (await getSpecializations()).data?.value?.data
    .specializations;
  const doctorsStore = useDoctorsStore();

  const query = ref("");
  const specializationQuery = ref("");
  const selectedSpecialization = ref("");

  const filteredSpecializations = ref(specializations);

  async function handleSearch() {
    await doctorsStore.getDoctors({
      query: query.value,
      specialization: selectedSpecialization.value,
      page: 0,
    });
  }

  watch(specializationQuery, () => {
    if (specializationQuery.value === "") {
      selectedSpecialization.value = "";
    }
    filteredSpecializations.value = specializations?.filter((specialization) =>
      specialization
        .toLowerCase()
        .includes(specializationQuery.value.toLowerCase())
    );
  });
</script>

<template>
  <div class="mt-12 mb-24 mx-auto max-w-fit">
    <form class="flex flex-col gap-4 lg:hidden" @submit.prevent="handleSearch">
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
          v-model="query"
        />
      </div>
      <Combobox
        as="div"
        class="rounded-xl relative shadow-variant10"
        v-model="selectedSpecialization"
      >
        <ComboboxInput
          class="py-4 border-none"
          placeholder="Specialization"
          autocomplete="off"
          :display-value="
            () =>
              selectedSpecialization
                ? selectedSpecialization
                : specializationQuery
          "
          @change="specializationQuery = $event.target.value"
        />
        <ComboboxButton class="absolute top-3 right-4">
          <IconsChevron2 />
        </ComboboxButton>
        <ComboboxOptions
          class="absolute bg-white inset-x-0 rounded-lg shadow-xl cursor-pointer text-neutral-dusty-gray max-w-96"
        >
          <ComboboxOption
            v-for="(specialization, index) in filteredSpecializations"
            :value="specialization"
            :key="index"
            as="template"
            v-slot="{ selected, active }"
          >
            <li
              :class="{
                'bg-neutral-dusty-gray text-white font-medium': selected,
                'bg-neutral-dusty-gray text-white': active,
              }"
              class="px-4 py-1 hover:bg-neutral-dusty-gray hover:text-white"
            >
              {{ specialization }}
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </Combobox>
      <input
        type="submit"
        value="Search"
        class="max-w-fit bg-primary-blue-ribbon text-white border-none font-medium"
      />
    </form>
    <form
      class="rounded-xl shadow-variant10 max-w-fit px-2 py-4 items-center gap-8 hidden lg:flex"
      @submit.prevent="handleSearch"
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
          v-model="query"
        />
      </div>
      <span class="w-[1px] h-6 bg-neutral-dusty-gray"></span>
      <Combobox
        as="div"
        class="rounded-xl relative"
        v-model="selectedSpecialization"
      >
        <ComboboxInput
          class="py-4 border-none"
          placeholder="Specialization"
          autocomplete="off"
          :display-value="
            () =>
              selectedSpecialization
                ? selectedSpecialization
                : specializationQuery
          "
          @change="specializationQuery = $event.target.value"
        />
        <ComboboxButton class="absolute top-3 right-4">
          <IconsChevron2 />
        </ComboboxButton>
        <ComboboxOptions
          class="absolute bg-white inset-x-0 py-4 rounded-lg shadow-xl cursor-pointer text-neutral-dusty-gray max-w-96"
        >
          <ComboboxOption
            v-for="(specialization, index) in filteredSpecializations"
            :key="index"
            :value="specialization"
            as="template"
            v-slot="{ selected, active }"
          >
            <li
              class="px-4 py-1 hover:bg-neutral-dusty-gray hover:text-white"
              :class="{
                'bg-neutral-dusty-gray text-white font-medium': selected,
                'bg-neutral-dusty-gray text-white': active,
              }"
            >
              {{ specialization }}
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </Combobox>
      <input
        type="submit"
        value="Search"
        class="max-w-fit bg-primary-blue-ribbon text-white border-none font-medium cursor-pointer"
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
