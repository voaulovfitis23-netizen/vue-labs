import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePostsStore } from '../postsStore'

describe('Race condition bug', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.restoreAllMocks()
  })

  it('AbortController скасовує попередній запит при швидкому перемиканні', async () => {
    let callCount = 0

    global.fetch = vi.fn().mockImplementation((_url, options) => {
      callCount++
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          resolve({
            ok: true,
            json: async () => [{ id: callCount, title: `page ${callCount}`, body: '' }]
          })
        }, 100)

        if (options?.signal) {
          options.signal.addEventListener('abort', () => {
            clearTimeout(timer)
            reject(new DOMException('Aborted', 'AbortError'))
          })
        }
      })
    })

    const store = usePostsStore()

    // Швидко викликаємо двічі — перший має бути скасований
    const first = store.fetchItems()
    store.page = 2
    const second = store.fetchItems()

    await Promise.allSettled([first, second])

    // Тільки останній результат має залишитись
    expect(store.items[0].title).toBe('page 2')
    expect(store.error).toBeNull()
  })

  it('після AbortError isLoading скидається в false', async () => {
    global.fetch = vi.fn().mockRejectedValue(
      new DOMException('Aborted', 'AbortError')
    )

    const store = usePostsStore()
    await store.fetchItems()

    expect(store.isLoading).toBe(false)
    expect(store.error).toBeNull()
  })
})