import directive from "element-ui/packages/loading/src/directive";
import service from "element-ui/packages/loading/index";

export default {
  install(Vue) {
    Vue.use(directive);
    Vue.prototype.$loading = service;
  },
  directive,
  service
};
