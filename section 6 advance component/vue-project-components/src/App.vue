<template>
  <div>
    <p>hey</p>
    <!-- <button  type="button" @click="age++">Increase The Age</button> -->
    <greeting :age="age"></greeting>
    <user :age="age" @age-up="upDateAge"></user>
  </div>

</template>

<script >
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'
export default {
  name: 'App',
  components: {
    Greeting,
    User
  },
  data ()
  {
    return {
      age:20
    }
  },
  methods: {
    upDateAge(num){
      this.age += num;
    }
  }
}
</script>



