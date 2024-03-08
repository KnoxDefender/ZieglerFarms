<template>
  <div id="app" class="z-10 p-16 bg-white/ backdrop-blur rounded-lg border-2 space-y-8 w-full h-full">
    <div class="scroll-container">
      <img  class="p-10" src="https://breeds.okstate.edu/cattle/site-files/images/german-angus-moiled.jpg" alt="">
      <img class="p-10" src="https://i.ibb.co/LdmK6NN/206-CBBD3-5608-41-A1-9-B6-D-A01-CA2985-B64.jpg" alt="Big Red!">
      <img class="p-10" src="https://i.ibb.co/Dbkx4Jv/275-FD28-C-1523-490-D-BCE6-F51000-E66-FD8.jpg" alt="Big Red!">
      <img class="p-10" src="https://i.ibb.co/JsnsxCS/38-DF599-B-4129-40-D4-808-C-7-F08-BE2-E7451.jpg" alt="Big Red!">
      <img class="p-10" src="https://i.ibb.co/vPQ5FN6/98520-F5-D-F05-A-4-AA8-9217-58-C40-F24-BDFE-1-201-a.jpg" alt="Big Red!">
    </div>
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
  max-width: 700px; /* Adjust the value to set the maximum width of the container */
  margin: 0 auto; /* Center the container */
}

.scroll-container img {
  max-height: 800px; /* Adjust the value to set the maximum height of the images */
}
</style>