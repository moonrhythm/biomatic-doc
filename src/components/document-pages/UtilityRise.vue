<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#utility-animation" class="bio-link -primary"><strong>#</strong></a> Rise
      </div>

      <p class="_mgbt-64px _fs-5">
        Rise คือ Utility Class ของ ที่ใช้ทำ Box Shadow รูปแบบต่างๆ เหมื่อนกับ Element นั้น ถูกยกใช้ลอยขึ้น
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>Class:</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.u-rise</code></li>
        <li>• <code class="_cl-accent">.u-rise-1</code></li>
        <li>• <code class="_cl-accent">.u-rise-2</code></li>
        <li>• <code class="_cl-accent">.u-rise-3</code></li>
        <li>• <code class="_cl-accent">.u-rise-4</code></li>
        <li>• <code class="_cl-accent">.u-rise-5</code></li>
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
                <code class="_cl-accent">.u-rise</code>,
                <code class="_cl-accent">.u-rise-1</code>,
                <code class="_cl-accent">.u-rise-2</code>,
                <code class="_cl-accent">.u-rise-3</code>,
                <code class="_cl-accent">.u-rise-4</code>,
                <code class="_cl-accent">.u-rise-5</code>
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
        <strong>ตัวอย่างการใช้งาน u-rise</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="u-rise"&gt;&lt;/div&gt;</code></pre>
      <div class="u-panel _mgbt-64px">
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise"></div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน u-rise-*</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="u-rise-1"&gt;&lt;/div&gt;
&lt;div class="u-rise-2"&gt;&lt;/div&gt;
&lt;div class="u-rise-3"&gt;&lt;/div&gt;
&lt;div class="u-rise-4"&gt;&lt;/div&gt;
&lt;div class="u-rise-5"&gt;&lt;/div&gt;</code></pre>
      <div class="u-panel _mgbt-64px">
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise-1"></div>
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise-2"></div>
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise-3"></div>
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise-4"></div>
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise-5"></div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน u-rise-*-hover</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="u-rise-5-hover"&gt;&lt;/div&gt;
&lt;div class="u-rise-3 u-rise-5-hover"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise-5-hover"></div>
        <div class="_dp-ilb _w-64px _h-64px _bgcl-primary-300 u-rise-3 u-rise-5-hover"></div>
      </div>


      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'UtilityAnimation' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Animation
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
