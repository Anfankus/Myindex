<template>
  <div id="app" class="container">
    <div class="row" >
      <div class="col-12" >
        <div class="border-bottom pb-4 mb-1">
        <nav class="nav nav-pills nav-fill border p-2 shadow-sm bg-white rounded">
            <router-link v-for="item in list" 
            :key="item.id" 
            :to="item.link"
            class="nav-item nav-link" 
            :class="{active:item.isActive}">{{item.content}}</router-link>
        </nav>
        </div>
        <div class="p-2" >
        <router-view v-on:active-list="onActive"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    onActive(num){
      if(this.current!=-1)
        this.list[this.current].isActive=false;
      this.current=num;
      this.list[this.current].isActive=true;
    }
  },
  data(){
    return {
      current:-1,
      list:[
        {
          id:1,
          link:'/',      
          isActive:false,
          content:'首页吧算是'
        },
        {
          id:2,
          link:'/intro',          
          isActive:false,
          content:'自我介绍?'
        },
        {
          id:3,
          link:'/contact',
          isActive:false,
          content:'联系我?'
        },
        {
          id:4,
          link:'/new',
          isActive:false,
          content:'什么新的东西?'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@grey:#f1f1f1;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  color:#28a745;
  &.active{
    background-color: #28a745 !important;
  }
  &:hover{
    color:#146e29;
    background-color: #f1f1f1;
      &.active{
        background-color: #188a33 !important;
      }
  }
  transition: ease all 0.2s;
}
</style>