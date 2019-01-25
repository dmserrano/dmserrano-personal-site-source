<template>
    <button
        class="border border-orange text-orange-dark hover:bg-orange hover:text-white rounded-full mr-2 mb-2 py-1 px-2 text-xs"
    >
        {{ name }}
    </button>
</template>

<script>
export default {
	props: {
		name: { type: String, required: true }
	}
};
</script>

<style lang="scss" scoped>
</style>