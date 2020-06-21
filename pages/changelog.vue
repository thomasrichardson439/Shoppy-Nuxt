<template>
    <div>
        <div class="md:overflow-hidden design-bg mb-20">
        <!-- <div class="shoppy-hero bg-bluely text-white header"> -->
            <h1 class="text-center font-bold text-white mt-10 md:mt-0 text-3xl md:text-5xl sm:pt-10 md:pt-10 lg:pt-4 xl:pt-0">
                Changelog
            </h1>
            <h2 class="text-center text-white text-base md:text-xl">
                Product updates from the team at Stitch.
            </h2>
            <div class="relative mt-5 md:w-2/6 w-full mx-auto">
                <input class="bg-purple-white shadow rounded border-0 p-3 w-full" placeholder="Subscribe for updates by email...">
                <div class="absolute pin-r pin-t mt-1 mr-1 text-purple-lighter top-0 right-0">
                    <img class="h-10" src="~/assets/images/changelog/subscribe-icon.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="container mx-auto px-5 md:px-0">
            <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div class="flex mb-4">
                    <div class="lg:w-1/3 sm:w-full">
                        <h4
                            class="text-2xl leading-8 font-semibold text-gray-900 tracking-tight sm:text-2xl sm:leading-9 filter-title"
                        >
                            Filter
                        </h4>
                        <ul>
                            <li
                                :class="{'menu-item': true, 'active': current === filter.code}"
                                v-for="filter in filters" :key="filter"
                                @click="current=filter.code"
                            >
                                {{filter.title}}
                            </li>
                        </ul>
                    </div>
                    <div class="lg:w-2/3 sm:w-full right-column">
                        <div class="line-bg"></div>
                        <div v-for="record in filtered" :key="record" class="pb-4 pl-12 record">
                            <div class="indicator">
                                <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                                    <g id="Ellipse_2" data-name="Ellipse 2" fill="none" :stroke="typeColor(record.type)" stroke-width="2">
                                        <circle cx="9.5" cy="9.5" r="9.5" stroke="none"/>
                                        <circle cx="9.5" cy="9.5" r="8.5" fill="none"/>
                                    </g>
                                    <circle id="Ellipse_2_copy" data-name="Ellipse 2 copy" cx="4.5" cy="4.5" r="4.5" transform="translate(5 5)" :fill="typeColor(record.type)"/>
                                </svg>
                            </div>
                            <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                                <div class="bg-white px-3 py-3 lg:flex-shrink-1 lg:p-8">
                                    <h4
                                        class="text-2xl leading-8 font-semibold text-gray-900 tracking-tight sm:text-2xl sm:leading-9"
                                    >
                                        {{record.title}}
                                    </h4>
                                    <div class="py-3 flex">
                                        <filter-label :type="record.type" :filters="filters"></filter-label> <div class="ml-3 record-date">{{record.date}}</div>
                                    </div>
                                    <div class="record-description">{{record.description}}</div>
                                    <a href="#" class="record-more-link flex">See full details <img src="~/assets/images/changelog/arrow-icon.svg" alt="" class="ml-3" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-15 text-center">
                            <nuxt-link
                                to="#"
                                class="md:mb-0 inline-block py-2 px-8 text-green rounded-lg shadow border-solid border border-green font-bold"
                            >
                                 Load More
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <get-started/>
    </div>
</template>

<script>
    import GetStarted from '~/components/GetStarted'
    import FilterLabel from '~/components/changelog/FilterLabel'
    import Control from '~/components/Control.vue'

    export default {
        components: {
            GetStarted,
            FilterLabel,
            Control,
        },
        head() {
            return {
                title: 'Changelog and Roadmap'
            }
        },
        data: () => {
            return {
                current: null,
                filters: require('~/assets/content/changelog/filters.json'),
                records: require('~/assets/content/changelog/records.json'),
            }
        },
        computed: {
          filtered() {
            return this.records.filter(item => item.type === this.current || this.current === 'all' )
          }
        },
        created() {
            this.current = this.filters[0].code;
        },
        methods: {
            typeColor(code) {
                return this.filters.find(item => item.code === code)?.color
            }
        }
    }
</script>

<style lang="scss" scoped>
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

    .record, .right-column {
        position: relative;
    }

    .record-description {
        padding: 10px 0 20px;
        line-height: 1.7rem;
        font-size: 1rem
    }

    a.record-more-link, a:hover.record-more-link {
        color: #a4d037;
        font-size: 1rem;
        line-height: 1.6rem;
        font-weight: 600;
    }

    .indicator {
        position: absolute;
        left: 0;
        top: 40px;
        width: 19px;
        height: 19px;
    }

    .filter-title {
        margin-bottom: 35px;
    }

    .record-date {
        color: #b2b3bb;
        font-size: 1rem;
    }

    .menu-item {
        width: 200px;
        margin-top: 15px;
        font-size: 1rem;
        line-height: 36px;
        height: 36px;
        cursor: pointer;
    }

    .active {
        color: #a4d037;
        border-right: 4px solid #a4d037;
    }

    .line-bg {
        position: absolute;
        left: 0;
        top: 45px;
        bottom: 100px;
        height: calc(100% - 100px);
        width: 11px;
        background-image: url(~assets/images/changelog/line-bg.png);
        background-repeat: repeat-y;
        background-position: 0 40px;
    }
</style>
