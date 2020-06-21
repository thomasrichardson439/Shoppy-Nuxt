<template>
    <div>
        <div class="shoppy-hero bg-bluely text-white header">
            <div class="text-center font-medium text-5xl">
                Changelog
            </div>
            <div class="text-center text-gray-200 text-xl">
                Product updates from the team at Stitch.
            </div>
            <div class="text-center text-gray-200 text-xl mt-10">
                <control
                    class="mb-6 subscribe"
                    name="email"
                    type="text"
                    placeholder="Subscribe for updates by email..."
                    rules="required"
                    value=""
                >
                </control>
            </div>
        </div>
        <div class="py-16 wrapper overflow-hidden lg:py-24">
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
                                v-for="filter in filters"
                                @click="current=filter.code"
                            >
                                {{filter.title}}
                            </li>
                        </ul>
                    </div>
                    <div class="lg:w-2/3 sm:w-full right-column">
                        <div class="line-bg"></div>
                        <div v-for="record in filtered" class="pb-4 pl-12 record">
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
                                    <a href="#" class="record-more-link">See full details &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-15 text-center">
                            <nuxt-link
                                to="/"
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

<style>
    .header {
        padding-bottom: 80px;
        background-image: url('../assets/images/changelog/header-bg.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
    }
    .wrapper {
        background: #f7fafc;
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
    .subscribe {
        width: 450px;
        margin: auto;
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
        background-image: url('../assets/images/changelog/line-bg.png');
        background-repeat: repeat-y;
        background-position: 0 40px;
    }
</style>
