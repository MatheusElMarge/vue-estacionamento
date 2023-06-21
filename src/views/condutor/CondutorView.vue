<template>

<div  class="container text-center">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Condutores</th>
        <th scope="col">Numero</th>
        <th scope="col">CPF</th>
        <th scope="col">Status</th>
        <td colspan="2">Opções</td>
      </tr>
    </thead>



    <tbody>
      <tr v-for="item in condutorLista " :key="item.id">
        <th scope="row"> {{ item.id }}</th>
        <td>{{item.nome}}</td>
        <td>{{ item.telefone }}</td>
        <td>{{item.cpf}}</td>
        <td>
          <spam v-if="item.ativo" class="badge text-bg-success">ativo</spam>
          <spam v-if="!item.ativo" class="badge text-bg-danger">desativo</spam>
        </td>

        <th scope="col">
          <RouterLink :to="{name:'condutorform-editar', query:{id:item.id, form:'editar'}}">
            <button type="button" class="btn btn-success">Editar</button>
          </RouterLink>

          <RouterLink :to="{name:'condutorform-excluir', query:{id:item.id, form:'excluir'}}">
            <button type="button" class="btn btn-danger">Excluir</button>
          </RouterLink>
          
        </th>


      </tr>
    </tbody>
    </table>
  </div>
    <div>
      <RouterLink to="/condutorForm">
        <button class="btn btn-primary" > Cadastrar Condutor </button>
      </RouterLink>

      
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import  CondutorCLient  from '@/clients/CondutorClient'
import  {Condutor}  from "@/assets/models/Condutor";

export default defineComponent({
  name: "condutorView",
  data(){
    return{
      condutorLista: new Array<Condutor>()
    }
  },
  mounted(){
    this.findAll();
  },
  methods:{
    findAll(){
      CondutorCLient.listAll().then(success => {
        this.condutorLista = success;
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
</script>
