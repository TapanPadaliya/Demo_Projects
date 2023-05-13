<template>
  <button :class="['button', type]" @click="navigate">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (value) =>
        [
          "warning",
          "danger",
          "primary",
          "secondary",
          "success",
          "info",
        ].includes(value),
    },
    label: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
    },
  },
  methods: {
    navigate() {
      this.$router.push({ name: this.routeName });
    },
  },
};
</script>

<style>
.button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
}

.primary {
  background-color: #2e8ef5;
  color: #fff;
}
.secondary {
  background-color: #6c757d;
  color: #fff;
}
.info {
  background-color: #7cc2ff;
  color: #fff;
}
.warning {
  background-color: #ec711a;
  color: #fff;
}
.danger {
  background-color: #ee3131;
  color: #fff;
}
.success {
  background-color: #12f54b;
  color: #fff;
}
</style>
