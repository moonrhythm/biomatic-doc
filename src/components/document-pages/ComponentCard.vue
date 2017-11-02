<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-32px">
        <a href="#component-card" class="bio-link -primary"><strong>#</strong></a> Card
      </div>

      <p class="_mgbt-64px _fs-5">
        Card ใช้สำหรับแสดงผลกลุ่มของ Content ในลักษณะ Card รูปแบบต่างๆ
      </p>

      <div class="bio-message -warning _fs-6 _mgbt-64px">
        <p>
          <strong>ข้อควรระวัง</strong> – Card สร้างโดยใช้ CSS Grid จึง Support เฉพาะ <a class="bio-link -fancy" href="https://caniuse.com/#feat=css-grid" target="_blank">Modern Browser</a> เท่านั้น 😖
        </p>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-card</code> <small class="_opct-60">(Container)</small></li>
        <li>• <code class="_cl-accent">.bio-card-cover</code></li>
        <li>• <code class="_cl-accent">.bio-card-title</code></li>
        <li>• <code class="_cl-accent">.bio-card-subtitle</code></li>
        <li>• <code class="_cl-accent">.bio-card-content</code></li>
        <li>• <code class="_cl-accent">.bio-card-actions</code></li>
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
      <pre class="example"><code class="language-markup">&lt;!-- Basic Card --&gt;
&lt;div class="bio-card"&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Basic Card with Title / Subtitle --&gt;
&lt;div class="bio-card"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello World&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-subtitle"&gt;@BioMaRu&lt;/div&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Basic Card with Cover --&gt;
&lt;div class="bio-card"&gt;
  &lt;img class="bio-card-cover" src="https://placeimg.com/640/480/animals" alt="image"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello Kitty&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-subtitle"&gt;@BioMaRu&lt;/div&gt;
&lt;/div&gt;

&lt;div class="bio-card"&gt;
  &lt;img class="bio-card-cover" src="https://placeimg.com/640/480/animals" alt="image"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello Kitty&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-subtitle"&gt;@BioMaRu&lt;/div&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-card _mgbt-16px">
          <div class="bio-card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean efficitur sit amet massa fringilla egestas.
            Nullam condimentum luctus turpis.
          </div>
        </div>

        <div class="bio-card _mgbt-16px">
          <div class="bio-card-title"><strong>Hello World</strong></div>
          <div class="bio-card-subtitle">@BioMaRu</div>
          <div class="bio-card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean efficitur sit amet massa fringilla egestas.
            Nullam condimentum luctus turpis.
          </div>
        </div>

        <div class="lo-12 lo-6-sm -gap-16px">

          <div class="bio-card _ovf-hd _als-st _mgbt-16px">
            <img class="bio-card-cover" src="https://placeimg.com/360/128/animals" alt="image">
            <div class="bio-card-title"><strong>Hello Kitty</strong></div>
            <div class="bio-card-subtitle">@BioMaRu</div>
          </div>

          <div class="bio-card _ovf-hd  _mgbt-16px">
            <img class="bio-card-cover" src="https://placeimg.com/360/128/animals" alt="image">
            <div class="bio-card-title"><strong>Hello Kitty</strong></div>
            <div class="bio-card-subtitle">@BioMaRu</div>
            <div class="bio-card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas.
              Nullam condimentum luctus turpis.
            </div>
          </div>

        </div>
      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Card แบบ </strong> <code class="_cl-accent">-horizontal</code>
      </p>
<pre class="example"><code class="language-markup">&lt;div class="bio-card -horizontal"&gt;
  &lt;img class="bio-card-cover" src="https://placeimg.com/360/360/animals" alt="image"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello Kitty&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-subtitle"&gt;@BioMaRu&lt;/div&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">

        <div class="bio-card -horizontal">
          <img class="bio-card-cover" src="https://placeimg.com/360/360/animals" alt="image">
          <div class="bio-card-title"><strong>Hello Kitty</strong></div>
          <div class="bio-card-subtitle">@BioMaRu</div>
          <div class="bio-card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean efficitur sit amet massa fringilla egestas.
            Nullam condimentum luctus turpis.
          </div>
        </div>

      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Card ที่มี Actions รูบแบบต่างๆ</strong>
      </p>
<pre class="example"><code class="language-markup">&lt;!-- Basic Actions --&gt;
&lt;div class="bio-card"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello Kitty&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="bio-card-actions"&gt;
    &lt;a class="bio-link _pdh-8px" href="#"&gt;Cancel&lt;/a&gt;
    &lt;a class="bio-link _pdh-8px" href="#"&gt;OK&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Actions with with -push-left --&gt;
&lt;/div&gt;
  &lt;div class="bio-card"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello Kitty&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="bio-card-actions -push-left"&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-facebook _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-google _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-twitter _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-instagram _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Actions with with -attached --&gt;
&lt;div class="bio-card"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello Kitty&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="bio-card-actions -attached"&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-facebook _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-google _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-twitter _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;a class="bio-link" href="#"&gt;&lt;i class="fa fa-instagram _fs-5"&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Actions with with -attached --&gt;
&lt;div class="bio-card"&gt;
  &lt;div class="bio-card-title"&gt;&lt;strong&gt;Hello Kitty&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="bio-card-content"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="bio-card-actions -attached"&gt;
    &lt;a class="bio-link _pdh-8px" href="#"&gt;Cancel&lt;/a&gt;
    &lt;a class="bio-link _pdh-8px" href="#"&gt;OK&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="lo-12 lo-6-sm -gap-16px">
          <div class="bio-card">
            <div class="bio-card-title"><strong>Hello Kitty</strong></div>
            <div class="bio-card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas.
              Nullam condimentum luctus turpis.
            </div>
            <div class="bio-card-actions">
              <a class="bio-link _pdh-8px" href="#">Cancel</a>
              <a class="bio-link _pdh-8px" href="#">OK</a>
            </div>
          </div>

          <div class="bio-card _als-st">
            <div class="bio-card-title"><strong>Hello Kitty</strong></div>
            <div class="bio-card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas.
              Nullam condimentum luctus turpis.
            </div>
            <div class="bio-card-actions -push-left">
              <a class="bio-link" href="#"><i class="fa fa-facebook _fs-5"></i></a>
              <a class="bio-link" href="#"><i class="fa fa-google _fs-5"></i></a>
              <a class="bio-link" href="#"><i class="fa fa-twitter _fs-5"></i></a>
              <a class="bio-link" href="#"><i class="fa fa-instagram _fs-5"></i></a>
            </div>
          </div>
          <div class="bio-card _als-st">
            <div class="bio-card-title"><strong>Hello Kitty</strong></div>
            <div class="bio-card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas.
              Nullam condimentum luctus turpis.
            </div>
            <div class="bio-card-actions -attached">
              <a class="bio-link" href="#"><i class="fa fa-facebook _fs-5"></i></a>
              <a class="bio-link" href="#"><i class="fa fa-google _fs-5"></i></a>
              <a class="bio-link" href="#"><i class="fa fa-twitter _fs-5"></i></a>
              <a class="bio-link" href="#"><i class="fa fa-instagram _fs-5"></i></a>
            </div>
          </div>
          <div class="bio-card _als-st">
            <div class="bio-card-title"><strong>Hello Kitty</strong></div>
            <div class="bio-card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas.
              Nullam condimentum luctus turpis.
            </div>
            <div class="bio-card-actions -attached">
              <a class="bio-link _pdh-8px" href="#">Cancel</a>
              <a class="bio-link _pdh-8px" href="#">OK</a>
            </div>
          </div>
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
  name: 'ComponentCard',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
