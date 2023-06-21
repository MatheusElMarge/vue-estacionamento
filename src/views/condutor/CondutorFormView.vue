<template>
  <div class="div-pai">
    <div class="row g-3 align-items-center mt-3 ms-3">
      <div class="row g-3 align-items-center mt-3">
        <div class="col-auto">

          <div v-if="message.ativo" class="row">
            <div class="col-md-12 text-start">
              <div :class="message.css" role="alert">
                <strong>{{ message.titulo }}</strong> {{ message.message }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            </div>
          </div>

          <label for="exampleFormControlInput1" >Nome</label>
          <input :disabled="this.form === 'excluir' ? '' :disabled"
            v-model="condutor.nome" type="text" class="form-control form-control-sm " id="exampleFormControlInput1"
            placeholder="digite aqui o nome">
        </div>
      </div>

      <div class="col-auto">
        <label for="exampleFormControlInput1">numero</label>
        <input  :disabled="this.form === 'excluir' ? '' :disabled"
            v-model="condutor.telefone" type="text" class="form-control form-control-sm " id="exampleFormControlInput1" placeholder="telefone">
      </div>

      <div class="col-auto">
        <label for="exampleFormControlInput1">cpf </label>
        <input :disabled="this.form === 'excluir' ? '' :disabled"
            v-model="condutor.cpf" type="text" class="form-control form-control-sm " id="exampleFormControlInput1"
          placeholder="digite aqui o cpf">
      </div>

      <div>


        <button v-if="this.form === undefined" @click="cadastrar()" class="btn btn-primary mt-3">Cadastrar</button>
        <button v-if="this.form === 'editar'" @click="editar()" class=" btn-primary mt-3">Editar</button>
        <button v-if="this.form === 'excluir'" @click="deletar()" class=" btn-primary mt-3">Excluir</button>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CondutorClient from "@/clients/CondutorClient";
import { Condutor } from "@/assets/models/Condutor";

export default defineComponent({
  name: "condutorForm",
  data() {
    return {
      condutor: new Condutor(),
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
      CondutorClient.findById(id)
        .then((success) => {
          this.condutor = success;
          this.message.ativo = true;
          this.message.titulo = "success";
          this.message.message = "success";
          this.message.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error;
          this.message.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    cadastrar() {
      CondutorClient.cadastrar(this.condutor)
        .then((success) => {
          this.condutor = new Condutor();
          this.message.ativo = true;
          this.message.titulo = "success";
          this.message.message = "success";
          this.message.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error;
          this.message.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    editar() {
      CondutorClient.editar(this.condutor.id, this.condutor)
        .then((success) => {
          this.condutor = new Condutor();
          this.message.ativo = true;
          this.message.titulo = "success";
          this.message.message = "success";
          this.message.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error;
          this.message.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    deletar() {
      CondutorClient.deletar(this.condutor.id)
        .then(success => {
          this.condutor = new Condutor();
          this.$router.push({ name: "condutor" });
        })
        .catch(error => {
          this.message.ativo = true;
          this.message.titulo = "error";
          this.message.message = error;
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

<style lang="scss"></style>
