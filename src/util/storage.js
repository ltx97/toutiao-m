/**
 *  封裝本地存儲操作模塊
 */

/**
 * 存储数据
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key) => {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

/**
 * 删除数据
 */
export const deleteItem = (key) => {
  window.localStorage.deleteItem(key)
}
