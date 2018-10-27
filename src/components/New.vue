<template>
    <div>
        <h1>{{tip}}</h1>
        <b-card-group deck>
          <card-item v-for="each in done"
          :key="each.id"
          v-bind="each.item"></card-item>
        </b-card-group>
    </div>
</template>
<script>
import CardInfo from "@/model/cardInfo";
import CardItem from "@/components/common/card-item";
export default {
    name:'New',
    data(){
      return{
        tip:'把做过和正在做的东西贴一下得了',
        done:[{
          id:1,
          item:new CardInfo('MyIndex','个人首页(没错就是现在看到的这个)',['Vue','Javascript'],false,10)
        },{
          id:2,
          item:new CardInfo('Lan-chat','局域网聊天软件',['c++'],true)
        }]
      }
    },
    components:{
      CardItem
    }
}
</script>
<style scoped>

</style>
