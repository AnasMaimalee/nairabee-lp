<template>
    <div>
        <!-- header  -->
        <div class="wrapper">
            <div class="page-content">
                <div class="left-part">
                    <div class="form-header">
                        <span class="text-head">
                            Welcome Back
                        </span>
                        <span class="text-body">
                            Welcome Back Please Enter Your Details
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

                            <div class="form-bottom">
                                <div>
                                    Or Log In With
                                </div>
                                <div class="form-bottom-img">
                                    <img src="/Asset 19.png" alt="">
                                </div>
                            </div>
                            
                        </a-form>
                    </div>
                </div>
                <div class="right-part">
                    <img src="/Asset 18.png" alt="" class="right-part-img">
                </div>
            </div>
        </div>
        <!-- bottom  -->
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
    align-items: center;
    font-family: Montserrat;
    margin: 50px auto;
    width: 80%;
}
.left-part{
    width: 60%;
}

.form-header{
    display: grid;
}
.text-head{
    font-weight: bolder;
    font-size: 30px;
}
.form-body, .sign-in-btn{
    width: 70%;
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
    width: 100%;
}
.form-bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px; /* Adjust as needed */
}
.form-bottom-img{
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    margin-top: 30px;
}
.form-bottom-img img{
    top: 30px;
    width: 50%;
}
.right-part{
    width: 50%;
}
.right-part-img{
    width: 100%;
    margin-top: -40px;
}
</style>