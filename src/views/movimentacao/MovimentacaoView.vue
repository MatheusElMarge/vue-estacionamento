<template>
    <div class="container text-center">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">status</th>
                    <th scope="col">condutor</th>
                    <th scope="col">entrada</th>
                    <th scope="col">veiculo</th>
                    <th scope="col">valor</th>
                    <td colspan="2"></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in movimentacaoLista" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td>
                        <span v-if="item.ativo" class="badge text-bg-success">ativo</span>
                        <span v-if="!item.ativo" class="badge text-bg-danger">inativo</span>
                    </td>
                    <td>{{ item.condutor?.nome }}</td>
                    <td>{{ item.entrada }}</td>
                    <td>{{ item.veiculo?.placa }}</td>
                    <td>{{ item.valorHora }}</td>
                    <th class="col-md-2">
                        <div class="grid d-flex justify-content-center">
                            <div class="p-2 g-col-6">
                                <div class="btn-group" role="group" ariel-label="basic mixed styles example">
                                    <RouterLink type="button" class="btn btn-outline-danger" :to="{
                                        name: 'movimentacaoform-excluir',
                                        query: { id: item.id, form: 'excluir' },
                                    }">
                                        Excluir
                                    </RouterLink>
                                    <button v-if="this.form === undefined" class="btn btn-danger" @click="fecharMovimentacao()">
                        finalizar
                    </button>
                                </div>
                            </div>
                        </div>
                    </th>
                    <th class="col-md-2">
                        <div class="p-2 g-col-6">
                            <RouterLink type="button" class="btn btn-outline-warning" :to="{
                                name: 'movimentacaoform-editar',
                                query: { id: item.id, form: 'editar' },
                            }">
                                Editar
                            </RouterLink>
                            
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
      <RouterLink to="/movimentacaoform">
        <button class="btn btn-primary" > Iniciar Movimentacao </button>
      </RouterLink>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovimentacaoClient from "@/clients/MovimentacaoClient";
import { Movimentacao } from "@/assets/models/Movimentacao";

export default defineComponent({
    name: "Movimentacao",
    data() {
        return {
            movimentacaoLista: new Array<Movimentacao>(),
            movimentacaoListaAtivos: new Array<Movimentacao>(),
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MovimentacaoClient.listAll()
                .then((success) => {
                    this.movimentacaoLista = success;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        findAtivos() {
            MovimentacaoClient.findByAbertas()
                .then((success) => {
                    this.movimentacaoListaAtivos = success;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
});
</script>
