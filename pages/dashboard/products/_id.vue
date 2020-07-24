<template>
  <div>
    <div class="flex justify-between flex-wrap">
      <div class="flex flex-wrap items-center mb-10">
        <h1 class="font-bold text-3x mr-2">
          Edit Product
        </h1>
        <styled-button type="submit" @click="showAddImageModal">
          Upload image
        </styled-button>
      </div>
      <div class="flex mb-10">
        <span class="flex items-center cursor-pointer mx-1">
          <icon name="share" class="mr-1"/>  
          View
        </span>
        <span class="flex items-center cursor-pointer mx-1">
          <icon name="copy" class="mr-1"/>  
          Duplicate
        </span>
        <span class="flex items-center cursor-pointer mx-1">
          <icon name="code" class="mr-1"/>  
          Embed
        </span>
        <span class="flex items-center cursor-pointer mx-1 text-red-400">
          <icon name="trash" class="mr-1"/>  
          Delete
        </span>
      </div>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <div class="flex justify-between mb-5">
        <p>
          Product Details
        </p>
        <label class="flex items-center text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Unlisted
          </span>
        </label>
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="mb-4 w-full md:w-2/3 md:pr-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Title
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
          >
        </div>
        <div class="mb-4 w-full md:w-1/3 md:pl-2">
          <p class="block text-gray-700 text-sm font-bold mb-2">Price</p>
          <div class="flex">
            <v-select 
              v-model="country"
              :options="options"
              label="label"
            >
              <template slot="option" slot-scope="option">
                <div class="shoppy-flag mr-2" :class="`shoppy-flag__${option.label}`"></div>
                {{ option.label }}
              </template>
            </v-select>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="text" 
            >
          </div>
        </div>
      </div>
      <div class="w-full mb-10">
        <p class="block text-gray-700 text-sm font-bold mb-2">Description</p>
        <div class="editor border rounded border-solid">
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }" class="p-4">
            <div class="menubar">
              <span class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                <icon name="bold" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                <icon name="italic" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
                <icon name="strikethrough" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
                <icon name="underline" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.code() }" @click="commands.code">
                <icon name="code" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph">
                <icon name="paragraph" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">
                H1
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
                H2
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })">
                H3
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
                <icon name="list" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
                <icon name="list-ol" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
                <icon name="quote-right" />
              </span>
              <span class="menubar__button" :class="{ 'is-active': isActive.code_block() }" @click="commands.code_block">
                <icon name="code" />
              </span>
              <span class="menubar__button" @click="commands.undo">
                <icon name="undo" />
              </span>
              <span class="menubar__button" @click="commands.redo">
                <icon name="redo" />
              </span>
            </div>
          </editor-menu-bar>
          <editor-content class="editor__content p-4" :editor="editor" onUpdate="onChange" />
        </div>
      </div>
      <div class="flex flex-wrap">
        <p class="w-full block text-gray-700 text-sm font-bold mb-2">Description</p>
        <label class="flex items-center text-gray-500 font-bold mr-3">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Bitcoin
          </span>
        </label>
        <label class="flex items-center text-gray-500 font-bold mr-4">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Ethereum
          </span>
        </label>
        <label class="flex items-center text-gray-500 font-bold mr-4">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Litecoin
          </span>
        </label>
        <label class="flex items-center text-gray-500 font-bold mr-4">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            PayPal
          </span>
        </label>
        <label class="flex items-center text-gray-500 font-bold mr-4">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm">
            Stripe
          </span>
        </label>
      </div>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <p class="mb-5">
        Product Stock
      </p>

      <p class="block text-gray-700 text-sm font-bold mb-2">Type</p>
      <v-select
        v-model="type"
        :options="types"
        label="label"
      />
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <p class="mb-5">
        Custom Fields <i>Optional</i>
      </p>
      <div class="flex justify-end mb-2">
        <styled-button type="submit">
          Add field
        </styled-button>
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="mb-4 w-full md:w-5/12 md:pr-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Field name
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
          >
        </div>
        <div class="mb-4 w-full md:w-3/12 md:pl-2">
          <p class="block text-gray-700 text-sm font-bold mb-2">Field type</p>
          <div class="flex">
            <v-select
              class="w-full"
              :options="fieldTypes"
              label="label"
            />
          </div>
        </div>
        <div class="mb-4 w-1/6 md:pl-2 text-center">
          <p class="block text-gray-700 text-sm font-bold mb-2">Required</p>
          <input class="mt-2 leading-tight" type="checkbox">
        </div>
        <div class="mb-4 w-1/6 md:pl-2 text-center">
          <p class="block text-gray-700 text-sm font-bold mb-8"></p>
          <icon name="trash" class="text-red-600 cursor-pointer"/>
        </div>
      </div>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <p class="mb-5">
        Miscellaneous
      </p>
      <p class="block text-gray-700 text-sm font-bold mb-2">Webhook URLs Optional</p>
      <div class="flex justify-end mb-4">
        <styled-button type="submit">
          Add webhook
        </styled-button>
      </div>
      <div class="flex flex-wrap justify-between mb-8">
        <div class="mb-4 w-5/6 md:pr-2">
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text"
            placeholder="Receive a HTTP request for events" 
          >
        </div>
        <div class="mb-4 w-1/6 md:pl-2 text-center">
          <p class="block text-gray-700 text-sm font-bold mb-2"></p>
          <icon name="trash" class="text-red-600 cursor-pointer"/>
        </div>
      </div>
      <p class="block text-gray-700 text-sm font-bold mb-6">Crypto Currency Confirmations</p>
      <vue-slider v-model="ranger" :data="rangeData" data-label="id" data-value="id"/>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md mb-4">
      <p class="mb-5">
        Delivery
      </p>
      <label class="flex items-center text-gray-500 font-bold mb-3">
        <input class="mr-2 leading-tight" type="checkbox">
        <span class="text-sm">
          Attach text to purchase email
        </span>
      </label>
      <textarea rows="10" class="resize border rounded focus:outline-none focus:shadow-outline w-full"></textarea>
    </div>
    <div class="flex justify-end mb-2">
      <styled-button type="submit">
        Create Product
      </styled-button>
    </div>

    <modal
      name="addImage"
      classes="p-3 border flex flex-col items-center justify-center rounded"
      :width="550"
      :pivot-y="0.25"
    >
      <div class="border-dashed border-2 w-full h-64 rounded flex justify-center items-center relative">
        <input type="file" multiple class="cursor-pointer absolute block opacity-0 w-full h-full p-20 z-50">
        <svg version="1.1" class="h-8 text-grey mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
          <g>
            <path d="M50.975,20.694c-0.527-9-7.946-16.194-16.891-16.194c-5.43,0-10.688,2.663-13.946,7.008
              c-0.074-0.039-0.153-0.065-0.228-0.102c-0.198-0.096-0.399-0.188-0.605-0.269c-0.115-0.045-0.23-0.086-0.346-0.127
              c-0.202-0.071-0.406-0.133-0.615-0.19c-0.116-0.031-0.231-0.063-0.349-0.09c-0.224-0.051-0.452-0.09-0.683-0.124
              c-0.102-0.015-0.202-0.035-0.305-0.047C16.677,10.523,16.341,10.5,16,10.5c-4.962,0-9,4.037-9,9c0,0.129,0.007,0.255,0.016,0.381
              C2.857,22.148,0,26.899,0,31.654C0,38.737,5.762,44.5,12.845,44.5H18c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5.155
              C6.865,42.5,2,37.635,2,31.654c0-4.154,2.705-8.466,6.432-10.253L9,21.13V20.5c0-0.123,0.008-0.249,0.015-0.375l0.009-0.175
              l-0.012-0.188C9.007,19.675,9,19.588,9,19.5c0-3.859,3.14-7,7-7c0.309,0,0.614,0.027,0.917,0.067
              c0.078,0.01,0.155,0.023,0.232,0.036c0.268,0.044,0.532,0.102,0.792,0.177c0.034,0.01,0.069,0.016,0.102,0.026
              c0.286,0.087,0.565,0.198,0.838,0.322c0.069,0.031,0.137,0.065,0.205,0.099c0.242,0.119,0.479,0.251,0.707,0.399
              C21.72,14.875,23,17.039,23,19.5c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871
              C24.666,8.879,29.388,6.5,34.084,6.5c7.744,0,14.178,6.135,14.848,13.887c-1.022-0.072-2.553-0.109-4.083,0.125
              c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.152-0.012
              c2.224-0.336,4.543-0.021,4.684-0.002C54.49,23.372,58,27.661,58,32.472C58,38.001,53.501,42.5,47.972,42.5H44
              c-0.552,0-1,0.447-1,1s0.448,1,1,1h3.972C54.604,44.5,60,39.104,60,32.472C60,26.983,56.173,22.06,50.975,20.694z"/>
            <path d="M31.708,30.794c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0
              c-0.123,0.051-0.233,0.124-0.326,0.217l-7.999,7.999c-0.391,0.391-0.391,1.023,0,1.414C22.488,40.402,22.744,40.5,23,40.5
              s0.512-0.098,0.707-0.293L30,33.914V54.5c0,0.553,0.448,1,1,1s1-0.447,1-1V33.914l6.293,6.293C38.488,40.402,38.744,40.5,39,40.5
              s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L31.708,30.794z"/>
          </g>

          </svg>

        <span class="block text-grey">Drop your files here</span>
      </div>
    </modal>
  </div>
</template>

<script>
  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    Mention,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    Strike,
    Underline,
    History,
  } from 'tiptap-extensions'

  export default {
    layout: 'dashboard',
    name: 'dashboardProductsId',
    components: {
      EditorContent,
      EditorMenuBar,
    },
    data() {
      return {
        rangeData: [
          { id: 1 }, 
          { id: 2 }, 
          { id: 3 }, 
          { id: 4 }, 
          { id: 5 }, 
          { id: 6 }
        ],
        ranger: 1,
        country: null,
        options: [
          {
            "label": "AUD"
          },
          {
            "label": "BRL"
          },
          {
            "label": "CAD"
          },
          {
            "label": "CHF"
          },
          {
            "label": "CNY"
          },
          {
            "label": "CZK"
          },
          {
            "label": "DKK"
          },
          {
            "label": "EUR"
          },
          {
            "label": "GBP"
          },
          {
            "label": "HKD"
          },
          {
            "label": "HRK"
          },
          {
            "label": "ILS"
          },
          {
            "label": "INR"
          },
          {
            "label": "JPY"
          },
          {
            "label": "MXN"
          },
          {
            "label": "MYR"
          },
          {
            "label": "NOK"
          },
          {
            "label": "NZD"
          },
          {
            "label": "PHP"
          },
          {
            "label": "PLN"
          },
          {
            "label": "RUB"
          },
          {
            "label": "SEK"
          },
          {
            "label": "SGD"
          },
          {
            "label": "USD"
          },
          {
            "label": "ZAR"
          }
        ],
        editor: null,
        type: null,
        types: [
          {
            label: 'Service'
          },
          {
            label: 'Item'
          },
          {
            label: 'File'
          },
          {
            label: 'Dynamic'
          },
        ],
        fieldTypes: [
          {
            label: 'Text'
          },
          {
            label: 'Number'
          },
        ]
      }
    },
    methods: {
      showAddImageModal(){
        this.$modal.show('addImage')
      }
    },
    mounted() {
      this.country = this.options[0]
      this.type = this.types[0]
      this.editor = new Editor({
          extensions: [
            new Blockquote(),
            new BulletList(),
            new CodeBlock(),
            new HardBreak(),
            new Heading({ levels: [1, 2, 3] }),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new TodoItem(),
            new TodoList(),
            new Link(),
            new Bold(),
            new Code(),
            new Italic(),
            new Strike(),
            new Underline(),
            new History(),
            new Table({ resizable: true }),
            new TableHeader(),
            new TableCell(),
            new TableRow(),
          ],
          content: 'Product description',
        })
    }
  }
</script>

<style lang="scss">
.vue-slider{
  .vue-slider-marks{
    .vue-slider-mark-label, 
    .vue-slider-mark-label {
      top: -600% !important;
      margin-top: 0;
    }
  }
}
.vs__dropdown-toggle{
  height: 38px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.shoppy-flag {
    background: url(~assets/images/dashboard/flags.png) no-repeat;
    display: inline-block;
    width: 24px;
    height: 16px;
    &__AUD {
      background-position: -277px -5px;
    } 
    &__BRL {
      background-position: -311px -31px;
    }
    &__CAD {
      background-position: -107px -57px;
    }
    &__CHF {
      background-position: -243px -57px;
    }
    &__CNY {
      background-position: -379px -57px;
    }
    &__CZK {
      background-position: -175px -83px;
    }
    &__BRL {
      background-position: -277px -83px;
    }
    &__DKK {
      background-position: -311px -31px;
    }
    &__EUR {
      background-position: -413px -265px;
    }
    &__GBP {
      background-position: -379px -109px;
    }
    &__HKD {
      background-position: -345px -135px;
    }
    &__HRK {
      background-position: -5px -161px;
    }
    &__ILS {
      background-position: -175px -161px;
    }
    &__INR {
      background-position: -209px -161px;
    }
    &__JPY {
      background-position: -39px -187px;
    }
    &__MXN {
      background-position: -39px -265px
    }
    &__MYR {
      background-position: -73px -265px;
    }
    &__NOK {
      background-position: -311px -265px;
    }
    &__NZD {
      background-position: -5px -291px;
    }
    &__PHP {
      background-position: -175px -291px;
    }
    &__PLN {
      background-position: -243px -291px;
    }
    &__RUB {
      background-position: -73px -317px;
    }
    &__SEK {
      background-position: -277px -317px;
    }
    &__SGD {
      background-position: -311px -317px;
    }
    &__USD {
      background-position: -39px -395px;
    }
    &__ZAR {
      background-position: -413px -31px;
    }
}
.ProseMirror{
  &:active, &:focus{
    outline: none;
  }
}
.menubar{
  border-bottom: 1px #d2d6dc solid;
}
.menubar__button{
  margin: 0 5px;
  &:hover{
    cursor: pointer;
  }
}
</style>