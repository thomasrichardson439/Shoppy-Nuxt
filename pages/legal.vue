<template>
    <div>
        <div class="md:overflow-hidden terms-bg mb-20">
            <h1 class="text-center font-bold text-white text-5xl mb-2">
                Terms of Service
            </h1>
            <h2 class="text-center text-white text-xl">
                The rules and policies of Shoppy
            </h2>
        </div>

        <div class="container mx-auto">
            <div class="md:flex md:flex-wrap">
                <div class="md:w-1/4 text-center md:text-left">
                    <ul class="mt-2">
                        <li class="mb-6">
                            <nuxt-link
                                to="/legal/terms"
                                :class="{
                                    'text-green':
                                        $route.path.indexOf('terms') == -1
                                }"
                            >
                                Terms of Services
                            </nuxt-link>
                        </li>
                        <li class="mb-6">
                            <nuxt-link
                                to="/legal/privacy"
                                :class="{
                                    'text-green':
                                        $route.path.indexOf('privacy') == -1
                                }"
                            >
                                Privacy Policy
                            </nuxt-link>
                        </li>
                        <li class="mb-6">
                            <nuxt-link
                                to="/legal/cookies"
                                :class="{
                                    'text-green':
                                        $route.path.indexOf('cookies') == -1
                                }"
                            >
                                Cookie Policy
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="md:w-3/4">
                    <nuxt-child />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.terms-bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(~assets/images/home/home_top_bg.png);
    padding: 10vw 4vw 5vw 4vw;
    margin-top: -75px;
}
</style>
