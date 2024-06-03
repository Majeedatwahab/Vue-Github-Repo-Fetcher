<script setup>
import {defineProps} from 'vue';

defineProps({
  resource: {
    type: String,
    default: '404',
  }
})
</script>

<template>
  <div class="error">
    <h1>Oopsies!!!!</h1>
    <p>The page you are looking for does not exist.</p>
      <router-link to="/" class="run">Run Back Home</router-link>
  
  </div>
</template>

<style scoped>
.error{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9F7AEA;
  margin-top: 20px;
  min-height: 70vh;
  text-align: center;
  color: black;
  font-weight: bolder;

}

h1{
  font-size: 50px;
  font-weight: bold;
  margin: 10px;
}
.run{

  color: black;
  text-decoration: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: #B2F5EA;
  margin-top: 20px;
  padding: 10px;
}

@media (max-width: 50em){
  
}
</style>
