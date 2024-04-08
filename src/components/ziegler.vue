<template>
  <div id="app" class="flex min-h-screen text-white p-8 max-h">
    <!-- Sidebar -->
    <aside class="hidden sm:block flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center  rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
               <img class="hidden sm:block" width="90" height="90" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>

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
            <a href="#ziegler" class="block">The Ziegler Family</a>
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
        <div class="z-10 backdrop-blur-md rounded-lg border-2   border-sky-900 dark:border-white shadow-md  space-y-6 text-center bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
        <a href="#contact" class=" sm:hidden   bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVR4nO2ZW4hNURjHf8dl5vAwMkwKRfEgTClmlAdSypCmUC7Jw1BoyiXTxAOhlEskI4lC8uD2QEJRk/LAiJLyoPBAqQkj90suR1/9T612+3Aue5/OGvtfq/Za/7XO+v7r2/tb31oHEiRIkKC3IwXsAV4B4/FYxEEgo7KIXiAi46OQFNAh478CT3wUkgqIaALOqd4CDI65pOISgSOkHOUHcAOYGrUIwyrgDfAZ+A68dcp7jfmouvHfcvR1yy/gg1P/DXxSe0Zjm0sVYaF2bUi/k0BboM36XQaqgVFAt1bzNLAhx3xjNccg1RcCz4ARwAvgrGyxxaspxROjgW0h/V4DQwPt/ZznS8BGoD/QA9TmmLPeCRxVEj8F2A2cUvst2bQsXyH7c7xOYRjyD76ugL4usouzExim5x2ya3u+P9KjARcLiBh1Wsk4sUl2mZfyQpO8YYMO5SnGPv4G4kWbbNpXyCBXzHHgJjA/JgPbgZVAWt+Bffiup6freb3sseyCYsXcA2ZqompFFWu7H0F5B3QCF7Q/uRgOzNVzq2w5XMxquWJsL5in9mw4jLpsUUi3iBX2+lqfY8UICYrp0DeT3dk3A5NLLI3A3oCYdIgdLeJPFCskTMz5GJLGp/rNcTn45eJtYyUqMV9iEHJXv2keCqJDm6/xZ6KYzBVTTiF9lCFkFBSIWsyCMggZKS776lnaExlmKAzmncCV6JF6Zx+5QoXjb0IMK8Rfx1MhtcBVnW8y2jy9FFIDLAVmibfswutXa5r423gi5FoOMQ1O3ueFkE5gYAg/SfwDPHq1UiH8RPGP8ETIAeBOgLMkcqv4x3gipBuYIK/0FTdAZ5eMdngvhMxWvVlnEHRqbBT/HI/Db7tz8fcSj4WknahlF3leChkjbzwUb9ep3nqkyklRLOfyOkVJOzegXghZBywGVut2cRdwxLnw+EmFoyvPK6OKD7/mgS4dnGz1j+qe166c1gBLgDn6qyFBggT/K/4AucJKui0zR/AAAAAASUVORK5CYII=">

        </a>
         <h1 class="text-4xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Knox Ziegler</h1>
          <!-- Profile Picture -->
          <img src="https://i.ibb.co/7SMv5JN/5-EF40-A5-E-0-AA6-49-A6-925-D-1-E78-A86-E1-AC2.jpg" alt="Knox Ziegler" class=" object-cover border-4 border-sky-900 dark:border-white">
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