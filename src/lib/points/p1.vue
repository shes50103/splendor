<template>
  <div class="point-stack">
    <div style="float:left; margin-left:30px" :class="color" class="box box1 clickable point">
      1
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
