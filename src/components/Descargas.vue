<template>
  <div  >
      <div class="descargar">
     <a class="descapdf" target="_blank" href="etnografia-virtual.pdf" download="lawebera"><i class="fas fa-cloud-download-alt"></i></a>
        
</div>
<span class="boton-descargar">Descargar</span>
  </div>
</template>

<script>

export default {
    name: "Descargas",
    components:{ },
    data(){
      return {}
    },
}
</script>

<style lang="scss" scoped>
.descargar {

	    width: 100px;
    height: 100px;
    border-radius: 50%;
 
    font-size: 60px;
    cursor: pointer;
    color: white;
    background: #731b8b;
    justify-content: center;
    display: flex;
    align-items: center;
    right: 10px;
    bottom: 10px;
    text-align: center;
    margin-bottom: 17px;
}

.descargar:hover{
background: #038287;
color:white;
}

.descapdf {
	position: absolute;
	color: white;
}

.boton-descargar{
    margin-top: 5px;
    width: 150px;
    height: 100%;
    background: #731b8b;
    padding: 7px;
    color: white;
    border-radius: 15px;
    cursor: pointer;
}
</style>