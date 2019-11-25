<template>
  <div class="home">
     <div class="contenedor">
          <div class="contenfila">
            <div class="conten-icon">
               <CompIcon></CompIcon>
               <div class="tutor" >
                <CompoTutor></CompoTutor>
                </div>
            </div>
           
             <div class="conten-form-grid">
              <Formulario></Formulario>
             </div>
          </div>
          <div class="contenfilados">
          </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Formulario from "@/components/Formulario";
import CompIcon from "@/components/CompIcon";
import CompoTutor from "@/components/CompoTutor";

export default {
    name: "home",
    components:{ Formulario, CompIcon, CompoTutor },
    
    data(){
      return {
      }
    },

      methods:{

}
}
</script>
<style scoped>

.contenedor{
  width: 100%;
  height: 658px;
  background: #fffefea8;
  display: grid;
  grid-template-columns: repeat(1,100%); 
  grid-template-rows: 80% 20%;
}

.tutor{
  width: 100%;
    /* height: 60%; */
    background: #038287;
    margin-top: 18px;
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    justify-content: center;
      animation-duration: 1s;
  animation-name: slidein;
}
.contenfila{
  width: 100%;
  height: 100%;
 
  display: grid;
  grid-template-columns: repeat(2,50%); 
}

.contenfilados{
  /* background: #731b8bb5; */
 
  width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
} 

.conten-form-grid{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

}

@keyframes slidein {
  from {
    margin-left: -240px;
    
  }

  to {
    margin-left: 0%;

  }
}


@media screen and (max-width: 1024px) {

  .contenedor{
  width: 100%;
  height: 758px;
  display: grid;
  grid-template-columns: repeat(1,100%); 
  grid-template-rows: 40% 50% 10%;
  }

  .contenfila{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2,50%);
  grid-template-columns: repeat(1, 1fr); 
}

.tutor{
  width: 45%;
   height: 100%; 
 
}

.conten-form-grid{
margin-top:18%;
  
}

}
</style>