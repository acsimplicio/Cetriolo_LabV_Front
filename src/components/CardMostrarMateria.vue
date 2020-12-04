<template>
    <div class="card-materia">
        <span class="card-materia-title">
            Materias
        </span>
        <table>
            <tr>
                <th>Id</th>
                <th>Nome</th>
            </tr>
            <tr v-for="materia in materias" :key="materia.id">
                <td>{{materia.id}}</td>
                <td>{{materia.nome}}</td>
            </tr>
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
    .card-materia {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #a08f7b;
    }

    .card-materia-title {
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