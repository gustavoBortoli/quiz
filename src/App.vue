<template>
  <v-app>
    <v-main>
      <Index/>
    </v-main>
  </v-app>
</template>

<script>
import Index from '@/components/Index.vue'

export default {
    name: 'App',
    components: {
        Index
    },
    created() {
        this.$store.dispatch('getUsers')
        this.$store.dispatch('getQuestions')
    }
};
</script>
