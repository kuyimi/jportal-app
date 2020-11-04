<template>
  <div class="about" style="width: 200px;">
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
    this.data = {
      items: [
        {
          uid: "1",
          title: "测试1",
          icon: {
            name: "el-icon-menu"
          }
        },
        {
          uid: "2",
          title: "测试2"
        },
        {
          uid: "3",
          title: "测试3",
          icon: {
            name: "el-icon-menu"
          },
          children: [
            {
              uid: "3.1",
              title: "测试3.1",
              icon: {
                name: "el-icon-menu"
              }
            },
            {
              uid: "3.2",
              title: "测试3.2",
              icon: {
                name: "el-icon-menu"
              },
              children: [
                {
                  uid: "3.2.1",
                  title: "测试3.2.1",
                  icon: {
                    name: "el-icon-menu"
                  }
                },
                {
                  uid: "3.2.2",
                  title: "测试3.2.2",
                  icon: {
                    name: "el-icon-menu"
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
