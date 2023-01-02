<template>
<div>

 <section>
    <h1>Dynamic Components</h1>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
    <component :is="currentComponent"></component>
    </keep-alive>
  </section>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <component :is="componentName"></component>
</div> 
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
export default {
  name: "App"
  ,components: {
    Home,
    About
  },
  data ()
  {
    return {
      currentComponent: 'Home'
      ,componentName: 'Home'
    }
  }
}
</script>

<style>

</style>