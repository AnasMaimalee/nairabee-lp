<template>
    <div>
        <layout />
        <div class="main">
        service page
        </div>
        <!-- bottom  -->
        <bottom />
    </div>
</template>
<script setup lang="ts">
import layout from "~/layout/layout-header.vue";
import bottom from "~/layout/layout-bottom.vue";
</script>
<style scoped>
.main{
    height: 1000px;
}
</style>