<template>
  <div id="home-getting-start" class="background-gradient _pdt-32px _pdbt-32px">
    <div class="lo-container">

      <div id="content" class="_ovf-at">

        <div class="_tal-ct _mgbt-32px">
          <h2 class="_lh-100pct _mgbt-8px">Quick Start</h2>
          <p class="_fs-5 _opct-60">เริ่มต้นใช้งาน</p>
        </div>

        <div class="_bgcl-white _bdrd-4px u-rise _pd-8px _pd-64px-sm _pd-8px-sm">

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

          <div class="_mgbt-16px _fs-5"><strong>Biomatic เบื้องต้น</strong></div>
            <div class="_bgcl-neutral-300 _bdrd-4px _pdh-16px _pdv-16px">

              <p class="_mgbt-16px _mgt-8px">
                <strong>Biomatic ประกอบไปด้วย Class ทั้งหมด 4 ประเภท</strong>
              </p>

              <!-- Component Class -->
              <p class="_pdl-8px _mgbt-8px _cl-accent">
                <strong>Components Class</strong> <code class="language-markup">bio-*</code> <code class="language-markup">-OPTION</code>
              </p>

              <p class="_pdl-16px _mgbt-8px">
                สำหรับใช้แสดงผล Components ต่างๆ เช่น Button, Breadcrumb หรือ Accordion เป็นต้น<br>

                Class จะใช้ Prefix <code class="language-markup">bio-</code> เช่น <code class="language-markup">bio-button</code>
                และใส่ Option ด้วย <code class="language-markup">-OPTION</code> เช่น <code class="language-markup">bio-button -positive</code><br>

              </p>
              <div class="_tal-ct _pdl-16px">
                <div class="_dp-f _fdrt-r _mgbt-8px">
                  <div class="bio-button _mgr-8px">bio-button</div>
                  <div class="bio-button -positive">bio-button -positive</div>
                </div>
              </div>

              <p class="_pdl-16px _mgbt-64px">
                ซึ่งรูปแบบการเขียนชื่อ class จะคล้ายกับ Switched ใน UNIX commandline เช่น <code class="language-markup">ls -a</code><br>
              </p>

              <!-- Layout Class -->
              <p class="_pdl-8px _mgbt-8px _cl-accent">
                <strong>Layout Class</strong> <code class="language-markup">lo-*</code> <code class="language-markup">-OPTION</code>
              </p>
              <p class="_pdl-16px _mgbt-64px">
                ใช้สำหรับจัดการ Layout การแสดงผลของ Contents หรือ Component ด้านใน <br>
                เราจะไม่ใช้ Components Class และ Layout Class ที่ Element เดียวกัน เพราะ Element แต่ละอัน ควรทำเพียงหน้าที่เดียวเท่านั้น คือจัดการ layout หรือ เป็น UI Component<br>
                Class จะใช้ Prefix <code class="language-markup">lo-</code> เช่น
                <code class="language-markup">lo-container</code>,
                <code class="language-markup">lo-xs-6</code>,
                <code class="language-markup">lo-md-7-5</code>
              </p>

              <!-- Utility Class -->
              <p class="_pdl-8px _mgbt-8px _cl-accent">
                <strong>Utility Class</strong> <code class="language-markup">u-*</code>
              </p>
              <p class="_pdl-16px _mgbt-16px">
                ใช้สำหรับอำนวยความสะดวกในการจัดการแสดงผลต่าง ใส่ได้ทั่วไปกับทุก Element หรือ Components<br>

                Class จะใช้ Prefix <code class="language-markup">u-</code> เช่น
                <code class="language-markup">u-rise</code>
              </p>
              <div class="_tal-ct _pdl-16px _mgbt-64px">
                <div class="_dp-f _fdrt-r _mgbt-8px">
                  <div class="bio-button _mgr-8px">bio-button</div>
                  <div class="bio-button u-rise">bio-button u-rise</div>
                </div>
              </div>

              <!-- Atomic Class -->
              <p class="_pdl-8px _mgbt-8px _cl-accent">
                <strong>Atomic Class</strong> <code class="language-markup">_*</code>
              </p>
              <p class="_pdl-16px _mgbt-16px">
                ใช้สำหรับกำหนด Atomic Style ใส่ได้ทั่วไปกับทุก Element หรือ Components<br>

                Class จะใช้ Prefix <code class="language-markup">_</code>
                ตามด้วย คู่ของ ตัวย่อ Style และ Value เช่น <code class="language-markup">border-radius: 8px</code>
                จะเป็น Atomic Class <code class="language-markup">_bdrd-8px</code>
              </p>
              <div class="_tal-ct _pdl-16px">
                <div class="_dp-f _fdrt-r _mgbt-8px">
                  <div class="bio-button _mgr-8px">bio-button</div>
                  <div class="bio-button _bdrd-8px">bio-button _bdrd-8px</div>
                </div>
              </div>
            </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'

  export default {
    name: 'HomeGettingStart',

    mounted () {
      Prism.highlightAll()
    }
  }
</script>

<style lang="scss" scoped>

  .background-gradient {
    background-image: linear-gradient(-270deg, #50AFE3 0%, #657EFA 100%);
  }

  #content {
    position: relative;
    z-index: 1;
  }

  #home-getting-start {
    position: relative;
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 400px;
      left: 0;
      top: 0;
      background-image: url(~@/assets/home/backslant-gray.svg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

</style>

