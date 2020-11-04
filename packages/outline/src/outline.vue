<template>
  <el-menu mode="vertical">
    <template v-for="item in data['items']">
      <template v-if="!item['children']">
        <el-menu-item :key="item.uid" :index="item.uid">
          <template slot="title">
            <i v-if="item.icon && item.icon.name" :class="item.icon.name"></i>
            <i v-else class="el-icon-s-grid"></i>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-else>
        <ja-suboutline :data="item" :key="item.uid" />
      </template>
    </template>
  </el-menu>
</template>
<script type="text/babel">
import { Menu, MenuItem } from "element-ui";

export default {
  name: "JaOutline",
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    console.log(this.$ELEMENT);
  }
};
</script>
