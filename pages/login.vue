<template>
    <div>
        <!-- header  -->
        <div class="sign-in-wrapper">
            <div class="sign-in-page-content">
                <div class="sign-in-left-part">
                    <div class="sign-in-form-header">
                        <span class="sign-in-text-head">
                            Welcome Back
                        </span>
                        <span class="sign-in-text-body">
                            Welcome Back Please Enter Your Details
                        </span>
                    </div>

                    <div class="sign-in-form-body">
                        <a-form layout="vertical">
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

                            <div class="sign-in-form-bottom">
                                <div>
                                    Or Log In With
                                </div>
                                <div class="sign-in-form-bottom-img">
                                    <img src="/Asset 19.png" alt="">
                                </div>
                            </div>
                            
                        </a-form>
                    </div>
                </div>

                <div class="sign-in-right-part">
                    <img src="/Asset 18.png" alt="" class="sign-in-right-part-img">
                </div>
            </div>
        </div>
        <!-- bottom  -->
    </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
.sign-in-page-content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: Montserrat;
    margin: 50px auto;
    width: 82%;
 /* @apply flex justify-around items-center my-[50px] mx-auto w-[82%]; */

}
.sign-in-left-part{
    width: 60%;
}

.sign-in-form-header{
    display: grid;
}
.sign-in-text-head{
    font-weight: bolder;
    font-size: 30px;
}
.sign-in-form-body, .sign-in-btn{
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
.sign-in-form-bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px; /* Adjust as needed */
}
.sign-in-form-bottom-img{
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    margin-top: 30px;
}
.sign-in-form-bottom-img img{
    top: 30px;
    width: 50%;
}
.sign-in-right-part{
    width: 40%;
}
.sign-in-right-part-img{
    width: 100%;
    margin-top: -40px;
}

@media screen and (max-width: 830px) {
    .sign-in-page-content{
        margin-top: 15px;
    }
    .sign-in-right-part{
        display: none;
    }

    .sign-in-left-part{
        width: 100%;
    }
    .sign-in-form-body{
        width: 90%;
        margin-top: 20px;
    }
    .sign-in-text-head{
        font-size: 18px;
    }
    .sign-in-btn{
        font-size: 13px;
    }
}
</style>