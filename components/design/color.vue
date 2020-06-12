<template>
  <div 
    class="design_color_item rounded-lg border p-2 flex flex-col justify-between m-3"
    :style="{backgroundColor: item.bgColor, color: item.textColor, borderColor: item.borderColor}"
  >
    <span class="font-bold">
      {{ item.headText }}
    </span>
    <div class="text-xs">
      <p>{{ item.alias }}</p>
      <p>{{ item.rgb }}</p>
      <p>{{ item.bgColor }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">
.design_color_item{
  width: 142px;
  height: 200px;
}
</style>