<template>
  <div class="app">
    <dashBoard/>
    <myBoard/>
  </div>
</template>

<script>
import dashBoard from './components/dashBoard.vue'
import myBoard from './components/myBoard.vue'

import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';

export default {
  name: 'App',
  components: {
    dashBoard,
    myBoard
  }
}
</script>

<style lang="scss">

.app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

</style>
