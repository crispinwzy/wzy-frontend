<template>
  <nav>
    <div class="nav-wrapper">
      <!-- 左上角LOGO -->
      <a class="nav-logo" href="http://www.wuzheyun.cn">
        <img src="@/assets/logo.png" alt="logo" />
      </a>
      <!-- 移动端的toggle -->
      <div class="nav-toggler">
        <input type="checkbox" />
        <span id="s1"></span>
        <span id="s2"></span>
        <span id="s3"></span>
        <ul class="nav-menu">
          <li class="nav-menu-item">
            <nuxt-link :to="localePath('/')">
              {{ $t('home') }}
            </nuxt-link>
          </li>
          <li class="nav-menu-item">
            <nuxt-link :to="localePath('/posts')">
              {{ $t('posts') }}
            </nuxt-link>
          </li>
          <li class="nav-menu-item">
            <nuxt-link :to="localePath('/about')">
              {{ $t('about me') }}
            </nuxt-link>
          </li>
          <li class="nav-menu-item has-sub-menu">
            <a href="javascript:void(0);"
              ><font-awesome-icon :icon="['fas', 'globe-asia']" size="lg" />
              +</a
            >
            <ul class="sub-menu">
              <li class="sub-menu-item">
                <nuxt-link :to="switchLocalePath('zh-cn')">
                  简体中文
                </nuxt-link>
              </li>
              <li class="sub-menu-item">
                <nuxt-link :to="switchLocalePath('en')">
                  ENGLISH
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 导航菜单 -->
      <div class="nav-collapse">
        <ul class="nav-menu">
          <li class="nav-menu-item">
            <nuxt-link :to="localePath('/')">
              {{ $t('home') }}
            </nuxt-link>
          </li>
          <li class="nav-menu-item">
            <nuxt-link :to="localePath('/posts')">
              {{ $t('posts') }}
            </nuxt-link>
          </li>
          <li class="nav-menu-item">
            <nuxt-link :to="localePath('/about')">
              {{ $t('about me') }}
            </nuxt-link>
          </li>
          <li class="nav-menu-item has-sub-menu">
            <a href="javascript:void(0);"
              ><font-awesome-icon :icon="['fas', 'globe-asia']" size="lg" />
              +</a
            >
            <ul class="sub-menu">
              <li class="sub-menu-item">
                <nuxt-link :to="switchLocalePath('zh-cn')">
                  简体中文
                </nuxt-link>
              </li>
              <li class="sub-menu-item">
                <nuxt-link :to="switchLocalePath('en')">
                  ENGLISH
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #000000;
  height: 50px;
  font-family: 'Montserrat', 'PingFang SC';
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 800;
  a {
    text-decoration: none;
    color: #ffffff;
    display: block;
    line-height: 50px;
    &:hover {
      color: rgb(185, 185, 185);
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .nav-wrapper {
    height: 100%;
    // 居中
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1140px;
    // 子元素布局
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    // mobile first: resolution < 767px
    @media (max-width: 767px) {
      .nav-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 45px;
          height: 45px;
        }
      }
      // 显示toggler
      .nav-toggler {
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
        input {
          display: block;
          width: 100%;
          height: 100%;

          position: absolute;

          cursor: pointer;

          opacity: 0; /* hide this */
          z-index: 2; /* and place it over the hamburger */

          -webkit-touch-callout: none;

          /* 
          * Transform all the slices of hamburger
          * into a crossmark.
          */
          &:checked ~ span {
            // 所有
            opacity: 1;
            transform: rotate(-45deg) translate(0, -3px);
            background: #232323;
          }

          /*
          * But let's hide the middle one.
          */
          &:checked ~ span#s2 {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
          }

          /*
          * Ohyeah and the last one should go the other direction
          */
          &:checked ~ span#s3 {
            transform: rotate(45deg) translate(0, 3px);
          }

          &:checked ~ .nav-menu {
            transform: none;
          }
        }
        span {
          display: block;
          width: 33px;
          height: 4px;
          margin-bottom: 5px;
          position: relative;
          top: 14px;

          background: #ffffff;
          border-radius: 3px;

          z-index: 1;

          // 动画
          // transform-origin: 4px 0px;

          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
        }
        span#s1 {
          transform-origin: right top;
        }
        span#s3 {
          transform-origin: right bottom;
        }
        // mobile menu
        .nav-menu {
          // 大小和位置
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          width: 100%;
          padding-top: 70px;
          // 背景为白色
          background: #ffffff;
          // 动画效果
          transform-origin: 100% 0%;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
          transform: translate(0, -100%); // 从上方滑入
          // transform: translate(100%, 0); // 从右方滑入
          .nav-menu-item {
            a {
              font-size: 18px;
              color: #000000;
              &:hover {
                color: tomato;
              }
            }
          }
          // 对于有子目录的
          .has-sub-menu {
            // position: relative;
            .sub-menu {
              // 子目录文字和颜色
              border-top: 1px solid #f0f0f0;
              background: #ffffff;
              // 初始不可见
              opacity: 0;
              visibility: hidden;
              transition: all 0.35s ease-out;
              // 位置
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              margin: 0 auto;
              z-index: 999;
            }
            &:hover {
              .sub-menu {
                opacity: 1;
                visibility: visible;
              }
            }
          }
        }
      }
      // 隐藏PC的menu
      .nav-collapse {
        display: none;
      }
    }

    // PC when resolution >= 768px
    @media (min-width: 768px) {
      .nav-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 45px;
          height: 45px;
        }
      }
      // 隐藏toggler
      .nav-toggler {
        display: none;
      }
      // 显示PC的menu
      .nav-collapse {
        display: block;
        // pc menu
        .nav-menu {
          display: flex;
          flex-direction: row;
          .nav-menu-item {
            margin: 0 12px;
          }
          // 对于有子目录的
          .has-sub-menu {
            position: relative;
            .sub-menu {
              // 子目录文字和颜色
              text-align: left;
              background-color: #000000;
              // 初始不可见
              opacity: 0;
              visibility: hidden;
              transition: all 0.35s ease-out;
              // 位置
              position: absolute;
              top: 100%;
              right: 0;
              margin: 0 auto;
              z-index: 999;
              .sub-menu-item {
                margin-bottom: 5px;
                a {
                  line-height: 35px;
                  padding: 0 15px;
                }
              }
            }
            &:hover {
              .sub-menu {
                opacity: 1;
                visibility: visible;
              }
            }
          }
        }
      }
    }
  }
}
</style>
