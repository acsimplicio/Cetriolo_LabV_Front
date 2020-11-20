<template>
  <div class="home">
    <login-form />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
      LoginForm
  }
}
</script>

<style scoped>
.home {
    background-color: #3aaf83;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
