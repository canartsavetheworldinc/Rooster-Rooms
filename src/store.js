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
      id: 0,
      name: "三日月ハイツ",
      rent: 8.0
    }, {
      id: 1,
      name: "満月亭",
      rent: 12.0
    }],
    formdata: {
      name: "",
      rent: 0
    },
    onFormRegister() {}
  },
  getters: {
    getColumns(state) {
      return state.columns
    },
    getList(state) {
      return state.list
    },
    getFormdata(state) {
      return state.formdata
    },
    onFormRegister(state) {
      return state.onFormRegister
    }
  },
  mutations: {
    addListItem(state, payload) {
      state.list.push(payload)
    },
    updateListItem(state, payload) {
      if(payload.id === undefined) {
        console.error("item.id is not defined.")
        return
      }
      const item = state.list.find(item => item.id === payload.id)
      for(const column of state.columns) {
        if(item[column.name] === undefined || payload[column.name] === undefined) {
          continue
        }
        item[column.name] = payload[column.name]
      }
    },
    rearrangeList(state, payload) {
      state.list = payload
    },
    setFormdata(state, payload) {
      for(const key in payload) {
        if(state.formdata[key] !== undefined) {
          state.formdata[key] = payload[key]
        }
      }
    },
    clearForm(state) {
      state.formdata.name = ""
      state.formdata.rent = 0
    },
    setFormRegisterEvent(state, payload) {
      state.onFormRegister = payload
    }
  },
  actions: {
    addListItem(context, payload) {
      context.commit("addListItem", payload)
    },
    updateListItem(context, payload) {
      context.commit("updateListItem", payload)
    },
    rearrangeList(context, payload) {
      context.commit("rearrangeList", payload)
    },
    setFormdata(context, payload) {
      context.commit("setFormdata", payload)
    },
    clearForm(context) {
      context.commit("clearForm")
    },
    setFormRegisterEvent(context, payload) {
      context.commit("setFormRegisterEvent", payload)
    }
  }
})
