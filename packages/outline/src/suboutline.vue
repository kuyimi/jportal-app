<template>
  <el-submenu :index="data.uid">
    <template slot="title">{{ data.title }}</template>
    <template v-for="item in data['children']">
      <el-menu-item v-if="!item['children']" :key="item.uid" :index="item.uid">
        {{ item.title }}
      </el-menu-item>
      <ja-suboutline v-else :key="item.uid" :data="item" />
    </template>
  </el-submenu>
</template>
<script type="text/babel">
import { Submenu, MenuItem } from "element-ui";
export default {
  components: {
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem
  },
  name: "JaSuboutline",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
