<template>
  <div class="App">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "./components/navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style></style>
