<template>
  <div id="app" class="flex min-h-screen text-white p-8 ">
    <!-- Sidebar -->
    <aside class="hidden sm:block flex-col bg-sky-100 dark:bg-sky-900 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-sky-700 via-blue-600 to-sky-900 dark:from-gray-900 dark:via-sky-800 dark:to-gray-800 ">
               <img class="hidden sm:block" width="90" height="90" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>

        <h1 class="text-2xl font-bold">Scott Ziegler</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-sky-700 text-sky-900 dark:text-sky-500 hover:text-sky-200">
           <a class="block" href="#robert">Robert Ziegler</a>       
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#scott" class="block">Scott Ziegler</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 hover:text-sky-200">
            <a href="#knox" class="block">Developer</a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-sky-500 ">
            <a href="#ziegler" class="block">The Ziegler Family</a>
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
      <div class=" flex flex-col items-center justify-center p-8">

      <div class="  z-10 backdrop-blur-md rounded-lg border-2  border-sky-900 dark:border-white shadow-md  space-y-6 text-center bg-white dark:bg-gray-900 flex flex-col items-center justify-center ">
       <a class=" pr-48 " href="#contact">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE30lEQVR4nO2Y2VNbZRjGT9mLbdhCIRAom6VsymId/RMcrzs6eq2djo4zXun0JjMKtNoOFcoSlhYobcEg2JZFWQQke0gCCQlJA4WSEATCCdgZR9JqH+dLO9XaTk+Scwg3PH/B7/nO+73fcx6K2te+9sVaJyUILTHSbxcZNs8U6V09RboNc8HUurtAs/4gX7X2IE+15j6uWDXlyp09uZPOMzlSx1sUEELttd6YpdOKZ93nio30yusGGq9Nb6JI70KhdgOFUxsoUK8jX7WGPMVvOC5fRa50FccmnXh1YgXZY3ZH9qj9bM64Qxh08GLb/cRSs7uxZJb2FBtp+AufM+5A9i8OZI/akTm87Mkcutdw7LaVHxT4Msv2ByVmN11icoMtfNbwMjKH7iHjpyUcHVjcFPYtvb974FqEl1m2m0vNW+AcfnAJ6f2LSOu7C+GteXFZozacY3hndOnc1uDuwy8g9eYCBL22AcFtZzRH8AgPJnxK7zxSemxI7raO5EtMEewNBGVsFp6BF/xwB8kSK5K6rA2s4Est2x/uGfz3VhzptIDfaX4vIPgTc78nlJjcrr2ET7wxB36HmT50PYAV693zbOBH7ezhr5mR0GFGfJupzi/4IsOmkM0jlTVoQ0bPNDL7bezh202IazV64tpN6T4beBIPAoPvt+Jz1V04//AgXaJnD982i9grRsS0GM76Rg+EFBtpR6DwnyoW8PDRIxCldek4gY+9bACv2bBCSSShjPwkVXIB7zXQqeMEPqbZAF7TDHgN028yGiCROBD4T/4HTyS8oeMM/rB4Gofq9V8yG9C7ermAJ0rtUCPl2hQEHVNIbtcguU2NpFY1jlxWIbFFBX6TEvxmFfhXjczwDXpE1+m6GQ0U6jZM/l7Yv14A76uUzi3Ei5WM8K/U6XGwVmdkNqBdp9mevL+KrZUywkfX6hBVo3UxG9Csexjhh5fw7sgcq5P/r2IuTTLCH6zRIuo7zQ6jgQLVuocpHmQNLeKdITNnBng1vzLDV08hskrNbCBPtUb7km0ybppxWjrPyQjxqieY4S9qEFGlZh4h0h74GszSe034TLbA6kvIHW7wqqWM8JFVGkScVzNf4lzZaq8/qVLYbcSpiTt4+PfzJhIbpeA3KpAgliO+Xoa4epn3wpKZJ2PDq554DC/WM8NfUCPsWyXzGiW9jb+ROKXLiFNjz5sg8D4/Ug0vhw8/r0LYN8ovGA2Q0imQPC+4PoOPRy3PmCAnzyE8wirlJ3wKczljdnsgPyNJV/X4aORfE2RsuIIPPadcpkQ+tnmkMQv0ZySxVYfToxbY7/+JuHo5V/A4UCGv9AneO0bjDuGTxiygPJ9wRfsYvkXHCXxIhWKHKlekUv6I1H3sfgNnuYGvVJDTv0T5K+HP9vijg0suLvN8QPDlsk1KNB5Yb0q6yj2Fr5CDKpeeDAj+qYlb8+I9g/9KVkuxlgShKT22H4MPL+2nRONh7A1QFEWKVkG3dSBo8F/L+iiRlpty96kateGkqwzK2Ig4OvkXiXSVCR0mF/fbRr7B+sL6qsPtcwmk7otrM+5w8UgdIHtepIingq34tulU0pjxmmbs/sMr7N544O8LuysSIYSUTqS3IdUHaQ+iarR0VLXGE3lR7Yms0tARF9QGkudJJPamSl+D2b72tS/qZfoHU3X9llIi3LoAAAAASUVORK5CYII=">
        </a>
       <h1 class="text-4xl font-extrabold text-sky-900 dark:text-sky-500 mb-4">Scott Ziegler</h1>
       <img src="https://i.ibb.co/YXg1KQ6/Screen-Shot-2024-04-05-at-12-07-51-PM.png" alt="Knox Ziegler" class="rounded-full w-24 h-24 object-cover border-4 border-sky-900 dark:border-white">
       <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail"/>
       <a href="" class="hover:text-sky-300 hover:underline text-sky-900 dark:text-sky-500 mb-4">Email:Scottziegler56@gmail.com</a>
       <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/phone.png" alt="phone"/>
       <a href="tel:4024690764" class="hover:text-sky-300 hover:underline text-sky-900 dark:text-sky-500 mb-4">Phone:(402) 469-0764
       </a>
  
                    
         

        <div class="text-base  text-sky-900 dark:text-sky-500 mb-4 leading-relaxed h-100 w-100">
          Scott is the Ceo. He is also 2nd Generation Farmer and rancher who co-owns the farm with his son Robert.
        </div>
        
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvwDlPSxPqSgTCBjXwNPzCXXznPZlDfhGcDWVvxqjPqCdqcKrmKCCtjZNlDRnKvRLtBrL" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-sky-700 via-sky-500  to-sky-800 transition duration-300 mt-4">Contact</a>
      </div>
      </div>
    </main> 
  </div>

</template>

<style scoped>
.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Add border-radius to images for a nicer look */
}


</style>
