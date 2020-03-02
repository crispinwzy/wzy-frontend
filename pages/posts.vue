<template>
  <b-container fluid class="posts-page">
    <Brand />
    <b-row>
      <b-col class="main mb-5" cols="12" md="8">
        <SectionHeader type="start" :title="$t('all posts')" class="mb-5" />
        <div class="main-body">
          <PostCard v-for="post in postsList" :key="post.id" :post="post" />
        </div>
      </b-col>

      <b-col class="aside mb-5" cols="12" md="4">
        <SectionHeader type="center" :title="$t('categories')" />
        <div class="aside-body">
          TO BE UPDATED...
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import PostCard from '@/components/PostCard.vue'
import Brand from '@/components/Brand.vue'
import Posts from '@/api/posts'

export default {
  layout: 'blog',
  components: {
    SectionHeader,
    PostCard,
    Brand
  },
  data() {
    return {
      postsList: [],
      loading: false,
      error: null
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

<style lang="scss" scoped></style>
