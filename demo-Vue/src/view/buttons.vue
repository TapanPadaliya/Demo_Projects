<template lang="">
  <div class="border-gray-700 h-screen border-[10px] text-center p-2 text-2xl">
    <div class="Button-class">
      <Button :label="'danger'" type="danger" class="m-4"></Button>
      <Button :label="'info'" type="info" class="m-4"></Button>
      <Button :label="'success'" type="success" class="m-4"></Button>
      <Button :label="'warning'" type="warning" class="m-4"></Button>
      <Button :label="'primary'" type="primary" class="m-4"></Button>
      <Button :label="'secondary'" type="secondary" class="m-4"></Button>
    </div>
  </div>
</template>
<script>
import Button from "../components/buttons/button.vue";
export default {
  name: "Buttons",
  components: {
    Button,
  },
};
</script>
<style lang=""></style>
