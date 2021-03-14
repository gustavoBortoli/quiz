<template>
  <Quiz :questionNumber="number" />
</template>

<script>
import Quiz from '@/components/Quiz/Quiz.vue'
export default {
  name: 'HelloWorld', 
  data(){
    return{
      number:0
    }
  },  
  components: {
    Quiz
  } 
}
</script>
