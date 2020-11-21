<template>
    <form @submit.prevent="send()" class="form-card">
        <div class="logo-container">
            <img class="logo-image" alt="Cetriolo logo" src="../assets/logo.png">
            <h1 class="logo-text">Cetriolo</h1>
        </div>
        <custom-input fieldName="Email" v-model="email" type="email" placeholder="Ex: email@example.com" />
        <custom-input fieldName="Senha" v-model="password" type="password" />
        <button class="form-button" type="submit">Fazer Login</button>
    </form>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'

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
    computed: {
        currentUserToken: {
            get () {
                return this.$store.state.currentUserToken
            },
            set (value) {
                this.setCurrentUserToken(value);
            }
        }
    },
    methods: {
        ...mapMutations([
            'setCurrentUserToken'
        ]),
        send () {
            axios.post('login',
            { params: { username: this.email, password: this.password }, headers: { Accept: 'application/json' } })
            .then(res => {
                this.currentUserToken = res.data.token
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    console.log("Usuário ou senha inválido");
                }
            })
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