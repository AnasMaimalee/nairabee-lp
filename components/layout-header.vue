<template>
  <div>
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
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
      </div>
    </div>
    <nav class="nav-menu" :class="{ 'show': isMobileNavOpen }">
      <div>
        <ul>
          <li @click="closeMobileNav"><nuxt-link to="/" class="nav-link">Home</nuxt-link></li>
          <li @click="closeMobileNav"><nuxt-link to="/service" class="nav-link">Services</nuxt-link></li>
          <li @click="closeMobileNav"><nuxt-link to="/about" class="nav-link">About</nuxt-link></li>
          <li @click="closeMobileNav"><nuxt-link to="/contact" class="nav-link">Contact</nuxt-link></li>
          <li @click="closeMobileNav"><nuxt-link to="/login" class="nav-link">Sign In</nuxt-link></li>
          <li @click="closeMobileNav"><nuxt-link to="/register" class="nav-link">Get Started</nuxt-link></li>
        </ul>
      </div>
    </nav>

    <!-- Scroll to Top Button -->
    <button v-if="showScrollToTop" class="scroll-to-top" @click="scrollToTop">
      <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.801 511.801" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z"></path> <path d="M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z"></path> </g> </g> </g> </g></svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const whatsappLink = 'https://wa.me/1234567890?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.';
const isMobileNavOpen = ref(false);
const showScrollToTop = ref(false);

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
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
  top: 40px;
  left: -100%;
  /* Initially hide the menu off the screen */
  width: 100%;
  height: 100vh;
  color: white;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  align-content: start;
  transition: left 0.7s ease;
  /* Add transition for the 'left' property */
}

.nav-menu.show {
  left: 0;
  /* Slide the menu into view */
}

.nav-link {
  font-size: 15px;
}

.nav-menu ul {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: -15px;
  justify-content: start;
  gap: 20px;
}

.nav-menu ul .nav-link {
  margin-top: 10px;
  color: white;
  padding: 5px;
}

@media only screen and (max-width: 873px) {
  .nav-header {
    height: 40px;
  }

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
    display: grid;
    width: 100%;

  }
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f17540;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease; /* Add transition for smooth effect */
}

.scroll-to-top:hover {
  background-color: #e8641b; /* Optional color change on hover */
  transform: scale(0.9); /* Shrink the button */
}


.scroll-to-top:hover {
  background-color: #e8641b;
}
</style>
