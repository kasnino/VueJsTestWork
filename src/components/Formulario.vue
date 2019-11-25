<template>
    <div class="fomrulario">
                      
                            <form
                            @submit="checkForm"
                            novalidate="true">
                             <div class="model-error">
                                <p v-if="errors.length">
                                    <b class="errores">Por favor, llene todo el formulario! 🤙 <i class="fas fa-times"></i></b>
                                    <ul class="listaerror">
                                    <!-- <li v-for="(dato, error) in errors" v-bind:key="error">{{ dato }} </li>    -->
                                    </ul>
                                  </p>
                                </div> 
                            
                              <span>Escribe tus Datos aqui!</span>
                            <p>
                              <label for="name"></label>
                              <input 
                              v-on:click="limpiar()"
                              v-model="name"
                              class="input-form" 
                              placeholder="Nombre">
                            </p>

                            <p>
                              <label for="age"></label>
                              <input 
                              v-on:click="limpiar()"
                              v-model="age"
                              class="input-form" 
                              type="number" 
                              placeholder="Edad"
                            >
                              
                            </p>
                              <p>
                                  <label for="email"></label>
                                <input 
                                 v-on:click="limpiar()"
                                id="email"
                                v-model="email"
                                type="email"
                                name="email"
                                class="input-form"  placeholder="email@gmail.com" />
                              </p>
                            <p>

                                <span>Tu Eres?</span>
                                <ul class="lista">

                                    <div class="btn-male">
                                        <a>
                                            <img class="imagen-genero" src="../assets/img/men.png">
                                        </a>
                                    </div>
                                    <div class="btn-fame">
                                        <a>
                                            <img class="imagen-genero" src="../assets/img/mujer.png">
                                        </a>
                                    </div>
        
                                </ul>
                                <span>Estas Cursando:</span>
                                <div class="checkbox"
                                @change="onChangeCheckbox">
                                    <input id="checkbox-rem" 
                                          type="checkbox"
                                          value="1"
                                          v-model="categorias" />
                                    <label for="checkbox-rem">Tecnica
                                        <span class="box"></span>
                                    </label>
        
                                    <input id="checkbox-1" 
                                          type="checkbox"
                                          value="2"
                                          v-model="categorias" />
                                    <label for="checkbox-1">Tecnologica
                                        <span class="box"></span>
                                    </label>
        
                                    <input id="checkbox-2" 
                                          type="checkbox"
                                          value="3"
                                          v-model="categorias" />
                                    <label for="checkbox-2">Profesional
                                        <span class="box"></span>
                                    </label>
        
                                    <input id="checkbox-3" 
                                          type="checkbox"
                                          value="4"
                                          v-model="categorias" />
                                    <label for="checkbox-3">Postgrado
                                        <span class="box"></span>
                                    </label>
                                </div>
                            

                            <p class="botonmain">
                              <button
                               >Enviar</button>
                            </p>
                            </form>
                      </div>
</template>


<script>
// @ is an alias to /src


export default {
  name: "formulario",
  components: {  },
      data (){
          return{
                errors: [],
                name: null,
                age: null,
                sexo: null,
                carrera: null,
                email: null,
                categorias: [],
                datos: []
          }
      },

methods: {
    checkForm(e) {
      console.log("entro al metodo");
      if (this.name && this.age) {
        return true;
      }
      /*Validacion del formulario errores*/ 
       this.errors = [];

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.age) {
        this.errors.push('La edad es obligatoria.');
      }
      if (!this.email) {
        this.errors.push('El correo electrónico es obligatorio.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }

      if(this.categorias.length === 0){
        this.errors.push('Seleccione una carrera');
      }


      
      e.preventDefault();
    },


//  validEmail(email) {
//       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//     },

  limpiar(){
      return this.errors = []
  },

  

    /*Validando los checkbos, seleccion de carreras en tiempo real */
    onChangeCheckbox(){
      if(this.categorias.length >= 2){
        this.errors.push('Solo Seleccione una carrera');
      }else{
        this.errors = [];
      }
    },
}
}
</script>


<style lang="scss">


  @font-face {
	font-family: "fuente-estetica";
	src: url(/GeosansLight.ttf);

  }

 :root{
 
 
--SpanCheckColor: #8bc34a;
--BorderSpanCheck: #fff;
--BadgeColor: #e1f5fe;
--letraColor: #000;
--borderColor: #009688;
--borderColorLabel: #009688;
--LoginFondoColor: #fff;
--InputFondo: #66666617;
--TituloColor: #009688;
--FondoTitulo: #fff;
--BotonColor: #731b8b;
--BadgecolorLetra: #03a9f4;
--borderSapn: #2d303a78;
--borderWell: #009688;
--TituloColorCentral: #009688;
--BorderFocusForm: #03a9f4;
--LetraFormColor: #000;
--ColorLetrasDescription: #000;
};
.fomrulario{
  width: 80%;
  height: 580px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  transform: scale(0.86);  
  border: 1px solid #6666664a;
   box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
   font: 600 18px/1 "Poppins", sans-serif;
   color: #666666ab;
}

input.input-form{
  background: var(--InputFondo);
   	font-family: "Ubuntu", sans-serif;
  text-transform: capitalize;
  font-size: 15px;
  border-radius: 5px;
  margin: 10px;
  outline: none;
  outline-color: #fff;
  color: var(--borderSapn);
  padding: 15px;
  width: 380px; 
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.imagen-genero {
  width: 38px;
  background: white;
  padding: 2px;
  border-radius: 50%;
  height: 38px;
  cursor: pointer;
  border: 2px solid #666;
  }
     
.checkbox {
    display: grid;
    grid-gap: 10px;
    position: relative;
    user-select: none;
    margin-bottom: 10px;
    margin: 16px;
    grid-template-columns: repeat(2,50%);
    grid-gap: 17px;
    input {
      display: none;
    }
      label {
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      font-weight: 500;
      padding-left: 35px;
    }
    span.box {
      display: inline-block;
      width: 20px;
      border-radius: 5px;
      border: 1px solid var(--borderSapn);
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-right: 3px;
      transition: 0.3s ease;
      position: absolute;
      left: 0;
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 4px;
        height: 16px;
        border-radius: 40px;
        background: #FFF;
        transition: all 0.3s ease;
        margin-left: -10px;
      }
          &:before {
        transform: rotate(45deg) translateY(-5px) translateX(10px) scale(0);
      }
      &:after {
        height: 8px;
        transform: rotate(-45deg) translateY(10px) translateX(-4px) scale(0);
        
      }
    }
  }
  
  input:checked {
      + label {
        span.box {
       
        background: #DA22FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #9733EE, #DA22FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #9733EE, #DA22FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

          border-color: var(--BorderSpanCheck);
          &:before {
            transform: rotate(45deg) translateY(-5px) translateX(10px) scale(1);
          }
          &:after {
            height: 8px;
            transform: rotate(-45deg) translateY(10px) translateX(-4px) scale(1);
            
          }
        }
      }
    }

.lista {
  list-style: none;
  display: flex;
    margin: 10px;

    div {
      margin: 5px;
    }
}


    .botonmain{
    width: 100%;
    height: 40px;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;

    button {
      border: none;
      width: 190px;
      height: 40px;
      border-radius: 10px;
      color: white;
      background: var(--BotonColor);
      cursor: pointer;
      outline-style: none;
      margin-top: 20px;
      outline: 0;
      border:none;
    }
    }

    button:focus {outline:0; outline-style: none;}

      .model-error{
      
     width: 100%;
    height: 20px;
    z-index: 10;
    margin-top: -13px;

      .listaerror {
        list-style: none;
          margin: 16px;
          color: #000;
          text-align: center;
      }

      .errores{
        width: 100%;
        height: 100%;
        background: #8ccd91bf;
        color: #fff;
        text-align: center;
        justify-content: center;
        align-items: center;
        display: grid;
      }
    }
</style>