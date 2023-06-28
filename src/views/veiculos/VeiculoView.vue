<template>
  <div  class="container text-center">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">status</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope="col">placa</th>
      <th scope="col">cor</th>
      <th scope="col">ano</th>
      <td colspan="2">Opções</td>
    </tr>
  </thead>
  <tbody>
                        <tr v-for="item in veiculoLista" :key="item.id">
                            <th scope="row">{{ item.id }}</th>
                            <td>
                                <span v-if="item.ativo" class="badge text-bg-success">ativo</span>
                                <span v-if="!item.ativo" class="badge text-bg-danger">inativo</span>
                            </td>
                            <td>{{ item.modelo.marca.nome }}</td>
                            <td>{{ item.modelo.nome }}</td>
                            <td>{{ item.placa }}</td>
                            <td>{{ item.cor }}</td>
                            <td>{{ item.ano }}</td>
                            <td>{{  }}</td>
                            <th class="col-md-2">
                                <div class="grid d-flex justify-content-center">
                                    <div class="p-2 g-col-6">
                                        <div class="btn-group" role="group" ariel-label="Basic mixed styles example">
                                            <RouterLink type="button" class="btn btn-success"
                                                :to="{ name: 'veiculoform-editar', query: { id: item.id, form: 'editar' } }">
                                                Editar
                                            </RouterLink>
                                        </div>
                                        <div class="btn-group" role="group" ariel-label="basic mixed styles example">
                                            <RouterLink type="button" class="btn btn-danger"
                                                :to="{ name: 'veiculoform-excluir', query: { id: item.id, form: 'excluir' } }">
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

    <div>
      <RouterLink to="/veiculoForm">
        <button class="btn btn-primary" > Cadastrar veiculo </button>
      </RouterLink>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  VeiculoClient  from '@/clients/VeiculoClient';
import { Veiculo } from '@/assets/models/Veiculo';

export default defineComponent({
    name: 'VeiculoView',
    data() {
        return {
            veiculoLista: new Array<Veiculo>(),
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            VeiculoClient.listAll().then(success => {
                this.veiculoLista = success
            }).catch(error => {
                console.log(error)
            })

        }
    }
});

</script>