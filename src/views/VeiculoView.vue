<template>
  <div  class="container text-center">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Tipo</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope="col">cor</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>CARRO </td>
      <td>Mercedes</td>
      <td>BMW</td>
      <td>PRETO</td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button></th>
      <th scope="col"><button type="button" class="btn btn-success">Editar</button></th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>MOTO </td>
      <td>Africa-Twin</td>
      <td>2011</td>
      <td>BRANCO</td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button></th>
      <th scope="col"><button type="button" class="btn btn-success">Editar</button></th>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>VAN </td>
      <td>sla marca de van</td>
      <td>n sei nem marca vou saber modelo</td>
      <td>VERDE</td>
      <th scope="col"><button type="button" class="btn btn-danger">Excluir</button></th>
      <th scope="col"><button type="button" class="btn btn-success">Editar</button></th>
    </tr>
  </tbody>
  </table>
</div>



    
    <div>
      <button class="btn btn-primary" @click="openModal">Cadastrar</button>
      <!-- Modal -->
      <div
        class="modal"
        tabindex="-1"
        role="dialog"
        :class="{ 'd-block': showModal }"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cadastro de veiculo</h5>
          
            </div>







            <div class="modal-body">
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">Tipo do Veiculo</span>
    <input
      type="text"
      class="form-control"
      placeholder="Digite aqui"
      aria-label="Username"
      aria-describedby="addon-wrapping"
    />
  </div>
</div>

<div class="modal-body">
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">Marca do veiculo</span>
    <input
      type="text"
      class="form-control"
      placeholder="Digite aqui"
      aria-label="Username"
      aria-describedby="addon-wrapping"
    />
  </div>
</div>

<div class="modal-body">
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">Modelo do veiculo</span>
    <input
      type="text"
      class="form-control"
      placeholder="Digite aqui"
      aria-label="Username"
      aria-describedby="addon-wrapping"
    />
  </div>
</div>

<div class="modal-body">
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">Cor do veiculo</span>
    <input
      type="text"
      class="form-control"
      placeholder="Digite aqui"
      aria-label="Username"
      aria-describedby="addon-wrapping"
    />
  </div>
</div>







            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal"
              >
                Fechar
              </button>
              <button type="button" class="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VeiculoView",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
});
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
