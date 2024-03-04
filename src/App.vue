<template>
 
   
  <div class="z-6 p-16 bg-white/80 backdrop-blur rounded-lg border-10 space-y-8 max-w-6xl">
    <a class=" justify-center px-40" style="font-size: 30px ; font-weight: 600;"> A CONFESSIONAL REFORMED BAPTIST CHURCH
    </a>
    <p class="text-2xl font-semibold" style="margin: auto;">   </p>  
      <nav class="flex justify-center space-x-4">
        <a style="color: rgb(32, 32, 144);" href="index.html" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-400 hover:text-slate-900">Home</a>
        <a style="color: rgb(32, 32, 144);" href="page2.html"  class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-400 hover:text-slate-900">Contact</a>
        <a style="color: rgb(32, 32, 144);" href="page3.html" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-400 hover:text-slate-900">About</a>
        <a style="color: rgb(32, 32, 144);" href="page2.html" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-400 hover:text-slate-900">Help</a>
        <a style="color: rgb(32, 32, 144);" href="page2.html" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-400 hover:text-slate-900">More</a>
        <a style="color: rgb(32, 32, 144);" href="page4.html" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-400 hover:text-slate-900">Location</a>
      </nav>  
    <p class="text-4xl font-semibold justify-center"></p>
      <a class=" px-80 p-50px justify-center"></a>
    <div style="font-size: 25px; background-color: rgb(250, 250, 250);color: rgb(1, 1, 8); border-radius: 7px;" class="block px-3 py-2">
      <p>U got it my guy noice</p>
    </div>
    <p class="text-4xl font-semibold justify-center"></p>
      <a class=" px-80 p-50px justify-center">Contact Info</a>
    <div class="z-6 p-16 bg-white/80 backdrop-blur rounded-lg 10 border-2 space-y-8 max-w-5xl">

      <p class="text-4xl font-semibold justify-center"></p>
      <a class="flex flex-col "> Phone:  (402) 767 0035</a>
      <a class="flex flex-col "> Email:  robert_ziegler@gmail.com</a>
 
       <img src="" alt="Profile Picture">
    </div>
</div>



      <nav class="flex justify-center space-x-4">
        <button :key="page" v-for="page in pages" @click="selectedPage = page" style="color: rgb(32, 32, 144);" href="index.html" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-400 hover:text-slate-900">{{ page }}</button>
      </nav>  
      <div class=" p-8" v-if="selectedPage == 'About'">

      </div>
      <div v-else-if="selectedPage == 'Contact'">
       <a href="page3.html"></a>
      </div>
      <div v-else-if="selectedPage == 'Home'">
        Contact Page
      </div>
      <div style="" v-else-if="selectedPage == 'Help'">
        
      </div>
      <div v-else-if="selectedPage == 'More'">
        Contact Page
      </div> 

  
</template>
<script>
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65ce73289131ed19d96d4018/1hmn73m20';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

export default {
  data() {
    return {
      selectedPage: 'about',
      clearInterval,
      pages: [
        'Home',
        'About',
        'Contact',
        'Help',
        'More'
      ]
    }
  },
  methods: {

  }
}


</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
