<template>
  <div id="app" class="rounded-2xl flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="z-10 p-12 bg-gray-800/50 backdrop-blur-md rounded-lg border-4 border-white shadow-2xl space-y-6 text-center">
      <h1 class="text-6xl font-extrabold text-blue-500">Any <span class="text-green-500">Questions?</span></h1>
      <a href="_contact.vue" class="px-8 py-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition duration-300 hover:shadow-xl mt-6 inline-block">
        Get Assistance
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Add any specific component styles here */

/* Custom Fonts (Add Google Fonts link in your HTML) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Additional Styling */
#app {
  background-size: cover;
}

</style>