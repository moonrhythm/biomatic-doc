<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#component-progress" class="bio-link -primary"><strong>#</strong></a> Progress
      </div>

      <p class="_mgbt-16px _fs-5">
        Progress ใช้สำหรับแสดงปริมาณการกำเนินการ
      </p>
      <p class="_mgbt-64px _fs-5">
        Progress ใช้งาน Class <code class="_cl-accent">.bio-progress</code>
        บน Element <code class="_cl-accent">&lt;progress&gt;</code> เพียงอย่างเดียว
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-progress</code></li>
      </ul>

      <p class="_mgbt-8px _fs-5">
        <strong>Options</strong>
      </p>
      <table class="bio-table _mgbt-64px">
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
                <code class="_cl-accent">.bio-message</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Color: </strong> <br>
                <code class="_cl-accent">-primary</code> (default),
                <code class="_cl-accent">-accent</code>,
                <code class="_cl-accent">-positive</code>,
                <code class="_cl-accent">-negative</code>,
                <code class="_cl-accent">-warning</code>,
                <code class="_cl-accent">-info</code>,
                <code class="_cl-accent">-dark</code>,
                <code class="_cl-accent">-black</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Progress --&gt;
&lt;progress class="bio-progress -primary" value="10" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress -accent" value="20" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress -positive" value="30" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress -negative" value="40" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress -warning" value="50" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress -info" value="60" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress -dark" value="70" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress -black" value="80" max="100"&gt;&lt;/progress&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <progress class="bio-progress -primary _mgbt-8px" value="10" max="100"></progress>
        <progress class="bio-progress -accent _mgbt-8px" value="20" max="100"></progress>
        <progress class="bio-progress -positive _mgbt-8px" value="30" max="100"></progress>
        <progress class="bio-progress -negative _mgbt-8px" value="40" max="100"></progress>
        <progress class="bio-progress -warning _mgbt-8px" value="50" max="100"></progress>
        <progress class="bio-progress -info _mgbt-8px" value="60" max="100"></progress>
        <progress class="bio-progress -dark _mgbt-8px" value="70" max="100"></progress>
        <progress class="bio-progress -black" value="80" max="100"></progress>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน รูปแบบอื่น</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;progress class="bio-progress _h-1px" value="20" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress _h-2px" value="20" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress _h-4px" value="20" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress _h-8px" value="20" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress _h-16px" value="20" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress _h-32px" value="20" max="100"&gt;&lt;/progress&gt;
&lt;progress class="bio-progress _h-64px" value="20" max="100"&gt;&lt;/progress&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <progress class="bio-progress _mgbt-8px _h-1px" value="20" max="100"></progress>
        <progress class="bio-progress _mgbt-8px _h-2px" value="20" max="100"></progress>
        <progress class="bio-progress _mgbt-8px _h-4px" value="20" max="100"></progress>
        <progress class="bio-progress _mgbt-8px _h-8px" value="20" max="100"></progress>
        <progress class="bio-progress _mgbt-8px _h-16px" value="20" max="100"></progress>
        <progress class="bio-progress _mgbt-8px _h-32px" value="20" max="100"></progress>
        <progress class="bio-progress _h-64px" value="20" max="100"></progress>
      </div>


      <hr class="_opct-30 _mgbt-32px">

      <!-- <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicDisplay' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Display
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicMargin' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Margin &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div> -->

    </div>


</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'ComponentProgress',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
