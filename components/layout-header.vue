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
      <button class="hamburger" @click="toggleMobileNav">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <nav class="nav-menu" v-if="isMobileNavOpen">
        <ul>
          <li @click="closeMbileNav"><nuxt-link to="/" class="nav-link" @click="closeMbileNav">Home</nuxt-link></li>
          <li @click="closeMbileNav"><nuxt-link to="/service" class="nav-link"
              @click="closeMbileNav">Services</nuxt-link></li>
          <li @click="closeMbileNav"><nuxt-link to="/about" class="nav-link" @click="closeMbileNav">About</nuxt-link>
          </li>
          <li @click="closeMbileNav"><nuxt-link to="/contact" class="nav-link"
              @click="closeMbileNav">Contact</nuxt-link></li>
          <li @click="closeMbileNav"><nuxt-link to="/login" class="nav-link" @click="closeMbileNav">Sign In</nuxt-link>
          </li>
        </ul>
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
}

const closeMbileNav = () => {
  console.log("close")
  isMobileNavOpen.value = false
}
</script>

<style scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  font-family: Montserrat;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  /* Increased shadow values */
}

.mobile-nav {
  display: none;
}

.toggle-nav-btn {
  display: none;
  /* Hide button by default */
}

.top-header{
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nairabee-logo {
  /* width: 25%; */
}

.nairabee-logo img {
  /* width: 50px; */
  height: 30px;
  /* width: 50%;
  max-width: 70%; */
}

/* Styles for navigation menu */
.nav-menu {
  display: none;
  /* Additional styles for positioning the menu below the hamburger button */
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  z-index: 999;
  /* Add a higher z-index value */
}

/* Show navigation menu when isMobileNavOpen is true */
.nav-menu.show {
  display: block;
}


.nav {
  /* width: 65%; */
  /* margin-top: 13px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-nav ul {
  display: flex;
}

.left-nav {
  /* width: 60%; */
}

.right-nav {
  /* width: 30%; */
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
}

.right-nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

}

.right-nav ul :last-child {
  background-color: #f17540;
  
  color: white;
  font-weight: bolder;
  border-radius: 8px;
  padding: 5px 10px;
}

ul li {
  list-style-type: none;
}

.left-nav ul .nav-link {
  color: #383838;
  padding: 8px 20px
}

.left-nav ul .nav-link:hover {
  background-color: #f17540;
  color: white;
  border-radius: 4px;

}


@media only screen and (max-width: 830px) {

  .nav {
    display: none;
  }

  .top-header {
    /* width: 100%; */
    justify-content: space-between;
  }

  .nairabee-logo {
    /* width: 55%; */
  }

  .nairabee-logo img {
    width: 100%;
  }

  .mobile-nav {
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }

  /* Styles for hamburger button */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 20px;
    cursor: pointer;
    border: #f17540;
    border: 1px solid #f17540;
    background-color: white;
    border: none;
    background-color: transparent;
  }

  .bar {
    width: 100%;
    height: 3px;
    background-color: #f17540;
  }

  /* Styles for navigation menu */
  .nav-menu {
    display: grid;
    /* Additional styles for positioning the menu below the hamburger button */
    position: absolute;
    width: 100%;
    top: 40px;
    color: white;
    background: white;
    color: white;
    border: 1px solid #f17540;
  }

  .nav-link {
    margin-top: 10px;
    color: #383838;
    padding: 5px;
  }

  .nuxt-link:hover {
    background-color: #f17540;
  }

  /* Show navigation menu when isMobileNavOpen is true */
  .nav-menu.show {
    display: block;
  }

  .nav-menu ul {
    margin: 10px -10px;
  }

  .nav-menu ul li {
    line-height: 25px;
  }

  .nav-menu ul li:hover {
    background-color: #f17540;
  }

  .nav-header {
    height: 40px;
  }
}
</style>
