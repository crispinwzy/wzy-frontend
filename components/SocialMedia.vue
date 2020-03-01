<template>
  <div class="social-media" style="font-size: 1rem;">
    <a id="wx" class="has-qrcode" href="javascript:void(0);">
      <font-awesome-icon :icon="['fab', 'weixin']" size="lg" />
      <div class="qrcode">
        <img
          src="@/assets/images/qrcode-wx.jpg"
          style="width:100%;"
          alt="wx_qrcode"
        />
      </div>
    </a>

    <!-- <a>
      <font-awesome-icon :icon="['fab', 'telegram-plane']" size="lg" />
    </a> -->

    <a id="ig" href="https://instagram.com/wuzheyun" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
      <!-- <div class="qrcode">
        <img
          src="../assets/ig_qrcode.jpg"
          style="width:100%;"
          alt="ig_qrcode"
        />
      </div> -->
    </a>

    <a href="https://github.com/crisswzy/" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" size="lg" />
    </a>

    <a href="https://www.pinterest.com/wuzheyun/" target="_blank">
      <font-awesome-icon :icon="['fab', 'pinterest']" size="lg" />
    </a>

    <a href="https://twitter.com/wuzheyun" target="_blank">
      <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.social-media {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  a {
    margin: 0 15px;
    color: #222222;
    img {
      max-width: 200px;
    }
    &:hover {
      svg {
        opacity: 0.6;
      }
    }
  }
  .has-qrcode {
    .qrcode {
      // 初始不可见
      opacity: 0;
      visibility: hidden;
      transition: all 0.35s ease-out;
      // 大小和位置
      width: 330px;
      position: absolute;
      top: 100%;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 0 auto;
    }
    &:hover {
      .qrcode {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
