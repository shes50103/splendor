import { createStore } from 'vuex'

export default createStore({
  state: {
    cardList: [
      {
        id: 'c001',
        user: null,
        display: false,
        value: "green",
        costs: {
          blue: 21,
          red: 2
        }
      },
      {
        id: 'c002',
        user: null,
        display: false,
        value: "black",
        costs: {
          white: 1,
          blue: 1,
          green: 1,
          red: 1
        }
      },
      {
        id: 'c003',
        user: null,
        display: false,
        value: "blue",
        costs: {
          white: 2,
          green: 1,
          red: 1,
          black: 1
        }
      }
    ]
  },
  getters: {
    forSaleCardList(state) {
      return state.cardList.filter( (e) => e.user === null)
    },
    myCardList(state) {
      return state.cardList.filter( (e) => e.user === 1)
    }
  },
  mutations: {
    cardList(state, payload) {
      state.cardList = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})

// ['a', 'b', 'a', 'c'].filter((e) => { true})
