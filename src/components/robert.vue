<template>
  <div id="app" class="flex min-h-screen text-white p-8 max-h">
    <!-- Sidebar -->
    <aside class="hidden sm:block  flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center  rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
               <img class="hidden sm:block" width="90" height="90" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>

        <h1 class=" font-bold">Robert Ziegler</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 hover:text-sky-200">
           <a class="block" href="#robert">Robert Ziegler</a>       
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#scott" class="block">Scott Ziegler</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#knox" class="block">Developer</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#family" class="block">Ziegler Family</a>
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
      <div class=" flex flex-col items-center justify-center p-8">
      <div class="  z-10 backdrop-blur-md rounded-lg border-2 p-8  border-sky-900 dark:border-white shadow-md  space-y-6 text-center bg-white dark:bg-gray-900 flex flex-col items-center justify-center ">
        <h1 class="text-4xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Robert Ziegler</h1>
                          <img src="https://i.ibb.co/M6v1hFd/5-A116038-0-A9-E-45-BA-B3-DB-6207-CCB7-EB91-1-201-a.jpg" alt="Knox Ziegler" class="rounded-full w-24 h-24 object-cover border-4 border-sky-900 dark:border-white">
                       <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail"/>

                <a  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjhdpqZLnvFFXZMgmSFCLMXCzSWZCrhBjDkMphWNNFLXktNRrMknZgHNjqjGJjDwBllB" class="hover:text-sky-300 hover:underline  text-sky-900 dark:text-sky-500 mb-4">Email: robert_ziegler@hotmail.com.com</a>
             
             
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/phone.png" alt="phone"/>
                <a href="tel:2705272957" class="hover:text-sky-300 hover:underline text-sky-900 dark:text-sky-500 mb-4">Phone: 402 460 8812</a> 
                             

        <p class="text-base  text-sky-900 dark:text-sky-500 mb-4 leading-relaxed"> Robert is a 3rd Generation farmer and rancher who co-owns the farm with his Dad Scott. He has 9 kids, and a buetifull wife who homeschools all 9 of them. </p>

      
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Gallery of Images -->
          
        </div>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvwDlPSxPqSgTCBjXwNPzCXXznPZlDfhGcDWVvxqjPqCdqcKrmKCCtjZNlDRnKvRLtBrL" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-sky-700 via-sky-500  to-sky-800 transition duration-300 mt-4">Contact</a>
      </div>
      </div>
    </main> 
  </div>

</template>

<style scoped>
.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Add border-radius to images for a nicer look */
}
</style>
