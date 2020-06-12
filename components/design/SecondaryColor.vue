<template>
  <div 
    class="design_sec_color_item rounded-lg border p-2 flex flex-col justify-between m-3 border-grey-300"
    :style="{borderTopColor: item.borderColor}"
  >
    <span class="font-bold">
      {{ item.headText }}
    </span>
    <div class="text-xs">
      <p>{{ item.alias }}</p>
      <p>{{ item.borderColor }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">
.design_sec_color_item{
  width: 142px;
  height: 100px;
  border-top-width: 7px;
}
</style>