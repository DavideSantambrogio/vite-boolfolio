<template>
  <div id="app" class="container">    
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from './components/ProjectList.vue';

export default {
  components: {
    ProjectList,
  },
};
</script>

<style lang='scss'>
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"; 

</style>
