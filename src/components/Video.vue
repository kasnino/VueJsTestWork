<template>
  <div >
   <!-- <iframe 
   title="TIC-development" 
   className="embed-responsive-item" 
   src="https://www.youtube.com/embed/AoQYKdF3NKc" 
   allowFullScreen></iframe> -->

<iframe 
        class="videos"
        width="600" height="315" 
        src="https://www.youtube.com/embed/ImKHslGDJhQ" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
 
  </div>
</template>

<script>

export default {
    name: "Video",
    components:{ },
    data(){
      return {}
    },
}
</script>

<style lang="scss" scoped>


.videos{
    border-radius: 15px;
  
}
</style>