<template>
  <div id="home-getting-start" class="background-gradient _pdv-32px">

    <div class="lo-container">
      <div id="content" class="">

        <div class="_tal-ct _mgbt-24px">
          <h2 class="_cl-primary _lh-100pct _mgbt-8px">Quick Start</h2>
          <p class="_fs-5 _opct-60">เริ่มต้นกับ Biomatic</p>
        </div>

        <div class="_bgcl-white _bdrd-1px u-rise-1 _pdh-8px _pdv-32px _pd-32px-sm">
          <HomeGettingStartSetup class="_mgbt-32px"/>
          <!-- <HomeGettingStartBasic /> -->
          <div class="_tal-ct _dp-f _jtfct-ct">
            <router-link :to="{ name: 'Introduction' }" class="bio-button -accent _w-256px u-rise"><strong>อ่านวิธีใช้งาน</strong></router-link>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Prism from 'prismjs'
  import HomeGettingStartSetup from './HomeGettingStartSetup'
  import HomeGettingStartBasic from './HomeGettingStartBasic'

  export default {
    name: 'HomeGettingStart',

    components: {
      HomeGettingStartSetup,
      HomeGettingStartBasic
    },

    mounted () {
      Prism.highlightAll()
    }
  }
</script>

<style lang="scss" scoped>
  .background-gradient {
    background-image: linear-gradient(-270deg, #50AFE3 0%, #657EFA 100%);
  }

  #content {
    position: relative;
    z-index: 1;
  }

  #home-getting-start {
    position: relative;
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 400px;
      left: 0;
      top: 0;
      background-image: url(~@/assets/home/backslant-gray.svg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
</style>

