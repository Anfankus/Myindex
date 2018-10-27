<template>
    <side-bar/>
</template>

<script>
import sideBar from '@/components/common/side-bar'
export default {
  name: 'Index',
  components:{
    sideBar
  },
  data () {
    return {
      text: `Welcome to anfankus空空如也的首页吧.
          发现增加一些布局好费劲`,
      list:[
        {
          name:''
        }
      ]
    }
  },
  created(){
    this.$emit('active-list',0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
