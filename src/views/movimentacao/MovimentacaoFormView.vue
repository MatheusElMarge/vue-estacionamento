<template>
    <div class="container">

        <div class="row">
            
            <div class="col-md-2"> </div>
        </div> 
        <hr />

        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-4 text-start">
                <label class="form-label">Selecione o veiculo cadastrado</label>
                <select v-model="movimentacao.veiculo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example">
                    <option v-for="item in veiculoLista" :value="item" >{{ item.placa }}</option>
                </select>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-4 text-start">
                <label class="form-label">selecione o condutor cadastrado</label>
                <select v-model="movimentacao.condutor" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example">
                    <option v-for="item in condutorLista" :value="item" >{{ item.nome }}</option>
                </select>
            </div>
        </div>

        <hr />

        <div class="col-md-3 ms-4 ">
    <div class="d-flex justify-content-center gap-2">
      <div>
        <RouterLink to="/movimentacao">
          <button class="btn btn-danger ">voltar</button>
        </RouterLink>
      </div>
      <button v-if="this.form === undefined" @click="cadastrar()"
        class="btn btn-primary   justify-content-center">Cadastrar</button>
      <button v-if="this.form === 'editar'" @click="editar()" class=" btn-primary mt-3">Editar</button>
      <button v-if="this.form === 'excluir'" @click="excluir()" class=" btn-primary mt-3">Excluir</button>
    </div>
  </div>
  </div>
      
</template>



<script lang="ts">
import { defineComponent } from 'vue';

import MovimentacaoClient from '@/clients/MovimentacaoClient';
import CondutorClient from '@/clients/CondutorClient';
import VeiculoClient from '@/clients/VeiculoClient';

import { Movimentacao } from '@/assets/models/Movimentacao';
import { Condutor } from '@/assets/models/Condutor';
import { Veiculo } from '@/assets/models/Veiculo';


export default defineComponent({
    name: 'CadastrarMovimentacaoForm',
    data() {
        return {
            condutorLista: new Array<Condutor>(),
            veiculoLista: new Array<Veiculo>(),
            movimentacao: new Movimentacao(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            } 
        };
    },
    computed: {
        id() {
            return this.$route.query.id
        },
        form() {
            return this.$route.query.form
        }
    },
    mounted() {
        this.findAllVeiculos();
        this.findAllCondutores();

        if (this.id !== undefined) {
            this.findById(Number(this.id))
        }
    },
    methods: {
        findById(id: number) {
            MovimentacaoClient.findById(id).then(success => {
                this.movimentacao = success
            }).catch(error => {
                console.log(error);
            })
        },
        findAllVeiculos() {
            VeiculoClient.listAll().then(success => {
                this.veiculoLista = success
            }).catch(error => {
                console.log(error)
            })
        },
        findAllCondutores() {
            CondutorClient.listAll().then(success => {
                this.condutorLista = success
            }).catch(error => {
                console.log(error)
            })
        },
        cadastrar() {
            MovimentacaoClient.cadastrar(this.movimentacao).then(success => {
                this.movimentacao = new Movimentacao()

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "parabens.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {

                this.mensagem.ativo = true;
                this.mensagem.mensagem = error.data;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },
        editar() {
            MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao).then(success => {
                this.movimentacao = new Movimentacao()

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Parabens.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {

                this.mensagem.ativo = true;
                this.mensagem.mensagem = error.data;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },
        excluir() {
            MovimentacaoClient.deletar(this.movimentacao.id).then(success => {
                this.movimentacao = new Movimentacao()

                this.$router.push({ name: 'Movimentacao' })
            }).catch(error => {

                this.mensagem.ativo = true;
                this.mensagem.mensagem = error.data;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },
        
    }
});
</script>

<style scoped lang="scss"></style>