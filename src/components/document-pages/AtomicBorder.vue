<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-border" class="bio-link -primary"><strong>#</strong></a> Border
      </div>

      <p class="_mgbt-4px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Border ประกอบด้วย
      </p>
      <ul class="_mgbt-128px _fs-5 _lh-175pct _pdl-16px">
        <li>• <a class="bio-link" href="#atomic-border-width">Border Width</a></li>
        <li>• <a class="bio-link" href="#atomic-border-color">Border Color</a></li>
        <li>• <a class="bio-link" href="#atomic-border-radius">Border Radius</a></li>
      </ul>

      <!--
      *  Border Width
      **************************-->
      <div class="anchor" id="atomic-border-width"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-border-width" class="bio-link -primary"><strong>#</strong></a> Border Width
      </div>
      <p class="_mgbt-32px _fs-5">
        ใช้กำหนดความหนาของ Border โดย Biomatic จะใช้ Default
        <code class="_cl-accent">border-style</code> เป็น
        <code class="_cl-accent">solid</code>
      </p>

      <div class="bio-message -primary _fs-6 _mgbt-64px">
        <p>
          <strong>คำแนะนำ</strong> – ตอนนี้ Biomatic ยังไม่มี Class ที่ใช้กำหนด Border Style เป็นแบบอื่น
          เพราะ Border Style อื่น นอกจาก solid มักไม่ค่อยมีการใช้งาน
        </p>
      </div>
      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_bdw-*</code> สำหรับ <code class="_cl-accent">border-width</code></li>
        <li>• <code class="_cl-accent">_bdlw-*</code> สำหรับ <code class="_cl-accent">border-left-width</code></li>
        <li>• <code class="_cl-accent">_bdrw-*</code> สำหรับ <code class="_cl-accent">border-right-width</code></li>
        <li>• <code class="_cl-accent">_bdtw-*</code> สำหรับ <code class="_cl-accent">border-top-width</code></li>
        <li>• <code class="_cl-accent">_bdbtw-*</code> สำหรับ <code class="_cl-accent">border-bottom-width</code></li>
        <li>• <code class="_cl-accent">_bdvw-*</code> สำหรับ <code class="_cl-accent">border-top-width</code> และ <code class="_cl-accent">border-bottom-width</code> <small class="_opct-50">(Vertical)</small></li>
        <li>• <code class="_cl-accent">_bdhw-*</code> สำหรับ <code class="_cl-accent">border-left-width</code> และ <code class="_cl-accent">border-right-width</code> <small class="_opct-50">(Horizontal)</small></li>
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
                <code class="_cl-accent">_bdw-*</code>,
                <code class="_cl-accent">_bdlw-*</code>,
                <code class="_cl-accent">_bdrw-*</code>,
                <code class="_cl-accent">_bdtw-*</code>,
                <code class="_cl-accent">_bdbtw-*</code>,
                <code class="_cl-accent">_bdvw-*</code>,
                <code class="_cl-accent">_bdhw-*</code>
              </p>
            </td>
            <td>
              <p>
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
        <strong>ตัวอย่างการใช้งาน Border Width</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Border Width--&gt;
&lt;div class="_bdw-4px"&gt;&lt;/div&gt;
&lt;div class="_bdw-8px"&gt;&lt;/div&gt;
&lt;div class="_bdw-16px"&gt;&lt;/div&gt;

&lt;!-- Border Left Width --&gt;
&lt;div class="_bdlw-4px"&gt;&lt;/div&gt;
&lt;div class="_bdlw-8px"&gt;&lt;/div&gt;
&lt;div class="_bdlw-16px"&gt;&lt;/div&gt;

&lt;!-- Border Right Width --&gt;
&lt;div class="_bdrw-4px"&gt;&lt;/div&gt;
&lt;div class="_bdrw-8px"&gt;&lt;/div&gt;
&lt;div class="_bdrw-16px"&gt;&lt;/div&gt;

&lt;!-- Border Top Width --&gt;
&lt;div class="_bdtw-4px"&gt;&lt;/div&gt;
&lt;div class="_bdtw-8px"&gt;&lt;/div&gt;
&lt;div class="_bdtw-16px"&gt;&lt;/div&gt;

&lt;!-- Border Bottom Width --&gt;
&lt;div class="_bdbtw-4px"&gt;&lt;/div&gt;
&lt;div class="_bdbtw-8px"&gt;&lt;/div&gt;
&lt;div class="_bdbtw-16px"&gt;&lt;/div&gt;

&lt;!-- Border Vertical Width --&gt;
&lt;div class="_bdvw-4px"&gt;&lt;/div&gt;
&lt;div class="_bdvw-8px"&gt;&lt;/div&gt;
&lt;div class="_bdvw-16px"&gt;&lt;/div&gt;

&lt;!-- Border Left Width with Breakpoint --&gt;
&lt;div class="_bdlw-0px _bdlw-32px-sm"&gt;&lt;/div&gt;
&lt;div class="_bdlw-0px _bdlw-32px-md"&gt;&lt;/div&gt;
&lt;div class="_bdlw-0px _bdlw-32px-lg"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-128px">
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdw-4px _mgbt-8px">_bdw-4px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdw-8px _mgbt-8px">_bdw-8px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdw-16px _mgbt-32px">_bdw-16px</div>

        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdlw-4px _mgbt-8px">_bdlw-4px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdlw-8px _mgbt-8px">_bdlw-8px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdlw-16px _mgbt-32px">_bdlw-16px</div>

        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdrw-4px _mgbt-8px">_bdrw-4px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdrw-8px _mgbt-8px">_bdrw-8px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdrw-16px _mgbt-32px">_bdrw-16px</div>

        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdtw-4px _mgbt-8px">_bdtw-4px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdtw-8px _mgbt-8px">_bdtw-8px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdtw-16px _mgbt-32px">_bdtw-16px</div>

        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdbtw-4px _mgbt-8px">_bdbtw-4px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdbtw-8px _mgbt-8px">_bdbtw-8px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdbtw-16px _mgbt-32px">_bdbtw-16px</div>

        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdvw-4px _mgbt-8px">_bdvw-4px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdvw-8px _mgbt-8px">_bdvw-8px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdvw-16px _mgbt-32px">_bdvw-16px</div>

        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdhw-4px _mgbt-8px">_bdhw-4px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdhw-8px _mgbt-8px">_bdhw-8px</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdhw-16px _mgbt-32px">_bdhw-16px</div>

        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdlw-0px _bdlw-32px-sm _mgbt-8px">_bdlw-0px _bdlw-32px-sm</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdlw-0px _bdlw-32px-md _mgbt-8px">_bdlw-0px _bdlw-32px-md</div>
        <div class="_bgcl-neutral-300 _bdcl-neutral-700 _wsp-nw _bdlw-0px _bdlw-32px-lg _mgbt-8px">_bdlw-0px _bdlw-32px-lg</div>
      </div>

      <!--
      *  Border Color
      **************************-->
      <div class="anchor" id="atomic-border-color"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-border-color" class="bio-link -primary"><strong>#</strong></a> Border Color
      </div>

      <p class="_mgbt-32px _fs-5">
        ใช้กำหนดสีของ Border
      </p>
      <p class="_mgbt-16px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_bdcl-*</code> สำหรับ <code class="_cl-accent">border-color</code></li>
      </ul>

      <p class="_mgbt-16px _fs-5">
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
                <code class="_cl-accent">_bdcl-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Biomatic's Color Name Value: </strong> <br>
                <code class="_cl-accent">primary</code>
                <code class="_cl-accent">accent</code>
                <code class="_cl-accent">neutral</code>
                <code class="_cl-accent">positive</code>
                <code class="_cl-accent">negative</code>
                <code class="_cl-accent">warning</code>
                <code class="_cl-accent">white</code>
                <code class="_cl-accent">gray</code>
                <code class="_cl-accent">dark</code>
                <code class="_cl-accent">black</code>
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
      <p class="_mgbt-4px _fs-5">
        <strong>Hover:</strong> <span class="_cl-positive"><strong>Yes</strong></span>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">*-hover</code></li>
      </ul>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Border Color</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Border Color --&gt;
&lt;div class="_bdw-2px _bdcl-primary"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-positive"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-negative"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-warning"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-info"&gt;&lt;/div&gt;

&lt;!-- Gray Scale Border Color --&gt;
&lt;div class="_bdw-2px _bdcl-white"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-gray"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-dark"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-black"&gt;&lt;/div&gt;

&lt;!-- Primary Border Color with Ligthness Modifier --&gt;
&lt;div class="_bdw-2px _bdcl-primary-900"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-800"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-700"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-600"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-500"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-400"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-300"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-200"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-primary-100"&gt;&lt;/div&gt;

&lt;!-- Accent Border Color with Ligthness Modifier --&gt;
&lt;div class="_bdw-2px _bdcl-accent-900"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-800"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-700"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-600"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-500"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-400"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-300"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-200"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-accent-100"&gt;&lt;/div&gt;

&lt;!-- Neutral Border Color with Ligthness Modifier --&gt;
&lt;div class="_bdw-2px _bdcl-neutral-900"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-800"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-700"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-600"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-500"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-400"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-300"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-200"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdcl-neutral-100"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_wsp-nw _bdw-2px _bdcl-primary _mgbt-8px">_bdcl-primary</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent _mgbt-8px">_bdcl-accent</div>
        <div class="_wsp-nw _bdw-2px _bdcl-positive _mgbt-8px">_bdcl-positive</div>
        <div class="_wsp-nw _bdw-2px _bdcl-negative _mgbt-8px">_bdcl-negative</div>
        <div class="_wsp-nw _bdw-2px _bdcl-warning _mgbt-8px">_bdcl-warning</div>
        <div class="_wsp-nw _bdw-2px _bdcl-info _mgbt-32px">_bdcl-info</div>
        <div class="_wsp-nw _bdw-2px _bdcl-white _mgbt-8px">_bdcl-white</div>
        <div class="_wsp-nw _bdw-2px _bdcl-gray _mgbt-8px">_bdcl-gray</div>
        <div class="_wsp-nw _bdw-2px _bdcl-dark _mgbt-8px">_bdcl-dark</div>
        <div class="_wsp-nw _bdw-2px _bdcl-black _mgbt-32px">_bdcl-black</div>

        <div class="_wsp-nw _bdw-2px _bdcl-primary-900 _mgbt-8px">_bdcl-primary-900</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-800 _mgbt-8px">_bdcl-primary-800</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-700 _mgbt-8px">_bdcl-primary-700</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-600 _mgbt-8px">_bdcl-primary-600</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-500 _mgbt-8px">_bdcl-primary-500</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-400 _mgbt-8px">_bdcl-primary-400</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-300 _mgbt-8px">_bdcl-primary-300</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-200 _mgbt-8px">_bdcl-primary-200</div>
        <div class="_wsp-nw _bdw-2px _bdcl-primary-100 _mgbt-32px">_bdcl-primary-100</div>

        <div class="_wsp-nw _bdw-2px _bdcl-accent-900 _mgbt-8px">_bdcl-accent-900</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-800 _mgbt-8px">_bdcl-accent-800</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-700 _mgbt-8px">_bdcl-accent-700</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-600 _mgbt-8px">_bdcl-accent-600</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-500 _mgbt-8px">_bdcl-accent-500</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-400 _mgbt-8px">_bdcl-accent-400</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-300 _mgbt-8px">_bdcl-accent-300</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-200 _mgbt-8px">_bdcl-accent-200</div>
        <div class="_wsp-nw _bdw-2px _bdcl-accent-100 _mgbt-32px">_bdcl-accent-100</div>

        <div class="_wsp-nw _bdw-2px _bdcl-neutral-900 _mgbt-8px">_bdcl-neutral-900</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-800 _mgbt-8px">_bdcl-neutral-800</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-700 _mgbt-8px">_bdcl-neutral-700</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-600 _mgbt-8px">_bdcl-neutral-600</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-500 _mgbt-8px">_bdcl-neutral-500</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-400 _mgbt-8px">_bdcl-neutral-400</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-300 _mgbt-8px">_bdcl-neutral-300</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-200 _mgbt-8px">_bdcl-neutral-200</div>
        <div class="_wsp-nw _bdw-2px _bdcl-neutral-100">_bdcl-neutral-100</div>
      </div>


      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Border Color และ hover</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Border Color --&gt;
&lt;div class="_bdw-2px _bdcl-primary"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-128px">
        <div class="_wsp-nw _bdw-2px _bdcl-primary _bdcl-negative-hover _mgbt-8px">
          _bdcl-primary _bdcl-negative-hover
        </div>
      </div>

      <!--
      *  Border Radius
      **************************-->
      <div class="anchor" id="atomic-border-radius"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-border-radius" class="bio-link -primary"><strong>#</strong></a> Border Radius
      </div>
      <p class="_mgbt-32px _fs-5">
        ใช้กำหนดรัศมีของ Border
      </p>
      <p class="_mgbt-16px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_bdrd-*</code> สำหรับ <code class="_cl-accent">border-radius</code></li>
        <li>• <code class="_cl-accent">_bdtlrd-*</code> สำหรับ <code class="_cl-accent">border-top-left-radius</code></li>
        <li>• <code class="_cl-accent">_bdtrrd-*</code> สำหรับ <code class="_cl-accent">border-top-right-radius</code></li>
        <li>• <code class="_cl-accent">_bdbtlrd-*</code> สำหรับ <code class="_cl-accent">border-bottom-left-radius</code></li>
        <li>• <code class="_cl-accent">_bdbtrrd-*</code> สำหรับ <code class="_cl-accent">border-bottom-right-radius</code></li>
      </ul>

      <p class="_mgbt-16px _fs-5">
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
                <code class="_cl-accent">_bdrd-*</code>,
                <code class="_cl-accent">_bdtlrd-*</code>,
                <code class="_cl-accent">_bdtrrd-*</code>,
                <code class="_cl-accent">_bdbtlrd-*</code>,
                <code class="_cl-accent">_bdbtrrd-*</code>
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
                <strong>Biomatic's Color Value: </strong> <br>
                <code class="_cl-accent">max</code> (9999px)
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
        <strong>ตัวอย่างการใช้งาน Border Width</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Border Radius --&gt;
&lt;div class="_bdw-2px _bdrd-2px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdrd-4px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdrd-8px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdrd-max"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdrd-50pct"&gt;&lt;/div&gt;

&lt;div class="_bdw-2px _bdtrrd-2px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-4px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-8px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-max"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-50pct"&gt;&lt;/div&gt;

&lt;div class="_bdw-2px _bdtrrd-2px _bdbtrrd-2px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-4px _bdbtrrd-4px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-8px _bdbtrrd-8px"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-max _bdbtrrd-max"&gt;&lt;/div&gt;
&lt;div class="_bdw-2px _bdtrrd-50pct _bdbtrrd-50pct"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdrd-2px _mgbt-8px">._bdrd-2px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdrd-4px _mgbt-8px">._bdrd-4px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdrd-8px _mgbt-8px">._bdrd-8px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdrd-max _mgbt-8px">._bdrd-max</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdrd-50pct _mgbt-32px">._bdrd-50pct</div>

        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-2px _mgbt-8px">._bdtrrd-2px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-4px _mgbt-8px">._bdtrrd-4px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-8px _mgbt-8px">._bdtrrd-8px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-max _mgbt-8px">._bdtrrd-max</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-50pct _mgbt-32px">._bdtrrd-50pct</div>

        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-2px _bdbtrrd-2px _mgbt-8px">._bdtrrd-2px ._bdbtrrd-2px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-4px _bdbtrrd-4px _mgbt-8px">._bdtrrd-4px ._bdbtrrd-4px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-8px _bdbtrrd-8px _mgbt-8px">._bdtrrd-8px ._bdbtrrd-8px</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-max _bdbtrrd-max _mgbt-8px">._bdtrrd-max ._bdbtrrd-max</div>
        <div class="_wsp-nw _bdw-2px _h-32px _bdcl-neutral-700 _bdtrrd-50pct _bdbtrrd-50pct">._bdtrrd-50pct ._bdbtrrd-50pct</div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicBackground' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp; Background
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicBoxPosition' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Box Position &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicBorder',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
