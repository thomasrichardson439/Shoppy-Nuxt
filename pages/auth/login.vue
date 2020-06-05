<template>
    <div
        class="min-h-screen bg-shoppy flex flex-col pt-8 py-12 sm:px-6 lg:px-8"
    >
        <modal name='2fa' classes='p-3 border flex flex-col items-center justify-center rounded' :width='350' :pivotY='0.25' @before-close='user.token = ""'>
            <h2
                class="text-center text-3xl leading-9 font-extrabold text-gray-900"
            >
                2FA
            </h2>
            <validation-observer class='w-3/4 mt-6' tag='form' @submit.prevent v-slot='vo'>
                <control
                    class='mb-6'
                    name="token"
                    type="text"
                    rules="required|min:6"
                    v-model="user.token"
                >
                    <template v-slot:title="{ validation }">
                        <div class="flex flex-col mb-2">
                            <label class="text-sm font-medium leading-5 text-gray-700 mb-0">Token</label>
                            <small class="text-red-400">{{ validation.errors[0] }}</small>
                        </div>
                    </template>
                </control>
                
                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button
                            type="submit"
                            :disabled='!vo.valid'
                            @click="login"
                            class="w-full disabled:opacity-75 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                            Authenticate
                        </button>
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
                    <router-link
                        to='/auth/signup'
                        class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                        register if you dont already have an account
                    </router-link>
                </p>

                <validation-observer tag='form' class="mt-8" @submit.prevent v-slot='vo'>
                    <control
                        class='mb-6'
                        name="username"
                        type="text"
                        rules="required|min:3|max:25"
                        v-model="user.username"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label class="text-sm font-medium leading-5 text-gray-700 mb-0">Username</label>
                                <small class="text-red-400">{{ validation.errors[0] }}</small>
                            </div>
                        </template>
                    </control>
                    
                    <control
                        name="password"
                        type="password"
                        rules="required|min:6"
                        v-model="user.password"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label class="text-sm font-medium leading-5 text-gray-700 mb-0">Password</label>
                                <small class="text-red-400">{{ validation.errors[0] }}</small>
                            </div>
                        </template>
                    </control>

                    <div class="mt-6 flex items-center justify-between">
                        <div class="flex items-center">
                            <input
                                v-model="user.remember"
                                id="remember_me"
                                type="checkbox"
                                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label
                                for="remember_me"
                                class="ml-2 block text-sm leading-5 text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div class="text-sm leading-5">
                            <a
                                href="#"
                                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <recaptcha />

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <button
                                type="submit"
                                :disabled='!vo.valid'
                                @click="login"
                                class="w-full disabled:opacity-75 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            >
                                Sign in
                            </button>
                        </span>
                    </div>
                </validation-observer>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'

import Control from '~/components/Control.vue';

export default {
    layout: 'empty',
    components: {
        Control
    },

    data() {
        return {
            api: this.$axios.create({
                baseURL: 'http://shoppy.test/api/v1',
                validateStatus: () => true
            }),
            user: {
                username: '',
                password: '',
                remember: false,
                token: ''
            }
        }
    },

    methods: {
        async login() {
            let data = Object.assign({}, this.user)
            let token = await this.$recaptcha.getResponse()
            data.g_recaptcha_response = token

            if(data.token) {
                data.oathotp = data.token;
                delete data.token;
            }
            console.log(data);

            let response = await this.api.$post('/auth/login', data)
            if (response.errors) {
                for (let key in response.errors) {
                    for (let error of response.errors[key]) {
                        this.$toast.error(error)
                    }
                }
                this.$modal.hide('2fa')
                this.$recaptcha.reset()
                return
            }

            if (response.status && response.token) {
                this.$toast.success(response.message)
                Cookies.set('token', response.token, { expires: data.remember ? 365 : null })
                this.$router.push('/dashboard')
            }
            else {
                if (response.twofa_enabled) {
                    if(this.user.token.length === 0) {
                        this.$modal.show('2fa');
                    }
                }
                else {
                    this.$toast.error(response.message);
                }
                this.$recaptcha.reset()
                this.user.token = '';
            }
        }
    }
}
</script>
