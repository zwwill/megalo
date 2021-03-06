import { updateVnodeToMP } from '../index'

export function renderIf (
  ...args
) {
  for (let i = 0, len = args.length; i < len; i += 2) {
    const cond = args[i]
    const _hid = args[i + 1]
    const cloneVnode = {
      context: this,
      data: {
        attrs: { _hid }
      }
    }
    updateVnodeToMP(cloneVnode, '_if', cond)
  }
}
