<template>


  <div>

    <div class="gallery-container flex w-full ">
      <img  class=" fixed inset-0 z-10 h-full w-full object-contain focus:outline-none" 
          src="https://i.ibb.co/rxJzwYj/IMG-1701.jpg" >
        
        
    
   </div>
   
    <div class="flex flex-col items-center w-full">
      <div id="app" class=" sm:w-   flex flex-col items-center min-h-screen  mt-96 "> <!-- Adjusted margin-top -->
        <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-100 dark:from-gray-900 dark:via-sky-900 dark:to-gray-800">
          <h1 class="text-5xl font-extrabold text-sky-900 dark:text-sky-300 ">Ziegler Farms</h1>
          <p class="text-lg text-sky-800 dark:text-gray-200">Welcome to Ziegler Farms, we are a Three generation farm out of Southeran Nebraska.   </p>
          <div class="gallery-container flex flex-wrap justify-center">
            <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="" alt="">
          </div>
        </div>
      </div>
      <div id="app" class=" sm:w-   flex flex-col items-center   "> <!-- Adjusted margin-top -->
        <div class="z-10 rounded-lg shadow-2xl  space-y- text-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 dark:from-gray-900 dark:via-sky-900 dark:to-gray-800">
          <p class="text-lg text-sky-900 dark:text-gray-200"> </p>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

export default {
}
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
}

.gallery-container img {
  flex-shrink: 0;
  max-width: 100%; /* Adjusted to fill the screen */
  height: 100vh; /* Adjusted to fill the screen */
  object-fit: cover; /* Maintain aspect ratio while filling the screen */
}

.container {
  position: relative;
  width: 100%;
  height: 100vh; /* Set height to match the screen height */
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10em;
  text-align: center;
}

.custom-font {
  font-family: 'Arial', sans-serif;
}
</style>