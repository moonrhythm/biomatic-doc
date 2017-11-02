<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#component-input" class="bio-link -primary"><strong>#</strong></a> Form
      </div>

      <p class="_mgbt-64px _fs-5">
        Form จะรวม Class ที่ใช้สำหรับแสดงผล Input รูปแบบต่างๆ
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>Class ที่เกี่ยวข้อง</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.bio-field</code> <small class="_opct-60">(Container) (Optional) </small> </li>
        <li>• <code class="_cl-accent">.bio-input</code></li>
        <li>• <code class="_cl-accent">.bio-textarea</code></li>
        <li>• <code class="_cl-accent">.bio-select</code></li>
        <li>• <code class="_cl-accent">.bio-checkbox</code></li>
        <li>• <code class="_cl-accent">.bio-radio</code></li>
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
                <code class="_cl-accent">.bio-field</code>
              </p>
            </td>
            <td>
              <p class="_mgbt-32px">
                <strong>Color: </strong> <br>
                <code class="_cl-accent">-primary</code> (default),
                <code class="_cl-accent">-accent</code>,
                <code class="_cl-accent">-positive</code>,
                <code class="_cl-accent">-negative</code>,
                <code class="_cl-accent">-warning</code>,
                <code class="_cl-accent">-info</code>
              </p>
              <p>
                <strong>State: </strong> <br>
                <code class="_cl-accent">-disabled</code>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-input</code>
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
                <code class="_cl-accent">.bio-textarea</code>
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
                <code class="_cl-accent">.bio-select</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Style: </strong> <br>
                <code class="_cl-accent">-multiple</code>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-checkbox</code>
              </p>
            </td>
            <td>
              <p>
                <strong>Style: </strong> <br>
                <code class="_cl-accent">-switch</code>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code class="_cl-accent">.bio-radio</code>
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
        <strong>ตัวอย่างการใช้งาน Input ต่างๆ แบบพื้นฐาน</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Normal Input --&gt;
&lt;div class="bio-input"&gt;
  &lt;input type="text" placeholder="Type Something"&gt;
&lt;/div&gt;

&lt;!-- Normal Textarea --&gt;
&lt;div class="bio-textarea"&gt;
  &lt;textarea rows="3" placeholder="Textarea"&gt;&lt;/textarea&gt;
&lt;/div&gt;

&lt;!-- Normal Select --&gt;
&lt;div class="bio-select"&gt;
  &lt;select&gt;
    &lt;option disabled&gt;Please Select an Item...&lt;/option&gt;
    &lt;option&gt;Option 1&lt;/option&gt;
    &lt;option&gt;Option 2&lt;/option&gt;
    &lt;option&gt;Option 3&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;!-- Normal Checkbox --&gt;
&lt;div class="bio-checkbox"&gt;
  &lt;input id="c1" type="checkbox"&gt;
  &lt;label for="c1"&gt;Checkbox&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Normal Radio --&gt;
&lt;div class="bio-radio"&gt;
  &lt;input id="r1" type="radio" name="radio-test1"&gt;
  &lt;label for="r1"&gt;Radio 1&lt;/label&gt;
&lt;/div&gt;
&lt;div class="bio-radio"&gt;
  &lt;input id="r2" type="radio" name="radio-test1" checked&gt;
  &lt;label for="r2"&gt;Radio 2&lt;/label&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-input _mgbt-8px">
          <input type="text" placeholder="Type Something">
        </div>

        <div class="bio-textarea _mgbt-8px">
          <textarea rows="3" placeholder="Textarea"></textarea>
        </div>

        <div class="bio-select _mgbt-32px">
          <select>
            <option disabled>Please Select an Item...</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="bio-checkbox _mgbt-32px">
          <input id="c1" type="checkbox">
          <label for="c1">Checkbox</label>
        </div>

        <div class="bio-radio _mgbt-8px">
          <input id="r1" type="radio" name="radio-test1">
          <label for="r1">Radio 1</label>
        </div>

        <div class="bio-radio _jtfs-s _mgbt-16px">
          <input id="r2" type="radio" name="radio-test1" checked>
          <label for="r2">Radio 2</label>
        </div>

      </div>

      <p class="_mgbt-16px _fs-3">
        <strong>Switch Checkbox</strong>
      </p>
      <p class="_mgbt-64px _fs-5">
        Checkbox สามารถใส่ Option <code class="_cl-accent">-switch</code>
        เพื่อเปลี่ยน Style ให้แสดงผลในลักษณะของ Switch ได้
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Switch</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="bio-checkbox -switch"&gt;
  &lt;input id="checkbox2" type="checkbox"&gt;
  &lt;label for="checkbox2"&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-checkbox -switch">
          <input id="checkbox2" type="checkbox">
          <label for="checkbox2"></label>
        </div>
      </div>

      <p class="_mgbt-16px _fs-3">
        <strong>Multiple Select</strong>
      </p>
      <p class="_mgbt-64px _fs-5">
        สำหรับ Select สามารถใส่ Option <code class="_cl-accent">-multiple</code>
        เพื่อใส่ Style ให้ Multiple Select ได้
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Multiple Select</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;div class="bio-select -multiple"&gt;
  &lt;select multiple&gt;
    &lt;option disabled&gt;Select dropdown&lt;/option&gt;
    &lt;option&gt;Option 1&lt;/option&gt;
    &lt;option&gt;Option 2&lt;/option&gt;
    &lt;option&gt;Option 3&lt;/option&gt;
    &lt;option&gt;Option 4&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-select -multiple">
          <select multiple>
            <option disabled>Select dropdown</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>

      </div>

      <p class="_mgbt-16px _fs-3">
        <strong>Field</strong>
      </p>
      <p class="_mgbt-64px _fs-5">
        Field เป็น Container ที่ใช้จัดการ Input Class และ Element ข้างเคียงที่ทำหน้าที่เป็น
        Label หรือ Description ของ Input ให้แสดงผลสอดคล้องกัน
      </p>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Field – Color</strong>
      </p>
      <pre class="example"><code class="language-markup">&lt;!-- Positive --&gt;
&lt;div class="bio-field -positive"&gt;
  &lt;label&gt;&lt;strong&gt;Name&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-input -positive"&gt;
    &lt;input type="text" placeholder="What's your name again?" value="BioMaRu"&gt;
  &lt;/div&gt;
  &lt;small&gt;Great!, awesome name!&lt;/small&gt;
&lt;/div&gt;

&lt;!-- Info --&gt;
&lt;div class="bio-field -info"&gt;
  &lt;label&gt;&lt;strong&gt;Optional&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-select"&gt;
    &lt;select&gt;
      &lt;option disabled&gt;Select dropdown&lt;/option&gt;
      &lt;option&gt;Option 1&lt;/option&gt;
      &lt;option&gt;Option 2&lt;/option&gt;
      &lt;option&gt;Option 3&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;small&gt;You can leave this field as a blank&lt;/small&gt;
&lt;/div&gt;

&lt;!-- Warinig --&gt;
&lt;div class="bio-field -warning"&gt;
  &lt;label&gt;&lt;strong&gt;Age&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-input"&gt;
    &lt;input type="Number" placeholder="Tell me your age"&gt;
  &lt;/div&gt;
  &lt;small&gt;Shhhhhh!&lt;/small&gt;
&lt;/div&gt;

&lt;!-- Negative --&gt;
&lt;div class="bio-field -negative"&gt;
  &lt;label&gt;&lt;strong&gt;Description&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-textarea"&gt;
    &lt;textarea rows="3" placeholder="Tell us about you"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;small&gt;Something Wrong!&lt;/small&gt;
&lt;/div&gt;</code></pre>

      <div class="u-panel _mgbt-64px">
        <div class="bio-field -positive _mgbt-16px">
          <label><strong>Name</strong></label>
          <div class="bio-input -positive">
            <input type="text" placeholder="What's your name again?" value="BioMaRu">
          </div>
          <small>Great!, awesome name!</small>
        </div>

        <div class="bio-field -info _mgbt-16px">
          <label><strong>Optional</strong></label>
          <div class="bio-select">
            <select>
              <option disabled>Select dropdown</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <small>You can leave this field as a blank</small>
        </div>

        <div class="bio-field -warning _mgbt-16px">
          <label><strong>Age</strong></label>
          <div class="bio-input">
            <input type="Number" placeholder="Tell me your age">
          </div>
          <small>Shhhhhh!</small>
        </div>

        <div class="bio-field -negative">
          <label><strong>Description</strong></label>
          <div class="bio-textarea">
            <textarea rows="3" placeholder="Tell us about you"></textarea>
          </div>
          <small>Something Wrong!</small>
        </div>

      </div>

      <p class="_mgbt-8px _fs-5">
        <strong>ตัวอย่างการใช้งาน Field – State</strong>
      </p>
       <pre class="example"><code class="language-markup">&lt;!-- Disabled Input --&gt;
&lt;div class="bio-field -disabled"&gt;
  &lt;label&gt;&lt;strong&gt;Under Construction&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-input"&gt;
    &lt;input type="Number" placeholder="Tell me your age" disabled&gt;
  &lt;/div&gt;
  &lt;small&gt;This field is not ready yet&lt;/small&gt;
&lt;/div&gt;

&lt;!-- Disabled Checkbox --&gt;
&lt;div class="bio-field -disabled"&gt;
  &lt;label&gt;&lt;strong&gt;Under Construction&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-checkbox"&gt;
  &lt;input id="c2" type="checkbox" disabled&gt;
    &lt;label for="c2"&gt;Checkbox&lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Disabled Radio --&gt;
&lt;div class="bio-field -disabled"&gt;
  &lt;label&gt;&lt;strong&gt;Under Construction&lt;/strong&gt;&lt;/label&gt;
  &lt;div class="bio-radio"&gt;
    &lt;input id="r21" type="radio" name="r-test-2" disabled&gt;
    &lt;label for="r21"&gt;Checkbox&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="bio-radio"&gt;
    &lt;input id="c22" type="radio" name="r-test-2" disabled&gt;
    &lt;label for="c22"&gt;Checkbox&lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      <div class="u-panel _mgbt-64px">

        <div class="bio-field -disabled _mgbt-32px">
          <label><strong>Under Construction</strong></label>
          <div class="bio-input">
            <input type="Number" placeholder="Tell me your age" disabled>
          </div>
          <small>This field is not ready yet</small>
        </div>

        <div class="bio-field -disabled _mgbt-16px">
          <label><strong>Under Construction</strong></label>
          <div class="bio-checkbox">
          <input id="c2" type="checkbox" disabled>
            <label for="c2">Checkbox</label>
          </div>
        </div>

        <div class="bio-field -disabled _mgbt-16px">
          <label><strong>Under Construction</strong></label>
          <div class="bio-radio _mgbt-8px">
            <input id="r21" type="radio" name="r-test-2" disabled>
            <label for="r21">Checkbox</label>
          </div>
          <div class="bio-radio">
            <input id="c22" type="radio" name="r-test-2" disabled>
            <label for="c22">Checkbox</label>
          </div>
        </div>

      </div>

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'ComponentCard' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Card
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'ComponentMessage' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Message &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>


</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'ComponentForm',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
