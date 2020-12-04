<template>
    <div class="home">
        <Header />
        <div class="home-content">
            <card-usuario-details/>
        </div>
    </div>
</template>

<script>
import CardUsuarioDetails from '@/components/CardUsuarioDetails.vue'
import Header from '@/components/Header.vue'

export default {
    components: {
        CardUsuarioDetails,
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