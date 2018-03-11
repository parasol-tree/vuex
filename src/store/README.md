#vuex 单向数据流

vuex中如果想改变state 数据 , 必须通过 mutations 走一个流程 改变 state

异步:
    先走 actions, 通过 actions 去调用 mutations 的方法 改变state
    走 mutations, 调用 mutations 的方法 改变 state


Module
      由于使用单一状态树，
      应用的所有状态会集中到一个比较大的对象。
      当应用变得非常复杂时(例如 state存储了 城市/用户的登陆状态/等等很多数据,)
      这个时候 store 对象  就有可能  变得  相当  臃肿。

      为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
      每个  模块拥  有自己的
                        state
                        mutation
                        action
                        getter
                        甚至是  嵌套子模块  ——从上至下进行同样方式的分割：
