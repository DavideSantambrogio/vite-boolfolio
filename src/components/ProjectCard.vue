<template>
    <div class="card d-flex m-4">
        <router-link :to="{ name: 'projectDetail', params: { slug: project.slug } }">
            <img :src="project.image" class="card-img-top" alt="Project Image" />
        </router-link>
        <div class="card-body">
            <router-link :to="{ name: 'projectDetail', params: { slug: project.slug } }">
                <h5 class="card-title">{{ project.title }}</h5>
            </router-link>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text"><strong>Programming Language:</strong> {{ project.programming_language }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>
  
<style scoped>
/* Stile specifico del componente se necessario */
</style>
  