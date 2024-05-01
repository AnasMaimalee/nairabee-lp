<template>
    <div>
        <div class="container-services">
                <div class="content-services">
                    <div class="column">Transfer</div>
                    <div class="column">Airtime</div>
                    <div class="column">Data</div>
                    <div class="column">Electricity</div>
                    <div class="column">TV Subscription</div>
                    <div class="column">Education</div>
                    <!-- <div class="column">g</div>
                    <div class="column">h</div>
                    <div class="column">i</div>
                    <div class="column">i</div> -->
                </div>
        </div>
        <!-- bottom  -->
    </div>
</template>
<script setup lang="ts">
import layout from "~/layout/layout-header.vue";
import bottom from "~/layout/layout-bottom.vue";
</script>
<style scoped>
.container-services {
    width: 80%;
    font-family: Montserrat;
    margin: 60px auto;
}

.content-services {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap into multiple lines */
    justify-content: space-between; /* Distribute items evenly along the main axis */
}

.column {
    width: calc(33.33% - 20px); /* Calculate the width of each column with margin */
    margin: 10px; /* Margin between columns */
    padding: 50px;
    border: 2px solid #f17540;
    text-align: center;
    border-radius: 8px;
    font-size: 2em;
    width: 100%;
    }

</style>