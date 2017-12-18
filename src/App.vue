<template>
  <div id="app">

    <TheNavbar
      v-if="isShowNavbar"
      ref="TheNavBar"
      :is-color="isNavbarColor"
    />

    <router-view
      id="app-content"
    ></router-view>

    <TheFooter
      v-if="isShowFooter"
      ref="TheFooter"
    />

  </div>
</template>

<script>
  import {
    TheNavbar,
    TheFooter
  } from '@/components/common'

  export default {
    name: 'App',

    components: {
      TheNavbar,
      TheFooter
    },

    data () {
      return {
        isNavbarColor: false,
        isShowNavbar: true,
        isShowFooter: true
      }
    },

    watch: {
      $route () {
        this.initialNavbar()
        this.initialFooter()
      }
    },

    mounted () {
      this.initialNavbar()
      this.initialFooter()
    },

    methods: {
      initialNavbar () {
        window.removeEventListener('scroll', this.checkNavbarColor)
        if (this.isDocumentPage()) {
          this.isNavbarColor = true
        } else {
          this.checkNavbarColor()
          window.addEventListener('scroll', this.checkNavbarColor)
        }
      },
      initialFooter () {
        this.isDocumentPage() ? this.footerHide() : this.footerShow()
      },
      checkNavbarColor () {
        this.isNavbarColor = (window.scrollY > 15)
      },
      getFooterHeight () {
        if (this.$refs.TheFooter) {
          return this.$refs.TheFooter.$el.clientHeight
        }
      },
      isDocumentPage () {
        return this.$route.matched.filter(x => x.name === 'Document').length === 1
      },
      navbarShow () {
        this.isShowNavbar = true
      },
      navbarHide () {
        this.isShowNavbar = false
      },
      footerShow () {
        this.isShowFooter = true
      },
      footerHide () {
        this.isShowFooter = false
      }
    }
  }
</script>

<style lang="scss" scope>

  // #app-content {
  //   min-height: calc(100vh - 200px);
  // }

</style>

<style lang="scss">

  html {
    touch-action: manipulation;
  }

  ::selection {
    background: hsla(350, 100%, 60%, 0.5);
  }

  #app {
    min-height: 100vh;
  }

  .anchor {
    position: relative;
    top: -86px;
  }

  ._font-main {
    font-family: 'Kanit', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  }

  p, ._font-sub {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  }

  .u-panel {
    padding: 16px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 2px solid #e9e9e9;
    border-top-width: 0px;
    border-color: hsla(0, 0%, 90%, 0.8);
  }

  pre.example.language-markup {
    border: 2px solid #e9e9e9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-bottom: 0px;
  }
</style>
