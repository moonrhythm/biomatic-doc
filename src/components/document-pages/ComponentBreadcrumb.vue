<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#component-breadcrumb" class="bio-link -primary"><strong>#</strong></a> Breadcrumb
      </div>

      <p class="_mgbt-16px _fs-5">
        Breadcrumb ใช้สำหรับแสดงโครงสร้างการ Navigation ในหน้าปัจจุบัน
      </p>
      <p class="_mgbt-64px _fs-5">
        เราแนะนำให้คุณ ใช้ Class นี้บน <code class="_cl-accent">&lt;ul&gt;</code> และ ใช้ <code class="_cl-accent">&lt;li&gt;</code>
        เป็น List ของ Breadcrumb เพื่อความเหมาะสม
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-breadcrumb</code></li>
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
                <code class="_cl-accent">.bio-breadcrumb</code>
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
        <strong>ตัวอย่างการใช้งาน Breadcrumb</strong>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;ul class="bio-breadcrumb"&gt;
  &lt;li&gt;Home&lt;/li&gt;
  &lt;li&gt;item&lt;/li&gt;
&lt;/ul&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <ul class="bio-breadcrumb">
          <li>Home</li>
          <li>Item</li>
        </ul>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งานร่วมกับ</strong> <code class="language-markup _cl-accent">.bio-link</code>
      </p>
      <pre class="_mgbt-16px"><code class="language-markup">&lt;ul class="bio-breadcrumb"&gt;
  &lt;li&gt;&lt;a class="bio-link" href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="bio-link -primary" href="#"&gt;Category&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="bio-link -primary -fancy" href="#"&gt;Category&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="bio-link -positive" href="#"&gt;Category&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="bio-link -positive -fancy" href="#"&gt;Category&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="bio-link -negative" href="#"&gt;Category&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;item&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <div class="u-panel _mgbt-64px">
        <ul class="bio-breadcrumb">
          <li><a class="bio-link" href="#">Home</a></li>
          <li><a class="bio-link -primary" href="#">Category</a></li>
          <li><a class="bio-link -primary -fancy" href="#">Category</a></li>
          <li><a class="bio-link -positive" href="#">Category</a></li>
          <li><a class="bio-link -positive -fancy" href="#">Category</a></li>
          <li><a class="bio-link -negative" href="#">Category</a></li>
          <li>item</li>
        </ul>
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
  name: 'ComponentBreadcrumb',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
