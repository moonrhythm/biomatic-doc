<template>
  <nav :class="{ '_bgcl-primary drop-shadow': isColor }">
    <div class="lo-container _h-100pct">
      <div class="_dp-f _jtfct-spbtw _alit-ct">

        <router-link to="/">
          <img class="logo" src="~@/assets/logo-type.svg" height="50" alt="logo">
        </router-link>

        <div class="_dp-n _dp-f-sm _alit-ct">

          <!-- <router-link :to="{ name: 'GettingStart' }" class="bio-link -white _pdh-16px">
            <strong>Getting Start</strong>
          </router-link> -->

          <router-link :to="{ name: 'Introduction' }" class="bio-link -white _pdh-16px _mgr-32px">
            <strong>Document</strong>
          </router-link>

          <router-link to="https://github.com/BioMaRu/biomatic" target="_blank">
            <i class="fa _fs-3 fa-github bio-link -white"></i>
          </router-link>

        </div>

        <div @click="menuToggle" class="_dp-b _dp-n-sm _pst-rlt _w-64px _h-100pct _cs-pt">
          <transition name="fade-spin" mode="out-in">
            <div
              v-if="!isMenuOpen"
              class="_dp-f _alit-ct _jtfct-ct _pst-asl _r-0px _t-0px _w-64px _h-100pct">
              <i class="fa fa-bars _cl-white _fs-4 _w-24px _h-24px _mg-auto _tal-ct"></i>
            </div>
          </transition>
          <transition name="fade-spin" mode="out-in">
            <div
              v-if="isMenuOpen"
              class="_dp-f _alit-ct _jtfct-ct _pst-asl _r-0px _t-0px _w-64px _h-100pct">
              <i class="fa fa-close _cl-white _fs-4 _w-24px _h-24px _mg-auto _tal-ct"></i>
            </div>
          </transition>
        </div>

        <transition name="slide-in" mode="out-in">
          <div v-if="isMenuOpen" class="_pst-asl _l-0px _w-100pct _pdh-4px" style="top:56px">

            <!-- Menu Panel -->
            <div class="nav-mobile-menu-panel _bgcl-white _bdrd-2px _pd-16px u-rise-1 _ovf-at">

              <a href="https://github.com/BioMaRu/biomatic" target="_blank">
                <i class="fa _fs-3 fa-github bio-link -primary"></i> <span class="_cl-primary"><strong>Github</strong></span>
              </a>

              <hr class="_opct-20 _mgbt-16px _mgt-16px">

              <div class="bio-accordion -has-icon _mgbt-8px">
                <input id="nav-accordion-getting-start" type="checkbox" checked>
                <label for="nav-accordion-getting-start" class="_mgbt-8px">
                  <strong>Getting Start</strong>
                </label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link :to="{ name: 'Introduction' }" class="bio-link -item _mgbt-4px" :active-class="'-active'" exact>
                    เกี่ยวกับ Biomatic
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px" :active-class="'-active'" exact>
                    วิธีติดตั้ง
                  </router-link>
                  <router-link :to="{ name: 'GettingStart' }" class="bio-link -item _mgbt-4px" :active-class="'-active'" exact>
                    เริ่มต้นใช้งาน
                  </router-link>
                </div>
              </div>

              <div class="bio-accordion -has-icon _mgbt-8px">
                <input id="nav-accordion-atomic" type="checkbox" checked>
                <label for="nav-accordion-atomic" class="_mgbt-8px">
                  <strong>Atomic</strong>
                </label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link :to="{ name: 'GettingStart' }" class="bio-link -item _mgbt-4px">
                    Item 1
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 2
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 3
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 4
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 5
                  </router-link>
                </div>
              </div>

              <div class="bio-accordion -has-icon _mgbt-8px">
                <input id="nav-accordion-components" type="checkbox" checked>
                <label for="nav-accordion-components" class="_mgbt-8px">
                  <strong>Components</strong>
                </label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link :to="{ name: 'GettingStart' }" class="bio-link -item _mgbt-4px">
                    Item 1
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 2
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 3
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 4
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 5
                  </router-link>
                </div>
              </div>

              <div class="bio-accordion -has-icon _mgbt-8px">
                <input id="nav-accordion-utilities" type="checkbox" checked>
                <label for="nav-accordion-utilities" class="_mgbt-8px">
                  <strong>Utilities</strong>
                </label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link :to="{ name: 'GettingStart' }" class="bio-link -item _mgbt-4px">
                    Item 1
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 2
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 3
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 4
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item _mgbt-4px">
                    Item 5
                  </router-link>
                </div>
              </div>

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
  },

  watch: {
    '$route' () {
      this.menuClose()
    }
  },

  methods: {
    menuOpen () {
      this.isMenuOpen = true
    },
    menuClose () {
      this.isMenuOpen = false
    },
    menuToggle () {
      this.isMenuOpen = !this.isMenuOpen
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

  .nav-mobile-menu-panel {
    max-height: calc(100vh - 64px);
  }

  // Transition
  .fade-spin-enter-active, .fade-spin-leave-active {
    transition: all .16s;
    opacity: .5;
  }

  .fade-spin-enter, .fade-spin-leave-to {
    opacity: 0;
    transform: rotate(180deg);
  }

  .slide-in-enter-active, .slide-in-leave-active {
    transition: all .10s;
    opacity: .7;
  }

  .slide-in-enter, .slide-in-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }

</style>
