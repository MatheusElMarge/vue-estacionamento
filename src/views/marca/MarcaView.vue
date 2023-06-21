<template>
  <div  class="container text-center">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Marcas</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>GOl </td>
      <td></td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>punto</td>
      <td></td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>mercedes</td>
      <td></td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
    </tr>
  </tbody>
  </table>
</div>

    
<div>
      <RouterLink to="/marcaForm">
        <button class="btn btn-primary" > Cadastrar marca  </button>
      </RouterLink>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarcaView",
  data() {
    return {
      showModal: false,
    }
  }
})
</script>

<style scoped lang="scss">
</style>
