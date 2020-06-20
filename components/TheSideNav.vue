<template>
    <div class="sidenav-container">

        <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

        <transition name="slide-side">
            <div v-if="isSidebar" class="sidenav">
                <span @click="hideSidebar" class="close-btn">X</span>
                <app-links></app-links>
                <hr>
                <ul>
                    <li class="auth-item">
                        <router-link to="/auth/login">Sign In</router-link>
                    </li>
                    <li class="auth-item">
                        <router-link to="/auth/signup">Sign Up</router-link>
                    </li>
                </ul>
            </div>
        </transition>


    </div>
</template>

<script>

    import AppLinks from '~/components/AppLinks'

    export default {

        components: { AppLinks },

        methods: {
            hideSidebar() {
                this.$store.dispatch('nav/toggleSidebar')
            }
        },

        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        }

    }

</script>


<style scoped>

    .sidenav-container {
        height: 100%;
        width: 100%;
    }

    .sidenav {
        color: white;
        height: 100%;
        width: 300px;
        background-color: #0d1c26;
        z-index: 10000;
        position: fixed;
        top: 0;
        right: 0;
        box-sizing: border-box;
        padding: 30px;
    }

    .sidenav span {
        text-align: center;
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .close-btn {
        cursor: pointer;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        background-color: white;
        font-weight: 600;
        color: #0d1c26 !important;
    }

    .backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
    }

    .auth-item {
        padding-top: 15px;
        margin: 0 10px;
        font-weight: 600;
    }

    .auth-item:hover {
        text-decoration: underline;
    }

    .slide-side-enter-active,
    .slide-side-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-side-enter,
    .slide-side-leave-to {
        transform: translateX(300px);
    }

    @media (max-width: 767px) {
        .sidenav-container {
            display: block;
        }
    }

    @media (min-width: 768px) {
        .sidenav-container {
            display: none;
        }
    }

</style>
