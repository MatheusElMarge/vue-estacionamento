<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Veiculo</th>
      <th scope="col">Hora</th>
      <th scope="col"><button type="button" class="btn btn-danger">Encerrar</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Fiat</td>
      <td>Uno</td>
      <th scope="col"><button type="button" class="btn btn-danger">Encerrar</button></th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <th scope="col"><button type="button" class="btn btn-danger">Encerrar</button></th>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <th scope="col"><button type="button" class="btn btn-danger">Encerrar</button></th>
    </tr>
  </tbody>
</table>


<div>
    <button class="btn btn-primary btn-lg mt-5">Marcar Entrada</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
});
</script>
