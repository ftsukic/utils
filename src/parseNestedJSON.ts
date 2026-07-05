/**
 * 递归解析嵌套 JSON 字符串
 */
export function parseNestedJSON(value: unknown): unknown {
  if (typeof value === 'string') {
    try {
      return parseNestedJSON(JSON.parse(value))
    } catch {
      return value
    }
  }

  if (Array.isArray(value)) {
    return value.map(parseNestedJSON)
  }

  if (value && typeof value === 'object') {
    return Object.entries(value).reduce<Record<string, unknown>>(
      (next, [key, item]) => {
        next[key] = parseNestedJSON(item)
        return next
      },
      {},
    )
  }

  return value
}
