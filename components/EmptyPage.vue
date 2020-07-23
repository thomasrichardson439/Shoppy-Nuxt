<template>
  <div class="dash_empty_page">
    <h1 class="font-bold text-4xl leading-tight mb-3 w-full">
      {{ title }}
    </h1>
    <h2 class="font-medium text-2xl leading-tight mb-4 w-full">
      {{ text }}
    </h2>
    <router-link 
      v-if="btnText && btnText.length"
      :to="btnLink"
    >
      <styled-button type="submit">
        {{ btnText }}
      </styled-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['title', 'text', 'btnText', 'btnLink']
  }
</script>

<style lang="scss" scoped>
.dash_empty_page{
  height: calc(100vh - 170px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
</style>