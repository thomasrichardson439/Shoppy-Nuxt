<template>
  <div>
    <div class="flex flex-wrap justify-between mb-3 relative">
      <h1 class="font-bold text-4xl leading-tight">
        Analytics
      </h1>
      <span 
        class="flex flex-wrap justify-center items-center h-12 w-48 border rounded text-gray-700 bg-white" 
        @click="isShowRange = !isShowRange"
      >
        {{ range }}
      </span>
      <date-range-picker 
        v-show="isShowRange"
        v-model="range"
        :from="rangeFrom" 
        :to="rangeTo"
        @update="updateRange"
        class="absolute right-0 dateRange z-10 bg-white"
      />
    </div>
    <div class="flex flex-wrap metrics">
      <div class="w-full sm:w-1/2 xl:w-3/12 p-6 mb-4 sm:mr-4 shadow-md bg-white">
        <div class="title">
          <p class="text-base font-medium">Revenue</p>
        </div>
        <p class="price manrope_font font-bold text-black mt-4 text-5xl">0,00 €</p>
      </div>
      <div class="w-full sm:w-3/12 p-6 mb-4 sm:mr-4 shadow-md bg-white">
        <div class="title">
          <p class="text-base font-medium">Orders</p>
        </div>
        <p class="price manrope_font font-bold text-black mt-4 text-5xl">0</p>
      </div>
      <div class="mb-4 md:mr-2 w-full bg-white shadow-md">
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
          :height="200"
        />

      </div>
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
    name: 'dashboardAnalytics',
    components: {
      LineChart,
    },
    data() {
      return {
        range: null,
        rangeFrom: null,
        rangeTo: null,
        isShowRange: false,
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
                  beginAtZero: true
                },
                gridLines: {
                  display: false
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true
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
    },
    methods: {
      updateRange(date){
        if(date){
          this.range = `${this.$moment(date.from).format('MMM Do YY')} - ${this.$moment(date.to).format('MMM Do YY')}`
          this.rangeFrom = date.from
          this.rangeTo = date.to

          this.isShowRange = false
        }else{
          let from = this.$moment()
          let to = this.$moment().add(3, 'months')

          this.range = `${from.format('MMM Do YY')} - ${to.format('MMM Do YY')}`
          this.rangeFrom = String(from.unix())
          this.rangeTo = String(to.unix())
        }
      }
    },
    mounted(){
      this.updateRange()
    }
  }
</script>

<style lang="scss" scoped>
.dateRange{
  top: 100%;
  @media (max-width: 425px) {
    right: -50px;
  }
}
</style>