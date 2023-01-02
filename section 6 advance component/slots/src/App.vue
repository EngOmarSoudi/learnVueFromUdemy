<template>
<div> 
  <app-form>
  <div class="help">
    <p>This is some help text.</p>
    </div>
    <div class="fields">
    <input type="text" placeholder="email">
    <input type="text" placeholder="username">
    <input type="password" placeholder="password">
    </div>
    <div class="buttons">
    <button type="submit">Submit</button>
    </div>
 </app-form>
 <app-form>
  <template v-slot:help>
    <p>  {{ msg }}</p>
  </template>
  <template v-slot:fields>
    <input type="text" placeholder="User">
    <input type="text" placeholder="message">
  </template>
  <template v-slot:buttons>
    <button type="submit">Submit</button>
    </template>
 </app-form>
 </div>
</template>

<script>
import AppForm from './components/Form.vue'
export default {
  name: 'App',
  components: {
    AppForm,
  },
  data () {
    return {
      msg:"This is some help text."
    }
  },
  methods: {
    
  }
}
</script>


