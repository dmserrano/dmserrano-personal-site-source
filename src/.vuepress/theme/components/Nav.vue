<template>
    <nav class="flex items-center justify-between flex-wrap p-2">
        <div class="flex items-center flex-no-shrink">
            <a
                href="/"
                class="home-page-link font-semibold text-xl"
            >
                Dominic Serrano
            </a>
        </div>

        <div class="w-full block md:flex md:items-center md:w-auto">
            <div class="text-lg md:text-sm md:flex-grow">
                <a
                    href="/"
                    class="block md:inline-block md:mt-0 mr-4"
                >
                    Home
                </a>

                <a
                    href="/projects.html"
                    class="block md:inline-block md:mt-0 mr-4"
                >
                    Projects
                </a>

                <a
                    href="https://github.com/dmserrano/dmserrano-personal-site-source"
                    class="block md:inline-block md:mt-0 mr-4"
                    target="_blank"
                >
                    Gitub
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import "./../styles/theme.styl";

.home-page-link:hover {
    border-bottom-color: transparent;
}

nav a {
    color: #3D4852;
    padding-bottom: 10px;
    padding-top: 10px;
    text-decoration: none;
    border-bottom-color: transparent;
    border-bottom-width: 2px;

    &:hover {
        border-bottom-color: #dc8034;
        border-bottom-width: 2px;
    }
}
</style>