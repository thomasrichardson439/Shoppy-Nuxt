<template>
    <div class="bg-white">
        <div class="md:overflow-hidden shoppy-hero backgrounds_home-top">
            <div class="px-4 py-20 md:py-4">
                <div class="container mx-auto shoppy-hero--inner">
                    <div class="md:flex md:flex-wrap">
                        <div class="md:w-1/2 text-center md:text-left md:pt-16">
                            <h1
                                class="font-bold text-white text-4xl md:text-3xl leading-tight mb-4"
                            >
                                Sell Digital Goods Online
                            </h1>

                            <p class="md:pr-30 text-lg text-white">
                                Shoppy is an all-in-one payment processing and
                                e-commerce solution. Accept payments, sell
                                digital products from your own and more, do it
                                all with a single platform.
                            </p>

                            <p>
                                <a
                                    href="#"
                                    class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-green hover:bg-green rounded-lg shadow"
                                    >Create Account</a
                                >
                            </p>
                            <a
                                href="#"
                                class="mt-6 mb-12 md:mb-0 md:mt-10 mr-5 inline-block py-3 px-8 text-white rounded-lg shadow border-solid border border-white"
                            >
                                <img
                                    src="~assets/images/home/applestore.png"
                                    alt
                                />
                            </a>
                            <a
                                href="#"
                                class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white rounded-lg shadow border-solid border border-white"
                            >
                                <img
                                    src="~assets/images/home/googleplay.png"
                                    alt
                                />
                            </a>
                        </div>
                        <div class="md:w-1/2">
                            <img
                                src="https://ghost.org/static/ghost-admin-home-header-0c20f780aac8e98af7a56076ae8228b8.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="md:overflow-hidden">
                <div class="px-4 py-20 md:py-4">
                    <div class="container mx-auto shoppy-hero--inner">
                        <div class="md:flex md:flex-wrap">
                            <div
                                class="text-center md:pt-16 md:pb-16 md:w-2/3 mx-auto"
                            >
                                <h2
                                    class="text-green uppercase font-bold text-sm mb-4"
                                >
                                    meet shoppy
                                </h2>
                                <h1
                                    class="font-bold text-4xl leading-tight mb-4"
                                >
                                    Easy to start, fast to grow
                                </h1>

                                <p class="md:pr-30 text-lg">
                                    Accept payments, sell digital products from
                                    your own and more, do it all with a single
                                    platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-ligth_blue_bg rectangle rectangle_white relative">
            <div class="container mx-auto">
                <div class="md:overflow-hidden">
                    <div class="px-4 py-20 md:py-4">
                        <ListRight :item="listRight1"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto rectangle rectangle_blue relative">
            <div class="md:overflow-hidden">
                <div class="px-4 py-20 md:py-4">
                    <div class="container mx-auto shoppy-hero--inner">
                        <div class="md:flex md:flex-wrap pb-16">
                            <div
                                class="text-center md:pt-16 md:pb-16 md:w-2/3 mx-auto"
                            >
                                <h2
                                    class="text-purple uppercase font-bold text-sm mb-4"
                                >
                                    title here
                                </h2>
                                <h1
                                    class="font-bold text-4xl leading-tight mb-4"
                                >
                                    Automated Delivery
                                </h1>

                                <p class="md:pr-30 text-lg">
                                    Whether it's a file, serial number, service
                                    or even dynamically generated via an API, we
                                    provide instant automated delivery of goods
                                    to the customer.
                                </p>
                            </div>
                            <div
                                class="md:w-1/2 text-center md:text-left md:pt-16 md:pl-80"
                            >
                                <ul class="list-none">
                                    <li class="flex content-center mb-3">
                                        <img
                                            src="~assets/images/home/purple_check.png"
                                            alt
                                            class="mr-3"
                                        />
                                        Feature or benefit 1
                                    </li>
                                    <li class="flex content-center mb-3">
                                        <img
                                            src="~assets/images/home/purple_check.png"
                                            alt
                                            class="mr-3"
                                        />
                                        Feature or benefit 1
                                    </li>
                                    <li class="flex content-center mb-3">
                                        <img
                                            src="~assets/images/home/purple_check.png"
                                            alt
                                            class="mr-3"
                                        />
                                        Feature or benefit 1
                                    </li>
                                    <li class="flex content-center mb-3">
                                        <img
                                            src="~assets/images/home/purple_check.png"
                                            alt
                                            class="mr-3"
                                        />
                                        Feature or benefit 1
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    class="mt-6 mb-12 md:mb-0 md:mt-10 mr-5 inline-block py-2 px-8 text-purple rounded-lg shadow border-solid border border-purple font-bold"
                                    >Learn more</a
                                >
                            </div>
                            <div class="md:w-1/2">
                                <img
                                    src="https://ghost.org/static/ghost-admin-home-header-0c20f780aac8e98af7a56076ae8228b8.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-ligth_blue_bg rectangle rectangle_white relative">
            <div class="container mx-auto">
                <div class="md:overflow-hidden">
                    <div class="px-4 py-20 md:py-4">
                      <ListRight :item="listRight2"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="landing_payments pb-16 relative">
            <div class="container mx-auto flex flex-wrap justify-center">
                <div class="landing_payments-icon-wrapper">
                    <img
                        src="~assets/images/home/bitcoin.png"
                        alt=""
                        class="w-10 h-10"
                    />
                </div>
                <div class="landing_payments-icon-wrapper">
                    <img
                        src="~assets/images/home/paypal.png"
                        alt=""
                        class="w-10 h-10"
                    />
                </div>
                <div class="landing_payments-icon-wrapper">
                    <img
                        src="~assets/images/home/litecoin.png"
                        alt=""
                        class="w-10 h-10"
                    />
                </div>
                <div class="landing_payments-icon-wrapper">
                    <img
                        src="~assets/images/home/stripe.png"
                        alt=""
                        class="w-16 h-8"
                    />
                </div>
                <div class="landing_payments-icon-wrapper">
                    <img
                        src="~assets/images/home/etherium.png"
                        alt=""
                        class="w-8 h-10"
                    />
                </div>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="md:overflow-hidden">
                <div class="px-4 py-20 md:py-4">
                    <div class="container mx-auto shoppy-hero--inner">
                        <div class="md:flex md:flex-wrap">
                            <div
                                class="text-center md:pt-16 md:pb-6 md:w-2/3 mx-auto"
                            >
                                <h2
                                    class="text-green uppercase font-bold text-sm mb-4"
                                >
                                    testimonials
                                </h2>
                                <h1
                                    class="font-bold text-4xl leading-tight mb-4"
                                >
                                    What our customers say
                                </h1>

                                <p class="md:pr-30 text-lg">
                                    In 2019 we ran a survey asking Ghost users
                                    to share their experiences about what's
                                    improved since switching to Ghost, this is
                                    what they said:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="md:flex md:flex-wrap pb-16 justify-center">
                <div class="md:w-2/5 text-center md:text-left md:pt-3 md:mr-4">
                    <div
                        class="max-w-sm w-full lg:max-w-full lg:flex mx-auto mb-4"
                    >
                        <div
                            class="shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                        >
                            <div class="mb-8">
                                <p
                                    class="text-sm text-gray-600 flex items-center"
                                >
                                    <img
                                        src="~assets/images/home/comma.png"
                                        alt
                                        class="mb-8"
                                    />
                                </p>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div class="flex items-center">
                                <img
                                    class="w-10 h-10 rounded-full mr-4"
                                    src="~assets/images/home/face.png"
                                    alt="Avatar of Jonathan Reinink"
                                />
                                <div class="text-sm">
                                    <p
                                        class="text-gray-900 leading-none font-bold"
                                    >
                                        Jonathan Reinink
                                    </p>
                                    <p class="text-gray-600">
                                        Founder of bla-bla company
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-2/5 text-center md:text-left md:pt-3 md:ml-4">
                    <div
                        class="max-w-sm w-full lg:max-w-full lg:flex mx-auto mb-4"
                    >
                        <div
                            class="shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                        >
                            <div class="mb-8">
                                <p
                                    class="text-sm text-gray-600 flex items-center"
                                >
                                    <img
                                        src="~assets/images/home/comma.png"
                                        alt
                                        class="mb-8"
                                    />
                                </p>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div class="flex items-center">
                                <img
                                    class="w-10 h-10 rounded-full mr-4"
                                    src="~assets/images/home/face.png"
                                    alt="Avatar of Jonathan Reinink"
                                />
                                <div class="text-sm">
                                    <p
                                        class="text-gray-900 leading-none font-bold"
                                    >
                                        Jonathan Reinink
                                    </p>
                                    <p class="text-gray-600">
                                        Founder of bla-bla company
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <get-started />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import GetStarted from '~/components/GetStarted.vue'
import ListRight from '~/components/home/ListRight.vue'

export default Vue.extend({
  components: {
    GetStarted,
    ListRight
  },
  data(){
    return {
      listRight1: {
        title: 'title here',
        titleColor: 'ligth_blue',
        head: 'All-In-One Platform',
        text: `Shoppy provides all aspects of an
          e-commerce solution that you will
          require. Establish your brand online
          with instant access to solutions
          including coupons, customer feedback,
          analytics and more. You finally have a
          gorgeous store of your own that reflects
          the personality of your business.`,
        image: 'https://ghost.org/static/ghost-admin-home-header-0c20f780aac8e98af7a56076ae8228b8.png',
        features: [
          'Feature or benefit 1',
          'Feature or benefit 1',
          'Feature or benefit 1',
          'Feature or benefit 1'
        ],
        btnText: 'Learn more'
      },
      listRight2: {
        title: 'title here',
        titleColor: 'green',
        head: 'Support your Customers',
        text: `Communicate and assist your customers in real time with our support integrations.`,
        image: 'https://ghost.org/static/ghost-admin-home-header-0c20f780aac8e98af7a56076ae8228b8.png',
        features: [
          'Feature or benefit 1',
          'Feature or benefit 1',
          'Feature or benefit 1',
          'Feature or benefit 1'
        ],
        btnText: 'Learn more'
      }
    }
  }
})
</script>
