<template>
    <div class="container-contact">
        <div class="contact-form">
            <form action="">
                <h1>Contact Us</h1>
                <h3>Let's build the Africa's biggest FinTech together</h3>

                <div class="form-body">
                    <input type="text" placeholder="Full Name" class="text-field">
                    <input type="text" placeholder="Mobile Number" class="text-field">
                    <textarea name="" id="" rows="10" class="text-field"></textarea>
                    <div class="send-btn">
                        <button class="text-field"> Send</button>

                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container-contact {
    display: grid;
    background-image: url('/Asset 22.png');
    background-size: 400px;
    height: 100vh;
    color: #383838;
    background-repeat: no-repeat;
    background-position: top right;
    font-family: Montserrat;
    width: 100%;
    overflow: hidden;
    /* Ensuring no overflow */
}

.contact-form {
    display: grid;
    width: 85%;
    margin: 50px auto;
}

.form-body {
    display: flex;
    flex-direction: column;
    width: 60%;
}

.form-body button {
    display: flex;
    justify-content: center;
    align-content: end;
    align-items: end;
    width: 93%;
    background-color: #f17540;
    color: white;
}


.text-field {
    width: 90%;
    margin-top: 20px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #f17540;
    border-radius: 8px;
}

.text-field:focus {
    border: 1px solid #f17540;
}

@media screen and (max-width: 830px) {
    .container-contact {
        background-size: 250px;
    }
    .contact-form{
        width: 100%;
        margin: 50px 35px;
    }
}
</style>