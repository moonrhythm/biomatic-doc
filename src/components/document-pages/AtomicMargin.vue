<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-margin" class="bio-link -primary"><strong>#</strong></a> Margin
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Margin ประกอบด้วย
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• Margin</li>
        <li>• Margin Left</li>
        <li>• Margin Right</li>
        <li>• Margin Top</li>
        <li>• Margin Bottom</li>
        <li>• Margin Vertical</li>
        <li>• Margin Horizontal</li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">mg</code> สำหรับ <code class="_cl-accent">margin</code></li>
        <li>• <code class="_cl-accent">mgl</code> สำหรับ <code class="_cl-accent">margin-left</code></li>
        <li>• <code class="_cl-accent">mgr</code> สำหรับ <code class="_cl-accent">margin-right</code></li>
        <li>• <code class="_cl-accent">mgt</code> สำหรับ <code class="_cl-accent">margin-top</code></li>
        <li>• <code class="_cl-accent">mgbt</code> สำหรับ <code class="_cl-accent">margin-bottom</code></li>
        <li>• <code class="_cl-accent">mgv</code> สำหรับ <code class="_cl-accent">margin-top</code> และ <code class="_cl-accent">margin-bottom</code> (Vertical)</li>
        <li>• <code class="_cl-accent">mgh</code> สำหรับ <code class="_cl-accent">margin-left</code> และ <code class="_cl-accent">margin-right</code> (Horizontal)</li>
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
                <code class="_cl-accent">mg</code>,
                <code class="_cl-accent">mgl</code>,
                <code class="_cl-accent">mgr</code>,
                <code class="_cl-accent">mgt</code>,
                <code class="_cl-accent">mgbt</code>,
                <code class="_cl-accent">mgv</code>,
                <code class="_cl-accent">mgh</code>
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
                <strong>String Value: </strong>
                <code class="_cl-accent">at</code> สำหรับ "auto"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Margin</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Margin --&gt;
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
          <div class="_bgcl-warning _dp-ilb _mg-1px"><small>._mg-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mg-2px"><small>._mg-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mg-4px"><small>._mg-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mg-8px"><small>._mg-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mg-16px"><small>._mg-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-1px"><small>._mgl-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-2px"><small>._mgl-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-4px"><small>._mgl-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgl-8px"><small>._mgl-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgl-16px"><small>._mgl-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-1px"><small>._mgr-1px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-2px"><small>._mgr-2px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-4px"><small>._mgr-4px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgr-8px"><small>._mgr-8px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgr-16px"><small>._mgr-16px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-1px"><small>._mgv-1px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-2px"><small>._mgv-2px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-4px"><small>._mgv-4px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgv-8px"><small>._mgv-8px</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgv-16px"><small>._mgv-16px</small></div>
        </div>

        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-1px"><small>._mgh-1px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-2px"><small>._mgh-2px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-4px"><small>._mgh-4px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-4px">
          <div class="_bgcl-warning _dp-ilb _mgh-8px"><small>._mgh-8px</small></div>
          <div class="_bgcl-neutral-400 _dp-ilb"><small>Other Box</small></div>
        </div>
        <div class="_bgcl-neutral-300 _mgbt-32px">
          <div class="_bgcl-warning _dp-ilb _mgh-16px"><small>._mgh-16px</small></div>
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
          <router-link :to="{ name: 'AtomicOpacity' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Opacity &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
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
