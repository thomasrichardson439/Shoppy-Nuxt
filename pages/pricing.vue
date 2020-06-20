<template>
    <div class="wrapper">
        <img 
            src="~/assets/images/pricing/rocket.svg" 
            class="absolute w-full h-screen md:h-full pricing_rocket z-10 max-w-xs" 
        />
        <div class="absolute w-full h-screen md:h-full pricing_bg"></div>

        <div class="container mx-auto rectangle relative w-4/5 pt-20 pricing_top_block">
            <div class="flex flex-wrap md:justify-end">
                <div
                    class="flex flex-wrap text-center md:w-3/4 w-full justify-between"
                >
                    <h2
                        class="title mt-15 font-bold text-white md:text-5xl text-xl w-full"
                    >
                        Simple, transparent pricing
                    </h2>
                    <p
                        class="md:text-lg text-base mb-16 text-white w-full text-center"
                    >
                        Always know what you'll pay.
                    </p>
                    <div
                        v-for="(item, index) in plans"
                        :key="index"
                        class="md:w-1/2 md:mb-0 mb-5 mt-10 w-full"
                    >
                        <PricingItem :item="item"/>
                    </div>
                </div>
                <template v-for="(item, index) in features">
                    <DescribeItem :key="index" :item="item"/>
                </template>
            </div>

            <div class="text-center my-32">
                <p class="font-semibold text-4xl text-black">
                    Set up your shop
                </p>
                <p class="text-lg my-8">
                    Try Shoppy free forever on our managed Platform and pick a plan later if you want.
                </p>
                <p>
                    <a
                        href="#"
                        class="font-semibold my-4 inline-block py-3 px-8 text-white bg-green hover:bg-green rounded-lg shadow"
                    >Create Account</a>
                </p>
            </div>
        </div>

        <div class="bg-white rectangle rectangle_blue relative py-32">
            <div class="lg:w-3/5 mx-auto">
                <p class="font-semibold text-black text-4xl text-center">
                    Frequently asked questions
                </p>
                <p class="text-lg text-center text-gray-500 my-10">
                    Looking for more info? Here are some things we're commonly
                    asked
                </p>
                <div class="accordion divide-y divide-gray-300">
                    <div></div>
                    <accordion-item
                        v-for="(item, index) in questions"
                        :key="index"
                        :question="item.question"
                        :answer="item.answer"
                    />
                    <div></div>
                </div>
            </div>
        </div>
        <get-started/>
    </div>
</template>
<script>
    import AccordionItem from '~/components/AccordionItem.vue'
    import GetStarted from '~/components/GetStarted'
    import PricingItem from '~/components/pricing/PricingItem'
    import DescribeItem from '~/components/pricing/DescribeItem'

    export default {
        components: {
            AccordionItem,
            GetStarted,
            PricingItem,
            DescribeItem
        },

        data() {
            return {
                active: false,
                questions: require('~/assets/content/pricing/questions.json'),
                plans: require('~/assets/content/pricing/plans.json'),
                features: require('~/assets/content/pricing/features.json')
            }
        },

        head() {
            return {
                title: 'Pricing',
            }
        },

        methods: {
            toggle() {
                this.active = !this.active
            }
        }
    }
</script>

<style scoped lang="scss">
    .pricing_bg {
        background-image: url(~assets/images/pricing/pricing-bg-c.svg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .pricing_rocket{
        max-width: 120px;
        max-height: 285px;
        bottom: 20%;
        left: 8%;
        @media (max-width: 767px) {
            z-index: 1;
            bottom: 25%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .pricing_top_block{
        @media (max-width: 767px) {
            z-index: 2;
        }
    }
</style>
