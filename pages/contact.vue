<template>
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

                    <a-form-item>
                        <a-input placeholder="Full Name" />
                    </a-form-item>

                    <a-form-item>
                        <a-input placeholder="Mobile Number or Email" />
                    </a-form-item>

                    <a-form-item>
                        <a-textarea placeholder="Message" :rows="8" />
                    </a-form-item>

                    <a-button class="send-comment">Send</a-button>
                </a-form>
            </div>
        </div>
    </div>
    <!-- bottom  -->
</template>
<script setup lang="ts">
</script>
<style scoped>
.container-contact {
    display: grid;
    background-image: url('/Asset 22.png');
    background-size: 400px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: top right;
    font-family: Montserrat;
    width: 100%;

    /* background-color: rgba(255, 255, 255, 1 );      */

}

.main-page-contact {
    display: flex;
    justify-content: space-between;
    justify-content: start;
    position: absolute;
    width: 100%;
}

.min-form {
    width: 50%;
    /* Adjust the width as needed */
    margin: 10px 100px;
}

.main-page-contact :nth-child(2) {
    margin-top: 20px;
}

.send-comment {
    width: 100%;
    background-color: #F17140;
    border: #F17140;
    color: #FAFBFF;
    font-weight: bolder;
}

.form-header :first-child {
    font-weight: bolder;
    font-size: 35px;
}


@media screen and (max-width: 830px) {
    .container-contact {
        height: 450px;
        background-size: 200px;
    }

    .form-header :first-child {
        font-weight: bolder;
        font-size: 15px;
    }

    .main-page-contact {
        width: 100%;
    }

    .min-form {
        width: 100%;
        margin: 10px 38px;
    }

    .contact-form textarea {
        height: 100px;
    }

    .main-page-contact {
        margin-top: 50px;
        width: 100%;
    }
}
</style>