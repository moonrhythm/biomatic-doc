<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-box-position" class="bio-link -primary"><strong>#</strong></a> Box Position
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Position
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• Position</li>
        <li>• Left</li>
        <li>• Right</li>
        <li>• Top</li>
        <li>• Bottom</li>
      </ul>

      <!--
      *  Border Width
      **************************-->
      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">pst</code> สำหรับ <code class="_cl-accent">position</code></li>
        <li>• <code class="_cl-accent">l</code> สำหรับ <code class="_cl-accent">left</code></li>
        <li>• <code class="_cl-accent">r</code> สำหรับ <code class="_cl-accent">right</code></li>
        <li>• <code class="_cl-accent">t</code> สำหรับ <code class="_cl-accent">top</code></li>
        <li>• <code class="_cl-accent">bt</code> สำหรับ <code class="_cl-accent">bottom</code></li>
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
                <code class="_cl-accent">l</code>,
                <code class="_cl-accent">r</code>,
                <code class="_cl-accent">t</code>,
                <code class="_cl-accent">bt</code>
              </p>
            </td>
            <td>
              <p class="_mgbt-16px">
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
              <p class="_mgbt-16px">
                <strong>Percentage Value: </strong> <br>
                <code class="_cl-accent">50pct</code>
              </p>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">at</code> สำหรับ "auto"
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">pst</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">stt</code> สำหรับ "static" <br>
                <code class="_cl-accent">rlt</code> สำหรับ "relative" <br>
                <code class="_cl-accent">asl</code> สำหรับ "absolute" <br>
                <code class="_cl-accent">f</code> สำหรับ "fixed"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Position</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Position --&gt;
&lt;!-- Left --&gt;
&lt;div class="_pst-rlt _l-1px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-2px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-4px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-8px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-16px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-32px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-64px"&gt;&lt;/div&gt;

&lt;!-- Right --&gt;
&lt;div class="_pst-rlt _r-1px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-2px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-4px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-8px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-16px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-32px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-64px"&gt;&lt;/div&gt;

&lt;!-- Top --&gt;
&lt;div class="_pst-rlt _t-1px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _t-2px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _t-4px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _t-8px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _t-16px"&gt;&lt;/div&gt;

&lt;!-- Bottom --&gt;
&lt;div class="_pst-rlt _bt-1px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _bt-2px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _bt-4px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _bt-8px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _bt-16px"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _l-1px"><small>._l-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _l-2px"><small>._l-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _l-4px"><small>._l-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _l-8px"><small>._l-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _l-16px"><small>._l-16px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _l-32px"><small>._l-32px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _l-64px"><small>._l-64px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _r-1px"><small>._r-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _r-2px"><small>._r-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _r-4px"><small>._r-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _r-8px"><small>._r-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _r-16px"><small>._r-16px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _r-32px"><small>._r-32px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _r-64px"><small>._r-64px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _t-1px"><small>._t-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _t-2px"><small>._t-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _t-4px"><small>._t-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _t-8px"><small>._t-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-64px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _t-16px"><small>._t-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-1px"><small>._bt-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-2px"><small>._bt-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-4px"><small>._bt-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-16px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-8px"><small>._bt-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-8px">
          <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-16px"><small>._bt-16px</small></div>
        </div>
      </div>


      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicBorder' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Border
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicBoxSize' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Box Size &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicBoxPosition',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
