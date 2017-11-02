<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-padding" class="bio-link -primary"><strong>#</strong></a> Padding
      </div>

      <p class="_mgbt-4px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Padding ประกอบด้วย
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• Padding</li>
        <li>• Padding Left</li>
        <li>• Padding Right</li>
        <li>• Padding Top</li>
        <li>• Padding Bottom</li>
        <li>• Padding Vertical</li>
        <li>• Padding Horizontal</li>
      </ul>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_pd-*</code> สำหรับ <code class="_cl-accent">padding</code></li>
        <li>• <code class="_cl-accent">_pdl-*</code> สำหรับ <code class="_cl-accent">padding-left</code></li>
        <li>• <code class="_cl-accent">_pdr-*</code> สำหรับ <code class="_cl-accent">padding-right</code></li>
        <li>• <code class="_cl-accent">_pdt-*</code> สำหรับ <code class="_cl-accent">padding-top</code></li>
        <li>• <code class="_cl-accent">_pdbt-*</code> สำหรับ <code class="_cl-accent">padding-bottom</code></li>
        <li>• <code class="_cl-accent">_pdv-*</code> สำหรับ <code class="_cl-accent">padding-top</code> และ <code class="_cl-accent">padding-bottom</code> (Vertical)</li>
        <li>• <code class="_cl-accent">_pdh-*</code> สำหรับ <code class="_cl-accent">padding-left</code> และ <code class="_cl-accent">padding-right</code> (Horizontal)</li>
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
                <code class="_cl-accent">_pd-*</code>,
                <code class="_cl-accent">_pdl-*</code>,
                <code class="_cl-accent">_pdr-*</code>,
                <code class="_cl-accent">_pdt-*</code>,
                <code class="_cl-accent">_pdbt-*</code>,
                <code class="_cl-accent">_pdv-*</code>,
                <code class="_cl-accent">_pdh-*</code>
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
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">at</code> สำหรับ "auto"
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
      <p class="_mgbt-64px _fs-5">
        <strong>Hover:</strong> <span class="_cl-negative"><strong>No</strong></span>
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Padding</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Padding --&gt;
&lt;div class="_pd-2px"&gt;&lt;/div&gt;
&lt;div class="_pd-4px"&gt;&lt;/div&gt;
&lt;div class="_pd-8px"&gt;&lt;/div&gt;
&lt;div class="_pd-16px"&gt;&lt;/div&gt;

&lt;!-- Padding Left --&gt;
&lt;div class="_pdl-2px"&gt;&lt;/div&gt;
&lt;div class="_pdl-4px"&gt;&lt;/div&gt;
&lt;div class="_pdl-8px"&gt;&lt;/div&gt;
&lt;div class="_pdl-16px"&gt;&lt;/div&gt;

&lt;!-- Padding Right --&gt;
&lt;div class="_pdr-2px"&gt;&lt;/div&gt;
&lt;div class="_pdr-4px"&gt;&lt;/div&gt;
&lt;div class="_pdr-8px"&gt;&lt;/div&gt;
&lt;div class="_pdr-16px"&gt;&lt;/div&gt;

&lt;!-- Padding Vertical --&gt;
&lt;div class="_pdv-2px"&gt;&lt;/div&gt;
&lt;div class="_pdv-4px"&gt;&lt;/div&gt;
&lt;div class="_pdv-8px"&gt;&lt;/div&gt;
&lt;div class="_pdv-16px"&gt;&lt;/div&gt;

&lt;!-- Padding Horizontal --&gt;
&lt;div class="_pdh-2px"&gt;&lt;/div&gt;
&lt;div class="_pdh-4px"&gt;&lt;/div&gt;
&lt;div class="_pdh-8px"&gt;&lt;/div&gt;
&lt;div class="_pdh-16px"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pd-2px"><small>_pd-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pd-4px"><small>_pd-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pd-8px"><small>_pd-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _pd-16px"><small>_pd-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdl-2px"><small>_pdl-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdl-4px"><small>_pdl-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdl-8px"><small>_pdl-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _pdl-16px"><small>_pdl-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdr-2px"><small>_pdr-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdr-4px"><small>_pdr-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdr-8px"><small>_pdr-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _pdr-16px"><small>_pdr-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdv-2px"><small>_pdv-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdv-4px"><small>_pdv-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdv-8px"><small>_pdv-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _pdv-16px"><small>_pdv-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdh-2px"><small>_pdh-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdh-4px"><small>_pdh-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdh-8px"><small>_pdh-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _pdh-16px"><small>_pdh-16px</small></div>
        </div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicOpacity' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Opacity
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicTypography' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Typography &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicMargin',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
