<template>
  <div class="body-index">
     <layout />
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
            Revolutionize your finances with Nairabee, <br>
            the cutting-edge fintech app that simplifies <br>
            wealth management
          </div>
          <div class="services-main">
            <img src="/Asset 5.png" alt="" id="services-main">
          </div>
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
                <div>
                  <div class="second">
                    <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> 
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque <br>
                    harum inventore libero quas illo?
                </div>
              </div>

              <div class="second-right">
                  <div class="second">
                    <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                  </div>
                  <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> 
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque <br>
                    harum inventore libero quas illo?
                </div>
              </div> 
              
              <div class="second-right">
                  <div class="second">
                    <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                  </div>
                  <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> 
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque <br>
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
    <bottom />
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
.main{
  display: grid;
  justify-content: center;
  align-content: center;
  background-image: url('/Asset 3.png');
  background-size:400px ;
  background-repeat: no-repeat;
  background-position-x: right;
  font-family: Montserrat;

}
.main-body{
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
}
.left-main-top{
  font-size: 30px;
  line-height: 30px;
  font-weight: bolder;
}
.nairabee-main{
  margin-top: 20px;
}
#nairabee-main-logo{
  width: 400px;
}
.revolize{
  margin-top: 15px;
  font-size: 18px;
  line-height: 20px;
}
.main-body-content{
  margin-right: 50px;

}
#services-main{
  margin-top: 30px;
  width: 450px;
}
#main-right-top{
  width: 400px;
}
#main-right-top-img{
  width: 500px;
  display: block;
  align-items: flex-end;
  justify-content: right;
  align-items: right;
  margin-left: 60px;

}
/* second part  */
.second-part{
  justify-content: center;
  margin-top: 50px ;
}
.second-part-content{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.img-second{
  display: flex;
  align-items: start;
  margin-left: 90px;
}
#img-second{
  display: flex;
  align-self: flex-end;
  width: 300px;
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
  width: 450px;
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
}
.right-second{
  width: 500px;
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
  justify-content: center;
  align-items: center;
}
.first-chose-us, .second-chose-us, .third-chose-us {
  height: 400px;
  width: 250px;
  margin: 50px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 0px 9px rgba(0, 0, 0, 0.1); /* Adjust the values as needed */
}

.second-chose-us{
  background-color: #001130;
  color: white;
}

@media screen and (min-width: 601px) and (max-width: 900px) {
  .left-main-top {
    font-size: 24px; /* Decrease font size for smaller screens */
  }
  .main-body-content{
  margin-right: 10px;

}
#nairabee-main-logo{
  width:250px;
}
#services-main{
  width: 330px;
  
}
#main-right-top-img{
  width: 430px;
}
.main-body{
  margin-top: 60px ;

}
.second-right-header{
  font-size: 20px;
  font-weight: bolder;
  line-height: 100%;
}

.img-second{
  display: flex;
  align-items: start;
  margin-left: 10px;
}
.text-center{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}
.first-chose-us, .second-chose-us, .third-chose-us {
  margin: 30px;
}
}
</style>