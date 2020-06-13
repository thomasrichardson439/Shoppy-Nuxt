<template>
    <div class="container mx-auto shoppy-hero--inner">
        <div class="md:flex md:flex-wrap pb-16">
            <div class="text-center md:pt-16 md:pb-16 md:w-2/3 mx-auto">
                <h2
                    class="uppercase font-bold text-sm mb-4"
                    :class="`text-${item.titleColor}`"
                >
                    {{ item.title }}
                </h2>
                <h1 class="font-bold text-4xl leading-tight mb-4">
                    {{ item.head }}
                </h1>

                <p class="md:pr-30 text-lg">
                    {{ item.text }}
                </p>
            </div>
            <div class="md:w-1/2">
                <img :src="item.image" />
            </div>
            <div class="md:w-1/2 text-center md:text-left md:pt-16 md:pl-16">
                <ul class="list-none">
                    <li
                        v-for="(elem, index) in item.features"
                        :key="index"
                        class="flex content-center mb-3"
                    >
                        <img
                            :src="`images/home/${item.titleColor}_check.png`"
                            alt
                            class="mr-3"
                        />
                        {{ elem }}
                    </li>
                </ul>
                <a
                    href="#"
                    class="mt-6 mb-12 md:mb-0 md:mt-10 mr-5 inline-block py-2 px-8 rounded-lg shadow border-solid border font-bold"
                    :class="`text-${item.titleColor} border-${item.titleColor}`"
                >
                    {{ item.btnText }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped></style>
