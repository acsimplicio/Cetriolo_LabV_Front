<template>
    <div class="home">
        <Header />
        <div class="home-content">
            <card-postar-tarefa v-if="currentUser.autorizacao == 'ROLE_ALUNO'" :materias="materias" />
            <card-admin v-if="currentUser.autorizacao == 'ROLE_ADMIN'" />
        </div>
    </div>
</template>

<script>
import CardPostarTarefa from '@/components/CardPostarTarefa.vue'
import CardAdmin from '@/components/CardAdmin.vue'
import Header from '@/components/Header.vue'
import axios from 'axios'

export default {
    components: {
        CardPostarTarefa,
        CardAdmin,
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
    justify-content: center;
}

.home-content {
    margin-top: 120px;
}
</style>