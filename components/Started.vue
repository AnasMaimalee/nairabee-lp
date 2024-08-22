<template>
    <div>
      <a href="/" class="getstarted-button">Get Started</a>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style>
  .getstarted-button {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    outline: 2px solid #f17540;
    padding: 20px 30px;
    position: relative;
    overflow: hidden; /* Ensure overflow is hidden within the button */
    transition: color 1s;
    z-index: 1; /* Ensure button text stays on top */
  }
  
  .getstarted-button:hover {
    color: red;
  }
  
  .getstarted-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -6px;
    width: 0;
    height: 100%;
    background-color: #f17540;
    transform: skewX(35deg);
    z-index: 0; /* Ensure background is behind text */
    transition: width 1s;
  }
  
  .getstarted-button:hover::before {
    width: 150%;
  }
  </style>
  