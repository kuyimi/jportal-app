<template>
  <ja-menu-item>
    <span slot="title">{{ data.title }}</span>
  </ja-menu-item>
</template>
<script type="text/babel">
export default {
  name: "JaOutlineItem",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
