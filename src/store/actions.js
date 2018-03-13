// 存放  异步操作
export default {
  // 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  // 这个参数里面有:
  // context.state/getters/mutations等等
  // 可以简单理解为  就是一个store,  store里面的东西 context 都能拿到
  // 深入理解后,它并不是一个 store,是 store 的一些小局部, 做了 store 的一些封装
  /* set_city_after_six_seconds (context) {
      ...some code
  } */

}
