<template>
    <div class="contact-section-container flex justify-between m-auto">
        <a
            class="contact-link btn-outline btn-orange-outline"
            href="https://bitbucket.org/dmsrojo/"
            target="_blank"
        >
            Bitbucket
        </a>

        <a
            class="contact-link btn-outline btn-orange-outline"
            href="https://github.com/dmserrano"
            target="_blank"
        >
            Github
        </a>

        <a
            class="contact-link btn-outline btn-orange-outline"
            href="mailto:dmsrojo@gmail.com"
        >
            Gmail
        </a>

        <a
            class="contact-link btn-outline btn-orange-outline"
            href="https://www.linkedin.com/in/dominic-serrano/"
            target="_blank"
        >
            LinkedIn
        </a>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../styles/index.pcss';

a.btn-outline:hover {
    text-decoration: none !important;
}

.contact-link {
    text-align: center;
}

.contact-section-container {
    width: 80%;
}


@media (max-width: 660px) {
    .contact-section-container {
        width: 100%;
    }
}

// Mobile size media query
@media (max-width: 500px) {
    .contact-section-container {
        flex-direction: column;
        width: 70%;
    }

    .contact-link {
        margin-bottom: 1.25em;
    }

    .contact-link:last-child {
        margin-bottom: 0;
    }
}
</style>