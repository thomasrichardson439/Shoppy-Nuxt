<template>
    <div>
        <div class="container mx-auto rectangle relative mt-8">
            <div class="grid grid-cols-3">
                <div class="col-span-2 col-start-2 text-center">
                    <h2
                        class="title mt-5 font-bold text-white"
                        style="fontSize: 42px;"
                    >
                        Simple, transparent pricing
                    </h2>
                    <p class="text-lg mb-12 text-white">
                        Always know what you'll pay.
                    </p>
                    <div class="grid grid-cols-2 gap-8">
                        <div
                            class="flex flex-col items-center rounded-lg bg-white py-8 px-20"
                        >
                            <p class="text-lg text-black">Free</p>
                            <p class="flex">
                                <sup
                                    class="text-gray-400 text-2xl self-center font-bold"
                                    >$</sup
                                >
                                <span
                                    class="price text-black"
                                    style="fontSize: 58px;"
                                    >0</span
                                >
                            </p>
                            <div class="text-base text-gray-500 font-regular">
                                <p>per month, billed annually</p>
                                <p>$36 billed monthly</p>
                            </div>
                            <hr class="w-1/3 h-0.75 my-6" />
                            <ul class="list-none">
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        <span class="font-medium text-sm"
                                            >100k</span
                                        >
                                        views/month
                                    </p>
                                </li>
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        <span class="font-medium text-sm"
                                            >2</span
                                        >
                                        staff users
                                    </p>
                                </li>
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        <span class="font-medium text-sm"
                                            >1,000</span
                                        >
                                        members
                                    </p>
                                </li>
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        SSL+CDN included
                                    </p>
                                </li>
                            </ul>
                            <p class="text-gray-500 text-sm mt-5 font-regular">
                                For professional bloggers who are just getting
                                started
                            </p>
                        </div>

                        <div
                            class="flex flex-col items-center rounded-lg bg-white py-8 px-20"
                        >
                            <p class="text-lg text-black">Enterprise</p>
                            <p class="flex">
                                <sup
                                    class="text-gray-400 text-2xl self-center font-bold"
                                    >$</sup
                                >
                                <span
                                    class="price text-black"
                                    style="fontSize: 58px;"
                                    >79</span
                                >
                            </p>
                            <div class="text-base text-gray-500 font-regular">
                                <p>per month, billed annually</p>
                                <p>$99 billed monthly</p>
                            </div>
                            <hr class="w-1/3 h-0.75 my-6" />
                            <ul class="list-none">
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        <span class="font-medium text-sm"
                                            >500k</span
                                        >
                                        views/month
                                    </p>
                                </li>
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        <span class="font-medium text-sm"
                                            >5</span
                                        >
                                        staff users
                                    </p>
                                </li>
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        <span class="font-medium text-sm"
                                            >5,000</span
                                        >
                                        members
                                    </p>
                                </li>
                                <li class="flex content-center mb-3">
                                    <img
                                        class="w-5 h-5 mr-3"
                                        src="~/assets/images/pricing/green-check.svg"
                                    />
                                    <p class="text-gray-500 text-sm">
                                        Priority support
                                    </p>
                                </li>
                            </ul>
                            <p class="text-gray-500 text-sm mt-5 font-regular">
                                Everything you need to manage a growing
                                publication
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 col-start-2 my-10">
                    <p class="text-purple text-center text-sm font-bold">
                        PRODUCT USAGE
                    </p>
                </div>

                <div class="divide-y divide-gray-300 mr-8 text-sm py-3">
                    <p class="py-3 font-bold flex align-center">
                        Views per month
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Staff users
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Members (beta)
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Custom domain support
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Own your data
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        SSO / OAuth 2.0
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                </div>

                <div class="col-span-2 col-start-2 text-center">
                    <div class="grid grid-cols-2 gap-8">
                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 justify-center text-sm">100k</p>
                            <p class="py-3 justify-center text-sm">2</p>
                            <p class="py-3 justify-center text-sm">1,000</p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 justify-center text-sm"></p>
                        </div>

                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 justify-center text-sm">1M</p>
                            <p class="py-3 justify-center text-sm">15</p>
                            <p class="py-3 justify-center text-sm">1M</p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 justify-center text-sm">beta</p>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 col-start-2 my-10">
                    <p class="text-ligth_blue text-center text-sm font-bold">
                        AUTOMATION
                    </p>
                </div>

                <div class="divide-y divide-gray-300 mr-8 text-sm py-3">
                    <p class="py-3 font-bold flex align-center">
                        Managed install & setup
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Automatic weekly updates
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Server maintenance & backups
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Threat & uptime management
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                </div>

                <div class="col-span-2 col-start-2 text-center">
                    <div class="grid grid-cols-2 gap-8">
                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                        </div>

                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 col-start-2 my-10">
                    <p class="text-green text-center text-sm font-bold">
                        PLATFORM
                    </p>
                </div>

                <div class="divide-y divide-gray-300 mr-8 text-sm py-3">
                    <p class="py-3 font-bold flex align-center">
                        Worldwide CDN
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Enterprise-grade security
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Automatic SSL certificate
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Use a custom SSL certificate
                    </p>
                    <p class="py-3 font-bold flex align-center">
                        Managed subdirectory install
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                </div>

                <div class="col-span-2 col-start-2 text-center">
                    <div class="grid grid-cols-2 gap-8">
                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center text-white">.</p>
                            <p class="py-3 flex justify-center"></p>
                        </div>

                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-5 h-5"
                                    src="~/assets/images/pricing/green-check.svg"
                                />
                            </p>
                            <p class="py-3 flex justify-center">+50$/mo</p>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 col-start-2 my-10">
                    <p class="text-purple text-center text-sm font-bold">
                        SUPPORT
                    </p>
                </div>

                <div class="divide-y divide-gray-300 mr-8 text-sm py-3">
                    <p class="py-3 font-bold flex align-center">Product</p>
                    <p class="py-3 font-bold flex align-center">
                        Migration help
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                    <p class="py-3 font-bold flex align-center">Uptime SLA</p>
                </div>

                <div class="col-span-2 col-start-2 text-center">
                    <div class="grid grid-cols-2 gap-8">
                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 justify-center text-sm">
                                Email support
                            </p>
                            <p class="py-3 justify-center text-sm text-white">
                                .
                            </p>
                            <p class="py-3 justify-center text-sm"></p>
                        </div>

                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 justify-center text-sm">
                                24/7 Priority Support
                            </p>
                            <p class="py-3 justify-center text-sm">
                                From other platforms
                            </p>
                            <p class="py-3 justify-center text-sm">
                                99.9% uptime SLA
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 col-start-2 my-10">
                    <p class="text-ligth_blue text-center text-sm font-bold">
                        OTHER BENEFITS
                    </p>
                </div>

                <div class="divide-y divide-gray-300 mr-8 text-sm py-3">
                    <p class="py-3 font-bold flex align-center">
                        Contribution to funding non-profit open source software
                        <span
                            class="border-2 border-gray-300 text-gray-300 rounded-full ml-2 p-1 h-5 w-5 flex items-center justify-center"
                            >?</span
                        >
                    </p>
                </div>

                <div class="col-span-2 col-start-2 text-center">
                    <div class="grid grid-cols-2 gap-8">
                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-6 h-6 mx-2"
                                    src="~/assets/images/pricing/heart.svg"
                                />
                            </p>
                        </div>

                        <div
                            class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center"
                        >
                            <p class="py-3 flex justify-center">
                                <img
                                    class="w-6 h-6 mx-2"
                                    src="~/assets/images/pricing/heart.svg"
                                />
                                <img
                                    class="w-6 h-6 mx-2"
                                    src="~/assets/images/pricing/heart.svg"
                                />
                                <img
                                    class="w-6 h-6 mx-2"
                                    src="~/assets/images/pricing/heart.svg"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center my-32">
                <p class="font-semibold text-4xl text-black">
                    Set up your site, pick a plan later
                </p>
                <p class="text-lg my-8">
                    Try Ghost free for 14 days on our fully managed Ghost(Pro)
                    infrastructure
                </p>
                <p>
                    <a
                        href="#"
                        class="font-semibold my-4 inline-block py-3 px-8 text-white bg-green hover:bg-green rounded-lg shadow"
                        >Create Account</a
                    >
                </p>
            </div>
        </div>

        <div class="bg-white rectangle rectangle_blue relative py-32">
            <div class="lg:w-2/3 mx-auto">
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
        <get-started />
    </div>
</template>
<script>
import AccordionItem from '~/components/AccordionItem.vue'
import GetStarted from '~/components/GetStarted'
export default {
    layout: 'pricing',
    components: {
        AccordionItem,
        GetStarted
    },
    data() {
        return {
            active: false,
            questions: [
                {
                    question:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, accusantium?',
                    answer:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente, ut deserunt fugiat non voluptate et commodi corrupti deleniti voluptatibus voluptatum consequuntur vero pariatur quos dolor aliquam iusto aperiam est!'
                },
                {
                    question:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus necessitatibus, nostrum itaque voluptatibus vero!',
                    answer:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero voluptas cum et commodi totam, eveniet, sit deserunt, repellat reprehenderit fuga rem quos aut dolorum corporis excepturi repellendus aspernatur consequuntur.'
                },
                {
                    question:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing.',
                    answer:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis omnis distinctio asperiores voluptatem inventore blanditiis maiores ullam mollitia quas at vitae, qui perspiciatis rerum debitis repudiandae quod pariatur est voluptas velit aperiam molestiae. Est, illo deleniti. Sit, iure repellendus?'
                },
                {
                    question:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, accusantium?',
                    answer:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente, ut deserunt fugiat non voluptate et commodi corrupti deleniti voluptatibus voluptatum consequuntur vero pariatur quos dolor aliquam iusto aperiam est!'
                },
                {
                    question:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus necessitatibus, nostrum itaque voluptatibus vero!',
                    answer:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero voluptas cum et commodi totam, eveniet, sit deserunt, repellat reprehenderit fuga rem quos aut dolorum corporis excepturi repellendus aspernatur consequuntur.'
                },
                {
                    question:
                        'Lorem ipsum, dolor sit amet consectetur adipisicing.',
                    answer:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis omnis distinctio asperiores voluptatem inventore blanditiis maiores ullam mollitia quas at vitae, qui perspiciatis rerum debitis repudiandae quod pariatur est voluptas velit aperiam molestiae. Est, illo deleniti. Sit, iure repellendus?'
                }
            ]
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
}
</script>
