<template>
  <h1> My board</h1>
      {{ myPoint }}

  <div class="card bg-light" style="width: 18rem;" v-for="card in cardList">
    {{ card.user}}
    {{ card.id}}
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title" :class="card.value"> {{ card.value }} </h5>
      <div v-for="(value, key) in card.costs" class="cost" :class="key" >
        {{ value}}
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

  },
  computed: {
    myPoint() {


      window.c = this.$store.getters.myCardList
      return {
        green: 1,
        red: 2
      }
    },
    cardList: {
      get(){
        return this.$store.getters.myCardList;
      },
      set(value){
        this.$store.commit('cardList', value);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  color: gray;

  .cost {
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

  .green {
    background-color: green
  }

  .red {
    background-color: red
  }

  .blue {
    background-color: blue
  }

  .black {
    background-color: black;
    color: white;
  }

  .white {
    background-color: white;
    color: black;
  }
}

</style>
