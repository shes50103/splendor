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
    <div v-for="point, key in availbalePoint" :class="[key, {clickable: true}]" class="point" @click="addPointToCart(key)">
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

    availbalePoint(){
      window.p = this.pointList
      let r = _.groupBy(this.pointList, 'value')
      window.r = r

      let obj1 = {
        green: r['green'] && r['green'].length || 0,
        red: r['red'] && r['red'].length || 0,
        blue: r['blue'] && r['blue'].length || 0,
        black: r['black'] && r['black'].length || 0,
        white: r['white'] && r['white'].length || 0,
        gold: r['gold'] && r['gold'].length || 0,
      }

      return obj1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
