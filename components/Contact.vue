<template>
    <div class="container-contact">
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <h1>Contact Us</h1>
          <h3>Let's build Africa's biggest FinTech together</h3>
  
          <div class="form-body">
            <div class="form-group">
              <input
                type="text"
                v-model="fullName"
                placeholder="Full Name"
                class="text-field"
              />
              <input
                type="text"
                v-model="mobileNumber"
                placeholder="Mobile Number"
                class="text-field"
              />
            </div>
            <textarea
              v-model="message"
              rows="10"
              class="text-field"
              placeholder="Your Message"
            ></textarea>
            
          </div>
          <div class="send-btn">
              <button class="text-field">Send</button>
            </div>
        </form>
      </div>
    </div>
  
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  const fullName = ref("");
  const mobileNumber = ref("");
  const message = ref("");
  
  const submitForm = async () => {};
  </script>
  
  <style scoped>
  .container-contact {
  display: flex;
  justify-content: center;
  background-size: 400px;
  color: #383838;
  background-repeat: no-repeat;
  background-position: top right;
  font-family: Montserrat;
  width: 100%;
  overflow: hidden;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
}

.form-group {
  display: flex;
  gap: 20px;
  width: 104%;
}

.form-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-field {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #f17540;
  border-radius: 8px;
}

textarea {
  width: 100%;
  resize: none;
}

.send-btn {
  display: flex;
  justify-content: flex-end; /* Aligns the button to the right */
  width: 100%; /* Matches the combined width of the text fields */
  margin-top: 20px;
}

.send-btn button {
  width: auto; /* Allow the button to take its natural width */
  background-color: #f17540;
  color: white;
  border: none;
  padding: 12px 24px; /* Adjust padding for a better button size */
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

.text-field:focus {
  border: 2px solid #f17540;
  outline: none;
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
    width: 100%;
  }

  .send-btn {
    width: 100%; /* Ensure button width matches form width on smaller screens */
  }

  h1 {
    font-size: 14px;
  }

  h3 {
    font-size: 12px;
  }
}

  </style>
  