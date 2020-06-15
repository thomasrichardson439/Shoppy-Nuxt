<template>
    <div>
        <div class="flex-1" v-if="post">
            <p class="text-sm leading-5 font-medium text-indigo-600" v-if="post.tag">
                <a href="#" class="hover:underline">
                    {{ post.tag }}
                </a>
            </p>
            <a href="#" class="block">
                <router-link
                    :to="'/blog/' +post.route">
                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {{ post.title }}
                    </h3>
                </router-link>
                <p class="mt-3 text-base leading-6 text-gray-500">
                    <template v-if="post.preview">
                        {{ post.preview }}
                    </template>
                    <template v-else>
                        {{ truncated }}...
                    </template>
                </p>
            </a>
        </div>
        <div class="mt-6 flex items-center">
            <div>
                <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline" v-if="post.author">
                        {{ post.author }}
                    </a>
                </p>
                <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">
                        {{ $moment(post.date).format('DD MMM YYYY') }}
                    </time>
                    <span class="mx-1">
                        &middot;
                    </span>
                    <span>
                        {{ post.readTime }} min read
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['post'],

        computed: {
            truncated: function () {
                let truncated = this.post.content.substring(0, 180)
                return truncated.substring(0, truncated.lastIndexOf(' '))
            }
        }
    }
</script>
