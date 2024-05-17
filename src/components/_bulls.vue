<template>
  <div id="app" class="flex min-h-screen text-white p-20 max-h">
    <!-- Sidebar -->
    <aside class="hidden sm:block flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800">
        <h1 class="text-2xl font-bold">Ziegler Bulls</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-sky-800 text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a class="block" href="#farming">Farming</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800 text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#cows" class="block">Cows</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800 text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#bulls" class="block">Bulls</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800 text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#family" class="block">The Ziegler Family</a>
          </li>
        </ul>
      </nav>
      <!-- Contact Info -->
      <div class="flex items-center justify-center h-16 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 rounded-b-3xl p-8">
        <p class="text-sm">Contact: robert_ziegler@hotmail.com</p>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <div class="flex flex-col items-center justify-center p-8">
        <div class= " pl- z-10 rounded-lg shadow-2xl px-8 space-y- text-center border-2 border-sky-900 dark:border-white bg-white dark:bg-gray-900">
          <h1 class=" pt-6 stext-5xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Ziegler Farms Bulls</h1>
          

          <a class="text-lg text-sky-500 dark:text-sky-200 mb-4 hover:underline hover:text-sky-500" href="https://www.piedmontese.com/?https://www.piedmontese.com/&gad_source=1&gclid=CjwKCAjwte-vBhBFEiwAQSv_xbhZG7d0zcC6qj9XyEuy8Auz-DCvRkQhiKMKV7DfTwCUsYfJT2jSKhoCMq8QAvD_BwE#AboutPiedmontese">Piedmontese.com</a>
          <div class="gallery-container grid grid-cols-2 gap-3">
            <div @click="toggleExpand" class="image-container flex justify-center items-center flex-col">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Joe</p>

              <img src="https://i.ibb.co/LdmK6NN/306-CBBD3-5608-41-A1-9-B6-D-A01-CA2985-B64.jpg" alt="" class="{ expanded: isExpanded } gallery-image">
              
 <div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            
            <div class="flex justify-center items-center flex-col">
            <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Fred</p>

              <img src="https://i.ibb.co/Dbkx4Jv/275-FD28-C-1523-490-D-BCE6-F51000-E66-FD8.jpg" alt="" class="gallery-image">
              
 <div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
            <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Big Red</p>

              <img src="https://i.ibb.co/JsnsxCS/38-DF599-B-4129-40-D4-808-C-7-F08-BE2-E7451.jpg" alt="" class="gallery-image">
<div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
             <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Rocky</p>

              <img src="https://i.ibb.co/37tGk6y/A63-D9-E43-08-A2-4-E0-E-A5-E3-80-CBE37-E6585-1-201-a.jpg" alt="" class="gallery-image">
 <div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
             <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Creed</p>

              <img src="https://i.ibb.co/v45BPKL/51-F1-B526-FC3-A-4-D15-B76-B-88352-CEFDE02.webp" alt="" class="gallery-image">
 <div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
             <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Allan</p>

              <img src="https://i.ibb.co/ZN0FQps/F7-C11659-BC38-4-DFC-BA37-BE5-CC37-F40-B7.webp" alt="" class="gallery-image">
<div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
             <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Bob</p>

              <img src="https://i.ibb.co/ZN0FQps/F7-C11659-BC38-4-DFC-BA37-BE5-CC37-F40-B7.webp" alt="" class="gallery-image">
<div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
               <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Timmy</p>
              <img src="https://i.ibb.co/ZN0FQps/F7-C11659-BC38-4-DFC-BA37-BE5-CC37-F40-B7.webp" alt="" class="gallery-image">
 <div class="gallery-container grid grid-cols-4 gap-">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">John</p>
              <img src="https://i.ibb.co/ZN0FQps/F7-C11659-BC38-4-DFC-BA37-BE5-CC37-F40-B7.webp" alt="" class="gallery-image">
             <div class="gallery-container grid grid-cols-4 gap- pb-8 ">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:  </p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:</p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">Bingo</p>
              <img src="https://i.ibb.co/ZN0FQps/F7-C11659-BC38-4-DFC-BA37-BE5-CC37-F40-B7.webp" alt="" class="gallery-image">
            
 <div class="gallery-container grid grid-cols-4 gap- pb-8">
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CED:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">BW:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">WW:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">YW:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SC:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">HP:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MILK:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">$EN:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">CLAW:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">ANGLE:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MARB:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">RE:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">SIRE:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">REG.NO:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">DOB:00</p>
              <p class= "border-gray-500 border-2 text-sky-900 dark:text-sky-500 text-center mt-2">MGS:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      imageUrl: 'your-image.jpg', // Put your image URL here
      altText: 'Image', // Alt text for accessibility
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};

</script>

<style scoped>
.image-container {
  text-align: center;
}

/* Ensure the image is initially scaled */
.expanded {
  width: 400px; /* Adjust to the desired expanded width */
  transition: width 0.5s; /* Smooth transition */
  cursor: pointer; /* Change cursor on hover */
}
.gallery-container {
  width: 120%;
}

.gallery-image {
  width: 100%; /* Adjust the width to your preference */
  height: auto;
  object-fit: cover;
}

.gallery-container > div {
  width: 60%;
}
</style>