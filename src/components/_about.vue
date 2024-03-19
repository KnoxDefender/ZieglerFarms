<template>
  <div id="app" class="flex min-h-screen text-white p-8">
    <!-- Sidebar -->
    <aside class="flex flex-col bg-gray-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-green-900 to-green-400">
        <h1 class="text-2xl font-bold">Ziegler Farms</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-gray-800">
               <a href="_animals.vue" class="block">Gallery</a>        
          </li>
          <li class="px-6 py-2 hover:bg-gray-800">
            <a href="#" class="block">Interplanetary Travel</a>
          </li>
          <li class="px-6 py-2 hover:bg-gray-800">
            <a href="#" class="block">Mars Colonization</a>
          </li>
          <li class="px-6 py-2 hover:bg-gray-800">
            <a href="#" class="block">Solar Power</a>
          </li>
        </ul>
      </nav>
      <!-- Contact Info -->
      <div class="flex items-center justify-center h-16 bg-gradient-to-r from-green-500 to-green-900 rounded-b-3xl p-8 ">
        <p class="text-sm">Contact: robert_ziegler@hotmail.com</p>
      </div>
    </aside>
   
    <!-- Main Content -->
    <main class="flex-1">
      <div class="z-10 backdrop-blur-md rounded-lg border-2 border-white shadow-md p-8 space-y-6 text-center bg-white dark:bg-black ">
        <h1 class="text-4xl font-extrabold text-green-500 mb-4">About the Ziegler Family</h1>
        <p class="text-base text-green-600 leading-relaxed">
          The Ziegler family, with nine children, tends to their Nebraska farm with dedication and a love for the land. They raise cows, embodying a commitment to sustainable farming and creating a harmonious homestead. Rooted in hard work and resilience, the Zieglers contribute to Nebraska's agricultural legacy!
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <!-- Your main content grid or other content goes here -->
        </div>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvwDlPSxPqSgTCBjXwNPzCXXznPZlDfhGcDWVvxqjPqCdqcKrmKCCtjZNlDRnKvRLtBrL" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-green-700 via-green-500  to-green-800 transition duration-300 mt-4">Get In Touch</a>
      </div>
    </main> 
    
          </div>

  



   
</template>

<style scoped>
/* Add any additional styles here */
</style>