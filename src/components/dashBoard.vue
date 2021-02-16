<template>

<div class="dash-board">
  <h1> For Sale</h1>

  <div class="card-board">
    <div class="card bg-light clickable" v-for="card in cardList" @click="buyCard(card.id)">
      <div class="card-value" :class="card.value"> {{ card.value }} </div>
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key" >
          {{ value }}
        </div>
      </div>
        <!-- <btn class="btn btn-primary" @click="buyCard(card.id)" >BUY</btn> -->
    </div>
  </div>


  <div class="diamond-block bg-light">
    <div v-for="point, key in availbalePoint" :class="[key, {clickable: true}]" class="diamond" @click="addPointToCart(key)">
      {{point}}
    </div>
  </div>

  <div class="diamond-block bg-light">
    <div v-for="point in cartPointList" :class="[point.value, {clickable: true}]" class="diamond">
    </div>
  </div>

  <btn class="btn btn-primary" @click="buyPoint" >BUY</btn>
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
    buyPoint(){
      this.cartPointList.forEach((e)=>{
        e.user=1;
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
    cartPointList() {
      console.log('this.$store.getters.cartPointList', this.$store.getters.cartPointList)
      return this.$store.getters.cartPointList;
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
.diamond-block {
  display: flex;
  flex-direction: row;

  .diamond {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 1px;
    border: 1px solid black;
  }


  .white {
    background-color: white;
    color: black;
  }
}


.clickable {
  cursor: pointer;
}

.card-board {
  color: gray;
  height: 500px;
  overflow: scroll;

  .card-value {
    width: 50px;
    height: 50px;
    border-radius: 12px;
  }

  .card-cost-list {
    display: flex;
    flex-direction: row;
  }

  .card-cost {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 1px;
    border: 1px solid black;
  }
}

</style>
