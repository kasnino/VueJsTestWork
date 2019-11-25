<template>
    <div>

        <div class="container">
       
<div class="parte-uno">
             <div class="checkbox">
            <span class="pregunta">La cultura Virtual es...</span>
            <input 
			@change="evento()"
			class="checkbox-rem" id="checkbox-rem" type="checkbox" value="1" />
            <label 
			for="checkbox-rem">La cultura que esta emergiendo del uso de las TICs para la comunicacion, el entretenimiento y el mercadeo electronico.
                <span class="box"></span>
            </label>
            <input id="checkbox-1" type="checkbox" value="2" />
            <label for="checkbox-1">La cultura de los elemetos y el chat... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

                <span class="box"></span>
            </label>

            <input id="checkbox-2" type="checkbox" value="3" />
            <label for="checkbox-2">La cultua de los elemtos y el chat...tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

                <span class="box"></span>
            </label>
            </div>
        
</div>
		<div class="grid-columnas">
              <div class="parte-dos">  
				  <div class="checkbox">
							<span class="pregunta">La Educacion Virtual Permite...</span>

							<input id="checkbox-rema" type="checkbox" value="4" />
							<label for="checkbox-rema">La cultura que esta emergiendo quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								<span class="box"></span>
							</label>

							<input id="checkbox-13" type="checkbox" value="5" />
							<label for="checkbox-13">La cultua de los elemtos y el chat...Duis aute irure dolor in reprehenderit in voluptate velit esse

								<span class="box"></span>
								<span class="box"></span>
							</label>

							<input id="checkbox-21" type="checkbox" value="6" />
							<label for="checkbox-21">La cultua de los elemtos y el chat...cillum dolore eu fugiat nulla pariatur.
								<span class="box"></span>
							</label>
				     </div>
                </div>
        

			   <div class="parte-tres">  
				  <div class="checkbox">
						<span class="pregunta">La Educacion Virtual Permite...</span>

						<input id="checkbox-rema2" type="checkbox" value="4" />
						<label for="checkbox-rema2">La cultura que esta emergiendo quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							<span class="box"></span>
						</label>

						<input id="checkbox-132" type="checkbox" value="5" />
						<label for="checkbox-132">La cultua de los elemtos y el chat...Duis aute irure dolor in reprehenderit in voluptate velit esse

							<span class="box"></span>
							<span class="box"></span>
						</label>

						<input id="checkbox-212" type="checkbox" value="6" />
						<label for="checkbox-212">La cultua de los elemtos y el chat...cillum dolore eu fugiat nulla pariatur.
							<span class="box"></span>
						</label>
					</div>
                </div>
        
		</div>


        
    </div>

   <!-- <div class="conten">
            <a class="button" id="login">Ingresar!</a>
            <div class="spinner__wrapper">
                <div class="spinner-1">
                    <div class="spinner" data-loading="Loading..."></div>
                    <label></label>
                </div>
            </div>
        </div> -->
    </div>
 
</template>


<script>
export default {
	components: {},
	data(){
		return {}

	},

	methods: {

		evento(){
			console.log("cambio el chet!!")
			return true
		}
	}
}
</script>


<style lang="scss" scoped>
.contenedor {
  height: 900px;
  widows: 100%;
}
.checkbox {
	display: grid;
    -moz-user-select: none;
    -ms-user-select: none;
    width: 100%;
    grid-template-rows: repeat(3, 14%);
    grid-template-columns: repeat(1, 100%);
    justify-content: center;
    align-items: center;
    align-content: center;
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
		border: 1px solid #aaa;
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
			background: #fff;
			transition: all 0.3s ease;
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
				background: #731b8b;/* fallback for old browsers */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

				border-color: #fff;
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

.checkbox{
  margin: 10px;
  padding: 4px;
  font-size: 14px;
  
}

.conten {
	color: white;
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 30px;

}
a.button,
input.button,
{
	outline: none;
	width: 30%;
	text-align: center;
	display: inline-block;
	border: none;
	font: 500 16px/1 "Poppins", sans-serif;
	padding: 20px;
	cursor: pointer;
	border-radius: 10px;
	color: white;
	background: #167ac6;  /* fallback for old browsers */
		display: flex;
		justify-content: center;
		align-items: center;


	color: #FFF;
	position: relative;
	top: 0;
	transition: 0.2s ease;
}

.button:hover{
		background: #5cb85c;
}

.pregunta {
	width: 100%;
	height: 40px;
	border-radius: 10px;
	background: #038287;
	display: flex;
	color: white;
	text-align: center;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-weight: bold;

	
}

.container {
	width: 100%;
    border-radius: 10px;
    margin: 25px;
    box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
	height: 100%;
    display: grid;
    grid-template-rows: 45% 55%;
    justify-content: center;
    align-items: center;
}


.titulo {
	background: #00c6ff;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #0072ff, #00c6ff);
	color: white;
	height: 90px;
	border-radius: 10px;
	justify-content: center;
    align-items: center;
    display: flex;font-size: 20px;
    font-weight: bold;


}

.grid-columnas {
	display: grid;
	grid-template-columns: repeat(2, 50%);
	width: 100%;
	height: 100%;
	
}

.parte-dos{
	width: 100%;
	height: 100%;

	  display: grid;

    justify-content: center;
    align-items: center;
}

.parte-tres{
	width: 100%;
	height: 100%;

}
</style>