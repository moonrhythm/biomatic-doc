<template>
  <div class="_pdv-48px">

    <div class="_fs-2 _fw-600 _lh-150pct _mgbt-64px">
      <a href="#getting-start" class="bio-link -primary"><strong>#</strong></a> เกี่ยวกับ Biomatic
    </div>

    <div class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
      สวัสดี, ยินดีที่ได้รู้จัก &nbsp;🎉
    </div>

    <p class="_mgbt-32px _fs-5">
      <strong>Biomatic</strong> เป็น CSS Framework ที่สร้างขึ้นมาโดยคำนึงถึงความยืดหยุ่น
      และความสะดวกในการใช้งานเป็นหลัก
      เหมาะสำหรับผู้ที่ต้องการจัดการ User Interface อย่างละเอียด รวดเร็ว และสนุก!
    </p>
    <p class="_mgbt-64px _fs-5">
      Biomatic จะโฟกัสที่ไปที่การใช้ Atomic Class เพื่อสร้างชุดของ Style
      ที่คุณต้องการเป็นหลัก หรือใช้งานควบคู่ไปกับ Component Class อื่นๆ เพื่อสร้างผลลัพธ์ที่คุณต้องการ
    </p>

    <p class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
      Biomatic เหมาะสำหรับใคร &nbsp;🤔
    </p>
    <p class="_mgbt-32px _fs-5">
      Biomatic เหมาะสำหรับผู้ที่มีความเข้าใจในพื้นฐานเรื่อง CSS หรือ
      ผู้ที่สนใจเรื่อง Atomic CSS Methodologies เนื่องจาก Biomatic โฟกัสที่ Atomic CSS เป็นหลัก
      ถ้าคุณมีความเข้าใจในพื้นฐานเรื่อง CSS คุณจะมีความคล่องตัวในการทำงานสูงมาก 🔥
    </p>
    <p class="_mgbt-64px _fs-5">
      นอกจากนี้ Biomatic ได้จัดเตรียม Components พื้นฐานที่จำเป็นไว้ให้คุณใช้งาน
      รวมไปถึงเรื่องของการจัดการ Layout ที่ใช้งานได้ง่าย และไม่ซับซ้อน
    </p>

    <p class="_fs-3 _fw-600 _lh-150pct _mgbt-16px">
      ส่วนประกอบของ Biomatic &nbsp;😍
    </p>
    <p class="_mgbt-8px _fs-5">
      <strong>Biomatic แบ่งออกได้เป็น 4 ส่วน</strong>
    </p>
    <p class="_mgbt-8px _fs-5">
      &nbsp;&nbsp;&nbsp;&nbsp;• <strong>Atomic Class</strong> – ใช้กำหนด Style ให้ HTML Element และใช้ร่วมกับ Class อื่นๆ<br>
    </p>
    <p class="_mgbt-8px _fs-5">
      &nbsp;&nbsp;&nbsp;&nbsp;• <strong>Component Class</strong> – ใช้แสดงผล Components พื้นฐานต่างๆ เช่น Button, Breadcrumb หรือ Card<br>
    </p>
    <p class="_mgbt-8px _fs-5">
      &nbsp;&nbsp;&nbsp;&nbsp;• <strong>Layout Class</strong> –
      ใช้จัดการ Responsive Grid, และ Container ต่างๆ
    </p>
    <p class="_mgbt-64px _fs-5">
      &nbsp;&nbsp;&nbsp;&nbsp;• <strong>Utility Class</strong> – ใช้เพิ่มพฤติกรรมที่มีความซับซ้อนให้ HTML Element เช่น Animation
    </p>
    <p class="_mgbt-32px _fs-5">
      ปัจจุบัน Biomatic ทำการ Build รวม Class ทั้งหมดไว้เป็น Minified Complied CSS เพียงไฟล์เดียว
      เพื่อความสะดวกในการติดตั้งและใช้งาน ตัวเลือกอื่นๆ จะถูกเพิ่มเติมในภายหลัง 🙇
    </p>

    <hr class="_opct-30 _mgbt-32px">

    <div class="_dp-f _jtfct-fe">
      <div>
        <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
        <router-link :to="{ name: 'Installation' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
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

