<template>
  <div class="questions-ctr">
        <div class="progress">
            <div class="bar" 
            :style="{ width: `${(qustionsAnswerd / questions.length) * 100}%` }"
            ></div>
            <div class="status">{{ qustionsAnswerd +1 }} out of {{ questions.length }} questions answered</div>
        </div>
        <transition-group  name="fade" >
        <div class="single-question" v-for="(question,qi) in questions " :key="question.q" v-show="qustionsAnswerd === qi">
            <div class="question">{{ question.q }}</div>
            <div class="answers">
                <div class="answer" @click="selectAnswer(answer.is_correct)" v-for="answer in question.answers" :key="answer.text">{{ answer.text }}</div>
            </div>
        </div>
        </transition-group>
    </div>
</template>

<script> 
export default {
    props: [ 'questions', 'qustionsAnswerd' ],
    emits: ['answer-selected'],
    methods: {
        selectAnswer(is_correct) {
            this.$emit('answer-selected', is_correct);
        }
    }
}
</script>

<style>

</style>