<template>
  <div class="flex flex-wrap w-full justify-between">
    <div class="w-full my-10">
      <p class="text-center text-sm font-bold" :class="`text-${item.headColor}`">
        {{ item.head }}
      </p>
    </div>

    <div class="divide-y divide-gray-300 text-sm w-full md:w-1/5 py-3">
      <p 
        v-for="(item, index) in item.items"
        :key="index"
        class="py-3 font-bold flex align-center"
      >
        <span>
          {{ item.title }}
        </span>
        <span
          v-if="item.question"
          class="leading-none border-2 border-gray-300 text-gray-300 rounded-full ml-2 h-5 w-5 flex items-center justify-center"
        >?</span>
      </p>
    </div>

    <div class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center w-full md:w-1/3 mb-4 md:mb-0">
      <p 
        v-for="(item, index) in item.items"
        :key="index"
        class="py-3 justify-center text-sm"
        :class="{'text-white': !item.free.count && !item.free.check}"
      >
        <template v-if="item.free.count">
          {{ item.free.count }}
        </template>
        <template v-else-if="item.free.check">
          <img class="w-5 h-5 mx-auto" src="~/assets/images/pricing/green-check.svg" />
        </template>
        <template v-else>
          .
        </template>
      </p>
    </div>

    <div class="rounded-lg bg-white divide-y divide-gray-200 py-3 px-8 text-center w-full md:w-1/3 mb-4 md:mb-0">
      <p 
        v-for="(item, index) in item.items"
        :key="index"
        class="py-3 justify-center text-sm"
        :class="{'text-white': !item.enterprise.count && !item.enterprise.check}"
      >
        <template v-if="item.enterprise.count">
          {{ item.enterprise.count }}
        </template>
        <template v-else-if="item.enterprise.check">
          <img class="w-5 h-5 mx-auto" src="~/assets/images/pricing/green-check.svg" />
        </template>
        <template v-else>
          .
        </template>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss" scoped>

</style>