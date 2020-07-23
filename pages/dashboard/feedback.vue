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
    name: 'dashboardFeedbacks',
    components: {
      EmptyPage
    },
    data() {
      return {
        emptyTitle: 'Feedbacks',
        emptyText: 'No one has given you a feedback yet',
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>