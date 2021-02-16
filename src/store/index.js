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
      },
      {
        id: 'c004',
        user: null,
        display: false,
        value: "green",
        costs: {
          blue: 21,
          red: 2
        }
      },
      {
        id: 'c005',
        user: null,
        display: false,
        value: "green",
        costs: {
          blue: 21,
          red: 2
        }
      },
    ],
    pointList: [
      {
        id: "p01",
        user: null,
        value: 'green'
      },
      {
        id: "p02",
        user: null,
        value: 'green'
      },
      {
        id: "p03",
        user: null,
        value: 'green'
      },
      {
        id: "p04",
        user: null,
        value: 'red'
      },
      {
        id: "p05",
        user: null,
        value: 'red'
      },
    ]
  },
  getters: {
    forSaleCardList(state) {
      return state.cardList.filter( (e) => e.user === null)
    },
    forSalePointList(state) {
      return state.pointList.filter( (e) => e.user === null)
    },
    cartCardList(state) {
      return state.cardList.filter( (e) => e.user === 'cart')
    },
    cartPointList(state) {
      return state.pointList.filter( (e) => e.user === 'cart')
    },
    myCardList(state) {
      return state.cardList.filter( (e) => e.user === 1)
    },
    myPointList(state) {
      return state.pointList.filter( (e) => e.user === 1)
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
