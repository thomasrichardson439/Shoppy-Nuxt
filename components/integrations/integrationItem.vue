<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg my-4">
        <div class="label_wrap text-right my-4 mx-3">
            <template v-if="item.label == 'new'">
                <span class="bg-green text-white py-1 px-2 rounded text-xs font-bold">
                    {{ item.label.toUpperCase() }}
                </span>
            </template>
            <template v-else-if="item.label == 'soon'">
                <span class="bg-orange text-white py-1 px-2 rounded text-xs font-bold">
                    {{ item.label.toUpperCase() }}
                </span>
            </template>
            <template v-else>
                <img src="~/assets/images/integrations/date_icon.png" alt="" class="inline mr-1">
                <span class="text-green text-sm font-bold">
                    {{ item.date }}
                </span>
            </template>
            
        </div>
        <img class="mx-auto" :src="require(`~/assets/images/integrations/${item.name}_big.png`)" alt="WooCommerce">
        <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-center mt-3">
                {{ item.title }}
            </h2>
            <p class="text-gray-700 text-base text-center mb-0">
                {{ item.content }}
            </p>
        </div>
        <div class="px-3">
            <hr />
        </div>                                

        <div class="flex items-center justify-center py-4 px-4">
            <template v-if="item.underline_link_text">
                <div class="mr-3 ml-3">
                    <img class="mx-auto" src="~/assets/images/integrations/arrow.png">
                </div>
                <div class="flex flex-wrap">
                    <p class="text-sm leading-none system_text">
                        {{ item.underline_text }}
                    </p>
                    <a href="#" class="text-sm leading-none underline_link font-bold">
                        {{ item.underline_link_text }}
                    </a>
                </div>
            </template>
            <template v-else>
                <div class="mr-3 ml-3">
                    <img class="mx-auto" src="~/assets/images/integrations/bell.png">
                </div>
                <div class="flex flex-wrap">
                    <p class="text-sm leading-none system_text">
                        {{ item.underline_text }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
       props: ['item'] 
    }
</script>

<style lang="scss" scoped>
    .label_wrap{
        .text-green{
            color: #37af59;
        }
        .bg-green{
            background-color: #37af59;
        }
        .bg-orange{
            background-color: #ffbc45;
        }
    }
    .system_text{
        margin-bottom: 2px;
    }
    .underline_link{
        color: #3eb0ef;
        text-decoration: underline;
    }
</style>