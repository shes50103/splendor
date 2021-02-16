<template>
  <div class="point-stack">
    <div style="float:left; margin-left:30px" :class="color" class="box box1 clickable point">
    </div>
    <div style="float:left; margin-left:30px" :class="color" class="box box2 clickable point">
      2
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'color'
  ]
}
</script>

<style lang=scss>



</style>
