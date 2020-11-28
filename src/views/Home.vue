<template>
    <div class="home">
        <div class="header">
            <logo />
            <button class="logout-button">Sair</button>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
    components: {
        Logo
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 97%;
    background-color: #3aaf83;
    padding: 12px 40px;
}

.logout-button {
    font-family: "Roboto";
    height: 40px;
    width: 80px;
    background-color: #194720;
    color: white;
    border: transparent;
    border-radius: 5px;
}
</style>