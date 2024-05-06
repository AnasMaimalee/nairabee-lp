<template>
    <div class="footer-page-container">
        <div class="back-top" @click="scrollTop">
            Back to top
        </div>

        <div class="footer-content">
            <div class="footer-left">
                <div>
                    <div class="footer-left-content">
                        <img src="/Asset 23.png" alt="">
                        <nuxt-link :to="``">Download App</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="footer-right">
                <div class="footer-right-top">
                    Nairabee, a fintech platform merging "Naira,"
                    Nigeria's currency, with "bee," symbolizing our commitment
                    to Nigeria's financial landscape and a collaborative,
                    community-driven approach. Nairabee represents financial
                    empowerment and shared prosperity, providing innovative
                    solutions for Nigeria's unique needs.
                </div>

                <div class="footer-right-bottom">
                    <div class="footer-right-left">
                        <div class="footer-quick-links-header">Quick Links</div>
                        <nuxt-link :to="`/service`" class="bottom-services-link">Services</nuxt-link>
                        <nuxt-link :to="`/privacy-policy`" class="bottom-services-link">Privacy Policy</nuxt-link>
                        <nuxt-link :to="`/terms-condition`" class="bottom-services-link">Terms AndConditions</nuxt-link>
                        <nuxt-link :to="`/about`" class="bottom-services-link">About Us</nuxt-link>
                        <nuxt-link :to="`/contact`" class="bottom-services-link">Contact Us</nuxt-link>
                    </div>
                    <div class="footer-right-bottom-rigth">
                        <div class="footer-quick-links-header">Services</div>
                        <nuxt-link :to="``" class="bottom-services">Transfer</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services">Airtime</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services">Data</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services">TV Subscription</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services">Exam Result</nuxt-link>
                        <nuxt-link :to="``" class="bottom-services">And More....</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom"> 
            &copy; Nairabee All Rights Reserved 
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
.footer-page-container {
    position: relative;
    bottom: 0;
    margin-top: auto;
    width: 100%;
    background-color: #ffcaaf;
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

.footer-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.footer-left {
    width: 30%;
    background-color: #ffa07a;
    display: flex;
    /* Add this */
    justify-content: center;
    /* Add this */
    align-items: center;
    padding: 10px;
}

.footer-left-content {
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
}

.footer-left-content img {
    width: 50px;
    display: block;
    margin: 10px auto;
    /* Add this */
}

.footer-left-content :last-child {
    padding: 5px 10px;
    background-color: #f17540;
    border-radius: 12px;
    color: white;
    cursor: pointer;
}

.footer-right {
    width: 70%;
    display: block;
    justify-content: center;
    align-content: center;
    padding: 10px;

    align-items: center;
}

.footer-right-top {
    text-align: justify;
    margin: auto;
}

.footer-right-bottom {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.footer-right-top {
    padding-bottom: 10px;
    border-bottom: 1px solid #ffa07a;
}

.footer-bottom {
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

.footer-quick-links-header {
    font-weight: bolder;
    color: #f17540;
    margin-bottom: 10%;

}

.bottom-services-link {
    color: black;
    /* background-color: #f17540; */
}

.bottom-services-link:hover {
    color: white;
    background-color: #f17540;
}

.footer-right-left {
    display: grid;
}

.footer-right-bottom-rigth {
    display: grid;
}

@media screen and (min-width: 831px) {
    .footer-content {
        justify-content: center;
        margin: auto;
    }

    .footer-right-top {
        width: 85%;
    }

    .footer-right-bottom {
        width: 85%;
        margin: 10px auto;
        justify-content: space-between;
    }
}
</style>