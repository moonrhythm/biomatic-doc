<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-float" class="bio-link -primary"><strong>#</strong></a> Float
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Float ประกอบด้วย
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• Float</li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">f</code> สำหรับ <code class="_cl-accent">float</code></li>
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
                <code class="_cl-accent">f</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">l</code> สำหรับ "left"<br>
                <code class="_cl-accent">r</code> สำหรับ "right"<br>
                <code class="_cl-accent">n</code> สำหรับ "none"<br>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Float</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Display --&gt;
&lt;div class="_f-l"&gt;&lt;/div&gt;
&lt;p&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
&lt;/p&gt;

&lt;div class="_f-r"&gt;&lt;/div&gt;
&lt;p&gt;
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_w-128px _h-64px _bgcl-gray _dp-ilb _f-l _mgr-8px">Float Left</div>
        <p class="_lh-125pct _mgbt-32px">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <div class="_w-128px _h-64px _bgcl-gray _dp-ilb _f-r _mgr-8px">Float Right</div>
        <p class="_lh-125pct">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
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
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicFloat',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
