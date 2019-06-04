<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  //导入FootGuide
  import FootGuide from './components/FootGuide/FootGuide.vue'
  //映射标签
  export default {
    components:{
      FootGuide
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .app
    width 100%
    height 100%
    background #f5f5f5

</style>
