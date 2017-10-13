<template>
  <div>
    <HomeBanner class="_mgbt-64px" />
    <HomeBenefits class="_mgbt-64px" />
    <div class="lo-container _mgbt-64px">
      <div>Home</div>
      <router-link :to="{ name: 'Document' }" class="bio-link -fancy">Document</router-link>
      <router-link :to="{ name: 'AtomicBorder' }" class="bio-link -fancy">Border</router-link>
      <div>World</div>
    </div>
  </div>

</template>

<script>
  import HomeBanner from './HomeBanner'
  import HomeBenefits from './HomeBenefits'
  export default {
    name: 'Home',

    components: {
      HomeBanner,
      HomeBenefits
    }
  }
</script>
