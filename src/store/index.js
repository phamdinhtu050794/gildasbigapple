import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Cakes:[
      {key: "0", avaliable:true, name:"Pizza", price: "120k"},
      {key: "1", avaliable:true, name:"Pie Mini ", price: "70k"},
      {key: "2", avaliable:true, name:"Cookies", price: "125k"},
      {key: "3", avaliable:true, name:"Bagels (half dozen)", price: "120k"},
      {key: "4", avaliable:true, name:"Bagels (bakers dozen)", price: "240k"},
      {key: "5", avaliable:true, name:"Cream Cheese - 100g", price: "25k"},
      {key: "6", avaliable:true, name:"Banana Bread Mini Loaf", price: "30k"},
      {key: "7", avaliable:true, name:"With Chocolate Chips", price: "40k"},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
