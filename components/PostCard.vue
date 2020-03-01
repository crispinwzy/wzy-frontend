<template>
  <b-row no-gutters class="post-card ">
    <b-col class="post-image p-2 p-sm-0" cols="12" sm="5">
      <div
        class="image-container"
        :style="{ backgroundImage: 'url(' + post.cover + ')' }"
      >
        <!-- <img :src="post.post_cover_image"> -->
      </div>
    </b-col>
    <b-col class="post-text text-center text-sm-left " cols="12" sm="7">
      <span class="category">{{ post.category }}</span>
      <router-link :to="'/post/' + post.title">
        <h3 class="title">{{ post.title }}</h3>
      </router-link>
      <div class="other">
        <span>{{ $moment(post.created_time).format('MMMM D, YYYY') }}</span>
        <!-- <span>{{post.post_views}} views</span> -->
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.post-card {
  text-align: left;
  margin-bottom: 15px;
  border-bottom: 1px solid #000000;
  .post-image {
    margin-bottom: 10px;
    .image-container {
      // 固定高宽比例2/3
      width: 100%;
      height: 0;
      padding-bottom: 66.666%;
      overflow: hidden;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      // img {
      //   width: 100%;
      // }
    }
  }
  .post-text {
    display: flex;
    flex-direction: column;
    padding: 0 14px;
    margin-bottom: 10px;

    .category {
      font-weight: 800;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 20px;
      font-size: 12px;
    }
    .title {
      // text-transform: capitalize;
      margin-bottom: 10px;
      font-style: italic;
      font-family: 'Noto Serif', Helvetica, Tahoma, Arial, 'Noto Serif SC',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', serif;
      &:hover {
        opacity: 0.5;
      }
    }
    .other {
      font-family: 'Noto Sans', 'Noto Sans SC', Helvetica, Tahoma, Arial,
        sans-serif;
      color: #333333;
      font-size: 0.875rem;
      span {
        padding-right: 12px;
        margin-right: 12px;
      }
      span:not(:last-child) {
        border-right: 1px solid #444444;
      }
    }
  }
}
</style>
