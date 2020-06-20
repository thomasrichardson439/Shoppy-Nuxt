<template>
    <div class="flex flex-1 flex-col">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                class="mx-auto h-12 w-auto"
                src="~/assets/images/logo.svg"
                width="110"
                alt="Shoppy"
            />
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-4 pb-8 px-4 shadow sm:rounded-lg sm:px-10">
                <h2
                    class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
                >
                    Email Confirmation
                </h2>
                <p
                    class="mt-2 text-center text-sm leading-5 text-gray-600 max-w"
                >
                    Or go back to
                    <styled-link to="/auth/login">sign in</styled-link>
                </p>

                <validation-observer
                    v-slot="vo"
                    tag="form"
                    class="mt-8"
                    @submit.prevent
                >
                    <control
                        v-model="user.email"
                        class="mb-6"
                        name="email"
                        type="email"
                        rules="required|email"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label
                                    class="text-sm font-medium leading-5 text-gray-700 mb-0"
                                    >Email</label
                                >
                                <small class="text-red-400">{{
                                    validation.errors[0]
                                }}</small>
                            </div>
                        </template>
                    </control>

                    <recaptcha />

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <styled-button
                                type="submit"
                                :disabled="!vo.valid"
                                class="w-full"
                                @click="resend"
                            >
                                Send
                            </styled-button>
                        </span>
                    </div>
                </validation-observer>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import PasswordStrength from 'vue-password-strength-meter'

import Control from '~/components/Control.vue'

export default {
    layout: 'authentication',

    components: {
        Control,
        PasswordStrength
    },

    data() {
        return {
            user: {
                email: ''
            }
        }
    },

    head() {
        return {
            title: 'Resend Confirmation Mail'
        }
    },

    methods: {
        async resend() {
            const data = Object.assign({}, this.user)
            const token = await this.$recaptcha.getResponse()
            data.g_recaptcha_response = token

            try {
                const response = await this.$axios.$post(
                    '/auth/confirmation/new',
                    data
                )
                if (response.status) {
                    this.$toast.success(response.message)
                    if (this.mode === 'restore') {
                        this.$router.push('/auth/login')
                        return
                    }
                } else {
                    if (response && response.message) {
                        this.$toast.error(response.message)
                    } else {
                        this.$toast.error(
                            'There was an error processing your request'
                        )
                    }
                }
                this.$recaptcha.reset()
            } catch (e) {
                this.$toast.error('There was an error processing your request')
            }
        }
    }
}
</script>
