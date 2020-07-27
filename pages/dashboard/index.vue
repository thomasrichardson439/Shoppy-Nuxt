<template>
  <div>
    <h1 class="font-bold text-3xl mb-10">Dashboard</h1>
    <div class="flex flex-wrap metrics justify-between">
      <div class="metric metric_bg metric_height p-6 mb-4">
        <div class="title flex items-center justify-between">
          <p class="text-base font-medium">Revenue</p>
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
        <p class="price manrope_font font-bold text-black mt-4">1440,0 $</p>
        <div class="behave flex items-center mt-4">
          <img src="~assets/images/dashboard/increase.svg" alt="" class="mr-3">
          <span class="manrope_font text-gray-500 font-medium text-xs behave_text">
            44.29% Increase
          </span>
        </div>
      </div>
      <div class="metric metric_bg metric_height mb-4">
        <div class="title flex items-center justify-between p-6">
          <p class="text-base font-medium">Orders Per Day</p>
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
          :gradient="chartTopGradient"
        />

      </div>
      <div class="metric metric_bg metric_height p-6 mb-4">
        <div class="title flex items-center justify-between">
          <p class="text-base font-medium">Orders</p>
          <div class="relative">
            <select class="block text-xs appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 leading-tight focus:outline-none" id="grid-state">
              <option>Last 30 days</option>
              <option>Last 20 days</option>
              <option>Last 10 days</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <p class="price manrope_font font-bold text-black mt-4">930</p>
        <div class="behave flex items-center mt-4">
          <img src="~assets/images/dashboard/descrease.svg" alt="" class="mr-3">
          <span class="manrope_font text-gray-500 font-medium text-xs behave_text">
            17.5% Descrease
          </span>
        </div>
      </div>
      <div class="metric metric_bg metric_height p-6 mb-4">
        <div class="title flex items-center justify-between">
          <p class="text-base font-medium">Total orders</p>
        </div>
        <p class="price manrope_font font-bold text-black mt-4">27.81k</p>
      </div>
    </div>
    <div class="flex flex-wrap metrics xl:justify-between sm:justify-center">
      <div class="big_metric metric_bg p-2 mb-4">
        <div class="title flex items-center justify-between">
          <p class="text-base font-medium pt-4 pl-4 pb-2">Revenue</p>
        </div>
        <line-chart :data="lineChartData" :options="lineChartOptions" :height="200" />
      </div>
      <div class="metric metric_bg mb-4">
        <div class="title flex items-center p-2 justify-between">
          <p class="text-base font-medium pt-4 pl-4 pb-2">Total orders</p>
        </div>
        <div class="side_donut_chart">
          <doughnut :data="doughnuttData" :options="doughnuttOptions" :height="400" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Doughnut from '~/components/charts/Doughnut'
  import LineChart from '~/components/charts/LineChart'

  const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    transparent: 'transparent',
    lightGreen: '#30ccdb'
  };

  export default {
    head() {
      return {
        title: 'Dashboard'
      }
    },
    layout: 'dashboard',
    components: {
      Doughnut,
      LineChart
    },
    data(){
      return {
        chartTopGradient: [
          '#30ccdb',
          '#d8f5f8',
          'transparent'
        ],
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
        doughnuttData: {
          labels: ['Jan', 'Feb', 'Mar'],
          datasets: [
            {
              label: 'Income',
              // backgroundColor: ["red", "orange", "yellow"],
              backgroundColor: [chartColors.red, chartColors.orange, chartColors.yellow],
              data: [10, 15, 13]
            }
          ]
        },
        doughnuttOptions: {
          responsive: true,
          legend: {
            // display: false,
            position: 'bottom',
            labels: {
              boxWidth: 15,
              usePointStyle: true
            }
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
                  display: false
                },
                gridLines: {
                  display: false
                }
              }
            ]
          }
        },
        lineChartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [
            {
              label: 'Income',
              backgroundColor: [chartColors.transparent],
              borderColor: '#3eb0ef',
              pointBorderWidth: 2,
              pointRadius: 5,
              pointHoverRadius: 5,
              pointStyle: 'rectRounded',
              pointBackgroundColor: 'white',
              data: [2, 5, 3, 7, 10, 4, 15, 7, 13]
            }
          ]
        },
        lineChartOptions: {
          responsive: true,
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
                  // display: false
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  // display: false
                },
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.side_donut_chart{
  @media (min-width: 1280px) {
    transform: translateY(25%);
  }
}
.big_metric{
  width: 74.5%;
  @media (max-width: 1279px) {
    width: 100%;
  }
}
.metric_bg{
  background-color: white;
  border-radius: 10px;
  color: #5d6569;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
}
.metric_height{
  // height: 180px;
  @media (max-width: 1279px) {
    height: auto;
  }
}
.metric{
  width: 23%;
  @media (max-width: 1279px) {
    width: 48%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
}
.title{
  p{
    color: #5d6569;
  }
}
.price{
  font-size: 42px;
}
.behave_text{
  color: #b2b3bb;
}
</style>
