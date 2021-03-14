import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sendingQuiz: false,
        questionList: [
            {
                description: "BLA BLA BLA BLA BLA BLA BLA",
                options: [
                    "Opção 1",
                    "Opção 2",
                    "Opção 3",
                    "Opção 4",
                ],
                selectedAnswer: 0
            },
            {
                description: "LLUULULULULULULULULU",
                options: [
                    "Opção 1",
                    "Opção 2",
                    "Opção 3",
                    "Opção 4",
                ],
                selectedAnswer: 0
            },
            {
                description: "LALALALALALALALALA",
                options: [
                    "Opção 1",
                    "Opção 2",
                    "Opção 3",
                    "Opção 4",
                ],
                selectedAnswer: 0
            }
        ]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        sendQuiz(store) {
            store.state.sendingQuiz = true,
            setTimeout(() => {
                store.state.sendingQuiz = false
            }, 5000)
        }
    },
    modules: {
    }
})