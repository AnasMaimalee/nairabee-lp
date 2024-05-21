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
                <nuxt-link :to="`/terms-condition`" class="bottom-services-link">Terms And Conditions</nuxt-link>
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
                <nuxt-link :to="`mailto:contact@nairabee.com`" class="bottom-services-link">Email:
                    nairabee@gmail.com</nuxt-link>
                <nuxt-link :to="`tel:+2348123442014`" class="bottom-services-link">Phone: +2348123442014
                    </nuxt-link>
                <nuxt-link :to="`https://wa.me/08123442014`" class="bottom-services-link">WhatsApp Us</nuxt-link>

            </div>

        </div>
        <div class="footer-bottom">
            <div>
                &copy; Nairabee All Rights Reserved

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
.footer-page-container {
    font-family: Montserrat;
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

}





.footer-first {
    width: 40%;
    padding-right: 10px;
}

.footer-first-img img {
    width: 50%;
}

.footer-nairabee {
    text-align: justify;
    margin-top: 10px;
    width: 100%;
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
    width: 12%;
    line-height: 22px;

}

.quick-links p {
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
    width: 75%;
    margin: 10px auto;
    font-size: 13px;
    font-weight: bold;
    border-top: 1px solid #383838;
}

.footer-bottom :first-child{
    padding-top: 30px;
}

@media screen and (max-width: 831px) {
    .footer-content {
        /* display: grid; */
        justify-content: center;
        margin: 10px 5px;
        width: 100%;
    }

    .footer-first {
        display: none;
    }

    .quick-links {
        width: 100%;
        font-size: 12px;
        margin-bottom: 5px;
    }

    .quick-links :first-child {
        font-size: 14px;
    }
    .footer-bottom{
        font-size: 10px;
    }
    .footer-bottom :first-child{
        padding-top: 10px;
    }
}
</style>