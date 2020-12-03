<template>
    <form class="card-delete" @submit.prevent="deletar()"> 
        <div class="card-delete-title">Deletar usuário</div>
        <div class="divider" />
        <span class="card-input-name">Usuário</span>
        <select v-model="usuarioId">
            <option v-for="usuario in usuarios" :key="usuario.id" :value="usuario.id" >
                {{usuario.nome}}
            </option>
        </select>
        <span v-if="mensagem">{{mensagem}}</span>
        <button class="card-send-button" type="submit">
            <span v-if="!loading && !success">Deletar</span>
            <div class="check" v-else-if="success" />
            <div v-else class="loader"></div>
        </button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        usuario: {
            type: Array
        }
    },
    data () {
        return {
            usuarios: [],
            usuarioId: '',
            mensagem: '',
            loading: false,
            success: false
        }
    },
    computed: {
        currentUser: {
            get () {
                return this.$store.state.currentUser;
            },
            set (value) {
                this.setCurrentUser(value);
            }
        }
    },
    mounted () {
        axios.get('usuario',
        { headers: { Accept: 'application/json', Authorization: `Bearer ${this.currentUser.token}` } })
        .then(res => {
            this.usuarios = res.data;
            console.log(res.data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    methods: {
        deletar () {
            this.loading = true

            axios.delete(`usuario/delete/${this.usuarioId}`,
            { headers: { Accept: 'application/json', Authorization: `Bearer ${this.currentUser.token}` } })
            .then((res) => {
                this.success = true
                this.mensagem = res.data
            })
            .catch(error => {
                console.log(error)
                this.mensagem = error
            })
            .finally(() => {
                this.loading = false
            })
        }
    }
}
</script>

<style scoped>
.card-delete {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #a08f7b;
}

.card-delete-title {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
}

.card-input-name {
    padding: 15px 0 5px 0;
}

.card-send-button {
    font-family: "Roboto";
    height: 40px;
    background-color: #194720;
    color: white;
    border: transparent;
    margin-top: 15px;
    border-radius: 5px;
}

.divider {
    height: 1px;
    width: 100%;
    background-color: #a5e0ca;
}

.loader {
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

.check {
  display: inline-block;
  transform: rotate(45deg);
  height: 14px;
  width: 7px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
}
</style>