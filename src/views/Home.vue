<template>
    <div class="home">
        <Header />
        <card-tarefa v-if="currentUser.autorizacao == 'ROLE_ALUNO'" :materias="materias" />
        <card-delete v-if="currentUser.autorizacao == 'ROLE_ADMIN'" :materias="materias" />
    </div>
</template>

<script>
import CardTarefa from '@/components/CardTarefa.vue'
import CardDelete from '@/components/CardDelete.vue'
import Header from '@/components/Header.vue'
import axios from 'axios'

export default {
    components: {
        CardTarefa,
        CardDelete,
        Header
    },
    data () {
        return {
            materias: []
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
    mounted () {
        axios.get('materia',
        { headers: { Accept: 'application/json' } })
        .then(res => {
            this.materias = res.data;
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>
.home {
    background-color: #F9F2EA;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>