<template>
  <div class="loading-screen">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259 409">
            <path d="M253.77 25a5.23 5.23 0 0 0 5.23-5.23V5.23A5.23 5.23 0 0 0 253.77 0H6.23A5.23 5.23 0 0 0 1 5.23v14.54A5.23 5.23 0 0 0 6.23 25H21v168H5.64A4.64 4.64 0 0 0 1 197.64v14.72A4.64 4.64 0 0 0 5.64 217H20v167H5a5 5 0 0 0-5 5v15a5 5 0 0 0 5 5h248a5 5 0 0 0 5-5v-15a5 5 0 0 0-5-5h-17V217h18.36a4.64 4.64 0 0 0 4.64-4.64v-14.72a4.64 4.64 0 0 0-4.64-4.64H238V25zm-40.42 167h-56.41c2.53-.81 5-1.72 7.5-2.76A87.77 87.77 0 0 0 211 142.68c.88-2.06 1.64-4.16 2.35-6.27zM46.12 132.4a87.57 87.57 0 0 0 50.15 56.85c2.47 1 5 1.95 7.5 2.76H46.12zm85.75 38.95a62.77 62.77 0 1 1 61.23-61.24 62.77 62.77 0 0 1-61.23 61.24zM105.09 24.78a87.12 87.12 0 0 0-59 60v-60zm-4 192.42c-2.16.72-4.3 1.5-6.42 2.4a87.8 87.8 0 0 0-46.56 46.56 85.34 85.34 0 0 0-3.59 10.29V217.2zM44.52 324a85.34 85.34 0 0 0 3.59 10.29 87.77 87.77 0 0 0 46.56 46.61c2.47 1 5 2 7.5 2.76H44.52zm85.75 39a62.76 62.76 0 1 1 61.23-61.23A62.77 62.77 0 0 1 130.27 363zm79.14-28.66c.87-2.07 1.64-4.16 2.35-6.28v55.61h-56.42c2.53-.81 5-1.72 7.5-2.76a87.75 87.75 0 0 0 46.57-46.57zm2.35-61.89c-.71-2.11-1.48-4.21-2.35-6.28a87.77 87.77 0 0 0-46.57-46.56c-2.11-.9-4.26-1.68-6.42-2.4h55.34zm1.59-191.65c-.71-2.11-1.47-4.21-2.35-6.27a87.29 87.29 0 0 0-55.38-49.74h57.73z" />
      </svg>
  </div>
</template>

<script>
  export default {
    created(){
      var _this = this
      setTimeout(function(){
         _this.$emit("close")
      }, 5000)
    }
  };

</script>
<style lang="scss" scoped>
  @import "../assets/scss/import";
  @keyframes draw {
    0% {
      fill-opacity: 0;
      stroke-dashoffset: 3856;
    }
    50% {
      fill-opacity: 0;
      stroke: #17bdd5;
    }
    100% {
      fill-opacity: 1;
      stroke-dashoffset: 0;
      stroke: transparent;
    }
  }
  
  .loading-screen {
    position: fixed;
    width: 100%;
    @extend %grid;
    align-items: center;
    background-color:$white;
    top:0;
    left:0;
    min-height: 100vh;
    justify-content: center;
  }
  
  .icon {
    width: 150px;
    path {
      stroke: #17bdd5;
      fill: #17bdd5;
      stroke-width: 2px;
      stroke-dasharray: 3000;
      animation: 6s draw;
    }
  }
</style>
