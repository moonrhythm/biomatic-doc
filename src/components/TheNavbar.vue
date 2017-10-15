<template>
  <nav :class="{ '_bgcl-primary drop-shadow': isColor }">
    <div class="lo-container _h-100pct">
      <div class="_dp-f _jtfct-spbtw _alit-ct">

        <router-link to="/">
          <img class="logo" src="~@/assets/logo-type.svg" height="50" alt="logo">
        </router-link>

        <div class="_dp-n _dp-f-sm _alit-ct">

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

        <div @click="isMenuOpen = !isMenuOpen" class="_pst-asl _r-0px _t-0px _w-64px _h-64px _cs-pt">
          <transition name="fade-spin" mode="out-in">
            <div
              v-if="!isMenuOpen"
              class="_dp-f _dp-n-sm _alit-ct _pst-asl _r-0px _t-0px _w-64px _h-64px">
              <i class="fa fa-bars _cl-white _fs-4 _w-24px _h-24px _mg-auto _tal-ct"></i>
            </div>
          </transition>
          <transition name="fade-spin" mode="out-in">
            <div
              v-if="isMenuOpen"
              class="_dp-f _dp-n-sm _alit-ct _pst-asl _r-0px _t-0px _w-64px _h-64px">
              <i class="fa fa-close _cl-white _fs-4 _w-24px _h-24px _mg-auto _tal-ct"></i>
            </div>
          </transition>
        </div>

        <transition name="slide-in" mode="out-in">
          <div v-if="isMenuOpen" class="_pst-asl _l-0px _w-100pct _pdh-4px" style="top:56px">
            <div class="_bgcl-white _bdrd-2px _pd-16px u-rise-hovered">
              <a href="#" class="bio-link -item _dp-b _w-100pct _lh-200pct _mgbt-8px">Menu 1</a>
              <a href="#" class="bio-link -item _dp-b _w-100pct _lh-200pct _mgbt-8px">Menu 2</a>
              <a href="#" class="bio-link -item _dp-b _w-100pct _lh-200pct _mgbt-8px">Menu 3</a>
              <a href="#" class="bio-link -item _dp-b _w-100pct _lh-200pct">Menu 4</a>
            </div>
          </div>
        </transition>
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
  },

  data () {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 2;
    will-change: background-color;
    transition: all .6s ease;
    &.drop-shadow {
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .fade-spin-enter-active, .fade-spin-leave-active {
    transition: all .16s;
    opacity: .5;
  }

  .fade-spin-enter, .fade-spin-leave-to {
    opacity: 0;
    transform: rotate(180deg);
  }

  .slide-in-enter-active, .slide-in-leave-active {
    transition: all .16s;
    opacity: .5;
  }

  .slide-in-enter, .slide-in-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }

</style>
