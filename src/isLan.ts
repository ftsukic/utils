/**
 * 判断 ip 是否是局域网 ip，仅支持 ipv4
 * @param ip ipv4 地址
 */
export function isLan(ip: string) {
  ip = ip.toLocaleLowerCase()
  if (ip === 'localhost') {
    return true
  }
  if (ip === '') {
    return false
  }
  let v = 0
  const aNum = ip.split('.')
  if (aNum.length !== 4) {
    return false
  }

  v += parseInt(aNum[0], 10) << 24

  v += parseInt(aNum[1], 10) << 16

  v += parseInt(aNum[2], 10) << 8

  v += parseInt(aNum[3], 10) << 0

  v = (v >> 16) & 0xffff
  return (
    v >> 8 === 0x7f ||
    v >> 8 === 0xa ||
    v === 0xc0a8 ||
    (v >= 0xac10 && v <= 0xac1f)
  )
}
