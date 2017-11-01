<template>
  <div class="_pdv-48px">

    <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
      <a href="#getting-start" class="bio-link -primary"><strong>#</strong></a> การใช้งาน
    </div>

    <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
      การใช้งาน Biomatic
    </div>
    <p class="_mgbt-8px _fs-5">
      Biomatic แบ่งการใช้งานเป็นดังต่อไปนี้ <br>
    </p>
    <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
      <li>• <a class="bio-link" href="#getting-start-atomic">ใช้งาน Atomic Class</a></li>
      <li>• <a class="bio-link" href="#getting-start-component">ใช้งาน Component Class</a></li>
      <li>• <a class="bio-link" href="#getting-start-layout">ใช้งาน Layout Class</a></li>
      <li>• <a class="bio-link" href="#getting-start-utility">ใช้งาน Utility Class</a></li>
    </ul>

    <!--
    *  Atomic Class
    **************************-->
    <div class="anchor" id="getting-start-atomic"></div>
    <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
      <a href="#getting-start-atomic" class="bio-link -primary"><strong>#</strong></a> การใช้งาน Atomic Class ✨✨
    </div>
    <p class="_mgbt-16px _fs-5">
      Atomic Class คือหัวใจหลักของ Biomatic เปรียบเสมือนกล่องเครื่องมือที่คุณใช้งานบ่อย เป็น Class ที่ใช้กำหนด Style เพียงอย่างใดอย่างหนึ่ง
    </p>
    <p class="_mgbt-64px _fs-5">
      คุณสามารถใช้ Atomic Class หลายๆ Class ประกอบกันเพื่อเป็นผลลัพธ์ที่คุณต้องการได้
      หรือใช้งานร่วมกับ Class อื่นๆ เพื่อปรับแต่งการแสดงผลให้เป็นไปตามที่คุณต้องการ 😲
    </p>

    <p class="_mgbt-64px _fs-5">
      Atomic Class ใช้ Prefix <code class="language-markup _cl-accent">_</code> ตามด้วยชื่อ Class
      ที่เป็นคู่ของ <strong>Name</strong> และ <strong>Value</strong> เช่น
      <code class="language-markup _cl-accent">_mg-8px</code>,
      <code class="language-markup _cl-accent">_pdt-16px</code>,
      <code class="language-markup _cl-accent">_w-100pct</code>
    </p>
    <p class="_mgbt-16px _fs-5">
      ปัญหาของ Atomic Framework โดยทั่วไปคือชื่อ Class นั้นหลายครั้งไม่มีรูปแบบชัดเจนและคาดเดาได้ยาก เนื่องจาก
      ความพยายามในการตั้งให้มีความสั้นเกินไป หรือยาวเกินไป 😅
    </p>
    <p class="_mgbt-4px _fs-5">
      สำหรับ Biomatic เราต้องการให้ผู้ใช้งานไม่จำเป็นต้องมีการจำชื่อ Class จึงกำรูปแบบการตั้งชื่อขึ้นมาคือ
      <u>ใช้ตัวย่อตามเสียงที่ออก</u> เช่น <br>
    </p>
    <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
      <li>• <strong>margin</strong> จะเป็น <code class="language-markup _cl-accent">_mg</code></li>
      <li>• <strong>margin-button</strong> จะเป็น <code class="language-markup _cl-accent">_mgbt</code></li>
      <li>• <strong>text-align</strong> จะเป็น <code class="language-markup _cl-accent">_tal</code></li>
      <li>• <strong>position</strong> จะเป็น <code class="language-markup _cl-accent">_pst</code></li>
    </ul>
    <p class="_mgbt-4px _fs-5">
      Value ก็ใช้กฏแบบเดียวกัน (ยกเว้นค่าคงที่ของ Biomatic เช่น Color Name)
    </p>
    <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
      <li>• <strong>16 pixel</strong> จะเป็น <code class="language-markup _cl-accent">16px</code></li>
      <li>• <strong>100 percentage</strong> จะเป็น <code class="language-markup _cl-accent">100pct</code></li>
      <li>• <strong>center</strong> จะเป็น <code class="language-markup _cl-accent">ct</code></li>
      <li>• <strong>inline-block</strong> จะเป็น <code class="language-markup _cl-accent">ilb</code></li>
      <li>• <strong>auto</strong> จะเป็น <code class="language-markup _cl-accent">at</code></li>
    </ul>

    <p class="_mgbt-4px _fs-5">
      ตัวอย่าง
    </p>
    <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
      <li>• <strong>padding-top: 64px</strong> จะเป็น <code class="language-markup _cl-accent">_pdt-64px</code></li>
      <li>• <strong>width: 100%</strong> จะเป็น <code class="language-markup _cl-accent">_w-100pct</code></li>
      <li>• <strong>cursor: pointer</strong> จะเป็น <code class="language-markup _cl-accent">_cs-pt</code></li>
      <li>• <strong>display: inline-block</strong> จะเป็น <code class="language-markup _cl-accent">_dp-ilb</code></li>
    </ul>
    <p class="_mgbt-48px _fs-5">
      จนถึงตรงนี้คุณน่าจะเข้าใจแนวคิด และรู้ว่า Atomic Class
      ที่คุณจะใช้ควรมีหน้าตาแบบไหนโดยไม่ต้องอ่าน Document
      (คุณลองเดาชื่อ Atomic Class ของ
      <code class="language-markup _cl-accent">float: left</code> หรือ <code class="language-markup _cl-accent">position: absolute</code> ดูสิ! 😄)
    </p>

    <p class="_mgbt-8px _fs-5">
      <strong>ตัวอย่างการใช้งาน Atomic Class</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;!--
text-align: center,
padding: 16px,
color: white (เป็นค่าคงที่ของ Biomatic),
background-color: primary (เป็นค่าคงที่ของ Biomatic),
border-radius: 4px,
font-size: 4 (เป็นค่าคงที่ของ Biomatic)
--&gt;
&lt;div class="_tal-ct _pd-16px _cl-accent _fs-4 _cl-white _bgcl-primary _bdrd-4px"&gt;
  Content
&lt;/div&gt;</code></pre>
    <div class="_mgbt-64px _pd-8px _bgcl-neutral-300">
      <div class="_tal-ct _pd-16px _cl-accent _fs-4 _cl-white _bgcl-primary _bdrd-4px">Content</div>
    </div>

    <p class="_fs-4 _fw-600 _lh-150pct _mgbt-16px">
      Responsive ใน Atomic Class
    </p>
    <p class="_mgbt-48px _fs-5">
      Atomic Class สามารถใช้งาน Breakpoint
      <code class="language-markup _cl-accent">-sm</code>
      <code class="language-markup _cl-accent">-md</code>
      <code class="language-markup _cl-accent">-lg</code>
      ที่ Class เพื่อให้แสดงผลที่ขนาดหน้าจอใดๆ ขึ้นไป ในการทำ Responsive Style ได้ 😄
    </p>

    <p class="_mgbt-8px _fs-5">
      <strong>ตัวอย่างการใช้งาน Breakoint ใน Atomic Class</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;!--
Container
text-align: center,
text-align: left when small size screen,
text-align: right when medium size screen,

Box
display: inine-block,
width: 32px,
height: 32px,
background-color: negative (เป็นค่าคงที่ของ Biomatic),
background-color: positive (เป็นค่าคงที่ของ Biomatic) when small size screen,
--&gt;
&lt;div class="_tal-ct _tal-l-sm _tal-r-md"&gt;
  &lt;div class="_dp-ilb _w-32px _h-32px _bgcl-negative _bgcl-positive-sm"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    <div class="_mgbt-64px _pd-8px _bgcl-neutral-300">
      <div class="_tal-ct _tal-l-sm _tal-r-md">
        <div class="_dp-ilb _w-32px _h-32px _bgcl-negative _bgcl-positive-sm"></div>
      </div>
    </div>

    <p class="_fs-4 _fw-600 _lh-150pct _mgbt-16px">
      Hover ใน Atomic Class
    </p>
    <p class="_mgbt-48px _fs-5">
      Atomic Class ที่เกี่ยวกับ Color ได้แก่ Color, Background Color และ Border Color จะสามารถใส่
      <code class="language-markup _cl-accent">-hover</code>
      ที่ Class เพื่อให้แสดงผลที่ Class เมื่อ Hover State ได้ 😄
    </p>

    <p class="_mgbt-8px _fs-5">
      <strong>ตัวอย่างการใช้งาน Hover ใน Atomic Class</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="_h-32px _bgcl-positive _bgcl-negative-hover _cl-white _cl-black-hover"&gt;
  &lt;strong&gt;Hello&lt;/strong&gt;
&lt;/div&gt;</code></pre>
    <div class="_mgbt-128px _pd-8px _bgcl-neutral-300">
      <div class="_h-32px _bgcl-positive _bgcl-negative-hover _cl-white _cl-black-hover"><strong>Hello</strong></div>
    </div>

    <!--
    *  2 Component
    **************************-->
    <div class="anchor" id="getting-start-component"></div>
    <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
      <a href="#getting-start-component" class="bio-link -primary"><strong>#</strong></a> ใช้งาน Component Class ✨✨
    </div>
    <p class="_mgbt-16px _fs-5">
      <strong>Component Class</strong> ใช้เพื่อแสดงผล Elements พื้นฐาน เช่น
      <router-link :to="{ name: 'ComponentButton'}" class="bio-link">Button</router-link>,
      <router-link :to="{ name: 'ComponentLink'}" class="bio-link">Link</router-link>,
      <router-link :to="{ name: 'ComponentCard'}" class="bio-link">Card</router-link> หรือ
      <router-link :to="{ name: 'ComponentForm'}" class="bio-link">Form</router-link>
    </p>

    <p class="_mgbt-64px _fs-5">
      Component Class ใช้ Prefix <code class="language-markup _cl-accent">bio-</code> ตามด้วย Value เป็นชื่อ Component เช่น
      <code class="language-markup _cl-accent">bio-button</code>,
      <code class="language-markup _cl-accent">bio-link</code> หรือ
      <code class="language-markup _cl-accent">bio-accordion</code> เป็นต้น
    </p>
    <p class="_mgbt-16px _fs-5">
      Component Class สามารถใช้ Options เพื่อเปลี่ยนรูปแบบการแสดงผลของ Style, Color หรือ State ได้
    </p>
    <p class="_mgbt-48px _fs-5">
      Option Class จะใช้ Prefix <code class="language-markup _cl-accent">-</code> ตามด้วยชื่อ Option เช่น
      <code class="language-markup _cl-accent">-disabled</code>,
      <code class="language-markup _cl-accent">-fancy</code> หรือ
      <code class="language-markup _cl-accent">-loading</code> เป็นต้น 😲
    </p>
    <p class="_mgbt-8px _fs-5">
      <strong>ตัวอย่างการใช้งาน bio-button รูปแบบต่างๆ</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="bio-button"&gt;&lt;/div&gt;
&lt;div class="bio-button -positive"&gt;&lt;/div&gt;
&lt;div class="bio-button -negative"&gt;&lt;/div&gt;
&lt;div class="bio-button -negative -outline"&gt;&lt;/div&gt;
&lt;div class="bio-button -loading"&gt;&lt;/div&gt;
&lt;div class="bio-button -disabled"&gt;&lt;/div&gt;
&lt;div class="bio-button -negative -disabled -loading"&gt;&lt;/div&gt;</code></pre>
    <div class="_mgbt-48px">
      <div class="bio-button _dp-ilb _mgbt-4px">bio-button</div>
      <div class="bio-button -positive _dp-ilb _mgbt-4px">bio-button -positive</div>
      <div class="bio-button -negative _dp-ilb _mgbt-4px">bio-button -negative</div>
      <div class="bio-button -negative -outline _dp-ilb _mgbt-4px">bio-button -negative -outline</div>
      <div class="bio-button -loading _dp-ilb _mgbt-4px">bio-button -loading</div>
      <div class="bio-button -disabled _dp-ilb _mgbt-4px">bio-button -disabled</div>
      <div class="bio-button -negative -disabled -loading _dp-ilb _mgbt-4px">bio-button -negative -disabled -loading</div>
    </div>
    <p class="_mgbt-32px _fs-5">
      จะสังเกตว่ารูปแบบการเขียนลักษณะนี้ จะหมือนกับ Switched ใน UNIX commandline เช่น <code class="language-markup _cl-accent">ls -a</code> เป็นต้น 🤔
    </p>
    <div class="bio-message -info _fs-6 _mgbt-128px">
      <p>
        <strong>คำแนะนำ</strong> – คุณ<u>ไม่</u>ควรใส่ Component Class มากกว่าหนึ่ง Class
        ที่ Element เดียวกัน เพราะ Element แต่ละอันควรทำหน้าที่เพียงอย่างเดียวเท่านั้น
      </p>
    </div>


    <!--
    *  3 Layout
    **************************-->
    <div class="anchor" id="getting-start-layout"></div>
    <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
      <a href="#getting-start-layout" class="bio-link -primary"><strong>#</strong></a> การใช้งาน Layout Class ✨✨
    </div>
    <p class="_mgbt-16px _fs-5">
      Responsive Grid Layout เป็นเทคนิคพื้นฐานที่ใช้จัดการ Layout สำหรับหลายขนาดหน้าจอ
    </p>
    <p class="_mgbt-16px _fs-5">
      Biomatic จะมีการใช้งาน Responsive Grid ที่แตกต่างกับ Framework อื่นๆ
      คือ เราจะกำหนด Layout ที่ Container เพียงอย่างเดียวเท่านั้น 🤔
    </p>
    <p class="_mgbt-16px _fs-5">
      สาเหตุที่เรากำหนด Layout ที่ Container ก็เพราะว่าเราจะลด Element ด้านในที่ไม่จำเป็นออกไป
      ให้ DOM มีความซับซ้อนน้อยที่สุด และเพื่อแยก Element ที่ทำหน้าที่เป็น Layout และ Component อย่างชัดเจน
    </p>
    <p class="_mgbt-48px _fs-5">
      Layout ที่ซับซ้อนมากๆ ถ้าใช้การกำหนด Layout แบบทั่วไปคุณจะพบว่า DOM
      จะมีระดับชั้นของ Nested <code class="language-markup _cl-accent">&lt;div&gt;</code>
      ที่ใช้เพียงเพื่อสร้าง Layout ที่ลึกมาก หรือที่เรียกว่า "divitis" 😱
    </p>
    <p class="_mgbt-8px _fs-5">
      <strong>ตัวอย่างของ "Divitis"</strong> 🙅🙅🙅
    </p>
    <pre class="_mgbt-48px"><code class="language-markup">&lt;div class='image'&gt;
  &lt;div class='shadow'&gt;
    &lt;div class='bottom-shadow'&gt;
      &lt;div class='content'&gt;
        &lt;img src="..." alt="" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="actions"&gt;
    &lt;div class="action item"&gt;
      &lt;div class="button-container"&gt;
        &lt;div class="button"&gt;
          Click Me
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    <div class="bio-message -info _mgbt-48px">
      <p class="_fs-6">
        <strong>คำแนะนำ</strong> – Biomatic แนะนำให้คุณใช้ <a class="bio-link -fancy" href="http://learncssgrid.com/" target="_blank">CSS Grid</a> สำหรับ Layout ที่มีซับซ้อน 👍 <br>
        (ปัจจุบัน <a class="bio-link -fancy" href="https://caniuse.com/#feat=css-grid" target="_blank">Support Modern Browser</a> แล้ว)
      </p>
    </div>

    <p class="_mgbt-16px _fs-5">
      Layout Class ใช้ Prefix <code class="language-markup _cl-accent">lo-</code>
      ตามด้วย Value เป็นขนาดของ Grid ที่ต้องการ
    </p>
    <p class="_mgbt-16px _fs-5">
      Biomatic ใช้ Grid 12 เป็น Grid Systems ซึ่งสามารถกำหนด Value เป็นค่าที่หาร 12 ลงตัว คือ
      <code class="language-markup _cl-accent">lo-1</code>,
      <code class="language-markup _cl-accent">lo-2</code>,
      <code class="language-markup _cl-accent">lo-3</code>,
      <code class="language-markup _cl-accent">lo-4</code>,
      <code class="language-markup _cl-accent">lo-6</code> และ
      <code class="language-markup _cl-accent">lo-12</code>
    </p>
    <p class="_mgbt-32px _fs-5">
      หรือ คู่ของผลรวม ที่รวมกันได้ 12 เช่น
      <code class="language-markup _cl-accent">lo-4-8</code> หรือ
      <code class="language-markup _cl-accent">lo-9-3</code>
    </p>
    <p class="_mgbt-48px _fs-5">
      นอกจากนี้ Layout Class ยังสามารถกำหนด Option เพื่อกำหนดรายละเอียดต่างๆ เช่น Grid Gutter ได้อีกด้วย 😍
    </p>
    <p class="_mgbt-8px _fs-5">
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
    <div class="_mgbt-48px _pd-8px _bgcl-neutral-300">
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

    <p class="_mgbt-32px _fs-5">
      Layout Class สามารถใส่ Breakpoint
      <code class="language-markup _cl-accent">-sm</code>
      <code class="language-markup _cl-accent">-md</code>
      <code class="language-markup _cl-accent">-lg</code>
      ที่ Class เพื่อแสดงผลที่ขนาดหน้าจอใดๆ เพื่อใช้ในการทำ Responsive Grid
    </p>
    <div class="bio-message -info _fs-6 _mgbt-48px">
      <p>
        <strong>คำแนะนำ</strong> – Biomatic ไม่มี Breakpoint <code class="language-markup _cl-accent">-xs</code>
        เพราะเรายึดหลักแนวคิดของ Progressive Enhancement หรือ Mobile First นั่นคือเรากำหนด Interface ของ
        Mobile เป็นพื้นฐานก่อน และตามด้วย Interface ที่ขนาดหน้าจอที่ใหญ่ขึ้น 😤
      </p>
    </div>

    <p class="_mgbt-8px _fs-5">
      <strong>ตัวอย่างการใช้งาน Breakpoint ใน Layout Class</strong>
    </p>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="lo-12 lo-9-3-sm lo-3-lg -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>
    <div class="_mgbt-128px _pd-8px _bgcl-neutral-300">
      <div class="_mgbt-4px">lo-12 lo-9-3-sm lo-3-lg</div>
      <div class="lo-12 lo-9-3-sm lo-3-lg -gap-8px">
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
        <div class="_bgcl-neutral _bdrd-2px _tal-ct _pd-4px">item</div>
      </div>
    </div>

    <!--
    *  4 Utility
    **************************-->
    <div class="anchor" id="getting-start-utility"></div>
    <div class="_fs-4 _fw-600 _lh-150pct _mgbt-16px">
      <a href="#getting-start-utility" class="bio-link -primary"><strong>#</strong></a> การใช้งาน Utility Class ✨✨
    </div>
    <p class="_mgbt-16px _fs-5">
      Utility Class ใช้สำหรับกำหนดลักษณะต่างๆ ที่ Biomatic เตรียมไว้ เช่น Animation, Hover behavior
      โดยสามารถร่วมกับ Class อื่นๆ ได้ทั่วไป
    </p>
    <p class="_mgbt-16px _fs-5">
      ใช้ Prefix <code class="language-markup _cl-accent">u-</code> แล้วตามด้วย Value เป็นชื่อ Utility ของ Biomatic
      เช่น <code class="language-markup _cl-accent">u-animation-pulse</code>, <code class="language-markup _cl-accent">u-hover-rise</code>
    </p>
    <div class="_mgbt-48px _pd-8px _bgcl-neutral-300">
      <div class="bio-button _mgbt-24px u-animation-pulse">bio-button u-animation-pulse</div>
      <div class="bio-button u-hover-rise">bio-button u-hover-rise</div>
    </div>

    <hr class="_opct-30 _mgbt-32px">

    <div class="_dp-f _jtfct-spbtw">
      <div>
        <h5 class="_mgbt-16px">ก่อนหน้า</h5>
        <router-link :to="{ name: 'Installation' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
          <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;วิธีติดตั้ง
        </router-link>
      </div>
      <div>
        <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
        <router-link :to="{ name: 'AtomicBorder' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
          Border &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
        </router-link>
      </div>
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


