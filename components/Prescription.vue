<script setup lang="ts">
  import { useToast } from "vue-toastification";

  const props = defineProps<{
    appointmentId: string;
  }>();
  const emits = defineEmits<{
    (e: "close"): void;
    (e: "removeAppointment"): void;
  }>();

  const formId = "prescription";

  const numberOfMedications = ref(1);
  const prescription = ref<
    {
      medication: string;
      dosage: string;
      instructions: string;
    }[]
  >([]);

  const { createPrescription } = usePrescription();
  const toast = useToast();

  async function submitHandler(values: any) {
    for (let i = 1; i <= numberOfMedications.value; i++) {
      prescription.value.push({
        medication: values[`medication${i}`],
        dosage: values[`dosage${i}`],
        instructions: values[`instructions${i}`],
      });
    }
    const { error } = await createPrescription(
      prescription.value,
      props.appointmentId
    );
    if (error.value) {
      toast.error("Something went wrong");
      return;
    } else {
      toast.success("Prescription added successfully");
      emits("removeAppointment");
      emits("close");
    }
  }
</script>

<template>
  <section
    class="m-auto tablet:w-[90vw] desktop:w-[70vw] 3xl:w-[50vw] mobile:h-screen tablet:max-h-[60vh] overflow-auto tablet:rounded-2xl"
  >
    <div class="px-8 py-6 bg-primary-blue-ribbon flex justify-between">
      <h2 class="text-h4-md text-white">Prescription</h2>
      <button @click="$emit('close')"><IconsClose2 /></button>
    </div>
    <div class="bg-white p-8">
      <h3 class="font-medium tablet:text-xl">Add prescription here:</h3>
      <FormKit
        type="form"
        :id="formId"
        :actions="false"
        @submit="submitHandler"
      >
        <div
          class="tablet:grid tablet:grid-cols-3 tablet:gap-3 relative"
          v-for="i in numberOfMedications"
        >
          <FormKit
            type="text"
            :name="`medication${i}`"
            label="Medication"
            placeholder="Medication"
            validation="required"
          />
          <FormKit
            type="text"
            :name="`dosage${i}`"
            label="Dosage"
            placeholder="Dosage"
            validation="required"
          />
          <FormKit
            type="text"
            :name="`instructions${i}`"
            label="Instructions"
            placeholder="Usage instructions"
            validation="required"
          />
          <button
            class="absolute top-1/2 -right-6"
            v-show="numberOfMedications > 1 && i === numberOfMedications"
            @click="numberOfMedications--"
          >
            <IconsClose3 />
          </button>
        </div>
        <button
          class="float-right bg-primary-blue-ribbon px-4 py-3 text-neutral-white rounded-lg"
          @click.prevent="numberOfMedications++"
        >
          Add more
        </button>
        <FormKit type="submit" label="Add Prescription" />
      </FormKit>
    </div>
  </section>
</template>

<style scoped></style>
