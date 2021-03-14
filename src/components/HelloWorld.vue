<template>
  <!-- <Quiz :questionNumber="number" /> -->
  <Login/>
</template>

<script>
import Quiz from '@/components/Quiz/Quiz.vue'
import Login from '@/components/Login.vue'
export default {
  name: 'HelloWorld', 
  data(){
    return{
      number:0
    }
  },  
  components: {
    Quiz, Login
  } 
}
</script>
