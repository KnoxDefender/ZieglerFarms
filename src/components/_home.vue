<template>
  <div>
    <div class="gallery-container flex w-full ">
      <video preload="none" class="absolute inset-0 z-10 h-full w-full object-contain focus:outline-none" poster="" loop autoplay muted>
        <source src="https://videos.pexels.com/video-files/1649831/1649831-hd_1920_1080_30fps.mp4" type="video/mp4">
        
        
      </video>
    </div>
    <div id="app" class="flex flex-col items-center justify-center min-h-screen p-8 mt-96"> <!-- Adjusted margin-top -->
      <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center bg-sky-100 dark:bg-sky-900">
        <h1 class="text-5xl font-extrabold text-sky-900 dark:text-sky-300 ">Ziegler Farms</h1>
        <p class="text-lg text-sky-900 dark:text-gray-200">Nestled in the heart of Nebraska, Ziegler Farms stands as a proud symbol of agricultural resilience, spanning four generations of steadfast commitment to the fertile plains of the region. With roots deeply embedded in the rich soil of Nebraska, the Ziegler family has cultivated not just crops but a legacy of sustainable farming practices and the responsible stewardship of their cherished cattle. This enduring connection to the land and the thriving tradition of cattle ranching underscores Ziegler Farms' role as a beacon of Nebraska's agricultural heritage, blending the past with a sustainable future.</p>
        <div class="gallery-container flex flex-wrap justify-center">
          <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="https://i.ibb.co/mFQFThF/FB223175-D286-4-B24-88-AB-02-B5764807-CF-1-201-a.jpg" alt="Bull">
          <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="" alt="">
        </div>
      </div>
    </div>
    <div id="app" class="flex flex-col items-center justify-center min-h-screen p-8">
      <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center bg-gray-100 dark:bg-sky-900">
        <h1 class="text-5xl font-extrabold text-gray-400 dark:text-gray-300 ">Ziegler Farming</h1>
        <p class="text-lg text-gray-400 dark:text-gray-200">We take pride, not only in our cattle, but in our crops. We grow Corn, Soy Beans, Wheat, and Rie. </p>
        <div class="gallery-container flex flex-wrap justify-center">
          <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="" alt="">
          <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="" alt="">
          <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="https://i.ibb.co/DDYr5b2/4-A422-C71-61-D5-415-A-A7-CF-D419-E210-EC56.jpg" alt="">
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