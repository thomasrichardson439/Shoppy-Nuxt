<template>
    <button
        class="disabled:opacity-75 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime hover:bg-green focus:outline-none focus:border-green focus:shadow-outline-green active:bg-green transition duration-150 ease-in-out"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    inheritAttrs: true
}
</script>
