<template>
  <div>
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
</template>

<script>
  export default {
    name: 'HomeGettingStartBasic'
  }
</script>
