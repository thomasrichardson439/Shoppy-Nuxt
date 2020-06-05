<template>
  <div>
    <header class="shoppy-docs-header p-8">
      <div class="container mx-auto">
        <h1 class="text-white text-xl">Frequently Asked Questions</h1>
      </div>
    </header>

    <div class="container mx-auto">
      <div class="md:flex md:flex-wrap py-10">
        <div class="md:w-8/12 rounded-lg shadow-lg bg-white p-8">
          <div
            v-for="answer in answers"
            :key="answer.route"
            class="mb-8 border-b pb-6 border-middarkgray-6"
          >
            <span class="text-xl color-darkgrey font-medium">
              <a :href="`/answers/${answer.route}`">{{ answer.title }} »</a>
            </span>
            <div class="text-sm pt-2">{{ answer.content }}</div>
          </div>
        </div>
        <div class="md:w-4/12">
          <div class="ml-20 mt-8">
            <span class="color-darkgrey font-medium">FAQ topics</span>
            <div class="flex mt-4">
              <span class="bg-shoppy text-white p-2 text-white rounded-lg mr-2">All</span>
              <span class="bg-whitegray p-2 text-middarkgray rounded-lg mr-2">Lorem</span>
              <span class="bg-whitegray p-2 text-middarkgray rounded-lg mr-2">Ipsum</span>
              <span class="bg-whitegray p-2 text-middarkgray rounded-lg mr-2">Dolor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('content', ['answers'])
    },

    created() {
        console.log(this.answers)
    }
}
</script>
