import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
// changing appstate data and returning changed values



class SnackService {
  buySnack(snack) {
    let found = ProxyState.snacks.find(s => s.name == snack)
    if (ProxyState.money >= found.price) {
      ProxyState.money -= found.price
      found.quantity++
      ProxyState.snacks = ProxyState.snacks
    }
  }
  addMoney(quarters) {
    ProxyState.money += (quarters * .25)
  }
}


export const snackService = new SnackService()