<template>
  <ja-menu>
    <template v-for="(item, idx) in data">
      <template v-if="item.children">
        <ja-suboutline :key="`suboutline-${idx}`" :data="item" />
      </template>
      <template v-else>
        <ja-outline-item :key="`outline-item-${idx}`" :data="item" />
      </template>
    </template>
  </ja-menu>
</template>
<script type="text/babel">
export default {
  name: "JaOutline",
  props: {
    data: {
      type: Array
    }
  },
  created() {
    console.log(this.$ELEMENT);
  }
};
</script>
