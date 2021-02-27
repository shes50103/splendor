<template>
  <div class="point-list bg-light">
    <template :key="key" v-for="(point, key) in groupforSalePointList">
       <component :is="numberToComponent(point)" :color="key" @click="addPointToCart(key)"></component>
    </template>
  </div>
</template>

<script>
import p1 from './p1.vue'
import p2 from './p2.vue'
import p3 from './p3.vue'
import p4 from './p4.vue'
import p5 from './p5.vue'
import { mapGetters } from 'vuex';

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
    numberToComponent(n){
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
    },
    addPointToCart(key){
      for(let i = 0 ; i< this.forSalePointList.length ;i++ ){
        if(this.forSalePointList[i].value === key){
          this.$store.commit('pointToCart', this.forSalePointList[i].id)
          break;
        }
      }
    }
  },
  computed: {
    ...mapGetters(['forSalePointList', 'groupforSalePointList']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
