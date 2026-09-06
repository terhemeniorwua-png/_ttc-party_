import { initialData } from "./seedData";

export const getStorageItem = (key) => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(key);
  if (!data) {
    if (initialData[key.replace("ttc_", "")]) {
      const seed = initialData[key.replace("ttc_", "")];
      localStorage.setItem(key, JSON.stringify(seed));
      return seed;
    }
    return [];
  }
  return JSON.parse(data);
};

export const setStorageItem = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("storage_updated"));
  }
};

export const addItem = (key, item) => {
  const current = getStorageItem(key);
  const updated = [item, ...current];
  setStorageItem(key, updated);
  return updated;
};

export const removeItem = (key, id) => {
  const current = getStorageItem(key);
  const updated = current.filter((i) => i.id !== id);
  setStorageItem(key, updated);
  return updated;
};