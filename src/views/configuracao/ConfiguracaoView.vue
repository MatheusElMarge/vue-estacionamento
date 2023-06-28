<template>
    <div class="container" style="background: ;">

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

        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Valor Hora</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.valorHora">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Valor Multa </label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.valorMulta">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Inicio Expediente </label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.inicioExpediente">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Fim Expediente </label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.fimExpediente">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Tempo para Desconto </label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.tempoParaDesconto">
                    </div>
                </div>

            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Tempo de Desconto </label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.tempoDeDesconto">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Gerar desconto</label>
                        <select v-model="configuracao.gerarDesconto" :disabled="this.form === 'excluir' ? '' : disabled"
                            class="form-select" aria-label="Default select example">
                            <option v-for="item in options" :value="item.value">{{ item.text }}</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas de Carro</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasCarro">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas Moto 
                        </label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasMoto">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas Vans </label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasVan">
                    </div>
                </div>

            </div>
        </div>

        <hr />

         <div class="col-md-3 ms-4 ">
    <div class="d-flex justify-content-center gap-2">
      <div>
        <RouterLink to="/veiculo">
          <button class="btn btn-danger ">voltar</button>
        </RouterLink>
      </div>
      <button  v-if="this.form === undefined" @click="editar()" class="btn btn-primary ">Editar</button>
    </div>
  </div>
    </div>
</template>

<style scoped lang="scss">

</style>




<script lang="ts">
import { defineComponent } from 'vue';
import  ConfiguracaoClient  from '@/clients/ConfiguracaoClient';
import { Configuracao } from '@/assets/models/Configuracao';

export default defineComponent({
    name: 'Configuracao',
    data() {
        return {
            configuracao: new Configuracao(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },

            options: [
                { text: 'true', value: true },
                { text: 'false', value: false }
            ]
        };


    },
    mounted() {
        this.findById(1);
    },
    methods: {
        findById(id: number) {
            ConfiguracaoClient.findById(id).then(success => {
                this.configuracao = success
            }).catch(error => {
                console.log(error)
            })
        },
        editar() {
            ConfiguracaoClient.editar(1, this.configuracao).then(success => {
                this.configuracao = new Configuracao()

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
        }
    }
});

</script>