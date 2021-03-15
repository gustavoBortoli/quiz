<template>
  <v-data-table
    :headers="headers"
    :items="questions"
    sort-by="matricula"
    class="elevation-1 mx-auto"
    style="max-width: 800px"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Tabela de Questões</v-toolbar-title>
        <v-spacer/>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="orange"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              + Cadastrar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedQuestion.questao"
                      color="orange"
                      label="Descrição"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedQuestion.resposta_1"
                      color="orange"
                      label="Primeira Resposta"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedQuestion.resposta_2"
                      color="orange"
                      label="Segunda Resposta"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedQuestion.resposta_3"
                      color="orange"
                      label="Terceira Resposta"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedQuestion.resposta_4"
                      color="orange"
                      label="Quarta Resposta"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      type="number"
                      v-model="editedQuestion.resposta_correta"
                      color="orange"
                      label="Resposta Correta"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="orange"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn color="orange" text @click="save">
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Tem certeza que deseja excluir?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="orange" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="orange"
        dark
        @click="updateData"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            editedIndex: -1,
            headers: [
                { align: 'start', text: 'Pergunta', value: 'description', sortable: false },
                { text: 'Ações', value: 'actions', sortable: false },
            ],
            editedQuestion: {
                id: '',
                questao: '',
                resposta_1: '',
                resposta_2: '',
                resposta_3: '',
                resposta_4: '',
                resposta_correta: 0
            },
            defaultItem: {
                id: '',
                questao: '',
                resposta_1: '',
                resposta_2: '',
                resposta_3: '',
                resposta_4: '',
                resposta_correta: 0
            },
        }
    },
    computed: {
        questions: {
            get() {
                return this.$store.state.questionList
            }
        },
        formTitle () {
            return this.editedIndex === -1 ? 'Cadastrar Questão' : 'Editar Questão'
        },
    },
    methods: {
        updateData() {
            this.$store.dispatch('getQuestions')
        },
        getNextCodeId() {
            var x = this.questions.reduce((prev, current) => {
                return (prev.codigo > current.codigo) ? prev : current
            })
            return x.codigo + 1
        },
        editItem (item) {
          this.editedIndex = this.questions.indexOf(item)
          var question = {
            id: item.id,
            questao: item.description,
            resposta_1: item.options[0],
            resposta_2: item.options[1],
            resposta_3: item.options[2],
            resposta_4: item.options[3],
            resposta_correta: item.correctAnswer
          }
          this.editedQuestion = Object.assign({}, question)
          this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.questions.indexOf(item)
            this.editedQuestion = Object.assign({}, item)
            this.dialogDelete = true
        },
        deleteItemConfirm () {
            this.$store.dispatch('deleteQuestion', this.editedQuestion)
            this.closeDelete()
        },
        close () {
            this.dialog = false
            this.$nextTick(() => {
              this.editedQuestion = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
        },
        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedQuestion = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        save () {
            if (this.editedIndex > -1)
            {
                this.$store.dispatch('updateQuestion', this.editedQuestion)
            }
            else
            {
                const id = this.getNextCodeId()
                this.editedQuestion.codigo = id
                this.$store.dispatch('addQuestion', this.editedQuestion)
            }
            
            this.close()
        },
    }
}
</script>

<style>

</style>