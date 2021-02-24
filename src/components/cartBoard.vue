<template>
<div class="cart-board">
  <h1> Cart </h1>

  <div class="card-list">
    <div :class="card.value" class="card clickable" v-for="card in cartCardList">
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key" >
        </div>
      </div>
    </div>
  </div>

  <div class="point-list bg-light">
    <div v-for="point in cartPointList" :class="[point.value, {clickable: true}]" class="point">
    </div>
  </div>

  <btn class="btn btn-primary" @click="buy">BUY</btn>
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
      // console.log("groupMyPointList", this.$store.getters.groupMyPointList)
      // console.log("groupMyCardList", this.$store.getters.groupMyCardList)
      // console.log("myTotalPoint", this.$store.getters.myTotalPoint)
      var myPointList = this.$store.getters.myPointList
      // console.log("myPointList", this.$store.getters.myPointList)

      this.cartPointList.forEach((e)=>{
        e.user=1;
      })

      this.cartCardList.forEach((e)=>{
        e.user=1;


        for (const [key, value] of Object.entries(e.costs)) {
          console.log("key", key, "value", value)
          for (let el of myPointList) {
            if (el.value == key) {
              value = value - 1
              el.user = null

              if(value == 0){
                break
              }
            }
          }
        }

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
