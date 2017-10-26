<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-opacity" class="bio-link -primary"><strong>#</strong></a> Opacity
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Opacity ประกอบด้วย
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• Opacity</li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">opct</code> สำหรับ <code class="_cl-accent">opacity</code></li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Value</strong>
      </p>
      <table class="bio-table _mgbt-32px">
        <thead>
          <tr>
            <th class="_w-1px">Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">opct</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">100</code> สำหรับ "1" <br>
                <code class="_cl-accent">90</code> สำหรับ "0.9" <br>
                <code class="_cl-accent">80</code> สำหรับ "0.8" <br>
                <code class="_cl-accent">70</code> สำหรับ "0.7" <br>
                <code class="_cl-accent">60</code> สำหรับ "0.6" <br>
                <code class="_cl-accent">50</code> สำหรับ "0.5" <br>
                <code class="_cl-accent">40</code> สำหรับ "0.4" <br>
                <code class="_cl-accent">30</code> สำหรับ "0.3" <br>
                <code class="_cl-accent">20</code> สำหรับ "0.2" <br>
                <code class="_cl-accent">10</code> สำหรับ "0.1" <br>
                <code class="_cl-accent">0</code> สำหรับ "0"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Display</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Opacity --&gt;
&lt;div class="_bgcl-primary-900 _opct-100"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-90"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-80"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-60"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-50"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-40"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-30"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-20"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-10"&gt;&lt;/div&gt;
&lt;div class="_bgcl-primary-900 _opct-0"&gt;&lt;/div></code></pre>

      <div class="u-panel _mgbt-64px ghosty">
        <div class="_h-64px _bgcl-primary-900 _opct-100"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-90"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-80"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-60"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-50"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-40"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-30"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-20"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-10"></div>
        <div class="_h-64px _bgcl-primary-900 _opct-0"></div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicMargin' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Margin
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicPadding' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Padding &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicOpacity',

  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
  .ghosty {
    background-image: url('data:image/svg+xml;utf8,<svg id="Layer_1" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="XMLID_1347_"><path d="   M2.5,23.5c1.19,0,1.19-1,2.38-1s1.19,1,2.38,1c1.188,0,1.188-1,2.376-1s1.188,1,2.375,1s1.187-1,2.375-1c1.186,0,1.186,1,2.372,1   c1.184,0,1.184-1,2.369-1c1.187,0,1.187,1,2.374,1l-0.638-4.467c-0.241-1.686-0.362-3.388-0.362-5.091v-4.65   c0-4.527-3.416-8.48-7.934-8.773C7.615,0.198,3.5,4.119,3.5,9.001v4.942c0,1.703-0.121,3.405-0.362,5.091L2.5,23.5z" id="XMLID_1348_" style="fill:none;stroke:%23303C42;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/><ellipse cx="9" cy="9" id="XMLID_1349_" rx="0.5" ry="1.5" style="fill:none;stroke:%23303C42;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/><ellipse cx="15" cy="9" id="XMLID_1350_" rx="0.5" ry="1.5" style="fill:none;stroke:%23303C42;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/></g></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>

