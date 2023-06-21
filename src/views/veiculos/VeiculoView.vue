<template>
  <div  class="container text-center">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Tipo</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope="col">cor</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>CARRO </td>
      <td>Mercedes</td>
      <td>BMW</td>
      <td>PRETO</td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>MOTO </td>
      <td>Africa-Twin</td>
      <td>2011</td>
      <td>BRANCO</td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>VAN </td>
      <td>sla marca de van</td>
      <td>n sei nem marca vou saber modelo</td>
      <td>VERDE</td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
    </tr>
  </tbody>
  </table>
</div>

    <div>
      <RouterLink to="/veiculoForm">
        <button class="btn btn-primary" > Cadastrar veiculo </button>
      </RouterLink>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "veiculoView"
});
</script>

<style scoped lang="scss">


</style>
