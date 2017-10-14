<template>
  <div class="_bgcl-neutral-800">
    <div class="lo-container _cl-white">
      <div class="_pdv-32px _opct-80">
        <div class="_mgbt-8px">Made with &nbsp;<i class="fa fa-heart _cl-negative pulse"></i>&nbsp; by BioMaRu</div>
        <div class="_opct-50">Licensed under the <a href="https://github.com/BioMaRu/biomatic/blob/master/LICENSE" class="bio-link -white -fancy">MIT License</a>.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>

  .pulse {
    animation: pound .35s infinite alternate;
    -webkit-animation: pound .35s infinite alternate;
  }

  @keyframes pound {
    100% {
      transform: scale(1.1);
    }
  }
</style>
