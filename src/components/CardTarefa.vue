<template>
    <form class="card-tarefa" @submit.prevent="send()"> 
        <div class="card-tarefa-title">Envie sua tarefa por aqui.</div>
        <div class="divider" />
        <span class="card-input-name">Matéria</span>
        <select v-model="tarefa.materia.id">
            <option v-for="materia in materias" :key="materia.id" :value="materia.id">
                {{materia.nome}}
            </option>
        </select>
        <span class="card-input-name">Arquivo</span>
        <input id="fileInput" @change="extractFileName" type="file">
        <button class="card-send-button" type="submit">
            <span v-if="!loading && !success">Enviar</span>
            <div class="check" v-else-if="success" />
            <div v-else class="loader"></div>
        </button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        materias: {
            type: Array
        }
    },
    data () {
        return {
            tarefa: {
                materia: {
                    id: null
                },
                nomeArquivo: null
            },
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
    methods: {
        extractFileName () {
            // Pega o componente de id fileInput
           const input = document.getElementById('fileInput');
           // Extrai o nome do arquivo do valor do componente usando uma RegEx
           let fileName = input.value.split(/(\\|\/)/g).pop();
           // Da set no nomeArquivo como o nome extraído
           this.tarefa.nomeArquivo = fileName;
        },
        send () {
            this.loading = true

            const data = {
                ...this.tarefa,
                usuario: {
                    email: this.currentUser.email
                }
            }
            axios.post('tarefa', data,
            { headers: { Accept: 'application/json' } })
            .then(() => {
                this.success = true
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.loading = false)
        }
    }
}
</script>

<style scoped>
.card-tarefa {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #a08f7b;
}

.card-tarefa-title {
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