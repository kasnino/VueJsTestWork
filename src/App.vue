<template>
  <div id="app">
    <div class="contenedor">
     <router-view />
     
       <div class="contenfilados">
         <div class="conten-nav">
          
         

            <div class="back">
                <!-- <i class="fas fa-arrow-circle-left"></i> -->
                   <i class="fas fa-angle-left"></i>
            </div>
             
             <div id="nav">
              <router-link to="/">1</router-link> |
              <router-link to="/about">2</router-link> |
              <router-link to="/description">3</router-link> |
              <router-link to="/test">4</router-link> |
              <router-link to="/fin">5</router-link> |
            </div>

            <div class="next">
             
              <i class="fas fa-angle-right"></i>
            </div>
         
         
           </div>
             </div>
             </div>
    </div>
</template>



<script>


export default {
  name: "app",
  components:{  },

  methods:{
  inicio(){
        console.log(this.$router)
        this.$router.push("/")
  },
  anterior(){
       this.$router.go(-1)
  },
  siguiente(){
       this.$router.go(1)
  },
} 
  
}
</script>

<style lang="scss" >

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

::-webkit-scrollbar {
	display: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #6666664a;
  
 
}
.contenedor{
  width: 100%;
  height: 658px;
  background: #fffefea8;
  display: grid;
  grid-template-columns: repeat(1,100%); 
  grid-template-rows: 80% 20%;
}
#nav {
  a {
    font-weight: bold;
    color: #FFF;

    &.router-link-exact-active {
      color: #FFF;
      cursor:pointer;
    }
    &.router-link-exact-active:hover{
      color: purple;
    }
  }
}


.contenfilados{
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
} 

.conten-nav{
    width: 939px;
    height: 80px;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    background: #731b8b;
    grid-template-columns: 20% 60% 20%;
   
}

.back {
  color: white;
  font-size: 50px;
  cursor: pointer;
}

.next {
  color: white;
   font-size: 50px;
   cursor: pointer;
}

.next:hover{
  color: #038287;
}


.back:hover{
  color: #038287;
}
  
</style>
