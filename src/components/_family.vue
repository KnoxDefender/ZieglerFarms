<template>
<div id="app" class="flex min-h-screen text-white p-8 max-h">
    <!-- Sidebar -->
    <aside class="flex flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
        <h1 class="text-2xl font-bold">Ziegler Farming</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 border-gray-900 rounded-lg hover:text-sky-200">
           <a class="block" href="#farming">Farming</a>       
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg hover:text-sky-200">
            <a href="#cows" class="block">Cows</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg hover:text-sky-200">
            <a href="#bulls" class="block">Bulls</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg hover:text-sky-200">
            <a href="#family" class="block">The Ziegler Family</a>
          </li>
        </ul>
      </nav>
      <!-- Contact Info -->
      <div class="flex items-center justify-center h-16 bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800  rounded-b-3xl p-8 ">
        <p class="text-sm">Contact: robert_ziegler@hotmail.com</p>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <div class="flex flex-col items-center justify-center p-8">
        <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center  border-2 border-sky-900 dark:border-white bg-white dark:bg-gray-900 ">
          <h1 class="text-5xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Ziegler Farming</h1>
          <p class="text-lg text-sky-900 dark:text-sky-500 mb-4">We believe in multi-generational faithfulness, so we not only pass on our knowledge of work, but also our faith. In Genesis God says to take dominion over every living thing that walks on the earth and to be good stewards.  We seek to be good stewards of our land and cattle which the Lord so graciously blessed us with.  </p>
          <div class="gallery-container grid grid-cols-3 gap-4">
            <img src="" alt="" class="gallery-image">
            <img src="" alt="" class="gallery-image">
            <img src="" alt="" class="gallery-image">
            <img src="" alt="" class="gallery-image">
            <img src="" alt="" class="gallery-image">
            <img src="" alt="" class="gallery-image">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
/* Gallery styles */
.gallery-container {
  width: 100%;
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>