import { ProxyState } from "../AppState.js"
import { snackService } from "../Services/SnackService.js"
// update screen (draw), call the server to change appstate


export class SnackController {
  constructor() {
    _draw()
    ProxyState.on('money', _draw)
    ProxyState.on('snacks', _draw)
  }
  buySnack(snack) {
    snackService.buySnack(snack)
  }
  addMoney(quarters) {
    snackService.addMoney(quarters)
  }
}
function _draw() {
  document.getElementById('money').innerText = `$${ProxyState.money}`
  let template = ""
  ProxyState.snacks.forEach(s => template += s.snackTemplate)

  document.getElementById('snacks').innerHTML = template
}