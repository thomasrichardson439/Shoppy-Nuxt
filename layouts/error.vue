<template>
    <div>
        <template v-if="error.statusCode === 404">
            <div class="shoppy-hero shoppy-error flex items-center">
                <div class="text-5xl text-white mx-auto font-bold">
                    Oh, that's a {{ error.statusCode }}
                </div>
            </div>
        </template>
        <template v-else>
            <div class="__nuxt-error-page">
                <div class="error">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
                        <path
                            d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
                    </svg>

                    <div class="title">{{ message }}</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                default: null
            }
        },

        computed: {
            statusCode () {
                return (this.error && this.error.statusCode) || 500
            },
            message () {
                return this.error.message || '<%= messages.client_error %>'
            }
        },

        head() {
            return {
                title: `Error ${this.error.statusCode}`
            }
        }
    }
</script>

<style lang="scss">
    .shoppy-error {
        height: calc(100vh + 75px);
        background: linear-gradient(60deg, #562db5, #19afc9);
    }
</style>
