<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <div class="nav-header">
        <div class="nav-heder-first-section">
            <div class="header-logo">
                <img src="/Asset 1.png" alt="" class="header-img">
            </div>
            <div class="nav">
                <nuxt-link :to="`/`">
                    <div class="nav-link">Home</div>
                </nuxt-link>
                <nuxt-link :to="`/service`">
                    <div class="nav-link">Services</div>
                </nuxt-link><nuxt-link :to="`/about`">
                    <div class="nav-link">About</div>
                </nuxt-link><nuxt-link :to="`/contact`">
                    <div class="nav-link">Contact</div>
                </nuxt-link>
                <nuxt-link :to="`/login`">
                    <div class="nav-link">Sign In</div>
                </nuxt-link>
            </div>
            <div class="nav-header-end-section">
                <nuxt-link :to="``" class="get-started-link">Get Started</nuxt-link>
            </div>
        </div>
      </div>
      <!-- page content -->
    </div>
  </template>
  
  <style scoped>
 
    .nav-header{
        font-family: Montserrat;
    }

    .nav-heder-first-section {
      display: flex;  
      justify-content: space-around;
      height: 70px;
      widows: 100%;
      padding: 10px;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    }
  
    .nav {
        display: flex;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Adjust minmax values as needed */
    }
    .nav .nav-link{
        display: block;
        padding: 5px 20px;
        border-radius: 8px;
        font-weight: bolder;
    }
    
    .nav-link:hover{
        background-color: #F17140;
        color: #FAFBFF;
    }
  
  .header-img{
    display: grid;
    width: 200px;
  }
  .get-started{
    margin-left: auto;    
  }
  .nav-header-end-section{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .get-started-link{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F17140;
    border: #F17140;
    color: #FAFBFF;
    padding: 5px 20px;
    font-weight: bold;
    border-radius: 5px;
    place-self: center stretch;
    flex-grow: 2;
    flex-shrink: 0;
    flex-basis: auto;
    /* width: 25%;
    max-width: 100%; */
  }
  .nav-links {
    display: flex;
    justify-content: space-between; /* Add space between elements */
}

.nav-link {
    /* Add styles for nav links */
    flex: 3 1 0;
}

/* Style for the Sign In link */
.nav-links nuxt-link:last-child {
    margin-left: 10px; /* Add left margin to the last child */
}


.nav-link {
      color: #383838;
    }
@media screen and (max-width: 480px) {
    .header-img{
        display: none;
    }
    .nav-header{
        /* width: 700px;/ */
    }
}
@import url('/style.css');
  </style>
  