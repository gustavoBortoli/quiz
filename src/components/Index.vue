<template>
  <v-card color="bg-color">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 text-color">
        Trabalho Final APNP DEV III
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="orange"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="component in components"
        :key="component"
        style="height: 100vh; padding-top: 30px"
      >
        <component :is="component"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import QuizLayout from '@/components/Quiz/QuizLayout.vue'
import CrudAluno from '@/components/CrudAluno.vue'
import CrudQuiz from '@/components/CrudQuiz.vue'
import Infos from '@/components/Infos.vue'
import ResultQuiz from '@/components/ResultQuiz.vue'

export default {
    data () {
        return {
        tab: null,
        items: [
            'Home', 'Quiz', 'Alunos', 'Questões', 'Resultados Quiz'
        ],
        components: ['Infos', 'QuizLayout', 'CrudAluno', 'CrudQuiz', 'ResultQuiz']
        }
    },
    components: {
        QuizLayout, CrudAluno, CrudQuiz, Infos, ResultQuiz
    } 
}
</script>

<style>
.bg-color {
  background-color: #f8e4cc !important;
}
.text-color {
  color: orange !important;
}
</style>