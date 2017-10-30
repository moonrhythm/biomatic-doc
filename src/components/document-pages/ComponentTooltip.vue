<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#component-tooltip" class="bio-link -primary"><strong>#</strong></a> Tooltip
      </div>

      <p class="_mgbt-64px _fs-5">
        Tooltip ใช้แสดง Content ที่ซ่อนไว้ด้วยการ Hover Element ที่ต้องการ
        เพื่อแสดงข้อมูลที่เกี่ยวข้องกับ Element โดย Content จะเป็นได้เพียง Text
        ที่ระบุใน Attribute: data-tooltip เท่านั้น
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-tooltip</code></li>
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
                <strong>Position: </strong> <br>
                <code class="_cl-accent">-top</code> (default),
                <code class="_cl-accent">-right</code>,
                <code class="_cl-accent">-left</code>,
                <code class="_cl-accent">-bottom</code>,
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Top --&gt;
&lt;div class="bio-tooltip" data-tooltip="Hello there!!!">
  Hover ME!! Top
&lt;/div&gt;

&lt;!-- Left --&gt;
&lt;div class="bio-tooltip -left" data-tooltip="Hello there!!!"&gt;
  Hover ME!! Left
&lt;/div&gt;

&lt;!-- Right --&gt;
&lt;div class="bio-tooltip -right" data-tooltip="Hello there!!!"&gt;
  Hover ME!! Right
&lt;/div&gt;

&lt;!-- Bottom --&gt;
&lt;div class="bio-tooltip -bottom" data-tooltip="Hello there!!!"&gt;
  Hover ME!! Bottom
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px _tal-ct">
        <div class="bio-tooltip _dp-ilb _mgbt-16px" data-tooltip="Hello there!!!">Hover ME!! Top</div> <br>
        <div class="bio-tooltip -left _dp-ilb _mgbt-16px" data-tooltip="Hello there!!!">Hover ME!! Left</div> <br>
        <div class="bio-tooltip -right _dp-ilb _mgbt-16px" data-tooltip="Hello there!!!">Hover ME!! Right</div> <br>
        <div class="bio-tooltip -bottom _dp-ilb" data-tooltip="Hello there!!!">Hover ME!! Bottom</div> <br>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน รูปแบบอื่น</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="bio-tooltip" data-tooltip="I'm a button"&gt;
  &lt;div class="bio-button"&gt;Button&lt;/div&gt;
&lt;/div&gt;

&lt;div class="bio-tooltip -right" data-tooltip="I'm a Link"&gt;
  &lt;a class="bio-link -fancy"&gt;Link&lt;/a&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-tooltip _dp-ilb" data-tooltip="I'm a button">
          <div class="bio-button">Button</div>
        </div>
        <div class="bio-tooltip -right _dp-ilb" data-tooltip="I'm a Link">
          <a class="bio-link -fancy">Link</a>
        </div>
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
  name: 'ComponentTooltip',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
