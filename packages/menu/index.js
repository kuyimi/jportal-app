import JaMenu from "./src/menu";

JaMenu.install = function(Vue) {
  Vue.component(JaMenu.name, JaMenu);
};
export default JaMenu;
