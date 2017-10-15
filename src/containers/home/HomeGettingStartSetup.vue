<template>
  <div>
    <div class="_mgbt-16px _fs-5"><strong>การติดตั้ง Biomatic</strong></div>
    <div class="_bgcl-neutral-300 _bdrd-4px _pdh-16px _pdv-16px _mgbt-64px">

      <div class="_mgbt-16px _mgt-8px"><strong>วิธีที่หนึ่ง</strong> <a class="bio-link -fancy" href="#">ดาวน์โหลด CSS</a> และลิงค์ไปยังโปรเจคของของคุณด้วย</div>
      <pre class="_mgbt-32px"><code class="language-markup">&lt;link href="/path/to/biomatic.css" rel="stylesheet"&gt;</code></pre>

      <div class="_mgbt-16px"><strong>วิธีที่สอง</strong> ติดตั้งผ่าน npm หรือ yarn</div>
      <pre class="_mgbt-8px"><code class="language-markup">npm install biomatic</code></pre>
      <pre class="_mgbt-32px"><code class="language-markup">yarn add biomatic</code></pre>

      <div class="_mgbt-16px"><strong>วิธีที่สาม</strong> ติดตั้งผ่าน cdnjs</div>
      <pre class="_mgbt-8px"><code class="language-markup">&lt;link href="/path/to/cdn" rel="stylesheet"&gt;</code></pre>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeGettingStartSetup'
  }
</script>
