<template>
  <button
    class="rounded-lg px-3 p-1 m-2 border border-gray-500 bg-gray-700 hover:bg-gray-50 hover:text-gray-950 text-sm text-blacks hover:border-gray-950 font-bold"
    @click="$router.push(route)"
  >
    <slot :route="route" />
  </button>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
