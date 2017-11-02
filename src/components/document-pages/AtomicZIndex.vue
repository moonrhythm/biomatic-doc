<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-z-index" class="bio-link -primary"><strong>#</strong></a> Z-Index
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ค่าของ Z-Index เพื่อกำหนดลำดับชั้นการจัดวางในแนวแกน Z-Axis ประกอบไปด้วย
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• Z-Index</li>
      </ul>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_zid-*</code> สำหรับ <code class="_cl-accent">z-index</code></li>
      </ul>

      <p class="_mgbt-4px _fs-5">
        <strong>Value</strong>
      </p>
      <table class="bio-table _mgbt-32px">
        <thead>
          <tr>
            <th class="_w-1px">Class Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">_zid-*</code>
              </p>
            </td>
            <td>
              <p class="_mgbt-32px">
                <strong>Number Value: </strong> <br>
                <code class="_cl-accent">0</code>
                <code class="_cl-accent">1</code>
                <code class="_cl-accent">-1</code>
              </p>
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">at</code> สำหรับ "auto"
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="bio-message -primary _fs-6 _mgbt-32px">
        <p>
          <strong>คำแนะนำ</strong> – คุณอาจจะแปลกใจว่าทำไมถึง Value จึงมี
          <code class="_cl-accent">0</code>,
          <code class="_cl-accent">1</code>,
          <code class="_cl-accent">-1</code> และ
          <code class="_cl-accent">at</code> แต่นี้เป็นค่า z-index ที่เพียงพอต่อการใช้งานทุกอย่างแล้ว
          ถ้าคุณจำเป็นต้องใช้ค่าแปลกๆ เช่น 5, 100, 9999, 2147483647 <small>(32-bit Integer)</small> มันจะต้องมีอะไรผิดพลาดแน่ๆ 😅
        </p>
      </div>
      <p class="_mgbt-4px _fs-5">
        <strong>Responsive:</strong> <span class="_cl-positive"><strong>Yes</strong></span>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">*-sm</code></li>
        <li>• <code class="_cl-accent">*-md</code></li>
        <li>• <code class="_cl-accent">*-lg</code></li>
      </ul>
      <p class="_mgbt-64px _fs-5">
        <strong>Hover:</strong> <span class="_cl-negative"><strong>No</strong></span>
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน z-index</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div&gt;1&lt;/div&gt;
&lt;div class="_pst-asl"&gt;2&lt;/div&gt;
&lt;div class="_pst-asl"&gt;3&lt;/div&gt;
&lt;div class="_pst-asl _zid--1"&gt;5&lt;/div&gt;
&lt;div class="_pst-asl _zid--1"&gt;4&lt;/div&gt;</code></pre>

      <div class="u-panel _pst-rlt _mgbt-64px">
        <div class="_w-64px _h-64px _bgcl-neutral-300">1</div>
        <div class="_pst-asl _w-64px _h-64px _bgcl-neutral-400 _t-24px _l-32px _tal-ct">2</div>
        <div class="_pst-asl _w-64px _h-64px _bgcl-neutral-500 _t-32px _tal-ct" style="left: 80px">3</div>
        <div class="_pst-asl _w-64px _h-64px _bgcl-neutral-700 _t-16px _zid--1 _tal-r" style="left: 160px">5</div>
        <div class="_pst-asl _w-64px _h-64px _bgcl-neutral-600 _t-24px _zid--1 _tal-ct" style="left: 128px">4</div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicTypography' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Typography
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'ComponentAccordion' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Accordion &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicZIndex',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
