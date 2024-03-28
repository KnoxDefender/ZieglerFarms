<template>
  <div id="app" class="flex min-h-screen text-white p-8 max-h">
    <!-- Sidebar -->
    <aside class="flex flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
               <img width="90" height="90" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>

        <h1 class="text-2xl font-bold">Developer</h1>

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
            <a href="#family" class="block">The Ziegler Family</a>
          </li>
        </ul>
      </nav>
      <!-- Contact Info -->
      <div class="flex items-center justify-center h-16 bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800  rounded-b-3xl p-8 ">
        <p class="text-sm">Contact: knoxdefenderbender@gmail.com</p>
      </div>
    </aside>
   
    <!-- Main Content -->
    <main class="flex-1">
      <div class="flex flex-col items-center justify-center p-8">
        <div class="z-10 backdrop-blur-md rounded-lg border-2 p-8  border-sky-900 dark:border-white shadow-md  space-y-6 text-center bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
          <h1 class="text-4xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Knox Ziegler</h1>
          <!-- Profile Picture -->
          <img src="https://i.ibb.co/vQg4rWw/8-DCFC602-A4-E5-46-A7-9-A13-1658-FA4-D4391-1-201-a.jpg" alt="Knox Ziegler" class="rounded-full w-24 h-24 object-cover border-4 border-sky-900 dark:border-white">
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail"/>
           <a  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjhdpqZLnvFFXZMgmSFCLMXCzSWZCrhBjDkMphWNNFLXktNRrMknZgHNjqjGJjDwBllB" class="hover:text-sky-300 hover:underline  text-sky-900 dark:text-sky-500 mb-4">Email: knoxdefenderbender@gmail.com.com</a>
             
             <ul>
                <a href="tel:" class="hover:text-sky-300 hover:underline text-sky-900 dark:text-sky-500 mb-4">Phone: None </a> 
             </ul>
          <p class="text-base  text-sky-900 dark:text-sky-500 mb-4 leading-relaxed">
            My name is Knox I am a web developer, this is my first website. I prefer Styling over back end, but I will do either. I am always seeking to learn, so if you have any tips or suggestions I would be happy to take you up on them.
          </p>
          
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