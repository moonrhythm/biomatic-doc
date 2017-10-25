<template>
  <div>

    <div class="_mgbt-16px _fs-5 _tal-ct _tal-l-sm">
      <strong>Biomatic เบื้องต้น</strong>
    </div>

    <div class="_bgcl-neutral-300 _bdrd-2px _pdh-16px _pdv-16px">

      <p class="_mgbt-16px _mgt-8px">
        <strong>Biomatic ประกอบไปด้วย Class ทั้งหมด 4 ประเภท</strong>
      </p>

      <!-- Component Class -->
      <p class="_mgbt-8px _cl-accent _fs-5">
        <strong>Components Class</strong> <code class="language-markup">bio-*</code>
      </p>

      <p class="_pdl-8px _mgbt-8px">
        • สำหรับใช้แสดงผลรูปแบบต่างๆ เช่น Button, Breadcrumb หรือ Accordion เป็นต้น
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • ใช้ Prefix <code class="language-markup">bio-</code> เช่น <code class="language-markup">bio-button</code>, <code class="language-markup">bio-link</code>
      </p>
      <div class="_tal-ct _pdl-24px-sm _mgbt-32px">
        <div class="_dp-f _fdrt-cl _fdrt-r-sm _mgbt-8px">
          <div class="bio-button _mgr-8px-sm _mgbt-8px">bio-button</div>
          <div class="bio-link _als-ct">bio-link</div>
        </div>
      </div>
      <p class="_pdl-8px _mgbt-8px">
        • ใส่ Option ด้วย <code class="language-markup">-OPTION</code> เช่น <code class="language-markup">bio-button -loading</code>, <code class="language-markup">bio-button -positive -outline</code>
        ซึ่งรูปแบบการลักษณะนี้ จะหมือนกับ Switched ใน UNIX commandline เช่น <code class="language-markup">ls -a</code> เป็นต้น
      </p>
      <div class="_tal-ct _pdl-24px-sm _mgbt-64px">
        <div class="_dp-f _fdrt-cl _fdrt-r-sm _alit-fst-sm _mgbt-8px">
          <div class="bio-button -loading _mgr-8px-sm _mgbt-8px">bio-button -loading</div>
          <div class="bio-button -positive -outline">bio-button -positive -outline</div>
        </div>
      </div>

      <!-- Layout Class -->
      <p class="_pdl-8px _mgbt-8px _cl-accent _fs-5">
        <strong>Layout Class</strong> <code class="language-markup">lo-*</code>
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • ใช้เป็น Container เพื่อการจัดวาง และการแสดงผลของ Contents หรือ Component ด้านใน
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • Responsive grid ใช้ Grid 12
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • Breakpoints มีสามขนาดใ ช้ Suffix เป็น <code class="language-markup">-sm</code>, <code class="language-markup">-md</code> และ <code class="language-markup">-lg</code>
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • ใช้ Prefix <code class="language-markup">lo-</code> เช่น <code class="language-markup">lo-container</code>, <code class="language-markup">lo-4</code>, <code class="language-markup">lo-8-2</code> <code class="language-markup">lo-7-5-sm</code>
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • ใส่ Option ด้วย <code class="language-markup">-OPTION</code> เช่น เพื่อตั้งค่าการแสดงผลได้
      </p>
      <div class="_pdl-24px-sm _mgbt-32px">
        <pre>
          <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="lo-4 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </pre>
        <div class="lo-4 -gap-8px">
          <div class="_bgcl-neutral-500 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-500 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-500 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>
      </div>
      <div class="_pdl-24px-sm _mgbt-64px">
        <pre>
          <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="lo-12 lo-8-4-sm -gapv-12px -gaph-2px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </pre>
        <div class="lo-12 lo-8-4-sm -gapv-12px -gaph-2px">
          <div class="_bgcl-neutral-500 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-500 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-500 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>
      </div>

      <!-- Utility Class -->
      <p class="_pdl-8px _mgbt-8px _cl-accent _fs-5">
        <strong>Utility Class</strong> <code class="language-markup">u-*</code>
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • ใช้ช่วยเหลือการแสดงผลต่าง ๆ เช่น การใส่ Drop Shadow หรือ Animation
      </p>
      <p class="_pdl-8px _mgbt-8px">
        • ใช้ Prefix <code class="language-markup">u-</code> เช่น <code class="language-markup">u-animation-*</code>, <code class="language-markup">u-rise</code>
      </p>
      <div class="_tal-ct _pdl-16px _mgbt-64px">
        <div class="_dp-f _fdrt-cl _fdrt-r-sm _alit-fst-sm _mgbt-8px">
          <div class="bio-button _mgr-8px _mgbt-24px _mgbt-0px-sm u-animation-pulse">bio-button u-animation-pulse</div>
          <div class="bio-button u-hover-rise">bio-button u-hover-rise</div>
        </div>
      </div>

      <!-- Atomic Class -->
      <p class="_pdl-8px _mgbt-8px _cl-accent">
        <strong>Atomic Class</strong> <code class="language-markup">_*</code>
      </p>
      <p class="_pdl-16px _mgbt-8px">
        • ใช้กำหนดค่า Style ต่างๆ เพื่อสร้างการแสดงผลที่ต้องการ
      </p>
      <p class="_pdl-16px _mgbt-8px">
        • ใช้ Prefix <code class="language-markup">_*</code> และชื่อเป็นคู่ของ KEY-VALUE เช่น <code class="language-markup">_mgl-8px</code>
      </p>
      <p class="_pdl-16px _mgbt-8px">
        • KEY จะเป็นตัวย่อตามพยางเสียงของชื่อ Style และ VALUE จะเป็นตัวย่อตามพยางเสียงของค่าของมัน <br>
        <code class="language-markup">margin-left: 8px</code> เป็น <code class="language-markup">_mgr-8px</code> <br>
        <code class="language-markup">padding-bottom: auto</code> เป็น <code class="language-markup">_pdbt-at</code> <br>
        <code class="language-markup">width: 100%</code> เป็น <code class="language-markup">_w-100pct</code> <br>
        <code class="language-markup">text-align: center</code> เป็น <code class="language-markup">_tal-ct</code>
      </p>
      <p class="_pdl-16px _mgbt-8px">
        • สามารถใส่ Suffix ด่วยชื่อ Breakpoint <code class="language-markup">-sm</code>, <code class="language-markup">-md</code> และ <code class="language-markup">-lg</code>
        เพื่อกำหนดการแสดงผลแบบ Responsive ได้ เช่น จอขนาดเล็กมี Margin 8px แต่จอขนาดใหญ่มี Margin 32px จะเป็น <code class="language-markup">_mg-8px _mg-32px-lg</code>
      </p>
      <div class="_pdl-24px-sm _mgbt-8px">
        <pre>
          <pre class="_mgbt-16px"><code class="language-markup">&lt;!--
Text-align Left,
Text-align Center on SMALL size or upper,
Text-align Right on MEDIUM size or upper,
Height of 32pixel,
Positive background color,
Warning background color on SMALL size or upper,
--&gt;
&lt;div class="_tal-l _tal-ct-sm _tal-r-md _h-32px _bgcl-positive _bgcl-warning-md"&gt;
  item
&lt;/div&gt;
</code></pre>
        </pre>
        <div class="lo-12">
          <div class="_tal-l _tal-ct-sm _tal-r-md _h-32px _bgcl-positive _bgcl-warning-sm">
            item
          </div>
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
