<template>
    <div class="card d-flex m-4">
        <img :src="project.image" class="card-img-top" alt="Project Image" />
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
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


</style>
  