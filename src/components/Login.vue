<template>
    <v-card class="mx-auto mt-5 px-5 py-3" max-width="500">
        <v-card-title class="padding">
            Informe a sua matrícula para iniciar o Quiz
        </v-card-title>
        <v-card-text class="padding">
            <v-text-field v-model="matricula" outlined placeholder="Matrícula" color="orange"></v-text-field>
        </v-card-text>
        <v-card-actions class="padding">
            <v-spacer></v-spacer>
            <v-btn dark color="orange" @click="login">
                Iniciar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            matricula
        }
    },
    methods: {
        login() {
            if(this.matricula) alert(this.matricula)
        }
    }
}
</script>

<style>
.padding {
    padding: 10px 0px !important;
}
</style>