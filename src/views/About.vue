<template>
  <div class="about">
    <ja-outline :data="data" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    this.data = [
      {
        title: "测试1",
        icon: {
          name: "el-icon-menu"
        }
      },
      {
        title: "测试2"
      },
      {
        title: "测试3",
        icon: {
          name: "el-icon-menu"
        },
        children: [
          {
            title: "测试3.1",
            icon: {
              name: "el-icon-menu"
            }
          }
        ]
      }
    ];
  }
};
</script>
