<template>
    <div class="container mx-auto -mb-32 relative">
        <div
            class="rounded-lg shadow-lg bg-white py-10 px-20 flex flex-wrap justify-between leading-normal items-center"
        >
            <div class="md:w-2/3">
                <h2 class="text-4xl font-bold mb-2">{{ title }}</h2>
                <p class="text-gray-700 text-base text-xl mb-2">
                    {{ text }}
                </p>
            </div>
            <div class="md:w-1/3 flex justify-end mb-2">
                <nuxt-link
                    :to="linkTo"
                    class="md:mb-0 inline-block py-2 px-8 text-green rounded-lg shadow border-solid border border-green font-bold"
                >
                    {{ buttonText }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: true,
    props: {
        title: {
            type: String,
            default: () => 'Ready to get started?'
        },
        text: {
            type: String,
            default: () => 'Create an account and get started'
        },
        buttonText: {
            type: String,
            default: () => 'Create Shoppy account'
        },
        linkTo: {
            type: String,
            default: () => '/auth/signup'
        }
    }
}
</script>
