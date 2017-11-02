<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-object-fit" class="bio-link -primary"><strong>#</strong></a> Object Fit
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้กำหนดการ Fill Content ใน Container ของ Replaced Elements เช่น
        <code class="_cl-accent">&lt;img&gt;</code>
        <code class="_cl-accent">&lt;iframe&gt;</code>
        <code class="_cl-accent">&lt;embed&gt;</code>
        <code class="_cl-accent">&lt;video&gt;</code> ประกอบไปด้วย
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• Object Fit</li>
      </ul>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_ojf-*</code> สำหรับ <code class="_cl-accent">object-fit</code></li>
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
                <code class="_cl-accent">_ojf-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">cv</code> สำหรับ "cover" <br>
                <code class="_cl-accent">ct</code> สำหรับ "contain" <br>
                <code class="_cl-accent">f</code> สำหรับ "fill" <br>
                <code class="_cl-accent">n</code> สำหรับ "none"
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
        <strong>ตัวอย่างการใช้งาน object-fit</strong>
      </p>
      <pre class="example"><code class="language-markup"></code></pre>

      <div class="u-panel _pst-rlt _mgbt-64px">
        <div class="_mgbt-32px">
          <h5 class="_mgbt-8px">Original Image</h5>
          <img src="https://placeimg.com/100/100/animals" alt="image">
        </div>
        <div class="_dp-ilb">
          <h6>Cover</h6>
          <img src="https://placeimg.com/100/100/animals" alt="image" class="_w-64px _h-128px _ojf-cv">
        </div>
        <div class="_dp-ilb">
          <h6>Contain</h6>
          <img src="https://placeimg.com/100/100/animals" alt="image" class="_w-64px _h-128px _ojf-ct _bgcl-neutral-300">
        </div>
        <div class="_dp-ilb">
          <h6>Fill</h6>
          <img src="https://placeimg.com/100/100/animals" alt="image" class="_w-64px _h-128px _ojf-f _bgcl-neutral-300">
        </div>
        <div class="_dp-ilb">
          <h6>None</h6>
          <img src="https://placeimg.com/100/100/animals" alt="image" class="_w-64px _h-128px _ojf-n _bgcl-neutral-300">
        </div>

      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicMargin' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Margin
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
  name: 'AtomicObjectFit',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
