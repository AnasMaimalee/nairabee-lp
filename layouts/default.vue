<template>
    <div class="default-layout">
        <LayoutHeader />
        <NuxtPage />    
        <LayoutFooter />
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
.default-layout {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
}
</style>