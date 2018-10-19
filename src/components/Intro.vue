<template>
    <div>
        <h1>一时语塞...</h1>
    </div>
</template>

<script>
export default {
    name:'Introduction',
  created(){
    this.$parent.onActive(1);
    //this.$emit('activeList','a[href="#/index"]')
  }
}
</script>
<style scoped>

</style>
