<template>
  <div>
    <div class="flex justify-between mb-3">
      <h1 class="font-bold text-4xl leading-tight">
        Blacklists
      </h1>
      <nuxt-link to="/dashboard/blacklist/create">
        <styled-button type="submit">
          Add blacklist
        </styled-button>
      </nuxt-link>
    </div>
    <div class="flex flex-wrap metrics">
      <div class="metric bg-white metric_height mb-4 md:mr-2 w-full sm:w-auto">
        <div class="title flex items-center justify-between p-6">
          <p class="text-base font-medium">Events Per Day</p>
          <div class="relative">
            <select class="block text-xs appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 leading-tight focus:outline-none" id="grid-state">
              <option>Last 24 hours</option>
              <option>Last 12 hours</option>
              <option>Last 6 hours</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <line-chart
          :data="lineChartDataTop"
          :options="lineChartOptionsTop"
          :height="110"
        />

      </div>
      <div class="metric bg-white metric_height p-6 mb-4 md:mr-2">
        <div class="title">
          <p class="text-base font-medium">Total events</p>
        </div>
        <p class="price manrope_font font-bold text-black mt-4 text-5xl">32</p>
      </div>
    </div>

    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <p class="w-full mb-5">VPN / Proxies</p>
      <label class="flex items-center text-gray-500 font-bold">
        <input class="mr-2 leading-tight" type="checkbox">
        <span class="text-sm">
          Block buyers using a VPN/Proxy for risky payment methods (PayPal, Stripe)
        </span>
      </label>
    </div>

    <div class="overflow-x-auto mt-8">
      <table class="table-auto overflow-scroll products_table bg-white">
        <thead>
          <tr class="border-b">
            <th class="px-4 py-2 text-left">TYPE</th>
            <th class="px-4 py-2 text-left">BLOCKED DATA</th>
            <th class="px-4 py-2 text-left">NOTE</th>
            <th class="px-4 py-2 text-left text-right">OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">Email</td>
            <td class="px-4 py-2">ytrjrj@dgdfg.dfg</td>
            <td class="px-4 py-2">dfgsgsgsdfgsdfg</td>
            <td class="px-4 py-2" align="right">
              <div class="flex justify-end">
                <span class="flex items-center cursor-pointer mx-1">
                  <icon name="edit" class="mr-1"/>
                  View
                </span>
                <span class="flex items-center cursor-pointer mx-1">
                  <icon name="trash" class="mr-1"/>
                  Delete
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import LineChart from '~/components/charts/LineChart'

  const chartColors = {
    lightGreen: '#30ccdb'
  };

  export default {
    layout: 'dashboard',
    name: 'dashboardBlacklist',
    components: {
      LineChart,
    },
    data() {
      return {
        lineChartDataTop: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Income',
              backgroundColor: [chartColors.lightGreen],
              borderColor: '#30ccdb',
              pointBorderWidth: 2,
              pointRadius: 3,
              pointHoverRadius: 3,
              pointStyle: 'rectRounded',
              pointBackgroundColor: 'white',
              data: [7, 3, 7, 6, 8, 9]
            }
          ]
        },
        lineChartOptionsTop: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          title: {
            display: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false
                },
                gridLines: {
                  display: false
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false
                },
                gridLines: {
                  display: false
                }
              }
            ]
          },
          layout:{
            padding:{
              right: 10,
            }
          }
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
.products_table{
  width: calc(100% - 1px);
}
</style>
