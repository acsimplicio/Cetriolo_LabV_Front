<template>
    <div class="card-tarefa">
        <span class="card-tarefa-title">
            Tarefas
        </span>
        <table>
            <tr>
                <th>Usuario</th>
                <th>Materia</th>
                <th>Nome do Arquivo</th>
                <th>Nota</th>
            </tr>
            <!-- <tr v-for="tarefa in tarefas" :key="tarefa.nomeArquivo">
                <td>{{tarefa.usuario.nome}} ({{tarefa.usuario.email}})</td>
                <td>{{tarefa.materia.nome}}</td>
                <td>{{tarefa.nomeArquivo}}</td>
                <td>{{tarefa.nota?tarefa.nota:"-"}}</td>
            </tr> -->
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            materias: []
        }
    },
    mounted () {
        axios.get('materia',
        { headers: { Accept: 'application/json'} })
        .then(res => {
            this.materias = res.data;
            console.log(res.data);
        })
        .catch(error => {
            console.log(error)
        })
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
        margin: 0 auto 15px;
        font-weight: 700;
        font-size: 20px;
    }

    table, th, td {
        border: 1px solid black;
    }

    th, td {
        padding: 5px;
        text-align: center;
    }
</style>