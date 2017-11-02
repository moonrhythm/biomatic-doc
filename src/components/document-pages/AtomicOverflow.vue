<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-overflow" class="bio-link -primary"><strong>#</strong></a> Overflow
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้กำหนดการพฤติกรรมของ Overflow Content ประกอบด้วย
      </p>
      <ul class="_mgbt-128px _fs-5 _lh-175pct _pdl-16px">
        <li>• <a class="bio-link" href="#atomic-overflow">Overflow</a></li>
        <li>• <a class="bio-link" href="#atomic-text-overflow">Text Overflow</a></li>
      </ul>

      <!--
      *  Overflow
      **************************-->
      <div class="anchor" id="atomic-overflow"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-overflow" class="bio-link -primary"><strong>#</strong></a> Overflow
      </div>
      <p class="_mgbt-64px _fs-5">
        Overflow ใช้กำหนดการจัดการ Overflow Content
      </p>
      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_ovf-*</code> สำหรับ <code class="_cl-accent">overflow</code></li>
        <li>• <code class="_cl-accent">_ovfx-*</code> สำหรับ <code class="_cl-accent">overflow</code></li>
        <li>• <code class="_cl-accent">_ovfy-*</code> สำหรับ <code class="_cl-accent">overflow</code></li>
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
                <code class="_cl-accent">_ovf-*</code>,
                <code class="_cl-accent">_ovfx-*</code>,
                <code class="_cl-accent">_ovfy-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">vsb</code> สำหรับ "visible" <br>
                <code class="_cl-accent">at</code> สำหรับ "auto" <br>
                <code class="_cl-accent">hd</code> สำหรับ "hidden" <br>
                <code class="_cl-accent">sc</code> สำหรับ "scroll"
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
        <strong>ตัวอย่างการใช้งาน overflow</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Overflow Visible --&gt;
&lt;div class="_w-128px _ovf-vsb"&gt;
  &lt;div class="_w-256px"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Overflow Hidden --&gt;
&lt;div class="_w-128px _ovf-hd"&gt;
  &lt;div class="_w-256px"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Overflow Auto --&gt;
&lt;div class="_w-128px _ovf-at"&gt;
  &lt;div class="_w-256px"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Overflow Scroll --&gt;
&lt;div class="_w-128px _ovf-sc"&gt;
  &lt;div class="_w-256px"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _pst-rlt _mgbt-128px">
        <div>Overflow Visible</div>
        <div class="_w-128px _h-64px _bgcl-neutral-300 _mgbt-32px _ovf-vsb">
          <div class="_w-256px _h-24px _bgcl-neutral-500"></div>
        </div>

        <div>Overflow Hidden</div>
        <div class="_w-128px _h-64px _bgcl-neutral-300 _mgbt-32px _ovf-hd">
          <div class="_w-256px _h-24px _bgcl-neutral-500"></div>
        </div>

        <div>Overflow Auto</div>
        <div class="_w-128px _h-64px _bgcl-neutral-300 _mgbt-32px _ovf-at">
          <div class="_w-256px _h-24px _bgcl-neutral-500"></div>
        </div>

        <div>Overflow Scroll</div>
        <div class="_w-128px _h-64px _bgcl-neutral-300 _ovf-sc">
          <div class="_w-256px _h-24px _bgcl-neutral-500"></div>
        </div>
      </div>

      <!--
      *  Text Overflow
      **************************-->
      <div class="anchor" id="atomic-overflow"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-overflow" class="bio-link -primary"><strong>#</strong></a> Text Overflow
      </div>
      <p class="_mgbt-64px _fs-5">
        Text Overflow ใช้กำหนดการจัดการ Overflow ของ Text ใน Container
      </p>
      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_tovf-*</code> สำหรับ <code class="_cl-accent">text-overflow</code></li>
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
                <code class="_cl-accent">_tovf-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">c</code> สำหรับ "clip" <br>
                <code class="_cl-accent">els</code> สำหรับ "ellipsis"
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
      <p class="_mgbt-32px _fs-5">
        <strong>Hover:</strong> <span class="_cl-negative"><strong>No</strong></span>
      </p>

      <div class="bio-message -primary _fs-6 _mgbt-64px">
        <p>
          <strong>คำแนะนำ</strong> – Class <code class="_cl-accent">_tovf-*</code>
          นั้นจะต้องระบุ Style <code class="_cl-accent">white-space: nowrap</code>
          เพื่อให้ Text Content ล้น Container ออกมา และ Style <code class="_cl-accent">overflow: hidden</code>
          เพื่อซ่อน Text Content ที่ Overflow ด้วย จึงจะแสดงผลได้ 💁
        </p>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน text-overflow</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Normal Text Overflow --&gt;
&lt;div&gt;
  &lt;p class="_wsp-nw"&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  &lt;/p&gt;
&lt;/div&gt;

&lt;!-- Text Overflow Clip --&gt;
&lt;div&gt;
  &lt;p class="_wsp-nw _ovf-hd _tovf-c"&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  &lt;/p&gt;
&lt;/div&gt;

&lt;!-- Text Overflow Ellipsis --&gt;
&lt;div&gt;
  &lt;p class="_wsp-nw _ovf-hd _tovf-els"&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  &lt;/p&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _pst-rlt _mgbt-64px">
        <h6>Normal Text Overflow</h6>
        <div class="_w-128px _h-64px _bgcl-neutral-300 _mgbt-32px">
          <p class="_wsp-nw">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <h6>Text Overflow Clip</h6>
        <div class="_w-128px _h-64px _bgcl-neutral-300 _mgbt-32px">
          <p class="_wsp-nw _ovf-hd _tovf-c">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <h6>Text Overflow Ellipsis</h6>
        <div class="_w-128px _h-64px _bgcl-neutral-300">
          <p class="_wsp-nw _ovf-hd _tovf-els">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
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
          <router-link :to="{ name: 'AtomicPadding' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Padding &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicOverflow',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
