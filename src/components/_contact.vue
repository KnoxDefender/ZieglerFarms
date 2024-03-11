<template>
  <body>
    <div id="app" class="justify-center z-10 p-16  rounded-lg border-2 space-y-8 w-full h-full">

      <div class="profile-section">
        <img class="profile-picture" src="https://i.ibb.co/FhsZhGw/Screen-Shot-2024-03-11-at-3-45-43-PM.png" alt="Profile Picture">
        <h1 class="text-4xl font-bold text-indigo-500 mb-4">Robert Ziegler</h1>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2">Robert Ziegler</li>
          <li class="mb-2">Email: robert_ziegler@hotmail.com</li>
          <li>Phone: (402 460 8812)</li>
        </ul>
      </div>
      <div class="profile-section">
        <img class="profile-picture" src="https://i.ibb.co/GM7KqGf/Screen-Shot-2024-03-11-at-3-48-57-PM.png" alt="Profile Picture">
        <h1 class="text-4xl font-bold text-indigo-500 mb-4">Scott Zoegler</h1>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2">Scott Ziegler</li>
          <li class="mb-2">Email: robert_ziegler@hotmail.com</li>
          <li>Phone: (+1 (402) 469-0764)</li>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
export default {

}
</script>

<style>
body {
  background: url('https://encycolorpedia.com/192130.png') no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  padding-left: 50;
  padding-right: 50;
  padding-bottom: 0;
  display: flex;
  align-items: left;
  justify-content: center;
  height: 700vh;
  margin: 0;
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

/* Fun styling */
#app {
  transition: background 0.5s ease-in-out;
}

#app:hover {
  background: url('https://encycolorpedia.com/E9B000.png') no-repeat center center fixed;
  background-size: cover;
}
</style>
