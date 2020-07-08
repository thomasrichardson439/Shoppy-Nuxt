<template>
    <div class="bg-white" v-if="posts">
        <div class="md:overflow-hidden terms-bg mb-20">
            <h1 class="text-center font-bold text-white text-5xl mb-2">
                <img
                    class="h-14 sm:mt-12 md:mt-6 mt-12 mb-9 mx-auto"
                    src="~assets/images/logo.svg"
                    alt="Shoppy"
                />
            </h1>
            <h2 class="text-center text-white text-xl">
                Real stories & opinions about running an ecommerce business
            </h2>
        </div>

        <div class="mt-10 max-w-screen-lg mx-auto bg-white">
            <!-- Most recent article -->
            <div class="relative flex content-start flex-wrap">
                <div class="md:w-8/12 h-full mx-auto">
                    <img class="w-full h-full object-cover"
                         :src="require('~/assets/content/posts/images/' + posts[0].image)"
                         :alt="posts[0].title"/>
                </div>
                <div class="md:w-4/12 relative ml-auto my-8">
                    <div class="sm:ml-8 md:ml-8 ml-4">
                        <BlogArticleInfo :post="posts[0]"/>
                    </div>
                </div>
            </div>

            <!-- All older articles -->

            <div class="border-t border-gray-200 my-10"></div>

            <div
                v-if="posts.length > 1"
                class="mt-12 pb-20 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                <div v-for="post in posts.slice(1)" :key="post"
                     class="flex flex-col overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover"
                             :src="require('~/assets/content/posts/images/' + post.image)"
                             :alt="post.title"/>
                    </div>
                    <div class="flex-1 bg-white py-5 flex flex-col justify-between">
                        <BlogArticleInfo :post="post"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    import BlogArticleInfo from '~/components/blog/BlogArticleInfo.vue';

    export default {
        components: {
            BlogArticleInfo
        },

        computed: {
            ...mapGetters('content', ['posts']),
        },

        head() {
            return {
                title: 'Blog',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .terms-bg {
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(~assets/images/home/home_top_bg.png);
        padding: 9vw 4vw 6vw 4vw;
        @media (max-width: 767px) {
            background-image: none;
            background-color: #15212a;
            padding-bottom: 50px;
        }
    }
</style>
