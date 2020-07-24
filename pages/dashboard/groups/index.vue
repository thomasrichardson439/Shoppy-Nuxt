<template>
  <div>
    <div v-if="groups.length">
      <div class="flex justify-between">
        <h1 class="font-bold text-4xl leading-tight mb-3">
          Product Groups
        </h1>
        <nuxt-link to="/dashboard/products/create">
          <styled-button type="submit">
            Add Group
          </styled-button>
        </nuxt-link>
      </div>
      <div class="overflow-x-auto mt-8">
        <table class="table-auto overflow-scroll products_table bg-white">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2 text-left">Title</th>
              <th class="px-4 py-2 text-left">Product count</th>
              <th class="px-4 py-2 text-left text-right">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">
                <nuxt-link :to="`/dashboard/groups/1`">
                  Product 1
                </nuxt-link>
              </td>
              <td class="px-4 py-2">0 assigned</td>
              <td class="px-4 py-2" align="right">
                <div class="flex justify-end">
                  <span class="flex items-center cursor-pointer mx-1">
                    <icon name="edit"/>  
                    Edit
                  </span>
                  <span class="flex items-center cursor-pointer mx-1">
                    <icon name="share"/>  
                    Share
                  </span>
                  <span class="flex items-center cursor-pointer mx-1">
                    <icon name="trash"/>  
                    Delete
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
    name: 'dashboardGroups',
    components: {
      EmptyPage
    },
    data() {
      return {
        emptyTitle: 'Add your products',
        emptyText: 'Get closer to your first sale by adding products',
        emptyBtnText: 'Add Product',
        emptyBtnLink: '/dashboard/products/create',
        groups: [1]
      }
    }
  }
</script>

<style lang="scss" scoped>
.products_table{
  width: calc(100% - 1px);
}
</style>