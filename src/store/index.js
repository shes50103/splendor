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
    },
    groupforSalePointList(state, getters){
      let r = _.groupBy(getters.forSalePointList, 'value')

      return {
        green: r['green'] && r['green'].length || 0,
        red: r['red'] && r['red'].length || 0,
        blue: r['blue'] && r['blue'].length || 0,
        black: r['black'] && r['black'].length || 0,
        white: r['white'] && r['white'].length || 0,
        gold: r['gold'] && r['gold'].length || 0,
      }
    },

    groupMyPointList(state, getters){
      let r = _.groupBy(getters.myPointList, 'value')

      return {
        green: r['green'] && r['green'].length || 0,
        red: r['red'] && r['red'].length || 0,
        blue: r['blue'] && r['blue'].length || 0,
        black: r['black'] && r['black'].length || 0,
        white: r['white'] && r['white'].length || 0,
        gold: r['gold'] && r['gold'].length || 0,
      }
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
