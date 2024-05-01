<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

  <div class="body-index">
    <div class="main">
      <div class="main-body">

        <div class="main-body-content">
          <div class="left-main-top">
            Enter The Financial <br> Cosmos With
          </div>
          <div class="nairabee-main">
            <img src="/Asset 6.png" alt="" id="nairabee-main-logo">
          </div>
          <div class="revolize">
            Revolutionize your finances with Nairabee, 
            the cutting-edge fintech app that simplifies  
            wealth management
          </div>
          <div class="services-main">
            <img src="/Asset 5.png" alt="" id="services-main">
          </div>
          <div class="spacer"></div>
        </div>

        <div class="main-right-top">
          <img src="/Asset 2.png" alt="" id="main-right-top-img">
        </div>
      </div>
    </div>

    <!-- second part  -->
    <div class="second-part">
      <div class="second-part-content">

        <div class="img-second">
            <img src="/Asset 7.png" alt="" id="img-second">
        </div>

        <div class="right-second">
            <div class="second-right-header">
              Take <span class="control">
                Control of Everything
              </span> <br>
              in Your Hands.
            </div>

            <div class="second-right-body">
              Lorem ipsum, dolor sit amet consectetur  adipisicing elit. Ipsa unde sapiente eos
               temporibus sunt ex dolore voluptates aperiam illo laudantium delectus quia itaque
                dolores incidunt eum nobis,  repellat asperiores possimus tempore adipisci! Blanditiis
            </div>

            <div class="second-right-activity">
              <div class="second-right">
                <div class="second">
                  <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque 
                    harum inventore libero quas illo?
                </div>
              </div>

              <div class="second-right">
                  <div class="second">
                    <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                  </div>
                  <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque 
                    harum inventore libero quas illo?
                </div>
              </div> 
              
              <div class="second-right">
                  <div class="second">
                    <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                  </div>
                  <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque 
                    harum inventore libero quas illo?
                </div>
              </div>

            </div>
          </div>
      </div>
    </div>

    <!-- why choose us  -->

    <div class="choose-us-part">
      <div class="header-part">
        <div class="text-center">
            Why Choose Us
        </div>
        <div class="why-choose-us-body">
            <div class="first-chose-us">
              <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptates.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium accusamus, doloremque quibusdam quidem exercitationem consectetur distinctio veniam magnam quae in, dolorem suscipit eos soluta, molestiae corrupti ea officiis. Libero voluptates blanditiis nam sequi laudantium placeat ducimus, reiciendis facilis odio, ipsa quae facere illo ipsam repudiandae asperiores fugit quasi. Quos, voluptas. -->
           </div>
            <div class="second-chose-us">
              <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptates.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium accusamus, doloremque quibusdam quidem exercitationem consectetur distinctio veniam magnam quae in, dolorem suscipit eos soluta, molestiae corrupti ea officiis. Libero voluptates blanditiis nam sequi laudantium placeat ducimus, reiciendis facilis odio, ipsa quae facere illo ipsam repudiandae asperiores fugit quasi. Quos, voluptas. -->
            </div>

            <div class="third-chose-us">
              <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptates. -->
              <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium accusamus, doloremque quibusdam quidem exercitationem consectetur distinctio veniam magnam quae in, dolorem suscipit eos soluta, molestiae corrupti ea officiis. Libero voluptates blanditiis nam sequi laudantium placeat ducimus, reiciendis facilis odio, ipsa quae facere illo ipsam repudiandae asperiores fugit quasi. Quos, voluptas. -->
            </div>
        </div>
      </div>
    </div>

  <div>
  </div>
  </div>
  </div>  
</template>

<script setup lang="ts">
import Vue from 'vue'
import layout from '~/layout/layout-header.vue';
import bottom from '~/layout/layout-bottom.vue'
</script>
<style scoped>
  
.body-index{
  /* height: 1200px; */
  font-family: Montserrat;
}
.main {
  display: grid;
  justify-content: space-around;
  align-content: center;
  background-image: url('/Asset 3.png');
  background-size: 400px; /* Adjust background size as needed */
  background-repeat: no-repeat;
  background-position-x: right;
  font-family: Montserrat;
  width: 100%;
}

.main-body {
  width: 80%;
  display: flex;
  justify-content: space-around; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  align-content: center;
  margin: 80px auto;
  /* margin-left: 5%; */
  max-width: 100%; /* Set a maximum width to prevent content from stretching too wide */
  padding: 0 20px; /* Add padding for better spacing */
  box-sizing: border-box; /* Include padding in the width calculation */
}
.main-body-content{
  display: grid;
  align-items: center;
  width: 50%;
}
.main-right-top{
  width: 50%;
  min-width: 45%;
}
.left-main-top{
  font-size: 30px;
  line-height: 30px;
  font-weight: bolder;
}
.nairabee-main{
  margin-top: 20px;
  width: 80%;
}
#nairabee-main-logo{
  width: 95%;
  max-width: 100%;
}
.revolize{
  width: 75%;
  max-width: 90%;
  margin-top: 15px;
  font-size: 18px;
  line-height: 20px;
  text-align: justify;
}
.services-main{
  width: 80%;
}
#services-main{
  margin-top: 30px;
  width: 95%;
  max-width: 100%;
}
#main-right-top{
  width: 90%;
}
#main-right-top-img{
  width:100%;
  max-width: 120%;

}
/* second part  */
.second-part{
  justify-content: center;
  margin-top: 50px ;
}
.second-part-content{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-second{
  display: flex;
  width: 50%;
  align-items: start;
}
#img-second{
  display: flex;
  align-self: flex-end;
  width: 60%;
  max-width: 70%;
}
#second-right-activity-img{
  width: 70px;
  background-color: #FAFBFF;
  padding:10px ;
  border-radius: 8px;
}
.second-right{
  display: flex;
  align-content: center;
  text-align: justify;
  width: 90%;
}

.second-right-header{
  font-size: 30px;
  font-weight: bolder;
  line-height: 100%;
}

.control{
  color:  #F17140;
}

.second-right-body{
  margin-top: 20px;
  display: flex;
  text-align: justify;
}
.right-second{
  width: 50%;
  text-align: justify;

}
.second-right-activity{
  display: grid;
  justify-content: space-between;
}
.second-right{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;
}

.second{
  margin-right: 20px;
  
}
 

/* why  */

.text-center{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: -10px;
}
.choose-us-part{
  height: auto;
  /* background-image: url('/Asset 17.png'); */
  background-size:400px ;
  background-repeat: no-repeat;
  background-position-x: center center;

}
.why-choose-us-body{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 50px auto;
}
.first-chose-us, .second-chose-us, .third-chose-us {
  height: 400px;
  width: 25%;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 0px 9px rgba(0, 0, 0, 0.1); /* Adjust the values as needed */
}

.second-chose-us{
  background-color: #001130;
  color: white;
}

</style>