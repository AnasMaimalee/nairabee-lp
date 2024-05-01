<template>
  <div class="nav-header">
    <div class="top-header">
      <div class="nairabee-logo">
        <nuxt-link to="/"><img src="/Asset 1.png" alt=""></nuxt-link>
      </div>
      <div class="nav">
        <div class="left-nav">
          <ul>
            <li><nuxt-link to="/" class="nav-link">Home</nuxt-link></li>
            <li><nuxt-link to="/service" class="nav-link">Services</nuxt-link></li>
            <li><nuxt-link to="/about" class="nav-link">About</nuxt-link></li>
            <li><nuxt-link to="/contact" class="nav-link">Contact</nuxt-link></li>
            <li><nuxt-link to="/login" class="nav-link">Sign In</nuxt-link></li>
          </ul>
        </div>
        <div class="right-nav">
          <ul>
            <li><nuxt-link to="/service" class="nav-link">Get Started</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="mobile-nav">
        <button class="hamburger" @click="toggleMobileNav">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <nav class="nav-menu" v-if="isMobileNavOpen">
          <a href="#" class="top-header-nav">About</a>
          <a href="#" class="top-header-nav">Solutions</a>
          <a href="#" class="top-header-nav">Features</a>
          <a href="#" class="top-header-nav">Pricing</a>
          <a href="#" class="top-header-nav-last">Try Software <i class="bi bi-arrow-right"></i></a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileNavOpen = ref(false);

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};
</script>

<style scoped>

.nav-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  max-width: 100%;
  font-family: Montserrat;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1); /* Adjust the shadow values as needed */
}
.mobile-nav{
  display: none;
}
.toggle-nav-btn {
  display: none; /* Hide button by default */
}

.top-header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
}
.nairabee-logo {
  width: 15%;
}

.nairabee-logo img {
  width: 100%;
}

.nav {
  width: 75%;
  margin-top: 13px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
}

.left-nav ul {
  display: flex;
}

.left-nav {
  width: 60%;
}
.right-nav{
  width: 20%;
  text-align: center;
  color: white  ;
}
.right-nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.right-nav ul :last-child{
  background-color: #f17540 ;
  width: 100%;
  color: white;
  font-weight: bolder;
  border-radius: 8px;
  padding: 5px;
}
ul li {
  list-style-type: none;
}

.left-nav ul .nav-link{
  color: #383838;
  padding: 8px 20px

}

.left-nav ul .nav-link:hover{
  background-color: #f17540;
  color: white;
  border-radius: 4px;

}

@media screen and (max-width: 750px) {
  .nairabee-logo{
    width: 50%;
  }
}

@media only screen and (max-width: 370px) {
  /* Your mobile-specific CSS rules here */
.nav{
  display: none;
}
.mobile-nav{
  display: block;
  width: 100%;
  padding-left: 35px;
}

.hamburger{
        margin-right: -30px;
    }

}


</style>
