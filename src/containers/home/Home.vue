<template>
  <div>
    <HomeBanner />
    <div class="lo-container">
      <div>Home</div>
      <router-link :to="{ name: 'Document' }" class="bio-link -fancy">Document</router-link>
      <router-link :to="{ name: 'AtomicBorder' }" class="bio-link -fancy">Border</router-link>
      <div>World</div>
    </div>
  </div>

</template>

<script>
  import HomeBanner from './HomeBanner'
  export default {
    name: 'Home',

    components: {
      HomeBanner
    }
  }
</script>
