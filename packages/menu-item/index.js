import JaMenuItem from "../menu/src/menu-item";

JaMenuItem.install = function(Vue) {
  Vue.component(JaMenuItem.name, JaMenuItem);
};
export default JaMenuItem;
