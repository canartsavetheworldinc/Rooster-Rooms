import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    columns: [
      {
        type: String,
        name: "name"
      }, {
        type: Number,
        name: "rent"
      }
    ],
    list: [{
      name: "三日月ハイツ",
      rent: 8.0
    }, {
      name: "満月亭",
      rent: 12.0
    }]
  },
  getters: {
    getColumns(state) {
      return state.columns
    },
    getList(state) {
      return state.list
    }
  },
  mutations: {
  },
  actions: {
  }
})
