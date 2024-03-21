<template>
  <div id="app" class="flex min-h-screen text-white p-8">
    <!-- Sidebar -->
    <aside class="flex flex-col bg-gray-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
        <h1 class="text-2xl font-bold">Ziegler Farming</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-gray-800">
            <a class="block" href="#">Farming</a>       
          </li>
          <li class="px-6 py-2 hover:bg-gray-800">
            <a href="#cows" class="block">Cows</a>
          </li>
          <li class="px-6 py-2 hover:bg-gray-800">
            <a href="#bulls" class="block">Bulls</a>
          </li>
          <li class="px-6 py-2 hover:bg-gray-800">
            <a href="#" class="block">The Ziegler Family</a>
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
        <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center bg-gray-100 dark:bg-gray-700">
          <h1 class="text-5xl font-extrabold text-gray-400 dark:text-gray-300">Ziegler Farming</h1>
          <p class="text-lg text-gray-400 dark:text-gray-200">We take pride, not only in our cattle, but in our crops. We grow Corn, Soy Beans, Wheat, and Rie. </p>
          <div class="gallery-container grid grid-cols-3 gap-4">
            <img src="https://i.ibb.co/wR9hygt/7-BB46-B54-BD74-439-A-BBA4-6-DA3-FEE49164.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/0sJ2537/F4-A3-BD1-C-75-B3-454-F-BEA2-455-D8-B5461-A4.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/QNs1Zxz/A9-A8-F1-FB-B498-4128-A358-B701-BB227-E2-C.jpg" alt="" class="gallery-image">
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