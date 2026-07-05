/**
 * 利用 canvas 压缩图片
 */
export async function compressImage(image: HTMLImageElement, mw: number) {
  let { width, height } = image
  const scale = width / height

  if (mw && width > mw) {
    width = mw
    height = width / scale
  }

  const canvas = document.createElement('canvas')

  const ctx = canvas.getContext('2d')!
  Object.assign(canvas, { width, height })
  ctx.drawImage(image, 0, 0, width, height)

  return canvas
}
