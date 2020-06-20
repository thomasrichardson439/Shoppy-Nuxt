<template>
    <div class="flex flex-1 flex-col">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                class="mx-auto h-12 w-auto"
                src="~/assets/images/logo.svg"
                width="110"
                alt="Workflow"
            />
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-4 pb-8 px-4 shadow sm:rounded-lg sm:px-10">
                <h2
                    class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
                >
                    Register
                </h2>
                <p
                    class="mt-2 text-center text-sm leading-5 text-gray-600 max-w"
                >
                    Or
                    <styled-link to="/auth/login">login</styled-link>
                    if you already have an account
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

                    <control
                        v-model="user.username"
                        class="mb-6"
                        name="username"
                        type="text"
                        rules="required|min:3|max:25"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label
                                    class="text-sm font-medium leading-5 text-gray-700 mb-0"
                                    >Username</label
                                >
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
                        rules="required|min:7"
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
                        <template v-slot:footer>
                            <password-strength
                                v-model="user.password"
                                :strength-meter-only="true"
                            />
                        </template>
                    </control>

                    <control
                        v-model="user.password_confirm"
                        class="mb-6"
                        name="repeat password"
                        type="password"
                        rules="required|confirmed:password"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label
                                    class="text-sm font-medium leading-5 text-gray-700 mb-0"
                                    >Repeat Password</label
                                >
                                <small class="text-red-400">{{
                                    validation.errors[0]
                                }}</small>
                            </div>
                        </template>
                    </control>

                    <recaptcha />

                    <div class="flex flex-row">
                        <label class="text-sm text-center font-medium">
                            By registering, you agree to our
                            <styled-link to="/terms"
                                >Terms of Service</styled-link
                            >
                            and
                            <styled-link to="/privacy"
                                >Privacy Policy</styled-link
                            >.
                        </label>
                    </div>

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <styled-button
                                type="submit"
                                :disabled="!vo.valid"
                                class="w-full"
                                @click="register"
                            >
                                Sign up
                            </styled-button>
                        </span>
                    </div>
                </validation-observer>
            </div>
        </div>
    </div>
</template>

<script>
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
                email: '',
                username: '',
                password: '',
                password_confirm: ''
            }
        }
    },

    head() {
        return {
            title: 'Sign Up'
        }
    },

    methods: {
        async register() {
            const data = Object.assign({}, this.user)
            const token = await this.$recaptcha.getResponse()
            data.g_recaptcha_response = token

            try {
                const response = await this.$axios.$post('/auth/signup', data)
                if (response.errors) {
                    for (const key in response.errors) {
                        for (const error of response.errors[key]) {
                            this.$toast.error(error)
                        }
                    }
                    await this.$recaptcha.reset()
                    return
                }

                if (response && response.status) {
                    this.$toast.success(response.message)
                    this.$router.push('/auth/login')
                } else {
                    if (response.message) {
                        this.$toast.error(response.message)
                    } else {
                        this.$toast.error(
                            'There was an error processing your request'
                        )
                    }
                }
            } catch (e) {
                this.$toast.error('There was an error processing your request')
            }
        }
    }
}
</script>
