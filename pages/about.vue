<template>
    <div>
        <layout />
        <div class="main">
            <div class="top-page-content">
                <div class="left-main">
                    <div class="main-header">
                        About Us
                    </div>
                    <div class="main-content">
                        <div class="main-content-part">
                            Welcome to Nairabee, a fintech platform merging "Naira,"
                            Nigeria's currency, with "bee," symbolizing our commitment
                            to Nigeria's financial landscape and a collaborative,
                            community-driven approach. Nairabee represents financial
                            empowerment and shared prosperity, providing innovative
                            solutions for Nigeria's unique needs.
                        </div>
                        <div class="main-content-part">
                            Our mission is to facilitate financial inclusion and empower
                            individuals to achieve their goals. Whether saving, investing,
                            or managing finances, Nairabee supports users every step
                            of the way. We aim to create a world where financial
                            empowerment and shared prosperity converge, making a
                            meaningful impact on lives across Nigeria. Join us on this
                            journey toward a brighter financial future.
                
                        </div>
                    </div>
                </div>
                <div class="right-main">
                    <img src="/Asset 23.png" alt="" class="rignt-main-img">
                </div>
            </div>

            <div class="team">

            </div>
        </div>

        <!-- bottom  -->
        <bottom />
</div>
</template>
<script setup lang="ts">
import layout from "~/layout/layout-header.vue";
import bottom from "~/layout/layout-bottom.vue";
</script>

<style scoped>
.main{
    display: flex;
    justify-content: space-around;
    background-image: url('/Asset 22.png');
    background-size: 800px;
    background-repeat: no-repeat;
    background-position: top right;
    font-family: Montserrat;
    
}

.left-main {
  flex: 1; /* Allow the left part to expand */
  margin-right: 170px; /* Added margin between left and right parts */
}
.main-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 90px;
}


.top-page-content{
    display: flex;
    justify-content: space-around;
    margin-top: 140px;
    text-align: justify;

}
.main-content{
    width: 550px;
    display: block;
    margin-left: 90px;
}
.main-content-part{
    margin-top: 20px;
    line-height: 30px;
    font-size: 15px;
}
.rignt-main-img{
    width: 180px;
    margin-left: 220px;
    margin-top: 200px;
}

@media screen and (min-width: 601px) and (max-width: 900px) {

    
.rignt-main-img{
    margin-left: 20px;
} 

.main-content{
    width: 450px;
    margin-left: 50px;
}
.main-header{
    margin-left: 50px;

}
}
</style>