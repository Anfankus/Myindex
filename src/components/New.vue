<template>
    <div>
        <h1>{{tip}}</h1>
        <b-card-group deck class="cg">
          <card-item v-for="each in done"
          :key="each.title"
          v-bind="each"></card-item>
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
        done:[
          new CardInfo('MyIndex','个人首页(没错就是现在看到的这个)',['Vue'],false,10,'https://github.com/abckek123/Myindex'),
          new CardInfo('Lan-chat','局域网聊天软件',['c++'],true),
          new CardInfo('CIHouse','大数据企业征信系统',['Java','Javascript'],true,100,'https://github.com/abckek123/CIHouse'),
          new CardInfo('Herald-web','小猴偷米web-竞赛组队',['Vue'],false,20,'https://github.com/abckek123/herald-web'),
          new CardInfo('Herald-webservice','小猴偷米webservice-组队竞赛',['javascript'],false,10,'https://github.com/abckek123/herald-webservice'),
          new CardInfo('Metrics',
          '面向Java代码，采用机器学习的度量预测应用程序',['Java'],false,0,'https://github.com/abckek123/Metrics')
        ]
      }
    },
    components:{
      CardItem
    }
}
</script>
<style scoped>
</style>
