<template>
    <div>
        <v-card-text class="pb-0">
            <div class="my-0 caption"> Questão {{questionNumber + 1}} </div>
        </v-card-text>

        <v-card-title class="pt-0 pb-2">{{question.description}}</v-card-title>
    
        <v-divider class="mx-4"></v-divider>

        <v-card-text class="py-0">
            <v-radio-group v-model="selected">
                <v-radio
                    v-for="(option, i) in question.options"
                    :key="i"
                    :value="i"
                    color="orange"
                >
                <template v-slot:label>
                    <div style="font-size: 14px;">{{option}}</div>
                </template>
                </v-radio>
            </v-radio-group>
        </v-card-text>
    </div> 
</template>

<script>
export default {
    props: {
        questionNumber: {
            type: Number,
            required: true
        }
    },
    computed: {
        question() {
            try { return this.$store.state.questionList[this.questionNumber] }
            catch { return null }
        },
        selected: {
            get() {
                return this.question.selectedAnswer
            },
            set(value) {
                this.question.selectedAnswer = value
            }
        }
    },
    created() {
        this.selected = 0
    }
}
</script>

<style scoped>
</style>