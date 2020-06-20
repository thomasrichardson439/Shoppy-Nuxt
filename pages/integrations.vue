<template>
    <div>
        <div class="md:overflow-hidden design-bg mb-20">
            <h1 class="text-center font-bold text-white mt-10 md:mt-0 text-3xl md:text-5xl sm:pt-10 md:pt-10 lg:pt-4 xl:pt-0">
                Accept Crypto Payments Now
            </h1>
            <h2 class="text-center text-white text-base md:text-xl">
                All your favourite apps and tools, integrated with Shoppy
            </h2>
            <div class="relative mt-5 md:w-2/6 w-full mx-auto">
                <input class="bg-purple-white shadow rounded border-0 p-3 w-full" placeholder="Search integrations">
                <div class="absolute pin-r pin-t mt-4 mr-4 text-purple-lighter top-0 right-0">
                    <svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
                        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                        S32.459,40,21.983,40z"/>

                    </svg>

                </div>
            </div>
        </div>
        <div class="container mx-auto px-5 md:px-0">
            <div class="bg-ligth_blue_bg relative flex flex-wrap">
                <div class="w-full md:w-1/2 px-4">
                    <h1 class="font-bold text-4xl leading-tight md:mb-10 mb-3">
                        Start selling and accepting payments easily
                    </h1>
                    <p class="pt-5 md:pt-0 md:pr-30 text-lg md:mb-10 mb-3">
                        Shoppy allows you to start selling item and accepting payments easily. 
                        We have created plugins for the most popular shopping carts to make 
                        the integrations fast and easy, even for a non-technical user.
                    </p>
                    <p class="pt-5 md:pt-0 md:pr-30 text-lg md:mb-10 mb-3">
                        In case your shopping cart software is not listed yet, you can request for us 
                        to create a plugin. You can also take a look at our API Docs & Examples 
                        to interact with our Shoppy Pay system directly.
                    </p>
                    <p class="pt-5 md:pt-0  md:pr-30 text-lg md:mb-10 mb-3">
                        Get going and start selling items today!
                    </p>
                </div>
                <div class="w-full md:w-1/2 integration_items_circle">
                    <div class="flex w-full justify-center xl:pt-0 lg:pt-10">
                        <img src="~/assets/images/integrations/opencart.png" alt="">
                    </div>
                    <div class="flex w-full justify-between xl:px-20 lg:px-10">
                        <img src="~/assets/images/integrations/woocommerce.png" alt="">
                        <img src="~/assets/images/integrations/magenta.png" alt="">
                    </div>
                    <div class="flex w-full justify-around xl:px-20 lg:px-10">
                        <img src="~/assets/images/integrations/prestashop.png" alt="">
                        <img src="~/assets/images/integrations/question.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-white">
            <div class="container mx-auto relative">
                <div class="md:overflow-hidden">
                    <h1 data-v-2e4db298="" class="font-bold text-4xl leading-tight mb-10 text-center mt-10">
                        Shoppy integrations
                    </h1>
                    <div class="flex flex-wrap justify-center mb-10">
                        <a 
                            href="#" 
                            class="mx-10 my-2 text-xl list_link" 
                            :class="{active: active == 'all'}"
                            @click.prevent="chooseItems('all')"
                        >
                            Show all
                        </a>
                        <a 
                            href="#" 
                            class="mx-10 my-2 text-xl list_link" 
                            :class="{active: active == 'complete'}"
                            @click.prevent="chooseItems('complete')"
                        >
                            Complete
                        </a>
                        <a 
                            href="#" 
                            class="mx-10 my-2 text-xl list_link" 
                            :class="{active: active == 'upcoming'}"
                            @click.prevent="chooseItems('upcoming')"
                        >
                            Upcoming
                        </a>
                    </div>
                   <div class="flex flex-wrap mb-10">
                        <template v-for="(item, index) in integrationItems">
                            <div class="sm:w-2/6 lg:w-3/12 md:px-7 px-3" :key="index"> 
                                <integrationItem  :item="item"/>
                            </div>
                        </template>
                   </div>
                   <div class="text-center mb-10">
                       <a 
                        href="#"
                        class="border-solid border-2 border-green hover:border-lime 
                        inline-flex items-center justify-center px-2  mb-3
                        lg:px-7 py-2 border border-green text-base leading-6 font-medium 
                        rounded-md text-green indigo">
                           Request New Tool
                        </a>
                   </div>
                </div>
            </div>
        </div>
        <get-started/>
    </div>
</template>

<script>
    import integrationItem from '~/components/integrations/integrationItem'
    import GetStarted from '~/components/GetStarted'

    export default {
        components: {
            integrationItem,
            GetStarted
        },
        head() {
            return {
                title: 'Integrations'
            }
        },
        data() {
            return {
                active: 'all',
                integrationItemsBase: [
                    {
                        name: 'woocommerce',
                        title: 'WooCommerce',
                        content: 'Concect your support email adresses and respond to your customers.',
                        label: 'date',
                        date: '03.03.2020',
                        underline_text: 'WooCommerce 1.0.1',
                        underline_link_text: 'Check out the Docs'
                    },
                    {
                        name: 'opencart',
                        title: 'OpenCart',
                        content: 'Concect your support email adresses and respond to your customers.',
                        label: 'new',
                        date: null,
                        underline_text: "Be the first to know when it's ready",
                        underline_link_text: null
                    },
                    {
                        name: 'magenta',
                        title: 'Magento 1',
                        content: 'Concect your support email adresses and respond to your customers.',
                        label: 'soon',
                        date: null,
                        underline_text: "Be the first to know when it's ready",
                        underline_link_text: null
                    },
                    {
                        name: 'magenta',
                        title: 'Magento 2',
                        content: 'Concect your support email adresses and respond to your customers.',
                        label: 'soon',
                        date: null,
                        underline_text: "Be the first to know when it's ready",
                        underline_link_text: null
                    },
                    {
                        name: 'prestashop',
                        title: 'Prestashop',
                        content: 'Concect your support email adresses and respond to your customers.',
                        label: 'soon',
                        date: null,
                        underline_text: "Be the first to know when it's ready",
                        underline_link_text: null
                    }
                ],
                integrationItems: []
            }
        },
        methods: {
            chooseItems(action){
                this.active = action
                if(action == 'all'){
                    this.integrationItems = JSON.parse(JSON.stringify(this.integrationItemsBase))
                }else if(action == 'complete'){
                    this.integrationItems = this.integrationItemsBase.filter(item => item.label == 'new')
                }
                else if(action == 'upcoming'){
                    this.integrationItems = this.integrationItemsBase.filter(item => item.label == 'soon')
                }
            }
        },
        mounted(){
            this.integrationItems = JSON.parse(JSON.stringify(this.integrationItemsBase))
        }
    }
</script>

<style lang="scss" scoped>
    .list_link{
        position: relative;
        padding-bottom: 2px;
        border-bottom: 2px solid transparent;
        &.active{
            color: #a4d037;
            border-color: #a4d037;
        }
    }
    .integration_items_circle{
        background-image: url(~assets/images/integrations/integrations_bg.png);
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 60%;
        @media (max-width: 1024px) {
            background-image: none;
        }
    }
    .design-bg {
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(~assets/images/home/home_top_bg.png);
        padding: 12vw 4vw 5vw 4vw;
        @media (max-width: 767px) {
            background-image: none;
            background-color: #15212a;
            padding-bottom: 50px;
        }
    }

    .custom_grey {
        color: #babccf;
    }

    .brand_block {
        height: 152px;

        &_small {
            height: 152px;
        }
    }

    .brand_block_small {
        width: 152px;
    }

    .blue-bg {
        background-color: #15212a;
    }
</style>
