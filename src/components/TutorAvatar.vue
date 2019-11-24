<template>
    <div class="logomain">
        <div class="contenedor-welcome">
                <div class="description-welcome">
                    <span>Hola! Para comenzar, lo invito a acceder a cualquiera de nuestros materiales que aparecen a continuación: Puede descargar un <strong>PDF de 199 páginas,</strong>  dónde se realiza una introducción a la Cultura Virtual... <br>   ó puede observar un <strong>video de 10 minutos</strong>  sobre el mismo tema...  </span>
                </div>
                <div @click="inicio()" class="imagen-turo">   
                <img src="../assets/img/tutor-circ.png" alt="" class="tutor">
                </div> 
        </div>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "TutorAvatar",
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
  
    display: grid;
    grid-template-columns: 70% 27%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    width: 100%;
    height: 276px;
    background: #038287;
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
    margin-top: 5px;
   
}

.description-welcome{
    color: white;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
   
 

   
}

 span {
    font-size: 15px;
        margin-left: 20px;
        height: 100%;
    }
.imagen-turo{
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: flex-end;
    align-content: center;
  
}
.logomain img{
    width: 120px;
    height: 120px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid #FFF;
    padding: 5px;
}

strong {
    width: 100%;
    height: 100%;
    background: white;
    color: #731b8b;
    padding: 2px;
    border-radius: 15px;
    font-size: 13px;
    cursor: pointer;
    margin: 3px;
}
</style>