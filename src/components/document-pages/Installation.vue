<template>
  <div class="_pdv-48px">

    <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
      <a href="#getting-start" class="bio-link -primary"><strong>#</strong></a> การติดตั้ง
    </div>

    <div class="_fs-3 _fw-600 _lh-150pct _mgbt-32px">
      ขั้นตอนการติดตั้ง
    </div>

    <p class="_mgbt-8px _fs-5">
      <strong>วิธีที่ 1</strong> – ติดตั้งผ่าน yarn หรือ npm วิธีนี้สะดวกสุด 👍
    </p>
    <p class="_mgbt-16px _fs-5">
      <code class="_pd-12px _dp-b">yarn add biomatic</code>
    </p>
    <p class="_mgbt-64px _fs-5">
      <code class="_pd-12px _dp-b">npm install biomatic</code>
    </p>

    <p class="_mgbt-16px _fs-5">
      <strong>วิธีที่ 2</strong> – ดาวโหลด Complied CSS 👌
    </p>
    <a class="bio-button -accent -outline _mxw-256px _mgbt-64px" href="https://github.com/BioMaRu/biomatic/releases/download/0.0.2/biomatic.css.zip">
      ดาวน์โหลด Biomatic
    </a>
    <p class="_mgbt-8px _fs-5">
      หลังจากนั้น ทำการลิงค์ Biomatic ไปยังโปรเจคของคุณด้วย
    </p>
    <pre><code><pre class="_mgbt-64px"><code class="language-markup">&lt;link href="/path/to/biomatic.css" rel="stylesheet"&gt;</code></pre></code></pre>
    <p class="_mgbt-64px _fs-5">
      เท่านี้คุณก็พร้อมใช้งาน Biomatic ได้ทันที 🔥🔥
    </p>


    <hr class="_opct-30 _mgbt-32px">

    <div class="_dp-f _jtfct-spbtw">
      <div>
        <h5 class="_mgbt-16px">ก่อนหน้า</h5>
        <router-link :to="{ name: 'Introduction' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
          <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;เกี่ยวกับ Biomatic
        </router-link>
      </div>
      <div>
        <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
        <router-link :to="{ name: 'GettingStart' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
          การใช้งาน &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Installation',

  mounted () {
    Prism.highlightAll()
  }
}
</script>

