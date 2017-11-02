<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-color" class="bio-link -primary"><strong>#</strong></a> Color
      </div>

      <p class="_mgbt-4px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Color ประกอบด้วย
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• Color</li>
      </ul>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_cl-*</code> สำหรับ <code class="_cl-accent">color</code></li>
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
                <code class="_cl-accent">_cl-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Biomatic's Color Value: </strong> <br>
                <code class="_cl-accent">primary[-{100-900}]</code>
                <code class="_cl-accent">accent[-{100-900}]</code>
                <code class="_cl-accent">neutral[-{100-900}]</code>
                <code class="_cl-accent">positive</code>
                <code class="_cl-accent">negative</code>
                <code class="_cl-accent">warning</code>
                <code class="_cl-accent">white</code>
                <code class="_cl-accent">gray</code>
                <code class="_cl-accent">dark</code>
                <code class="_cl-accent">black</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="_mgbt-4px _fs-5">
        <strong>Responsive:</strong> <span class="_cl-positive"><strong>Yes</strong></span>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">*-sm</code></li>
        <li>• <code class="_cl-accent">*-md</code></li>
        <li>• <code class="_cl-accent">*-lg</code></li>
      </ul>
      <p class="_mgbt-4px _fs-5">
        <strong>Hover:</strong> <span class="_cl-positive"><strong>Yes</strong></span>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">*-hover</code></li>
      </ul>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Color</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Main Color --&gt;
&lt;p class="_cl-primary"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral"&gt;Hello World&lt;/p&gt;

&lt;!-- Semantic Color --&gt;
&lt;p class="_cl-positive"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-negative"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-warning"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-info"&gt;Hello World&lt;/p&gt;

&lt;!-- Fray Scale Color --&gt;
&lt;p class="_cl-white"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-gray"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-dark"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-black"&gt;Hello World&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_cl-primary">Hello World</p>
        <p class="_cl-accent">Hello World</p>
        <p class="_cl-neutral">Hello World</p>
        <p class="_cl-positive">Hello World</p>
        <p class="_cl-negative">Hello World</p>
        <p class="_cl-warning">Hello World</p>
        <p class="_cl-info">Hello World</p>
        <p class="_cl-white">Hello World</p>
        <p class="_cl-gray">Hello World</p>
        <p class="_cl-dark">Hello World</p>
        <p class="_cl-black">Hello World</p>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Main Color – Primary พร้อม Weigth Modifier</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Primary Color --&gt;
&lt;p class="_cl-primary-100"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-200"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-300"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-400"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-500"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-600"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-700"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-800"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-primary-900"&gt;Hello World&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_cl-primary-100">Hello World</p>
        <p class="_cl-primary-200">Hello World</p>
        <p class="_cl-primary-300">Hello World</p>
        <p class="_cl-primary-400">Hello World</p>
        <p class="_cl-primary-500">Hello World</p>
        <p class="_cl-primary-600">Hello World</p>
        <p class="_cl-primary-700">Hello World</p>
        <p class="_cl-primary-800">Hello World</p>
        <p class="_cl-primary-900">Hello World</p>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Main Color – Accent พร้อม Weigth Modifier</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Accent Color --&gt;
&lt;p class="_cl-accent-100"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-200"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-300"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-400"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-500"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-600"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-700"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-800"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-accent-900"&gt;Hello World&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_cl-accent-100">Hello World</p>
        <p class="_cl-accent-200">Hello World</p>
        <p class="_cl-accent-300">Hello World</p>
        <p class="_cl-accent-400">Hello World</p>
        <p class="_cl-accent-500">Hello World</p>
        <p class="_cl-accent-600">Hello World</p>
        <p class="_cl-accent-700">Hello World</p>
        <p class="_cl-accent-800">Hello World</p>
        <p class="_cl-accent-900">Hello World</p>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Main Color – Neutral พร้อม Weigth Modifier</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Neutral Color --&gt;
&lt;p class="_cl-neutral-100"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-200"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-300"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-400"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-500"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-600"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-700"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-800"&gt;Hello World&lt;/p&gt;
&lt;p class="_cl-neutral-900"&gt;Hello World&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_cl-neutral-100">Hello World</p>
        <p class="_cl-neutral-200">Hello World</p>
        <p class="_cl-neutral-300">Hello World</p>
        <p class="_cl-neutral-400">Hello World</p>
        <p class="_cl-neutral-500">Hello World</p>
        <p class="_cl-neutral-600">Hello World</p>
        <p class="_cl-neutral-700">Hello World</p>
        <p class="_cl-neutral-800">Hello World</p>
        <p class="_cl-neutral-900">Hello World</p>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Color – Hover</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;p class="_cl-positive _cl-negative-hover"&gt;
  Hover Me
&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_cl-positive _cl-negative-hover _dp-ilb">Hover Me</p>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicBoxSize' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Box Size
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicCursor' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Cursor &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicColor',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
