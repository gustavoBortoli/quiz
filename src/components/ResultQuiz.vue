<template>
    <v-data-table
        :headers="headers"
        :items="users"
        sort-by="matricula"
        class="elevation-1 mx-auto"
        style="max-width: 800px">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Resultados Quiz</v-toolbar-title>
            </v-toolbar>
        </template>
        <template v-slot:item.nota="{ item }">
                {{ item.nota }} / 10
        </template>
        <template v-slot:item.notaPorc="{ item }">
            <v-chip
                :color="getColor(item.notaPorc)"
                dark
            >
                {{ item.notaPorc }} %
            </v-chip>
        </template>
        <template v-slot:item.status="{ item }">
                {{ getStatus(item.notaPorc) }}
        </template>
    </v-data-table>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                { align: 'start', text: 'Matricula', value: 'matricula', sortable: true },
                { text: 'Nome', value: 'nome', sortable: true },
                { text: 'Nota', value: 'nota', sortable: true },
                { text: '% Acertos', value: 'notaPorc', sortable: true },
                { text: 'Status', value: 'status', sortable: true },
            ]
        }
    },
    computed: {
        users: {
            get() {
                return this.$store.getters.userResultQuiz
            }
        }
    },
    methods: {
        updateData() {
            this.$store.dispatch('getUsers')
        },
        getColor (porcent) {
            if (porcent > 75) return 'green'
            else if (porcent > 50 && porcent <= 75) return 'orange'
            else return 'red'
        },
        getStatus (porcent) {
            if (porcent > 75) return 'Ótimo conhecimento'
            else if (porcent > 50 && porcent <= 75) return 'Bom conhecimento'
            else return 'Estudar mais'
        }
    }
}
</script>