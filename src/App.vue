<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-gradient" style="background-color: #007bff;">
  <a class="navbar-brand" href="#">Chucky jonson's Park</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">
        <router-link to="/veiculo">
          <a class="nav-link" href="#">Veiculo</a>
       </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/marca">
          <a class="nav-link" href="#">Marca</a>
        </router-link>
      </li>
    
      <li class="nav-item">
        <router-link to="/modelo">
          <a class="nav-link" href="#">Modelo</a>
        </router-link>
      </li>


      <li class="nav-item">
        <router-link to="/condutor">
        <a class="nav-link" href="#">Condutor</a>
      </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/movimentacao">
          <a class="nav-link fw-bold" href="#">Estacionar</a>
        </router-link>
      </li>


      <li class="nav-item">
      <router-link to="/configuracao">
        <a class="nav-link" href="#">configuracao</a>
      </router-link>
    </li>

    </ul>

    

  </div>
  <div class="bg-secondary"></div>
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
  width: auto;
  height: auto;
}


</style>
