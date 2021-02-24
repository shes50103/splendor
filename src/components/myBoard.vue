<template>
<div class="my-board">
  <h1> My board</h1>
  myCardListPoint: {{myCardListPoint}} <br>
  myTotalPoint: {{myTotalPoint}}
  <div class="card-list">
    <div :class="card.value" class="card" v-for="card in myCardList">
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key"></div>
      </div>
    </div>
  </div>

  <myPointStack/>

</div>

</template>

<script>
import myPointStack from './myPointStack.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    myPointStack
  },
  computed: {
    myCardListPoint() {
      let r = _.groupBy(this.$store.getters.myCardList, 'value')
      return {
        green: r['green'] && r['green'].length || 0,
        red:  r['red'] && r['red'].length || 0,
        blue:  r['blue'] && r['blue'].length || 0,
        black: r['black'] && r['black'].length || 0,
        white: r['white'] && r['white'].length || 0,
        gold: r['gold'] && r['gold'].length || 0,
      }
    },
    myTotalPoint() {
      let r = _.groupBy(this.$store.getters.myCardList, 'value')
      let p = _.groupBy(this.$store.getters.myPointList, 'value')

      let obj1 =  {
        green: r['green'] && r['green'].length || 0,
        red:  r['red'] && r['red'].length || 0,
        blue:  r['blue'] && r['blue'].length || 0,
        black: r['black'] && r['black'].length || 0,
        white: r['white'] && r['white'].length || 0,
        gold: r['gold'] && r['gold'].length || 0,
      }

      let obj2 = {
        green: p['green'] && p['green'].length || 0,
        red:  p['red'] && p['red'].length || 0,
        blue:  p['blue'] && p['blue'].length || 0,
        black: p['black'] && p['black'].length || 0,
        white: p['white'] && p['white'].length || 0,
        gold: p['gold'] && p['gold'].length || 0,
      }


      const mergeFruits = data => {
        const result = {}; //(1)
        data.forEach(basket => { //(2)
          for (let [key, value] of Object.entries(basket)) { //(3)
            if (result[key]) { //(4)
              result[key] += value; //(5)
            } else { //(6)
              result[key] = value;
            }
          }
        });
        return result; //(7)
      };




      return mergeFruits([obj1, obj2])
    },
    myCardList: {
      get(){
        return this.$store.getters.myCardList;
      },
      set(value){
        this.$store.commit('cardList', value);
      }
    },
    myPointLis: {
      get(){
        return this.$store.getters.myPointList;
      },
      set(value){
        this.$store.commit('pointList', value);
      }
    },
    groupPoint(){
      return this.$store.getters.groupMyPointList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
