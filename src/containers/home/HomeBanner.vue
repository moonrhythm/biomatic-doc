<template>
  <div class="home-banner lo-container">
    <div class="lo-xs-12 lo-sm-6 _h-100pct _pdt-0px-sm">

      <div class="_als-ct _jtfs-ct _cl-white _tal-ct _tal-l-sm">
        <h1>Biomatic UI</h1>
        <p class="_mgbt-16px _fs-4">
          CSS Framework ที่เขียนสนุกที่สุด <br>
          สำหรับทุกโปรเจคของคุณ
        </p>
        <div class="bio-button -accent _fw-700 _w-256px _mgbt-8px _dp-ilb _dp-b-sm">
          Download
        </div>
        <div>
          <small><strong>เวอร์ชั่นล่าสุด v0.5</strong></small>
        </div>
      </div>

      <div class="_als-e _jtfs-ct _dp-n _dp-b-sm">
        <img src="~@/assets/home/phone.svg" height="400" alt="hero-image">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBanner'
  }
</script>

<style lang="scss" scoped>
  .home-banner {
    height: 450px;
    background-image: url(~@/assets/home/banner-bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: relative;

    // sm upper
    @media (min-width: 770px) {
      height: 500px;
      &:after {
        content: ' ';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 120px;
        left: 0;
        bottom: -60px;
        background-image: url(~@/assets/home/backslant-white.svg);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
</style>
