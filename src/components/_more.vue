Here's your original code with the improvements included:

```html
<template>
  <div id="app" class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r  text-white p-8 max-w-1-0 max-w">
    <div class="z-10  backdrop-blur-md rounded-lg border-4 border-white shadow-2xl p-8 space-y-6 text-center bg-sky-100 dark:bg-gray-900">
      <div class="flex justify-center">
        <img width="300" height="300" src="https://i.ibb.co/pxTPVJw/Photo-on-3-28-24-at-3-28-PM.png" alt="road-closure"/> 
      </div>
      <h1 class="text-5xl font-extrabold text-blue-500">Sorry, this page is </h1>
      <h1 class="text-5xl font-extrabold text-blue-500">currently Empty!</h1>

      <div class="scroll-container">
      </div>
      
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300" @click="goBack">Go Back</button>
      
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300" @click="talkToDeveloper">Talk To Developer</button>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // Implement your go back logic here
    },
    talkToDeveloper() {
      // Implement your talk to developer logic here
      alert("You Just donated $100,000 to Ziegler Farms. Thanks");
    }
  }
}
</script>

<style scoped>
/* Add any specific component styles here */
</style>
```

This code combines your original template with the additional buttons and methods for going back and talking to the developer. These methods can be further expanded to include the desired functionality.