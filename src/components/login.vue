<template>

  <div id="app" class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-sky-800 to-gray-900 text-white p-8">
    <div class="z-10 backdrop-blur-md rounded-lg border-4 border-white shadow-2xl p-8 space-y-6 text-center bg-gray-100 dark:bg-gray-900">
      <h1 class="text-5xl font-extrabold text-blue-500">Login </h1>
      <p class="text-gray-500 text-lg">Please log in to continue</p>

      <form class="flex flex-col space-y-4">
        <div class="flex flex-col">
          <label for="email" class=" text-gray-500 text-lg">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" class="rounded-lg py-2 px-4 border focus:outline-none focus:ring-2 focus:ring-blue-400">
        </div>

        <div class="flex flex-col">
          <label for="password" class=" text-gray-500 text-lg">Password</label>
          <input type="password" id="password" name="password" placeholder="Your Password" class="rounded-lg py-2 px-4 border focus:outline-none focus:ring-2 focus:ring-blue-400">
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300">Log In</button>
      </form>

      <p class=" text-gray-500 text-lg">Don't have an account? <a href="#signup" class="text-blue-500 hover:underline">Sign Up</a></p>
    </div>
  </div>
</template>

<style scoped>
/* Add any specific component styles here */
</style>


