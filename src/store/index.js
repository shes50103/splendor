import { createStore } from 'vuex'
import _ from 'lodash';

export default createStore({
  strict: true,
  state: {
    cardList: [
      {
        id: 'c001',
        user: null,
        display: false,
        value: "green",
        costs: {
          blue: 2,
          red: 1
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
          white: 1,
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
          blue: 1,
          red: 1
        }
      },
      {
        id: 'c005',
        user: null,
        display: false,
        value: "green",
        costs: {
          blue: 1,
          red: 1
        }
      },
    ],
    pointList: [
      {
        id: "g01",
        user: null,
        value: 'green'
      },
      {
        id: "g02",
        user: null,
        value: 'green'
      },
      {
        id: "g03",
        user: null,
        value: 'green'
      },
      {
        id: "g04",
        user: null,
        value: 'green'
      },
      {
        id: "g05",
        user: null,
        value: 'green'
      },
      {
        id: "r01",
        user: 1,
        value: 'red'
      },
      {
        id: "r02",
        user: 1,
        value: 'red'
      },
      {
        id: "r03",
        user: null,
        value: 'red'
      },
      {
        id: "r04",
        user: null,
        value: 'red'
      },
      {
        id: "r05",
        user: null,
        value: 'red'
      },
      {
        id: "b01",
        user: 1,
        value: 'blue'
      },
      {
        id: "b02",
        user: 1,
        value: 'blue'
      },
      {
        id: "b03",
        user: null,
        value: 'blue'
      },
      {
        id: "b04",
        user: null,
        value: 'blue'
      },
      {
        id: "b05",
        user: null,
        value: 'blue'
      },
      {
        id: "d01",
        user: null,
        value: 'black'
      },
      {
        id: "d02",
        user: null,
        value: 'black'
      },
      {
        id: "d03",
        user: null,
        value: 'black'
      },
      {
        id: "d04",
        user: null,
        value: 'black'
      },
      {
        id: "d05",
        user: null,
        value: 'black'
      },
      {
        id: "w01",
        user: null,
        value: 'white'
      },
      {
        id: "w02",
        user: null,
        value: 'white'
      },
      {
        id: "w03",
        user: null,
        value: 'white'
      },
      {
        id: "w04",
        user: null,
        value: 'white'
      },
      {
        id: "w05",
        user: null,
        value: 'white'
      },
      {
        id: "go01",
        user: null,
        value: 'gold'
      },
      {
        id: "go02",
        user: null,
        value: 'gold'
      },
      {
        id: "go03",
        user: null,
        value: 'gold'
      },
      {
        id: "go04",
        user: null,
        value: 'gold'
      },
      {
        id: "go05",
        user: null,
        value: 'gold'
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
      return groupData(getters.forSalePointList)
    },
    groupMyPointList(state, getters){
      return groupData(getters.myPointList)
    },
    groupMyCardList(state, getters){
      return groupData(getters.myCardList)
    },
    myTotalPoint(state, getters){
      return _.mergeWith(getters.groupMyPointList, getters.groupMyCardList , (objValue, srcValue) => {
        return objValue + srcValue
      });
    }
  },
  mutations: {
    cardToCart(state, payload){
      state.cardList.filter((card) => card.id === payload)[0].user = 'cart'
    },
    pointToCart(state, payload){
      state.pointList.filter((card) => card.id === payload)[0].user = 'cart'
    },
    cardToUser(state, payload){
      state.cardList.filter((card) => card.id === payload)[0].user = 1
    },
    pointToUser(state, payload){
      state.pointList.filter((point) => point.id === payload)[0].user = 1
    },
    pointToDashboard(state, payload){
      state.pointList.filter((point) => point.id === payload)[0].user = null
    },
  },
  actions: {
  },
  modules: {
  }
})


window.groupData = function(data){

  let r = _.groupBy(data, 'value')

  return {
    green: r['green'] && r['green'].length || 0,
    red:  r['red'] && r['red'].length || 0,
    blue:  r['blue'] && r['blue'].length || 0,
    black: r['black'] && r['black'].length || 0,
    white: r['white'] && r['white'].length || 0,
    gold: r['gold'] && r['gold'].length || 0,
  }
}
