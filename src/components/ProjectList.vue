<template>


  <div>
      <h2>Lista dei Progetti</h2>
      <ul>
        <li v-for="project in projects.projects" :key="project.id">
          {{ project.title }}
        </li>
      </ul>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        projects: [],
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
            console.log(this.projects);
          })
          .catch(error => console.error('Errore nella richiesta API:', error));
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  