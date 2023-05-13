<template lang="">
  <div>
    <div
      class="bg-gray-700 p-2 pt-3 text-gray-100 text-center text-2xl font-bold"
    >
      <h1
        class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42b883] to-[#35495e ]"
      >
        Learning Stack
      </h1>
      <headerButton :route="{ name: 'MainView' }"> Home</headerButton>
      <headerButton :route="{ name: 'Buttons' }"> Buttons</headerButton>
    </div>
  </div>
</template>
<script>
import headerButton from "../components/buttons/header-button.vue";
export default {
  name: "NavBar",
  components: {
    headerButton,
  },
};
</script>
<style lang=""></style>
