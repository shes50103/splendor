<template>
<div class="my-board">
  <h1> My board</h1>
  myCardListPoint: {{myCardListPoint}} <br>
  myTotalPoint: {{myTotalPoint}}
  <div class="card-list">
    <div :class="card.value" class="card" v-for="card in myCardList">
      <div class="card-cost-list">
        <div v-for="(value, key) in card.costs" class="card-cost" :class="key"></div>
      </div>
    </div>
  </div>

  <myPointStack/>

</div>

</template>

<script>
import myPointStack from './myPointStack.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    myPointStack
  },
  computed: {
    myCardListPoint() {
      return this.$store.getters.groupMyCardList
    },
    myTotalPoint() {
      let obj1 = this.$store.getters.groupMyPointList
      let obj2 = this.$store.getters.groupMyCardList

      const mergeFruits = data => {
        const result = {};
        data.forEach(basket => {
          for (let [key, value] of Object.entries(basket)) {
            if (result[key]) {
              result[key] += value;
            } else {
              result[key] = value;
            }
          }
        });
        return result;
      };

      return mergeFruits([obj1, obj2])
    },
    myCardList: {
      get(){
        return this.$store.getters.myCardList;
      },
      set(value){
        this.$store.commit('cardList', value);
      }
    },
    myPointLis: {
      get(){
        return this.$store.getters.myPointList;
      },
      set(value){
        this.$store.commit('pointList', value);
      }
    },
    groupPoint(){
      return this.$store.getters.groupMyPointList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
