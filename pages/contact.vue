<template>
    <div class="container-contact">
        <div class="contact-form">
            <form>
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
    color: #383838;
    height: 750px;
    background-repeat: no-repeat;
    background-position: top right;
    font-family: Montserrat;
    width: 100%;
    overflow: hidden;
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
        background-size: 150px;

    }

    .contact-form {
        width: 100%;
        margin: 50px 35px;
    }

    .form-body {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    .form-body button {
   
    width: 97%;
}

    h1 {
        font-size: 14px;
    }

    h3 {
        font-size: 12px;
    }
}
</style>