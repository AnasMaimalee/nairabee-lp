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
.container-services {
    width: 100%;
    font-family: Montserrat;
    justify-content: center;
    align-content: center;
    margin: 50px auto;
    background-image: url('/Asset 22.png');
    background-size: 400px;
    background-repeat: no-repeat;
    background-position: top right;

}

.services-main {
    margin-top: 40px;
}

/* 
.services-main-icon{
    display: flex;
    justify-content: space-between;

    margin: 40px auto;

}
.services-main-icon :first-child{
    width: 50%;
}

.services-main-icon :last-child{
    width: 50%;
} */

.services-main-icon {
    display: flex;
    /* Make the container a flex container */
    justify-content: space-around;
    /* Align the images horizontally */
    align-items: center;
    /* Center the images vertically */
    width: 100%;
    margin-top: 20px;
}

.services-main-icon img {
    max-width: 40%; /* Ensure images don't exceed their container's width */
    height: auto; /* Maintain aspect ratio */
    margin-top: 40px;
    object-fit: contain; /* Fit the image within the container without distorting it */
}
.services-main-icon img   {
  transition: all 0.3s ease-in-out; /* Add transition for smooth effect */
}

/* Enlarge breakdown services on hover */
.services-main-icon img:hover {
  transform: scale(1.1); /* Increase scale on hover */
}

.service img {
    width: 40px; /* Set a specific width */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px;
    object-fit: contain; /* Fit the image within the container without distorting it */
}
.services-main-icon :last-child {
    width: 25%;
}

.services-list {
    display: grid;
    /* Changed from flex to grid */
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 50px;
    /* Adjust the gap between service items */
    width: 85%;
    margin: 40px auto;
}

.service {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    background-color: #FAFBFF;
    padding: 25px;
    border-radius: 10px;
}

/* Add transitions to breakdown services */
.service  {
  transition: all 0.3s ease-in-out; /* Add transition for smooth effect */
}

/* Enlarge breakdown services on hover */
.service:hover {
  transform: scale(1.1); /* Increase scale on hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add shadow on hover */
}

.service-description :first-child {
    font-size: 20px;
    font-weight: bolder;
    color: #f17540;
    margin-bottom:10px;
}

@media screen and (max-width: 873px) {
    .container-services {
        margin: 0px auto;
        background-size: 100px;
    }
    .services-main{
        width: 85%;
        margin: 20px auto;
    }
    .services-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        /* Two services in each row */
        gap: 10px;
        /* Adjust the gap between service items */
        width: 100%;
    }

    .services-main-icon :first-child {
        max-width: 100%;
    }

    .services-main-icon :last-child {
        display: none;
    }

    .service {
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 10px;
        border-radius: 10px;
        font-size: 14px;
    }

    .services-list :nth-child(4) img {
        margin-top: 15px;
        margin-bottom: 30px;
    }

    .service img {
        width: 50px;
        margin-bottom: 20px;

    }

    .service-description :first-child {
        font-size: 14px;
    }
}
</style>