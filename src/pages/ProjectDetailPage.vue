<template>
    <div>
        <h2>Dettagli Progetto</h2>
        <p>Titolo: {{ project.title }}</p>
        <p>Descrizione: {{ project.description }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            project: null,
        };
    },
    created() {

        const slug = this.$route.params.slug;
        this.project = this.loadProjectDetails(slug);
    },
    methods: {
        loadProjectDetails(slug) {

            return {
                title: `Progetto ${slug}`,
                description: `Descrizione del progetto ${slug}`,

            };
        },
    },
};
</script>