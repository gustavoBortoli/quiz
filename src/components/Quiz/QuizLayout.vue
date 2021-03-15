<template>
    <Login v-if="!authenticated"/>
    <Quiz v-else />
</template>

<script>
import Quiz from '@/components/Quiz/Quiz.vue'
import Login from '@/components/Quiz/Login.vue'
export default {
    computed: {
        authenticated() {
            return this.$store.state.userAuthenticated
        }
    },
    components: {
        Quiz, Login
    },
    created() {
        this.$store.state.userAuthenticated = false
        this.$store.dispatch('getQuestions')
    }
}
</script>

<style>

</style>