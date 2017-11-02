<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#component-accordion" class="bio-link -primary"><strong>#</strong></a> Accordion
      </div>

      <p class="_mgbt-64px _fs-5">
        Accordion ใช้สำหรับ เปิด/ปิด การแสดงผล Content ภายใน
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-32px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-accordion</code></li>
        <li>• <code class="_cl-accent">.bio-accordion-content</code></li>
      </ul>
      <p class="_mgbt-8px _fs-5">
        ใช้งานร่วมกับ <code class="_cl-accent">&lt;input&gt;</code> ได้สองแบบ
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <strong>Checkbok</strong> (เปิดหลาย Accordion ได้พร้อมกัน)</li>
        <li>• <strong>Radio</strong> (เปิดทีละ Accordion)</li>
      </ul>
      <p class="_mgbt-8px _fs-5">
        <strong>Options</strong>
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
                <code class="_cl-accent">.bio-accordion</code>
              </p>
            </td>
            <td>
              <p>
                <code class="_cl-accent">.-has-icon</code>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-accordion-content</code>
              </p>
            </td>
            <td>
              <p>
                -
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Accordion แบบ Checkbox</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="bio-accordion"&gt;
  &lt;input id="ac1" type="checkbox"&gt;
  &lt;label for="ac1"&gt;&lt;strong&gt;Accordion checkbox 1&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-accordion-content"&gt;
    &lt;div&gt;Item A&lt;/div&gt;
    &lt;div&gt;Item B&lt;/div&gt;
    &lt;div&gt;Item C&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-accordion">
          <input id="ac1" type="checkbox">
          <label for="ac1"><strong>Accordion checkbox 1</strong></label>
          <div class="bio-accordion-content">
            <div>Item A</div>
            <div>Item B</div>
            <div>Item C</div>
          </div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่าง Accordion ที่ใช้ </strong> <code class="_cl-accent">.-has-icon</code>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Accordion – With Icon --&gt;
&lt;div class="bio-accordion -has-icon _mgbt-32px"&gt;
  &lt;input id="ac2" type="checkbox" class="_dp-n"&gt;
  &lt;label for="ac2"&gt;&lt;strong&gt;Accordion checkbox 2&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-accordion-content"&gt;
    &lt;div class="bio-link -item"&gt;Item A&lt;/div&gt;
    &lt;div class="bio-link -item"&gt;Item B&lt;/div&gt;
    &lt;div class="bio-link -item"&gt;Item C&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-accordion -has-icon">
          <input id="ac2" type="checkbox">
          <label for="ac2"><strong>Accordion checkbox 2</strong></label>
          <div class="bio-accordion-content">
            <div class="bio-link -item">Item A</div>
            <div class="bio-link -item">Item B</div>
            <div class="bio-link -item">Item C</div>
          </div>
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่าง Accordion แบบ Radio</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Accordion – With Icon --&gt;
&lt;div class="bio-accordion"&gt;
  &lt;input id="ar1" type="radio" name="ar" class="_dp-n"&gt;
  &lt;label for="ar1"&gt;&lt;strong&gt;Accordion radio 1&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-accordion-content"&gt;
    &lt;div&gt;Item A&lt;/div&gt;
    &lt;div&gt;Item B&lt;/div&gt;
    &lt;div&gt;Item C&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="bio-accordion"&gt;
  &lt;input id="ar2" type="radio" name="ar" class="_dp-n"&gt;
  &lt;label for="ar2"&gt;&lt;strong&gt;Accordion radio 2&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-accordion-content"&gt;
    &lt;div&gt;Item A&lt;/div&gt;
    &lt;div&gt;Item B&lt;/div&gt;
    &lt;div&gt;Item C&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="bio-accordion"&gt;
  &lt;input id="ar3" type="radio" name="ar" class="_dp-n"&gt;
  &lt;label for="ar3"&gt;&lt;strong&gt;Accordion radio 3&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-accordion-content"&gt;
    &lt;div&gt;Item A&lt;/div&gt;
    &lt;div&gt;Item B&lt;/div&gt;
    &lt;div&gt;Item C&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-accordion _mgbt-8px">
          <input id="ar1" type="radio" name="ar">
          <label for="ar1"><strong>Accordion radio 1</strong></label>
          <div class="bio-accordion-content">
            <div class="bio-link -item">Item A</div>
            <div class="bio-link -item">Item B</div>
            <div class="bio-link -item">Item C</div>
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="ar2" type="radio" name="ar">
          <label for="ar2"><strong>Accordion radio 2</strong></label>
          <div class="bio-accordion-content">
            <div class="bio-link -item">Item A</div>
            <div class="bio-link -item">Item B</div>
            <div class="bio-link -item">Item C</div>
          </div>
        </div>

        <div class="bio-accordion">
          <input id="ar3" type="radio" name="ar">
          <label for="ar3"><strong>Accordion radio 3</strong></label>
          <div class="bio-accordion-content">
            <div class="bio-link -item">Item A</div>
            <div class="bio-link -item">Item B</div>
            <div class="bio-link -item">Item C</div>
          </div>
        </div>
      </div>

      <!-- <hr class="_opct-30 _mgbt-32px"> -->

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
  name: 'ComponentAccordion',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
