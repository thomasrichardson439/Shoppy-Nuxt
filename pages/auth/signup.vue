<template>
    <div
        class="flex flex-1 flex-col"
    >
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

                <validation-observer tag='form' class="mt-8" @submit.prevent v-slot='vo'>
                    <control
                        class='mb-6'
                        name="email"
                        type="email"
                        rules="required|email"
                        v-model="user.email"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label class="text-sm font-medium leading-5 text-gray-700 mb-0">Email</label>
                                <small class="text-red-400">{{ validation.errors[0] }}</small>
                            </div>
                        </template>
                    </control>

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
                        rules="required|min:7"
                        v-model="user.password"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label class="text-sm font-medium leading-5 text-gray-700 mb-0">Password</label>
                                <small class="text-red-400">{{ validation.errors[0] }}</small>
                            </div>
                        </template>
                        <template v-slot:footer>
                            <password-strength v-model='user.password' :strength-meter-only='true'/>
                        </template>
                    </control>

                    <control
                        class='mb-6'
                        name="repeat password"
                        type="password"
                        rules="required|confirmed:password"
                        v-model="user.password_confirm"
                    >
                        <template v-slot:title="{ validation }">
                            <div class="flex flex-col mb-2">
                                <label class="text-sm font-medium leading-5 text-gray-700 mb-0">Repeat Password</label>
                                <small class="text-red-400">{{ validation.errors[0] }}</small>
                            </div>
                        </template>
                    </control>

                    <recaptcha />

                    <div class="flex flex-row">
				        <label class='text-sm text-center font-medium'>
                            By registering, you agree to our
                            <styled-link to='/terms'>Terms of Service</styled-link> and
                            <styled-link to='/privacy'>Privacy Policy</styled-link>.
                        </label>
                    </div>

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <styled-button
                                type="submit"
                                :disabled='!vo.valid'
                                @click="register"
                                class="w-full"
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
import Control from '~/components/Control.vue';
import PasswordStrength from 'vue-password-strength-meter';

export default {
    layout: 'authentication',
    components: {
        Control,
        PasswordStrength
    },

    data() {
        return {
            api: this.$axios.create({
                baseURL: 'http://shoppy.test/api/v1',
                validateStatus: () => true
            }),
            user: {
                email: '',
                username: '',
                password: '',
                password_confirm: ''
            }
        }
    },

    methods: {
        async register() {
            let data = Object.assign({}, this.user)
            let token = await this.$recaptcha.getResponse()
            data.g_recaptcha_response = token

            let response = await this.api.$post('/auth/signup', data)
            if (response.errors) {
                for (let key in response.errors) {
                    for (let error of response.errors[key]) {
                        this.$toast.error(error)
                    }
                }
                await this.$recaptcha.reset()
                return
            }

            if (response.status) {
                this.$toast.success(response.message);
                this.$router.push('/auth/login')
            }
        }
    }
}
</script>
