<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="matricula"
    class="elevation-1 mx-auto"
    style="max-width: 800px"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Tabela de Alunos</v-toolbar-title>
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
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedUser.matricula"
                      color="orange"
                      label="Matricula"
                      :disabled="editedIndex > -1"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedUser.nome"
                      color="orange"
                      label="Nome"
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
                { align: 'start', text: 'Matricula', value: 'matricula', sortable: true },
                { text: 'Nome', value: 'nome', sortable: true },
                { text: 'Ações', value: 'actions', sortable: false },
            ],
            editedUser: {
                matricula: '',
                nome: '',
            },
            defaultItem: {
                matricula: '',
                nome: '',
            },
        }
    },
    computed: {
        users: {
            get() {
                return this.$store.state.users
            }
        },
        formTitle () {
            return this.editedIndex === -1 ? 'Cadastrar Aluno' : 'Editar Aluno'
        },
    },
    methods: {
        updateData() {
            this.$store.dispatch('getUsers')
        },
        editItem (item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedUser = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedUser = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.$store.dispatch('deleteUser', this.editedUser)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
              this.editedUser = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedUser = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save () {
            if (this.editedIndex > -1)
            {
                this.$store.dispatch('updateUser', this.editedUser)
            }
            else
            {
                this.$store.dispatch('addUser', { 
                    matricula: this.editedUser.matricula,  
                    nome: this.editedUser.nome,
                    nota: 0})
            }
            
            this.close()
        },
    }
}
</script>

<style>

</style>