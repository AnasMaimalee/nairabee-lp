<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <div class="bottom">
            <div class="main-bottom">
                <div class="bottom-parts">
                    <div class="bottom-first-part">
                       <div class="logo-part">
                            <img src="/Asset 10.png" id="bottom-logo" alt="">
                       </div>
                       <div class="text-part">
                        Nairabee, a fintech platform merging "Naira,"
                        Nigeria's currency, with "bee," symbolizing our commitment
                        to Nigeria's financial landscape and a collaborative,
                        community-driven approach. Nairabee represents financial
                        empowerment and shared prosperity, providing innovative
                        solutions for Nigeria's unique needs. </div>
                       <div class="icons-part">

                        <nuxt-link :to="`#`">
                         <img src="/Asset 15.png" alt="" class="icons-img">
                        </nuxt-link>

                        <nuxt-link :to="`#`">
                         <img src="/Asset 11.png" alt="" class="icons-img">
                        </nuxt-link> 
                        
                        <nuxt-link :to="`#`">
                         <img src="/Asset 12.png" alt="" class="icons-img">
                        </nuxt-link> 
                        
                        <nuxt-link :to="`#`">
                         <img src="/Asset 13.png" alt="" class="icons-img">
                        </nuxt-link> 
                        
                        <nuxt-link :to="`#`">
                         <img src="/Asset 14.png" alt="" class="icons-img">
                        </nuxt-link>
                        
                       </div>
                    </div>
                </div>
                <div class="bottom-parts">
                    <div class="bottom-header">
                        Quick Links
                    </div>
                    <div class="bottom-quick-links">
                        <nuxt-link :to="`privacy-policy`" class="bottom-services-link">Privacy Policy</nuxt-link>
                        <nuxt-link :to="`/terms-condition`" class="bottom-services-link">Terms And Conditions</nuxt-link>
                        <nuxt-link :to="`/about`" class="bottom-services-link">About Us</nuxt-link>
                        <nuxt-link :to="`/contact`" class="bottom-services-link">Contact Us</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">Transfer</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">Transfer</nuxt-link>
                    </div>
                </div>
                <div class="bottom-parts">
                    <div class="bottom-header">
                        Our Services
                    </div>
                    <div class="bottom-services">
                        <nuxt-link :to="``" class="bottom-services-link">Transfer</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">Airtime</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">Data</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">TV Subscription</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">Exam Result</nuxt-link>
                    </div>
                </div>
                <!-- <div class="bottom-parts">
                    <div class="bottom-header">
                        About
                    </div>
                    <div class="bottom-about">
                        <nuxt-link :to="``" class="bottom-about-link">Lorem, ipsum.</nuxt-link>
                        <nuxt-link :to="``" class="bottom-about-link">Lorem, ipsum.</nuxt-link>
                        <nuxt-link :to="``" class="bottom-about-link">Lorem, ipsum.</nuxt-link>
                    </div>
                </div> -->
            </div>
            <div class="border-bottom"></div>
            <div class="copy-right">
                &copy; All Rights Reserved
            </div>
        </div>
    </div>
</template>
<style scoped>
body{
    color: #383838;

}
.bottom-header {
    color: #383838;
    font-weight: bolder;
    font-size: 20px;
}
.bottom{
    padding: 50px;
    bottom: 0;
    margin-top: 50px;
    width: 100%;
    /* height: 370px; */
    font-family: Montserrat;
    color: #383838;
    background-color: #ffcaaf;
}
.main-bottom{
    margin: 0px auto 10px 30px;
    display: flex;
    justify-content: space-around;
}
.bottom-first-part{
    width: 300px;
    text-align: justify;
}

.bottom-parts{
    padding: 20px;
    margin-right: 20px;
}
#bottom-logo{
    width: 180px;
}
.text-part{
    margin-top: 20px;
}
.icons-part{
    margin-top: 30px;
}
.icons-img {
    width: 40px;
    margin-right: 10px;
}
.bottom-quick-links{
    display: grid;
    color:#383838;

}
.bottom-quick-links :hover, .bottom-services-link :hover{
    color: #f17540;
}

.bottom-services :hover{
    color: #f17540;
}
.bottom-services, .bottom-about{
    display: grid;
    line-height: 25px;
}
.bottom-services-link, .bottom-about-link{
    color:#383838;
}
.border-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    border: 1px solid #383838;
    margin: 20px auto ;
}
.copy-right{
    display: flex;
    justify-content: center;
    align-items: center;
}
/* @media screen and (max-width: 480) and (min-width: 360) {
    .icons-img{
        width: 5px;
    }
    .bottom-parts{
    padding: 20px;
    margin-right: 10px;
}
.bottom-header {
    font-size: 15px;
}
.bottom{

display: none;}
} */
</style>