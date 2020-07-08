<template>
    <div v-if="answer">
        <header class="shoppy-docs-header p-8">
            <div class="container mx-auto">
                <nuxt-link to="/answers">
                    <h1 class="text-white text-xl">
                        Frequently Asked Questions
                    </h1>
                </nuxt-link>
            </div>
        </header>

        <div class="container mx-auto">
            <div class="md:flex md:flex-wrap py-10">
                <div class="md:w-8/12 rounded-lg shadow-lg bg-white p-8">
                    <div class="md:flex md:flex-wrap">
                        <div class="md:w-1/12">
                            <div
                                class="mt-1 rounded-full w-6 h-6 p-1 items-center text-white bg-answers"
                            >
                                <div class="text-center text-sm">?</div>
                            </div>

                            <div
                                class="mt-6 rounded-full w-6 h-6 items-center text-answers border border-answers"
                            >
                                <div class="text-center text-sm">
                                    »
                                </div>
                            </div>
                        </div>
                        <div class="md:w-11/12">
                            <h1 class="text-2xl mb-3">
                                {{ answer.title }}
                            </h1>

                            <div v-html="rendered" class="markdown-enabled answer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
    @import url(~/assets/css/markdown.scss);

    .answer p {
        margin-top: 20px;
    }

    ul {
        margin-top: 20px;
    }
</style>

<script>
import { mapGetters } from 'vuex'
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
            title: this.answer.title
        }
    },

    computed: {
        ...mapGetters('content', ['answers']),
        answer() {
            return (this.answers || []).find(
                (answer) => answer.route === this.$route.params.id || ''
            )
        }
    },

    mounted() {
        if (this.answer) {
            const rendered = renderer.makeHtml(this.answer.content)
            this.rendered = rendered || ''
        }
    }
}
</script>
