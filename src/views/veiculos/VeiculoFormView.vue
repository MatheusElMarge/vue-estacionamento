<template>
<div>
<form class="">
    <div class="row mt-4">
  <div class="col">
    <div class="form-group  d-flex ms-1">
      <label for="exampleFormControlInput1">Modelo do veículo</label>
      <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Digite aqui o modelo">
    </div>
</div>

  <div class="col md-1 sm-2">
    <div class="form-group   d-flex ">
        <label for="exampleFormControlInput1">Marca do veiculo </label>
        <input type="text" class="form-control form-control-sm " id="exampleFormControlInput1" placeholder="digite aqui a marca">
    </div>
  </div>
</div>

<div class="row mt-4">
<div class="col">
  <div class="form-group mt-4 d-flex ms-3 ">
    <label for="exampleFormControlSelect1">Selecione a cor do veiculo</label>
    <select class="form-select form-select-xs w-auto " id="exampleFormControlSelect1">
      <option>PRATA</option>
      <option>DOURADO</option>
      <option>CINZA</option>
      <option>BRANCO</option>
      <option>PRETO</option>
    </select>
  </div>
</div>

<div class="col md-1 sm-4 ">
  <div class="form-group mt-4  d-flex ms-3">
    <label for="exampleFormControlSelect1">Selecione o tipo do veiculo</label>
    <select class="form-select form-select-xs w-auto " id="exampleFormControlSelect1">
      <option>MOTO</option>
      <option>VAN</option>
      <option>CARRO</option>
    </select>
  </div>
</div> 
</div>


<div>
      <RouterLink to="/veiculo">
        <button class="btn btn-primary mt-3" > Enviar </button>
      </RouterLink>
    </div>

</form>
</div>

 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 
 
 
 export default defineComponent({
   name: 'veiculoForm'
 });
 </script>
 
 <style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

*, body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
}
.w-change{
    width: 25vw;
}
 </style>