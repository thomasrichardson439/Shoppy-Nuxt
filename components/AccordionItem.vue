<template>
    <div>
        <div class="flex justify-between p-4">
            <p class="text-lg font-semi-bold font-black">{{ question }}</p>
            <img
                class="w-6 h-4 mx-2 float-right self-center"
                src="~/assets/images/pricing/chevron.svg"
                :class="{ transform: open, 'rotate-180': open }"
                @click="toggle"
            />
        </div>
        <p
            class="accordion-text mb-4 px-4 font-normal text-gray-500"
            v-if="open"
        >
            {{ answer }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['question', 'answer'],
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>
