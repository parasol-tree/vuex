<template>
  <div class="main">
    <div class="css-city-content">
      {{city}}
      <!-- {{tripleCity}} -->
    </div>
    <div
      class="css-change-city-btn"
      @click="handle_change_city_btn_click"
    >
      选择城市
    </div>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState, mapGetters } from 'vuex'
// 上面是解构赋值  ES5写法如下:
/*
  var vuex = require("vuex")
  var mapState = vuex.mapState
  var mapGetters = vuex.mapGetters
*/
export default {
  name: 'HomePage',
  data () {
    return {}
  },

  methods: {
    handle_change_city_btn_click () {
      this.$router.push('/city')
    }
  },

  computed: {
    // 从state 里面拿的数据
    /* city () {
      return this.$store.state.city
    } */
    ...mapState(['city'])
    /* ...mapState({
      city: 'city'
    }) */

    // 从getter里卖弄拿数据
    /* city () {
      // return this.$store.getters.doubleCity
      return this.$store.getters.tripleCity
    } */
    // ...mapGetters(['tripleCity'])
    /* ...mapGetters({
      city: 'tripleCity'
    }) */
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    justify-content: space-between;
  }
  .css-city-content {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #d0d;
  }
  .css-change-city-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: skyblue;
  }
</style>
