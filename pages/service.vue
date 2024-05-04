<template>
    <div>
        <div class="container-services">
            <div class="services-main">
                <div class="services-main-icon">
                    <img src="/Asset 41.png" alt="">
                    <img src="/Asset 2.png" alt="">
                </div>
                <div class="services-list">
                    <div class="service">
                        <img src="/Asset 43.png" alt="">
                        <div class="service-description">
                            <div>Transfer</div>
                            <div>This service enables users to send money to friends,
                                 family, or businesses quickly and securely. 
                                 Whether it's a local transfer or an international
                                  remittance, our platform provides convenient options
                                   for sending money with minimal fees. We prioritize security
                                    and efficiency, ensuring that transfers are processed promptly and accurately. 
                                    Join us to experience seamless money transfer solutions tailored to your needs.
                            </div>
                        </div>
                    </div>
                    <div class="service">
                        <img src="/Asset 44.png" alt="">
                        <div class="service-description">
                            <div>Airtime</div>
                            <div>
                                This service allows users to purchase credit for their mobile phones
                                , enabling them to make calls, send SMS, and use data. We ensure swift
                                 and reliable airtime top-up options, offering various denominations to
                                  cater to different user needs.
                            </div>
                        </div>
                    </div>

                    <div class="service">
                        <img src="/Asset 45.png" alt="">
                        <div class="service-description">
                            <div>Data Bundle</div>
                            <div>
                                Users can purchase data bundles to access the internet on their mobile 
                                devices. We provide a range of data packages, from small to large, suitable 
                                for different usage patterns. Our platform ensures seamless activation and
                                 prompt delivery of data bundles.
                            </div>
                        </div>
                    </div>

                    <div class="service">
                        <img src="/Asset 46.png" alt="">
                        <div class="service-description">
                            <div>TV Subscription</div>
                            <div>
                                With this service, users can subscribe 
                                to various television channels or streaming 
                                services. We offer a diverse selection of 
                                subscription options, including both local
                                 and international channels, catering to different 
                                 entertainment preferences. Our platform ensures
                                  hassle-free subscription management and timely 
                                  renewal reminders.
                            </div>
                        </div>
                    </div>

                    <div class="service">
                        <img src="/Asset 47.png" alt="">
                        <div class="service-description">
                            <div>Exam Result</div>
                            <div>
                                This service enables users to check their exam results online. We collaborate with 
                                educational institutions and examination boards to provide a secure and efficient
                                 result checking process. Users can access their results quickly and conveniently 
                                through our platform, with appropriate privacy measures in place.
                            </div>
                        </div>
                    </div>

                    <div class="service">
                        <img src="/Asset 35.png" alt="">
                        <div class="service-description">
                            <div>Electricity</div>
                            <div>Users can conveniently pay their electricity 
                                bills through our platform. We partner with utility 
                                providers to offer a seamless billing and payment experience.
                                 Users can easily check their electricity consumption, receive
                                  bill notifications, and make payments securely, helping them 
                                  manage their energy usage efficiently.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.container-services{
    width: 83%;
    font-family: Montserrat;
    justify-content: center;
    align-content: center;
    margin: 10px auto;

}

.services-main-icon{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 40px auto;

}
.services-main-icon :first-child{
    width: 50%;
}

.services-main-icon :last-child{
    width: 40%;
}
.services-list {
    display: grid; /* Changed from flex to grid */
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 50px; /* Adjust the gap between service items */
}

.service {
    display: flex;
    flex-direction: column;
    align-items: center  ;
    text-align: justify;
    background-color: #FAFBFF;
    padding: 25px;
    border-radius: 10px;
}

.service-description :first-child{
    font-size: 20px;
    font-weight: bolder;
    color: #f17540;
}
@media screen and (max-width: 370px) {
    .services-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Two services in each row */
        gap: 10px; /* Adjust the gap between service items */
        width: 100%;
    }
    .service {
        display: flex;
        flex-direction: column;
        align-content: center;
        padding:10px;
        border-radius: 10px;
        font-size: 8px;
    }
    .services-list :nth-child(4) img{
        margin-top:15px;
        margin-bottom: 30px;
    }
    .service img{
        width: 50px;
        margin-bottom: 20px;
        
    }

.service-description :first-child{
    font-size: 10px;
}
}

</style>