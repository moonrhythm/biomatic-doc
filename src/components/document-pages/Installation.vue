<template>
  <div class="_pdt-24px _pdbt-48px">

    <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
      <a href="#getting-start" class="bio-link -primary"><strong>#</strong></a> การติดตั้ง
    </div>

    <div class="_fs-4 _fw-600 _lh-150pct _mgbt-32px">
      ขั้นตอนการติดตั้ง
    </div>

    <p class="_mgbt-8px _fs-6">
      <strong>วิธีที่ 1 – ติดตั้งผ่าน yarn หรือ npm เราแนะนำวิธีนี้ 👍 </strong>
    </p>
    <p class="_mgbt-16px _fs-6">
      <code class="_pd-12px _dp-b">yarn add biomatic</code>
    </p>
    <p class="_mgbt-64px _fs-6">
      <code class="_pd-12px _dp-b">npm install biomatic --save</code>
    </p>

    <p class="_mgbt-8px _fs-6">
      <strong>วิธีที่ 2 – ดาวโหลด Complied CSS 👌</strong>
    </p>
    <a class="bio-button -accent -outline _mxw-256px _mgbt-16px" href="https://github.com/BioMaRu/biomatic/releases/download/0.0.2/biomatic.css.zip">
      ดาวน์โหลด Biomatic
    </a>
    <p class="_mgbt-8px _fs-6">
      หลังจากนั้น ทำหารลิงค์ biomatic ไปยังโปรเจคของคุณด้วย
    </p>
    <pre><code><pre class="_mgbt-64px"><code class="language-markup">&lt;link href="/path/to/biomatic" rel="stylesheet"&gt;</code></pre></code></pre>
    <p class="_mgbt-64px _fs-6">
      เท่านี้คุณก็พร้อมใช้งาน Biomatic ได้ทันที 🔥🔥
    </p>


    <hr class="_opct-30 __mgbt-64px">

    <div class="_dp-f _jtfct-spbtw">
      <div>
        <h6 class="_mgbt-8px">หัวข้อก่อนหน้า</h6>
        <router-link :to="{ name: 'Introduction' }" class="bio-link -fancy _pd-8px _bdrd-2px">
          <i class="fa fa-long-arrow-left _fs-6"></i>&nbsp;&nbsp;เกี่ยวกับ Biomatic
        </router-link>
      </div>
      <div>
        <h6 class="_mgbt-8px">หัวข้อต่อไป</h6>
        <router-link :to="{ name: 'GettingStart' }" class="bio-link -fancy _pd-8px _bdrd-2px">
          เริ่มต้นใช้งาน &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-6"></i>
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

