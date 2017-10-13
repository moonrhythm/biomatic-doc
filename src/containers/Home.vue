<template>
  <div>
    Home
    <router-link :to="{ name: 'Document' }" class="bio-link -fancy">Document</router-link>
    <router-link :to="{ name: 'AtomicBorder' }" class="bio-link -fancy">Border</router-link>
    World
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
