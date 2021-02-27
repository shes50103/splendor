<template>
<div class="cart-board">
  <h1> Cart </h1>
  <div class="card-list">
    <div :class="card.value" class="card clickable" :key="card.id" v-for="card in cartCardList">
      <div class="card-cost-list">
        <div :key="key" v-for="(value, key) in card.costs" class="card-cost" :class="key" >
        </div>
      </div>
    </div>
  </div>
  <div class="point-list bg-light">
    <div :key="point.id" v-for="point in cartPointList" :class="[point.value, {clickable: true}]" class="point">
    </div>
  </div>
  <btn class="btn btn-primary" @click="buy">BUY</btn>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import _ from 'lodash';


export default {
  methods: {
    buy(){
      this.cartPointList.forEach((e)=>{
        e.user=1;
      })

      this.cartCardList.forEach((e)=>{
        e.user=1;
        _.forIn(e.costs, (value, key)=>{
          for (let el of this.myPointList) {
            if (el.value == key) {

              value = value - 1
              el.user = null
              if(value == 0){
                break
              }
            }
          }
        })
      })
    },
  },
  computed: {
    ...mapGetters(['cartCardList', 'cartPointList', 'myPointList']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
