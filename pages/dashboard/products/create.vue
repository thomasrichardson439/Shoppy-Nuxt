<template>
  <div>
    <h1 class="font-bold text-3xl mb-10">Create product</h1>
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
        <p class="w-full block text-gray-700 text-sm font-bold mb-2">Payment Gateways</p>
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
        <div class="mb-4 w-full md:w-7/12 md:pr-2">
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
        <div class="mb-4 w-1/12 md:pl-2 text-center">
          <p class="block text-gray-700 text-sm font-bold mb-2">Required</p>
          <input class="mt-2 leading-tight" type="checkbox">
        </div>
        <div class="mb-4 w-1/12 md:pl-6 text-center">
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
        <div class="mb-4 w-1/6 md:pr-10 text-right">
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
    name: 'dashboardProductsCreate',
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
  min-width: 94px;
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