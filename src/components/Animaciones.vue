<template>
  <div   
  class="conten-animation" 

  >

      <div class="columna">
          <span 
          @click="evento"
          ref="1"
          class="texto-titulo">Oportuna</span> 
          <span 
          :class = "{'animacion' : bandera}"
          class="descriccion-text" >
              <p>Para datos, textos, gráficos, sonido, voz e imágenes; 
                  también ofrece herramientas para la interacción (video conferencia, chat, 
                  foro, cuestionarios, etc.)</p>
          </span>
      </div>


      <div class="columna">
             <span 
             @click="eventodos"
             ref="2"
             class="texto-titulo">Economica</span> 
             <div 
             :class = "{'animacion' : banderados}"
             class="descriccion-text">
                 <p>
                     Para datos, textos, gráficos, sonido, voz e imágenes; 
                     también ofrece herramientas para la interacción (video conferencia, chat, 
                     foro, cuestionarios, etc.)
                 </p>
             </div>
      </div>
      <div class="columna">
          <span 
          @click="eventotres"
          ref="3"
          class="texto-titulo">Compatible</span> 
         <div 
          :class = "{'animacion' : banderatres}"
          class="descriccion-text">
              <p>Para datos, textos, gráficos, sonido, voz e imágenes; 
                  también ofrece herramientas para la interacción 
                  (video conferencia, chat, foro, cuestionarios, etc.)</p>
          </div>
      </div>
      <div class="columna">
          <span 
           @click="eventocuatro"
          class="texto-titulo">Innovadora</span> 
             <span 
             :class = "{'animacion' : banderacuatro}"
             class="descriccion-text">
                 <p>En el desarrollo de nuevos escenarios de aprendizaje. 
                     Permite al usuario desarrollar un proceso de aprendizaje a su 
                     propio ritmo y según sus propias exigencias</p>
             </span>
      </div>
      <div class="columna">
          <span 
          @click="eventocinco"
          class="texto-titulo">Motivadora</span> 
          <span 
           :class = "{'animacion' : banderacinco}"
          class="descriccion-text">
              En el aprendizaje, evita tener que estar todo el 
              tiempo encerrado en un salón de clase.
          </span>
      </div>
      </div>
</template>

<script>

export default {
    name: "Animaciones",
    components:{ },
    data(){
      return {
          bandera: false,
           banderados: false,
            banderatres: false,
            banderacuatro: false,
            banderacinco: false,
          remove: true
      }
    },
    methods:{
        evento(){
            console.log("click en el boto")
            console.log( this.$refs) 
            if(this.remove){
                this.remove = false
                return this.bandera = true
            }else {
                this.remove = true
                return this.bandera = false
                
            }
        },

            eventodos(){
            console.log("click en el boto")
            console.log( this.$refs) 
            if(this.remove){
                this.remove = false
                return this.banderados = true
            }else {
                this.remove = true
                return this.banderados = false
                
            }
        },
        
            eventotres(){
            console.log("click en el boto")
            console.log( this.$refs) 
            if(this.remove){
                this.remove = false
                return this.banderatres = true
            }else {
                this.remove = true
                return this.banderatres = false
                
            }
        },

          eventocuatro(){
            console.log("click en el boto")
            console.log( this.$refs) 
            if(this.remove){
                this.remove = false
                return this.banderacuatro = true
            }else {
                this.remove = true
                return this.banderacuatro = false
                
            }
        },

          eventocinco(){
            console.log("click en el boto")
            console.log( this.$refs) 
            if(this.remove){
                this.remove = false
                return this.banderacinco = true
            }else {
                this.remove = true
                return this.banderacinco = false
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.conten-animation{
   display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    
    width: 100%;
    height: 100%;
   
    grid-gap: 10px;
       
        justify-content: center;
        padding: 30px;
}

.columna {
    width: 100%;
    height: 8%;
     background: #038287;
    display: grid;
    grid-gap: 5px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    color: white;
    cursor: pointer;
}

.columna:hover {
    background: #731b8b;
    cursor: pointer;
}
.descriccion-text{
   width: 100%;
    height: 220px;
    background: #e2e8f0;
    color: #666;
    text-align: center;
    justify-content: center;
    display: grid;
    align-content: center;
    margin-top: -225px;
    z-index: -1;
    opacity: 0;
    
}

.texto-titulo{
    width: 100%;
    height: 50px;
    display: grid;
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
  
    
}

.animacion{
    z-index: 1;
    animation: desplazamiento .5s forwards;
}

@keyframes desplazamiento {
from { margin-top: -225px;
        z-index: -2;}
  to { margin-top: 0px;
       opacity: 1;
       z-index: 1;
    }
}

@media screen and (max-width: 1024px) {

.conten-animation{
   display: grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
     grid-template-columns: repeat(1, 100%);
    width: 100%;
    height: 100%;
    
   
    grid-gap: 10px;
     
        justify-content: center;
       
}

.columna {
    width: 100%;
    height: 45%;
    
}

.descriccion-text{
   width: 100%;
    height: 100%;
    background: #e2e8f0;
    color: #666;
    text-align: center;
    justify-content: center;
    display: grid;
    align-content: center;
    margin-top: -225px;
    z-index: -1;
    opacity: 0;
    
    
}



}
</style>