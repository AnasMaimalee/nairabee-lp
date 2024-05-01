<template>
    <div>
        <!-- header  -->
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
                                label="Mobile Number or Email"
                            >
                                <a-input />
                            </a-form-item>

                            <a-form-item
                                label="Full Name"
                            >
                                <a-input />
                            </a-form-item>

                            <a-form-item
                                label="Username"
                            >
                                <a-input />
                            </a-form-item>

                            <a-form-item
                                label="Password"
                            >
                                <a-input-password />
                            </a-form-item>

                            <a-form-item
                                label="Password"
                            >
                                <a-input-password />
                            </a-form-item>
                            <a-button class="sign-in-btn"> Sign Up</a-button>

                            <div class="form-bottom">
                                <div class="form-bottom-top">
                                    Or Sign Up With
                                </div>

                                <div class="form-bottom-bottom">
                                    <img src="/Asset 19.png" alt="" class="form-bottom-bottom-img">
                                </div>
                            </div>
                        </a-form>
                    </div>

                  
                </div>
                <div class="right-part">
                    <img src="/Asset 31.png" alt="" class="right-part-img">
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
    font-family: Montserrat;
    width: 80%;
    margin: 70px auto;
    align-content: center;
}
.left-part{
    margin-top:20px;
    width: 50%;
}
.form-body{
    width: 100%;
}
.right-part{
    width: 50%;
}
.form-header{
    display: grid;
}
.text-head{
    font-weight: bolder;
    font-size: 30px;
}
.text-body{
    margin-bottom: 10px;
}
.a-form-item{
    margin-top: -30px;
}
.form-body, .sign-in-btn{
    width: 400px;
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
    width: 70%;
    /* margin-top: -120px; */
    
}
</style>