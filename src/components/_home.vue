<template>
  <div>
    <div class="gallery-container flex w-full ">
      <img  class=" fixed inset-0 z-10 h-full w-full object-contain focus:outline-none" 
          src="https://images.pexels.com/photos/129539/pexels-photo-129539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" >
        
        
    
   </div>
    <div class="flex flex-col items-center w-full">
      <div id="app" class=" sm:w-   flex flex-col items-center min-h-screen  mt-96 "> <!-- Adjusted margin-top -->
        <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 dark:from-gray-900 dark:via-sky-900 dark:to-gray-800">
          <h1 class="text-5xl font-extrabold text-sky-900 dark:text-sky-300 ">Ziegler Farms</h1>
          <p class="text-lg text-sky-900 dark:text-gray-200">Welcome to Ziegler The Farms Ministry!  We would like to bless you in any way we can. We will Mowe weed wack move things drive you to your destination...you name it we will do our best to bless you in whatever way we can.  </p>
          <div class="gallery-container flex flex-wrap justify-center">
            <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="https://i.ibb.co/VBSbZCL/6975-FF88-58-FF-46-F9-A80-E-E8-B8-E6684-D6-B-1-201-a.jpg" alt="Bull">
          </div>
        </div>
      </div>
      <div id="app" class=" sm:w-   flex flex-col items-center   "> <!-- Adjusted margin-top -->
        <div class="z-10 rounded-lg shadow-2xl  space-y- text-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 dark:from-gray-900 dark:via-sky-900 dark:to-gray-800">
          <p class="text-lg text-sky-900 dark:text-gray-200">Welcome to Ziegler The Farms Ministry!  We would like to bless you in any way we can. We will Mowe weed wack move things drive you to your destination...you name it we will do our best to bless you in whatever way we can.  </p>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
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