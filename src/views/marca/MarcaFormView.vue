<template>
    <div class="div-pai  d-flex bg-dangeralign-items-center justify-content-center">
    <div class="row g-3 align-items-center mt-3 ms-3">
      <div class="row g-3 align-items-center mt-3">
        <div class="col-auto">

          <div v-if="message.ativo" class="row justify-content-center">
            <div class="col-md-12 text-start ">
              <div :class="message.css" role="alert">
                <strong>{{ message.titulo }}</strong> {{ message.message }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            </div>
          </div>

          <label for="exampleFormControlInput1" >Nome</label>
          <input :disabled="this.form === 'excluir' ? '' :disabled"
            v-model="marca.nome" type="text" class="form-control form-control-sm" id="exampleFormControlInput1"
            placeholder="digite aqui a marca">
        </div>
      </div>

      

      <div class="d-flex align-items-center justify-content-center gap-3">

        <button v-if="this.form === undefined" @click="cadastrar()" class="btn btn-primary bg-primary justify-content-center">Cadastrar</button>
        <button v-if="this.form === 'editar'" @click="editar()" class=" btn btn-primary bg-primary mt-3">Editar</button>
        <button v-if="this.form === 'excluir'" @click="deletar()" class="btn btn-primary bg-primary ">Excluir</button>
   
    <div class="d-flex align-items-center justify-content-center">
      <RouterLink to="/marca">
        <button class="btn btn-primary bg-danger " > Voltar </button>
      </RouterLink>
    </div> 
    </div>
    </div>
    </div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import  MarcaClient from '@/clients/MarcaClient';
 import { Marca } from '@/assets/models/Marca';
 
 
 export default defineComponent({
  name: "MarcaForm",
  data() {
    
    return {
      marca: new Marca(),
      message: {
        ativo: false as boolean,
        titulo: "" as string,
        message: "" as string,
        css: "" as string,
      },
    };
  },

  methods: {
    findbyId(id: number) {
      MarcaClient.findById(id)
        .then(success => {
          this.marca = success;
          this.message.ativo = true;
          this.message.titulo = "success";
          this.message.message = "success";
          this.message.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
        
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error.data;
          this.message.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    cadastrar() {
      MarcaClient.cadastrar(this.marca)
        .then(success => {
          this.marca = new Marca();
          this.message.ativo = true;
          this.message.titulo = "success";
          this.message.message = "Parabens! Cadastrado com sucesso";
          this.message.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error.data;
          this.message.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    editar() {
      MarcaClient.editar(this.marca.id, this.marca)
        .then(success => {
          this.marca = new Marca();
          this.message.ativo = true;
          this.message.titulo = "success";
          this.message.message = "Editado com sucesso";
          this.message.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error.data;
          this.message.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    deletar() {
      MarcaClient.deletar(this.marca.id)
        .then(success => {
          this.marca = new Marca();
          this.$router.push({ name: "Marca" });
        })
        .catch(error => {
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error.data;
          this.message.css = "alert alert-danger alert-dismissible fade show";
        });
    },
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    form() {
      return this.$route.query.form;
    },
  },
  mounted() {
    if (this.id !== undefined) {
      this.findbyId(Number(this.id));
    }
  },
});
 </script>
 
 <style lang="scss">
 </style>