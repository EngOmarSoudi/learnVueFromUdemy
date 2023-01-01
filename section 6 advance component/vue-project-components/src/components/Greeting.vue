<template>
    <div>
        <p v-if="age>25">
        {{ msg }}
        </p>
        <p v-else> you must be older than 25 to view this message </p>
    </div>
  
</template>

<script>
export default {
    name: 'Greeting',
    props:["age"],
  data ()
  { 
    return {
      msg:"Hello World!"
    }
  },
}
</script>

<style scoped lang="scss">
p{
    color: aqua;
    
    
}
p:hover{
        color:darken($color: aqua, $amount: 15%)
    }
</style>