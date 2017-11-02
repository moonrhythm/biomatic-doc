<template>
    <div class="_pdv-48px">

      <div class="_fs-2 _fw-600 _lh-150pct _mgbt-16px">
        <a href="#layout-container" class="bio-link -primary"><strong>#</strong></a> Container
      </div>

      <p class="_mgbt-64px _fs-5">
        Biomatic ได้สร้าง Responsive Container ให้คุณได้ใช้งาน
      </p>
      <p class="_mgbt-8px _fs-5">
        <strong>Class:</strong>
      </p>
      <ul class="_mgbt-64px _fs-5 _lh-175pct _pdl-16px">
        <li>• <code class="_cl-accent">.lo-container</code></li>
      </ul>

      <p class="_mgbt-8px _fs-5">
        <strong>Option:</strong>
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
                <code class="_cl-accent">.lo-container</code>
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

      <hr class="_opct-30 _mgbt-32px">

      <div class="_dp-f _jtfct-spbtw">
        <div>
          <h5 class="_mgbt-16px">ก่อนหน้า</h5>
          <router-link :to="{ name: 'ComponentTooltip' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            <i class="fa fa-long-arrow-left _fs-5"></i>&nbsp;&nbsp;Tooltip
          </router-link>
        </div>
        <div>
          <h5 class="_mgbt-16px _tal-r">ต่อไป</h5>
          <router-link :to="{ name: 'LayoutResponsiveGrid' }" class="bio-link -fancy _pd-8px _bdrd-2px _fs-5">
            Responsive Grid &nbsp;&nbsp;<i class="fa fa-long-arrow-right _fs-5"></i>
          </router-link>
        </div>
      </div>

    </div>


</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'LayoutContainer',

  mounted () {
    Prism.highlightAll()
  }
}
</script>
