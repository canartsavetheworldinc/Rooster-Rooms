import Vue from 'vue'
import Vuex from 'vuex'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

const defaultState = {
  columns: [
    { type: String, id: "name", name: "名前", enabled: true },
    { type: String, id: "ward", name: "市区町村", enabled: false },
    { type: String, id: "line", name: "路線", enabled: false },
    { type: String, id: "station", name: "最寄駅", enabled: true },
    { type: Number, id: "time", name: "駅徒歩", enabled: false },
    { type: Number, id: "old", name: "築年数", enabled: false },
    { type: Number, id: "floor", name: "階数", enabled: false },
    { type: String, id: "layout", name: "間取り", enabled: false },
    { type: Number, id: "size", name: "広さ", enabled: false },
    { type: Number, id: "rent", name: "家賃", enabled: true },
    { type: Boolean, id: "autolock", name: "オートロック", enabled: false },
    { type: Boolean, id: "delibox", name: "宅配ボックス", enabled: false },
    { type: Boolean, id: "sepbath", name: "風呂トイレ別", enabled: true },
    { type: String, id: "custom_1", name: "洗濯機置場", enabled: false },
    { type: String, id: "custom_2", name: "", enabled: false }
  ],
  list: [{
    id: 0,
    name: "三日月亭",
    ward: "足立区",
    line: "千代田線",
    station: "北千住",
    time: 5,
    old: 10,
    floor: 7,
    layout: "3LDK",
    size: 32.5,
    rent: 8,
    autolock: true,
    delibox: true,
    sepbath: true,
    custom_1: "外",
    custom_2: ""
  }]
}

const privateKey = "rooster-rooms"

export default new Vuex.Store({
  state: {
    columns: [],
    list: [],
    formdata: {},
    token: "",
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
    getToken(state) {
      return state.token
    },
    onFormRegister(state) {
      return state.onFormRegister
    }
  },
  mutations: {
    init(state, payload) {
      state.columns = payload.columns
      state.list = payload.list
    },
    addListItem(state, payload) {
      state.list.push(payload)
      state.token = jwt.sign({
        columns: state.columns,
        list: state.list
      }, privateKey)
    },
    updateListItem(state, payload) {
      if(payload.id === undefined) {
        console.error("item.id is not defined.")
        return
      }
      const itemIndex = state.list.findIndex(item => item.id === payload.id)
      const item = { ...state.list[itemIndex] }
      for(const column of state.columns) {
        if(payload[column.id] === undefined) {
          continue
        }
        item[column.id] = payload[column.id]
      }
      state.list.splice(itemIndex, 1, item)
      state.token = jwt.sign({
        columns: state.columns,
        list: state.list
      }, privateKey)
    },
    rearrangeList(state, payload) {
      state.list = payload
      state.token = jwt.sign({
        columns: state.columns,
        list: state.list
      }, privateKey)
    },
    setFormdata(state, payload) {
      state.formdata = { ...state.formdata }
      for(const key in payload) {
        if(state.formdata[key] !== undefined) {
          state.formdata[key] = payload[key]
        }
      }
    },
    clearForm(state) {
      state.formdata = {}
      for(const column of state.columns) {
        let initValue
        switch(column.type) {
          case String:
            initValue = ""
            break
          case Number:
            initValue = 0
            break
          case Boolean:
            initValue = false
            break
          default:
            initValue = null
        }
        state.formdata[column.id] = initValue
      }
    },
    setFormRegisterEvent(state, payload) {
      state.onFormRegister = payload
    },
    changeColumnAvailability(state, payload) {
      for(const column of state.columns) {
        if(column.id === payload.id && payload.enabled !== undefined) {
          column.enabled = payload.enabled
        }
      }
      state.token = jwt.sign({
        columns: state.columns,
        list: state.list
      }, privateKey)
    },
    changeCustomColumnName(state, payload) {
      for(const column of state.columns) {
        if(column.id === payload.id && payload.name !== undefined) {
          column.name = payload.name
        }
      }
      state.token = jwt.sign({
        columns: state.columns,
        list: state.list
      }, privateKey)
    }
  },
  actions: {
    decodeToken(context, payload) {
      const decoded = jwt.decode(payload, { key: privateKey })
      // console.log(decoded)
      if(decoded !== null) {
        context.commit("init", decoded)
      } else {
        context.commit("init", {
          list: defaultState.list,
          columns: defaultState.columns
        })
      }
    },
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
    },
    changeColumnAvailability(context, payload) {
      context.commit("changeColumnAvailability", payload)
    },
    changeCustomColumnName(context, payload) {
      context.commit("changeCustomColumnName", payload)
    }
  }
})
