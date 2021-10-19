import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack('Doritos', 1.00, 0),
    new Snack('Oreos', .50, 0)
  ]
  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
