<template>
    <div>
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
import projects from "./projects";

export default {
	data() {
		return {
			projects
		};
	}
};
</script>

<style lang="scss" scoped>
@import './../styles/index.pcss';
</style>