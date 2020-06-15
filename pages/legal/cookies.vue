<template>
    <div>
        <h2 class="text-4xl font-bold mb-6">
            What are cookies
        </h2>
        <p class="leading-normal mb-4">
            Cookies are little text files which are stored on the browser or
            hard drive of your computer or mobile device when you visit a
            webpage or application. Cookies work to make your experience
            browsing our site as smooth as possible and they remember your
            preferences so you don’t have to insert your details again and
            again.
        </p>
        <h2 class="text-4xl font-bold mb-6 mt-10">
            How we use Cookies
        </h2>
        <p class="leading-normal mb-4">
            We use cookies to enhance your browsing experience by:
        </p>
        <p class="pl-6 green_list_dot relative font-bold">
            Recognising when you log in and any preferred settings. Giving you a
            browsing experience that is unique to you and to serve you content
            which we believe improves your site experience
        </p>
        <h2 class="text-4xl font-bold mb-6 mt-10">
            Cookies Table
        </h2>
        <p class="leading-normal mb-4">
            The cookies found below are ones that are typically set.
        </p>
        <div class="flex justify-between mt-8 mb-16">
            <div>
                <p class="uppercase leading-normal mb-4 font-bold">
                    name
                </p>
                <p class="leading-normal">
                    shoppy_session
                </p>
            </div>
            <div>
                <p class="uppercase leading-normal mb-4 font-bold">
                    purpose
                </p>
                <p class="leading-normal">
                    Authentication
                </p>
            </div>
            <div>
                <p class="uppercase leading-normal mb-4 font-bold">
                    ttpe
                </p>
                <p class="leading-normal">
                    Persistent
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Cookie Policy'
            }
        },
    }
</script>
