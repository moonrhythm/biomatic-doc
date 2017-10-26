<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-typography" class="bio-link -primary"><strong>#</strong></a> Typography
      </div>

      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Typography ประกอบด้วย
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <a class="bio-link" href="#atomic-font-size">Font Size</a></li>
        <li>• <a class="bio-link" href="#atomic-font-weight">Font Weight</a></li>
        <li>• <a class="bio-link" href="#atomic-line-height">Line Height</a></li>
        <li>• <a class="bio-link" href="#atomic-text-align">Text Align</a></li>
        <li>• <a class="bio-link" href="#atomic-text-transform">Text Transform</a></li>
        <li>• <a class="bio-link" href="#atomic-letter-spacing">Letter Spacing</a></li>
        <li>• <a class="bio-link" href="#atomic-white-space">White Space</a></li>
      </ul>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">fs</code> สำหรับ <code class="_cl-accent">font-size</code></li>
        <li>• <code class="_cl-accent">fw</code> สำหรับ <code class="_cl-accent">font-weight</code></li>
        <li>• <code class="_cl-accent">lh</code> สำหรับ <code class="_cl-accent">line-height</code></li>
        <li>• <code class="_cl-accent">tal</code> สำหรับ <code class="_cl-accent">text-align</code></li>
        <li>• <code class="_cl-accent">ttf</code> สำหรับ <code class="_cl-accent">text-transform</code></li>
        <li>• <code class="_cl-accent">ws</code> สำหรับ <code class="_cl-accent">white-space</code></li>
        <li>• <code class="_cl-accent">ltspc</code> สำหรับ <code class="_cl-accent">letter-spacing</code></li>
      </ul>

      <!--
      *  Font Size
      **************************-->
      <div class="anchor" id="atomic-font-size"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-font-size" class="bio-link -primary"><strong>#</strong></a> Font Size
      </div>
      <p class="_mgbt-32px _fs-5">
        ใช้สำหรับกำหนดขนาดของ Font Size โดย Value จะเป็นค่าระดับขนาดของ Font ตั้งแต่
        <code class="_cl-accent">1</code> ถึง <code class="_cl-accent">8</code>
      </p>

      <p class="_mgbt-16px _fs-5">
        <strong>Value</strong>
      </p>
      <table class="bio-table _mgbt-32px">
        <thead>
          <tr>
            <th class="_w-1px">Value</th>
            <th>ขนาดของ Font</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="_cl-accent">1</code></td>
            <td><code class="_cl-accent">3rem</code></td>
          </tr>
          <tr>
            <td><code class="_cl-accent">2</code></td>
            <td><code class="_cl-accent">2.5rem</code></td>
          </tr>
          <tr>
            <td><code class="_cl-accent">3</code></td>
            <td><code class="_cl-accent">2rem</code></td>
          </tr>
          <tr>
            <td><code class="_cl-accent">4</code></td>
            <td><code class="_cl-accent">1.5rem</code></td>
          </tr>
          <tr>
            <td><code class="_cl-accent">5</code></td>
            <td><code class="_cl-accent">1.25rem</code></td>
          </tr>
          <tr>
            <td><code class="_cl-accent">6</code></td>
            <td><code class="_cl-accent">1rem</code></td>
          </tr>
          <tr>
            <td><code class="_cl-accent">7</code></td>
            <td><code class="_cl-accent">0.75rem</code></td>
          </tr>
          <tr>
            <td><code class="_cl-accent">8</code></td>
            <td><code class="_cl-accent">0.5rem</code></td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Font Size</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Font Size --&gt;
&lt;p class="_fs-1"&gt;Hello World&lt;/p&gt;
&lt;p class="_fs-2"&gt;Hello World&lt;/p&gt;
&lt;p class="_fs-3"&gt;Hello World&lt;/p&gt;
&lt;p class="_fs-4"&gt;Hello World&lt;/p&gt;
&lt;p class="_fs-5"&gt;Hello World&lt;/p&gt;
&lt;p class="_fs-6"&gt;Hello World&lt;/p&gt;
&lt;p class="_fs-7"&gt;Hello World&lt;/p&gt;
&lt;p class="_fs-8"&gt;Hello World&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_fs-1">Hello World</p>
        <p class="_fs-2">Hello World</p>
        <p class="_fs-3">Hello World</p>
        <p class="_fs-4">Hello World</p>
        <p class="_fs-5">Hello World</p>
        <p class="_fs-6">Hello World</p>
        <p class="_fs-7">Hello World</p>
        <p class="_fs-8">Hello World</p>
      </div>

      <!--
      *  Font Weight
      **************************-->
      <div class="anchor" id="atomic-font-weight"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-font-weight" class="bio-link -primary"><strong>#</strong></a> Font Weight
      </div>
      <p class="_mgbt-32px _fs-5">
        ใช้สำหรับกำหนดความหนาของ Font โดย Value จะเป็นค่าที่กำหนดใน <code class="_cl-accent">font-weight</code> ระดับตั้งแต่
        <code class="_cl-accent">100</code> ถึง <code class="_cl-accent">900</code>
      </p>

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
                <code class="_cl-accent">fw</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">100</code>
                <code class="_cl-accent">200</code>
                <code class="_cl-accent">300</code>
                <code class="_cl-accent">400</code>
                <code class="_cl-accent">500</code>
                <code class="_cl-accent">600</code>
                <code class="_cl-accent">700</code>
                <code class="_cl-accent">800</code>
                <code class="_cl-accent">900</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Font Weight</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Font Weight --&gt;
&lt;p class="_fw-100"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-200"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-300"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-400"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-500"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-600"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-700"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-800"&gt;Hello World&lt;/p&gt;
&lt;p class="_fw-900"&gt;Hello World&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_fw-100">Hello World</p>
        <p class="_fw-200">Hello World</p>
        <p class="_fw-300">Hello World</p>
        <p class="_fw-400">Hello World</p>
        <p class="_fw-500">Hello World</p>
        <p class="_fw-600">Hello World</p>
        <p class="_fw-700">Hello World</p>
        <p class="_fw-800">Hello World</p>
        <p class="_fw-900">Hello World</p>
      </div>

      <!--
      *  Line Height
      **************************-->
      <div class="anchor" id="atomic-line-height"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-line-height" class="bio-link -primary"><strong>#</strong></a> Line Height
      </div>

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
                <code class="_cl-accent">lh</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Percentage Value: </strong> <br>
                <code class="_cl-accent">100pct</code>
                <code class="_cl-accent">125pct</code>
                <code class="_cl-accent">150pct</code>
                <code class="_cl-accent">175pct</code>
                <code class="_cl-accent">200pct</code>
                <code class="_cl-accent">225pct</code>
                <code class="_cl-accent">250pct</code>
                <code class="_cl-accent">275pct</code>
                <code class="_cl-accent">300pct</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Line Height</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Line Height --&gt;
&lt;p class="_lh-100pct"&gt;._lh-100pct&lt;/p&gt;
&lt;p class="_lh-125pct"&gt;._lh-125pct&lt;/p&gt;
&lt;p class="_lh-150pct"&gt;._lh-150pct&lt;/p&gt;
&lt;p class="_lh-175pct"&gt;._lh-175pct&lt;/p&gt;
&lt;p class="_lh-200pct"&gt;._lh-200pct&lt;/p&gt;
&lt;p class="_lh-225pct"&gt;._lh-225pct&lt;/p&gt;
&lt;p class="_lh-250pct"&gt;._lh-250pct&lt;/p&gt;
&lt;p class="_lh-275pct"&gt;._lh-275pct&lt;/p&gt;
&lt;p class="_lh-300pct"&gt;._lh-300pct&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_lh-100pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-100pct</p>
        <p class="_lh-125pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-125pct</p>
        <p class="_lh-150pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-150pct</p>
        <p class="_lh-175pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-175pct</p>
        <p class="_lh-200pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-200pct</p>
        <p class="_lh-225pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-225pct</p>
        <p class="_lh-250pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-250pct</p>
        <p class="_lh-275pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-275pct</p>
        <p class="_lh-300pct _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _mgbt-8px _bgcl-white">._lh-300pct</p>
      </div>

      <!--
      *  Text Align
      **************************-->
      <div class="anchor" id="atomic-text-align"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-text-align" class="bio-link -primary"><strong>#</strong></a> Text Align
      </div>

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
                <code class="_cl-accent">tal</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">l</code> สำหรับ "left"<br>
                <code class="_cl-accent">r</code> สำหรับ "right"<br>
                <code class="_cl-accent">ct</code> สำหรับ "center"<br>
                <code class="_cl-accent">jtf</code> สำหรับ "justify"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Text Align</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Text Align --&gt;
&lt;p class="_tal-l"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque sit amet vel velit finibus ullamcorper.
  Aenean in tellus vel nibh imperdiet semper eget eu turpis
&lt;/p&gt;
&lt;p class="_tal-r"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque sit amet vel velit finibus ullamcorper.
  Aenean in tellus vel nibh imperdiet semper eget eu turpis
&lt;/p&gt;
&lt;p class="_tal-ct"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque sit amet vel velit finibus ullamcorper.
  Aenean in tellus vel nibh imperdiet semper eget eu turpis
&lt;/p&gt;
&lt;p class="_tal-jtf"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque sit amet vel velit finibus ullamcorper.
  Aenean in tellus vel nibh imperdiet semper eget eu turpis
&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_tal-l _mgbt-8px _bdw-2px _bdcl-neutral-500 _bd-1px _bdcl-neutral-400 _bgcl-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque sit amet vel velit finibus ullamcorper.
          Aenean in tellus vel nibh imperdiet semper eget eu turpis
        </p>
        <p class="_tal-r _mgbt-8px _bdw-2px _bdcl-neutral-500 _bd-1px _bdcl-neutral-400 _bgcl-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque sit amet vel velit finibus ullamcorper.
          Aenean in tellus vel nibh imperdiet semper eget eu turpis
        </p>
        <p class="_tal-ct _mgbt-8px _bdw-2px _bdcl-neutral-500 _bd-1px _bdcl-neutral-400 _bgcl-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque sit amet vel velit finibus ullamcorper.
          Aenean in tellus vel nibh imperdiet semper eget eu turpis
        </p>
        <p class="_tal-jtf _bd-1px _bdw-2px _bdcl-neutral-500 _bdcl-neutral-400 _bgcl-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque sit amet vel velit finibus ullamcorper.
          Aenean in tellus vel nibh imperdiet semper eget eu turpis
        </p>
      </div>

      <!--
      *  Letter Spacing
      **************************-->
      <div class="anchor" id="atomic-letter-spacing"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-letter-spacing" class="bio-link -primary"><strong>#</strong></a> Letter Spacing
      </div>

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
                <code class="_cl-accent">ltspc</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Pixel Value: </strong> <br>
                <code class="_cl-accent">1px</code>
                <code class="_cl-accent">2px</code>
                <code class="_cl-accent">4px</code>
                <code class="_cl-accent">8px</code>
                <code class="_cl-accent">16px</code>
                <code class="_cl-accent">32px</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Letter Spacing</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Line Height --&gt;
&lt;p class="_ltspc-1px"&gt;Meowwloo&lt;/p&gt;
&lt;p class="_ltspc-2px"&gt;Meowwloo&lt;/p&gt;
&lt;p class="_ltspc-4px"&gt;Meowwloo&lt;/p&gt;
&lt;p class="_ltspc-8px"&gt;Meowwloo&lt;/p&gt;
&lt;p class="_ltspc-16px"&gt;Meowwloo&lt;/p&gt;
&lt;p class="_ltspc-32px"&gt;Meowwloo&lt;/p&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <p class="_ltspc-1px _mgbt-8px">Meowwloo</p>
        <p class="_ltspc-2px _mgbt-8px">Meowwloo</p>
        <p class="_ltspc-4px _mgbt-8px">Meowwloo</p>
        <p class="_ltspc-8px _mgbt-8px">Meowwloo</p>
        <p class="_ltspc-16px _mgbt-8px">Meowwloo</p>
        <p class="_ltspc-32px">Meowwloo</p>
      </div>

      <!--
      *  White Space
      **************************-->
      <div class="anchor" id="atomic-white-space"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-white-space" class="bio-link -primary"><strong>#</strong></a> White Space
      </div>

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
                <code class="_cl-accent">wsp</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">nm</code> สำหรับ "normal" <br>
                <code class="_cl-accent">nw</code> สำหรับ "no-wrap" <br>
                <code class="_cl-accent">p</code> สำหรับ "pre" <br>
                <code class="_cl-accent">pl</code> สำหรับ "pre-line" <br>
                <code class="_cl-accent">pw</code> สำหรับ "pre-wrap"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน White Space</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- White Space --&gt;
&lt;div class="_wsp-nm"&gt;   A B C D E F&lt;/div&gt;
&lt;div class="_wsp-nw"&gt;   A B C D E F&lt;/div&gt;
&lt;div class="_wsp-p"&gt;   A B C D E F&lt;/div&gt;
&lt;div class="_wsp-pl"&gt;   A B C D E F&lt;/div&gt;
&lt;div class="_wsp-pw"&gt;   A B C D E F&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_wsp-nm _w-64px _bdw-2px _bdcl-neutral-500 _h-64px _mgbt-8px _bd-1px _bdcl-neutral-400 _bgcl-white">   A B C D E F</div>
        <div class="_wsp-nw _w-64px _bdw-2px _bdcl-neutral-500 _h-64px _mgbt-8px _bd-1px _bdcl-neutral-400 _bgcl-white">   A B C D E F</div>
        <div class="_wsp-p _w-64px _bdw-2px _bdcl-neutral-500 _h-64px _mgbt-8px _bd-1px _bdcl-neutral-400 _bgcl-white">   A B C D E F</div>
        <div class="_wsp-pl _w-64px _bdw-2px _bdcl-neutral-500 _h-64px _mgbt-8px _bd-1px _bdcl-neutral-400 _bgcl-white">   A B C D E F</div>
        <div class="_wsp-pw _w-64px _bdw-2px _bdcl-neutral-500 _h-64px _mgbt-8px _bd-1px _bdcl-neutral-400 _bgcl-white">   A B C D E F</div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicPadding' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Padding
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
  name: 'AtomicTypography',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
