<template>
<div class="dash-board">
  <h1>For Sale</h1>
  <div class="card-list">
    <div :class="card.value" class="card clickable" :key="card.id" v-for="card in forSaleCardList" @click="addCardToCart(card.id)">
      <div class="card-cost-list">
        <div :key="key" v-for="(value, key) in card.costs" class="card-cost" :class="key" > {{value}}</div>
      </div>
    </div>
  </div>
  <dashPointStack/>
</div>
</template>

<script>
import dashPointStack from '../lib/points/dashPointStack.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    dashPointStack
  },
  methods: {
    ableBuy(e){
      let ableBuy = true;
      const myTotalPoint_copy = Object.create(this.myTotalPoint)
      const result  =_.mergeWith(myTotalPoint_copy, e.costs , (objValue, srcValue) => {
        return objValue - srcValue
      });

      _.forIn(result, (value, key) => {
        if(value < 0){
          ableBuy = false;
        }
      });

      return ableBuy;
    },
    addCardToCart(e){
      this.forSaleCardList.forEach((card) => {
        if(card.id == e && this.ableBuy(card)){
          card.user = 'cart'
        }
      })
    },
  },
  computed: {
    ...mapGetters(['forSaleCardList', 'forSalePointList', 'myTotalPoint']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
