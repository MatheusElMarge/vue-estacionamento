<template>
    <div class="row  align-items-center mt-3 ms-3">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label bg-white">Nome da marca</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline">
  
  
  
  </div>
  <div>
      <RouterLink to="/marca">
        <button class="btn btn-primary mt-3" > Enviar </button>
      </RouterLink>
    </div>


</div>  
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 
 
 
 export default defineComponent({
   name: 'marcaForm'
 });
 </script>
 
 <style lang="scss">
 </style>