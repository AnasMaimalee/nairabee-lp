<template>
    <div>
        <div class="container-contact">
            <div class="main-page-contact">
                <div class="min-form">
                    <div class="form-header">
                        <div class="fist-header">
                            Contact Us
                        </div>
                        <div class="second-header-contact">
                            Let’s build Africa’s biggest <br>   
                            FinTech together.
                        </div>
                    </div>
                    <a-form class="contact-form">
                        
                        <a-form-item
                            
                        >
                        <a-input placeholder="Full Name" />
                        </a-form-item>

                        <a-form-item
                            
                        >
                        <a-input placeholder="Mobile Number or Email" />
                        </a-form-item>

                        <a-form-item
                            
                            >
                        <a-textarea placeholder="Message" :rows="8" />
                        </a-form-item>

                        <a-button class="send-comment">Send</a-button>
                    </a-form>
                </div>
            </div>
        </div>
        <!-- bottom  -->
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
  
    .container-contact{
        position: relative;
        background-image: url('/Asset 22.png');
        background-size: 400px;
        height: 600px;
        background-repeat:no-repeat ;
        background-position: top right;
        font-family: Montserrat;
        width: 100%;

        /* background-color: rgba(255, 255, 255, 1 );      */

    }
    .main-page-contact{
        display: flex;
        justify-content: space-around;
        position: absolute;
        width: 70%;
        margin-top: 30px;
    }
    .min-form {
    width: 75%; /* Adjust the width as needed */
    }
    .main-page-contact :nth-child(2){
        margin-top: 20px;
    }
    .send-comment{
        width: 100%;
        background-color: #F17140;
        border: #F17140;
        color: #FAFBFF;
        font-weight: bolder;
    }
    .form-header :first-child{
        font-weight: bolder;
        font-size: 35px;
    }

@media only screen and (max-width: 998px) {
    /* .container-contact{
        margin-top: -70px;
        background-image: none;
        margin-left: -90px;
    }
   .contact-form{
    width: 150%;
   } */
}

@media screen and (max-width: 370px) {
    .container-contact{
        height: 450px;
        background-size: 100px;
    }
    .form-header :first-child{
        font-weight: bolder;
        font-size: 15px;
    }
    .main-page-contact{
        width: 100%;
    }
    .min-form{
        width: 80%;
    }
    .contact-form textarea{
        height: 100px;
    }
    .main-page-contact{
        margin-top:30px ;
    }
}
</style>