<template>
    <div  class="container text-center">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Modelos</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>BMW Série 1 </td>
        <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
        




      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Land Rover Defender</td>
        <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Porsche Taycan</td>
        <th scope="col"><button type="button" class="btn btn-danger">Excluir</button>
          <button type="button" class="btn btn-success">Editar</button></th>
      </tr>
    </tbody>
    </table>
  </div>
  
  
  
      
  <div>
      <RouterLink to="/modeloForm">
        <button class="btn btn-primary" >Cadastrar modelo </button>
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
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
    },
  });
  </script>
  
  <style scoped lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  </style>
  