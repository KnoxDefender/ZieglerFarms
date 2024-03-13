<template>
  <div id="app" class="flex flex-col items-center justify-center min-h-screen p-8  max-w-20px  bg-white dark:bg-black">
    <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center">
      <h1 class="text-5xl font-extrabold text-blue-600">Ziegler Farms!</h1>
      <p class="text-lg text-blue-500">Nestled in the heart of Nebraska, Ziegler Farms stands as a proud symbol of agricultural resilience, spanning four generations of steadfast commitment to the fertile plains of the region. With roots deeply embedded in the rich soil of Nebraska, the Ziegler family has cultivated not just crops but a legacy of sustainable farming practices and the responsible stewardship of their cherished cattle. This enduring connection to the land and the thriving tradition of cattle ranching underscores Ziegler Farms' role as a beacon of Nebraska's agricultural heritage, blending the past with a sustainable future.</p>

      <div class="gallery-container flex flex-wrap justify-center">
        <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="https://breeds.okstate.edu/cattle/site-files/images/german-angus-moiled.jpg" alt="Futuristic Image 1">
        <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="https://i.ibb.co/LdmK6NN/306-CBBD3-5608-41-A1-9-B6-D-A01-CA2985-B64.jpg" alt="Futuristic Image 2">
        <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="https://i.ibb.co/Dbkx4Jv/275-FD28-C-1523-490-D-BCE6-F51000-E66-FD8.jpg" alt="Futuristic Image 3">
        <img class="p-4 max-w-md h-auto object-cover mx-4 my-4" src="https://i.ibb.co/JsnsxCS/38-DF599-B-4129-40-D4-808-C-7-F08-BE2-E7451.jpg" alt="Futuristic Image 4">
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
}

.gallery-container img {
  flex-shrink: 0;
  max-width: calc(50% - 8px);
  box-sizing: border-box;
}
</style>