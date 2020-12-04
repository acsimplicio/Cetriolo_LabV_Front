<template>
    <div class="home">
        <Header />
        <div class="home-content">
            <card-mostrar-materia/>
        </div>
    </div>
</template>

<script>
import CardMostrarMateria from '@/components/CardMostrarMateria.vue'
import Header from '@/components/Header.vue'

export default {
    components: {
        CardMostrarMateria,
        Header
    }
}
</script>

<style scoped>
.home {
    background-color: #F9F2EA;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.home-content {
    margin-top: 120px;
}
</style>