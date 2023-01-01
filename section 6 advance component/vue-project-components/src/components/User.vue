<template>
  <p>
  This User is {{ age }} Years Old
</p>
</template>

<script>
export default {
  name: 'User',
  props: [
    "age"
  ],
    

  data ()
  { 
    return {
      // msg:"Hello World!"
    }
  },
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