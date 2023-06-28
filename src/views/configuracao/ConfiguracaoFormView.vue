<template>
    <div class="container col-10">
        <h1>CADASTRAR COFIGURACAO</h1>
        <div class="col-12">
            <form action="" class="d-flex">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">valor hora</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="hora">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">valor multa</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="multa">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">inicio expediente</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="incio expediente">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">fim expediente</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="fim expediente">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">tempo para desconto</label>
                        <input type="text" class="form-control" id="formGroupExampleInput"
                            placeholder="tempo para desconto">
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">tempo de desconto</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="tempo de desconto">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">gerar desconto</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="gerar desconto">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">vagas carro</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="vagas carro">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">vagas moto</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="vagas moto">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">vagas vans</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="vagas vans">
                    </div>
                </div>
            </form>
            <div>
                    <button type="button" class="btn btn-primary">Salvar</button>
                    <RouterLink to="/configuracao">
                        <button type="button" class="btn btn-secondary">voltar</button>
                    </RouterLink>
                </div>

        </div>

    </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'configuracaoform',
    components: {

    },
    data() {
        return {

        };
    },
    methods: {

    }
});
</script>

<style scoped lang="scss"></style>