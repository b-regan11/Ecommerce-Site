<template>
  <div class="home">
    <h1>ShopZone.com</h1>
    <br>    
    <h2>Home</h2>
    <p>Free shipping on millions of items. Get the best of Shopping and Entertainment. Enjoy low prices and great deals on the largest selection of stuff.</p>
    <p>Go to our Products page to find all of our products!</p>
    <br>
    <!-- Photo Gallery -->
    <div class="container">
      <div class="slider">
        <img id="img-1" src="../assets/ProductImages/VideoGames/PS5.jpg" alt="PS5">
        <img id="img-2" src="../assets/ProductImages/VideoGames/Quest3.jpg" alt="Meta Quest 3">
        <img id="img-3" src="../assets/ProductImages/VideoGames/Switch.jpg" alt="Switch">
        <img id="img-4" src="../assets/ProductImages/VideoGames/Xbox.jpg" alt="Xbox">
      </div>
      <div class="nav-button">
        <span class="dot active" @click="changeSlide(0)"></span>
        <span class="dot" @click="changeSlide(1)"></span>
        <span class="dot" @click="changeSlide(2)"></span>
        <span class="dot" @click="changeSlide(3)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  mounted() {
    var imgs = document.querySelectorAll('.slider img');
    var dots = document.querySelectorAll('.dot');
    var currentImg = 0; // index of the first image 
    const interval = 3000; // duration(speed) of the slide

    function changeSlide(n) {
      for (var i = 0; i < imgs.length; i++) { // reset
        imgs[i].style.opacity = 0;
        dots[i].classList.remove('active');
      }

      currentImg = n;

      imgs[currentImg].style.opacity = 1;
      dots[currentImg].classList.add('active');
    }

      var timer = setInterval(() => {
        changeSlide((currentImg + 1) % imgs.length);
      }, interval);

      this.changeSlide = changeSlide; // make changeSlide accessible in the template
  }
}



</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 100% of the viewport height */
}
.slider {
  width: 100%;
  max-width: 500px; /* adjust as needed */
  height: 510px;
  position: relative;
}

.slider img {
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
}

.slider img:first-child {
  z-index: 1;
}

.slider img:nth-child(2) {
  z-index: 0;
}

.slider img:nth-child(3) {
  z-index: 0;
}

.navigation-button {
  text-align: center;
  position: relative;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.active,
.dot:hover {
  background-color: #717171;
}

</style>
