<template>
    <form class="card-delete"> 
        <div class="card-delete-title">Detalhes do Usuário</div>
        <div class="divider" />
        <span class="card-input-name">Usuário</span>
        <select class="card-select" v-model="usuarioSelecionado" @change="igualaNome()">
            <option v-for="usuario in usuarios" :key="usuario.id" :value="usuario" >
                {{usuario.nome}}
            </option>
        </select>
        <span>Nome</span>
        <input class="input-textbox" v-model="usuarioNome"/>
        <span>Email</span>
        <input type="email" class="input-textbox" v-model="usuarioSelecionado.email"/>
        <span>Telefone</span>
        <input class="input-textbox" v-model="usuarioSelecionado.telefone"/>
        <span v-if="mensagem">{{mensagem}}</span>
        <button class="card-send-button" @click="editar($event)">
            <span v-if="!loading">Salvar Alterações</span>
            <div v-else class="loader"></div>
        </button>
        <button class="card-send-button" @click="deletar($event)">
            <span v-if="!loading">Deletar</span>
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
            usuarioNome: '',
            usuarioSelecionado: {
                nome: '',
                email: '',
                telefone: ''
            },
            mensagem: '',
            loading: false,
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
        deletar (e) {
            e.preventDefault()
            this.loading = true

            axios.delete(`usuario/delete/${this.usuarioSelecionado.id}`,
            { headers: { Accept: 'application/json', Authorization: `Bearer ${this.currentUser.token}` } })
            .then((res) => {
                this.mensagem = res.data
            })
            .catch(error => {
                console.log(error)
                this.mensagem = error
            })
            .finally(() => {
                this.loading = false
            })
        },

        editar (e) {
            e.preventDefault()
            this.loading = true
            this.usuarioSelecionado.nome = this.usuarioNome

            axios.put('/usuario/alterar',
            this.usuarioSelecionado,
            { headers: { Accept: 'application/json', Authorization: `Bearer ${this.currentUser.token}` } })
            .then(() => {
                this.mensagem = "Usuario pimbado com sucesso!"
            })
            .catch(error => {
                console.log(error)
                this.mensagem = error
            })
            .finally(() => {
                this.loading = false
            })
        },

        igualaNome () {
            this.usuarioNome = this.usuarioSelecionado.nome
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
    width: 320px;
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

.input-textbox {
    border: transparent;
    border-bottom: 2px solid #3A663E;
    height: 20px;
    padding: 5px;
    margin-bottom: 20px;
}

.card-select {
    margin-bottom: 15px
}
</style>