<template>
  <div class="home-banner">
    <div class="lo-xs-6 _h-100pct">

      <div class="_als-ct _jtfs-ct">
        <h1 class="_cl-white">Biomatic UI</h1>
        <p class="_cl-white _mgbt-16px _fs-4">CSS Framework ที่เขียนสนุกที่สุด<br>สำหรับทุกโปรเจคของคุณ</p>
        <div class="bio-button -accent _fw-700 _w-256px _mgbt-8px">Download</div>
        <div class="_cl-white"><small><strong>เวอร์ชั่นล่าสุด v0.5</strong></small></div>
      </div>

      <div class="_als-e _jtfs-ct">
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
    height: 500px;
    background-image: url(~@/assets/home/banner-bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
</style>
