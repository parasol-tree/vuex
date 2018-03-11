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
  set_city_after_six_seconds ({ commit }, city) {
    // { commit } 解构赋值 commit = context.commit 是 store 的一个 commit 方法
    // city 传递过来的数据

    // 6秒之后改变state里面的状态
    // 但是 actions 不能直接改 state里面的状态
    // 必须通过 mutations 去改
    setTimeout(() => {
      // 6秒后调用 mutations 的一个方法去改变city,
      // 改变的 city 值为 第二个参数(传递过来的数据)
      commit('change_city', city)
    }, 6000)
  }
}
