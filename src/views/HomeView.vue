
<template>
 <div>
  <input type="text" v-model="search" placeholder="Search Repositories..." @input="fetchRepositories"  />
  <section class="repo-container">
    <div v-for="repo in paginatedRepos" :key="repo.id" class="repo-card">
      <router-link :to="`/repo/${repo.name}`">
   
    <h3 class="repo-name">{{ repo.name }}</h3>
    </router-link>

    <a
    :href="repo.html_url"
    target="_blank"
    class="repo-link"
    >View on Github</a>
  </div>
  </section>
  <div class="paginated-buttons">
    <button v-if="currentPage > 1" @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <button v-if="paginatedRepos.length === perPage" @click="nextPage" :disabled="paginatedRepos.length  < perPage">Next</button>
  </div>
 
 </div>
</template>


<script>
import axios from 'axios';

export default{
  data(){
   return{
    repos: [],
    search: '',
    error: null,
    loading: false,
    currentPage: 1,
    perPage: 4,
   }
  },
  computed:{

   paginatedRepos(){
  const start = (this.currentPage - 1) * this.perPage;
  const end = start + this.perPage;
  return this.repos.slice(start, end);
}
  },
  methods:{
  async fetchRepositories(){
    this.loading = true;
    this.error = null;

    try {
  const response = await axios.get('https://api.github.com/users/Majeedatwahab/repos');
  this.repos = response.data.filter(repo =>
    repo.name.toLowerCase().includes(this.search.toLowerCase())
  )
} catch(error){
  console.error('Error while fetching repositories:', error);
  this.error = 'Failed to fetch repositories. Please try again later.';
} finally {
  this.loading = false; 
}
  },
  nextPage(){
    if(this.paginatedRepos.length === this.perPage){
      this.currentPage ++;
    
    }
  },
  prevPage(){
    if(this.currentPage > 1){
      this.currentPage --;
    }

  },
},
watch(){
  search(),
  this.fetchRepositories();
},
mounted(){
  this.fetchRepositories();
},
};

</script>

<style scoped>



.error {
  color: red;
  text-align: center;
}
.repo-card {
  border: 1px solid black;
  padding: 13px;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  background-color: #9F7AEA ;
  max-width: 100%;
 
}

.repo-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
}

.repo-link{
  color: black;
  background-color: #B2F5EA;
  padding: 5px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  
}

.repo-name {
  color: black;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
}

button{
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #B2F5EA;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
 
}
input{
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #B2F5EA;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
}

.paginated-buttons{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
