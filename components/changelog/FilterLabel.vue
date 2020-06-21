<template>
    <div v-if="item">
        <div class="color-label" :style="{backgroundColor: item.color}">
            {{ item.code }}
        </div>
    </div>
</template>

<script>
  export default {
    props: ['type', 'filters'],
    computed: {
      item() {
        return this.filters.find(item => item.code === this.type)
      }
    }
  }
</script>

<style lang="scss">
.color-label{
    font-size: .9rem;
    text-transform: uppercase;
    padding: 3px 10px;
    width: max-content;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
}
</style>
