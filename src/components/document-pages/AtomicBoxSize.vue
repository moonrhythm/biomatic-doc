<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-box-size" class="bio-link -primary"><strong>#</strong></a> Box Size
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Size ของ Box Model ประกอบด้วย
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <a class="bio-link" href="#atomic-border-width">Width</a></li>
        <li>• <a class="bio-link" href="#atomic-border-color">Height</a></li>
        <li>• <a class="bio-link" href="#atomic-border-radius">Max Width</a></li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">w</code> สำหรับ <code class="_cl-accent">width</code></li>
        <li>• <code class="_cl-accent">h</code> สำหรับ <code class="_cl-accent">height</code></li>
        <li>• <code class="_cl-accent">mxw</code> สำหรับ <code class="_cl-accent">max-width</code></li>
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
                <code class="_cl-accent">w</code>,
                <code class="_cl-accent">h</code>,
                <code class="_cl-accent">mxh</code>
              </p>
            </td>
            <td>
              <p class="_mgbt-32px">
                <strong>Pixel Value: </strong> <br>
                <code class="_cl-accent">0px</code>
                <code class="_cl-accent">1px</code>
                <code class="_cl-accent">2px</code>
                <code class="_cl-accent">4px</code>
                <code class="_cl-accent">8px</code>
                <code class="_cl-accent">12px</code>
                <code class="_cl-accent">16px</code>
                <code class="_cl-accent">24px</code>
                <code class="_cl-accent">32px</code>
                <code class="_cl-accent">48px</code>
                <code class="_cl-accent">64px</code>
                <code class="_cl-accent">128px</code>
                <code class="_cl-accent">256px</code>
                <code class="_cl-accent">512px</code>
              </p>
              <p class="_mgbt-32px">
                <strong>Percentage Value: </strong> <br>
                <code class="_cl-accent">10pct</code>
                <code class="_cl-accent">20pct</code>
                <code class="_cl-accent">30pct</code>
                <code class="_cl-accent">40pct</code>
                <code class="_cl-accent">50pct</code>
                <code class="_cl-accent">60pct</code>
                <code class="_cl-accent">70pct</code>
                <code class="_cl-accent">80pct</code>
                <code class="_cl-accent">90pct</code>
                <code class="_cl-accent">100pct</code>
              </p>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">at</code> สำหรับ "auto"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Box Size</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Width --&gt;
&lt;div class="_w-1px"&gt;&lt;/div&gt;
&lt;div class="_w-2px"&gt;&lt;/div&gt;
&lt;div class="_w-4px"&gt;&lt;/div&gt;
&lt;div class="_w-8px"&gt;&lt;/div&gt;
&lt;div class="_w-16px"&gt;&lt;/div&gt;
&lt;div class="_w-32px"&gt;&lt;/div&gt;
&lt;div class="_w-64px"&gt;&lt;/div&gt;
&lt;div class="_w-50pct"&gt;&lt;/div&gt;
&lt;div class="_w-100pct"&gt;&lt;/div&gt;

&lt;!-- Height --&gt;
&lt;div class="_h-1px"&gt;&lt;/div&gt;
&lt;div class="_h-2px"&gt;&lt;/div&gt;
&lt;div class="_h-4px"&gt;&lt;/div&gt;
&lt;div class="_h-8px"&gt;&lt;/div&gt;
&lt;div class="_h-16px"&gt;&lt;/div&gt;
&lt;div class="_h-32px"&gt;&lt;/div&gt;
&lt;div class="_h-64px"&gt;&lt;/div&gt;
&lt;div class="_h-50pct"&gt;&lt;/div&gt;
&lt;div class="_h-100pct"&gt;&lt;/div&gt;</code></pre>
      <div class="u-panel _mgbt-64px">
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-1px"><small>._w-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-2px"><small>._w-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-4px"><small>._w-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-8px"><small>._w-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-16px"><small>._w-16px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-32px"><small>._w-32px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-64px"><small>._w-64px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-50pct"><small>._w-50pct</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _wsp-nw _w-100pct"><small>._w-100pct</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-1px"><small>._h-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-2px"><small>._h-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-4px"><small>._h-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-8px"><small>._h-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-16px"><small>._h-16px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-32px"><small>._h-32px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-64px"><small>._h-64px</small></div>
        </div>
        <div class="_bgcl-neutral-300  _mgbt-4px _h-128px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-50pct"><small>._h-50pct</small></div>
        </div>
        <div class="_bgcl-neutral-300 _h-128px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _h-100pct"><small>._h-100pct</small></div>
        </div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicBoxPosition' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Box Position
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicColor' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Color &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicBoxSize',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
