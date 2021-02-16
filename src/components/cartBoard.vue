<template>
<div class="cart-board">
  <h1> Cart </h1>

  <div class="card-list">
    <div class="card bg-light clickable" v-for="card in cartCardList">
      <div class="card-value" :class="card.value"> </div>
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key" >
          {{ value }}
        </div>
      </div>
    </div>
  </div>

  <div class="point-list bg-light">
    <div v-for="point in cartPointList" :class="[point.value, {clickable: true}]" class="point">
    </div>
  </div>

  <btn class="btn btn-primary" @click="buy" >BUY</btn>
</div>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    buy(){
      this.cartPointList.forEach((e)=>{
        e.user=1;
      })

            this.cartCardList.forEach((e)=>{
        e.user=1;
      })
    },
  },
  computed: {
    cartPointList() {
      return this.$store.getters.cartPointList;
    },
    cartCardList() {
      return this.$store.getters.cartCardList;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



</style>
