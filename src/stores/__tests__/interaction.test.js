import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { usePostsStore } from '../postsStore'
import App from '../../App.vue'

describe('Interaction tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.restoreAllMocks()
  })

  it('кнопка "Наступна" збільшує page і викликає fetchItems', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => Array(10).fill({ id: 1, title: 'post', body: '' })
    })

    const pinia = createPinia()
    const wrapper = mount(App, {
      global: { plugins: [pinia] }
    })
    const store = usePostsStore()
    store.isLoading = false
    store.items = Array(10).fill({ id: 1, title: 'post', body: '' })
    store.page = 1

    const spy = vi.spyOn(store, 'fetchItems').mockResolvedValue()
    await wrapper.vm.$nextTick()

    const buttons = wrapper.findAll('button')
    const nextBtn = buttons.find(b => b.text().includes('Наступна'))
    await nextBtn.trigger('click')

    expect(store.page).toBe(2)
    expect(spy).toHaveBeenCalled()
  })

  it('кнопка "Попередня" зменшує page і викликає fetchItems', async () => {
    const pinia = createPinia()
    const wrapper = mount(App, {
      global: { plugins: [pinia] }
    })
    const store = usePostsStore()
    store.isLoading = false
    store.items = Array(10).fill({ id: 1, title: 'post', body: '' })
    store.page = 3

    const spy = vi.spyOn(store, 'fetchItems').mockResolvedValue()
    await wrapper.vm.$nextTick()

    const buttons = wrapper.findAll('button')
    const prevBtn = buttons.find(b => b.text().includes('Попередня'))
    await prevBtn.trigger('click')

    expect(store.page).toBe(2)
    expect(spy).toHaveBeenCalled()
  })

  it('введення в пошук змінює store.query', async () => {
    const pinia = createPinia()
    const wrapper = mount(App, {
      global: { plugins: [pinia] }
    })
    const store = usePostsStore()
    store.isLoading = false
    store.items = []
    await wrapper.vm.$nextTick()

    const input = wrapper.find('input.search')
    await input.setValue('vue')

    expect(store.query).toBe('vue')
  })
})