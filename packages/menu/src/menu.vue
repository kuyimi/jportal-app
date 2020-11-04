<script type="text/babel">
import { Menu } from "element-ui";

export default {
  extends: Menu,
  name: "JaMenu",
  props: {
    mode: String
  },
  created() {
    console.log(this);
    console.log("props", this.$props);
  }
};
</script>
