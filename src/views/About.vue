<template>
  <div class="about">
   <div class="contenedor-about">
      <div class="avatar-conten">
           <div  class="imagen-turo"> 
            <div class="centrar-titulo"><h1>Capacitate!</h1>  
            </div>
            <div class="logogrid"><img src="../assets/img/logo.png" alt="" class="tutor"></div>
                
           </div> 
          <TutorAvatar></TutorAvatar>
      </div>
      <div class="mostrar-contenido">
         
          <div class="ver-video">
            <Video></Video>
          </div>
           <div class="descargar">
            <Descargas></Descargas>
          </div>
      </div>
    </div>
  </div>
</template>


<script>

import TutorAvatar from "@/components/TutorAvatar";
import Descargas from "@/components/Descargas";
import Video from "@/components/Video";


export default {
   name: "About",
  components: { TutorAvatar, Descargas, Video},

};
</script>

<style lang="scss" scoped>

.about{
  width: 100%;
  height: 100%;
  
}

.contenedor-about{
width: 100%;
height: 100%;
grid-template-columns: repeat(2, 50%);
// background: pink;
// background: red;
display: grid;
}

.avatar-conten{
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  // background: blue;
}

.mostrar-contenido{
  display:  grid;
  grid-template-rows: 70% 30%;
  //  background: black;
}

.descargar{
  widows: 100%;
  height: 100%;
  // background: yellow;
    display: grid;
  justify-content: center;
  align-content: center;
}

.ver-video{
    widows: 100%;
  height: 100%;
  // background: pink;
  display: grid;
  justify-content: center;
  align-content: center;
}

.imagen-turo{
    width: 65%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: flex-end;
    align-content: center;
    background: #731b8b;
     border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    margin-bottom: 35px;
        animation-duration: 1.5s;
  animation-name: slidein;
  
}
   img{
    width: 120px;
    height: 120px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.centrar-titulo{
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
  font-size: 25px;
   font: 600 28px/1 "Poppins", sans-serif;
   color: white;
   margin-right: 20px;
  
}

.logogrid{
  width: 100%;
  height: 100%;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
 
}

@keyframes slidein {
  from {
    margin-left: -240px;
    
  }

  to {
    margin-left: 0%;
     width: 65%;
  }
}

@media screen and (max-width: 1024px) {

.contenedor-about{
width: 100%;
height: 100%;
grid-template-columns: repeat(1, 100%);
grid-template-rows: repeat(2, 1fr);
// background: pink;
// background: red;
display: grid;
}

.imagen-turo{
    width: 100%;
    height: 55%;
  animation-duration: 1.5s;
  animation-name: slideindos;
   display: grid;
    grid-template-columns: 75% 25%;
     justify-content: flex-end;
     
}



@keyframes slideindos {
  from {
    margin-left: -240px;
    
  }
  to {
    margin-left: 0%;
     width: 100%;
  }
}

 img{
    width: 60px;
    height: 60px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.logogrid{
  width: 100%;
  height: 100%;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
}
}
</style>