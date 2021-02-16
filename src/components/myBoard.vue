<template>
<div class="my-board">
  <h1> My board</h1>
  <div class="card-list">
    <div class="card bg-light" v-for="card in myCardList">
      <div class="card-value" :class="card.value">  </div>
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key"></div>
      </div>
    </div>
  </div>
  <myPointStack :source="groupPoint"/>
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
    myPoint() {
      let r = _.groupBy(this.$store.getters.myCardList, 'value')

      return {
        green: r['green'] && r['green'].length,
        red:  r['red'] && r['red'].length,
        blue:  r['blue'] && r['blue'].length,
        black: r['black'] && r['black'].length,
        white: r['white'] && r['white'].length,
        gold: r['gold'] && r['gold'].length,
      }
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
