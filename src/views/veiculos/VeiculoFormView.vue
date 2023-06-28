<template>
  <div>
    <form class="">
      <div v-if="mensagem.ativo" class="row">
        <div class="col-md-3 text-start">
          <div :class="mensagem.css" role="alert">
            <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>
      <div class="col md-1 sm-4">
      <div class="row mt-4 ">
        <div class="row" style="margin-top: 10px">
          <div class="col-md-5 text-start d-flex align-items-center ms-3">
            <label for="modelo-veiculo">Modelo</label>
            <select v-model="veiculo.modelo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select"
              aria-label="Default select example" id="modelo-veiculo">
              <option v-for="item in modelo" :value="item">
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
        </div>

      </div>

      <div class="row mt-4">
        <div class="col">
          <div class="form-group  ms-3">
            <label for="exampleFormControlSelect1">Selecione a cor do veiculo</label>
            <select v-model="veiculo.cor" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select"
              aria-label="Default select example" id="cor-enum">
              <option v-for="cor in corsEnum" :value="cor">{{ cor }}</option>
            </select>
          </div>
        </div>

        <div class="col md-1 sm-4">
          <div class="row" style="margin-top: 10px">
            <div class="col-md-12 text-start">
              <label class="form-label" for="tipo-veiculo">Tipo*</label>
              <select v-model="veiculo.tipo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select"
                aria-label="Default select example" id="tipo-veiculo">
                <option v-for="tipo in tipoEnum" :value="tipo">
                  {{ tipo }}
                </option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-start">
              <label class="form-label">Placa*</label>
              <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                v-model="veiculo.placa" />
            </div>
          </div>

          <div class="col-md-12 text-start">
            <label class="form-label">Ano*</label>
            <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
              v-model="veiculo.ano" />
          </div>
        </div>
      </div>


    </form>
  </div>
  <div class="col-md-3 ms-4 ">
    <div class="d-flex justify-content-center gap-2">
      <div>
        <RouterLink to="/veiculo">
          <button class="btn btn-danger ">voltar</button>
        </RouterLink>
      </div>
      <button v-if="this.form === undefined" @click="cadastrar()"
        class="btn btn-primary   justify-content-center">Cadastrar</button>
      <button v-if="this.form === 'editar'" @click="editar()" class="btn btn-primary ">Editar</button>
      <button v-if="this.form === 'excluir'" @click="deletar()" class="btn btn-primary ">Excluir</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Veiculo } from '@/assets/models/Veiculo';
import VeiculoClient from '@/clients/VeiculoClient';
import { Cor } from '@/assets/models/enums/cor';
import { Tipo } from '@/assets/models/enums/tipo';
import ModeloClient from '@/clients/ModeloClient';
import MarcaClient from '@/clients/MarcaClient';
import { Marca } from '@/assets/models/Marca';
import { Modelo } from '@/assets/models/Modelo';

export default defineComponent({
  name: 'CadastrarVeiculoView',
  data() {
    return {
      veiculo: new Veiculo(),
      marca: new Array<Marca>(),
      modelo: new Array<Modelo>(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      },
      corsEnum: Cor,
      tipoEnum: Tipo
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
    this.findAllModelo();

    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }

  },
  methods: {
    findById(id: number) {
      VeiculoClient.findById(id).then(success => {
        this.veiculo = success
        console.log(this.veiculo.modelo.marca)
      }).catch(error => {
        console.log(error);
      });
    },
    findAllMarca() {
      MarcaClient.listAll().then(success => {
        this.marca = success
      }).catch(error => {
        console.log(error)
      })
    },
    findAllModelo() {
      ModeloClient.listAll().then(success => {
        this.modelo = success
      }).catch(error => {
        console.log(error)
      })
    },
    cadastrar() {
      VeiculoClient.cadastrar(this.veiculo).then(success => {
        this.veiculo = new Veiculo();

        this.mensagem.ativo = true;
        this.mensagem.mensagem = success;
        this.mensagem.titulo = "Parabens! ";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      }).catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error.data;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      })
    },
    editar() {
      VeiculoClient.editar(this.veiculo.id, this.veiculo).then(success => {
        this.veiculo = new Veiculo();

        this.mensagem.ativo = true;
        this.mensagem.mensagem = success;
        this.mensagem.titulo = "Parabens!";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      }).catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error.data;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
    },
    deletar() {
      VeiculoClient.deletar(this.veiculo.id).then(success => {
        this.veiculo = new Veiculo()
        this.$router.push({ name: 'VeiculoView' });
      }).catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error.data;
        this.mensagem.titulo = "EXCLUIDO COM SUCESSO";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      })
    }
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap");

*,
body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

.w-change {
  width: 25vw;
}
</style>
