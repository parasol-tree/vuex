<template>
  <div>
    <index-header :info="info"></index-header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'HomePage',
  components: {
    IndexHeader: () => import('./header.vue')
  },
  data () {
    return {
      info: ''
    }
  },

  created () {
    this.getHomePageData()
    console.log(123)
  },
  watch: {
    city () {
      this.getHomePageData()
    }
  },
  /* watch: {
    '$route': 'getHomePageData'
  }, */
  /* activated () {
    this.getHomePageData()
  }, */

  computed: {
    ...mapState(['city'])
  },

  methods: {
    getHomePageData () {
      console.log(this.city)
      axios.get('/static/homePage.json?city=' + this.city)
        .then(this.handle_get_homePage_success.bind(this))
        .catch(function (error) {
          console.log(error)
        })
    },

    handle_get_homePage_success (res) {
      // console.log(this.city)
      const data = res.data
      // console.log(this.info = data.data.header.info)
      if (data && data.data) {
        this.info = data.data.header.info
      }
    }
  }
}
</script>

<style scoped>

</style>
