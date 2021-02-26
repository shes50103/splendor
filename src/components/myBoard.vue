<template>
<div class="my-board">
  <h1> My board</h1>
  groupMyCardList: {{groupMyCardList}} <br>
  myTotalPoint: {{myTotalPoint}}
  <div class="card-list">
    <div :class="card.value" class="card" v-for="card in myCardList">
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key">{{value}}</div>
      </div>
    </div>
  </div>

  <myPointStack/>

</div>

</template>

<script>
import myPointStack from '../lib/points/myPointStack.vue'
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  components: {
    myPointStack
  },
  computed: {
    ...mapGetters(['groupMyCardList', 'myTotalPoint', 'myCardList', 'myPointLis']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
