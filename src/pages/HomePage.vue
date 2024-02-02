<template>
    <router-link to="/about">About Us</router-link>
    <ProjectList />
</template>
  
<script>
import ProjectList from '../components/ProjectList.vue';

export default {
    components: {
        ProjectList,
    },
};
</script>
  
<style scoped>
/* Stile specifico del componente se necessario */
</style>
  