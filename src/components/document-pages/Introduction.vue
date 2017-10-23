<template>
  <div class="_pdt-24px _pdbt-48px">

    <div class="_fs-2 _fw-600 _lh-200pct _mgbt-16px">
      <a href="#getting-start" class="bio-link -primary"><strong>#</strong></a> เริ่มต้นใช้งาน
    </div>

    <div class="_fs-4 _fw-600 _lh-200pct _mgbt-16px">
      ทำความรู้จักกันก่อน
    </div>

    <p class="_mgbt-48px _fs-6">
      <strong>Biomatic</strong> เป็น CSS Framework ที่สร้างขึ้นมาโดยคำนึงถึงความยืดหยุ่น และความสะดวกในการใช้งานเป็นหลัก
      เหมาะสำหรับผู้ที่ต้องการจัดการ User Interface อย่างละเอียด รวดเร็ว และสนุก!
    </p>

    <p class="_fs-4 _fw-600 _lh-200pct _mgbt-16px">
      ใครเหมาะสำหรับ Biomatic ?
    </p>
    <p class="_mgbt-32px _fs-6">
      <strong>Biomatic</strong> เหมาะสำหรับ Web Developer ที่มีความเข้าใจในพื้นฐานเรื่อง Style อยู่บ้าง
      หรือผู้ที่สนใจในเรื่องของ Atomic CSS Methodologies เนื่องจาก Framework จะโฟกัสไปที่ Atomic CSS เป็นหลัก
      ถ้าคุณมีความเข้าใจในพื้นฐานเรื่อง Style คุณจะมีความคล่องตัวในการทำงานด้วย Framework สูงมาก
    </p>
    <p class="_mgbt-48px _fs-6">
      นอกจากนี้ Biomatic ยังได้จัดเตรียม Components พื้นฐานที่จำเป็นในการทำ User Interface ของเว็บสมัยใหม่ไว้ให้คุณใช้งาน
      รวมไปถึงเรื่องของการจัดการ Layout ที่ใช้งานได้ง่าย และไม่วุ่นวาย
    </p>

    <p class="_fs-4 _fw-600 _lh-200pct _mgbt-16px">
      ส่วนประกอบของ Biomatic
    </p>
    <p class="_mgbt-8px _fs-5">
      <strong>Class ของ Biomatic แบ่งออกเป็น 4 ประเภท</strong>
    </p>
    <p class="_mgbt-8px _fs-6">
      &nbsp;&nbsp;&nbsp;&nbsp;• <a href="#" class="bio-link -fancy">Layout Class</a> – สำหรับจัดการ <a class="bio-link" href="#">Responsive Grid</a>, และ <a class="bio-link" href="#">Container ต่างๆ</a><br>
    </p>
    <p class="_mgbt-8px _fs-6">
      &nbsp;&nbsp;&nbsp;&nbsp;• <a href="#" class="bio-link -fancy">Component Class</a> – สำหรับแสดงผล User Interface ของ Components ต่างๆ เช่น <a class="bio-link" href="#">Button</a>, <a class="bio-link" href="#">Breadcrumb</a>, <a class="bio-link" href="#">Card</a><br>
    </p>
    <p class="_mgbt-8px _fs-6">
      &nbsp;&nbsp;&nbsp;&nbsp;• <a href="#" class="bio-link -fancy">Atomic Class</a> – สำหรับใช้ประกอบเพื่อสร้างเป็น User Interface ที่ต้องการ หรือใช้เพื่อเก็บรายละเอียด Element <br>
    </p>
    <p class="_mgbt-32px _fs-6">
      &nbsp;&nbsp;&nbsp;&nbsp;• <a href="#" class="bio-link -fancy">Utility Class</a> – สำหรับใช้เพิ่มพฤติกรรมบางอย่างที่มีความซับซ้อนให้ Element เช่น Animation, Hover State
    </p>
    <p class="_mgbt-32px _fs-6">
      ปัจจุบัน Biomatic จะ Build รวม Class ทั้ง 4 ประเภทนี้ไว้เป็นไฟล์ CSS เพียงไฟล์เดียว เพื่อความสะดวกในการติดตั้งและใช้งาน ตัวเลือกอื่นจะเพิ่มมาในภายหลัง
    </p>
    <hr class="_opct-30 _mgbt-32px">

    <div class="_dp-f _jtfct-fe">
      <div>
        <h6 class="_mgbt-8px">หัวข้อต่อไป</h6>
        <router-link :to="{ name: 'Installation' }" class="bio-link -fancy _pd-8px _bdrd-2px">
          การติดตั้ง &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-6"></i>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Introduction',

  mounted () {
    Prism.highlightAll()
  }
}
</script>

