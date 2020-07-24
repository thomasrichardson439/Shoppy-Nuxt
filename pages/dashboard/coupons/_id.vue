<template>
  <div>
    <div class="flex flex-wrap justify-between items-center mb-10">
      <h1 class="font-bold text-3xl">
        Create Coupon {{ $route.params.id }}
      </h1>
      <span class="flex items-center cursor-pointer mx-1 text-red-600">
        <icon name="trash" class="mr-1"/>  
        Delete
      </span>
    </div>
    <div class="flex flex-wrap ">
      <div class="w-full md:w-2/3 md:pr-4">
        <div class="p-4 bg-white rounded-lg shadow-md mb-4">
          <p class="mb-5">General Information</p>
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm font-bold mb-2 flex flex-wrap justify-between items-center" for="code">
              <span>Coupon Code</span>
              <styled-button type="submit">
                Generate code
              </styled-button>
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="text" 
              id="code"
            >
          </div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow-md mb-4">
          <p class="mb-5">Discount Settings</p>
          <div class="flex flex-wrap justify-between">
            <div class="mb-4 w-full md:w-2/4 md:pr-2">
              <p class="block text-gray-700 text-sm font-bold mb-2">Discount Type</p>
              <v-select 
                v-model="type"
                :options="types"
                label="label"
              />
            </div>
            <div class="mb-4 w-full md:w-2/4 md:pl-2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Discount Value
              </label>
              <input 
                v-model="value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
              >
            </div>
          </div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow-md mb-4">
          <p class="mb-5">Usage Limits</p>
          <div class="mb-4 w-full">
            <label class="flex items-center text-gray-500 font-bold mr-3">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
                Limit coupon to a specific amount of usages
              </span>
            </label>
          </div>
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Usage Limits
            </label>
            <input 
              v-model="limit"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="number" 
            >
          </div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow-md mb-4">
          <p class="mb-5">Product Settings</p>
          <div class="mb-4 w-full">
            <label class="flex items-center text-gray-500 font-bold mr-3">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
                Restrict this coupon for specific products
              </span>
            </label>
          </div>
          <div class="mb-4 w-full">
            <ul>
              <li class="p-3 border rounded">
                <label class="flex items-center text-gray-500 font-bold mr-3">
                  <input class="mr-2 leading-tight" type="checkbox">
                  <span class="text-sm">
                    Product 1
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 bg-gray-200 p-4 h-24 mb-4">
        <h2 class="mb-4">Summary</h2>
        <p>No information entered yet.</p>
      </div>
    </div>
    
    <div class="flex justify-end mb-2">
      <styled-button type="submit">
        Save Coupon
      </styled-button>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    name: 'dashboardCouponsId',
    data() {
      return {
        limit: 1,
        value: 0,
        type: null,
        types: [
          {
            label: 'Service'
          },
          {
            label: 'Item'
          },
          {
            label: 'File'
          },
          {
            label: 'Dynamic'
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
.vs__dropdown-toggle{
  height: 38px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>