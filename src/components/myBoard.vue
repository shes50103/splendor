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

  <div class="point-list bg-light">
    <div v-for="point in myPointLis" :class="[point.value, {clickable: true}]" class="point">
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {

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
        console.log('this.$store.getters.myPointList', this.$store.getters.myPointList)
        return this.$store.getters.myPointList;
      },
      set(value){
        this.$store.commit('pointList', value);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
