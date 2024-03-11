<template>
  <body>
    <div id="app" class=" justify-center z-10 p-16 bg-white/30 backdrop-blur rounded-lg border-2 space-y-8 w-full h-full ">

      <div class="profile-section">
        <img class=" profile-picture" src="https://i.ibb.co/q1j7pY6/393-D52-C9-F471-42-DF-AD0-F-483-A5-CE492-D0.jpg" alt="Profile Picture">
        <h1>Contact Info</h1>
        <ul>
          <li>Robert Ziegler</li>
          <li>Email: robert_ziegler@hotmail.com</li>
          <li>Phone: (402 460 8812)</li>
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
  background: url('https://images.unsplash.com/photo-1565647952915-9644fcd446a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed;
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
  width: 100px; /* Adjust the width of your profile picture */
  height: 100px; /* Adjust the height of your profile picture */
  border-radius: 50%; /* Apply a circular border to the profile picture */
  margin-right: 20px; /* Add some space between the picture and the contact info */
}

.profile-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>