<template>
  <div>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#atomic-alignment" class="bio-link -primary"><strong>#</strong></a> Alignment
      </div>

      <p class="_mgbt-8px _fs-5">
        Alignment คือ Atomic Class ที่ใช้จัดการ Alignment สำหรับ Flex Layout และ Grid Layout ประกอบไปด้วย
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <a class="bio-link" href="#atomic-flex-direction">Flex Direction</a></li>
        <li>• <a class="bio-link" href="#atomic-flex-wrap">Flex Wrap</a></li>
        <li>• <a class="bio-link" href="#atomic-flex">Flex</a></li>
        <li>• <a class="bio-link" href="#atomic-align-items">Align Items</a></li>
        <li>• <a class="bio-link" href="#atomic-align-items">Justify Items</a></li>
        <li>• <a class="bio-link" href="#atomic-align-content">Align Content</a></li>
        <li>• <a class="bio-link" href="#atomic-align-content">Justify Content</a></li>
        <li>• <a class="bio-link" href="#atomic-align-self">Align Self</a></li>
        <li>• <a class="bio-link" href="#atomic-align-self">Justify Self</a></li>
      </ul>

      <!--
      *  Flex Direction
      **************************-->
      <div class="anchor" id="atomic-flex-direction"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-flex-direction" class="bio-link -primary"><strong>#</strong></a> Flex Direction
      </div>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">fdrt</code> สำหรับ <code class="_cl-accent">flex-direction</code></li>
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
                <code class="_cl-accent">fdrt</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">r</code> สำหรับ "row" <br>
                <code class="_cl-accent">cl</code> สำหรับ "column"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Flex Direction</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Flex Direction – Row --&gt;
&lt;div class="_dp-f _fdrt-r"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Flex Direction – Column --&gt;
&lt;div class="_dp-f _fdrt-cl"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div>Row</div>
        <div class="_dp-f _fdrt-r _mgbt-32px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>

        <div>Column</div>
        <div class="_dp-f _fdrt-cl">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
      </div>


      <!--
      *  Flex Wrap
      **************************-->
      <div class="anchor" id="atomic-flex-wrap"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-flex-wrap" class="bio-link -primary"><strong>#</strong></a> Flex Wrap
      </div>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">fw</code> สำหรับ <code class="_cl-accent">flex-wrap</code></li>
      </ul>
      <div class="bio-message -info _fs-6 _mgbt-32px">
        <p>
          <strong>คำแนะนำ</strong> – flex-wrap ใช้ Name <code class="_cl-accent">fw</code> เช่นเดี่ยวกับ font-weight
        </p>
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
                <code class="_cl-accent">fw</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">nw</code> สำหรับ "nowrap" <br>
                <code class="_cl-accent">w</code> สำหรับ "wrap" <br>
                <code class="_cl-accent">wrv</code> สำหรับ "wrap-reverse"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Flex Wrap</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Wrap --&gt;
&lt;div class="_dp-f _fw-w _h-64px"&gt;
  &lt;div class="_w-50pct"&gt;item 1&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 2&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 3&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- No Wrap --&gt;
&lt;div class="_dp-f _fw-nw _h-64px"&gt;
  &lt;div class="_w-50pct"&gt;item 1&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 2&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 3&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 4&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Wrap Reverse --&gt;
&lt;div class="_dp-f _fw-wrv _h-64px"&gt;
  &lt;div class="_w-50pct"&gt;item 1&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 2&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 3&lt;/div&gt;
  &lt;div class="_w-50pct"&gt;item 4&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        Wrap
        <div class="_dp-f _fw-w _h-64px _mgbt-32px _bdw-2px _bgcl-neutral-400">
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 1</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 2</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 3</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 4</div>
        </div>
        No Wrap
        <div class="_dp-f _fw-nw _h-64px _mgbt-32px _bdw-2px _bgcl-neutral-400">
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 1</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 2</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 3</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 4</div>
        </div>
        Wrap Reverse
        <div class="_dp-f _fw-wrv _h-64px _mgbt-8px _bdw-2px _bgcl-neutral-400">
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 1</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 2</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 3</div>
          <div class="_bgcl-neutral-300 _w-50pct _bdw-2px _bdcl-neutral-700">item 4</div>
        </div>
      </div>

       <!--
      *  Flex
      **************************-->
      <div class="anchor" id="atomic-flex"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-flex" class="bio-link -primary"><strong>#</strong></a> Flex
      </div>

      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">f</code> สำหรับ <code class="_cl-accent">flex</code></li>
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
                <code class="_cl-accent">f</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">1</code>
                <code class="_cl-accent">2</code>
                <code class="_cl-accent">3</code>
                <code class="_cl-accent">4</code>
                <code class="_cl-accent">5</code>
                <code class="_cl-accent">6</code>
                <code class="_cl-accent">7</code>
                <code class="_cl-accent">8</code>
                <code class="_cl-accent">9</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Flex Wrap</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Flex --&gt;
&lt;div class="_dp-f _h-64px"&gt
  &lt;div class="_f-1"&gtflex 1&lt;/div&gt
&lt;/div&gt

&lt;div class="_dp-f _h-64px"&gt
  &lt;div class="_f-1"&gtflex 1&lt;/div&gt
  &lt;div class="_f-1"&gtflex 1&lt;/div&gt
&lt;/div&gt

&lt;div class="_dp-f _h-64px"&gt
  &lt;div class="_f-1"&gtflex 1&lt;/div&gt
  &lt;div class="_f-4"&gtflex 4&lt;/div&gt
&lt;/div&gt

&lt;div class="_dp-f _h-64px"&gt
  &lt;div class="_f-1"&gtflex 1&lt;/div&gt
  &lt;div class="_f-4"&gtflex 4&lt;/div&gt
  &lt;div class="_f-1"&gtflex 1&lt;/div&gt
&lt;/div&gt</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_dp-f _h-64px _mgbt-16px _bdw-2px _bgcl-neutral-400">
          <div class="_bgcl-neutral-300 _f-1 _bdw-2px _bdcl-neutral-700">flex 1</div>
        </div>
        <div class="_dp-f _h-64px _mgbt-16px _bdw-2px _bgcl-neutral-400">
          <div class="_bgcl-neutral-300 _f-1 _bdw-2px _bdcl-neutral-700">flex 1</div>
          <div class="_bgcl-neutral-300 _f-1 _bdw-2px _bdcl-neutral-700">flex 1</div>
        </div>
        <div class="_dp-f _h-64px _mgbt-16px _bdw-2px _bgcl-neutral-400">
          <div class="_bgcl-neutral-300 _f-1 _bdw-2px _bdcl-neutral-700">flex 1</div>
          <div class="_bgcl-neutral-300 _f-4 _bdw-2px _bdcl-neutral-700">flex 4</div>
        </div>
        <div class="_dp-f _h-64px _mgbt-8px _bdw-2px _bgcl-neutral-400">
          <div class="_bgcl-neutral-300 _f-1 _bdw-2px _bdcl-neutral-700">flex 1</div>
          <div class="_bgcl-neutral-300 _f-4 _bdw-2px _bdcl-neutral-700">flex 4</div>
          <div class="_bgcl-neutral-300 _f-1 _bdw-2px _bdcl-neutral-700">flex 1</div>
        </div>
      </div>

      <!--
      *  Align Items, Justify Items
      **************************-->
      <div class="anchor" id="atomic-align-items"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-align-items" class="bio-link -primary"><strong>#</strong></a> Align Items, Justify Items
      </div>
      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ Alignment Content ด้านใน Container <br>
        ใช้ Align Items เพื่อจัดในแกน Cross-Axis <br>
        ใช้ Justify Items เพื่อจัดในแกน Main-Axis
      </p>
      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">alit</code> สำหรับ <code class="_cl-accent">align-items</code></li>
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
                <code class="_cl-accent">alit</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">st</code> สำหรับ "start" <br>
                <code class="_cl-accent">e</code> สำหรับ "end" <br>
                <code class="_cl-accent">fst</code> สำหรับ "flex-start" <br>
                <code class="_cl-accent">fe</code> สำหรับ "flex-end" <br>
                <code class="_cl-accent">ct</code> สำหรับ "center" <br>
                <code class="_cl-accent">str</code> สำหรับ "strecth"
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Align Items – Row --&gt;
&lt;div class="_dp-f _h-64px _alit-ct"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;
&lt;div class="_dp-f _h-64px _alit-fst"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;
&lt;div class="_dp-f _h-64px _alit-fe"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;
&lt;div class="_dp-f _h-64px _alit-str"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Align Items – Column --&gt;
&lt;div class="_dp-f _fdrt-cl _h-64px _alit-ct"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;
&lt;div class="_dp-f _fdrt-cl _h-64px _alit-fst"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;
&lt;div class="_dp-f _fdrt-cl _h-64px _alit-fe"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;
&lt;div class="_dp-f _fdrt-cl _h-64px _alit-str"&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_dp-f _h-64px _alit-ct _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        <div class="_dp-f _h-64px _alit-fst _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        <div class="_dp-f _h-64px _alit-fe _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        <div class="_dp-f _h-64px _alit-str _bdw-2px _bdcl-neutral-400 _mgbt-32px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>

        <div class="_dp-f _fdrt-cl _h-64px _alit-ct _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        <div class="_dp-f _fdrt-cl _h-64px _alit-fst _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        <div class="_dp-f _fdrt-cl _h-64px _alit-fe _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        <div class="_dp-f _fdrt-cl _h-64px _alit-str _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
      </div>

      <!--
      *  Align Content, Justify Content
      **************************-->
      <div class="anchor" id="atomic-align-content"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-align-content" class="bio-link -primary"><strong>#</strong></a> Align Content, Justify Content
      </div>
      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้จัดการ การะกระจาย Content ด้านใน Container <br>
        ใช้ Align Content เพื่อจัดในแกน Cross-Axis <br>
        ใช้ Justify Content เพื่อจัดในแกน Main-Axis
      </p>
      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">alct</code> สำหรับ <code class="_cl-accent">align-content</code></li>
        <li>• <code class="_cl-accent">jtfct</code> สำหรับ <code class="_cl-accent">justify-content</code></li>
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
                <code class="_cl-accent">alct</code>
                <code class="_cl-accent">jtfct</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">st</code> สำหรับ "start" <br>
                <code class="_cl-accent">e</code> สำหรับ "end" <br>
                <code class="_cl-accent">l</code> สำหรับ "left" <br>
                <code class="_cl-accent">r</code> สำหรับ "right" <br>
                <code class="_cl-accent">fst</code> สำหรับ "flex-start" <br>
                <code class="_cl-accent">fe</code> สำหรับ "flex-end" <br>
                <code class="_cl-accent">str</code> สำหรับ "stretch" <br>
                <code class="_cl-accent">spbtw</code> สำหรับ "space-between" <br>
                <code class="_cl-accent">spar</code> สำหรับ "space-around" <br>
                <code class="_cl-accent">spevl</code> สำหรับ "space-evenly"
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Center --&gt;
&lt;div class="_dp-f _h-64px _jtfct-ct"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Flex Start --&gt;
&lt;div class="_dp-f _h-64px _jtfct-fst"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Flex End --&gt;
&lt;div class="_dp-f _h-64px _jtfct-fe"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Space Between --&gt;
&lt;div class="_dp-f _h-64px _jtfct-spbtw"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Space Around --&gt;
&lt;div class="_dp-f _h-64px _jtfct-spar"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Space Evenly --&gt;
&lt;div class="_dp-f _h-64px _jtfct-spevl"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        Center
        <div class="_dp-f _h-64px _jtfct-ct _bdw-2px _bdcl-neutral-400 _mgbt-12px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        Flex Start
        <div class="_dp-f _h-64px _jtfct-fst _bdw-2px _bdcl-neutral-400 _mgbt-12px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        Flex End
        <div class="_dp-f _h-64px _jtfct-fe _bdw-2px _bdcl-neutral-400 _mgbt-12px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        Space Between
        <div class="_dp-f _h-64px _jtfct-spbtw _bdw-2px _bdcl-neutral-400 _mgbt-12px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        Space Around
        <div class="_dp-f _h-64px _jtfct-spar _bdw-2px _bdcl-neutral-400 _mgbt-12px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
        Space Evenly
        <div class="_dp-f _h-64px _jtfct-spevl _bdw-2px _bdcl-neutral-400 _mgbt-8px">
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
          <div class="_bgcl-neutral-300 _bdw-2px _bdcl-neutral-700">item</div>
        </div>
      </div>

      <!--
      *  Align Self, Justify Self
      **************************-->
      <div class="anchor" id="atomic-align-self"></div>
      <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#atomic-align-self" class="bio-link -primary"><strong>#</strong></a> Align Self, Justify Self
      </div>
      <p class="_mgbt-8px _fs-5">
        เป็น Atomic Class ที่ใช้ที่ Content เพื่อบอกการจัดวางของตัวเอง ภายใน Container  <br>
        ใช้ Align Self เพื่อจัดในแกน Cross-Axis <br>
        ใช้ Justify Self เพื่อจัดในแกน Main-Axis
      </p>
      <p class="_mgbt-16px _fs-5">
        <strong>Name</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">als</code> สำหรับ <code class="_cl-accent">align-self</code></li>
        <li>• <code class="_cl-accent">jtfs</code> สำหรับ <code class="_cl-accent">justify-self</code></li>
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
                <code class="_cl-accent">als</code>
                <code class="_cl-accent">jtfs</code>
              </p>
            </td>
            <td>
              <p>
                <strong>String Value: </strong> <br>
                <code class="_cl-accent">st</code> สำหรับ "start" <br>
                <code class="_cl-accent">e</code> สำหรับ "end" <br>
                <code class="_cl-accent">l</code> สำหรับ "left" <br>
                <code class="_cl-accent">r</code> สำหรับ "right" <br>
                <code class="_cl-accent">fst</code> สำหรับ "flex-start" <br>
                <code class="_cl-accent">fe</code> สำหรับ "flex-end" <br>
                <code class="_cl-accent">sst</code> สำหรับ "self-start" <br>
                <code class="_cl-accent">se</code> สำหรับ "self-end" <br>
                <code class="_cl-accent">str</code> สำหรับ "stretch" <br>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Center --&gt;
&lt;div class="_dp-f _h-64px"&gt;
  &lt;div class="_als-fst _bdw-2px"&gt;item 1&lt;/div&gt;
  &lt;div class="_als-ct _bdw-2px"&gt;item 2&lt;/div&gt;
  &lt;div class="_als-fe _bdw-2px"&gt;item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_dp-f _h-64px _bdw-2px _bdcl-neutral-400 _mgbt-12px">
          <div class="_bgcl-neutral-300 _als-fst _bdw-2px _bdcl-neutral-700">item 1</div>
          <div class="_bgcl-neutral-300 _als-ct _bdw-2px _bdcl-neutral-700">item 2</div>
          <div class="_bgcl-neutral-300 _als-fe _bdw-2px _bdcl-neutral-700">item 3</div>
        </div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'GettingStart' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;การใช้งาน
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
  name: 'AtomicAlignment',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
