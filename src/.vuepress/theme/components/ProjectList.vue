<template>
    <div class="project-list-container mx-auto">
        <ProjectEntry
            v-for="({
                date, description, image, links, tags, title
            }) in projects"
            :key="title"
            :date="date"
            :description="description"
            :image="image"
            :links="links"
            :tags="tags"
            :title="title"
        />
    </div>
</template>

<script>
import ProjectEntry from "./ProjectEntry";
import projects from "./projects";

export default {
	components: {
		ProjectEntry
	},

	data() {
		return {
			projects
		};
	}
};
</script>

<style lang="scss" scoped>
@import './../styles/theme.styl';

.project-list-container {
    width: 90%;
}

// Media queries
@media (min-width: 1200px) {
    .project-list-container {
        width: 80%;
    }
}
</style>