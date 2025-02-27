// Inspireret af denne tråd: https://stackoverflow.com/questions/54143107/string-search-with-all-fields-of-array-of-objects
export function findValuesInObject(object, value) {
  value = String(value).toLowerCase()

  return Object.entries(object).some((entry) =>
    String(entry[1]).toLowerCase().includes(value)
  )
}
