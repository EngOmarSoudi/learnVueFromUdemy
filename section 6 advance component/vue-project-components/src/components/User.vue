<template>
  <div>
  <!-- <button  type="button" @click="age++">Increase The Age</button> /// we can't change age while we are children of App.vue -->
  <!-- So ^ -->
  <!-- <button  type="button" @click="$emit('age-up')">Increasing The Age</button>/// this is shortcut -->
  <button  type="button" @click="onClickAge">Increasing The Age</button>
  <p>
  This User is {{ age }} Years Old
</p>
<p>
  This User Doubled Age is {{ ageDouble }} Years Old
  </p>
</div>
</template>

<script>
export default {
  name: 'User',
  props: {
    age: {
      type: Number,
      // required: true,
      default: 0,
      validator(value){
        return value < 100;
      }
    }
  },
  emits: ['age-up'],
  data ()
  { 
    return {
      // msg:"Hello World!"
    }
  },
  computed: {
    ageDouble(){
      return this.age * 2;
    }
  },
  methods: {
    onClickAge(){
      this.$emit('age-up',3)
    }
  }
}
</script>

<style scoped lang="scss">
p{
    color: #ff12ff;
    
    
}
p:hover{
        color:darken($color: #ff12ff, $amount: 15%)
    }
</style>