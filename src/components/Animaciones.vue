<template>
  <div class="conten-animation" >
      <div class="columna">
          <span class="texto-titulo">Oportuna</span> 
          <span class="descriccion-text">
              <p>Para datos, textos, gráficos, sonido, voz e imágenes; 
                  también ofrece herramientas para la interacción (video conferencia, chat, 
                  foro, cuestionarios, etc.)</p>
          </span>
      </div>
      <div class="columna">
             <span class="texto-titulo">Economica</span> 
             <span class="descriccion-text">
                 <p>
                     Para datos, textos, gráficos, sonido, voz e imágenes; 
                     también ofrece herramientas para la interacción (video conferencia, chat, 
                     foro, cuestionarios, etc.)
                 </p>
             </span>
      </div>
      <div class="columna">
          <span class="texto-titulo">Compatible</span> 
          <span class="descriccion-text">
              <p>Para datos, textos, gráficos, sonido, voz e imágenes; 
                  también ofrece herramientas para la interacción 
                  (video conferencia, chat, foro, cuestionarios, etc.)</p>
          </span>
      </div>
      <div class="columna">
          <span class="texto-titulo">Innovadora</span> 
             <span class="descriccion-text">
                 <p>En el desarrollo de nuevos escenarios de aprendizaje. 
                     Permite al usuario desarrollar un proceso de aprendizaje a su 
                     propio ritmo y según sus propias exigencias</p>
             </span>
      </div>
      <div class="columna">
          <span class="texto-titulo">Motivadora</span> 
          <span class="descriccion-text">
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
      return {}
    },
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
    height: 15%;
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
</style>