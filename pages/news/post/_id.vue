<template>
    <div v-if="post">
        <img :src="require('~/assets/content/posts/images/' + post.image)" />
        <div v-html="rendered"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Showdown from 'showdown'
const renderer = new Showdown.Converter()

export default {
    data() {
        return {
            rendered: ''
        }
    },
    computed: {
        ...mapGetters('content', ['posts']),
        post() {
            return (this.posts || []).find(
                (post) => post.route === this.$route.params.id || ''
            )
        }
    },
    mounted() {
        if (this.post) {
            const rendered = renderer.makeHtml(this.post.content)
            this.rendered = rendered || ''
        }
    }
}
</script>
