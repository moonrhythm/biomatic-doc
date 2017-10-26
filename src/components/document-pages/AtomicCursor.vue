<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-cursor" class="bio-link -primary"><strong>#</strong></a> Cursor
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Cursor ประกอบด้วย
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <a class="bio-link" href="#atomic-border-width">Cursor</a></li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">cs</code> สำหรับ <code class="_cl-accent">cursor</code></li>
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
                <code class="_cl-accent">cs</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">pt</code>: สำหรับ "pointer" <br>
                <code class="_cl-accent">h</code>: สำหรับ "help" <br>
                <code class="_cl-accent">nal</code>: สำหรับ "not-allowed" <br>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Cursor</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Cursor --&gt;
&lt;div class="_cs-pt"&gt;Pointer&lt;/div&gt;
&lt;div class="_cs-h"&gt;Help&lt;/div&gt;
&lt;div class="_cs-nal"&gt;Not Allowed&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_h-32px _bgcl-white _tal-ct _cs-pt _bdw-1px _bdcl-neutral-400 _mgbt-16px">Pointer</div>
        <div class="_h-32px _bgcl-white _tal-ct _cs-h _bdw-1px _bdcl-neutral-400 _mgbt-16px">Help</div>
        <div class="_h-32px _bgcl-white _tal-ct _cs-nal _bdw-1px _bdcl-neutral-400">Not Allowed</div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicColor' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Color
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicDisplay' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Display &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicCursor',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
