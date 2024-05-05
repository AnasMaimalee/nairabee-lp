<template>
    <div class="footer-container">
        <div class="back-top" @click="scrollTop">
            Back to top
        </div>
        <div class="bottom">

            <div class="main-bottom">
                <div class="first-bottom-part">
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

                <div class="second-bottom-part">
                    <div class="bottom-header">
                        Quick Links
                    </div>
                    <div class="bottom-quick-links">
                        <nuxt-link :to="`service`" class="bottom-services-link">Services</nuxt-link>
                        <nuxt-link :to="`privacy-policy`" class="bottom-services-link">Privacy Policy</nuxt-link>
                        <nuxt-link :to="`/terms-condition`" class="bottom-services-link">Terms And
                            Conditions</nuxt-link>
                        <nuxt-link :to="`/about`" class="bottom-services-link">About Us</nuxt-link>
                        <nuxt-link :to="`/contact`" class="bottom-services-link">Contact Us</nuxt-link>
                    </div>
                </div>
                <div class="third-bottom-part">
                    <div class="bottom-header">
                        Our Services
                    </div>
                    <div class="bottom-services">
                        <nuxt-link :to="``" class="bottom-services-link">Transfer</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">Airtime</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">Data</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services-link">TV Subscription</nuxt-link> <nuxt-link :to="``"
                            class="bottom-services-link">Exam Result</nuxt-link>
                        <nuxt-link :to="`/service`" class="bottom-services-link">And More....</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="border-bottom"></div>
            <div class="copy-right">
                &copy; All Rights Reserved
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

</script>
<style scoped>
body {
    color: #383838;

}

.footer-container {
    position: relative;
    bottom: 0;
    margin-top: auto;
    width: 100%;
    background-color: #ffcaaf;

}

.bottom-header {
    color: #383838;
    font-weight: bolder;
    font-size: 16px;
    top: 12px;
}

.bottom {
    /* padding: 50px; */
    width: 100%;
    margin: auto;
    /* height: 787px; */
    font-family: Montserrat;
    color: #383838;
}

.back-top {
    display: block;
    background-color: #f17540;
    color: white;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    padding: 5px 10px;
}

.main-bottom {
    width: 90%;
    padding-top: 30px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
}

.first-bottom-part {
    width: 50%;
    text-align: justify;
}

.right-bottom {

    display: flex;
    justify-content: space-around;
}

#bottom-logo {
    width: 180px;
}

.text-part {
    margin-top: 20px;
}

.icons-part {
    margin-top: 10px;
}

.icons-img {
    width: 40px;
    margin-right: 10px;
}

.bottom-quick-links {
    display: grid;
    color: #383838;

}

.bottom-quick-links :hover,
.bottom-services-link :hover {
    color: #f17540;
}

.bottom-services :hover {
    color: #f17540;
}

.bottom-services,
.bottom-about {
    display: grid;
}

.bottom-services-link,
.bottom-about-link {
    color: #383838;
}

.border-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    border: 1px solid #383838;
    margin: 20px auto;
}

.copy-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width:787px) {
    .first-bottom-part {}


    .bottom-header {
        font-size: 12px;
    }

    #bottom-logo {
        width: 85%;
    }

    .bottom {
        width: 100%;

    }

    .main-bottom {
        display: flex;
        width: 90%;
        justify-content: space-around;
        text-align: start;
        margin: 0px auto;
    }

    .text-part {
        width: 90%;
        font-size: 10px;
        line-height: 12px;
        margin-top: 10px;
    }

    .bottom-quick-links {
        font-size: 11px;
    }

    .bottom-services {
        font-size: 11px;
    }

    .icons-img {
        width: 10%;
        margin-right: 2px;
        margin-top: -45px;
    }

    .border-bottom {
        margin-top: -5px;
        margin-bottom: 14px;
    }
    .icons-part{
        margin-bottom: 20px;
        margin-top: 25px 

    }

    .copy-right {
        margin-top: -8px;
        font-size: 10px;
    }
}
</style>