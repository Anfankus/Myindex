<template>
    <div>
        <h1>小姐姐除外的人请勿联系我</h1>
    </div>
</template>
<script>
export default {
    name:'Contact',
  created(){
    this.$parent.onActive(2);
    //this.$emit('activeList','a[href="#/index"]')
  }
}
</script>
<style scoped>

</style>
