<template>
    <div>
        <div class="shoppy-nav" :class="{ 'no-hero': !hasHero}">
            <div class="container mx-auto pt-4 pb-4">
                <div class="md:flex md:items-center">
                    <div class="flex justify-between items-center">
                        <a href="/" class="inline-block text-white text-xl font-bold">
                            <img
                                :src="require(`~/assets/images/${hasHero ? 'logo' : 'logo-gray'}.svg`)"
                                width="110"
                                alt="Shoppy"
                            />
                        </a>
                        <div class="inline-block cursor-pointer md:hidden">
                            <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                            <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                            <div class="bg-gray-400 w-8" style="height: 2px;"></div>
                        </div>
                    </div>

                    <div>
                        <div class="hidden md:block ml-10">
                            <div class="relative flex justify-between items-center">
                                <client-only>
                                    <dropdown-menu v-model="dropdowns.product">
                                        <button
                                            type="button"
                                            class="group text-white inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none mr-6"
                                        >
                                            <span>Product</span>
                                            <svg class="text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                            slot="dropdown"
                                        >
                                            <div class="rounded-lg shadow-lg">
                                                <div class="rounded-lg shadow-xs overflow-hidden">
                                                    <div
                                                        class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <router-link to="/ecommerce">
                                                            <a
                                                                class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-lime"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                                    />
                                                                </svg>
                                                                <div class="space-y-1">
                                                                    <p
                                                                        class="text-base leading-6 font-medium text-gray-900"
                                                                    >E-commerce</p>
                                                                    <p class="text-sm leading-5 text-gray-500">
                                                                        Create your own store and start selling digital
                                                                        goods instantly, with ease
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </router-link>
                                                        <router-link to="/payments">
                                                            <a
                                                                class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-lime"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                                    />
                                                                </svg>
                                                                <div class="space-y-1">
                                                                    <p class="text-base leading-6 font-medium text-gray-900">
                                                                        Payments</p>
                                                                    <p class="text-sm leading-5 text-gray-500">
                                                                        Accept a vast majority of cryptocurrency payment
                                                                        methods
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </router-link>
                                                    </div>
                                                    <div
                                                        class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                                                    >
                                                        <div class="flow-root">
                                                            <a
                                                                href="#"
                                                                class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                    fill="none"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                                    />
                                                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                                </svg>
                                                                <span>Watch Demo</span>
                                                            </a>
                                                        </div>
                                                        <div class="flow-root">
                                                            <a
                                                                href="#"
                                                                class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    />
                                                                </svg>
                                                                <span>Contact Sales</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </dropdown-menu>
                                </client-only>
                                <client-only>
                                    <dropdown-menu v-model="dropdowns.developers">
                                        <button
                                            type="button"
                                            class="group text-white inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none mr-6"
                                        >
                                            <span>Developers</span>
                                            <svg class="text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                            slot="dropdown"
                                        >
                                            <div class="rounded-lg shadow-lg">
                                                <div class="rounded-lg shadow-xs overflow-hidden">
                                                    <div
                                                        class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <a
                                                            href="https://shoppy.dev"
                                                            target="_blank"
                                                            class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50"
                                                        >
                                                            <svg
                                                                class="flex-shrink-0 h-6 w-6 text-lime"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                                                                />
                                                            </svg>
                                                            <div class="space-y-1">
                                                                <p
                                                                    class="text-base leading-6 font-medium text-gray-900"
                                                                >Integrations</p>
                                                                <p
                                                                    class="text-sm leading-5 text-gray-500"
                                                                >Start integrating Shoppy's products and tools</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                                                    >
                                                        <div class="flow-root">
                                                            <a
                                                                href="https://shoppy.dev"
                                                                target="_blank"
                                                                class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                    fill="none"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                                <span>Full API Reference</span>
                                                            </a>
                                                        </div>
                                                        <div class="flow-root">
                                                            <a
                                                                href="https://status.shoppy.gg"
                                                                target="_blank"
                                                                class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                                    />
                                                                </svg>
                                                                <span>API Status</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </dropdown-menu>
                                </client-only>
                                <client-only>
                                    <dropdown-menu v-model="dropdowns.resources">
                                        <button
                                            type="button"
                                            class="group text-white inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none"
                                        >
                                            <span>Resources</span>
                                            <svg class="text-white h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                            slot="dropdown"
                                        >
                                            <div class="rounded-lg shadow-lg">
                                                <div class="rounded-lg shadow-xs overflow-hidden">
                                                    <div
                                                        class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <router-link to="/about">
                                                            <a
                                                                class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-lime"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                                    />
                                                                </svg>
                                                                <div class="space-y-1">
                                                                    <p class="text-base leading-6 font-medium text-gray-900">
                                                                        About Us</p>
                                                                    <p class="text-sm leading-5 text-gray-500">
                                                                        Create your own store annd start selling digital
                                                                        goods instantly, with ease
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </router-link>

                                                        <router-link to="/answers">
                                                            <a
                                                                class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-lime"
                                                                    fill="none"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                                    />
                                                                </svg>
                                                                <div class="space-y-1">
                                                                    <p
                                                                        class="text-base leading-6 font-medium text-gray-900"
                                                                    >Help Center</p>
                                                                    <p
                                                                        class="text-sm leading-5 text-gray-500"
                                                                    >Frequently asked questions</p>
                                                                </div>
                                                            </a>
                                                        </router-link>

                                                        <router-link to="/changelog">
                                                            <a
                                                                class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50"
                                                            >
                                                                <svg
                                                                    class="flex-shrink-0 h-6 w-6 text-lime"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                                <div class="space-y-1">
                                                                    <p class="text-base leading-6 font-medium text-gray-900">
                                                                        Product Updates
                                                                        <span
                                                                            class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"
                                                                        >New</span>
                                                                    </p>
                                                                    <p
                                                                        class="text-sm leading-5 text-gray-500"
                                                                    >See our changelog and roadmap</p>
                                                                </div>
                                                            </a>
                                                        </router-link>
                                                    </div>
                                                    <div class="px-5 py-5 bg-gray-50 space-y-5 sm:px-8 sm:py-8">
                                                        <div class="space-y-4">
                                                            <h3
                                                                class="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase"
                                                            >Recent Posts</h3>
                                                            <ul class="space-y-4">
                                                                <li
                                                                    class="text-base leading-6 truncate"
                                                                    v-for="post in recentPosts"
                                                                    :key="post.route"
                                                                >
                                                                    <router-link :to="'/news/post/' + post.route">
                                                                        <a
                                                                            class="font-medium text-gray-900 hover:text-gray-700"
                                                                        >{{ post.title }}</a>
                                                                    </router-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="text-sm leading-5">
                                                            <styled-link to="/answers">View all posts</styled-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </dropdown-menu>
                                </client-only>

                                <client-only>
                                    <nuxt-link to="/pricing">
                                        <button
                                            type="button"
                                            class="group text-white inline-flex items-center ml-4 space-x-2 text-base leading-6 font-medium focus:outline-none"
                                        >
                                            <span>Pricing</span>
                                        </button>
                                    </nuxt-link>
                                </client-only>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block ml-auto">
                        <div class="flex items-center space-x-8">
                            <router-link to="/auth/login">
                                <a
                                    class="border-solid border-2 border-white inline-flex items-center justify-center px-7 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                                >Sign in</a>
                            </router-link>
                            <span class="inline-flex rounded-md shadow-sm">
                                <router-link to="/auth/signup">
                                  <styled-button
                                      class="px-7 py-2 border border-transparent text-base">Sign up</styled-button>
                                </router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nuxt/>

        <div>
            <div class="backgrounds_home-bottom bg-white">
                <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div class="xl:col-span-1">
                            <img class="h-10" src="~assets/images/logo.svg" alt="Shoppy"/>
                            <p class="mt-8 text-gray-500 text-base leading-6">
                                Accept payments, sell digital products from your own and more, do it all with a single
                                platform.
                            </p>
                            <div class="mt-8 flex">
                                <a href="https://facebook.com/shoppygg" target="_blank"
                                   class="text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">Facebook</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/shoppyecommerce" target="_blank"
                                   class="ml-6 text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">Twitter</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                </a>
                                <a href="https://github.com/shoppygg" target="_blank"
                                   class="ml-6 text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">GitHub</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h4
                                        class="text-sm leading-5 font-semibold tracking-wider text-white uppercase"
                                    >Solutions</h4>
                                    <ul class="mt-4">
                                        <li>
                                            <nuxt-link
                                                to="/ecommerce"
                                                class="text-base leading-6 text-gray-400 hover:text-gray-500"
                                            >Ecommerce
                                            </nuxt-link>
                                        </li>
                                        <li class="mt-4">
                                            <nuxt-link
                                                to="/payments"
                                                class="text-base leading-6 text-gray-400 hover:text-gray-500"
                                            >Payments
                                            </nuxt-link>
                                        </li>
                                        <li class="mt-4">
                                            <a
                                                href="#"
                                                class="text-base leading-6 text-gray-400 hover:text-gray-500"
                                            >Insights</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-12 md:mt-0">
                                    <h4
                                        class="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                                        Support</h4>
                                    <ul class="mt-4">
                                        <li>
                                            <nuxt-link
                                                to="/pricing"
                                                class="text-base leading-6 text-gray-400 hover:text-gray-500"
                                            >Pricing
                                            </nuxt-link>
                                        </li>
                                        <li class="mt-4">
                                            <a
                                                href="https://shoppy.dev" target="_blank"
                                                class="text-base leading-6 text-gray-400 hover:text-gray-500"
                                            >Documentation</a>
                                        </li>
                                        <li class="mt-4">
                                            <a href="#" class="text-base leading-6 text-gray-400 hover:text-gray-500">Guides</a>
                                        </li>
                                        <li class="mt-4">
                                            <a
                                                href="https://status.shoppy.gg" target="_blank"
                                                class="text-base leading-6 text-gray-400 hover:text-gray-500"
                                            >API Status
                                                <span
                                                    class="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                                                ^ 99%
                                            </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div class="mt-12 md:mt-0">
                                    <h4
                                        class="text-sm leading-5 font-semibold tracking-wider text-white uppercase"
                                    >Resources</h4>
                                    <ul class="mt-4">
                                        <li>
                                            <a href="#" class="text-base leading-6 text-gray-400 hover:text-gray-500">Shoppy tutorials</a>
                                        </li>
                                        <li class="mt-4">
                                            <nuxt-link
                                                to="/design"
                                                class="text-base leading-6 text-gray-400 hover:text-gray-500"
                                            >Brand assets
                                            </nuxt-link>
                                        </li>
                                        <li class="mt-4">
                                            <nuxt-link to="/integrations"
                                                       class="text-base leading-6 text-gray-400 hover:text-gray-500">
                                                Integrations
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4
                                        class="text-sm leading-5 font-semibold tracking-wider text-white uppercase"
                                    >Company</h4>
                                    <ul class="mt-4">
                                        <li>
                                            <nuxt-link to="/about" class="text-base leading-6 text-gray-400 hover:text-gray-500">About</nuxt-link>
                                        </li>
                                        <li class="mt-4">
                                            <a href="#" class="text-base leading-6 text-gray-400 hover:text-gray-500">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-darkbluely">
                <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col items-center justify-between md:flex-row py-4">
                        <div>
                            <span class="text-white">Shoppy made for professional sellers</span>
                        </div>
                        <div class="flex mt-4 md:m-0">
                            <div class="-mx-4">
                                <nuxt-link to="/legal/terms" class="px-2 text-sm">Terms</nuxt-link>
                                <nuxt-link to="/legal/privacy" class="px-2 text-sm">Privacy</nuxt-link>
                                <nuxt-link to="/legal/cookies" class="px-2 text-sm">Cookies</nuxt-link>
                                <span class="px-2 text-sm">Shoppy Ecommerce Ltd. &copy; 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                hasHero: false,
                dropdowns: {
                    product: false,
                    developers: false,
                    resources: false
                }
            }
        },
        methods: {
            routeHasHero() {
                return [
                    '/',
                    '/about',
                    '/ecommerce',
                    '/payments',
                    '/pricing',
                    '/legal/privacy',
                    '/legal/cookies',
                    '/legal/terms',
                    '/design',
                    '/design/'
                ].includes(this.$route.path)
            }
        },

        computed: {
            ...mapGetters('content', ['posts']),
            recentPosts() {
                return [...(this.posts || [])].sort((a, b) => a - b).slice(0, 3)
            }
        },

        mounted() {
            this.hasHero = this.routeHasHero()

            this.$router.afterEach(() => {
                for (let key in this.dropdowns) {
                    this.dropdowns[key] = false
                }
                this.hasHero = this.routeHasHero()
            })

            let keys = Object.keys(this.dropdowns)
            for (let key of keys) {
                this.$watch('dropdowns.' + key, () => {
                    if (this.dropdowns[key]) {
                        for (let k of keys.filter((k) => k !== key)) {
                            this.dropdowns[k] = false
                        }
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
