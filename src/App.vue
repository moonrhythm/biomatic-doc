<template>
  <div id="app">

    <TheNavbar
      ref="TheNavBar"
      :is-color="isNavbarColor"
    />
    <router-view></router-view>
    <TheFooter />

  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'
  import TheFooter from '@/components/TheFooter'

  export default {
    name: 'App',

    components: {
      TheNavbar,
      TheFooter
    },

    data () {
      return {
        isNavbarColor: false
      }
    },

    watch: {
      $route () {
        this.initialNavbar()
      }
    },

    mounted () {
      this.initialNavbar()
    },

    methods: {
      initialNavbar () {
        window.removeEventListener('scroll', this.checkNavbarColor)
        if (this.$route.path.indexOf('doc') !== -1) {
          this.isNavbarColor = true
        } else {
          this.checkNavbarColor()
          window.addEventListener('scroll', this.checkNavbarColor)
        }
      },
      checkNavbarColor () {
        this.isNavbarColor = (window.scrollY > 15)
      }
    }
  }
</script>

<style lang="scss">

  html {
    touch-action: manipulation;
  }

  ._font-main {
    font-family: 'Kanit', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  }

  p, ._font-sub {
    font-family: Arial, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  }

</style>
