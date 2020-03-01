<template>
  <b-container fluid class="post-page">
    <Brand />
    <b-row align-h="center">
      <b-col cols="12" md="10" class="mb-4">
        <SectionHeader type="start" title="ARTICLE" />
        <!-- 封面图 -->

        <!-- 标题+info -->
        <article>
          <header>
            <div class="post-title">
              <h1>{{ post.title }}</h1>
            </div>
            <div class="post-info">
              <span>
                {{ $moment(post.created_time).format('MMMM DD, YYYY') }}
              </span>
              |
              <span>by Criss</span>
            </div>
          </header>
          <!-- 文章主体 -->
          <div class="post-content">
            <!-- <div class="image-container" :style="{ backgroundImage: 'url(' + post.post_cover_image + ')' }">   </div> -->
            <section v-html="post.content">
              content here
            </section>
          </div>
        </article>
        <div>
          <p v-if="msg">{{ msg }}</p>
        </div>
      </b-col>

      <!-- 可扩展为aside -->
      <!-- <b-col cols="12" lg="3">
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import Brand from '@/components/Brand.vue'
import Posts from '@/API/posts'

export default {
  layout: 'blog',
  components: {
    SectionHeader,
    Brand
  },
  data() {
    return {
      post: {
        title: '',
        created_time: '',
        content: ''
      },
      loading: false,
      msg: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.fetchPost()
    },
    fetchPost() {
      this.loading = true
      Posts(this.$axios)
        .get(this.$route.params.title)
        .then((data) => {
          this.post = data
        })
        .catch((error) => (this.msg = error.response.data.msg))
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  text-align: left;
  letter-spacing: 0px;
  .image-container {
    width: 100%;
    height: 0;
    padding-bottom: 50%;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  header {
    margin-bottom: 35px;
    .post-title {
      text-transform: capitalize;
      margin-bottom: 10px;
      font-style: italic;
      font-family: 'Noto Serif', Helvetica, Tahoma, Arial, 'Noto Serif SC',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', serif;
    }
    .post-info {
      font-size: 14px;
      font-family: 'Noto Sans', Helvetica, Tahoma, Arial, 'Noto Sans SC',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑',
        sans-serif;
    }
    .post-cover-image {
      .image-container {
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
  .post-content {
    // font-size: 16px;
    font-family: 'Noto Sans', Helvetica, Tahoma, Arial, 'Noto Sans SC',
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑',
      sans-serif;
  }
}
</style>
