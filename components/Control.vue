<template>
    <validation-provider
        v-slot="{ errors }"
        :tag="tag"
        :class="actualClass"
        :name="name"
        :rules="rules"
        mode="eager"
    >
        <slot name="title" :validation="{ errors }"></slot>
        <input
            v-model="actual"
            :type="type"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            :class="{ 'is-invalid': invalidate && (errors || []).length > 0 }"
            :disabled="disabled"
            :placeholder="placeholder"
        />
        <slot name="footer" :validation="{ errors }"></slot>
    </validation-provider>
</template>

<script>
export default {
    inheritAttrs: true,
    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: () => 'text'
        },
        value: {
            type: [String, Number],
            default: () => '',
            required: true
        },
        rules: {
            type: String,
            default: () => ''
        },
        tag: {
            type: String,
            default: () => 'div'
        },
        classes: {
            type: Array,
            default: () => []
        },
        invalidate: {
            type: Boolean,
            default: () => true
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
        placeholder: {
            type: String,
            default: () => ''
        }
    },
    computed: {
        actual: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        },
        actualClass() {
            return [...this.classes]
        }
    }
}
</script>
