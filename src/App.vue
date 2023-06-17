<template>
  <nav>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../public/img/61e6cb77422df04ad519a4910729243ba0c27bd868f7c24d7eea8fa68f084e4b_1.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Estacionamento do cabra
    </a>
    <div class="nav-item d-flex ">
    
      <router-link to="/">
        <a class="btn btn-primary " href="#" role="button">Movimentar</a>
      </router-link>
    
      <router-link to="/Veiculo">
        <a class="btn btn-primary " href="#" role="button">Veiculo</a>
      </router-link>

      <router-link to="/marca">
        <a class="btn btn-primary" href="#" role="button">Marca</a>
      </router-link>

      <router-link to="/condutor">
        <a class="btn btn-primary" href="#" role="button">Condutor</a>
      </router-link>
      
      <router-link to="/modelo">
        <a class="btn btn-primary" href="#" role="button">Modelo</a>
      </router-link>
    </div>
  </div>
</nav>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
