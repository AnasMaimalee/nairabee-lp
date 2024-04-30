<template>
    <div>
        <layout />
        <div class="container">
            <div class="main-page">
                <div class="min-form">
                    <div class="form-header">
                        <div class="fist-header">
                            Contact Us
                        </div>
                        <div class="second-header">
                            Let’s build Africa’s biggest <br>   
                            FinTech together.
                        </div>
                    </div>
                    <a-form>
                        
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
                        <a-textarea placeholder="Mobile Number or Email" :rows="8" />
                        </a-form-item>

                        <a-button class="send-comment">Send</a-button>
                    </a-form>
                </div>
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
  
    .container{
        position: relative;
        background-image: url('/Asset 22.png');
        background-size: 800px;
        height: 600px;
        background-repeat:no-repeat ;
        background-position: top right;
        font-family: Montserrat;
        
        /* background-color: rgba(255, 255, 255, 1 );      */

    }
    .main-page{
        display: flex;
        justify-content: center;
        margin-left: 100px;
        margin-top: 100px;
        position: absolute;
        top: 0;
    }
    .min-form {
    width: 500px; /* Adjust the width as needed */
    }
    .main-page :nth-child(2){
        margin-top: 20px;
    }
    .send-comment{
        width: 500px;
        background-color: #F17140;
        border: #F17140;
        color: #FAFBFF;
        font-weight: bolder;
    }
    .form-header :first-child{
        font-weight: bolder;
        font-size: 35px;
    }
@media screen and (min-width: 601px) and (max-width: 900px) {

    .container{
        
        background-size: 600px;
         /* background-color: rgba(255, 255, 255, 1 );      */

    }
}
</style>