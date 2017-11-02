<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#component-message" class="bio-link -primary"><strong>#</strong></a> Message
      </div>

      <p class="_mgbt-64px _fs-5">
        Message ใช้แสดง Content ที่ต้องการดึงความสนใจผู้ใช้และเน้นความรู้สึกต่างๆ
        เช่น ให้ข้อมูล, แจ้งเตือน, ผิดพลาด เป็นต้น
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-message</code> <small class="_opct-60">(Container)</small></li>
        <li>• <code class="_cl-accent">.bio-message-content</code> <small class="_opct-60">(optional)</small></li>
        <li>• <code class="_cl-accent">.bio-message-close</code></li>
      </ul>

      <p class="_mgbt-64px _fs-5">
        กรณี Content ที่เป็นเพียง Text คุณไม่จำเป็น
        ต้องใส่ไว้ด้านใน Element <code class="_cl-accent">.bio-message-content</code> ก็ได้ แต่เมื่อ Content มี Element อื่นๆ แทรกอยู่
        คุณจำเป็นจะต้องใส่ Content ทั้งหมด ไว้ด้านใน Element <code class="_cl-accent">.bio-message-content</code>
        เพื่อการแสดงผลที่ถูกต้อง
      </p>

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
                <code class="_cl-accent">.bio-message</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Color: </strong> <br>
                <code class="_cl-accent">-primary</code> (default),
                <code class="_cl-accent">-accent</code>,
                <code class="_cl-accent">-positive</code>,
                <code class="_cl-accent">-negative</code>,
                <code class="_cl-accent">-warning</code>,
                <code class="_cl-accent">-info</code>,
                <code class="_cl-accent">-dark</code>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-message-content</code>
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
                <code class="_cl-accent">.bio-message-close</code>
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
        <strong>ตัวอย่างการใช้งาน</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Basic Message --&gt;
&lt;div class="bio-message"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/div&gt;

&lt;!-- Basic Message with Closeable --&gt;
&lt;div class="bio-message"&gt;
  &lt;div class="bio-message-close"&gt;
    &lt;a class="bio-link -fancy" href="#"&gt;close&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="bio-message-content"&gt;
    &lt;strong&gt;Note – &lt;/strong&gt; Lorem ipsum dolor sit amet, &lt;u&gt;consectetur&lt;/u&gt; adipiscing elit.
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Basic Message with Closeable --&gt;
&lt;div class="bio-message"&gt;
  &lt;div class="bio-message-close"&gt;
    &lt;a class="bio-link u-close" href="#"&gt;&lt;/a&gt;
  &lt;/div&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-message _mgbt-8px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div class="bio-message _mgbt-8px">
          <div class="bio-message-close">
            <a class="bio-link -fancy" href="#">close</a>
          </div>
          <div class="bio-message-content">
            <strong>Note – </strong> Lorem ipsum dolor sit amet, <u>consectetur</u> adipiscing elit.
          </div>
        </div>

        <div class="bio-message">
          <div class="bio-message-close">
            <a class="bio-link u-close" href="#"></a>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน รูปแบบอื่น</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Positive --&gt;
&lt;div class="bio-message -positive"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/div&gt;

&lt;!-- Negative --&gt;
&lt;div class="bio-message -negative"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/div&gt;

&lt;!-- Info --&gt;
&lt;div class="bio-message -info"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/div&gt;

&lt;!-- Warning --&gt;
&lt;div class="bio-message -warning"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/div&gt;

&lt;!-- Dark --&gt;
&lt;div class="bio-message -dark"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-message -positive _mgbt-8px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="bio-message -negative _mgbt-8px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="bio-message -info _mgbt-8px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="bio-message -warning _mgbt-8px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="bio-message -dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
  name: 'ComponentMessage',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
