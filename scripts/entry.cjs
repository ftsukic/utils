const path = require('path')
const { requireFilePath, rc, rt } = require('./utils.cjs')

const ENTRY_MODULES = new Set([
  'index',
  'native',
])

const NATIVE_EXCLUDES = new Set([
  // DOM / Browser
  'canvasToBlob',
  'chooseMedia',
  'compressImage',
  'downloadFile',
  'exitFullscreen',
  'getImageInfo',
  'getScrollTop',
  'getVideoInfo',
  'insertLink',
  'insertScript',
  'insertStyle',
  'requestFullScreen',
  'scrollToTop',
  'setScrollTop',

  // Browser environment detection
  'isIE',
  'isWeChat',
  'isWeChatMiniProgram',
  'isWindow',

  // Browser UA implementation，不适合 RN
  'isAndroid',
  'isIOS',
  'isMobile',

  // Browser interaction
  'makePhoneCall',
  'mousewheel',
  'sounds',

  // Browser storage
  'storage',

  // 当前依赖 atob，暂时不进入 RN
  'base64ToBlob',

  // 无参调用时访问 window.location，不适合 RN
  'parseQuery',
])

function getModules() {
  return requireFilePath(rc(), true, /\.ts$/)
    .sort((a, b) => {
      const left = a.replace(/\\/g, '/')
      const right = b.replace(/\\/g, '/')

      return left < right ? -1 : left > right ? 1 : 0
    })
    .map((item) => {
      const relative = item.replace(`${rc()}${path.sep}`, '')
      const { dir, name } = path.parse(relative)

      if (!dir && ENTRY_MODULES.has(name)) {
        return ''
      }

      if (dir) {
        return path.parse(dir).name
      }

      return name
    })
    .filter(Boolean)
    .reduce((result, item) => {
      if (!result.includes(item)) {
        result.push(item)
      }

      return result
    }, [])
}

const modules = getModules()

const nativeModules = modules.filter(
  (moduleName) => !NATIVE_EXCLUDES.has(moduleName),
)

module.exports = (plop) => {
  plop.setGenerator('entry', {
    description: '创建入口文件',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: rc('index.ts'),
        templateFile: rt('entry.hbs'),
        data: {
          modules,
        },
      },
      {
        type: 'add',
        path: rc('native.ts'),
        templateFile: rt('entry.hbs'),
        data: {
          modules: nativeModules,
        },
      },
    ],
  })
}
