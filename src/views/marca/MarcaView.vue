<template>
  <div  class="container text-center">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Marcas</th>
      <th scope="col">Status</th>
      <th scope="col">Opções</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in marcaLista" :key="item.id">
        <th scope="row"> {{ item.id }}</th>
        <td>{{item.nome}}</td>
        <td>
          <spam v-if="item.ativo" class="badge text-bg-success">ativo</spam>
          <spam v-if="!item.ativo" class="badge text-bg-danger">desativo</spam>
        </td>

        <th scope="col">
          <RouterLink :to="{name:'marcaform-editar', query:{id:item.id, form:'editar'}}">
            <button type="button" class="btn btn-success">Editar</button>
          </RouterLink>

          <RouterLink :to="{name:'marcaform-excluir', query:{id:item.id, form:'excluir'}}">
            <button type="button" class="btn btn-danger">Excluir</button>
          </RouterLink>
          
        </th>


      </tr>
    </tbody>
  </table>
</div>

    
<div>
      <RouterLink to="/marcaForm">
        <button class="btn btn-primary" > Cadastrar </button>
      </RouterLink>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import  MarcaClient from "@/clients/MarcaClient";
import { Marca } from "@/assets/models/Marca";

export default defineComponent({
  name: "MarcaView",
  data(){
    return{
      marcaLista: new Array<Marca>()
    }
  },
  mounted(){
    this.findAll();
  },
  methods:{
    findAll(){
      MarcaClient.listAll().then(success => {
        this.marcaLista = success;
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
</script>

<style scoped lang="scss">
</style>
