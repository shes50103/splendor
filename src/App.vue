<template>
  <dashBoard/>
  <myBoard/>
</template>

<script>
import dashBoard from './components/dashBoard.vue'
import myBoard from './components/myBoard.vue'

import 'bootstrap/dist/css/bootstrap.css';


export default {
  name: 'App',
  components: {
    dashBoard,
    myBoard
  }
}
</script>

<style lang="scss">

</style>
