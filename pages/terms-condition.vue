<template>
    <div>
        <!-- header  -->
        <div class="container-terms">
            <div class="main-page-content-terms">
                <div class="page-header-terms">
                    Terms and Conditions
                </div>
                <div class="page-content-terms">
                    <div class="page-header-welcome-terms">
                        Welcome to Nairabee, the fintech platform that merges the essence of Nigeria's currency, the
                        Naira, with the industrious and collaborative spirit of bees. By using Nairabee's services, you
                        agree to comply with and be bound by the following terms and conditions:
                    </div>
                    <div class="main-content-terms">
                        <div class="condition">
                            <span class="first-bold-color-text">Account Registration:</span> To use Nairabee's services, you must create an account. You agree to
                            provide accurate, current, and complete information during the registration process and to
                            update such information to keep it accurate, current, and complete. You are responsible for
                            maintaining the confidentiality of your account and password and for restricting access to your
                            account.
                        </div>
                        <div class="condition">
                            <span class="first-bold-color-text">Financial Responsibility:</span> You are solely responsible for all activities that occur under your
                            account. You agree to notify Nairabee immediately of any unauthorized use of your account or
                            any other breach of security. Nairabee will not be liable for any loss or damage arising from your
                            failure to comply with this provision.
                        </div>
                        <div class="condition">
                             <span class="first-bold-color-text">Use of Services:</span> Nairabee provides financial solutions for saving, investing, and managing
                            finances. You agree to use the services only for lawful purposes and in accordance with these
                            terms and conditions. You further agree not to use the services in any manner that could
                            damage, disable, overburden, or impair Nairabee's servers or networks.
                        </div>
                        <div class="condition">
                             <span class="first-bold-color-text">Use of Services:</span> Nairabee provides financial solutions for saving, investing, and managing
                            finances. You agree to use the services only for lawful purposes and in accordance with these
                            terms and conditions. You further agree not to use the services in any manner that could
                            damage, disable, overburden, or impair Nairabee's servers or networks.
                        </div>
                        <div class="condition">
                            <span class="first-bold-color-text">Privacy Policy:</span>  Your use of Nairabee's services is also governed by our Privacy Policy, which can
                            be found <nuxt-link :to="`/privacy-policy`">here.</nuxt-link>  By using Nairabee's services, you consent to the collection and use of your
                            information in accordance with our Privacy Policy.
                        </div>
                        <div class="condition">
                            <span class="first-bold-color-text">Payment Methods:</span>  Nairabee accepts payments through various platforms, including PayPal,
                            Apple Pay, and Google Pay. By using these payment methods, you agree to comply with the
                            terms and conditions of the respective platforms.
                        </div>
                        <div class="condition">
                            <span class="first-bold-color-text">Termination: </span> Nairabee reserves the right to terminate or suspend your account and access to
                            the services at any time for any reason without notice. Upon termination, your right to use the
                            services will immediately cease, and you must immediately cease all use of the services.
                        </div>
                        <div class="condition">
                            <span class="first-bold-color-text">Changes to Terms:</span>  Nairabee reserves the right to change these terms and conditions at any
                            time. Changes will be effective immediately upon posting on the Nairabee website. Your
                            continued use of the services after any such changes constitutes your acceptance of the new
                            terms and conditions.
                        </div>
                        <div class="condition">
                            By using Nairabee's services, you acknowledge that you have read, understood, and agree to be
                            bound by these terms and conditions. If you do not agree to these terms and conditions, please
                            do not use Nairabee's services.
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <!-- footer  -->
    </div>
</template>

<script setup lang="ts">

</script>
<style>

.container-terms {
    position: relative;
    background-image: url('/Asset 22.png');
    background-size: 800px;
    height: 1200px;
    background-repeat: no-repeat;
    background-position: top right;
    font-family: Montserrat;
    text-align: justify;
    padding: 0 10%; /* Adjust as needed */
}

.main-page-content-terms {
    position: absolute;
    width: 100%;
    max-width: 85%; /* Adjust the maximum width as needed */
    margin: 90px auto;
}

    .page-header-terms{
        font-weight: bolder;
        font-size: 35px;
    }

    .condition, .page-header-welcome-terms{
        margin-top: 20px;
        font-size: 20px;
    }
    .first-bold-color-text{
        color: #f17540;
        font-weight: bolder;
    }

    @media screen and (max-width:787px) {
        .container-terms{
            background-size: 150px;
            height: 850px;
            }
        .page-header-terms{
            font-size: 15px;
        }
        .main-page-content-terms{
            margin-top: 20px;
        }
        .page-header-welcome-terms{
            margin-top: 10px;
        }
        .condition, .page-header-welcome-terms{
            font-size: 10px;
            margin-top: 9px;
        }
    }
</style>