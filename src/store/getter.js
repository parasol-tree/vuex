// 也可以理解为stste 的computed(计算属性)
// 对以前的数据包装下,再给你一个新数据
export default {
  doubleCity (state, getters) {
    return state.city + '^_^' + state.city
  },

  // getter里面还可以再用getter
  tripleCity (state, getters) {
    return state.city + getters.doubleCity
  }
}

// 例如购物车中
// 单价和数量存在 store 里面 ,
// 总价可以从getter获取(写在getter里,结合已经有的数据返回一个新的数据)
