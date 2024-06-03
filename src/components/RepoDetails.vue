
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="repo-details">
      <h1>{{ repo.name }}</h1>
      <p>{{ repo.description || 'Oops! i forgot to write a description for this one. SORRY!!!' }}</p>
      <div class="repo-stats">
        <p><unicon name="favorite" fill="white" style=" width: 18px; height: 18px;"></unicon> Stars: {{ repo.stargazers_count }}</p>
        <p><unicon name="eye" fill="white" style=" width: 18px; height: 18px;"></unicon> Watch: {{ repo.watchers_count }}</p>
       
        
      </div>
      <p> Main Language: {{ repo.language || 'none' }}</p>
      <router-link to="/" class="back">Go Back</router-link>

    </div>
  </div>
</template>


<script>


import { getRepoDetails } from '../services/api.js';

export default{
  data(){
    return{
      repo: null,
      loading: true,
      error: null,
    }
  },
  computed:{
    route(){
      return this.$route;

    }
  },
  methods:{
    async fetchRepoDetails(){
      try{
        const response = await getRepoDetails(this.route.params.name);
        this.repo = response.data;
      } catch(error){
        console.error('Error fetching Repository:', error);
        
      } finally{
        this.loading = false;
      }
    }
  },

 
  mounted(){
    this.fetchRepoDetails();
  },
};
</script>


<style scoped>
.repo-details {
  border: 1px solid black;
  border-radius: 5px;
  width: 90%;
  max-width: 600px;
  padding: 20px;
  margin: 40px auto;
  background: #9F7AEA;
}

.repo-details h1,
.repo-details p {
  color: black;
  font-weight: bold;
}

.repo-details .repo-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.back {
  text-align: center;
  color: black;
  background-color: #B2F5EA;
  padding: 5px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  display: block;
  font-weight: bold;
}
.repo-stats{
  margin: 20px;
  font-weight: bold;
  font-size: 1rem;
}
.repo-stats p{
  margin-bottom: 10px;
  
}

</style>