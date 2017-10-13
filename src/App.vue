<template>
  <div id="app">
    <nav>
      <div class="lo-container">
        <div class="_dp-f _jtfct-spbtw">
          <img class="logo" src="~@/assets/logo.svg" height="50" alt="logo">
          <div>Hello</div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: transparent;
    z-index: 1;

    > .logo {

    }

  }
</style>

<style lang="scss">

  ._font-main {
    font-family: 'Kanit', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  }

  p, ._font-sub {
    font-family: Arial, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  }

</style>
