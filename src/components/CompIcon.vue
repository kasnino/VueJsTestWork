<template>
    <div class="logomain">
        <div class="contenedor-welcome">
                <div class="description-welcome">
                    <span>Bienvenido hoy seras un estudiante virtual  </span>
                </div>
                <div @click="inicio()" class="imagen-turo">   
                <img src="../assets/img/logo.png" alt="" class="tutor">
                </div> 
        </div>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Compicon",
  components: {},
  data(){
      return {
      }
  },
};
</script>

<style  scoped>

 @font-face {
	font-family: "fuente-estetica";
	src: url(/GeosansLight.ttf);

  }
.contenedor-welcome{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2,50%);
    justify-content: center;
    align-content: center;
     width: 70%;
    height: 120px;
    background: #731b8b;
     border-top-right-radius: 58px;
    border-bottom-right-radius: 58px;
    margin-top: 5px;
   
}

.description-welcome{
    color: white;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
   
    font-size: 30px;

   
}

 span {
    font-size: 20px;
    	margin-left: 20px;
    }
.imagen-turo{
        width: 100%;
    height: 100%;
    display: grid;
    justify-content: flex-end;
    align-content: center;
  
}
.logomain img{
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
}
</style>