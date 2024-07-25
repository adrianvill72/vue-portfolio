<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50" @click="closeModal">
    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    <div class="bg-white rounded-lg shadow-xl z-10 p-6 relative " @click.stop >
      <button class="absolute top-2 right-2 text-black  rounded-full w-8 h-8 flex items-center justify-center" @click="closeModal">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>

</style>
