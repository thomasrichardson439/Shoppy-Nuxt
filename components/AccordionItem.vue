<template>
  <div>
    <div class="flex justify-between">
      <p class="text-lg font-semi-bold font-black">{{title}}</p>
      <img
        class="w-4 h-3 mx-2 float-right self-center"
        src="~/assets/images/pricing/arrow-down.png"
        :class="{ 'transform': open, 'rotate-180': open}"
        @click="toggle"
      />
    </div>
    <p class="accordion-text" v-if="open">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'text'],
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>