<template>
    <div>
        <!-- header  -->
        <layout />
        <div class="wrapper">
            <div class="page-content">
                <div class="left-part">
                    <div class="form-header">
                        <span class="text-head">
                            Lets Get Started
                        </span>
                        <span class="text-body">
                            Please Enter Yout Details
                        </span>
                    </div>

                    <div class="form-body">
                        <a-form>
                            <a-form-item
                                label="Email"
                            >
                                <a-input />
                            </a-form-item>

                            <a-form-item
                                label="Password"
                            >
                                <a-input-password />

                                <div class="register-forgot-password">
                                    <nuxt-link :to="`/register`" class="forgot-link">Register</nuxt-link>
                                    <nuxt-link :to="``" class="forgot-link">Forgot Password?</nuxt-link>
                                </div>
                            </a-form-item>
                            <a-button class="sign-in-btn"> Sign In</a-button>
                        </a-form>
                    </div>

                    <div class="form-bottom">
                        <div class="form-bottom-top">
                            Or Log in With
                        </div>

                        <div class="form-bottom-bottom">
                            <img src="/Asset 19.png" alt="" class="form-bottom-bottom-img">
                        </div>
                    </div>
                </div>
                <div class="right-part">
                    <img src="/Asset 18.png" alt="" class="right-part-img">
                </div>
            </div>
        </div>
        <!-- bottom  -->
        <layoutBottom />
    </div>
</template>
<script setup lang="ts">
import layout from "~/layout/layout-header.vue";
import layoutBottom from "~/layout/layout-bottom.vue";
</script>

<style scoped>
.page-content{
    display: flex;
    justify-content: space-around;
    font-family: Montserrat;
    margin-top: 70px;
}
.left-part{
    margin-top:20px;
}
.form-header{
    display: grid;
}
.text-head{
    font-weight: bolder;
    font-size: 30px;
}
.form-body, .sign-in-btn{
    width: 450px;
}
.register-forgot-password{
    display: flex;
    justify-content: space-between;
    color: #FAFBFF;
}
.forgot-link{
    color:#383838;
}
.sign-in-btn{
    background-color: #f17140;
    color: #FAFBFF;
    font-weight: bolder;
    border: #f17140;
    font-size: 20px;
}
.form-bottom{
    display: grid;
    justify-content: center;
    align-items: center;
}
.form-bottom-top{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 30px;
}
.form-bottom-bottom-img{
    width: 300px;
    margin-top: 30px;
}

.right-part-img{
    width: 600px;
    margin-top: -120px;
}

@media screen and (min-width: 601px) and (max-width: 900px) {
 
.page-content{
    margin-top: 10px;
}   
    .form-body, .sign-in-btn{
    width: 250px;
}
.right-part-img{
    width: 450px;
    margin-top: -70px;
}
.left-part{
    margin-top: 50px;
}

.form-bottom-bottom-img{
    width: 200px;
    margin-top: 10px;
}

.sign-in-btn{
    margin-top:-5px;
    font-size: 15px;
}
}
</style>