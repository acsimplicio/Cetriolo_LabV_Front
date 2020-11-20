<template>
    <div class="form-card">
        <div class="logo-container">
            <img class="logo-image" alt="Cetriolo logo" src="../assets/logo.png">
            <h1 class="logo-text">Cetriolo</h1>
        </div>
        <custom-input fieldName="Email" v-model="email" type="email" placeholder="email@example.com" />
        <custom-input fieldName="Senha" v-model="password" type="password" />
        <button class="form-button" @click="send()">Fazer Login</button>
    </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue'

export default {
    components: {
        CustomInput
    },
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        send () {
            console.log(this.email);
        }
    }
}
</script>

<style>
.form-card {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    padding: 30px 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #91B591;
    width: 250px;
}

.form-button {
    font-family: "Roboto";
    height: 40px;
    background-color: #194720;
    color: white;
    border: transparent;
    border-radius: 5px;
}

.logo-container {
    display: flex;
    margin: 0 auto;
    width: 200px;
    align-items: center;
    margin-bottom: 20px;
}

.logo-image {
    height: 50px;
}

.logo-text {
    font-family: "Roboto Condensed";
    font-size: 50px;
    margin-left: 5px;
    color:#194720;
}
</style>