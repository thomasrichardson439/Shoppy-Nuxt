<template>
    <img
        class='h-8 w-8 rounded-full'
        :src="
            source.startsWith('/images/default-avatar.png')
                ? require('~/assets/images/default-avatar.png')
                : source
        "
    />
</template>

<script>
export default {
    inheritAttrs: true,
    props: {
        source: String
    }
}
</script>