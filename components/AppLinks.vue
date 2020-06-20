<template>
    <ul class="nav-list">
        <li class="nav-item">
            <button
                @click.stop="toggleMenu('product')"
                type="button"
                class="group inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none mr-6"
            >
                <span>Product</span>
                <arrow-down />
            </button>
            <ul v-if="menu.product">
                <li><router-link to="/ecommerce">E-commerce</router-link></li>
                <li><router-link to="/payments">Payments</router-link></li>
                <li><router-link to="#">Watch Demo</router-link></li>
                <li><router-link to="#">Contact Sales</router-link></li>
            </ul>
        </li>
        <li class="nav-item">
            <button
                @click.stop="toggleMenu('developer')"
                type="button"
                class="group inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none mr-6"
            >
                <span>Developers</span>
                <arrow-down />
            </button>
            <ul v-if="menu.developer">
                <li><a href="https://shoppy.dev" target="_blank">Integrations</a></li>
                <li><a href="https://shoppy.dev" target="_blank">Full API Reference</a></li>
                <li><a href="https://status.shoppy.gg" target="_blank">API Status</a></li>
            </ul>
        </li>
        <li class="nav-item">
            <button
                @click.stop="toggleMenu('resources')"
                type="button"
                class="group inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none mr-6"
            >
                <span>Resources</span>
                <arrow-down />
            </button>
            <ul v-if="menu.resources">
                <li><router-link to="/about">About us</router-link></li>
                <li><router-link to="/answers">Help Center</router-link></li>
                <li><router-link to="/changelog">Product Updates</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
            </ul>
        </li>
        <li class="nav-item"><nuxt-link to="/pricing">Pricing</nuxt-link></li>
    </ul>
</template>
<script>
import ArrowDown from './ArrowDown.vue'

export default {
    data: () => {
        return {
            menu: {
                product: false,
                developer: false,
                resources: false,
            },
        }
    },
    components: {
        'arrow-down': ArrowDown,
    },
    methods: {
        toggleMenu(key) {
          this.menu[key] = !this.menu[key]
        }
    }
}
</script>
<style scoped>

    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
        padding-top: 30px;
    }

    .nav-item {
        margin: 0 10px;
    }

    .nav-item span:hover {
        text-decoration: underline;
    }

    .nav-item a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    .nav-item a:hover,
    .nav-item a:active{
        text-decoration: underline;
        color: white;
    }

    .nav-item li {
        padding-top: 10px;
    }

    @media (max-width: 767px) {
        .nav-list {
            display: block;
        }
        .nav-list ul {
            padding-left: 30px;
        }
        .nav-item {
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }

    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }

</style>
