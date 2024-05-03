<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

  <div class="body-index">
    <div class="main">
      <div class="main-body">
        <div class="main-body-content">

          <div class="cosmos">
            Enter The Financial Cosmos With 
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
    <div class="home-second-part">
      <div class="home-second-part-content">

        <div class="home-img-second">
            <img src="/Asset 7.png" alt="" id="home-img-second">
        </div>

        <div class="home-right-second">
            <div class="home-second-right-header">
              Take <span class="control">
                Control of Everything
              </span> <br>
              in Your Hands.
            </div>

            <div class="home-second-right-body">
            Nairabee is your one-stop platform for all your essential
             services. From purchasing airtime and data bundles to 
             subscribing to TV services and paying electricity bills,
              Nairabee simplifies your life by offering convenient access
               to all these services in one place. With Nairabee,
                managing your everyday needs has been easier.
              </div>

            <div class="second-right-activity">
              <div class="second-right">
                <div class="second">
                  <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                </div>
                <div class="last">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque 
                    harum inventore libero quas illo?
                </div>
              </div>

              <div class="second-right">
                  <div class="second">
                    <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                  </div>
                  <div class="last">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Nulla doloribus obcaecati autem excepturi ipsam, doloremque 
                    harum inventore libero quas illo?
                </div>
              </div> 
              
              <div class="second-right">
                  <div class="second">
                    <img src="/Asset 36.png" alt="" id="second-right-activity-img">
                  </div>
                  <div class="last">
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
            <p>Convenience</p>
            <p> Nairabee offers a seamless and convenient solution for accessing essential services such as airtime, data bundles, TV subscriptions, and electricity payments all in one place. This saves customers valuable time and effort by eliminating the need to visit multiple platforms or physical locations.
</p>
          </div>
          <div class="second-chose-us">
            <p>Reliability</p>
            <p> Nairabee's commitment to providing standard services ensures reliability and consistency for its customers. With Nairabee, customers can trust that their transactions will be processed efficiently and securely, giving them peace of mind in their everyday transactions.
</p>
          </div>

          <div class="third-chose-us">
            <p>Accessibility</p>
            <p> Nairabee's user-friendly interface and accessible services make it easy for customers of all backgrounds to navigate and utilize its platform. Whether accessing services via the web or mobile app, Nairabee ensures accessibility for all, fostering inclusivity and broadening its customer base.
Certainly!</p>
          </div>

          
        </div>
      </div>
    </div>

    <!-- mobile why choose us  -->

        <div class="mobile-choose-us">
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <LeftCircleOutlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <RightCircleOutlined />
              </div>
            </template>
            <div>
              <span class="crosal-header">Accessibility</span>  <br> <br>
             Nairabee's user-friendly interface and accessible services make it easy for customers of all backgrounds to navigate and utilize its platform. Whether accessing services via the web or mobile app, Nairabee ensures accessibility for all, fostering inclusivity and broadening its customer base.
Certainly!
            </div>
            <div>
              <span class="crosal-header">Convenience</span>   <br> <br>
            Nairabee offers a seamless and convenient solution for accessing essential services such as airtime, data bundles, TV subscriptions, and electricity payments all in one place. This saves customers valuable time and effort by eliminating the need to visit multiple platforms or physical locations.
</div>
            <div>
              <span class="crosal-header">Accessibility</span>   <br> <br>
             Nairabee's user-friendly interface and accessible services make it easy for customers of all backgrounds to navigate and utilize its platform. Whether accessing services via the web or mobile app, Nairabee ensures accessibility for all, fostering inclusivity and broadening its customer base.
Certainly!</div>
          </a-carousel>
        </div>

  </div>
  </div>  
</template>

<script setup lang="ts">
</script>

<style scoped>
  
.body-index{
  /* height: 1200px; */
  font-family: Montserrat;
}
.main {
  display: grid;
  justify-content: space-around;
  background-image: url('/Asset 3.png');
  background-size: 400px; /* Adjust background size as needed */
  background-repeat: no-repeat;
  background-position-x: right;
  font-family: Montserrat;
  width: 100%;
}

.main-body {
  width: 85%;
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
  width: 70%;
}
.main-body-content .cosmos{
  font-size: 30px;
}
.main-right-top{
  width: 40%;
  min-width: 45%;
}
.home-main-top{
  width: 100%;
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
.home-second-part{
  width: 80%;
  margin: 0px auto;

}
 
.home-second-part-content{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.home-img-second{
  width: 60%;
}
.home-right-second{
  width: 55%;
}
#home-img-second{
  width: 60%;
  }



.second-right{
  display:flex ;
}

.home-right-second{
  font-size: 17px;
}

.home-second-right-header{
  font-size: 35px;
  font-weight: bolder;
}
.control{
  color: #f17540;
}
.home-second-right-body{
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: justify;
}

.second-right{
  display: flex;
  justify-content: space-between;
  text-align: justify;
  margin: 10px;
}

.second{
  width: 20%;
  background-color: #FAFBFF;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 10px;
}
.last{
  width: 75%;
}


/* why  */
.mobile-choose-us{
  display: none;
}
.text-center{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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
.why-choose-us-body p{
  font-size: 15px;
}
.first-chose-us, .second-chose-us, .third-chose-us {
  width: 25%;
  height: 300px;
  text-align: justify;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 0px 9px rgba(0, 0, 0, 0.1); /* Adjust the values as needed */
}
.first-chose-us :first-child, .second-chose-us :first-child, .third-chose-us :first-child {
  font-size: 18px;
  font-weight: bolder;
}
.second-chose-us{
  background-color: #001130;
  color: white;
}

@media screen and (max-width: 370px) {
  .main{
    background-image: url('/Asset 3.png');
    background-size: 180px;
  }
  .main-body{
    margin-top: 30px;
    display: flex;
    width: 92%;
  }
  .main-body-content{
    width: 50%;
  }
  .main-body-content :first-child{
    font-size: 10px;
    width: 80%;
    line-height: 10px;
  }
  #nairabee-main-logo{
    width: 100px;
  }
  .nairabee-main{
    margin-top: -5px;
  }

  #main-right-top-img{
    margin-top: 30px;
    width: 400px;
  }
  .revolize{
    margin-top: 10px;
    font-size: 8px;
    line-height: 10px;
  }
  .services-main{
    margin-top: -20px;
  }

  /* //second */

  .home-right-second{
  font-size: 10px;
  margin-top: -70px;
}

.home-second-right-header{
  font-size: 9px;
  line-height: 20px;
  font-weight: bolder;
  width: 150%;
}
  .home-second-part-content{
    display: grid;
  }
  .home-second-right-body{
    margin-top: 10px;
    width: 170%;
    text-align: justify;
  }
  .home-img-second{
    display: none;
  }
  .second-right-activity{
    display: grid;
    width: 180%;
  }

  /* why */
.why-choose-us-body{
  width: 80%;
  display: none;

}
.text-center{
  font-size: 10px;
}
.first-chose-us, .second-chose-us, .third-chose-us {
  width: 100%;
  margin-bottom: 20px;
}
.second-part-content{
  display: grid;
}
/* .why-choose-us-body  */
.mobile-choose-us{
  display: block;
}
.crosal-header{
  font-size: 15px;
  font-weight: bolder;
  margin-bottom: 10px;
}
:deep(.slick-slide) {
  text-align: center;
  line-height: 15px;
  background: #FAFBFF;
  overflow: hidden;
  color: #383838;
  top: 10px;
  padding: 10px;
  margin-top: 20px;
  text-align: justify;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #f17540;
  background-color:#f17540;
  transition: ease all 0.3s;
  opacity: 0.5;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #f17540 ;
  opacity: 0.3;
}

:deep(.slick-slide h3) {
  color: #f17540;
}
}

</style>