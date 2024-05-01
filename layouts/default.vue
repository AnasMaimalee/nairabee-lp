<template>
    <div>
        <layoutHeaderVue />
        <Nuxt />
        <layoutBottomVue />
    </div>
</template>
<script setup lang="ts">
import layoutHeaderVue from "~/layout/layout-header.vue";
import layoutBottomVue from "~/layout/layout-bottom.vue";
</script>