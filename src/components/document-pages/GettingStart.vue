<template>
  <div class="_pdv-48px">

    <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
      <a href="#getting-start" class="bio-link -primary"><strong>#</strong></a> วิธีใช้งาน
    </div>

    <div class="_fs-4 _fw-600 _lh-150pct _mgbt-16px">
      การใช้งาน Biomatic
    </div>
    <p class="_mgbt-64px _fs-6">
      คุณสามารถใช้งาน Biomatic ได้หลากหลายรูปแบบ <br>
      <a class="bio-link -fancy" href="#getting-start-component">ใช้งาน Component Class</a> <br>
      <a class="bio-link -fancy" href="#getting-start-layout">ใช้งาน Layout Class</a> <br>
      <a class="bio-link -fancy" href="#getting-start-atomic">ใช้งาน Atomic Class</a> <br>
    </p>

    <!--
    *  1
    **************************-->
    <div class="anchor" id="getting-start-component"></div>
    <div class="_fs-4 _fw-600 _lh-150pct _mgbt-16px">
      1.) ใช้งาน Component Class 🙂
    </div>
    <p class="_mgbt-16px _fs-6">
      Component Class จะเป็น Class พื้นฐานที่คุณใช้บ่อย เพื่อช่วยในการแสดงผล UI Elements พื้นฐานให้สวยงาม เช่น
      <router-link to="/" class="bio-link">Button</router-link>,
      <router-link to="/" class="bio-link">Link</router-link>,
      <router-link to="/" class="bio-link">Card</router-link> หรือ
      <router-link to="/" class="bio-link">Form</router-link>
    </p>
    <p class="_mgbt-16px _fs-6">
      ชื่อของ Class จะใช้ Prefix <code class="language-markup _cl-accent">bio-</code> ตามด้วย Value เป็นชื่อ Component เช่น
      <code class="language-markup _cl-accent">bio-button</code>,
      <code class="language-markup _cl-accent">bio-link</code>,
      <code class="language-markup _cl-accent">bio-accordion</code> เป็นต้น
    </p>
    <p class="_mgbt-32px _fs-6">
      นอกจากนี้ คุณสามารถใส่ Options ที่เราเตรียมไว้ เพื่อเปลี่ยนรูปแบบการแสดงผล ในเรื่องของ Style, Color หรือ State ได้
      โดย Option Class จะใช้ Prefix <code class="language-markup _cl-accent">-</code> ตามด้วยชื่อ Option เช่น
      <code class="language-markup _cl-accent">bio-button -disabled</code>,
      <code class="language-markup _cl-accent">bio-link -fancy</code>,
      <code class="language-markup _cl-accent">bio-button -loading -disabled</code> เป็นต้น 😲
    </p>
    <p class="_mgbt-16px _fs-6">
      <strong>ตัวอย่างการใช้งาน bio-button รูปแบบต่างๆ</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="bio-button"&gt;&lt;/div&gt;
&lt;div class="bio-button -positive"&gt;&lt;/div&gt;
&lt;div class="bio-button -negative"&gt;&lt;/div&gt;
&lt;div class="bio-button -negative -outline"&gt;&lt;/div&gt;
&lt;div class="bio-button -loading"&gt;&lt;/div&gt;
&lt;div class="bio-button -disabled"&gt;&lt;/div&gt;
&lt;div class="bio-button -negative -disabled -loading"&gt;&lt;/div&gt;</code></pre>
    <div class="_mgbt-32px">
      <div class="bio-button _dp-ilb _mgbt-4px">bio-button</div>
      <div class="bio-button -positive _dp-ilb _mgbt-4px">bio-button -positive</div>
      <div class="bio-button -negative _dp-ilb _mgbt-4px">bio-button -negative</div>
      <div class="bio-button -negative -outline _dp-ilb _mgbt-4px">bio-button -negative -outline</div>
      <div class="bio-button -loading _dp-ilb _mgbt-4px">bio-button -loading</div>
      <div class="bio-button -disabled _dp-ilb _mgbt-4px">bio-button -disabled</div>
      <div class="bio-button -negative -disabled -loading _dp-ilb _mgbt-4px">bio-button -negative -disabled -loading</div>
    </div>
    <p class="_mgbt-64px _fs-6">
      หากสังเกตุจะพบว่ารูปแบบลักษณะนี้ จะหมือนกับ Switched ใน UNIX commandline เช่น <code class="language-markup _cl-accent">ls -a</code> เป็นต้น 🤔
    </p>

    <!--
    *  2
    **************************-->
    <div class="anchor" id="getting-start-layout"></div>
    <div class="_fs-4 _fw-600 _lh-150pct _mgbt-16px">
      2.) การใช้งาน Layout Class 🙂
    </div>
    <p class="_mgbt-32px _fs-6">
      Responsive Grid Layout กลายเป็นเทคนิคพื้นฐานที่ใช้ในการจัดการ Layout หลายขนาดหน้าจอในปัจจุบัน
      ซึ่งรูปแบบการใช้งาน Responsive Grid ของ Biomatic นั้นจะแตกต่างกับ Framework อื่นๆ ตรงที่เราจะไม่ใช้งาน
      Layout Class ที่ Item แต่จะกำหนดที่ Container เท่านั้น
    </p>
    <p class="_mgbt-32px _fs-6">
      สาเหตุที่เรากำหนดรูปแบบการจัดวางไว้ที่ Container นั้นก็เพราะว่าเราจะลด Element ด้านในที่ไม่จำเป็นออกไป
      เพื่อให้ DOM มีความซับซ้อนน้อยที่สุด และแยกหน้าที่การทำงานของ Layout Class และ Component Class อย่างชัดเจน
    </p>
    <p class="_mgbt-32px _fs-6">
      สำหรับ Layout ที่ซับซ้อนมากๆ ถ้าคุณใช้การกำหนด Layout ที่ Item แบบทั่วไปคุณจะพบว่า DOM
      ของคุณจะมีระดับชั้นการซ้อนกันของ <code class="language-markup _cl-accent">&lt;div&gt;</code>
      ที่ใช้เพียงเพื่อสร้าง Layout ที่ลึกมาก 😱 <br><br>
      Biomatic แนะนำให้คุณใช้ <a class="bio-link -fancy" href="http://learncssgrid.com/" target="_blank">CSS Grid</a> สำหรับ Layout ที่มีซับซ้อน (ปัจจุบัน <a class="bio-link -fancy" href="https://caniuse.com/#feat=css-grid" target="_blank">Support Modern Browser</a> ครบหมดแล้ว) 👍
    </p>
    <p class="_mgbt-32px _fs-6">
      Layout Class จะใช้ Prefix <code class="language-markup _cl-accent">lo-</code> ตามด้วย Value ขนาดที่ต้องการ
      Biomatic จะใช้ Grid 12 เป็น Grid System ซึ่งสามารถกำหนด Value เป็นค่าที่หาร 12 ลงตัว คือ
      <code class="language-markup _cl-accent">1</code>,
      <code class="language-markup _cl-accent">2</code>,
      <code class="language-markup _cl-accent">3</code>,
      <code class="language-markup _cl-accent">4</code>,
      <code class="language-markup _cl-accent">6</code> และ
      <code class="language-markup _cl-accent">12</code> หรือ
      คู่ของผลรวม ที่รวมกันได้ 12 เช่น
      <code class="language-markup _cl-accent">4-8</code> หรือ
      <code class="language-markup _cl-accent">9-3</code>
    </p>
    <p class="_mgbt-32px _fs-6">
      Layout Class ยังสามารถกำหนด Option เพื่อกำหนดรายละเอียดต่างๆ เช่น Grid Gutter ได้อีกด้วย 😍
    </p>
    <p class="_mgbt-16px _fs-6">
      <strong>ตัวอย่างการใช้งาน Layout Class</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="lo-4 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;div class="lo-8-4 -gapv-16px -gaph-4px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>
    <div class="_mgbt-64px _pd-8px _bgcl-neutral-300">
      <div class="_mgbt-4px">.lo-4</div>
      <div class="lo-4 -gap-8px">
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
      </div>
      <br>
      <div class="_mgbt-4px">.lo-8-4</div>
      <div class="lo-8-4 -gapv-16px -gaph-4px">
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
      </div>
    </div>

    <p class="_mgbt-32px _fs-6">
      Layout Class สามารถใส่ Suffix เพื่อกำหนด Breakpoint Modifier
      <code class="language-markup _cl-accent">-sm</code>
      <code class="language-markup _cl-accent">-md</code>
      <code class="language-markup _cl-accent">-lg</code>
      เพื่อให้แสดงผล Class ที่ขนาดหน้าจอใดๆ ขึ้นไปได้ เพื่อใช้ในการทำ Responsive Design
    </p>
    <p class="_mgbt-32px _fs-6">
      Biomatic จะไม่ใช้ Breakpoint <code class="language-markup _cl-accent">-xs</code>
      เพราะยึดหลักการของ Progressive Enhancement หรือ Mobile First นั่นคือเราจะกำหนด Interface ของ
      Mobile เป็นพื้นฐานก่อน และค่อยตามด้วยการกำหนด UI ที่ขนาด Breakpoint ต่างๆ ทีหลัง 😤 &nbsp;
      <a class="bio-link -fancy" href="#">อ่านเพิ่มเติมเกี่ยวกับ Breakpoint</a>
    </p>

    <p class="_mgbt-16px _fs-6">
      <strong>ตัวอย่างการใช้งาน Breakpoint ขนาดต่างๆ ร่วมกับ Layout Class</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="lo-6 lo-9-3-sm lo-3-lg -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>
    <div class="_mgbt-64px _pd-8px _bgcl-neutral-300">
      <div class="_mgbt-4px">.lo-6 .lo-9-3-sm .lo-3-lg</div>
      <div class="lo-6 lo-9-3-sm lo-3-lg -gap-8px">
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
      </div>
    </div>

    <!--
    *  3
    **************************-->
    <div class="anchor" id="getting-start-atomic"></div>
    <div class="_fs-4 _fw-600 _lh-150pct _mgbt-16px">
      3.) การใช้งาน Layout Class
    </div>
    <p class="_mgbt-32px _fs-6">
      WIP...
    </p>

    <hr class="_opct-30 _mgbt-32px">

    <div class="_dp-f _jtfct-spbtw">
      <div>
        <h6 class="_mgbt-8px">หัวข้อก่อนหน้า</h6>
        <router-link :to="{ name: 'Installation' }" class="bio-link -fancy _pd-8px _bdrd-2px">
          <i class="fa fa-long-arrow-left _fs-6"></i>&nbsp;&nbsp;วิธีติดตั้ง
        </router-link>
      </div>
      <!-- <div>
        <h6 class="_mgbt-8px">หัวข้อต่อไป</h6>
        <router-link :to="{ name: 'GettingStart' }" class="bio-link -fancy _pd-8px _bdrd-2px">
          เริ่มต้นใช้งาน &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-6"></i>
        </router-link>
      </div> -->
    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'GettingStart',

  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
  .anchor {
    position: relative;
    top: -86px;
  }
</style>


