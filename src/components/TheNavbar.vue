<template>
  <nav :class="{ '_bgcl-primary drop-shadow': isColor }">
    <div class="lo-container _h-100pct">
      <div class="_dp-f _jtfct-spbtw _alit-ct">

        <router-link to="/">
          <img class="logo" src="~@/assets/logo-type.svg" height="50" alt="logo">
        </router-link>

        <div class="_dp-f _alit-ct">

          <a href="/document/getting-start" class="bio-link -white _pdh-16px">
            <strong>Getting Start</strong>
          </a>

          <router-link :to="{ name: 'AtomicBorder' }" class="bio-link -white _pdh-16px _mgr-32px">
            <strong>Document</strong>
          </router-link>

          <a href="https://github.com/BioMaRu/biomatic" target="_blank">
            <i class="fa _fs-3 fa-github bio-link -white"></i>
          </a>

        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',

  props: {
    isColor: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 1;
    will-change: background-color;
    transition: all .6s ease;
    &.drop-shadow {
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    }
  }
</style>
