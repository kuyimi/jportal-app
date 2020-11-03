import JaButton from "./src/button";

JaButton.install = function(Vue) {
  Vue.component(JaButton.name, JaButton);
};
export default JaButton;
