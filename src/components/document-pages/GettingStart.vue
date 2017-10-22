<template>
  <div class="_pdt-24px _pdbt-48px">

    <div class="_fs-2 _fw-600 _lh-200pct _mgbt-16px">
      <a href="#getting-start" class="bio-link -primary"><strong>#</strong></a> การใช้งานเบื้องต้น
    </div>

    <div class="_fs-4 _fw-600 _lh-200pct _mgbt-16px">
      ใช้งาน Biomatic อย่างไร ?
    </div>



    <hr class="_opct-30 _mgbt-32px">

    <div class="_dp-f _jtfct-spbtw">
      <div>
        <h6 class="_mgbt-4px">หัวข้อก่อนหน้า</h6>
        <router-link :to="{ name: 'Installation' }" class="bio-link -fancy">
          <i class="fa fa-long-arrow-left _fs-6"></i>&nbsp;&nbsp;วิธีติดตั้ง
        </router-link>
      </div>
      <!-- <div>
        <h6 class="_mgbt-4px">หัวข้อต่อไป</h6>
        <router-link :to="{ name: 'GettingStart' }" class="bio-link -fancy">
          เริ่มต้นใช้งาน &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-6"></i>
        </router-link>
      </div> -->
    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'GettingStart',

  mounted () {
    Prism.highlightAll()
  }
}
</script>

