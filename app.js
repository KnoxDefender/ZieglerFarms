const app = Vue.createApp({
  data() {
      return {
          amount: parseInt(localStorage.getItem('likesCount')) || 1,
      }
  },
methods:{

}})
  