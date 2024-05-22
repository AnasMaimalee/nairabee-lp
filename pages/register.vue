<template>
    <div>
        <!-- header  -->
        <div class="register-page-wrapper">
            <div class="register-page-content">
                <div class="register-left-part">
                    <div class="register-form-header">
                        <span class="register-text-head">
                            Lets Get Started
                        </span> <br>
                        <span class="text-body">
                            Please Enter Yout Details
                        </span>
                    </div>

                    <div class="register-form-body">
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
                                label="Confirm Password"
                            >
                                <a-input-password />
                            </a-form-item>
                            <a-button class="sign-up-btn"> Sign Up</a-button>

                            <div class="register-form-bottom">
                                <div class="form-bottom-top">
                                    Or Sign Up With
                                </div>

                                <div class="register-form-bottom-bottom">
                                    <img src="/Asset 19.png" alt="" class="register-form-bottom-bottom-img">
                                </div>
                            </div>
                        </a-form>
                    </div>

                  
                </div>
                <div class="register-right-part">
                    <img src="/Asset 31.png" alt="" class="register-right-part-img">
                </div>
            </div>
        </div>
        <!-- bottom  -->
    </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
.register-page-content{
    display: flex;
    justify-content: space-between;
    font-family: Montserrat;
    width: 85%;
    margin: 70px auto;
    align-content: center;

}
.register-left-part{
    margin-top:20px;
}
.register-form-body{
    width: 100%;
    margin-top: 20px;
}
.register-right-part{
    width: 50%;
}
.form-header{
    display: grid;
}
.register-text-head{
    font-weight: bolder;
    font-size: 30px;
}
.text-body{
    margin-bottom: 10px;
}
a-form-element{
    margin-bottom: 0px;
}
.register-form-body, .sign-up-btn{
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
.sign-up-btn{
    background-color: #f17140;
    color: #FAFBFF;
    font-weight: bolder;
    border: #f17140;
}
.register-form-bottom{
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
.register-form-bottom-bottom-img{
    width: 300px;
    margin-top: 30px;
}

.register-right-part-img{
    width: 70%;
    
}

@media screen and (max-width: 830px) {
    .register-page-content{
        margin: 35px auto;
    }
    .register-left-part{
        width: 85%;
    }
    .register-right-part{
        display: none;
    }
    .register-form-body{
        width: 100%;
    }

    .sign-up-btn{
        width: 100%;
    }
    .register-text-head{
        font-size: 20px;
    }
    
    .register-form-bottom {
    width: 100%;
    display: grid;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}

.register-form-bottom-bottom {
    width: 90%;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}

.register-form-bottom-bottom-img {
    width: 70%;
    margin: 10px auto; /* Center horizontally */
}
.sign-up-btn{
    font-size: 13px;

}

}

</style>