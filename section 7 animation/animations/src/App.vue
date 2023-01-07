<template>
  <div >
  <!-- <button @click="show = !show">Toggle</button> -->
    <!-- <h1>Animations</h1>
    
    <transition name="fade" mode="out-in">
      <p v-if="show" key="main">hii</p>
      <p v-else key="secondary">w</p>
    </transition> -->
    <!-- <transition name="zoom" type="animation" appear>
      <h2 v-if="show">
        Hello
      </h2>
    </transition> -->
    <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @enter-cancelled="enterCancelled"
    @leave-cancelled="leaveCancelled"
    :css="true"
    name="fade"
    >
    <h3 v-if="show">hey</h3> 
   
    </transition> -->
    <button @click="addItem">Add</button>
    <ul >
      <transition-group name="fade"
      enter-active-class="animate__animated animate__flipInX"
      leave-active-class="animate__animated animate__flipOutX"
      >
      <!-- leave-to-class=""leave-from-class=""enter-from-class=""enter-to-class="" -->
        <li v-for="(number , index) in numbers" :key="number" @click="removeItem(index)">
          {{ number  }}
        </li>
      </transition-group>
    </ul>
  </div>
  
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
      numbers: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    addItem ()
    {
      const num = Math.floor( Math.random() * 100+1 );
      const index = Math.floor( Math.random() * this.numbers.length );
      this.numbers.splice(index, 0, num);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el){
      console.log('beforeEnter',el);
    },
    enter ( el )
    {
      // ^, done
      console.log( 'enter', el );
      // const animation= el.animate(
      //  [ {transform: 'scale3d(0,0,0)'},{}]
      //   , { duration: 1000 } );
      // animation.onfinish =()=>{
      //   done();
      // }
    },
    afterEnter(el){
      console.log('afterEnter',el);
    },
    beforeLeave(el){
      console.log('beforeLeave',el);
    },
    leave ( el )
    {
      // , done
      console.log('leave',el);
      // const animation= el.animate(
      //  [ {},{transform: 'scale3d(0,0,0)'}]
      //   , { duration: 1000 } );
      // animation.onfinish =()=>{
      //   done();
      // }
    },
    afterLeave(el){
      console.log('afterLeave',el);
    },
    enterCancelled(el){
      console.log('enterCancelled',el);
    },
    leaveCancelled(el){
      console.log('leaveCancelled',el);
    }
  },
}
</script>
<style>
.animate__animated {
  animation-duration: 1s;
}
.animate__flipOutX {
  position: absolute;
}
li{
  font-size: 22px;
  cursor: pointer;
}
h2
{
  width:400px ;
  padding: 20px;
  margin: 20px;
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear ;
  
}
 .fade-leave-active{
  transition: all 0.25s linear ;
  opacity: 0;
  position: absolute;
 }
.fade-move{
  transition: all 1s linear ;
}
  .zoom-enter-active{
    animation: zoom-in 1s linear forwards;
    transition: all 1s linear ;
  }
  .zoom-leave-active{
    animation: zoom-out 1s linear forwards;
    transition: all 1s linear ;
  }
  .zoom-enter-from,.zoom-leave-to{
    opacity: 0;
  }
  @keyframes zoom-in{
    0%{
      transform: scale(0);
    }
    100%{
      transform: scale(1);
    }
  }
  @keyframes zoom-out{
    100%{
      transform: scale(0);
    }
    0%{
      transform: scale(1);
    }
  }
</style>