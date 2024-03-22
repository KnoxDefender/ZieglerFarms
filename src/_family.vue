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
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 border-gray-900 rounded-lg">
           <a class="block" href="#farming">Farming</a>       
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg">
            <a href="#cows" class="block">Cows</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg">
            <a href="#bulls" class="block">Bulls</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg">
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
        <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center  border-2 border-sky-900 dark:border-white bg-white dark:bg-gray-900 ">
          <h1 class="text-5xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Ziegler Farming</h1>
          <p class="text-lg text-sky-900 dark:text-sky-500 mb-4">We take pride, not only in our cattle, but in our crops. We grow Corn, Soy Beans, Wheat, and Rie. </p>
          <div class="gallery-container grid grid-cols-3 gap-4">
            <img src="https://i.ibb.co/VSdwW0v/4-A422-C71-61-D5-415-A-A7-CF-D419-E210-EC56.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/5F2Bw52/34-E123-D2-273-B-4963-956-B-1-C8-A0-BD97-EE2.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/HqLvR9F/AD3-B3393-52-E2-4248-9-C58-9-A6747-EBD4-D2.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/gV5Nm0x/172-C807-A-ED28-44-A3-A4-FC-F0124-D1907-CE.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/K0WDPjz/799-EA2-BF-912-A-4-C1-A-BDAB-2592-B75-BFFB5.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/PCX9Sqb/21195-CD8-55-DB-423-E-A7-FB-F6-B03-AD63-F76-1-201-a.jpg" alt="" class="gallery-image">
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