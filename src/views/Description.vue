<template>
  <div >
           <div class="contenedor-main">
           
            <div class="imagen-conten">
                  <div  class="imagen-turo"> 
                        <div>
                            <img src="../assets/img/tutor-circ.png" alt="" class="tutor">
                        </div>
                        <div class="centrar-titulo">
                          <h1>La educacion Virtual se Caracteriza por ser... <br>
                              Haz click en cada vinculo...
                          </h1>  
                        </div>
                  </div> 
            </div>
            <div class="contenido-animado">
              <Animaciones></Animaciones>
            </div>  

           </div>
  </div>
</template>

<script>

import Animaciones from "@/components/Animaciones";

export default {
    name: "home",
    components:{ Animaciones},
    data(){
      return {}
    },
}
</script>



<style lang="scss" scoped>
.imagen-turo{
   width: 70%;
    height: 20%;
    display: grid;
    grid-template-columns: 25% 75%;
    -webkit-box-pack: unset;
    -ms-flex-pack: end;
    justify-content: space-between;
    -ms-flex-line-pack: center;
    align-content: center;
    background: #731b8b;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    /* margin-bottom: 0px; */
    position: absolute;
    right: -42px;
    margin-top: 10px;
        animation-duration: 1s;
  animation-name: slidein;
  
}
   img{
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid #FFF;
    padding: 3px;
}

.centrar-titulo{
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
  font-size: 25px;
   font: 600 28px/1 "Poppins", sans-serif;
   color: white;
   margin-right: 20px;
}


.contenedor-main{
  display: grid;
  grid-template-rows: 25% 75%;
  width: 100%;
  height: 900px;
 
}

.imagen-conten{
  width: 100%;
  height: 100%;
  display: flex;
    justify-content: flex-end;
 
}

.contenido-animado {

  width: 100%;
  height: 100%;

  
}

@keyframes slidein {
  from {
    margin-right: -100%;
    
  }

  to {
    margin-right: 0%;
    width: 70%;
  }
}

@media screen and (max-width: 1024px) {

.contenedor-main{
  display: grid;
  grid-template-rows: 20% 80%;
  width: 100%;
  height: 900px;
  grid-template-columns: repeat(1,100%);

}

.imagen-conten{
  width: 100%;
  height: 100%;

}
}

@media screen and (max-width: 1024px) {
.imagen-turo{
   width: 100%;
    height: 20%;
    display: grid;
   
    -webkit-box-pack: unset;
    -ms-flex-pack: end;
    justify-content: space-between;
    -ms-flex-line-pack: center;
    align-content: center;
    background: #731b8b;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    /* margin-bottom: 0px; */
    position: absolute;
    right: -42px;
    margin-top: 10px;
        animation-duration: 1s;
  animation-name: slidein;
  
}

.centrar-titulo{
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
  
   font: 600 28px/1 "Poppins", sans-serif;
   color: white;
   margin-right: 2px;

   h1{

     font-size: 17px;
   }
}




@keyframes slidein {
  from {
    margin-right: -100%;
    
  }

  to {
    margin-right: 0%;
    width: 100%;
  }
}

}
</style>


// #009688
// #038287 verde
// #232c3d
// #6173987a  traslucido
// #731b8bb5 traslu morado