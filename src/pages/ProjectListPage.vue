<template>
    <div class="container-fluid">
        <h1>Card project</h1>
        <div class="row mt-4 justify-content-center">
            <project-card v-for="project in projects.projects" :key="project.id" :project="project" class="col-md-4" />
        </div>
    </div>
</template>
    
<script>
import ProjectCard from '../components/projectcard.vue';

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: { projects: [] },
        };
    },
    mounted() {
        this.fetchProjects();
    },
    methods: {
        fetchProjects() {
            fetch('http://127.0.0.1:8000/api/projects')
                .then(response => response.json())
                .then(data => {
                    this.projects = data;
                    console.log(this.projects.projects);
                })
                .catch(error => console.error('Errore nella richiesta API:', error));
        },
    },
};
</script>
    
<style scoped>
/* Stile specifico del componente se necessario */
</style>
    