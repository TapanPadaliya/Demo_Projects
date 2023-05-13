<template lang="">
  <div>
    <navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from "./view/navbar.vue";

export default {
  name: "AppMain",
  components: {
    navbar,
  },
};
</script>
<style lang=""></style>
