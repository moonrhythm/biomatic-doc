<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-border" class="bio-link -primary"><strong>#</strong></a> Background
      </div>

      <p class="_mgbt-4px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Background ประกอบด้วย
      </p>
      <ul class="_mgbt-128px _fs-5 _lh-175pct _pdl-16px">
        <li>• <a class="bio-link" href="#atomic-background-color">Background Color</a></li>
        <li>• <a class="bio-link" href="#atomic-background-size">Background Size</a></li>
        <li>• <a class="bio-link" href="#atomic-background-repeat">Background Repeat</a></li>
        <li>• <a class="bio-link" href="#atomic-background-position">Background Position</a></li>
      </ul>

      <!--
      *  Background Color
      **************************-->
      <div class="anchor" id="atomic-background-color"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-background-color" class="bio-link -primary"><strong>#</strong></a> Background Color
      </div>
      <p class="_mgbt-64px _fs-5">
        ใช้กำหนดสีของ Background ให้กับ Element
      </p>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_bgcl-*</code> สำหรับ <code class="_cl-accent">background-color</code></li>
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
                <code class="_cl-accent">_bgcl-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Biomatic's Color Name Value: </strong> <br>
                <code class="_cl-accent">primary[-{100-900}]</code>
                <code class="_cl-accent">accent[-{100-900}]</code>
                <code class="_cl-accent">neutral[-{100-900}]</code>
                <code class="_cl-accent">positive</code>
                <code class="_cl-accent">negative</code>
                <code class="_cl-accent">warning</code>
                <code class="_cl-accent">white</code>
                <code class="_cl-accent">gray</code>
                <code class="_cl-accent">dark</code>
                <code class="_cl-accent">black</code>
              </p>
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
        <strong>ตัวอย่างการใช้งาน Background Color – Branding Color</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Primary Color --&gt;
&lt;div&gt;
  &lt;div class="_bgcl-primary"&gt;primary&lt;/div&gt;
  &lt;div class="_bgcl-primary-100"&gt;primary-100&lt;/div&gt;
  &lt;div class="_bgcl-primary-200"&gt;primary-200&lt;/div&gt;
  &lt;div class="_bgcl-primary-300"&gt;primary-300&lt;/div&gt;
  &lt;div class="_bgcl-primary-400"&gt;primary-400&lt;/div&gt;
  &lt;div class="_bgcl-primary-500"&gt;primary-500&lt;/div&gt;
  &lt;div class="_bgcl-primary-600"&gt;primary-600&lt;/div&gt;
  &lt;div class="_bgcl-primary-700"&gt;primary-700&lt;/div&gt;
  &lt;div class="_bgcl-primary-800"&gt;primary-800&lt;/div&gt;
  &lt;div class="_bgcl-primary-900"&gt;primary-900&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Accent Color --&gt;
&lt;div&gt;
  &lt;div class="_bgcl-accent"&gt;accent&lt;/div&gt;
  &lt;div class="_bgcl-accent-100"&gt;accent-100&lt;/div&gt;
  &lt;div class="_bgcl-accent-200"&gt;accent-200&lt;/div&gt;
  &lt;div class="_bgcl-accent-300"&gt;accent-300&lt;/div&gt;
  &lt;div class="_bgcl-accent-400"&gt;accent-400&lt;/div&gt;
  &lt;div class="_bgcl-accent-500"&gt;accent-500&lt;/div&gt;
  &lt;div class="_bgcl-accent-600"&gt;accent-600&lt;/div&gt;
  &lt;div class="_bgcl-accent-700"&gt;accent-700&lt;/div&gt;
  &lt;div class="_bgcl-accent-800"&gt;accent-800&lt;/div&gt;
  &lt;div class="_bgcl-accent-900"&gt;accent-900&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Neutral Color --&gt;
&lt;div&gt;
  &lt;div class="_bgcl-neutral"&gt;neutral&lt;/div&gt;
  &lt;div class="_bgcl-neutral-100"&gt;neutral-100&lt;/div&gt;
  &lt;div class="_bgcl-neutral-200"&gt;neutral-200&lt;/div&gt;
  &lt;div class="_bgcl-neutral-300"&gt;neutral-300&lt;/div&gt;
  &lt;div class="_bgcl-neutral-400"&gt;neutral-400&lt;/div&gt;
  &lt;div class="_bgcl-neutral-500"&gt;neutral-500&lt;/div&gt;
  &lt;div class="_bgcl-neutral-600"&gt;neutral-600&lt;/div&gt;
  &lt;div class="_bgcl-neutral-700"&gt;neutral-700&lt;/div&gt;
  &lt;div class="_bgcl-neutral-800"&gt;neutral-800&lt;/div&gt;
  &lt;div class="_bgcl-neutral-900"&gt;neutral-900&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="lo-12 lo-4-sm -gap-16px">
          <div>
            <div class="_bgcl-primary _cl-white _h-128px _bdtrrd-3px _bdtlrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">primary</strong></div>
            <div class="_bgcl-primary-100 _cl-neutral-800 _pd-12px _dp-f _alit-fe"><strong>primary-100</strong></div>
            <div class="_bgcl-primary-200 _cl-neutral-800 _pd-12px _dp-f _alit-fe"><strong>primary-200</strong></div>
            <div class="_bgcl-primary-300 _cl-neutral-900 _pd-12px _dp-f _alit-fe"><strong>primary-300</strong></div>
            <div class="_bgcl-primary-400 _cl-neutral-900 _pd-12px _dp-f _alit-fe"><strong>primary-400</strong></div>
            <div class="_bgcl-primary-500 _cl-white _pd-12px _dp-f _alit-fe"><strong>primary-500</strong></div>
            <div class="_bgcl-primary-600 _cl-white _pd-12px _dp-f _alit-fe"><strong>primary-600</strong></div>
            <div class="_bgcl-primary-700 _cl-white _pd-12px _dp-f _alit-fe"><strong>primary-700</strong></div>
            <div class="_bgcl-primary-800 _cl-white _pd-12px _dp-f _alit-fe"><strong>primary-800</strong></div>
            <div class="_bgcl-primary-900 _cl-white _pd-12px _bdbtrrd-3px _bdbtlrd-3px _dp-f _alit-fe"><strong>primary-900</strong></div>
          </div>

          <div>
            <div class="_bgcl-accent _cl-white _h-128px _bdtrrd-3px _bdtlrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">accent</strong></div>
            <div class="_bgcl-accent-100 _cl-neutral-800 _pd-12px _dp-f _alit-fe"><strong>accent-100</strong></div>
            <div class="_bgcl-accent-200 _cl-neutral-800 _pd-12px _dp-f _alit-fe"><strong>accent-200</strong></div>
            <div class="_bgcl-accent-300 _cl-neutral-900 _pd-12px _dp-f _alit-fe"><strong>accent-300</strong></div>
            <div class="_bgcl-accent-400 _cl-neutral-900 _pd-12px _dp-f _alit-fe"><strong>accent-400</strong></div>
            <div class="_bgcl-accent-500 _cl-white _pd-12px _dp-f _alit-fe"><strong>accent-500</strong></div>
            <div class="_bgcl-accent-600 _cl-white _pd-12px _dp-f _alit-fe"><strong>accent-600</strong></div>
            <div class="_bgcl-accent-700 _cl-white _pd-12px _dp-f _alit-fe"><strong>accent-700</strong></div>
            <div class="_bgcl-accent-800 _cl-white _pd-12px _dp-f _alit-fe"><strong>accent-800</strong></div>
            <div class="_bgcl-accent-900 _cl-white _pd-12px _bdbtrrd-3px _bdbtlrd-3px _dp-f _alit-fe"><strong>accent-900</strong></div>
          </div>

          <div>
            <div class="_bgcl-neutral _cl-white _h-128px _bdtrrd-3px _bdtlrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">neutral</strong></div>
            <div class="_bgcl-neutral-100 _cl-neutral-800 _pd-12px _dp-f _alit-fe"><strong>neutral-100</strong></div>
            <div class="_bgcl-neutral-200 _cl-neutral-800 _pd-12px _dp-f _alit-fe"><strong>neutral-200</strong></div>
            <div class="_bgcl-neutral-300 _cl-neutral-900 _pd-12px _dp-f _alit-fe"><strong>neutral-300</strong></div>
            <div class="_bgcl-neutral-400 _cl-neutral-900 _pd-12px _dp-f _alit-fe"><strong>neutral-400</strong></div>
            <div class="_bgcl-neutral-500 _cl-white _pd-12px _dp-f _alit-fe"><strong>neutral-500</strong></div>
            <div class="_bgcl-neutral-600 _cl-white _pd-12px _dp-f _alit-fe"><strong>neutral-600</strong></div>
            <div class="_bgcl-neutral-700 _cl-white _pd-12px _dp-f _alit-fe"><strong>neutral-700</strong></div>
            <div class="_bgcl-neutral-800 _cl-white _pd-12px _dp-f _alit-fe"><strong>neutral-800</strong></div>
            <div class="_bgcl-neutral-900 _cl-white _pd-12px _bdbtrrd-3px _bdbtlrd-3px _dp-f _alit-fe"><strong>neutral-900</strong></div>
          </div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Background Color – Semantic Color</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Semantic Color --&gt;
&lt;div class="_bgcl-positive"&gt;positive&lt;/div&gt;
&lt;div class="_bgcl-negative"&gt;negative&lt;/div&gt;
&lt;div class="_bgcl-warning"&gt;warning&lt;/div&gt;
&lt;div class="_bgcl-info"&gt;info&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="lo-12 lo-4-sm -gap-16px">
          <div class="_bgcl-positive _cl-white _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">positive</strong></div>
          <div class="_bgcl-negative _cl-white _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">negative</strong></div>
          <div class="_bgcl-warning _cl-white _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">warning</strong></div>
          <div class="_bgcl-info _cl-white _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">info</strong></div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Background Color – Grayscale Color</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Grayscale Color --&gt;
&lt;div class="_bgcl-positive"&gt;positive&lt;/div&gt;
&lt;div class="_bgcl-negative"&gt;negative&lt;/div&gt;
&lt;div class="_bgcl-warning"&gt;warning&lt;/div&gt;
&lt;div class="_bgcl-info"&gt;info&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="lo-12 lo-4-sm -gap-16px">
          <div class="_bgcl-white _cl-neutral-700 _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">white</strong></div>
          <div class="_bgcl-gray _cl-neutral-700 _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">gray</strong></div>
          <div class="_bgcl-dark _cl-white _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">dark</strong></div>
          <div class="_bgcl-black _cl-white _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">black</strong></div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Background Color – Hover</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="_bgcl-positive _bgcl-negative-hover"&gt;Hover Me&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-128px">
        <div class="lo-12 lo-4-sm -gap-16px">
          <div class="_bgcl-positive _bgcl-negative-hover _cl-white _h-128px _bdrd-3px _pd-12px _dp-f _alit-fe"><strong class="_fs-4">Hover Me</strong></div>
        </div>
      </div>

      <!--
      *  Background Size
      **************************-->
      <div class="anchor" id="atomic-background-size"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-background-size" class="bio-link -primary"><strong>#</strong></a> Background Size
      </div>
      <p class="_mgbt-64px _fs-5">
        ใช้กำหนดรูปแบบการ Fill ของ Background Image
      </p>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_bgs-*</code> สำหรับ <code class="_cl-accent">background-size</code></li>
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
                <code class="_cl-accent">_bgs-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">cv</code> สำหรับ "cover" <br>
                <code class="_cl-accent">ct</code> สำหรับ "contain"
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
        <strong>ตัวอย่างการใช้งาน Background Size</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class=""&gt;&lt;/div&gt;
&lt;div class="_bgs-ct"&gt;&lt;/div&gt;
&lt;div class="_bgs-cv"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-128px">
        <div class="_mgbt-32px">
          <h5 class="_mgbt-8px">Original Image</h5>
          <img src="https://placeimg.com/200/200/animals" alt="image">
        </div>
        <div class="lo-12 lo-4-sm -gap-16px">
          <div>
            <h5 class="_mgbt-8px">Default</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Contain</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image _bgs-ct"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Cover</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image _bgs-cv"></div>
          </div>
        </div>
      </div>

      <!--
      *  Background Repeat
      **************************-->
      <div class="anchor" id="atomic-background-repeat"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-background-repeat" class="bio-link -primary"><strong>#</strong></a> Background Repeat
      </div>
      <p class="_mgbt-64px _fs-5">
        ใช้กำหนดรูปแบบการ Repeat ของ Background Image
      </p>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_bgrp-*</code> สำหรับ <code class="_cl-accent">background-repeat</code></li>
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
                <code class="_cl-accent">_bgrp-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">rp</code> สำหรับ "repeat" <small class="_opct-50">(default)</small>  <br>
                <code class="_cl-accent">rpx</code> สำหรับ "repeat-x" <br>
                <code class="_cl-accent">rpy</code> สำหรับ "repeat-y" <br>
                <code class="_cl-accent">nrp</code> สำหรับ "no-repeat" <br>
                <code class="_cl-accent">sp</code> สำหรับ "space" <br>
                <code class="_cl-accent">r</code> สำหรับ "round"
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
        <strong>ตัวอย่างการใช้งาน Background Repeat</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="_bgrp-rp"&gt;&lt;/div&gt;
&lt;div class="_bgrp-rpx"&gt;&lt;/div&gt;
&lt;div class="_bgrp-rpy"&gt;&lt;/div&gt;
&lt;div class="_bgrp-nrp"&gt;&lt;/div&gt;
&lt;div class="_bgrp-sp"&gt;&lt;/div&gt;
&lt;div class="_bgrp-r"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-128px">
        <div class="_mgbt-32px">
          <h5 class="_mgbt-8px">Original Image</h5>
          <img src="https://placeimg.com/40/40/animals" alt="image">
        </div>
        <div class="lo-12 lo-4-sm -gap-16px">
          <div>
            <h5 class="_mgbt-8px">Default/ Repeat</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Repeat X</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-rpx"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Repeat Y</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-rpy"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">No Repeat</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Space</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-sp"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Round</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-r"></div>
          </div>
        </div>
      </div>

      <!--
      *  Background Position
      **************************-->
      <div class="anchor" id="atomic-background-position"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-background-position" class="bio-link -primary"><strong>#</strong></a> Background Position
      </div>
      <p class="_mgbt-64px _fs-5">
        ใช้กำหนดรูปแบบการตำแหน่งของ Background
      </p>

      <p class="_mgbt-4px _fs-5">
        <strong>Class Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">_bgpst-*</code> สำหรับ <code class="_cl-accent">background-position</code></li>
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
                <code class="_cl-accent">_bgpst-*</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Keyword Value: </strong> <br>
                <code class="_cl-accent">t</code> สำหรับ "top" <small class="_opct-50">(default)</small>  <br>
                <code class="_cl-accent">tr</code> สำหรับ "top right" <br>
                <code class="_cl-accent">tl</code> สำหรับ "top left" <br>
                <code class="_cl-accent">bt</code> สำหรับ "bottom" <br>
                <code class="_cl-accent">btr</code> สำหรับ "bottom right" <br>
                <code class="_cl-accent">btl</code> สำหรับ "bottom left" <br>
                <code class="_cl-accent">ct</code> สำหรับ "center" <br>
                <code class="_cl-accent">ctr</code> สำหรับ "center right" <br>
                <code class="_cl-accent">ctl</code> สำหรับ "center left"
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
        <strong>ตัวอย่างการใช้งาน Background Repeat</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="_bgpst-tl"&gt;&lt;/div&gt;
&lt;div class="_bgpst-t"&gt;&lt;/div&gt;
&lt;div class="_bgpst-tr"&gt;&lt;/div&gt;
&lt;div class="_bgpst-ctl"&gt;&lt;/div&gt;
&lt;div class="_bgpst-ct"&gt;&lt;/div&gt;
&lt;div class="_bgpst-ctr"&gt;&lt;/div&gt;
&lt;div class="_bgpst-btl"&gt;&lt;/div&gt;
&lt;div class="_bgpst-bt"&gt;&lt;/div&gt;
&lt;div class="_bgpst-btr"&gt;&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-128px">
        <div class="lo-12 lo-4-sm -gap-16px">
          <div>
            <h5 class="_mgbt-8px">Top Left</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-tl"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Top</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-t"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Top Right</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-tr"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Center Left</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-ctl"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Center</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-ct"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Center Right</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-ctr"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Bottom Left</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-btl"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Bottom</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-bt"></div>
          </div>
          <div>
            <h5 class="_mgbt-8px">Bottom Right</h5>
            <div class="_bgcl-neutral-300 _h-128px _bdrd-3px _pd-12px test-background-image-2 _bgrp-nrp _bgpst-btr"></div>
          </div>
        </div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicAlignment' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp; Alignment
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicBorder' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Border &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'AtomicBackground',

  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>

  .test-background-image {
    background-image: url("https://placeimg.com/200/200/animals");
  }
  .test-background-image-2 {
    background-image: url("https://placeimg.com/40/40/animals");
  }

</style>

