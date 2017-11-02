<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#layout-responsive-grid" class="bio-link -primary"><strong>#</strong></a> Responsive Grid
      </div>

      <p class="_mgbt-64px _fs-5">
        Biomatic ใช้ Grid 12 ในการทำ Responsive Grid
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>Class:</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.lo-1</code></li>
        <li>• <code class="_cl-accent">.lo-2</code></li>
        <li>• <code class="_cl-accent">.lo-3</code></li>
        <li>• <code class="_cl-accent">.lo-4</code></li>
        <li>• <code class="_cl-accent">.lo-6</code></li>
        <li>• <code class="_cl-accent">.lo-12</code></li>
        <li>• <code class="_cl-accent">.lo-1-11</code></li>
        <li>• <code class="_cl-accent">.lo-2-10</code></li>
        <li>• <code class="_cl-accent">.lo-3-9</code></li>
        <li>• <code class="_cl-accent">.lo-4-5</code></li>
        <li>• <code class="_cl-accent">.lo-5-7</code></li>
        <li>• <code class="_cl-accent">.lo-7-5</code></li>
        <li>• <code class="_cl-accent">.lo-8-4</code></li>
        <li>• <code class="_cl-accent">.lo-9-3</code></li>
        <li>• <code class="_cl-accent">.lo-10-2</code></li>
        <li>• <code class="_cl-accent">.lo-11-1</code></li>
      </ul>

      <p class="_mgbt-64px _fs-5">
        <strong>Breakpoint:</strong> Yes
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>Option:</strong>
      </p>
      <table class="bio-table _mgbt-64px">
        <thead>
          <tr>
            <th class="_w-1px">Class</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.lo-*</code>
              </p>
            </td>
            <td>
              <p class="_mgbt-32px">
                <strong>All Gutter: </strong> <br>
                <code class="_cl-accent">-gap-0px</code>
                <code class="_cl-accent">-gap-1px</code>
                <code class="_cl-accent">-gap-2px</code>
                <code class="_cl-accent">-gap-4px</code>
                <code class="_cl-accent">-gap-8px</code>
                <code class="_cl-accent">-gap-16px</code>
                <code class="_cl-accent">-gap-32px</code>
                <code class="_cl-accent">-gap-64px</code>
              </p>
              <p class="_mgbt-32px">
                <strong>Vertical Gutter: </strong> <br>
                <code class="_cl-accent">-gapv-0px</code>
                <code class="_cl-accent">-gapv-1px</code>
                <code class="_cl-accent">-gapv-2px</code>
                <code class="_cl-accent">-gapv-4px</code>
                <code class="_cl-accent">-gapv-8px</code>
                <code class="_cl-accent">-gapv-16px</code>
                <code class="_cl-accent">-gapv-32px</code>
                <code class="_cl-accent">-gapv-64px</code>
              </p>
              <p class="_mgbt-32px">
                <strong>Horizontal Gutter: </strong> <br>
                <code class="_cl-accent">-gaph-0px</code>
                <code class="_cl-accent">-gaph-1px</code>
                <code class="_cl-accent">-gaph-2px</code>
                <code class="_cl-accent">-gaph-4px</code>
                <code class="_cl-accent">-gaph-8px</code>
                <code class="_cl-accent">-gaph-16px</code>
                <code class="_cl-accent">-gaph-32px</code>
                <code class="_cl-accent">-gaph-64px</code>
              </p>
              <p class="_mgbt-32px">
                <strong>Column Alignment: </strong> <br>
                <code class="_cl-accent">-col-center</code>
                <code class="_cl-accent">-col-start</code>
                <code class="_cl-accent">-col-end</code>
                <code class="_cl-accent">-col-stretch</code>
              </p>
              <p class="_mgbt-32px">
                <strong>Row Alignment: </strong> <br>
                <code class="_cl-accent">-row-center</code>
                <code class="_cl-accent">-row-start</code>
                <code class="_cl-accent">-row-end</code>
                <code class="_cl-accent">-row-stretch</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Symmetry Grid</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Grid 1 --&gt;
&lt;div class="lo-1 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 3 --&gt;
&lt;div class="lo-3 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 6 --&gt;
&lt;div class="lo-6 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_mgbt-4px">.lo-1</div>
        <div class="lo-1 -gap-8px _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-3</div>
        <div class="lo-3 -gap-8px _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-6</div>
        <div class="lo-6 -gap-8px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Unsymmetry Grid</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Grid 8-4 --&gt;
&lt;div class="lo-8-4 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 3-9 --&gt;
&lt;div class="lo-3-9 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 11-1 --&gt;
&lt;div class="lo-11-1 -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_mgbt-4px">.lo-8-4</div>
        <div class="lo-8-4 -gap-8px _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-3-9</div>
        <div class="lo-3-9 -gap-8px _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-11-1</div>
        <div class="lo-11-1 -gap-8px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการเปลี่ยนขนาด Gutter </strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- All Gutter 32px --&gt;
&lt;div class="lo-8-4 -gap-32px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Vertical Gutter 16px, Horizontal Gutter 4px --&gt;
&lt;div class="lo-8-4 -gapv-16px -gaph-4px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_mgbt-4px">.lo-8-4 .-gap-32px</div>
        <div class="lo-8-4 -gap-32px _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-8-4 .-gapv-16px .-gaph-4px</div>
        <div class="lo-8-4 -gapv-16px -gaph-4px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการ Alignment Item ใน Grid </strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- ยืด Grid Item ให้เต็ม Cell ในแนวนอน --&gt;
&lt;div class="lo-8-4 -gap-8px -row-stretch"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- วาง Grid Item ที่ปลาย Cell ในแนวนอน --&gt;
&lt;div class="lo-8-4 -gap-8px -row-end"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- วาง Grid Item ที่ต้น Cell ในแนวนอน --&gt;
&lt;div class="lo-8-4 -gap-8px -row-start"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;

&lt;!-- วาง Grid Item ตรงกลาง Cell ในแนวนอน --&gt;
&lt;div class="lo-8-4 -gap-8px -row-center"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_mgbt-4px">.lo-8-4 .-row-stretch</div>
        <div class="lo-8-4 -gap-8px -row-stretch _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-8-4 .-row-end</div>
        <div class="lo-8-4 -gap-8px -row-end _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-8-4 .-row-start</div>
        <div class="lo-8-4 -gap-8px -row-start _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>

        <div class="_mgbt-4px">.lo-8-4 .-row-center</div>
        <div class="lo-8-4 -gap-8px -row-center _mgbt-32px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการร่วมกับ Responsive Breakpoint</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!--
Grid 12,
Grid 6 when Small width,
Grid 8-5 when Medium whdth
and
Grid 2-10 when Large width
--&gt;
&lt;div class="lo-12 lo-6-sm lo-8-4-md lo-2-10-lg -gap-8px"&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
  &lt;div&gt;item&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="_mgbt-4px">.lo-12 .lo-6-sm .lo-8-4-md .lo-2-10-lg</div>
        <div class="lo-12 lo-6-sm lo-8-4-md lo-2-10-lg -gap-8px">
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
          <div class="_bgcl-neutral-400 _h-32px _dp-f _jtfct-ct _alit-ct">item</div>
        </div>
      </div>

      <hr class="_opct-30 _mgbt-32px">

      <!-- <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'AtomicDisplay' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Display
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'AtomicMargin' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Margin &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div> -->

    </div>


</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'LayoutResponsiveGrid',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
