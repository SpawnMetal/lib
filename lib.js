// Константы для сравнения значений
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}

/**
 * Меняет значения передаваемого в функцию массива `arr` по индексам `a` и `b`
 * @param {array} arr исходный массив
 * @param {*} a индекс массива
 * @param {*} b индекс массива
 */
function swap(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

/**
 * Сравнивает передаваемые значения
 * @param {string | number} a сравниваемое значение
 * @param {string | number} b сравниваемое значение
 * @returns {number} значение сравнения
 */
function defaultCompare(a, b) {
  if (a === b) return 0
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

module.exports = {
  Compare,
  swap,
  defaultCompare,
}
