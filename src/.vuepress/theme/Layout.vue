<template>
    <div class="layout-container bg-blue">
        <Nav class="bg-grey-lightest" />

        <div class="container mx-auto">
            <component :is="component" />
        </div>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Home from "./components/Home.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
	components: {
		Home,
		Nav,
		ProjectList
	},

	computed: {
		component() {
			return this.$page.frontmatter.component || "Home";
		}
	},
};
</script>

<style lang="styl">
@import "./styles/theme.styl";

.layout-container {
    min-height: 100%;
    padding-bottom: 50px;
}
</style>