import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 10,
    query: ''
  }),
  getters: {
    filteredItems: (state) => {
      if (!state.query.trim()) return state.items
      return state.items.filter(item =>
        item.title.toLowerCase().includes(state.query.toLowerCase())
      )
    }
  },
  actions: {
    async fetchItems() {
      if (this.abortController) this.abortController.abort()
      this.abortController = new AbortController()
      this.isLoading = true
      this.error = null
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=${this.limit}`,
          { signal: this.abortController.signal }
        )
        if (!response.ok) throw new Error(`HTTP помилка: ${response.status}`)
        this.items = await response.json()
      } catch (e) {
        if (e.name !== 'AbortError') {
          this.error = e.message
          this.items = []
        }
      } finally {
        this.isLoading = false
      }
    }
  }
})