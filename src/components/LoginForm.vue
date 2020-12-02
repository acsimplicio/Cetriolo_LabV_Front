<template>
    <form @submit.prevent="send()" class="form-card">
        <logo class="login-logo" />
        <custom-input fieldName="Email" v-model="email" type="email" placeholder="Ex: email@example.com" />
        <custom-input fieldName="Senha" v-model="password" type="password" />
        <span v-if="error" class="login-error">{{error}}</span>
        <button class="form-button" type="submit">
            <span v-if="!loading">Fazer Login</span>
            <div v-else class="login-loader"></div>
        </button>
    </form>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue'
import Logo from '@/components/Logo.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
    components: {
        CustomInput,
        Logo
    },
    data () {
        return {
            email: '',
            password: '',
            error: null,
            loading: false
        }
    },
    computed: {
        currentUser: {
            get () {
                return this.$store.state.currentUser
            },
            set (value) {
                this.setCurrentUser(value);
            }
        }
    },
    methods: {
        ...mapMutations([
            'setCurrentUser'
        ]),
        send () {
            this.loading = true;

            axios.post('login',
            { username: this.email, password: this.password },
            { headers: { Accept: 'application/json' } })
            .then(res => {
                this.error = null;
                const user = { 'token': res.data.token, 'autorizacao': res.data.autorizacao, 'email': res.data.username }
                this.currentUser = user;
                this.$router.push('/home');
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.error = "Usuário ou senha inválido";
                }
            })
            .finally(() => this.loading = false)
        }
    }
}
</script>

<style scoped>
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

.login-logo {
    margin: 0 auto;
    margin-bottom: 20px;
}

.login-error {
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
}

.login-loader {
    border: 5px solid #f3f3f32b;
    border-top: 5px solid #feffff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>