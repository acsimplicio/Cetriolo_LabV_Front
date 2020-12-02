<template>
    <div class="header">
        <logo />
        <button class="logout-button" @click="logout">Sair</button>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import { mapMutations } from 'vuex'

export default {
    components: {
        Logo
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
        logout () {
            this.currentUser = null
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 97%;
    background-color: #3aaf83;
    padding: 12px 40px;
    border-bottom: 1px solid #5b9864;
}

.logout-button {
    font-family: "Roboto";
    height: 40px;
    width: 80px;
    background-color: #194720;
    color: white;
    border: transparent;
    border-radius: 5px;
}
</style>