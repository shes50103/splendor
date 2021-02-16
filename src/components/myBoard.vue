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
    <!-- <div v-for="point, key in groupPoint" :class="key" class="clickable point">
      {{point}}
    </div> -->

    <template  v-for="point, key in groupPoint">
       <component :is="pp(point)" :color="key"></component>
    </template>
  </div>
</div>





</template>

<script>
import p1 from './p1.vue'
import p2 from './p2.vue'
import p3 from './p3.vue'
import p4 from './p4.vue'
import p5 from './p5.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    p1,
    p2,
    p3,
    p4,
    p5,
  },
  methods: {
    pp(n){
      switch (n) {
      case 1:
        return <p1/>
        break;
      case 2:
        return <p2/>
        break;
      case 3:
        return <p3/>
        break;
      case 4:
        return <p4/>
        break;
      case 5:
        return <p5/>
        break;
      default:
        console.log(`Sorry, we are out of`);
      }

    }
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
      console.log('a', this.$store.getters.groupMyPointList)
      return this.$store.getters.groupMyPointList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
