<template>
    <div v-if="post" class="bg-white">
        <div class="md:overflow-hidden relative bg-bluely blog-header mb-20">
            <div class="blog-header--inner"
                v-bind:style="{ backgroundImage: 'url(' + require('~/assets/content/posts/images/' + post.image) + ')' }"
            ></div>
        </div>

        <div class="container w-6/12 mx-auto pb-40 post">
            <div class="text-center">
                <h1 class="text-4xl">{{ post.title }}</h1>
                <div class="text-gray mb-4 text-xs uppercase">
                    {{ $moment(post.date).format('DD MMM YYYY') }} - {{ post.readTime }} min read
                </div>
            </div>

            <div v-html="rendered" class="mt-10"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .blog-header {
        height: 20vw;

        &--inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            transform: scale(0.5)
        }
    }

    .post {
        font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
        letter-spacing: .3px;
        line-height: 1.6;
        font-size: 1.25rem;

        p {
            margin-bottom: 30px !important;
        }
    }
</style>

<script>
    import {mapGetters} from 'vuex'

    import Showdown from 'showdown'

    const renderer = new Showdown.Converter()

    export default {
        data() {
            return {
                rendered: ''
            }
        },

        head() {
            return {
                title: this.post.title
            }
        },

        computed: {
            ...mapGetters('content', ['posts']),

            post() {
                return (this.posts || []).find(
                    (post) => post.route === this.$route.params.id || ''
                )
            }
        },

        mounted() {
            if (this.post) {
                const rendered = renderer.makeHtml(this.post.content)
                this.rendered = rendered || ''
            }
        }
    }
</script>

