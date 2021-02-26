
<template>

<div class="dash-board">
  <h1>For Sale</h1>

  <div class="card-list">
    <div :class="card.value" class="card clickable" v-for="card in forSaleCardList" @click="addCardToCart(card.id)">
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key" > {{value}}</div>
      </div>
    </div>
  </div>

  <dashPointStack/>
</div>
</template>

<script>
import dashPointStack from './dashPointStack.vue'
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  components: {
    dashPointStack
  },
  methods: {
    ableBuy(e){
      let myTotalPoint = this.$store.getters.myTotalPoint;

      for (const [key, value] of Object.entries(e.costs)) {
        if(myTotalPoint[key] < value){
          return false;
        }
      }

      return true
    },
    addCardToCart(e){
      this.cardList = this.$store.state.cardList.map((card) => {
        if(card.id == e && this.ableBuy(card)){

          card.user = 'cart'
        }
        return card
      })
    },

    addPointToCart(key){
      for(let i = 0 ; i< this.forSalePointList.length ;i++ ){
        if(this.forSalePointList[i].value === key){
          this.forSalePointList[i].user = 'cart';
          break;
        }
      }
    }
  },
  computed: {
    ...mapGetters(['forSaleCardList', 'forSalePointList']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
