<template>

<div class="dash-board">
  <h1>For Sale</h1>

  <div class="card-list">
    <div class="card bg-light clickable" v-for="card in cardList" @click="buyCard(card.id)">
      <div class="card-value" :class="card.value"> </div>
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key" > {{ value }} </div>
      </div>
    </div>
  </div>

  <div class="point-list bg-light">
    <div v-for="point, key in groupPoint" :class="[key, {clickable: true}]" class="point" @click="addPointToCart(key)">
      {{point}}
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
    buyCard(e){
      this.cardList = this.$store.state.cardList.map((card) => {
        if(card.id == e){
          card.user = 'cart'
        }
        return card
      })
    },

    addPointToCart(key){
      window.r = this.pointList
      for(let i = 0 ; i< this.pointList.length ;i++ ){
        if(this.pointList[i].value === key){
          this.pointList[i].user = 'cart';
          break;
        }
      }
    }
  },
  computed: {
    cardList: {
      get(){
        return this.$store.getters.forSaleCardList;
      },
      set(value){
        this.$store.commit('cardList', value);
      }
    },
    pointList: {
      get(){
        return this.$store.getters.forSalePointList;
      },
      set(value){
        this.$store.commit('pointList', value);
      }
    },
    groupPoint(){
      // console.log("a", this.$store.getters.groupforSalePointList)
      return this.$store.getters.groupforSalePointList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
