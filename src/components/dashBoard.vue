<template>
  <div class="card bg-light" style="width: 18rem;" v-for="card in cards">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title" :class="card.value"> {{ card.value }} </h5>

      <div v-for="(value, key) in card.costs" class="cost" :class="key" >
        {{ value}}
      </div>
      <a href="#" class="btn btn-primary">BUY</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 'c001',
          user: null,
          display: false,
          value: "green",
          costs: {
            blue: 2,
            red: 2
          }
        },
        {
          id: 'c002',
          user: null,
          display: false,
          value: "black",
          costs: {
            white: 1,
            blue: 1,
            green: 1,
            red: 1
          }
        },
        {
          id: 'c003',
          user: null,
          display: false,
          value: "blue",
          costs: {
            white: 2,
            green: 1,
            red: 1,
            black: 1
          }
        }
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
      color: white;

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
