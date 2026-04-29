import { describe, it, expect } from 'vitest'

describe('Smoke test', () => {
  it('тестовий раннер працює', () => {
    expect(1 + 1).toBe(2)
  })

  it('рядки працюють', () => {
    expect('hello').toBe('hello')
  })

  it('масиви працюють', () => {
    expect([1, 2, 3]).toHaveLength(3)
  })
})
