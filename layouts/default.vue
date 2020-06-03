<template>
  <div>
    <div class="container mx-auto">
      <div class="mt-4 shoppy-nav">
        <div class="md:flex md:items-center">
          <div class="flex justify-between items-center">
            <a href="/" class="inline-block text-white text-xl font-bold">
              <img src="~/assets/images/logo.svg" width="110" alt="Shoppy">
            </a>
            <div
              class="inline-block cursor-pointer md:hidden">
              <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
              <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
              <div class="bg-gray-400 w-8" style="height: 2px;"></div>
            </div>
          </div>

          <div>
            <div class="hidden md:block ml-10">
              <a
                href="#"
                class="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold">Products</a>
              <a
                href="#"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6">Developers</a>
              <a
                href="#"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100">Pricing</a>
            </div>
          </div>
          <div class="hidden md:block ml-auto">
            <a
              href="#"
              class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6">Login</a>
            <a
              href="#"
              class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg">Sign Up</a>
          </div>
        </div>
      </div>
    </div>

    <nuxt/>

    <footer class="bg-bluely font-lg">
      <div class="container mx-auto">
        <div class="grid grid-cols-4 gap-10 py-10">
          <div>
            <span class="text-white font-bold">Shoppy</span>

            <div class="pt-4">
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
            </div>
          </div>
          <div>
            <span class="text-white font-bold">Product</span>

            <div class="pt-4">
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
            </div>
          </div>
          <div>
            <span class="text-white font-bold">Product</span>

            <div class="pt-4">
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
            </div>
          </div>
          <div>
            <span class="text-white font-bold">Product</span>

            <div class="pt-4">
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
              <a class="block py-1">Blogging platform</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="bg-darkbluely">
      <div class="container mx-auto">
        <div class="flex flex-col items-center justify-between md:flex-row py-4">
          <div>
            <span class="text-white">Shoppy made for professional sellers</span>
          </div>
          <div class="flex mt-4 md:m-0">
            <div class="-mx-4">
              <a href="#" class="px-2 text-sm">Terms</a>
              <a href="#" class="px-2 text-sm">Privacy</a>
              <a href="#" class="px-2 text-sm">Contact</a>
              <a href="#" class="px-2 text-sm">Shoppy Ecommerce Ltd. &copy; 2020</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .shoppy-nav {
    position: relative;
    z-index: 1000;
  }
</style>
