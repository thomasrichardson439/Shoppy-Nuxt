<template>
  <div>
    <h1 class="font-bold text-3xl mb-10">Dashboard</h1>
    <div class="flex flex-wrap metrics justify-between">
      <div class="metric p-6">
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
        <p class="price manrope_font font-bold text-black mt-4">1440,00 $</p>
        <div class="behave flex items-center mt-4">
          <img src="~assets/images/dashboard/increase.svg" alt="" class="mr-3">
          <span class="manrope_font text-gray-500 font-medium text-xs behave_text">
            44,29% increase
          </span>
        </div>
      </div>
      <div class="metric px-4 py-4">

      </div>
      <div class="metric px-4 py-4">

      </div>
      <div class="metric px-4 py-4">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard'
  }
</script>

<style lang="scss" scoped>
.metric{
  height: 180px;
  width: 23%;
  background-color: white;
  border-radius: 10px;
  color: #5d6569;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
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