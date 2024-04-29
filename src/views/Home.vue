<template>
  <div class="home">
    <h2 class="WebName">Home</h2>
    <h3 class="AboutHeader">About Us</h3>
    <p class="HeaderDescription">
      Welcome to ShopZone, your ultimate destination for all things tech, gaming, productivity, and adventure! At ShopZone, we're passionate about providing you with top-quality products and exceptional customer service to enhance every aspect of your life.
      Explore our vast selection of cutting-edge electronics, including smartphones, laptops, cameras, and smart home devices, designed to keep you connected and entertained. Dive into the latest video game releases, consoles, and gaming accessories to fuel your gaming passion and elevate your gaming experience.
      Need to boost productivity? Discover our comprehensive range of office supplies, from ergonomic furniture and stationery essentials to high-tech gadgets and software solutions, to optimize your workspace and unleash your creativity.
      For the outdoor enthusiasts and sports fanatics, gear up for your next adventure with our premium selection of outdoor equipment, camping gear, hiking essentials, and sports accessories. Whether you're hitting the trails, conquering the slopes, or enjoying a weekend getaway, we've got you covered with durable, performance-driven gear from trusted brands.
      Shop with confidence at ShopZone, where innovation meets convenience. With secure online transactions, fast shipping, and hassle-free returns, we're committed to delivering an exceptional shopping experience tailored to your needs. Join the ShopZone community today and embark on a journey of discovery, excitement, and endless possibilities!
    </p>
    <br>
    <h3 class="FeaturedHeader">Featured Items</h3>
    <!-- VideoGames Photo Gallery -->
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

.WebName {
  padding-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.HeaderDescription {
  padding-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.AboutHeader {
  padding-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.FeaturedHeader {
  padding-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

</style>
