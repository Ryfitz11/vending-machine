import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack('Doritos', 1.00, 0),
    new Snack('Oreos', .50, 0),
    new Snack('Twix', .75, 0),
    new Snack('Takis', 4.25, 0),
    new Snack('Pirate Booty', 2.00, 0),
    new Snack('Corn nuts', .75, 0),
    new Snack('Chips', 1.00, 0),
    new Snack('Cookies', .50, 0)
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
