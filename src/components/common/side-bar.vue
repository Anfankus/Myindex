<template>
<b-row id='sidebar'>
      <b-col cols="3">
        <b-list-group v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-1">Item 1</b-list-group-item>
          <b-list-group-item href="#list-item-2">Item2</b-list-group-item>
          <b-list-group-item href="#list-item-3">Item 3</b-list-group-item>
          <b-list-group-item href="#list-item-4">Item 4</b-list-group-item>
          <b-list-group-item href="#list-item-5">Item 5</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col >
        <div id="listgroup-ex" style="position:relative;overflow-y:auto;height:300px">
          <h4 id="list-item-1">Item 1</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-5">Item 5</h4>
          <p>{{ text }}</p>
        </div>
      </b-col>
    </b-row>
</template>
<script>
export default {
  name:'side-bar',
  data(){
    return {
      text:`Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
      3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
       Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
        et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
         excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table
      , raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`,
      showBar:'none'
    }
  }
}
</script>
<style lang="less" scoped>
#sidebar{
  //display: none;
  @media (min-width: 768px) {
    //display:inline-block;
  }
}
</style>
