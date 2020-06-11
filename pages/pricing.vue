<template>
  <div class="wrapper">
    <div class="absolute w-full h-screen md:h-full">
      <img class="w-full object-cover h-screen md:h-full" src="~/assets/images/pricing/pricing-bg-c.png" />
    </div>

    <div class="container mx-auto rectangle relative -mt-20 w-4/5 pt-20">
      <div class="flex flex-wrap md:justify-end">
        <div class="flex flex-wrap text-center md:w-3/4 w-full justify-between">
          <h2 class="title mt-5 font-bold text-white md:text-5xl text-xl w-full">
            Simple, transparent pricing
            </h2>
          <p class="md:text-lg text-base mb-12 text-white w-full text-center">
            Always know what you'll pay.
          </p>
          <div 
            v-for="(item, index) in pricingItems"
            :key="index"
            class="md:w-1/2 md:mb-0 mb-5 w-full"
          >
            <PricingItem
              :item="item"
            />
          </div>
        </div>
        <template v-for="(item, index) in productUsage">
          <DescribeItem 
            :key="index"
            :item="item"
          />
        </template>

        <div class="flex flex-wrap w-full justify-between">
          <div class="w-full">
            <div class="col-span-6 col-start-3 my-10">
              <p class="text-ligth_blue text-center text-sm font-bold">OTHER BENEFITS</p>
            </div>
          </div>

          <div class="divide-y divide-gray-300 text-sm w-full md:w-1/5 py-3">
            <p class="py-3 font-bold flex items-center">
              <span>
                Contribution to funding non-profit open source software
              </span>
              <span
                class="leading-none border-2 border-gray-300 text-gray-300 rounded-full ml-2 h-5 w-9 flex items-center justify-center"
              >?</span>
            </p>
          </div>

          <div class="flex items-center justify-center rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center w-full md:w-1/3 mb-4 md:mb-0">
            <p class="py-3 flex justify-center">
              <img class="w-6 h-6 mx-2" src="~/assets/images/pricing/heart.svg" />
            </p>
          </div>

          <div class="flex items-center justify-center rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center w-full md:w-1/3 mb-4 md:mb-0">
            <p class="py-3 flex justify-center">
              <img class="w-6 h-6 mx-2" src="~/assets/images/pricing/heart.svg" />
              <img class="w-6 h-6 mx-2" src="~/assets/images/pricing/heart.svg" />
              <img class="w-6 h-6 mx-2" src="~/assets/images/pricing/heart.svg" />
            </p>
          </div>
        </div>
      </div>

      <div class="text-center my-32">
        <p class="font-semibold text-4xl text-black">Set up your site, pick a plan later</p>
        <p class="text-lg my-8">
          Try Ghost free for 14 days on our fully managed Ghost(Pro)
          infrastructure
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
        <p class="font-semibold text-black text-4xl text-center">Frequently asked questions</p>
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
        ],
        pricingItems: [
          {
            name: 'Free',
            price: 0,
            text1: 'per month, billed annually',
            text2: '$36 billed monthly',
            possibilities: [
              {
                count: '100k',
                text: 'views/month'
              },
              {
                count: '2',
                text: 'staff users'
              },
              {
                count: '1,000',
                text: 'members'
              },
              {
                text: 'SSL+CDN included'
              }
            ],
            bottomText: 'For professional bloggers who are just getting started'
          },
          {
            name: 'Enterprise',
            price: 79,
            text1: 'per month, billed annually',
            text2: '$99 billed monthly',
            possibilities: [
              {
                count: '500k',
                text: 'views/month'
              },
              {
                count: '5',
                text: 'staff users'
              },
              {
                count: '5,000',
                text: 'members'
              },
              {
                text: 'Priority support'
              }
            ],
            bottomText: 'Everything you need to manage a growing publication'
          }
        ],
        productUsage: [
          {
            head: "PRODUCT USAGE",
            headColor: 'purple',
            items: [
              {
                title: 'Views per month',
                question: '?',
                free: {
                  count: '100k'
                },
                enterprise: {
                  count: '1M'
                }
              },
              {
                title: 'Staff users',
                question: '?',
                free: {
                  count: '2'
                },
                enterprise: {
                  count: '15'
                }
              },
              {
                title: 'Members (beta)',
                question: '?',
                free: {
                  count: '1,000'
                },
                enterprise: {
                  count: '1M'
                }
              },
              {
                title: 'Custom domain support',
                question: '?',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Own your data',
                question: '?',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Own your data',
                question: '?',
                free: {
                  count: ''
                },
                enterprise: {
                  count: 'beta'
                }
              }
            ]
          },
          {
            head: "AUTOMATION",
            headColor: 'ligth_blue',
            items: [
              {
                title: 'Managed install & setup',
                question: '',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Automatic weekly updates',
                question: '',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Server maintenance & backups',
                question: '',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Threat & uptime management',
                question: '?',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
            ]
          },
          {
            head: "PLATFORM",
            headColor: 'green',
            items: [
              {
                title: 'Worldwide CDN',
                question: '',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Enterprise-grade security',
                question: '?',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Automatic SSL certificate',
                question: '',
                free: {
                  check: true
                },
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Use a custom SSL certificate',
                question: '',
                free: {},
                enterprise: {
                  check: true
                }
              },
              {
                title: 'Managed subdirectory install',
                question: '?',
                free: {},
                enterprise: {
                  count: '+$50/mo'
                }
              },
            ]
          },
          {
            head: "SUPPORT",
            headColor: 'purple',
            items: [
              {
                title: 'Product',
                question: '',
                free: {
                  count: 'Email Support'
                },
                enterprise: {
                  count: '24/7 Priority Support'
                }
              },
              {
                title: 'Migration help',
                question: '?',
                free: {
                },
                enterprise: {
                  count: 'From other platforms'
                }
              },
              {
                title: 'Uptime SLA',
                question: '',
                free: {
                },
                enterprise: {
                  count: '99.9% uptime SLA'
                }
              }
            ]
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
<style scoped>
.wrapper {
    font-family: 'Gellix';
}
</style>
