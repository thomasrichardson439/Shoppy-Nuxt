<template>
  <div>
    <h1 class="font-bold text-3xl mb-10">Craft Request</h1>
    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <div class="mb-4 w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="url">
          URL
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          id="url"
          placeholder="URL to send webhook to"
        >
      </div>
      <div class="mb-4 w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="url">
          Resource
        </label>
        <v-select 
          v-model="resourse"
          :options="options"
          label="label"
        />
      </div>
      <div class="mb-4 w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="url">
          Payload
        </label>
        <v-select 
          v-model="payload"
          :options="types"
          label="label"
        />
      </div>
    </div>
    <div class="flex justify-end mb-2">
      <styled-button type="submit">
        Queue
      </styled-button>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    name: 'dashboardDeveloperSimulate',
    data() {
      return {
        resourse: null,
        options: [
          {
            "label": "AUD"
          },
          {
            "label": "BRL"
          },
          {
            "label": "CAD"
          },
          {
            "label": "CHF"
          },
          {
            "label": "CNY"
          },
          {
            "label": "CZK"
          },
          {
            "label": "DKK"
          },
          {
            "label": "EUR"
          },
          {
            "label": "GBP"
          },
          {
            "label": "HKD"
          },
          {
            "label": "HRK"
          },
          {
            "label": "ILS"
          },
          {
            "label": "INR"
          },
          {
            "label": "JPY"
          },
          {
            "label": "MXN"
          },
          {
            "label": "MYR"
          },
          {
            "label": "NOK"
          },
          {
            "label": "NZD"
          },
          {
            "label": "PHP"
          },
          {
            "label": "PLN"
          },
          {
            "label": "RUB"
          },
          {
            "label": "SEK"
          },
          {
            "label": "SGD"
          },
          {
            "label": "USD"
          },
          {
            "label": "ZAR"
          }
        ],
        payload: null,
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