<template>
  <div class="point-list bg-light">
    <template  v-for="point, key in groupPoint">
       <component :is="numberToComponent(point)" :color="key"></component>
    </template>
  </div>
</template>

<script>
import p1 from './p1.vue'
import p2 from './p2.vue'
import p3 from './p3.vue'
import p4 from './p4.vue'
import p5 from './p5.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    p1,
    p2,
    p3,
    p4,
    p5,
  },
  methods: {
    numberToComponent(n){
      switch (n) {
      case 1:
        return <p1/>
        break;
      case 2:
        return <p2/>
        break;
      case 3:
        return <p3/>
        break;
      case 4:
        return <p4/>
        break;
      case 5:
        return <p5/>
        break;
      default:
        console.log(`Sorry, we are out of`);
      }
    }
  },
  computed: {
    groupPoint(){
      return this.$store.getters.groupMyPointList;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
