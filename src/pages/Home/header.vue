<template>
  <div class="main">
    <div class="css-city-content">
      {{city}}
    </div>
    <div>
      {{info}}
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
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  props: {
    info: String
  },

  data () {
    return {}
  },

  computed: {
    ...mapState(['city'])
  },
  methods: {
    handle_change_city_btn_click () {
      this.$router.push('/city')
    }
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
