<template>
  <div>
    <div class="flex justify-between mb-3 items-center">
      <h1 class="font-bold text-4xl leading-tight">
        Reports
      </h1>
      <styled-button type="submit" @click="addReport">
        New Report
      </styled-button>
    </div>
    <div class="overflow-x-auto mt-8">
      <table class="table-auto overflow-scroll products_table bg-white w-full">
        <thead>
          <tr class="border-b">
            <th class="px-4 py-2 text-left">ID</th>
            <th class="px-4 py-2 text-left">TIME PERIOD</th>
            <th class="px-4 py-2 text-left">DOWNLOAD</th>
            <th class="px-4 py-2 text-right">CREATED AT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">
              <p class="p-2 bg-gray-100 mr-3">
                G3XPZ0A
              </p>
            </td>
            <td class="px-4 py-2">Jul 1st 20 - Jul 22nd 20</td>
            <td class="px-4 py-2">
              <span class="cursor-pointer hover:text-gray-400">Download</span>
              /
              <span class="cursor-pointer hover:text-gray-400">Delete</span>
            </td>
            <td class="px-4 py-2" align="right">5 days ago</td>
          </tr>
        </tbody>
      </table>
    </div>

    <modal
      name="addReport"
      classes="p-3 border flex flex-col justify-between rounded overflow-visible"
      :width="320"
      :pivot-y="0.25"
    >
      <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
        New Report
      </h2>
      <div class="w-full">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Month
        </label>
        <v-select 
          v-model="period"
          :options="periods"
          label="label"
          class="w-full"
        />
      </div>
      <styled-button type="submit" @click="closeReport" class="w-36">
        Generate Report
      </styled-button>
    </modal>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    name: 'dashboardReports',
    data() {
      return {
        period: null,
        periods: [],
      }
    },
    methods: {
      addReport(){
        this.$modal.show('addReport')
      },
      closeReport(){
        this.$modal.hide('addReport')
      }
    },
    mounted() {
      let m = this.$moment();
      for (var i = 0; i < 12; i++) {
        this.periods.push(m.months(i).format('MMM y'))
      }
    }
  }
</script>

<style lang="scss">
.vm--modal{
  &.overflow-visible{
    overflow: visible;
  }
}
</style>