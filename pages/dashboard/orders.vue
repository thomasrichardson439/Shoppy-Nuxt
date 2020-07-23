<template>
  <div>
    <EmptyPage 
      :title="emptyTitle" 
      :text="emptyText"
    />
  </div>
</template>

<script>
  import EmptyPage from '~/components/EmptyPage'

  export default {
    layout: 'dashboard',
    name: 'dashboardOrders',
    components: {
      EmptyPage
    },
    data() {
      return {
        emptyTitle: 'No orders',
        emptyText: 'You have received no orders yet',
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>