<template>
    <v-card class="mx-auto mt-5" max-width="500">
        <v-window v-model="step">
                <template v-for="(question, i) in questions">
                    <v-window-item :key="i" :value="i+1">
                        <Question :questionNumber="i"/>
                    </v-window-item>
                </template>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn :disabled="step === 1" text @click="step--" :color="color">
                Anterior
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :color="color" text @click="nextClicked">
                {{textBtn}}
            </v-btn>
        </v-card-actions>
        <v-progress-linear :value="valueCompleted"
            :color="color"
            height="20" class="textProgress">
                {{step}} / {{questions.length}}
        </v-progress-linear>
        <v-dialog
            v-model="sendingQuiz"
            persistent
            width="300"
            overflowed
            >
            <v-card>
                <v-card-title>
                    Salvando respostas
                </v-card-title>
                <v-card-text>
                    <v-progress-linear
                        indeterminate
                        color="orange"
                        class="mx-auto my-1"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import Question from '@/components/Quiz/Question'
export default {
    data: () => ({
        step: 1,
        showResults: false
    }),
    computed: {
        questions() {
            return this.$store.state.questionList
        },
        valueCompleted() {
            return (this.step  / this.questions.length) * 100
        },
        sendingQuiz() {
            return this.$store.state.sendingQuiz
        },
        textBtn() {
            if (this.questions.length === this.step)
                return "Finalizar"
            return "Próxima"
        },
        color () {
            return 'orange'
        },
    },
    components: {
        Question
    },
    methods: {
        nextClicked() {
            if (this.questions.length === this.step)
                this.$store.dispatch('sendQuiz')
            else
                this.step++
        }
    }
}
</script>

<style scoped>
    .textProgress {
        font-size: 0.9rem !important;
        color: white;  
    }
</style>