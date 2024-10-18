<template>


  <div>
    
    <nav id="navbar" class=" pb-1 bg-gradient-to-r from-gray-700 via-gray-300 to-gray-100 dark:from-gray-900 dark:via-sky-900 dark:to-gray-800 fixed left-0 w-full z-20 top-0 mb-5 p-1 texyarn t-lg transition-transform duration-300 transform">
       <div class="flex content">
    </div>
      <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <a class="hover:border-gray-900" href="#login">
                 <img class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFklEQVR4nO2Za0xbZRjHCS9zyTI/DDKnWYwjwYiEZU7NNqfTBSMyTZxhSsYog9ILhQGFRWciMSG6xMTEfdJFUaOA3AqMtvRCC6W0lMsugJMhDqMZgwHjKo6LwPBv3nOgtmuh7YEWP/RN/kk/nfP7ved5nvecNCDAv/zLv/zrf7lITusbJLu1n2S3wftpXSMt/UTaesxzAa/Bt3oeacttDgKbCJztGB8KbAww8Y2Ad2CJYwltlIDrm+3Ka0dU2S3wzFMQdcwj5eocYusncKDgdwR/dM1tYPJAOAq4v0sP5bQgWtaHnJ4lZHUvIb3rPsQ/LSClYx6nr/6NU5fn8G7zDPZ/9xu2ZDe7BCbrF/AAPtuCk/VjOPvrP6vCx7XMItYyjeOme3ihrA9bMs1ugXtfIMuCaNktt+HfNP6F1+unEP5lN0hm0+YL7Mq1rFk2zuBf1U/iZc04tr9n3GSBTDOiins9hn9FO4EX1ePYc6ETJMPkQ4EHLyzRgWea4AR/UDmGiMI/mGs4Ajc7hJuAq50RqSBqn+ME/5x8FHvL7zDXcAa8fgF3alOoBP/yDCf4fVV3EVE6ACJUbK5ArH6EE3xkxTBC83vdELAw8Y6ASIUD+dc5wYeXDWHneXqNGqfAdDzbxjsCEh2CpTXMCespfFjxHWyVVINItE6BSVaTXTZQwGa3MhpB+JXYf7HDM/iSQYR8bAFJrgA5Y3SAtYae1svhKOC6uYhYg6CkEhwquuk2/KN0/vOK2AlkhbUHto+Ji4Ab8DT0BkIFghKLEH6hjTlh1yqbkDwTSEIBSEo1+wRXAbaGHnQZXhNYrldaBgI5AhOKsF1cgj2fmhHxfS/2lg8gorQfoV/1YGdeA7am/IhABv4SSLphVVg2jXbZAAHn08FaAvRGtCSSZQhMKETgyW8RGJfPhv6m4EnlzOglGUaXwGQldHPOGLkIuAC2azab+k2vZyH5VSxwUhnT6My8T6tzAWy0AtungYOAu8A09OYUPFXDznUKmyJn63wlAjkrJlaDpOkZKLIGsF3SOQk4H2f2aQRJ04GIVQgSKLA7twGHv+nCCe0QEsyTEFybQ/KVWbxjGEeMYgDPfNGJR87pEUSFqExqrSPsMjAbgzWeC7iaDvTCdIQKFHjyfBMSG8cg/WUJGTfuI61rEanXFyHsXAC/nX1P4l2ZQ3zbLOJaZhCtHMQTnzQhiDYzfWISvR3sf6kHSaOp4yrgbELQXa9jdnCHVI0EwwjzNeYu/AnLNN42T+Mt0z28JOvDw+lKtrxStcuwLLA1VE6i5yCwWrMtw4fmNSLr53nO8PTUjjFM4ah6FCHndGzTizVWYOY7gSaVppaLgJNxRuEFCjz+oQHZ3Yvrhn+t7k9E6SZxRDWKHWc17KuFSM32xkrEWiaeCzibDEIlQqQqSG8sbBj80doJHNFM4OClYWwTV4EkV7JPwjYiNVcBm8lAG5ZfhXj98IbDH1axrx7hX/eA8IrZcqJPgokKRKjiImAzzmhjCeSI/KzZa/DPy0fxbPUIgt/XgiSWggiUIEJ6ptQwvz0XsB1n9PBJkoHXMOJV+H1VdxGWfxMkvoAtJYGCTYqCg4DtOBPIsfuDWq/DR1YM4+nyYWxLrQThlSyf5mw8F5Do+5lxRidBsgyHLnb4BP6p0iGE5BpAThWC8KtXBDj8wSHSHSNi7W2miU6X4riizyfwYSWDeOzzDpD4H0CSqxh4IlDEeCzgX/7lX/4V4Iv1L/ZBfUR1dgxwAAAAAElFTkSuQmCC">       
          <a class="text-sky-300" href="">Login</a>
         </a> 
         <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Content of your div here -->
            <!-- Mobile menu button-->
            <button @click="navOpen = !navOpen" type="button" class="relative inline-flex items-center justify-center left-80 rounded-md p-2 text-gray-400 hover:bg-sky-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open main menu</span>
              <!-- Icon when the menu is closed. Menu open: "hidden", Menu closed: "block" -->
              <svg v-if="!navOpen" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Icon when the menu is open. Menu open: "block", Menu closed: "hidden" -->
              <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div v-if="navOpen" class="px-8 sm:hidden p-4 rounded  absolute right-4 top-16 z-10 w-48 origin-top  ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <div class="w-full h-screen fixed z-10 top-0 left-0 bg-sky-900 py-1 shadow-lg ring-1 ring-black max-w-40" @click="navOpen = false">  
              <router-link class=" rounded bg-sky-900 block px-4 py-2 text-sm text-sky-200" to="/" role="menuitem" tabindex="-1" id="user-menu-item-3">Home</router-link>              
              <router-link class="rounded bg-sky-900 block px-4 py-2 text-sm text-sky-200 " to="/contact" role="menuitem" tabindex="-1">Contact</router-link>
              <router-link class="rounded bg-sky-900 block px-4 py-2 text-sm text-sky-200" to="/about" role="menuitem " tabindex="-1" id="user-menu-item-0">About</router-link>
              <router-link class="rounded bg-sky-900 block px-4 py-2 text-sm text-sky-200" to="/more" role="menuitem" tabindex="-1" id="user-menu-item-1">More</router-link>
              <router-link class="rounded bg-sky-900 block px-4 py-2 text-sm text-sky-200" to="/help" role="menuitem" tabindex="-1" id="user-menu-item-2">Help</router-link>    

            </div>
          </div>

          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-20 px-80 ">
                <!-- Current: "bg-gray-900 text-white", Default: "text-sky-900 dark:text-gray-100 hover:bg-gray-700 hover:text-white" -->
                <router-link to="/" class="hover:rotate-scale h-8 w-15 text-sky-900 dark:text-gray-100 hover:dark:text-sky-100 hover:dark:bg-sky-700 hover:bg-sky-300 rounded-md px-3 py-2 text-sm font-medium hover:text-sky-900">Home</router-link>
                <router-link to="contact" class="hover:rotate-scale h-8 w-15 text-sky-900 dark:text-gray-100 hover:dark:text-sky-100 hover:dark:bg-sky-700 hover:bg-sky-300 rounded-md px-3 py-2 text-sm font-medium hover:text-sky-900"> Contact</router-link>                
                <router-link to="more" class="hover:rotate-scale h-8 w-15 text-sky-900 dark:text-gray-100 hover:dark:text-sky-100 hover:dark:bg-sky-700 hover:bg-sky-300  rounded-md px-3 py-2 text-sm font-medium  hover:text-sky-900">More</router-link>
                <router-link to="help" class="hover:rotate-scale h-8 w-15 text-sky-900 dark:text-gray-100 hover:dark:text-sky-100 hover:dark:bg-sky-700 hover:bg-sky-300  rounded-md px-3 py-2 text-sm font-medium hover:text-sky-900">Help</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Content Section -->
    <div class="pt-16 bg-gray-400 dark:bg-gray-800">
      <router-view  />
    </div>

    <!-- Hidden content below Contact router link -->
    <div v-if="contactContentVisible" class="px-8 sm:hidden p-4 rounded  absolute right-4 top-16 z-10 w-48 origin-top  ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
      <!-- Content here -->
    </div>
  </div>
</template>

<script>

import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)


export default {
  data() {
    
    return {
      
      navOpen: false,
      selectedPage: 'about',
      pages: ['Home', 'About', 'Contact', 'More', 'Help', 'Cows'],
      contactContentVisible: false // Added data property
    };
  },
  methods: {
    
    toggleContent() {
      this.contactContentVisible = !this.contactContentVisible; // Updated method
      this.navOpen = false; // Close the mobile menu
    },
    closeNavbarOnClickOutside(event) {
      // Method to close navbar when clicked outside
      const navbar = document.getElementById('navbar');
      if (!navbar.contains(event.target)) {
        this.navOpen = false;
      }
    }
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

@keyframes rotateScale {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(20deg) scale(1.1); /* Rotate by 15 degrees and scale up by 1.1 */
  }
}

/* Apply the animation on hover */
.hover\:rotate-scale:hover {
  animation: rotateScale 0.3s ease-in-out forwards; /* Smooth 0.3s animation */
}
</style>