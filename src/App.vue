<template>
 
   <div>


<nav class="bg-gradient-to-r from-gray-500 via-orange-400 to-gray-900 fixed left-0 w-full z-50 top-0 mb-7 p-5 text-lg">
  <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-20 p-10">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link to="/" class="text-gray-300 hover:bg-gradient-to-r from-gray-700 via-gray-400 to-gray-600 rounded-md px-3 py-2 text-sm font-medium ">Home</router-link>
            <router-link to="contact" class="text-gray-300 hover:bg-gradient-to-r from-gray-700 via-gray-400 to-gray-600 rounded-md px-3 py-2 text-sm font-medium ">Contact</router-link>
            <router-link to="about" class="text-gray-300 hover:bg-gradient-to-r from-gray-700 via-gray-400 to-gray-600 rounded-md px-3 py-2 text-sm font-medium ">About</router-link>
            <router-link to="more" class="text-gray-300 hover:bg-gradient-to-r from-gray-700 via-gray-400 to-gray-600 rounded-md px-3 py-2 text-sm font-medium ">More</router-link>
            <router-link to="help" class="text-gray-300 hover:bg-gradient-to-r from-gray-700 via-gray-400 to-gray-600 rounded-md px-3 py-2 text-sm font-medium ">Help</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
      <router-view />
   
   </div>
  
</template>


<script>
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
 var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
 s1.async=true;
 s1.src='https://embed.tawk.to/65ce73289131ed19d96d4018/1hmn73m20';
 s1.charset='UTF-8';
 s1.setAttribute('crossorigin','*');
 s0.parentNode.insertBefore(s1,s0);
 })();

export default {
  data() {
    return {
      selectedPage: 'about',
      // clearInterval,
      pages: [
        'Home',
        'About',
        'Contact',
        'More',
        'Help',
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
