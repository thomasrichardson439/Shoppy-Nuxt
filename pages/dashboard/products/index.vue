<template>
  <div>
    <div v-if="products.length">
      <div class="flex justify-between">
        <h1 class="font-bold text-4xl leading-tight mb-3">
          Products
        </h1>
        <nuxt-link to="/dashboard/products/create">
          <styled-button type="submit">
            Add product
          </styled-button>
        </nuxt-link>
      </div>
      <div class="flex justify-between">
        <div></div>
        <input 
          class="appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
          type="text" 
          placeholder="Type to search"
        >
      </div>

      <div class="overflow-x-auto mt-8">
        <table class="table-auto overflow-scroll products_table bg-white">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2 text-left">Info</th>
              <th class="px-4 py-2 text-left">Price</th>
              <th class="px-4 py-2 text-left">Type</th>
              <th class="px-4 py-2 text-left">Stock</th>
              <th class="px-4 py-2 text-left text-right">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">
                <nuxt-link :to="`/dashboard/products/1`">
                  Intro to CSS
                </nuxt-link>
              </td>
              <td class="px-4 py-2">Adam</td>
              <td class="px-4 py-2">
                <styled-button type="submit">
                  Service
                </styled-button>
              </td>
              <td class="px-4 py-2">∞</td>
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
            <tr>
              <td class="px-4 py-2">
                <nuxt-link :to="`/dashboard/products/1`">
                  Intro to CSS
                </nuxt-link>
              </td>
              <td class="px-4 py-2">Adam</td>
              <td class="px-4 py-2">
                <styled-button type="submit">
                  Service
                </styled-button>
              </td>
              <td class="px-4 py-2">∞</td>
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
             <tr>
              <td class="px-4 py-2">
                <nuxt-link :to="`/dashboard/products/1`">
                  Intro to CSS
                </nuxt-link>
              </td>
              <td class="px-4 py-2">Adam</td>
              <td class="px-4 py-2">
                <styled-button type="submit">
                  Service
                </styled-button>
              </td>
              <td class="px-4 py-2">∞</td>
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
.products_table{
  width: calc(100% - 1px);
}
</style>