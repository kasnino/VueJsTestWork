<template>
  <div >
    <div class="conten-test">
     <div class="imagen-conten">
                  <div  class="imagen-turo"> 
                        <div>
                            <img src="../assets/img/tutor-circ.png" alt="" class="tutor">
                        </div>
                        <div class="centrar-titulo">
                          <h1>Seleccione la Respuesta que Considere correcta...!
                          </h1>  
                        </div>
                  </div> 
            </div>
    <TestCompo></TestCompo>
    </div>
  </div>
</template>

<script>

import TestCompo from "@/components/TestCompo";
export default {
  components:{ TestCompo}
}
</script>

<style lang="scss" scoped>
.imagen-turo{
      width: 60%;
    height: 15%;

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
  
}
   img{
    width: 70px;
    height: 70px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid #FFF;
    padding: 3px;
}

.conten-test{
display: grid;
grid-template-rows: 30% 70%;
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
</style>