<template>
  <div class="app">
    <dashBoard/>
    <cartBoard/>
    <myBoard/>
  </div>
</template>

<script>
import dashBoard from './components/dashBoard.vue'
import cartBoard from './components/cartBoard.vue'
import myBoard from './components/myBoard.vue'

import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';

export default {
  name: 'App',
  components: {
    dashBoard,
    cartBoard,
    myBoard
  }
}
</script>

<style lang="scss">

.app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .green {
    background-color: green
  }

  .red {
    background-color: red
  }

  .blue {
    background-color: blue
  }

  .gold {
    background-color: gold
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

.clickable {
  cursor: pointer;
}

.card-list {
  color: gray;
  height: 500px;
  width: 300px;
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

.point-list {
  display: flex;
  flex-direction: row;

  .point {
    // position: absolute;
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

</style>
