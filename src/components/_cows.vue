<template>
<div id="app" class="flex min-h-screen text-white p-8 max-h">
    <!-- Sidebar -->
    <aside class=" hidden sm:block flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
        <h1 class="text-2xl font-bold">Ziegler Cows</h1>
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
          <h1 class="text-5xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Ziegler Farms Cows</h1>
          <p class="text-lg text-sky-900 dark:text-sky-500 mb-4"></p>
          <div class="gallery-container grid grid-cols-3 gap-4">
            <img src="https://i.ibb.co/wR9hygt/7-BB46-B54-BD74-439-A-BBA4-6-DA3-FEE49164.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/0sJ2537/F4-A3-BD1-C-75-B3-454-F-BEA2-455-D8-B5461-A4.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/Xz679r9/33-A48-B71-C791-44-D5-8457-47-AC516286-A1.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/P1xRyhm/8-C59-CB14-CA31-4048-9308-917-B1-B58-BC9-B.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/8x1MJBj/7835-D135-7-D30-4-B72-AD84-E51-CD6-C54-F02.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/WHpnQWj/E6-B8584-E-F43-A-4-C04-98-A6-2-DD67750797-E-1-201-a.jpg" alt="" class="gallery-image">
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