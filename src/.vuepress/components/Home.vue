<template>
    <div class="rounded shadow-lg bg-grey-lighter p-5">
        <div class="flex flex-col items-around">
            <div class="flex justify-center items-center mb-5">
                <div class="profile-image-container">
                    <img
                        src="profile.png"
                        class="rounded-full"
                    >
                </div>
            </div>

            <div class="flex flex-col items-center mb-5 font-sans">
                <h3 class="mb-5">
                    Dominic Serrano
                </h3>

                <p class="text-left mb-5 w-4/5">
                    I am a Full Stack Web Developer in Nashville, TN and graduate of <a href="http://nashvillesoftwareschool.com/">
                        Nashville Software School
                    </a>.

                    I consider myself a JavaScript enthusiast, who particularly enjoys working with Vue.js. When I'm not coding, you can find me playing with my dogs or on the soccer field. Check out some of my cool projects <a href="/projects.html">
                        here
                    </a>.
                </p>

                <p class="text-left" />
            </div>

            <hr class="border m-0 mb-5">

            <HomeContactSection />
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import './../styles/index.pcss';

.profile-image-container {
    width: 150px;
}
</style>