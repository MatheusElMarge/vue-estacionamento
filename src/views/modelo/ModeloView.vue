<template>
  <div class="container text-center">

      <div class="col-12">
          <div class="">
              <table class="table">
                  <thead>
                      <tr>
                          <th scope="col">id</th>
                          <th scope="col">Status</th>
                          <th scope="col">modelo</th>
                          <th scope="col">marca</th>
                          <th scope="col" colspan="2">Opções</th>
                      </tr>
                  </thead>
                  <tbody class="table-group-divider">
                      <tr v-for="item in modeloLista" :key="item.id">
                          <th scope="row">{{ item.id }}</th>
                          <td>
                              <span v-if="item.ativo" class="badge text-bg-success">ativo</span>
                              <span v-if="!item.ativo" class="badge text-bg-danger">inativo</span>
                          </td>
                          <td>{{ item.nome }}</td>
                          <td>{{ item.marca.nome }}</td>
                          <th class="col-md-2">
                              <div class="grid d-flex justify-content-center">
                                  <div class="p-2 g-col-6">
                                      <div class="btn-group" role="group" ariel-label="Basic mixed styles example">
                                          <RouterLink type="button" class="btn btn-success"
                                              :to="{ name: 'modeloform-editar', query: { id: item.id, form: 'editar' } }">
                                              Editar
                                      </RouterLink>
                                          <RouterLink type="button" class="btn btn-danger"
                                              :to="{ name: 'modeloform-excluir', query: { id: item.id, form: 'excluir' } }">
                                              Excluir
                                          </RouterLink>
                                      </div>
                                  </div>
                              </div>
                          </th>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="col">
              <RouterLink to="/modeloform">
                  <button type="button" class="btn btn-primary">Cadastrar</button>
              </RouterLink>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Modelo } from '@/assets/models/Modelo';
import { defineComponent } from 'vue';
import ModeloClient  from '@/clients/ModeloClient';


export default defineComponent({
  name: 'ModeloView',
  components: {

  },
  data() {
      return {
          modeloLista: new Array<Modelo>()
      };
  },
  mounted() {
      this.findAll();
  },
  methods: {
      findAll() {
          ModeloClient.listAll().then(success => {
              this.modeloLista = success;
          })
              .catch(error => {
                  console.log(error);
              })
      }
  }

});


</script>

<style scoped lans="scss">

</style>