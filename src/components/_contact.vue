<template class=" " >
  <div  class=" ">
    <div id="app" class="justify-center z-10 p-16 rounded-lg border-2 space-y-8 w-full h-full min-h-screen bg-gradient-to-r; ">
      <div class="profile-section">
        <img class="profile-picture" src="https://i.ibb.co/FhsZhGw/Screen-Shot-2024-03-11-at-3-45-43-PM.png" alt="Profile Picture">
        <h1 class="text-4xl font-bold text-indigo-500 mb-4">Robert Ziegler</h1>
        <ul class="text-lg text-blue-500 list-disc list-inside">
          <li class="mb-2">Robert Ziegler</li>
          <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnrLGnVnMmNsqSsRdkzLQJwTqDGWKbWsTFRzpWGckNcjqbSJHLqTdwQpSvHgMvJPgSgLq" class="mb-2; hover:underline ">Email: robert_ziegler@hotmail.com</a>
         </li> 
         <li><a href="tel:2705272957" class="hover:underline">Phone: (402 460 8812)</a>
        </li>
        </ul>
      </div>
      <div class="profile-section">
        <img class="profile-picture" src="https://i.ibb.co/GM7KqGf/Screen-Shot-2024-03-11-at-3-48-57-PM.png" alt="Profile Picture">
        <h1 class="text-4xl font-bold text-indigo-500 mb-4">Scott Ziegler</h1>
        <ul class="text-lg text-blue-500 list-disc list-inside">
          <li class="mb-2">Scott Ziegler</li>
          <a href="mailto:robert_ziegler@hotmail.com”?subject=Contact Solid Rock"></a>
          <a href="tel:2705272957" class="hover:underline">Phone: (402 469-0764)</a>
        </ul>
      </div>
            <div class="profile-section">
        <img class="profile-picture" src="https://i.ibb.co/2qg36Nw/Screen-Shot-2024-03-19-at-4-11-29-PM.png" alt="Profile Picture">
        <h1 class="text-4xl font-bold text-indigo-500 mb-4">Knox Ziegler</h1>
        <ul class="text-lg text-blue-500 list-disc list-inside">
          <li class="mb-2">Web Developer/Designer</li>
         <li> <a class="hover:underline" href="knoxdefenderbender@gmail.com”?subject=Contact Solid Rock">Email:knoxdefenderbender@gmail.com</a>
         </li> 
      <a href="https://github.com/KnoxDefender" class="px-8 py-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-800 transition duration-300 hover:shadow-xl mt-6 inline-block">
      GitHub
      </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  background-size: cover;
  margin: 0;
  padding: 0 50px 0 50px; /* Added shorthand notation for padding */
  display: flex;
  align-items: flex-start; /* Changed align-items property value */
  justify-content: center;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>