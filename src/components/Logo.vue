<template>
  <div class="logo-container">
    <img class="logo-image" alt="Cetriolo logo" src="../assets/logo.png">
    <h1 class="logo-text">Cetriolo</h1>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.logo-container {
    display: flex;
    width: 200px;
    align-items: center;
}

.logo-image {
    height: 50px;
}

.logo-text {
    font-family: "Roboto Condensed";
    font-size: 50px;
    margin-left: 5px;
    color:#194720;
}

.center {
  margin: 0 auto;
}
</style>