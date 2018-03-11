<template>
  <div>
    <header
      class="css-back_btn"
      @click="handle_back_btn_click"
    >
      back
    </header>
    <ul class="css-city-container clearfix">
      <li
        class="css-city-content"
        v-for="item of cityList"
        :key="item.key"
        @click="handle_change_city(item.city)"
      >
        {{item.city}}
      </li>
      <!-- <li
        class="css-city-content"
        v-for="item of cityList"
        :key="item.key"
        @click="change_city(item.city)"
      >
        {{item.city}}
      </li> -->
    </ul>
  </div>

</template>

<script>
import axios from 'axios'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'CityPage',
  data () {
    return {
      cityList: []
    }
  },
  created () {
    this.getCityData()
  },
  methods: {
    handle_back_btn_click () {
      this.$router.go(-1)
    },

    getCityData () {
      axios.get('/static/city.json')
        .then(this.handle_get_cityList_success.bind(this))
        .catch(function (error) {
          console.log(error)
        })
    },

    handle_get_cityList_success (res) {
      const data = res.data
      console.log(data)
      if (data && data.data) {
        this.cityList = data.data.cityList
      }
    },
    // mutations 同步操作-----------------------------------------------------
    // 把 mapActions 映射进来
    // ...mapMutations(['change_city'])
    /* ...mapMutations({
      change_city: 'change_city'
    }) */
    /* handle_change_city (city) {
      // this.$store.commit('mutations中自定义的函数名字', 传给mutations的参数也是可以传一个对象的)
      // 调用mutations中的方法修改state
      // mutations放的都是一些同步的方法
      this.$store.commit('change_city', city)
      // 也可以不用上面的写法,
      // 用   ...mapMutations(['change_city']) // 66/67 行代码
      // 这时handle_change_city()就没用了, template里面也得改,看 22 行代码
      this.handle_back_btn_click()
      console.log(city)
    } */

    // actions 异步操作---------------------------------------------------
    // 把 mapActions 映射进来
    /* ...mapActions({
      change_city: 'set_city_after_six_seconds'
    }) */
    handle_change_city (city) {
      // this.$store.dispatch('actions 中自定义的函数名字', 传给 actions 的参数也是可以传一个对象的)
      // 调用mutations中的方法修改state
      // mutations放的都是一些同步的方法
      // this.$store.dispatch('change_city', city)
      this.$store.dispatch('set_city_after_six_seconds', city)
      // 也可以不用上面的写法,
      // 用   ...mapActions(['set_city_after_six_seconds']) 83行代码
      // 这时handle_change_city()就没用了, template里面也得改,看 22 行代码
      this.handle_back_btn_click()
      console.log(city)
    }
  }
}
</script>

<style scoped>
  .css-back_btn {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: yellowgreen;
  }
  .css-city-container {
    min-height: 20px;
    border: 1px solid #000;
  }
    .css-city-content {
      height: 40px;
      line-height: 40px;
      background-color: skyblue;
      margin-bottom: 1px;
    }
</style>
