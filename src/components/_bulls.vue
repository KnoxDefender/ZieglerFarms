<template>
  <div id="app" class="flex min-h-screen text-white p-8 max-h">
    <!-- Sidebar -->
    <aside class="flex flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
        <h1 class="text-2xl font-bold">Ziegler Farms</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 border-2 border-gray-900 rounded-lg hover:text-sky-200">
           <a class="block" href="#">Farming</a>       
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg hover:text-sky-200">
            <a href="#cows" class="block">Cows</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg hover:text-sky-200">
            <a href="#bulls" class="block">Bulls</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500  border-gray-900 rounded-lg hover:text-sky-200">
            <a href="#" class="block">The Ziegler Family</a>
          </li>
        </ul>
      </nav>
      <!-- Contact Info -->
      <div class="flex items-center justify-center h-16 bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800  rounded-b-3xl p-8 ">
        <p class="text-sm">Contact: robert_ziegler@hotmail.com</p>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <div class="flex flex-col items-center justify-center p-8">
        <div class="z-10 rounded-lg shadow-2xl p-8 space-y- text-center  border-2 border-sky-900 dark:border-white bg-white dark:bg-gray-900 ">
          <h1 class="text-5xl font-extrabold  text-sky-900 dark:text-sky-500 mb-4">Ziegler Farms Bulls</h1>
          <p class="text-lg  text-sky-900 dark:text-sky-500 mb-4">Our Bulls aren't just any Bulls, They're Piedmontese Bulls. What are Piedmontese Bulls? Piedmontese is a type of Cattle originating in Italy. Piedmontese cattle are known for their unique muscular build and double-muscled appearance, which is a result of a natural genetic mutation called "double muscling" or "myostatin gene mutation." This mutation causes increased muscle development and reduced fat content in the animal's body. When Castrated these steers make for some really good steak!
          </p>
          <h1 class="text-5xl font-extrabold  text-sky-900 dark:text-sky-500 mb-4">The Process</h1>
          <p class="text-lg  text-sky-900 dark:text-sky-500 mb-4">After the calf is born, we tag it. Then a few months later, we round up all the cows and separate them from their calves. At this stage we run them through a shoot. In the shoot, we give them shots, and castrate the male calves. After that is done, they are returned to the cows, and loaded into trailers to go out to pasture. After a few more months when they are able to eat hay, we wean them.(witch is taking them off the cow's milk) they are put in a lot where they are fed hay corn and pellets. They are also supplied with salt, mineral, and water. Around Christmas they are sold to a Piedmontese Beef company, where they are turned into steak, ground beef and more.</p>
         <a  class="text-lg  text-sky-500 dark:text-sky-200 mb-4 hover:underline hover:text-sky-500" href="https://www.piedmontese.com/?https://www.piedmontese.com/&gad_source=1&gclid=CjwKCAjwte-vBhBFEiwAQSv_xbhZG7d0zcC6qj9XyEuy8Auz-DCvRkQhiKMKV7DfTwCUsYfJT2jSKhoCMq8QAvD_BwE#AboutPiedmontese">Piedmontese.com</a>
          <div class="gallery-container grid grid-cols-3 gap-4">
            <img src="https://i.ibb.co/LdmK6NN/306-CBBD3-5608-41-A1-9-B6-D-A01-CA2985-B64.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/Dbkx4Jv/275-FD28-C-1523-490-D-BCE6-F51000-E66-FD8.jpg" alt="" class="gallery-image">
            <img src="https://i.ibb.co/JsnsxCS/38-DF599-B-4129-40-D4-808-C-7-F08-BE2-E7451.jpg" alt="" class="gallery-image">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.gallery-container {
  width: 100%;
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
