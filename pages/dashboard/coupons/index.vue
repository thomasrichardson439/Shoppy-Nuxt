<template>
  <div>
    <div v-if="coupons.length">
      <div class="flex justify-between">
        <h1 class="font-bold text-4xl leading-tight mb-3">
          Coupons
        </h1>
        <nuxt-link to="/dashboard/coupons/create">
          <styled-button type="submit">
            Create coupon
          </styled-button>
        </nuxt-link>
      </div>
      <div class="overflow-x-auto mt-8">
        <table class="table-auto overflow-scroll products_table bg-white">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2 text-left">Code</th>
              <th class="px-4 py-2 text-left">Status</th>
              <th class="px-4 py-2 text-left">Used</th>
              <th class="px-4 py-2 text-left">Start</th>
              <th class="px-4 py-2 text-left">End</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">
                <nuxt-link :to="`/dashboard/coupons/1`">
                  Code
                </nuxt-link>
              </td>
              <td class="px-4 py-2">
                <styled-button type="submit">
                  Status
                </styled-button>
              </td>
              <td class="px-4 py-2">
                0
              </td>
              <td class="px-4 py-2">Jul 22</td>
              <td class="px-4 py-2">-</td>
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
    name: 'dashboardCoupons',
    components: {
      EmptyPage
    },
    data() {
      return {
        emptyTitle: 'Add a discount',
        emptyText: 'Boost your sales and value your customers',
        emptyBtnText: 'Add Coupon',
        emptyBtnLink: '/dashboard/coupons/create',
        coupons: [1]
      }
    }
  }
</script>

<style lang="scss" scoped>
.products_table{
  width: calc(100% - 1px);
}
</style>