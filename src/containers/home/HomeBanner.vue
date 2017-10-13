<template>
  <div class="home-banner">
    <div class="lo-xs-7-5 _h-100pct">

      <div class="_als-ct _jtfs-ct">
        <h1 class="_cl-white">Biomatic UI</h1>
        <p class="_cl-white _mgbt-16px">CSS Framework ที่ทำไว้ใช้เอง</p>
        <div class="bio-button -accent _fw-700">Download</div>
      </div>

      <div class="_als-e _jtfs-ct">
        <img src="~@/assets/home/phone.svg" height="350" alt="hero-image">
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
