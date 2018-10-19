<template>
    <div>
        <h1>以后会加点东西的...吧</h1>
    </div>
</template>
<script>
export default {
    name:'New',
  created(){
    this.$parent.onActive(3);
    //this.$emit('activeList','a[href="#/index"]')
  }
}
</script>
<style scoped>

</style>
