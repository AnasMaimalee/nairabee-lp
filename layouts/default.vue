<template>
    <div>
        <layoutHeaderVue />
        <Nuxt />    
        <layoutBottomVue />
    </div>
</template>
<script setup lang="ts">
import layoutHeaderVue from "~/components/layout-header.vue";
import layoutBottomVue from "~/components/layout-footer.vue";
</script>