<template>
    <div v-if="answer">
        <header class="shoppy-docs-header p-8">
            <div class="container mx-auto">
                <nuxt-link to="/answers">
                    <h1 class="text-white text-xl">Frequently Asked Questions</h1>
                </nuxt-link>
            </div>
        </header>

        <div class="container mx-auto">
            <div class="md:flex md:flex-wrap py-10">
                <div class="md:w-8/12 rounded-lg shadow-lg bg-white p-8">
                    <div class="md:flex md:flex-wrap">
                        <div class="md:w-1/12">
                            <div class="mt-1 rounded-full w-6 h-6 p-1 items-center text-white bg-answers">
                                <div class="text-center text-sm">?</div>
                            </div>

                            <div class="mt-6 rounded-full w-6 h-6 p-1 items-center text-answers border border-answers">
                                <div class="text-center text-sm">
                                    »
                                </div>
                            </div>
                        </div>
                        <div class="md:w-11/12">
                            <h1 class="text-2xl mb-3">
                                {{ answer.title }}
                            </h1>

                            <div v-html="rendered"></div>
                        </div>
                    </div>
                </div>
                <div class="md:w-4/12">
                    <div class="ml-20 mt-8">
                        <span class="color-darkgrey font-medium">FAQ topics</span>
                        <div class="flex mt-4">
                            <span class="bg-shoppy text-white p-2 text-white rounded-lg mr-2">All</span>
                            <span class="bg-whitegray p-2 text-middarkgray rounded-lg mr-2">Lorem</span>
                            <span class="bg-whitegray p-2 text-middarkgray rounded-lg mr-2">Ipsum</span>
                            <span class="bg-whitegray p-2 text-middarkgray rounded-lg mr-2">Dolor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Showdown from 'showdown'

    let renderer = new Showdown.Converter()

    export default {
        data() {
            return {
                rendered: ''
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
                let rendered = renderer.makeHtml(this.answer.content)
                this.rendered = rendered || ''
            }
        }
    }
</script>
