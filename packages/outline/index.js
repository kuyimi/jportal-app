import JaOutline from "./src/outline";

JaOutline.install = function(Vue) {
  Vue.component(JaOutline.name, JaOutline);
};

export default JaOutline;
