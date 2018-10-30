<template>
  <b-card
  no-body
  img-src="https://picsum.photos/200/150"
  img-alt="Image"
  img-top
  class="cardItem">
  <b-card-header>
  <h4 v-if="href" ><a :href="this.href">{{title}}</a></h4>
  <h4 v-else>{{title}}</h4>
  </b-card-header>
  <b-card-body>
      <p class="card-text">{{msg}}</p>
  </b-card-body>
  <b-card-footer>
    <div class="state border mb-2 rounded bg-white">
      <div >完成状态:</div>
      <div v-if="state" class="bg-success text-white rounded">已完成</div>
      <div v-else  class=" bg-primary text-white rounded">未完成</div>
    </div>
    <div class="prog">
      <span>进度:</span>
    <b-progress
    :variant="state?'success':'primary'"
    :value="this.process"
    :max="this.max"
    show-progress
    animated></b-progress>
    </div>
    <div class="lang ">
      <span>语言:</span>
      <div v-for="each in langArray"
      :key="each.id"
      class="bg-warning text-white rounded">{{each.type}}</div>
    </div>
  </b-card-footer>

  </b-card>
</template>
<script>
export default {
  name:'card-item',
  props:{
    title:{
      type:String,
      required:true
    },
    msg:{
      type:String,
      required:true
    },
    state:{
      type:Boolean,
      required:true
    },
    process:{
      type:Number,
      default:100
    },
    langs:{
      type:Array,
      required:true
    },
    href:String
  },
  data(){
    return{
      max:100,
      langArray:this.langs.map((each,index)=>{return{id:index,type:each}})
    }
  }
}
</script>
<style lang="less" scoped>
.cardItem{
  min-width:20rem;
  flex: 0 0 auto;
  @media (min-width: 576px){
    margin-bottom: 15px;
    width: 30%;
  }
  .state{
    display: flex;
    flex-direction: row;
    justify-content: center;
    div{
      margin: 0.25rem !important;
      padding: 0.25rem !important;
      flex-grow: 1;
    }
  }
  .prog,.lang{
    margin-bottom: 10px;
    display: flex;
    div{
      margin: 0 0.25rem 0 0.25rem;
      flex: 1 1 auto;
      height: 25px;
    }
  }
}
</style>

