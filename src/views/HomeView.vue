<template>
  <div class="container text-center">
    <table class="table">
      <p>VEICULOS ESTACIONADOS</p>
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">condutor</th>
          <th scope="col">entrada</th>
          <th scope="col">veiculo</th>
          <th scope="col"> valor </th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in movimentacaoLista" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>
            <span v-if="item.ativo" class="badge text-bg-success">ativo</span>
            <span v-if="!item.ativo" class="badge text-bg-danger">inativo</span>
          </td>
          <td>{{ item.condutor }}</td>
          <td>{{ item.veiculo.entrada}}</td>
          <td>{{ item.condutor.veiculo }}</td>
          <td>{{ item.valorHoraTotal }}</td>
          <th class="col-md-2">
            <div class="grid d-flex justify-content-center">
              <div class="p-2 g-col-6">
                <div class="btn-group" role="group" ariel-label="basic mixed styles example">
                  <RouterLink type="button" class="btn btn-outline-danger"
                    :to="{ name: 'movimentacaoform-excluir', query: { id: item.id, form: 'excluir' } }">
                    Excluir
                  </RouterLink>
                </div>
              </div>
            </div>
          </th>
          <th class="col-md-2">
            <div class="p-2 g-col-6">
              <div class="btn-group" role="group" aria-label="basic mixed styles example">
                <RouterLink type="button" class="btn btn-danger "
                  :to="{ name: 'movimentacao-recibo-view', query: { id: item.id } }">
                  Finalizar
                </RouterLink>
              </div>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <RouterLink type="button" class="btn btn-outline-warning"
      :to="{ name: 'movimentacaoform-editar', query: { id: item.id, form: 'editar' } }">
      Editar
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  MovimentacaoClient  from '@/clients/MovimentacaoClient';
import { Movimentacao } from '@/assets/models/Movimentacao';


export default defineComponent({
    name: 'Movimentacao',
    data() {
        return {
            movimentacaoLista: new Array<Movimentacao>(),
            movimentacaoListaAtivos: new Array<Movimentacao>()
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MovimentacaoClient.listAll().then(success => {
                this.movimentacaoLista = success

            }).catch(error => {
                console.log(error);
            });
        },
        findAtivos() {
            MovimentacaoClient.findByAbertas().then(success => {
                this.movimentacaoListaAtivos = success
            }).catch(error => {
                console.log(error)
            })
        }

    }
});

</script>
