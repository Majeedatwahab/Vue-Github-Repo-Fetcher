<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  
<div class="container">

<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/error">Error404</RouterLink>
  
</nav>

</div>
    
  <RouterView />

</template>

<style scoped>


 
.container{
  padding: .5rem;
  background-color: #9F7AEA;
  line-height: 1.5;
 
}

p{
  font-size: 16px;
  font-weight: bolder;
}
p:hover{
  color: white;
  cursor: pointer;
}
nav {
  text-align: center;
  padding: 1rem;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  padding: 0 1rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
}



nav a:first-of-type {
  border: 0;
}
nav a:hover{
  color: white;
  cursor: pointer;
}
@media (min-width: 1024px) {
  
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
