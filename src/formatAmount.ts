/**
 * 格式化金额，默认元
 */
export function formatAmount(s: string | number, radix = 1) {
  const money = parseFloat(s?.toString())
  if (money) {
    s = `${(money / radix).toFixed(2)}`
    const l = s.split('.')[0].split('').reverse()
    const r = s.split('.')[1]
    let t = ''
    l.forEach((_, key) => {
      t += l[key] + ((key + 1) % 3 === 0 && key + 1 !== l.length ? ',' : '')
    })
    return `${t.split('').reverse().join('')}.${r}`
  }
  if (+s === 0) {
    return '0.00'
  }
  return '---'
}
