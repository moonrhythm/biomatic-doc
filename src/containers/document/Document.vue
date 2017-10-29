<template>
  <div>

    <div class="_dp-f _fdrt-r" style="padding-top: 60px;">

      <!-- Menu -->
      <div id="menu" class="_dp-n _dp-b-sm _pst-f _pdh-16px _pdv-32px _bgcl-neutral-100 _w-256px _ovf-at">
        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-getting-start" type="checkbox" checked>
          <label for="accordion-getting-start" class="_fs-5">
            <strong>Getting Start</strong>
          </label>
          <div class="bio-accordion-content _pdv-8px">
            <router-link :to="{ name: 'Introduction' }" class="bio-link -item" :active-class="'-active'">
              เกี่ยวกับ Biomatic
            </router-link>
            <router-link :to="{ name: 'Installation' }" class="bio-link -item" :active-class="'-active'">
              วิธีติดตั้ง
            </router-link>
            <router-link :to="{ name: 'GettingStart' }" class="bio-link -item" :active-class="'-active'">
              การใช้งาน
            </router-link>
            <!-- <router-link :to="{ name: 'GettingStart' }" class="bio-link -item" :active-class="'-active'" exact>
              คำถามที่พบบ่อย
            </router-link> -->
            <!-- <a href="#" class="bio-link -item">SCSS Variables</a> -->
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-components" type="checkbox" checked>
          <label for="accordion-components" class="_fw-500 _fs-5"><strong>Components</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <router-link
              :to="{ name: 'ComponentAccordion' }"
              class="bio-link -item"
              :active-class="'-active'">
              Accordion
            </router-link>
            <router-link
              :to="{ name: 'ComponentBreadcrumb' }"
              class="bio-link -item"
              :active-class="'-active'">
              Breadcrumb
            </router-link>
            <router-link
              :to="{ name: 'ComponentButton' }"
              class="bio-link -item"
              :active-class="'-active'">
              Button
            </router-link>
            <!-- <a href="./doc/components/breadcrumb.html" class="bio-link -item">Breadcrumb</a>
            <a href="./doc/components/button.html" class="bio-link -item">Button</a>
            <a href="./doc/components/card.html" class="bio-link -item">Card</a>
            <a href="./doc/components/form.html" class="bio-link -item">Form</a>
            <a href="./doc/components/message.html" class="bio-link -item">Message</a>
            <a href="./doc/components/progress.html" class="bio-link -item">Progress</a> -->
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-atomic" type="checkbox" checked>
          <label for="accordion-atomic" class="_fw-500 _fs-5"><strong>Atomic</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <router-link
              :to="{ name: 'AtomicAlignment' }"
              class="bio-link -item"
              :active-class="'-active'">
              Alignment
            </router-link>
            <router-link
              :to="{ name: 'AtomicBorder' }"
              class="bio-link -item"
              :active-class="'-active'">
              Border
            </router-link>
            <router-link
              :to="{ name: 'AtomicBoxPosition' }"
              class="bio-link -item"
              :active-class="'-active'">
              Box Position
            </router-link>
            <router-link
              :to="{ name: 'AtomicBoxSize' }"
              class="bio-link -item"
              :active-class="'-active'">
              Box Size
            </router-link>
            <router-link
              :to="{ name: 'AtomicColor' }"
              class="bio-link -item"
              :active-class="'-active'">
              Color
            </router-link>
            <router-link
              :to="{ name: 'AtomicCursor' }"
              class="bio-link -item"
              :active-class="'-active'">
              Cursor
            </router-link>
            <router-link
              :to="{ name: 'AtomicDisplay' }"
              class="bio-link -item"
              :active-class="'-active'">
              Display
            </router-link>
            <router-link
              :to="{ name: 'AtomicFloat' }"
              class="bio-link -item"
              :active-class="'-active'">
              Float
            </router-link>
            <router-link
              :to="{ name: 'AtomicMargin' }"
              class="bio-link -item"
              :active-class="'-active'">
              Margin
            </router-link>
            <router-link
              :to="{ name: 'AtomicOpacity' }"
              class="bio-link -item"
              :active-class="'-active'">
              Opacity
            </router-link>
            <router-link
              :to="{ name: 'AtomicPadding' }"
              class="bio-link -item"
              :active-class="'-active'">
              Padding
            </router-link>
            <router-link
              :to="{ name: 'AtomicTypography' }"
              class="bio-link -item"
              :active-class="'-active'">
              Typography
            </router-link>

            <!-- <a href="./doc/atomic/background.html" class="bio-link -item">Background[WIP]</a> -->
            <!-- <a href="./doc/atomic/typography.html" class="bio-link -item">Flexbox</a> -->
            <!-- <a href="./doc/atomic/typography.html" class="bio-link -item">Image (อัน object fit อ่ะ)</a> -->
            <!-- <a href="./doc/atomic/image.html" class="bio-link -item">Image[WIP]</a>
            <a href="./doc/atomic/alignment.html" class="bio-link -item">Alignment[WIP]</a> -->
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-layouts" type="checkbox" checked>
          <label for="accordion-layouts" class="_fw-500 _fs-5"><strong>Layouts</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <!-- <a href="./doc/layouts/layout.html" class="bio-link -item">About Layout</a>
            <a href="#" class="bio-link -item">Container</a>
            <a href="#" class="bio-link -item">Responsive Grid</a> -->
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-utilities" type="checkbox" checked>
          <label for="accordion-utilities" class="_fw-500 _fs-5"><strong>Utilities</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <!-- <a href="./doc/utilities/utility.html" class="bio-link -item">About Utility</a>
            <a href="#" class="bio-link -item">Rise</a> -->
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="_pdh-16px _pdh-64px-sm _pdv-0px _mgl-0px _mgl-256px-sm _f-1 _ovf-at">
        <router-view style="max-width: 800px"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Document'
  }
</script>

<style scoped>
  #menu {
    top: 60px;
    height: calc(100vh - 50px);
  }
</style>

