<template>
  <div  class="container text-center">
  <table class="table">
    <p>VEICULOS ESTACIONADOS</p>
  <thead>
    <tr>
      <th scope="col">PLACA</th>
      <th scope="col">Condutor</th>
      <th scope="col">Hora</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">133-AAA</th>
      <td>Firmino </td>
      <td>22:22:22</td>
      <th scope="col"><button type="button" class="btn btn-danger">Encerrar</button></th>
    </tr>
    <tr>
      <th scope="row">112-CCC</th>
      <td>Erick</td>
      <td>11:11:11</td>
      <th scope="col"><button type="button" class="btn btn-danger">Encerrar</button></th>
    </tr>
    <tr>
      <th scope="row">344-CCC</th>
      <td>ANdre</td>
      <td>69:99:10</td>
      <th scope="col"><button type="button" class="btn btn-danger">Encerrar</button></th>
    </tr>
  </tbody>
  </table>
</div>

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
