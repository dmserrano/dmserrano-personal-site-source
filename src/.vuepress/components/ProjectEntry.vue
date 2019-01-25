<template>
    <div class="rounded shadow-md bg-grey-lighter p-5 my-10">
        <div class="flex flex-container">
            <div class="project-image-container w-1/2 mr-5">
                <img
                    ref="imageElement"
                    :src="image"
                    class="rounded border cursor-pointer"
                    @click="handleImageFullscreen"
                >
            </div>

            <div class="flex flex-col project-text-container w-1/2">
                <div class="flex justify-between items-center mb-2">
                    <h3>{{ title }}</h3>

                    <span class="text-grey">
                        {{ date }}
                    </span>
                </div>

                <!-- Links section -->
                <div class="flex mb-2">
                    <span
                        v-for="({ label, link }, index) in links"
                        :key="index"
                        class="mr-4 text-sm"
                    >
                        <a
                            :href="link"
                            target="_blank"
                        >
                            {{ label }}
                        </a>
                    </span>
                </div>

                <div class="flex flex-wrap mb-2">
                    <TagButton
                        v-for="(tag, index) in tags"
                        :key="index"
                        :name="tag"
                    />
                </div>

                <div>
                    {{ description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	props: {
		date: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		links: { type: Array, required: true },
		tags: { type: Array, required: true },
		title: { type: String, required: true },
	},

	methods: {
		handleImageFullscreen() {
			this.$refs.imageElement.requestFullscreen();
		}
	}
};
</script>

<style lang="scss" scoped>
@import './../styles/index.pcss';

@media(max-width: 600px) {
    .flex-container {
        flex-direction: column-reverse;
    }

    .project-image-container,
    .project-text-container {
        width: 100%;
    }

    .project-text-container {
        margin-bottom: 1.25rem;
    }
}
</style>