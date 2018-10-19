<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to anfankus空空如也的首页吧'
    }
  },
  created(){
    this.$parent.onActive(0);
    //this.$emit('activeList','a[href="#/index"]')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
