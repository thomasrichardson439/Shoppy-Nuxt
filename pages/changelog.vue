<template>
    <div class="container mx-auto">
        <div class="md:flex md:flex-wrap py-10">
            <div class="md:w-8/12 border-b border-middarkgrey-6 bg-white p-8">
                <div v-for="(n, index) in 4" class="mb-8">
                    <div class="mb-6 tracking-wide">
                        <div class="px-4 py-2 mt-2">
                            <div class="md:flex md:flex-wrap">
                                <div class="md:w-2/12 mt-2">
                                    <span
                                        class="bg-green-400 rounded-lg text-white p-2 text-sm"
                                        >NEW</span
                                    >
                                </div>
                                <div
                                    class="md:w-10/12 border-b pb-6 border-middarkgray-6"
                                >
                                    <div class="md:flex-shrink-0">
                                        <img
                                            src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
                                            alt="mountains"
                                            class="w-full h-64 mb-4"
                                        />
                                    </div>

                                    <h2
                                        class="font-bold text-2xl mt-6 mb-3 text-gray-800 tracking-normal"
                                    >
                                        My Amazing Journey to the Mountains
                                    </h2>
                                    <p class="text-sm text-gray-700 mr-1">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Tempora reiciendis ad
                                        architecto at aut placeat quia, minus
                                        dolor praesentium officia maxime
                                        deserunt porro amet ab debitis deleniti
                                        modi soluta similique...
                                    </p>
                                    <div
                                        class="flex items-center justify-between mt-2 mx-6"
                                    >
                                        <a
                                            href="#"
                                            class="text-blue-500 text-xs -ml-3 "
                                            >Show More</a
                                        >
                                        <a href="#" class="flex text-gray-700">
                                            <svg
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                class="w-6 h-6 text-blue-500"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                />
                                            </svg>
                                            5
                                        </a>
                                    </div>
                                    <div
                                        class="author flex items-center -ml-3 my-3"
                                    >
                                        <div class="user-logo">
                                            <img
                                                class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                                                alt="avatar"
                                            />
                                        </div>
                                        <h2
                                            class="text-sm tracking-tighter text-gray-900"
                                        >
                                            <a href="#">By Rotem Bar</a>
                                            <span class="text-gray-600"
                                                >02 JUNE 2020</span
                                            >
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Changelog and Roadmap'
            }
        }
    }
</script>
