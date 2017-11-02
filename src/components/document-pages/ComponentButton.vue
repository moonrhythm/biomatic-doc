<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#component-button" class="bio-link -primary"><strong>#</strong></a> Button
      </div>

      <p class="_mgbt-64px _fs-5">
        Button ใช้สำหรับแสดงผลปุ่มลักษณะต่างๆ
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-button</code></li>
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
                <code class="_cl-accent">.bio-button</code>
              </p>
            </td>
            <td>
              <p class="_mgbt-32px">
                <strong>Color: </strong> <br>
                <code class="_cl-accent">-primary</code> (default),
                <code class="_cl-accent">-accent</code>,
                <code class="_cl-accent">-positive</code>,
                <code class="_cl-accent">-negative</code>,
                <code class="_cl-accent">-warning</code>,
                <code class="_cl-accent">-info</code>,
                <code class="_cl-accent">-white</code>,
                <code class="_cl-accent">-gray</code>,
                <code class="_cl-accent">-dark</code>,
                <code class="_cl-accent">-black</code>
              </p>
              <p class="_mgbt-32px">
                <strong>State: </strong> <br>
                <code class="_cl-accent">-loading</code>,
                <code class="_cl-accent">-disabled</code>
              </p>
              <p>
                <strong>Style: </strong> <br>
                <code class="_cl-accent">-outline</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="bio-button"&gt;.bio-button&lt;/div&gt;
&lt;div class="bio-button -accent"&gt;bio-button -accent&lt;/div&gt;
&lt;div class="bio-button -positive"&gt;bio-button -positive&lt;/div&gt;
&lt;div class="bio-button -negative"&gt;bio-button -negative&lt;/div&gt;
&lt;div class="bio-button -info"&gt;bio-button -info&lt;/div&gt;
&lt;div class="bio-button -warning"&gt;bio-button -warning&lt;/div&gt;
&lt;div class="bio-button -white"&gt;bio-button -white&lt;/div&gt;
&lt;div class="bio-button -gray"&gt;bio-button -gray&lt;/div&gt;
&lt;div class="bio-button -dark"&gt;bio-button -dark&lt;/div&gt;
&lt;div class="bio-button -black"&gt;bio-button -black&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-button _dp-ilb _mgbt-8px">.bio-button</div>
        <div class="bio-button -accent _dp-ilb _mgbt-8px">bio-button -accent</div>
        <div class="bio-button -positive _dp-ilb _mgbt-8px">bio-button -positive</div>
        <div class="bio-button -negative _dp-ilb _mgbt-8px">bio-button -negative</div>
        <div class="bio-button -info _dp-ilb _mgbt-8px">bio-button -info</div>
        <div class="bio-button -warning _dp-ilb _mgbt-8px">bio-button -warning</div>
        <div class="bio-button -white _dp-ilb _mgbt-8px">bio-button -white</div>
        <div class="bio-button -gray _dp-ilb _mgbt-8px">bio-button -gray</div>
        <div class="bio-button -dark _dp-ilb _mgbt-8px">bio-button -dark</div>
        <div class="bio-button -black _dp-ilb _mgbt-8px">bio-button -black</div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน อื่นๆ</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="bio-button"&gt;.bio-button&lt;/div&gt;
&lt;div class="bio-button -accent"&gt;bio-button -accent&lt;/div&gt;
&lt;div class="bio-button -positive"&gt;bio-button -positive&lt;/div&gt;
&lt;div class="bio-button -negative"&gt;bio-button -negative&lt;/div&gt;
&lt;div class="bio-button -info"&gt;bio-button -info&lt;/div&gt;
&lt;div class="bio-button -warning"&gt;bio-button -warning&lt;/div&gt;
&lt;div class="bio-button -white"&gt;bio-button -white&lt;/div&gt;
&lt;div class="bio-button -gray"&gt;bio-button -gray&lt;/div&gt;
&lt;div class="bio-button -dark"&gt;bio-button -dark&lt;/div&gt;
&lt;div class="bio-button -black"&gt;bio-button -black&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-button -outline _dp-ilb _mgbt-8px">.bio-button</div>
        <div class="bio-button -accent -outline _dp-ilb _mgbt-8px">bio-button -accent</div>
        <div class="bio-button -positive -outline _dp-ilb _mgbt-8px">bio-button -positive</div>
        <div class="bio-button -negative -outline _dp-ilb _mgbt-8px">bio-button -negative</div>
        <div class="bio-button -info -outline _dp-ilb _mgbt-8px">bio-button -info</div>
        <div class="bio-button -warning -outline _dp-ilb _mgbt-8px">bio-button -warning</div>
        <div class="bio-button -white -outline _dp-ilb _mgbt-8px">bio-button -white</div>
        <div class="bio-button -gray -outline _dp-ilb _mgbt-8px">bio-button -gray</div>
        <div class="bio-button -dark -outline _dp-ilb _mgbt-8px">bio-button -dark</div>
        <div class="bio-button -black -outline _dp-ilb _mgbt-8px">bio-button -black</div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน อื่นๆ</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="bio-button -accent"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -loading -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline -loading -disabled"&gt;Hello Button&lt;/div&gt;

&lt;div class="bio-button -negative"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -loading -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline -loading -disabled"&gt;Hello Button&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-button -positive _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -loading -disabled _dp-ilb _mgbt-8px">Hello Button</div> <br>
        <div class="bio-button -positive -outline _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -outline -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -outline -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -outline -loading -disabled _dp-ilb _mgbt-32px">Hello Button</div> <br>

        <div class="bio-button -negative _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -loading -disabled _dp-ilb _mgbt-8px">Hello Button</div> <br>
        <div class="bio-button -negative -outline _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -outline -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -outline -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -outline -loading -disabled _dp-ilb _mgbt-32px">Hello Button</div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'ComponentBreadcrumb' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Breadcrumb
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'ComponentCard' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Card &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>


</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'ComponentButton',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
