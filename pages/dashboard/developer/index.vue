<template>
  <div>
    <div v-if="webhooks.length">
      <div class="flex flex-wrap justify-between mb-3">
        <h1 class="font-bold text-4xl leading-tight ">
          Webhooks
        </h1>
        <div class="flex">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 h-10">
            <icon name="sync" />
          </button>
          <nuxt-link to="/dashboard/developer/simulate">
            <styled-button type="submit">
              Simulator
            </styled-button>
          </nuxt-link>
        </div>
      </div>

      <div class="overflow-x-auto mt-8">
        <table class="table-auto overflow-scroll products_table bg-white w-full">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2 text-left">WEBHOOK URL</th>
              <th class="px-4 py-2 text-left">EVENT</th>
              <th class="px-4 py-2 text-left">STATUS</th>
              <th class="px-4 py-2 text-left">ATTEMPTS</th>
              <th class="px-4 py-2 text-left">PAYLOAD</th>
              <th class="px-4 py-2 text-left text-right">SENT AT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">
                <div class="flex items-center">
                  <p class="p-2 bg-gray-100 mr-3">
                    fsdfsdf@dsdfs.df
                  </p>
                  <p class="cursor-pointer">
                    Resend
                  </p>
                </div>
              </td>
              <td class="px-4 py-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                  simulator
                </button>
              </td>
              <td class="px-4 py-2">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  500
                </button>
              </td>
              <td class="px-4 py-2">4/36</td>
              <td class="px-4 py-2">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded">
                  Payload
                </button>
              </td>
              <td class="px-4 py-2" align="right">
                July 24th 2020, 3:07:32 pm
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
    name: 'dashboardDeveloper',
    components: {
      EmptyPage
    },
    data() {
      return {
        emptyTitle: 'Webhooks',
        emptyText: 'No webhooks have been sent yet',
        emptyBtnText: 'Simulate a webhook',
        emptyBtnLink: '/dashboard/developer/simulate',
        webhooks: [1]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>