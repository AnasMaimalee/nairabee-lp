
<template>
  <div class="nav-header">
    <div class="top-header">
      <div class="nairabee-logo">
        <nuxt-link to="/"><img src="/Asset 1.png" alt="Logo"></nuxt-link>
      </div>
      <div class="nav">
        <div class="left-nav">
          <ul>
            <li><nuxt-link to="/" class="nav-link">Home</nuxt-link></li>
            <li><nuxt-link to="/service" class="nav-link">Services</nuxt-link></li>
            <li><nuxt-link to="/about" class="nav-link">About</nuxt-link></li>
            <li><nuxt-link to="/contact" class="nav-link">Contact</nuxt-link></li>
          </ul>
        </div>
        <div class="right-nav">
          <ul>
            <li><nuxt-link to="/login" class="nav-link">Sign In</nuxt-link></li>
            <li><nuxt-link to="/register" class="nav-link">Get Started</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="mobile-nav">
        <div class="hamburger" @click="toggleMobileNav" :class="{ 'change': isMobileNavOpen }">
          <div class="bar1" :class="{ 'change': isMobileNavOpen }"></div>
          <div class="bar2" :class="{ 'change': isMobileNavOpen }"></div>
          <div class="bar3" :class="{ 'change': isMobileNavOpen }"></div>
        </div>
        <nav class="nav-menu" :class="{ 'show': isMobileNavOpen }">
          <div>
            <ul>
              <li @click="closeMobileNav"><nuxt-link to="/" class="nav-link">Home</nuxt-link></li>
              <li @click="closeMobileNav"><nuxt-link to="/service" class="nav-link">Services</nuxt-link></li>
              <li @click="closeMobileNav"><nuxt-link to="/about" class="nav-link">About</nuxt-link></li>
              <li @click="closeMobileNav"><nuxt-link to="/contact" class="nav-link">Contact</nuxt-link></li>
              <li @click="closeMobileNav"><nuxt-link to="/login" class="nav-link">Sign In</nuxt-link></li>
            </ul>
          </div>
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

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};
</script>
<style scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  top: 0;
  overflow: hidden;
  width: 100%;
  font-family: Montserrat;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  background-color: white;
  z-index: 1000;
}

.mobile-nav {
  display: none;
}

.top-header {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nairabee-logo img {
  height: 30px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-nav ul {
  display: flex;
}

.right-nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.right-nav ul .nav-link {
  background-color: #f17540;
  color: white;
  font-weight: bolder;
  border-radius: 4px;
  padding: 5px 10px;
}

.right-nav ul .nav-link:hover {
  background-color: white;
  color: #f17540;
  font-weight: bolder;
  border-radius: 4px;
  border: 1px solid #f17540;
}

.left-nav ul .nav-link {
  color: #383838;
  padding: 8px 20px;
}

.left-nav ul .nav-link:hover {
  background-color: #f17540;
  color: white;
  border-radius: 4px;
}

ul li {
  list-style-type: none;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 40px;
  height: 3px;
  background-color: #f17540;
  transition: 0.4s;
  margin: 3px 0;
}

.change .bar1 {
  transform: translate(0, 9px) rotate(-45deg);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  transform: translate(0, -9px) rotate(45deg);
}

.nav-menu {
  display: none;
  position: fixed;
  background-color: #f17540;
  top: 50px;
  left: -100%; /* Initially hide the menu off the screen */
  width: 100%;
  height: 100vh;
  color: white;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  transition: left 0.3s ease; /* Add transition for the 'left' property */
}

.nav-menu.show {
  left: 0; /* Slide the menu into view */
}

.nav-menu ul {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
}

.nav-menu ul .nav-link {
  margin-top: 10px;
  color: white;
  padding: 5px;
}

@media only screen and (max-width: 830px) {
  .nav {
    display: none;
  }

  .mobile-nav {
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }

  .hamburger {
    display: flex;
  }

  .nav-menu {
    display: flex;
  }
}
</style>
