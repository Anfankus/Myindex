<template>
  <b-container>
    <b-row>
      <b-col lg=12>
        <div class="border-bottom pb-4 mb-1">
        <nav class="nav  nav-fill border p-2 shadow-sm bg-white rounded">
            <b-btn v-for="item in list"
            :key="item.id"
            :to="item.link"
            variant="outline-success"
            class="nav-item m-2"
            exact
            replace>{{item.content}}</b-btn>
        </nav>
        </div>
      </b-col>
    </b-row>
    <router-view ></router-view>
  </b-container>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      current:-1,
      list:[
        {
          id:1,
          link:'/',
          content:'首页吧算是'
        },
        {
          id:2,
          link:'/intro',
          content:'关于我?'
        },
        {
          id:3,
          link:'/new',
          content:'正在做的'
        },
        {
          id:4,
          link:'/contact',
          content:'联系我?'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@grey:#f1f1f1;

div.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
