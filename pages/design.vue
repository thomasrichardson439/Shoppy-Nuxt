<template>
  <div>
    <div class="md:overflow-hidden design-bg mb-20">
      <h1 class="text-center font-bold text-white text-5xl mb-2 sm:pt-10 md:pt-10 lg:pt-4 xl:pt-0">
        Brand style guide
      </h1>
    </div>
    <div class="container mx-auto px-5 md:px-0">
      <div class="md:flex md:flex-wrap">
        <h2 class="text-4xl font-bold mb-6 w-full">
          Shoppy logo
        </h2>
        <p class="leading-normal mb-6 w-full">
            The Ghost brand is our pride and joy. We've gone to great lengths to make it as beautiful as possible, 
            so we care a great deal about keeping it that way! These guidelines provide all of our official assets 
            and styles, along with details of how to correctly use them.
        </p>

        <div class="w-full flex flex-wrap justify-center mb-6">
          <div class="md:w-7/12 text-center md:text-left py-36 border border-gray-300 rounded-lg relative flex items-center">
            <img src="~/assets/images/design/shopply_logo_big.png" alt="" class="mx-auto">
            <span class="custom_grey absolute left-3 bottom-2">SVG</span>
            <a 
              href="/design/shopply_logo_big.svg" 
              download
              class="flex items-center custom_grey absolute right-3 bottom-2">
              Download 
              <img src="~/assets/images/design/design_arrow.png" alt="" class="ml-2">
            </a>
          </div>
        </div>

        <div class="w-full flex flex-wrap justify-center">
          <div class="brand_block brand_block_small text-center md:text-left md:py-8 border border-gray-300 rounded-lg relative flex items-center m-4">
            <img src="~/assets/images/design/small_logo_colored.png" alt="" class="mx-auto">
            <span class="custom_grey absolute left-3 bottom-1 text-sm">SVG</span>
            <a 
              href="/design/small_logo_colored.svg" 
              download
              class="flex items-center custom_grey absolute right-3 bottom-2">
              <img src="~/assets/images/design/design_arrow.png" alt="" class="ml-2">
            </a>
          </div>
          <div class="brand_block brand_block_small text-center md:text-left md:py-8 border border-gray-300 rounded-lg relative flex items-center m-4 blue-bg">
            <img src="~/assets/images/design/small_logo_white.png" alt="" class="mx-auto">
            <span class="custom_grey absolute left-3 bottom-1 text-sm">SVG</span>
            <a 
              href="/design/small_logo_white.svg" 
              download
              class="flex items-center custom_grey absolute right-3 bottom-2">
              <img src="~/assets/images/design/design_arrow.png" alt="" class="ml-2">
            </a>
          </div>
          <div class="brand_block w-full md:w-3/12 text-center md:text-left md:py-8 border border-gray-300 rounded-lg relative flex items-center m-4 blue-bg">
            <img src="~/assets/images/design/small_logo_white.png" alt="" class="mx-auto">
            <span class="custom_grey absolute left-3 bottom-1 text-sm">SVG</span>
            <a 
              href="/design/small_logo_white.svg" 
              download
              class="flex items-center custom_grey absolute right-3 bottom-2">
              <img src="~/assets/images/design/design_arrow.png" alt="" class="ml-2">
            </a>
          </div>
        </div>

        <h2 class="text-4xl font-bold mb-6 w-full">
          Shoppy colors
        </h2>
        <p class="leading-normal mb-6 w-full">
          Light backgrounds and tinted greys, accented with Shoppy green.
        </p>
        
        <div class="w-full flex flex-wrap justify-center mb-6">
          <template v-for="(item, index) in colors">
            <color :key="index" :item="item"/>
          </template>
        </div>

        <h2 class="text-4xl font-bold mb-6 w-full">
          Secondary colors
        </h2>
        <p class="leading-normal mb-6 w-full">
          Our secondary palette is used for accents and highlights appropriate to context.
        </p>

        <div class="w-full flex flex-wrap justify-center mb-6">
          <template v-for="(item, index) in secondaryColors">
            <SecondaryColor :key="index" :item="item"/>
          </template>
        </div>

        <h2 class="text-4xl font-bold mb-6 w-full">
          Spacing guidelines
        </h2>
        <p class="leading-normal mb-6 w-full">
          When using the Ghost mark and glyph, leave plenty of space for our brand to breathe.
        </p>
        
        <div class="w-full flex flex-wrap justify-center">
          <div class="md:w-3/12 text-center md:text-left flex items-center m-4">
            <img src="~/assets/images/design/guideline_big.png" alt="" class="mx-auto">
          </div>
          <div class="small_brand_block text-center md:text-left flex items-center m-4">
            <img src="~/assets/images/design/guideline_small.png" alt="" class="mx-auto">
          </div>
          <div class="md:w-4/12 text-center md:text-left flex items-center m-4">
            These diagrams give a general indication of how much spacing is
            needed to ensure that the logo and glyph aren't bumping up against other elements.
          </div>
        </div>

        <div class="w-full flex flex-wrap rounded-lg border border-blue-300 bg-blue-100 mt-15 mb-20">
          <div class="md:w-1/12 w-full text-center md:text-left flex items-center m-5">
            <img src="~/assets/images/design/design_docs.png" alt="" class="mx-auto">
          </div>
          <p class="md:w-10/12 text-center md:text-left flex items-center m-5">
            Any use of Ghost brand materials constitutes acceptance of the Ghost Terms of Service, 
            Trademark Policy and these Brand Guidelines, which may be updated from time to time. 
            You fully acknowledge that Ghost Foundation is the sole owner of Ghost trademarks, 
            promise not to interfere with Ghost's rights, and acknowledge that goodwill derived 
            from their use accrues only to Ghost. Ghost may review or terminate use of brand materials at any time.
          </p>
        </div>
      </div>

    </div>
    <get-started/>
  </div>
</template>

<script>
  import color from '~/components/design/color'
  import SecondaryColor from '~/components/design/SecondaryColor'
  import GetStarted from '~/components/GetStarted'

  export default {
    components: {
      color,
      SecondaryColor,
      GetStarted
    },
    data(){
      return {
        colors: [
          {
            headText: 'Shoppy green',
            bgColor: '#a4d037',
            alias: '$green',
            rgb: 'RGB 164, 208, 55',
            textColor: '#fff',
            borderColor: 'transparent'
          },
          {
            headText: 'White',
            bgColor: '#fff',
            alias: '$white',
            rgb: 'RGB 255, 255, 255',
            textColor: '#5d6569',
            borderColor: '#dcdde7'
          },
          {
            headText: 'Light grey',
            bgColor: '#f7fafc',
            alias: '$lightgrey',
            rgb: 'RGB 247, 250, 252',
            textColor: '#5d6569',
            borderColor: '#dcdde7'
          },
          {
            headText: 'Mid grey',
            bgColor: '#dcdde7',
            alias: '$midgrey',
            rgb: 'RGB 220, 221, 231',
            textColor: '#5d6569',
            borderColor: '#dcdde7'
          },
          {
            headText: 'Grey',
            bgColor: '#213240',
            alias: '$grey',
            rgb: 'RGB 33, 51, 64',
            textColor: '#fff',
            borderColor: 'transparent'
          },
          {
            headText: 'Dark grey',
            bgColor: '#15212a',
            alias: '$darkgrey',
            rgb: 'RGB 21, 33, 42',
            textColor: '#fff',
            borderColor: 'transparent'
          }
        ],
        secondaryColors: [
          {
            headText: 'Blue',
            alias: '$blue',
            borderColor: '#3eb0ef'
          },
          {
            headText: 'Purple',
            alias: '$purple',
            borderColor: '#ad26b4'
          },
          {
            headText: 'Yellow',
            alias: '$yellow',
            borderColor: '#fecd35'
          },
          {
            headText: 'Red',
            alias: '$red',
            borderColor: '#f05230'
          },
        ]
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
  margin-top: -75px;
}
.custom_grey{
  color: #babccf;
}
.brand_block{
  height: 152px;
  &_small{
    height: 152px;
  }
}
.brand_block_small{
  width: 152px;
}
.blue-bg{
  background-color: #15212a;
}
</style>