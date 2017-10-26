<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-display" class="bio-link -primary"><strong>#</strong></a> Display
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Display ประกอบด้วย
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• Display</li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">dp</code> สำหรับ <code class="_cl-accent">display</code></li>
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
                <code class="_cl-accent">dp</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">b</code> สำหรับ "block"<br>
                <code class="_cl-accent">il</code> สำหรับ "inline"<br>
                <code class="_cl-accent">ilb</code> สำหรับ "inline-block"<br>
                <code class="_cl-accent">f</code> สำหรับ "flex"<br>
                <code class="_cl-accent">g</code> สำหรับ "grid"<br>
                <code class="_cl-accent">tb</code> สำหรับ "table"<br>
                <code class="_cl-accent">n</code> สำหรับ "none"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Display</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Display --&gt;
&lt;div&gt;
  &lt;div class="_dp-b"&gt;Block&lt;/div&gt;
  &lt;div class="_dp-b"&gt;Block&lt;/div&gt;
  &lt;div class="_dp-b"&gt;Block&lt;/div&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;div class="_dp-il"&gt;Inline&lt;/div&gt;
  &lt;div class="_dp-il"&gt;Inline&lt;/div&gt;
  &lt;div class="_dp-il"&gt;Inline&lt;/div&gt;
&lt;/div&gt;

&lt;div class="_dp-f"&gt;
  &lt;div&gt;Flex Item&lt;/div&gt;
  &lt;div&gt;Flex Item&lt;/div&gt;
  &lt;div&gt;Flex Item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_mgbt-16px">
          <div class="_dp-b _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Block</div>
          <div class="_dp-b _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Block</div>
          <div class="_dp-b _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Block</div>
        </div>

        <div class="_mgbt-16px">
          <div class="_dp-il _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Inline</div>
          <div class="_dp-il _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Inline</div>
          <div class="_dp-il _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Inline</div>
        </div>

        <div class="_dp-f _mgbt-16px">
          <div class="_dp-f _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Flex Item</div>
          <div class="_dp-f _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Flex Item</div>
          <div class="_dp-f _bgcl-neutral-200 _bdw-2px _bdcl-neutral-600">Flex Item</div>
        </div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicCursor' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Cursor
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicFloat' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Float &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicDisplay',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
