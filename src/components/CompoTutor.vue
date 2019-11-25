<template>
     <div  class="imagen-tutor">   
                <img src="../assets/img/tutor.png" alt="" class="tutor">
                </div> 
</template>


<script>
export default {
  name: "Compicon",
  components: {},
};
</script>

<style   lang="scss" scoped>

.imagen-tutor {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    img{
      width: 17%;
    height: 90%;
    }
}


@media screen and (max-width: 1024px) {
.imagen-tutor {

    img{
     
      height: 90%;
    }
}


}
</style>