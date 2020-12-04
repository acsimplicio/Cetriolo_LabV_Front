<template>
    <div class="card-admin">
        <span class="card-admin-title">
            Olá Admin
        </span>
        <div class="card-button-container">
            <button class="card-admin-button" @click="goToRota('/usuarios')">
                Usuários
            </button>
            <button class="card-admin-button" @click="goToRota('/tarefas')">
                Tarefas
            </button>
            <button class="card-admin-button" @click="goToRota('/materias')">
                Matérias
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToRota(rota) {
            this.$router.push(rota);
        }
    }
}
</script>

<style scoped>

    .card-admin-title {
        margin: 0 auto;
        font-weight: 700;
        font-size: 20px;
    }

    .card-admin {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #a08f7b;
    }

    .card-button-container {
        display: flex;
    }

    .card-admin-button {
        font-family: "Roboto";
        height: 40px;
        background-color: #194720;
        color: white;
        border: transparent;
        margin: 15px 10px 0px 10px;
        border-radius: 5px;
    }
</style>