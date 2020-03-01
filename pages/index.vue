<template>
  <b-container fluid class="home-page">
    <Brand />
    <!-- 图片轮播 -->
    <b-row no-gutters class="mb-4">
      <b-col cols="12">
        <Carousel />
      </b-col>
    </b-row>

    <!-- Features-->
    <b-row no-gutters class="features mb-5">
      <b-col class="feature-wrapper" style="margin-right:3%;">
        <a href="javascript:void(0);">
          <div class="img-container">
            <img src="@/assets/images/feature-it.jpg" alt="it" />
          </div>
          <div class="text-overlay">IT</div>
        </a>
      </b-col>
      <b-col class="feature-wrapper" style="margin-right:3%;">
        <a href="javascript:void(0);">
          <div class="img-container">
            <img src="@/assets/images/feature-coffee.jpg" alt="coffee" />
          </div>
          <div class="text-overlay">LIFE</div>
        </a>
      </b-col>
      <b-col class="feature-wrapper">
        <a href="javascript:void(0);">
          <div class="img-container">
            <img src="@/assets/images/feature-design.jpg" alt="design" />
          </div>
          <div class="text-overlay">DESIGN</div>
        </a>
      </b-col>
    </b-row>

    <!-- 主要内容 -->
    <b-row class="content">
      <b-col cols="12" md="8" class="mb-5" order="2" order-md="1">
        <!-- 主栏 -->
        <section class="main">
          <SectionHeader type="start" :title="$t('posts')" />
          <div class="main-body">
            <!-- 渲染PostCard -->
            <PostCard v-for="post in postsList" :key="post.id" :post="post" />
            <!-- '更多'按钮 -->
            <h6
              class="text-right"
              style="font-weight: 800; letter-spacing: 4px;"
            >
              <router-link to="/posts">{{ $t('more') }} >>></router-link>
            </h6>
            <!-- if loading || error -->
            <div>
              <p v-if="loading">Loading...</p>
              <p v-if="msg">{{ msg }}</p>
            </div>
          </div>
        </section>
      </b-col>

      <!-- 侧栏 -->
      <b-col cols="12" md="4" class="mb-5" order="1" order-md="2">
        <aside class="aside">
          <SectionHeader type="center" :title="$t('about me')" />
          <div class="aside-body">
            <section class="profile mb-3">
              <b-row no-gutters class="profile-card d-flex">
                <!-- 头像 -->
                <b-col
                  cols="12"
                  class="profile-avatar d-flex justify-content-center py-3"
                >
                  <div class="avatar-container">
                    <img
                      src="@/assets/images/avatar.jpg"
                      style="width:100%; height:100%;"
                      alt="avatar"
                    />
                  </div>
                </b-col>
                <!-- 名字和bio -->
                <b-col cols="12" class="profile-intro d-flex flex-column py-2">
                  <h5 class="name">{{ $t('resume.name') }}</h5>
                  <span class="bio">
                    <p v-html="$t('bio')"></p>
                  </span>
                </b-col>
                <!-- 社交媒体 -->
                <b-col cols="12 mb-2">
                  <SocialMedia />
                </b-col>
              </b-row>
              <!-- '更多'按钮 -->
              <h6
                class="text-right py-3"
                style="font-weight: 800; letter-spacing: 4px;"
              >
                <router-link to="/about">{{ $t('more') }} >>></router-link>
              </h6>
            </section>
          </div>
        </aside>
      </b-col>
    </b-row>

    <!-- EMBEDED Instagram -->
    <b-row no-gutters class="instagram mb-5">
      <b-col cols="12">
        <SectionHeader type="center" title="INSTAGRAM" />
        <!-- TO BE UPDATED... -->
        <b-row class="ig-body" no-gutters>
          <b-col cols="12" md="12" class="d-flex">
            <a
              v-for="ig in igList"
              :key="ig"
              class="image-container"
              :style="{ backgroundImage: 'url(' + ig + 'media)' }"
            >
            </a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import PostCard from '@/components/PostCard.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Brand from '@/components/Brand.vue'
import Posts from '@/api/posts'

export default {
  layout: 'blog',
  components: {
    Carousel,
    SectionHeader,
    PostCard,
    SocialMedia,
    Brand
  },
  data() {
    return {
      igList: [
        'https://www.instagram.com/p/BzCAhjaCDVy/',
        'https://www.instagram.com/p/Byv2DkuCzN7/',
        'https://www.instagram.com/p/BybKxaUiFg9/',
        'https://www.instagram.com/p/Bx8G67iCO8Y/',
        'https://www.instagram.com/p/BxTL0UGDts2/',
        'https://www.instagram.com/p/Bvuz6DWjY6z/'
      ],
      postsList: [],
      loading: false,
      msg: null
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    // $route: 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.fetchPosts()
    },
    fetchPosts() {
      this.loading = true
      Posts(this.$axios)
        .list()
        .then((data) => {
          this.postsList = data.items
        })
        .catch((error) => (this.msg = error.response.data.msg))
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  .features {
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 4px;
    .feature-wrapper {
      .img-container {
        img {
          width: 100%;
        }
      }
      .text-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // 背景
        background-color: #000;
        border: none;
        width: 60%;
        opacity: 0.85;
        // 文字
        color: #fff;
        padding: 12px 0;
      }
      &:hover {
        .text-overlay {
          opacity: 0.7;
        }
      }
    }
  }

  .instagram {
    .ig-body {
      width: 100%;
      display: flex;
      flex-direction: row;
      .image-container {
        width: 16.66%;
        height: 0;
        padding-bottom: 16.66%;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        transition: 0.5s all;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .aside {
    .aside-body {
      .profile-card {
        .profile-avatar {
          .avatar-container {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
          }
        }
        .profile-intro {
          .name {
            font-weight: 600;
          }
          .bio {
            letter-spacing: 0px;
            font-size: 16px;
            font-family: 'Noto Sans', 'Noto Sans SC';
          }
        }
      }
    }
  }
}
</style>
