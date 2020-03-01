export default ($axios) => ({
  list(page = 1, perPage = 15) {
    return $axios.$get('/api/posts?page=' + page + '&per_page=' + perPage)
  },
  get(title) {
    return $axios.$get('/api/posts/' + title)
  }
})
