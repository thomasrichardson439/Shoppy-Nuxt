<template>
  <div>
    <h1 class="font-bold text-3xl mb-10">Create Rule</h1>
    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <p class="mb-5">Craft Rule</p>
      <div class="mb-4 w-full">
        <p class="block text-gray-700 text-sm font-bold mb-2">Type</p>
        <v-select 
          v-model="type"
          :options="types"
          label="label"
          class="w-full"
        />
      </div>
      <div class="mb-4 w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="data">
          Blocked Data
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          id="data"
          placeholder="Data to block, e.g. '127.0.0.1', 'VN', 'seller@shoppy.gg'"
        >
      </div>
      <div class="mb-4 w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="note">
          Note <i>(optional)</i>
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          id="note"
        >
      </div>
    </div>
    <div class="flex justify-end mb-2">
      <styled-button type="submit">
        Create Rule
      </styled-button>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    name: 'dashboardProductsCreate',
    data() {
      return {
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
        ],
      }
    }
  }
</script>

<style lang="scss">
.vue-slider{
  .vue-slider-marks{
    .vue-slider-mark-label, 
    .vue-slider-mark-label {
      top: -600% !important;
      margin-top: 0;
    }
  }
}
.vs__dropdown-toggle{
  height: 38px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  min-width: 94px;
}
</style>