<template>
    <div class="home-container">
        <div class="rounded shadow-md bg-grey-lighter p-5 mt-10">
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
                        About Me
                    </h3>

                    <p class="text-left mb-5 w-4/5">
                        I am a Full Stack Web Developer in Nashville, TN and graduate of <a href="http://nashvillesoftwareschool.com/">Nashville Software School</a>. I consider myself a JavaScript enthusiast, who particularly enjoys working with Vue.js. When I'm not coding, you can find me playing with my dogs or on the soccer field. Check out some of my cool projects <a href="/projects.html">here</a>.
                    </p>
                </div>

                <hr class="border m-0 mb-5">

                <HomeContactSection />
            </div>
        </div>
    </div>
</template>

<script>
import HomeContactSection from "./HomeContactSection";

export default {
	components: {
		HomeContactSection
	}
};
</script>

<style lang="scss" scoped>
@import "./../styles/theme.styl";

.home-container {
    margin: auto;
    max-width: 80%;
}

.profile-image-container {
    width: 150px;
}

// Media queries
@media (min-width: 1200px) {
    .home-container {
        width: 60%;
    }
}
</style>