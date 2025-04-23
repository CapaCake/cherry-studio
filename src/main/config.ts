import { app } from 'electron'

import { getDataPath } from './utils'
import { isLinux } from './constant'

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  app.setPath('userData', app.getPath('userData') + 'Dev')
}

export const DATA_PATH = getDataPath()

export const titleBarOverlayDark = {
  height: 40,
  color: isLinux ? 'rgb(31, 31, 31)' : 'rgba(0,0,0,0)',
  symbolColor: '#ffffff'
}

export const titleBarOverlayLight = {
  height: 40,
  color: 'rgba(255,255,255,0)',
  symbolColor: '#000000'
}
