<template>
  <div>
    <header class="shoppy-docs-header p-6">
      <div class="container mx-auto">
        <h1 class="text-white text-xl">Frequently Asked Questions</h1>
      </div>
    </header>

    <div class="container mx-auto">
      <div class="md:flex md:flex-wrap py-10">
        <div class="md:w-8/12 rounded-lg shadow-lg bg-white p-8">
          <div v-for="(n, index) in 10" class="mb-8 border-b pb-6 border-middarkgray-6">
            <span class="text-xl color-darkgrey font-medium">Using custom domains »</span>
            <div class="text-sm pt-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </div>
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

</script>
