import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        userAuthenticated: false,
        matricula: '',
        sendingQuiz: false,
        questionList: [],
        page: 0
    },
    getters: {
        quizUser(state) {
            return state.users.filter(x => x.matricula === state.matricula)[0]
        },
        userResultQuiz(state) {
            var arr = []
            for(var user of state.users) {
                var u = { ...user }
                u.notaPorc = Math.floor((u.nota / 10) * 100)
                arr.push(u)
            }
            console.log(arr)
            arr.sort(function (a, b) {
                if (a.notaPorc > b.notaPorc) {
                  return 1;
                }
                if (a.notaPorc < b.notaPorc) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
            console.log(arr)
            return arr;
        }
    },
    mutations: {
    },
    actions: {
        sendQuiz(store) {
            var inserted = 0
            store.state.sendingQuiz = true
            var correctAnswers = 0
            for(var question of store.state.questionList) {
                if ((question.selectedAnswer + 1) == question.correctAnswer) correctAnswers++
                this._vm.$http.post('avaliacao.json', {
                    matricula_aluno: store.state.matricula,
                    codigo_questao: question.codigo,
                    resposta_aluno: (question.selectedAnswer + 1)
                }).then(() => { 
                    inserted++
                    if(inserted === store.state.questionList.length) 
                        store.state.sendingQuiz = false 
                        
                        var user = store.state.users.filter(x => x.matricula === store.state.matricula)[0]
                        user.nota = (correctAnswers * 10) / store.state.questionList.length
                        store.dispatch('updateUser', user)

                        store.state.userAuthenticated = false
                        store.state.matricula = ''
                    })
                .catch(() => store.state.sendingQuiz = false)
            }
        },
        addUser(store, user) {
            this._vm.$http.post('alunos.json', user)
            .then(res => { 
                store.dispatch('getUsers')
            })
        },
        deleteUser(store, user) {
            this._vm.$http.delete(`/alunos/${user.id}.json`)
            .then(res => { 
                store.dispatch('getUsers')
            })
        },
        updateUser(store, user) {
            this._vm.$http.patch(`/alunos/${user.id}.json`, { nome: user.nome, matricula: user.matricula, nota: user.nota })
            .then(res => { 
                store.dispatch('getUsers')
            })
        },
        addQuestion(store, question) {
            delete question.id
            console.log(question)
            this._vm.$http.post('questao.json', question)
            .then(res => { 
                store.dispatch('getQuestions')
            })
        },
        updateQuestion(store, question) {
            const id = question.id
            delete question.id
            this._vm.$http.patch(`/questao/${id}.json`, { ...question })
            .then(res => { 
                store.dispatch('getQuestions')
            })
        },
        deleteQuestion(store, question) {
            this._vm.$http.delete(`/questao/${question.id}.json`)
            .then(res => { 
                store.dispatch('getQuestions')
            })
        },
        getUsers(store) {
            this._vm.$http('alunos.json')
            .then(res => { 
                store.state.users = res.data
            })
        },
        getQuestions(store) {
            this._vm.$http('questao.json')
            .then(res => {
                store.state.questionList = []
                for(var question of res.data) 
                    store.state.questionList.push({
                        id: question.id,
                        codigo: question.codigo,
                        description: question.questao,
                        options: [
                            question.resposta_1,
                            question.resposta_2,
                            question.resposta_3,
                            question.resposta_4
                        ],
                        correctAnswer: question.resposta_correta,
                        selectedAnswer: 0
                    })
            })
            },
        authenticateUser(store, matricula) {
            if(!matricula) {
                alert('Insira o número da matricula!')
                store.state.userAuthenticated = false
                return
            }
            const exists = store.state.users.some(x => x.matricula === matricula)
            if(!exists) {
                alert('Matricula não cadastrada no sistema!')
                store.state.userAuthenticated = false
                return
            }

            store.state.userAuthenticated = true
        }
    },
    modules: {
    }
})