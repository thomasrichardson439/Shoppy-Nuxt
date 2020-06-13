<template>
    <div
        class="flex flex-col items-center rounded-lg bg-white py-8 md:px-20 md:mx-5"
    >
        <p class="text-lg text-black">
            {{ item.name }}
        </p>
        <p class="flex">
            <sup class="text-gray-400 text-2xl self-center font-bold">$</sup>
            <span class="price text-black" style="fontSize: 58px;">
                {{ item.price }}
            </span>
        </p>
        <div class="text-base text-gray-500 font-regular">
            <p>
                {{ item.text1 }}
            </p>
            <p>
                {{ item.text2 }}
            </p>
        </div>
        <hr class="w-1/3 h-0.75 my-6" />
        <ul class="list-none">
            <li
                v-for="(elem, index) in item.possibilities"
                :key="index"
                class="flex content-center mb-3"
            >
                <img
                    class="w-5 h-5 mr-3"
                    src="~/assets/images/pricing/green-check.svg"
                />
                <p class="text-gray-500 text-sm">
                    <span v-if="elem.count" class="font-medium text-sm">
                        {{ elem.count }}
                    </span>
                    {{ elem.text }}
                </p>
            </li>
        </ul>
        <p class="text-gray-500 text-sm mt-5 font-regular">
            {{ item.bottomText }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped></style>
