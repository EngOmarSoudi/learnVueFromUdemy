<template>
  <div ><button @click="show = !show">Toggle</button>
    <!-- <h1>Animations</h1>
    
    <transition name="fade" mode="out-in">
      <p v-if="show" key="main">hii</p>
      <p v-else key="secondary">w</p>
    </transition> -->
    <transition name="zoom" type="animation" appear>
      <h2 v-if="show">
        Hello
      </h2>
    </transition>
  </div>
  
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      show: false
    }
  },
}
</script>
<style>
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