<template>
  <div id="app" class="z-10 p-16 bg-white/60 backdrop-blur rounded-lg border-2 space-y-8 w-full h-full">
  <div>Hello Vue</div>
    <div class="scroll-container">
      <img class="p-40 flex flex-nowrap" src="https://breeds.okstate.edu/cattle/site-files/images/german-angus-moiled.jpg" alt="">
      <img class="p-40 flex flex-nowrap" src="https://twedtredangus.com/images/cows/STRA-Cherabel-305.jpg" alt="Big Red!">
       <img class="p-40 flex flex-nowrap" src="https://www.pinkgorillaevents.com/wp-content/uploads/2020/10/cow3.png" alt="Big Red!">
        <img class="p-40 flex flex-nowrap" src="https://images.squarespace-cdn.com/content/v1/5a51c81f4c326dee8c3fa76c/1516441855852-67W3Q6X22HUV56FS320O/Casey-Meek-tweeked-1-of-1.jpg" alt="Big Red!">
    </div>
    Hello
  </div>
</template>

<style>
.big-text {
  font-size: 60px; /* Adjust the value to set the desired font size */
}

.scroll-container {
  display: flex;
  overflow-x: auto; /* or overflow-x: scroll; */
  white-space: nowrap;
}
</style>