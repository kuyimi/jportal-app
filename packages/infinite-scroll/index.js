import InfiniteScroll from "element-ui/packages/infinite-scroll/src/main";

InfiniteScroll.install = function(Vue) {
  Vue.directive(InfiniteScroll.name, InfiniteScroll);
};
export default InfiniteScroll;
