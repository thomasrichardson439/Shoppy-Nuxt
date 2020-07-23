<template>
  <div>
    <div v-if="products.length">
      products list
    </div>
    <EmptyPage 
      v-else
      :title="emptyTitle" 
      :text="emptyText" 
      :btnText="emptyBtnText"
      :btnLink="emptyBtnLink"
    />
  </div>
</template>

<script>
  import EmptyPage from '~/components/EmptyPage'

  export default {
    layout: 'dashboard',
    name: 'dashboardProducts',
    components: {
      EmptyPage
    },
    data() {
      return {
        emptyTitle: 'Add your products',
        emptyText: 'Get closer to your first sale by adding products',
        emptyBtnText: 'Add Product',
        emptyBtnLink: '/dashboard/products/create',
        products: [1]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>