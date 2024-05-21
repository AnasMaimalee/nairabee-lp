<template>
    <div class="footer-page-container">
        <div class="back-top" @click="scrollTop">
            Back to top
        </div>

        <div class="footer-content">
            <div class="footer-first">
                <div class="footer-first-img">
                    <img src="/Asset 10.png" alt="">
                </div>
                <div class="footer-nairabee">
                    Nairabee, a fintech platform merging "Naira,"
                    Nigeria's currency, with "bee," symbolizing our commitment
                    to Nigeria's financial landscape and a collaborative,
                    community-driven approach. Nairabee represents financial
                    empowerment and shared prosperity, providing innovative
                    solutions for Nigeria's unique needs.
                </div>
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
            <div class="quick-links">
                <div class="">Quick Links</div>
                <nuxt-link :to="`/service`" class="bottom-services-link">Services</nuxt-link>
                <nuxt-link :to="`/privacy-policy`" class="bottom-services-link">Privacy Policy</nuxt-link>
                <nuxt-link :to="`/terms-condition`" class="bottom-services-link">Terms AndConditions</nuxt-link>
                <nuxt-link :to="`/about`" class="bottom-services-link">About Us</nuxt-link>
                <nuxt-link :to="`/contact`" class="bottom-services-link">Contact Us</nuxt-link>
            </div>
            <div class="quick-links">
                <div class="">Services</div>
                <nuxt-link :to="``" class="bottom-services">Transfer</nuxt-link>
                <nuxt-link :to="``" class="bottom-services">Airtime</nuxt-link>
                <nuxt-link :to="``" class="bottom-services">Data</nuxt-link>
                <nuxt-link :to="``" class="bottom-services">TV Subscription</nuxt-link>
                <nuxt-link :to="``" class="bottom-services">Exam Result</nuxt-link>
                <nuxt-link :to="``" class="bottom-services">And More....</nuxt-link>
            </div>

            <div class="quick-links">
                <div>Contact Us</div>
                <nuxt-link :to="`mailto:anasment6@gmail.com`" class="bottom-services-link">Email: nairabee@gmail.com</nuxt-link>
                <nuxt-link :to="`tel:+2348123442014`" class="bottom-services-link">Phone: +2348123442014 (Care Line)</nuxt-link>
                <nuxt-link :to="`mailto:anasment6@gmail.com`" class="bottom-services-link"></nuxt-link>
            </div>

        </div>
        <div class="footer-bottom">
            &copy; Nairabee All Rights Reserved

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
    font-size: 10px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 20px auto;
    padding-top: 20px;
    padding-bottom: 30px;
    position: relative;
}

.footer-content::before,
.footer-content::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    /* Adjust the height to set the thickness of the border */
    background: #383838;
}

.footer-content::before {
    left: 10;
    width: 70%;
}

.footer-content::after {
    right: 10;
    width: 90%;
}



.footer-first {
    width: 60%;
    padding-right: 10px;
}

.footer-first-img img {
    width: 50%;
}

.footer-nairabee {
    text-align: justify;
    width: 80%;
    margin-top: 10px;
}

.icons-part {
    margin-top: 30px;
}

.icons-img {
    width: 30px;
    margin-right: 8px;
}

.quick-links {
    display: flex;
    flex-direction: column;
    width: 25%;
    line-height: 22px;

}
.quick-links p{
    font-size: 12px;
    line-height: 23px;
}

.bottom-services-link {
    color: black;
}

.quick-links :first-child {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

.footer-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    font-size: 13px;
    font-weight: bold
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