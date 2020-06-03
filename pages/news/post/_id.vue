<template>
  <div v-if="post">
    <img :src="require('~/assets/posts/images/' + post.image)" />
    <div v-html="rendered"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Markdown from 'markdown-it'
let renderer = new Markdown()

export default {
    data() {
        return {
            rendered: ''
        }
    },
    computed: {
        ...mapGetters('news', ['posts']),
        post() {
            return (this.posts || []).find(
                (post) => post.route === this.$route.params.id || ''
            )
        }
    },
    mounted() {
        if (this.post) {
            let rendered = renderer.render(this.post.content)
            this.rendered = rendered || ''
        }
    }
}
</script>
