import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { usePostsStore } from "../postsStore";

describe("usePostsStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.restoreAllMocks();
  });

  it("початковий стан коректний", () => {
    const store = usePostsStore();
    expect(store.items).toEqual([]);
    expect(store.isLoading).toBe(false);
    expect(store.error).toBeNull();
    expect(store.page).toBe(1);
  });

  it("fetchItems — успішне завантаження", async () => {
    const mockData = [
      { id: 1, title: "test post", body: "body 1" },
      { id: 2, title: "another post", body: "body 2" },
    ];

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const store = usePostsStore();
    await store.fetchItems();

    expect(store.items).toEqual(mockData);
    expect(store.error).toBeNull();
    expect(store.isLoading).toBe(false);
  });

  it("fetchItems — помилка мережі", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const store = usePostsStore();
    await store.fetchItems();

    expect(store.error).toBe("Network error");
    expect(store.items).toEqual([]);
    expect(store.isLoading).toBe(false);
  });

  it("fetchItems — HTTP помилка 404", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });

    const store = usePostsStore();
    await store.fetchItems();

    expect(store.error).toBe("HTTP помилка: 404");
    expect(store.items).toEqual([]);
  });

  it("getter filteredItems — без фільтру повертає всі", async () => {
    const store = usePostsStore();
    store.items = [
      { id: 1, title: "vue test", body: "" },
      { id: 2, title: "react guide", body: "" },
    ];
    store.query = "";
    expect(store.filteredItems).toHaveLength(2);
  });

  it("getter filteredItems — фільтрує по query", async () => {
    const store = usePostsStore();
    store.items = [
      { id: 1, title: "vue test", body: "" },
      { id: 2, title: "react guide", body: "" },
    ];
    store.query = "vue";
    expect(store.filteredItems).toHaveLength(1);
    expect(store.filteredItems[0].title).toBe("vue test");
  });
});
