<template>
   <div class="row g-3 align-items-center mt-3 ms-3">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Nome do modelo</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Marca</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline">
  </div>
  </div>
  <div>
      <RouterLink to="/modelo">
        <button class="btn btn-primary" > Enviar </button>
      </RouterLink>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'modeloForm'
});
</script>

<style lang="scss">
</style>