import InfiniteScroll from "element-ui/packages/infinite-scroll/src/main";

/* istanbul ignore next */
InfiniteScroll.install = function(Vue) {
  Vue.directive(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
