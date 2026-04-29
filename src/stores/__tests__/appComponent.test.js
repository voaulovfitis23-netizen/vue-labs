import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { usePostsStore } from '../postsStore'
import App from '../../App.vue'

describe('App component UI states', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.restoreAllMocks()
  })

  it('показує "Завантаження..." коли isLoading=true', async () => {
    const wrapper = mount(App, {
      global: { plugins: [createPinia()] }
    })
    const store = usePostsStore()
    store.isLoading = true
    store.items = []
    store.error = null
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Завантаження')
  })

  it('показує помилку коли error не порожня', async () => {
    const wrapper = mount(App, {
      global: { plugins: [createPinia()] }
    })
    const store = usePostsStore()
    store.isLoading = false
    store.error = 'Щось пішло не так'
    store.items = []
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Щось пішло не так')
  })

  it('показує "Немає даних" коли список порожній', async () => {
    const wrapper = mount(App, {
      global: { plugins: [createPinia()] }
    })
    const store = usePostsStore()
    store.isLoading = false
    store.error = null
    store.items = []
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Немає даних')
  })

  it('показує список коли items.length > 0', async () => {
    const wrapper = mount(App, {
      global: { plugins: [createPinia()] }
    })
    const store = usePostsStore()
    store.isLoading = false
    store.error = null
    store.items = [
      { id: 1, title: 'test post', body: 'body text' }
    ]
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('test post')
  })
})