<template>
    <div class="flex flex-1 flex-col">
        <modal
            name="2fa"
            classes="p-3 border flex flex-col items-center justify-center rounded"
            :width="350"
            :pivot-y="0.25"
            @before-close="user.token = ''"
        >
            <h2
                class="text-center text-3xl leading-9 font-extrabold text-gray-900"
            >
                2FA
            </h2>
            <validation-observer
                v-slot="vo"
                class="w-3/4 mt-6"
                tag="form"
                @submit.prevent
            >
                <control
                    v-model="user.token"
                    class="mb-6"
                    name="token"
                    type="text"
                    rules="required|min:6"
                >
                    <template v-slot:title="{ validation }">
                        <div class="flex flex-col mb-2">
                            <label
                                class="text-sm font-medium leading-5 text-gray-700 mb-0"
                                >Token</label
                            >
                            <small class="text-red-400">{{
                                validation.errors[0]
                            }}</small>
                        </div>
                    </template>
                </control>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <styled-button
                            type="submit"
                            :disabled="!vo.valid"
                            class="w-full"
                            @click="login"
                        >
                            Authenticate
                        </styled-button>
                    </span>
                </div>
            </validation-observer>
        </modal>

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
                    Sign in
                </h2>
                <p
                    class="mt-2 text-center text-sm leading-5 text-gray-600 max-w"
                >
                    Or
                    <styled-link to="/auth/signup">register</styled-link>
                    if you dont already have an account
                </p>

                <validation-observer
                    v-slot="vo"
                    tag="form"
                    class="mt-8"
                    @submit.prevent
                >
                    <control
                        v-model="user.username"
                        class="mb-6"
                        name="username"
                        type="text"
                        rules="required|min:3|max:25"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <div class="flex flex-row">
                                    <label
                                        class="text-sm font-medium leading-5 text-gray-700 mb-0"
                                        >Username</label
                                    >
                                    <styled-link
                                        class="ml-auto text-xs"
                                        to="/auth/resend"
                                    >
                                        Resend Confirmation Email
                                    </styled-link>
                                </div>
                                <small class="text-red-400">{{
                                    validation.errors[0]
                                }}</small>
                            </div>
                        </template>
                    </control>

                    <control
                        v-model="user.password"
                        name="password"
                        type="password"
                        rules="required|min:6"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label
                                    class="text-sm font-medium leading-5 text-gray-700 mb-0"
                                    >Password</label
                                >
                                <small class="text-red-400">{{
                                    validation.errors[0]
                                }}</small>
                            </div>
                        </template>
                    </control>

                    <div class="mt-6 flex items-center justify-between">
                        <div class="flex items-center">
                            <input
                                id="remember_me"
                                v-model="user.remember"
                                type="checkbox"
                                class="form-checkbox h-4 w-4 text-green transition duration-150 ease-in-out"
                            />
                            <label
                                for="remember_me"
                                class="ml-2 block text-sm leading-5 text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div class="text-sm leading-5">
                            <styled-link to="/auth/password/new">
                                Forgot your password?
                            </styled-link>
                        </div>
                    </div>

                    <recaptcha />

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <styled-button
                                type="submit"
                                :disabled="!vo.valid"
                                class="w-full"
                                @click="login"
                            >
                                Sign in
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

import Control from '~/components/Control.vue'

export default {
    layout: 'authentication',

    components: {
        Control
    },

    data() {
        return {
            user: {
                username: '',
                password: '',
                remember: false,
                token: ''
            }
        }
    },

    head() {
        return {
            title: 'Authorize'
        }
    },

    methods: {
        async login() {
            const data = Object.assign({}, this.user)
            const token = await this.$recaptcha.getResponse()
            data.g_recaptcha_response = token

            if (data.token) {
                data.oathotp = data.token
                delete data.token
            }

            try {
                const response = await this.$axios.$post('/auth/login', data)
                if (response.errors) {
                    for (const key in response.errors) {
                        for (const error of response.errors[key]) {
                            this.$toast.error(error)
                        }
                    }
                    this.$modal.hide('2fa')
                    this.$recaptcha.reset()
                    return
                }

                if (response.status && response.token) {
                    this.$toast.success(response.message)
                    this.$cookies.set('token', response.token, {
                        maxAge: 60 * 60 * 24 * (data.remember ? 31 : 3)
                    })
                    window.location = window.location.protocol + '//' + window.location.host + '/home'
                } else {
                    if (response.twofa_enabled) {
                        if (this.user.token.length === 0) {
                            this.$modal.show('2fa')
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
                    this.user.token = ''
                }
            } catch (e) {
                this.$toast.error('There was an error processing your request')
            }
        }
    }
}
</script>
