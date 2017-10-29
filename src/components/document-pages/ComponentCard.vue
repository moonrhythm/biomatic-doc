<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#component-card" class="bio-link -primary"><strong>#</strong></a> Card
      </div>

      <p class="_mgbt-64px _fs-5">
        Card ใช้สำหรับแสดงผลกลุ่มของ Content ในลักษณะ Card
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-card</code></li>
        <li>• <code class="_cl-accent">.bio-card-cover</code></li>
        <li>• <code class="_cl-accent">.bio-card-title</code></li>
        <li>• <code class="_cl-accent">.bio-card-subtitle</code></li>
        <li>• <code class="_cl-accent">.bio-card-content</code></li>
        <li>• <code class="_cl-accent">.bio-card-action</code></li>
      </ul>

      <!-- <div class="bio-message -info _fs-6 _mgbt-64px">
        <p>
          <strong>คำแนะนำ</strong> – เพื่อความเหมาะสม เราแนะนำให้คุณใช้ <code class="_cl-accent">.bio-button</code>
          ที่ <code class="_cl-accent">&lt;div&gt;</code> หรือ
          <code class="_cl-accent">&lt;input type="submit"&gt;</code>
        </p>
      </div> -->

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
                <code class="_cl-accent">.bio-card</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Style: </strong> <br>
                <code class="_cl-accent">-horizontal</code>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-card-cover</code>
              </p>
            </td>
            <td>
              <p>
                -
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-card-title</code>
              </p>
            </td>
            <td>
              <p>
                -
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-card-subtitle</code>
              </p>
            </td>
            <td>
              <p>
                -
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-card-content</code>
              </p>
            </td>
            <td>
              <p>
                -
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-card-actions</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Style: </strong> <br>
                <code class="_cl-accent">-attached</code>
                <code class="_cl-accent">-push-left</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">
</code></pre>

      <div class="u-panel _mgbt-64px">
        <!-- <div class="bio-card">Card</div> -->
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน อื่นๆ</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="bio-button"&gt;.bio-button&lt;/div&gt;
&lt;div class="bio-button -accent"&gt;bio-button -accent&lt;/div&gt;
&lt;div class="bio-button -positive"&gt;bio-button -positive&lt;/div&gt;
&lt;div class="bio-button -negative"&gt;bio-button -negative&lt;/div&gt;
&lt;div class="bio-button -info"&gt;bio-button -info&lt;/div&gt;
&lt;div class="bio-button -warning"&gt;bio-button -warning&lt;/div&gt;
&lt;div class="bio-button -white"&gt;bio-button -white&lt;/div&gt;
&lt;div class="bio-button -gray"&gt;bio-button -gray&lt;/div&gt;
&lt;div class="bio-button -dark"&gt;bio-button -dark&lt;/div&gt;
&lt;div class="bio-button -black"&gt;bio-button -black&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-button -outline _dp-ilb _mgbt-8px">.bio-button</div>
        <div class="bio-button -accent -outline _dp-ilb _mgbt-8px">bio-button -accent</div>
        <div class="bio-button -positive -outline _dp-ilb _mgbt-8px">bio-button -positive</div>
        <div class="bio-button -negative -outline _dp-ilb _mgbt-8px">bio-button -negative</div>
        <div class="bio-button -info -outline _dp-ilb _mgbt-8px">bio-button -info</div>
        <div class="bio-button -warning -outline _dp-ilb _mgbt-8px">bio-button -warning</div>
        <div class="bio-button -white -outline _dp-ilb _mgbt-8px">bio-button -white</div>
        <div class="bio-button -gray -outline _dp-ilb _mgbt-8px">bio-button -gray</div>
        <div class="bio-button -dark -outline _dp-ilb _mgbt-8px">bio-button -dark</div>
        <div class="bio-button -black -outline _dp-ilb _mgbt-8px">bio-button -black</div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน อื่นๆ</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;div class="bio-button -accent"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -loading -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -positive -outline -loading -disabled"&gt;Hello Button&lt;/div&gt;

&lt;div class="bio-button -negative"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -loading -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline -loading"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline -disabled"&gt;Hello Button&lt;/div&gt;
&lt;div class="bio-button -negative -outline -loading -disabled"&gt;Hello Button&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-button -positive _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -loading -disabled _dp-ilb _mgbt-8px">Hello Button</div> <br>
        <div class="bio-button -positive -outline _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -outline -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -outline -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -positive -outline -loading -disabled _dp-ilb _mgbt-32px">Hello Button</div> <br>

        <div class="bio-button -negative _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -loading -disabled _dp-ilb _mgbt-8px">Hello Button</div> <br>
        <div class="bio-button -negative -outline _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -outline -loading _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -outline -disabled _dp-ilb _mgbt-8px">Hello Button</div>
        <div class="bio-button -negative -outline -loading -disabled _dp-ilb _mgbt-32px">Hello Button</div>
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
  name: 'ComponentCard',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
