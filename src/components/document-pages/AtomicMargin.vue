<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-margin" class="bio-link -primary"><strong>#</strong></a> Margin
      </div>

      <p class="_mgbt-5px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Margin ประกอบด้วย
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• Margin</li>
        <li>• Margin Left</li>
        <li>• Margin Right</li>
        <li>• Margin Top</li>
        <li>• Margin Bottom</li>
        <li>• Margin Vertical</li>
        <li>• Margin Horizontal</li>
      </ul>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_mg-*</code> สำหรับ <code class="_cl-accent">margin</code></li>
        <li>• <code class="_cl-accent">_mgl-*</code> สำหรับ <code class="_cl-accent">margin-left</code></li>
        <li>• <code class="_cl-accent">_mgr-*</code> สำหรับ <code class="_cl-accent">margin-right</code></li>
        <li>• <code class="_cl-accent">_mgt-*</code> สำหรับ <code class="_cl-accent">margin-top</code></li>
        <li>• <code class="_cl-accent">_mgbt-*</code> สำหรับ <code class="_cl-accent">margin-bottom</code></li>
        <li>• <code class="_cl-accent">_mgv-*</code> สำหรับ <code class="_cl-accent">margin-top</code> และ <code class="_cl-accent">margin-bottom</code> (Vertical)</li>
        <li>• <code class="_cl-accent">_mgh-*</code> สำหรับ <code class="_cl-accent">margin-left</code> และ <code class="_cl-accent">margin-right</code> (Horizontal)</li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Value</strong>
      </p>
      <table class="bio-table _mgbt-32px">
        <thead>
          <tr>
            <th class="_w-1px">Class</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">_mg-*</code>,
                <code class="_cl-accent">_mgl-*</code>,
                <code class="_cl-accent">_mgr-*</code>,
                <code class="_cl-accent">_mgt-*</code>,
                <code class="_cl-accent">_mgbt-*</code>,
                <code class="_cl-accent">_mgv-*</code>,
                <code class="_cl-accent">_mgh-*</code>
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
        <strong>ตัวอย่างการใช้งาน Margin</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Margin --&gt;
&lt;div class="_mg-1px"&gt;&lt;/div&gt;
&lt;div class="_mg-2px"&gt;&lt;/div&gt;
&lt;div class="_mg-4px"&gt;&lt;/div&gt;
&lt;div class="_mg-8px"&gt;&lt;/div&gt;
&lt;div class="_mg-16px"&gt;&lt;/div&gt;

&lt;!-- Margin Left --&gt;
&lt;div class="_mgl-1px"&gt;&lt;/div&gt;
&lt;div class="_mgl-2px"&gt;&lt;/div&gt;
&lt;div class="_mgl-4px"&gt;&lt;/div&gt;
&lt;div class="_mgl-8px"&gt;&lt;/div&gt;
&lt;div class="_mgl-16px"&gt;&lt;/div&gt;

&lt;!-- Margin Right --&gt;
&lt;div class="_mgr-1px"&gt;&lt;/div&gt;
&lt;div class="_mgr-2px"&gt;&lt;/div&gt;
&lt;div class="_mgr-4px"&gt;&lt;/div&gt;
&lt;div class="_mgr-8px"&gt;&lt;/div&gt;
&lt;div class="_mgr-16px"&gt;&lt;/div&gt;

&lt;!-- Margin Vertical --&gt;
&lt;div class="_mgv-1px"&gt;&lt;/div&gt;
&lt;div class="_mgv-2px"&gt;&lt;/div&gt;
&lt;div class="_mgv-4px"&gt;&lt;/div&gt;
&lt;div class="_mgv-8px"&gt;&lt;/div&gt;
&lt;div class="_mgv-16px"&gt;&lt;/div&gt;

&lt;!-- Margin Horizontal --&gt;
&lt;div class="_mgh-1px"&gt;&lt;/div&gt;
&lt;div class="_mgh-2px"&gt;&lt;/div&gt;
&lt;div class="_mgh-4px"&gt;&lt;/div&gt;
&lt;div class="_mgh-8px"&gt;&lt;/div&gt;
&lt;div class="_mgh-16px"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mg-1px"><small>_mg-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mg-2px"><small>_mg-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mg-4px"><small>_mg-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mg-8px"><small>_mg-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mg-16px"><small>_mg-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-1px"><small>_mgl-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-2px"><small>_mgl-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-4px"><small>_mgl-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-8px"><small>_mgl-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgl-16px"><small>_mgl-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-1px"><small>_mgr-1px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-2px"><small>_mgr-2px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-4px"><small>_mgr-4px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-8px"><small>_mgr-8px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgr-16px"><small>_mgr-16px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-1px"><small>_mgv-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-2px"><small>_mgv-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-4px"><small>_mgv-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-8px"><small>_mgv-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgv-16px"><small>_mgv-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-1px"><small>_mgh-1px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-2px"><small>_mgh-2px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-4px"><small>_mgh-4px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-8px"><small>_mgh-8px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgh-16px"><small>_mgh-16px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicFloat' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Float
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicObjectFit' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Object Fit &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
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
