<template>

  <div class="" >
    
    <nav id="navbar" class=" bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 fixed left-0 w-full z-30 top-0 mb-5 p-1 text-lg transition-transform duration-300 transform">
      <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="text-white dark:text-sky-700 text-lg sm:text-xl md:text-3xl"><strong>DZ</strong></div>
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
           
            <!-- Mobile menu button-->
            <button @click="navOpen = !navOpen" type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
                Icon when the menu is closed.
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg v-if="!navOpen" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
                Icon when the menu is open.
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg v-else class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div v-if="navOpen" class="mt-56 px-8 sm:hidden p-4 rounded border absolute left-0 z-10 mt-2 w-48 origin-top bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            
  <router-link class="block px-4 py-2 text-sm text-gray-700" to="/contact" role="menuitem" tabindex="-1">Contact</router-link>
  <router-link class="block px-4 py-2 text-sm text-gray-700" to="/about" role="menuitem" tabindex="-1" id="user-menu-item-0">About</router-link>
  <router-link class="block px-4 py-2 text-sm text-gray-700" to="/more" role="menuitem" tabindex="-1" id="user-menu-item-1">More</router-link>
  <router-link class="block px-4 py-2 text-sm text-gray-700" to="/help" role="menuitem" tabindex="-1" id="user-menu-item-2">Help</router-link>
  <router-link class="block px-4 py-2 text-sm text-gray-700" to="/" role="menuitem" tabindex="-1" id="user-menu-item-3">Home</router-link>
</div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-20 px-80 ">
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
   <div class="pt-16 bg-gray-400 dark:bg-gray-800"><router-view  /></div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      selectedPage: 'about',
      pages: ['Home', 'About', 'Contact', 'More', 'Help', ]
    };
  },
  mounted() {
    
    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // Scroll up: Show the navbar
        navbar.style.transform = 'translateY(0)';
      } else {
        // Scroll down: Hide the navbar
        navbar.style.transform = `translateY(-${navbar.offsetHeight / 5}px)`;
      }
      prevScrollpos = currentScrollPos;
    };
    // Event listener to close navbar when clicked outside
    document.addEventListener('click', this.closeNavbarOnClickOutside);
  },
  beforeDestroy() {
    // Remove event listener to avoid memory leaks
    document.removeEventListener('click', this.closeNavbarOnClickOutside);
    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        // Scroll up: Show the navbar
        navbar.style.transform = 'translateY(0)';
      } else {
        // Scroll down: Hide the navbar
        navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
      }

      prevScrollpos = currentScrollPos;
    };
  }
};

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