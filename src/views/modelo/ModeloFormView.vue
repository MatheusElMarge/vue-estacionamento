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
          <div class="col-md-4 text-start">
              <label class="form-label">Nome do modelo *</label>
              <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                  v-model="modelo.nome">
          </div>
      </div>
      <div class="row" style="margin-top: 10px;">
          <div class="col-md-4 text-start">
              <label class="modelo-marca">selecione a Marca!</label>
              <select v-model="modelo.marca" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="modelo-marca">
                  <option v-for="item in marca" :value="item" >{{ item.nome }}</option>
              </select>
          </div>
      </div>

      <hr />

      <div class="col-md-3 ms-4 ">
    <div class="d-flex justify-content-center gap-2">
      <div>
        <RouterLink to="/modelo">
          <button class="btn btn-danger ">voltar</button>
        </RouterLink>
      </div>
      <button v-if="this.form === undefined" @click="cadastrar()"
        class="btn btn-primary   justify-content-center">Cadastrar</button>
      <button v-if="this.form === 'editar'" @click="editar()" class=" btn-primary mt-3">Editar</button>
      <button v-if="this.form === 'excluir'" @click="deletar()" class=" btn-primary mt-3">Excluir</button>
    </div>
  </div>
  </div>
</template>




<script lang="ts">
import { Modelo } from '@/assets/models/Modelo';
import { defineComponent } from 'vue';
import ModeloClient from '@/clients/ModeloClient';
import MarcaClient from '@/clients/MarcaClient';
import { Marca } from '@/assets/models/Marca';

export default defineComponent({
  name: 'CadastrarModeloView',
  components: {

  },
  data() {
      return {
          modelo: new Modelo(),
          marca: new  Array<Marca>(),
          mensagem: {
              ativo: false as boolean,
              titulo: "" as string,
              mensagem: "" as string,
              css: "" as string
          }
      }
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
      
      this.findAllMarca();
      
      if (this.id !== undefined) {
          this.findById(Number(this.id));
      }
  },
  methods: {
      findById(id: number) {
          ModeloClient.findById(id).then(success => {
              this.modelo = success;

          }).catch(error => {

              this.mensagem.ativo = true;
              this.mensagem.mensagem = error.data;
              this.mensagem.titulo = "Error. ";
              this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          })
      },
      findAllMarca() {
          MarcaClient.listAll().then(success => {
              this.marca = success;
             
          }).catch(error =>{
              console.log(error)
          })
      },
      cadastrar() {
          ModeloClient.cadastrar(this.modelo).then(success => {
              this.modelo = new Modelo()
              
              this.mensagem.ativo = true;
              this.mensagem.mensagem = success;
              this.mensagem.titulo = "parabens!";
              this.mensagem.css = "alert alert-success alert-dismissible fade show";
          })
              .catch(error => {

                  this.mensagem.ativo = true;
                  this.mensagem.mensagem = error.data;
                  this.mensagem.titulo = "Error ";
                  this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                  console.log(error)
              });
      },
      editar() {
          ModeloClient.editar(this.modelo.id, this.modelo).then(success => {
              this.modelo = new Modelo()

              this.mensagem.ativo = true;
              this.mensagem.mensagem = success;
              this.mensagem.titulo = "parabens!";
              this.mensagem.css = "alert alert-success alert-dismissible fade show";
          })
              .catch(error => {

                  this.mensagem.ativo = true;
                  this.mensagem.mensagem = error.data;
                  this.mensagem.titulo = "Error. ";
                  this.mensagem.css = "alert alert-danger alert-dismissible fade show";
              });
      },
      deletar() {
          ModeloClient.deletar(this.modelo.id).then(success => {
              this.modelo = new Modelo()

              this.$router.push({ name: 'modelo-lista-view' });
          })
              .catch(error => {

                  this.mensagem.ativo = true;
                  this.mensagem.mensagem =error.data;
                  this.mensagem.titulo = "Error. ";
                  this.mensagem.css = "alert alert-danger alert-dismissible fade show";
              })
      },


  }
});
</script>

<style scoped lang="scss"></style>