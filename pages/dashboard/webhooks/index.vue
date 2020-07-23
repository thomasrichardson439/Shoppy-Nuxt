<template>
  <div>
    <EmptyPage 
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
    name: 'dashboardDeveloper',
    components: {
      EmptyPage
    },
    data() {
      return {
        emptyTitle: 'Webhooks',
        emptyText: 'No webhooks have been sent yet',
        emptyBtnText: 'Simulate a webhook',
        emptyBtnLink: '/dashboard/webhooks/simulate'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>