<template>
  <div>
    <HomeBanner class="_mgbt-64px" />
    <HomeBenefits class="_mgbt-64px" />
    <HomeGettingStart />
  </div>

</template>

<script>
  import HomeBanner from './HomeBanner'
  import HomeBenefits from './HomeBenefits'
  import HomeGettingStart from './HomeGettingStart'
  export default {
    name: 'Home',

    components: {
      HomeBanner,
      HomeBenefits,
      HomeGettingStart
    }
  }
</script>
