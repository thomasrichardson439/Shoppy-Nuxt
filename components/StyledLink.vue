<template>
    <router-link
        :to='to'
        class="font-medium text-lime hover:text-green focus:outline-none focus:underline transition ease-in-out duration-150"
    >
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    inheritAttrs: true,
    props: {
        to: String
    }
}
</script>
