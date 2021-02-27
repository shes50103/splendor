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
    ableBuy(card){
      let ableBuy = true;
      const myTotalPointCopy = Object.create(this.myTotalPoint)

      const result  =_.mergeWith(myTotalPointCopy, card.costs , (objValue, srcValue) =>
        objValue - srcValue
      );

      _.forIn(result, value => {
        if(value < 0){
          ableBuy = false;
        }
      });

      return ableBuy;
    },
    addCardToCart(cardId){
      this.forSaleCardList.forEach((card) => {
        if(card.id == cardId && this.ableBuy(card)){
           this.$store.commit('cardToCart', cardId);
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
