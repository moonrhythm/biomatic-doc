<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#utility-animation" class="bio-link -primary"><strong>#</strong></a> Animation
      </div>

      <p class="_mgbt-64px _fs-5">
        Animation คือ Utility Class ของ Animation พื้นฐาน ให้คุณหยิบไปใช้งานได้ง่าย
        ซึ่งตอนนี้จะยังมีไม่มาก แต่เราจะค่อยๆ ทยอยเพิ่มเติม Animation ที่น่าสนใจเข้ามาเรื่อยๆ 🙇
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>Class:</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.u-animation-pulse</code></li>
        <li>• <code class="_cl-accent">.u-animation-spin</code></li>
      </ul>

      <p class="_mgbt-8px _fs-5">
        <strong>Option:</strong>
      </p>
      <table class="bio-table _mgbt-32px">
        <thead>
          <tr>
            <th class="_w-1px">Class</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.u-animation-pulse</code>,
                <code class="_cl-accent">.u-animation-spin</code>
              </p>
            </td>
            <td>
              <p>
                -
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="_mgbt-4px _fs-5">
        <strong>Hover:</strong> <span class="_cl-positive"><strong>Yes</strong></span>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">*-hover</code></li>
      </ul>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Pulse</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="_w-64px _h-64px _bgcl-accent u-animation-pulse"&gt&lt;/div&gt

&lt;!-- Ativate Animation with Hover --&gt;
&lt;div class="_w-64px _h-64px _bgcl-positive u-animation-pulse-hover"&gt&lt;/div&gt</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_dp-ilb _w-64px _h-64px _bgcl-accent u-animation-pulse"></div>
        <div class="_dp-ilb _w-64px _h-64px _bgcl-positive u-animation-pulse-hover _cl-white"></div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Spin</strong>
      </p>
           <pre class="example"><code class="language-markup">&lt;div class="_w-64px _h-64px _bgcl-accent u-animation-spin"&gt&lt;/div&gt

&lt;!-- Ativate Animation with Hover --&gt;
&lt;div class="_w-64px _h-64px _bgcl-positive u-animation-spin-hover"&gt&lt;/div&gt</code></pre>
      <div class="u-panel _mgbt-64px">
        <div class="_dp-ilb _w-64px _h-64px _bgcl-accent u-animation-spin"></div>
        <div class="_dp-ilb _w-64px _h-64px _bgcl-positive u-animation-spin-hover"></div>
      </div>


      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'LayoutResponsiveGrid' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Responsive Grid
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'UtilityRise' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Rise &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>


</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'UtilityAnimation',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
