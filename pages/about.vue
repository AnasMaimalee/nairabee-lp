<template>
    <div>
      <div class="page-wrapper">
        <!-- First part -->
        <div class="first-part-content">
          <div class="left">
            <div>
              <span class="about">About Us</span> <br />
              Welcome to Nairabee, a fintech platform merging "Naira," Nigeria's currency, with "bee," symbolizing our commitment
              to Nigeria's financial landscape and a collaborative, community-driven approach. Nairabee represents financial
              empowerment and shared prosperity, providing innovative solutions for Nigeria's unique needs.
            </div>
            <div>
              Our mission is to facilitate financial inclusion and empower individuals to achieve their goals. Whether saving, investing,
              or managing finances, Nairabee supports users every step of the way. We aim to create a world where financial
              empowerment and shared prosperity converge, making a meaningful impact on lives across Nigeria. Join us on this
              journey toward a brighter financial future.
            </div>
          </div>
          <div class="right">
            <img src="/Asset 23.png" alt="">
          </div>
        </div>
        <!-- Second part 1 -->
        <div class="team-workers">
            <div class="eader">
                Meet Teams
            </div>
            <div class="spacer">

            </div>
        </div>

        <div class="second-part">            
            <div class="team-content">
            <div class="team-left">
              <img src="/Asset 34.png" alt="">
            </div>
            <div class="team-right">
              <p>Venture Analyst</p>
              <p>Fynn Brinkmann</p>
              <div class="social-icons">
                <nuxt-link :to="``"><img src="/Asset 15.png" alt=""></nuxt-link>
                <nuxt-link :to="``"><img src="/Asset 13.png" alt=""></nuxt-link>
              </div>
              <p>
                Fynn joined Fabric as a Venture Analyst in 2021 and focuses on investing in pre-seed and seed stage startups, research, and our
                incubation program Fabric X. Prior to Fabric, he worked in fintech consulting and product management (b2b marketplaces). He has
                been a Web3 user and investor since 2016. He holds a Bachelor's degree in Economics from the University of Milan.
              </p>
            </div>
          </div>
        </div>  

         <!-- Second part 2 -->
         <div class="second-part">
          <div class="team-content">
            <div class="team-left">
              <img src="/Asset 34.png" alt="">
            </div>
            <div class="team-right">
              <p>Venture Analyst</p>
              <p>Fynn Brinkmann</p>
              <div class="social-icons">
                <nuxt-link :to="``"><img src="/Asset 15.png" alt=""></nuxt-link>
                <nuxt-link :to="``"><img src="/Asset 13.png" alt=""></nuxt-link>
              </div>
              <p>
                Fynn joined Fabric as a Venture Analyst in 2021 and focuses on investing in pre-seed and seed stage startups, research, and our
                incubation program Fabric X. Prior to Fabric, he worked in fintech consulting and product management (b2b marketplaces). He has
                been a Web3 user and investor since 2016. He holds a Bachelor's degree in Economics from the University of Milan.
              </p>
            </div>
          </div>
        </div>  

      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import layout from "~/layout/layout-header.vue";
  import bottom from "~/layout/layout-bottom.vue";
  </script>
  
  <style>
  .page-wrapper {
    position: relative;
    display: grid;
    justify-content: space-around;
    background-image: url('/Asset 22.png');
    background-position: top right;
    background-size: 450px;
    background-repeat: no-repeat;
    font-family: Montserrat;
  }
  
  .first-part-content {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  .about {
    font-size: 2em;
    font-weight: bold;
  }
  
  .left {
    width: 50%;
    text-align: justify;
  }
  
  .left :last-child {
    margin-top: 20px;
  }
  
  .right {
    display: flex;
    justify-content: center;
  }
  
  .right img {
    width: 160px;
  }
  .team-workers{
    display: flex;
    flex: content;
    justify-content: space-between;
    width: 60%;
    margin-left: 130px;
    font-weight: bolder;
    font-size: 2em;
    margin-top: 20px;
  }
  .second-part {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .team-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
  }
  
  .team-left {
    width: 80%;
  }
  
  .team-left img {
    width:  80%;
  }
  
  .team-right {
    width: 70%;
    background-color: #fafbff;
    padding: 20px;
    border-radius: 10px;
  }
  .team-right img{
    width: 40px;
  }
  .team-right :nth-child(2){
    font-size: 2em;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  .team-right :last-child{
    margin-top: 30px;
    text-align: justify;
  }
  </style>
  