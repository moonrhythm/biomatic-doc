<template>
  <nav :class="{ '_bgcl-primary drop-shadow': isColor }">
    <div class="lo-container _h-100pct">
      <div class="_dp-f _jtfct-spbtw _alit-ct">

        <router-link to="/">
          <img class="logo" src="~@/assets/logo-type.svg" height="50" alt="logo">
        </router-link>

        <div class="_dp-n _dp-f-sm _alit-ct">

          <router-link :to="{ name: 'Introduction' }" class="bio-link -white _pdh-16px _mgr-32px">
            <strong>Document</strong>
          </router-link>

          <a href="https://github.com/BioMaRu/biomatic" target="_blank">
            <i class="fa _fs-3 fa-github bio-link -white"></i>
          </a>

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

              <div class="bio-accordion _mgbt-24px">
                <input id="accordion-getting-start" type="checkbox" checked>
                <label for="accordion-getting-start" class="_fs-5">
                  <strong>Getting Start</strong>
                </label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link :to="{ name: 'Introduction' }" class="bio-link -item" :active-class="'-active'">
                    เกี่ยวกับ Biomatic
                  </router-link>
                  <router-link :to="{ name: 'Installation' }" class="bio-link -item" :active-class="'-active'">
                    วิธีติดตั้ง
                  </router-link>
                  <router-link :to="{ name: 'GettingStart' }" class="bio-link -item" :active-class="'-active'">
                    การใช้งาน ⭐️
                  </router-link>
                  <!-- <router-link :to="{ name: 'GettingStart' }" class="bio-link -item" :active-class="'-active'" exact>
                    คำถามที่พบบ่อย
                  </router-link> -->
                  <!-- <a href="#" class="bio-link -item">SCSS Variables</a> -->
                </div>
              </div>

              <div class="bio-accordion _mgbt-24px">
                <input id="accordion-atomic" type="checkbox" checked>
                <label for="accordion-atomic" class="_fw-500 _fs-5"><strong>Atomic</strong></label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link
                    :to="{ name: 'AtomicAlignment' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Alignment
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicBackground' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Background
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicBorder' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Border
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicBoxPosition' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Box Position
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicBoxSize' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Box Size
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicColor' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Color
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicCursor' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Cursor
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicDisplay' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Display
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicFloat' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Float
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicMargin' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Margin
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicObjectFit' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Object Fit
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicOpacity' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Opacity
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicOverflow' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Overflow
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicPadding' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Padding
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicTypography' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Typography
                  </router-link>
                  <router-link
                    :to="{ name: 'AtomicZIndex' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Z-Index
                  </router-link>
                </div>
              </div>

              <div class="bio-accordion _mgbt-24px">
                <input id="accordion-components" type="checkbox" checked>
                <label for="accordion-components" class="_fw-500 _fs-5"><strong>Components</strong></label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link
                    :to="{ name: 'ComponentAccordion' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Accordion
                  </router-link>
                  <router-link
                    :to="{ name: 'ComponentBreadcrumb' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Breadcrumb
                  </router-link>
                  <router-link
                    :to="{ name: 'ComponentButton' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Button
                  </router-link>
                  <router-link
                    :to="{ name: 'ComponentCard' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Card
                  </router-link>
                  <router-link
                    :to="{ name: 'ComponentForm' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Form
                  </router-link>
                  <router-link
                    :to="{ name: 'ComponentMessage' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Message
                  </router-link>
                  <router-link
                    :to="{ name: 'ComponentProgress' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Progress
                  </router-link>
                  <router-link
                    :to="{ name: 'ComponentTooltip' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Tooltip
                  </router-link>
                </div>
              </div>

              <div class="bio-accordion _mgbt-8px">
                <input id="accordion-layouts" type="checkbox" checked>
                <label for="accordion-layouts" class="_fw-500 _fs-5"><strong>Layouts</strong></label>
                <div class="bio-accordion-content _pdv-8px">

                  <router-link
                    :to="{ name: 'LayoutContainer' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Container
                  </router-link>
                  <router-link
                    :to="{ name: 'LayoutResponsiveGrid' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Responsive Grid
                  </router-link>
                </div>
              </div>

              <div class="bio-accordion _mgbt-8px">
                <input id="accordion-utilities" type="checkbox" checked>
                <label for="accordion-utilities" class="_fw-500 _fs-5"><strong>Utilities</strong></label>
                <div class="bio-accordion-content _pdv-8px">
                  <router-link
                    :to="{ name: 'UtilityAnimation' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Animation
                  </router-link>
                  <router-link
                    :to="{ name: 'UtilityRise' }"
                    class="bio-link -item"
                    :active-class="'-active'">
                    Rise
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
